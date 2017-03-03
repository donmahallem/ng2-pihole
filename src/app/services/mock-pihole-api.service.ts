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

export let MockPiholeBackendService = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: function (backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
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
                    let response = new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            data: {
                                adsBlockedToday: 100,
                                dnsQueriesToday: 1000,
                                domainsBeingBlocked: 100000
                            }
                        }
                    }));
                    connection.mockRespond(response);
                } else {
                    connection.mockError(new Error("404"));
                }
            }, 500);

        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};