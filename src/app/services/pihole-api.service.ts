import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions,
    Request,
    RequestOptionsArgs
} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { PiholeAuthService } from "./pihole-auth.service";
import { PiholeBackendService } from "./pihole-backend.service";
import {
    OvertimeData,
    TopItems,
    Query,
    Summary,
    Status,
    QueryTypes,
    ListEntry
} from "./models";

export class AuthData {
    access_token: string;
    refresh_token: string;
    csrf_token: string;
}
export class ForwardDestinations {
    [name: string]: number;
}


@Injectable()
export class PiholeApiService extends PiholeBackendService {
    constructor(private piholeAuth: PiholeAuthService, http: Http) {
        super(http);
    }

    public addDomainToList(list: string, domain: string): Observable<boolean> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({
            headers: headers,
            method: "post"
        });
        return this.request("/api/list", options);
    }
    public removeDomainFromList(list: string, domain: string): Observable<boolean> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({
            headers: headers,
            method: "delete"
        });
        return this.request("/api/list", options);
    }
    public getOvertimeData(): Observable<OvertimeData> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .get("/api/data/overtimeData", options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    public getQueries(): Observable<Query[]> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .get("/api/history?type=query", options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    public getList(list: string): Observable<ListEntry[]> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .get("/api/list", options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    public getSummary(): Observable<Summary> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .get("/api/data/summary", options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getStatus(): Observable<Status> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .get("/api/status", options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getQueryTypes(): Observable<QueryTypes> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.request("/api/data/queryTypes", options);
    }

    public getForwardDestinations(): Observable<ForwardDestinations> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.request("/api/data/forwardDestinations", options);
    }

    public getTopItems(): Observable<TopItems> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return this.request("/api/data/topItems", options);
    }

    private request(url: Request | string, requestArgs: RequestOptionsArgs): any {
        return this.http.request(url, requestArgs)
            .map(this.extractData)
            .catch(sourceError => {
                if (sourceError && sourceError.status === 401) {
                    return this.piholeAuth
                        .refreshAuthenticationToken()
                        .flatMap((authResult: AuthData) => {
                            if (authResult) {
                                // retry with new token
                                return this.http.request(url, requestArgs);
                            }
                            return Observable.throw(sourceError);
                        });
                }
                else {
                    return Observable.throw(sourceError);
                }
            });
    }
}