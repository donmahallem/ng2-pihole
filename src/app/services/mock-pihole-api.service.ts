import {
    Http,
    BaseRequestOptions,
    Response,
    ResponseOptions,
    RequestMethod,
    XHRBackend,
    RequestOptions
} from "@angular/http";
import {
    MockBackend,
    MockConnection
} from "@angular/http/testing";
import {
    OvertimeData,
    Summary
} from "./models";

export function mockFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    console.log("Mock Backend Setup");
    let loggedIn = false;
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            // authenticate
            if (connection.request.url.endsWith("/api/auth/login") && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());
                if (params.password === "password") {
                    let response = new Response(new ResponseOptions({ status: 200, body: {} }));
                    connection.mockRespond(response);
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error("Username or password is incorrect"));
                }
            } else if (connection.request.url.endsWith("/api/auth/introspect") && connection.request.method === RequestMethod.Get) {
                // get parameters from post request
                if (loggedIn) {
                    let response = new Response(new ResponseOptions({ status: 200, body: {} }));
                    connection.mockRespond(response);
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error("Username or password is incorrect"));
                }
            } else if (connection.request.url.endsWith("/api/data/summary") && connection.request.method === RequestMethod.Get) {
                // get parameters from post request
                let summary = new Summary();
                summary.adsBlockedToday = 100;
                summary.dnsQueriesToday = 1000;
                summary.domainsBeingBlocked = 100000;
                let response = new Response(new ResponseOptions({
                    status: 200,
                    body: {
                        data: summary
                    }
                }));
                connection.mockRespond(response);
            } else if (connection.request.url.endsWith("/api/data/overtimeData") && connection.request.method === RequestMethod.Get) {
                // get parameters from post request
                let overtimeData = new OvertimeData();
                for (let i = 0; i < 120; i++) {
                    overtimeData.queries[i] = Math.round(Math.random() * 1000);
                    overtimeData.ads[i] = Math.round(Math.random() * overtimeData.queries[i]);
                }
                let response = new Response(new ResponseOptions({
                    status: 200, body: {
                        data: overtimeData
                    }
                }));
                connection.mockRespond(response);
            } else {
                connection.mockError(new Error("404"));
            }
        }, 500);

    });

    return new Http(backend, options);
};

export let MockPiholeBackendService = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: mockFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};