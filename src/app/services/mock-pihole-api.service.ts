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
    Summary,
    Query,
    Status,
    QueryTypes
} from "./models";

function randomChoice(arr: any[]): any {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min: number, max: number): number {
    let _min = Math.min(max, min);
    let _max = Math.max(max, min);
    return Math.round(_min + (Math.random() * (_max - _min)));
}

function randomIp() {
    let ip = "";
    if (Math.random() < 0.5) {
        for (let i = 0; i < 4; i++) {
            if (i > 0) {
                ip += ".";
            }
            ip += randomInt(1, 255);
        }
    } else {
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 8; i++) {
            if (i > 0) {
                ip += ":";
            }
            for (let j = 0; j < randomInt(1, 4); j++) {
                ip += chars.charAt(randomInt(0, chars.length - 1));
            }
        }
    }
    return ip;
}


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
                summary.dnsQueriesToday = randomInt(1000, 10000);
                summary.adsBlockedToday = randomInt(0, summary.dnsQueriesToday);
                summary.domainsBeingBlocked = randomInt(50000, 150000);
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
            } else if (connection.request.url.endsWith("/api/status") && connection.request.method === RequestMethod.Get) {
                // get parameters from post request
                let status = new Status();
                status.temperature = Math.random() * 100;
                status.status = true;
                status.loadAverage = [Math.random(), Math.random(), Math.random()];
                status.memory = Math.random();
                let response = new Response(new ResponseOptions({
                    status: 200, body: {
                        data: status
                    }
                }));
                connection.mockRespond(response);
            } else if (connection.request.url.endsWith("/api/data/queryTypes") && connection.request.method === RequestMethod.Get) {
                // get parameters from post request
                let status = new QueryTypes();
                status["A"] = Math.round(Math.random() * 10000);
                status["AAAA"] = Math.round(Math.random() * 10000);
                let response = new Response(new ResponseOptions({
                    status: 200, body: {
                        data: status
                    }
                }));
                connection.mockRespond(response);
            } else if (connection.request.url.match(/\/api\/history\??/) && connection.request.method === RequestMethod.Get) {
                // get parameters from post request
                let queries: Query[] = [];
                const DAY = 24 * 60 * 60 * 1000;
                let min = Date.now() - DAY;
                for (let i = 0; i < 10000; i++) {
                    let query = new Query();
                    query.domain = function generateRandomDomain(): string {
                        let domain = "";
                        for (let i = 0; i < randomInt(1, 3); i++) {
                            domain += "domain" + randomInt(0, 100) + ".";
                        }
                        return domain + "com";
                    }();
                    query.type = randomChoice(["A", "AAAA"]);
                    query.status = randomInt(0, 2);
                    query.client = randomIp();
                    query.timestamp = new Date(randomInt(min, min + DAY)).toISOString();
                    queries.push(query);
                }
                let response = new Response(new ResponseOptions({
                    status: 200, body: {
                        data: queries
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