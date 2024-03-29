class HTTPRequest {
    constructor() {
        this.url = null;
        this.method = 'GET'; // Default method
        this.headers = {};
        this.cookies = {};
        this.data = null;
    }

    toString() {
        return `HTTPRequest(${this.method} ${this.url}, Headers: ${JSON.stringify(this.headers)}, Cookies: ${JSON.stringify(this.cookies)}, Data: ${this.data})`;
    }

    send() {
        console.log(`Sending request to ${this.url} using method ${this.method}`);
    }
}

// Abstract class for a builder
class HTTPRequestBuilder {
    constructor() {
        if (this.constructor === HTTPRequestBuilder) {
            throw new Error("Cannot instantiate abstract class!");
        }
    }

    setURL(url) {
        this.request.url = url;
        return this;
    }

    setMethod(method) {
        this.request.method = method;
        return this;
    }

    setHeaders(headers) {
        this.request.headers = headers;
        return this;
    }

    setCookies(cookies) {
        this.request.cookies = cookies;
        return this;
    }

    setData(data) {
        this.request.data = data;
        return this;
    }

    build() {
        return this.request;
    }
}

// Concrete class for a GET request builder
class GetRequestBuilder extends HTTPRequestBuilder {
    constructor() {
        super();
        this.request = new HTTPRequest();
        this.request.method = 'GET';
    }
}

// Concrete class for a POST request builder
class PostRequestBuilder extends HTTPRequestBuilder {
    constructor() {
        super();
        this.request = new HTTPRequest();
        this.request.method = 'POST';
    }
}

// Director class to build requests (optional)
class RequestDirector {
    constructor(builder) {
        this.builder = builder;
    }

    construct(url, data = {}, headers = {}, cookies = {}) {
        return this.builder
            .setURL(url)
            .setHeaders(headers)
            .setCookies(cookies)
            .setData(data)
            .build();
    }
}

// Usage
const director = new RequestDirector(new PostRequestBuilder());
// Prompts the user to enter data
const request = director.construct('http://example.com', { name: 'John Doe', age: 42 });
console.log(request.toString()); // HTTPRequest(POST http://example.com, Headers: {}, Cookies: {}, Data: {"name":"John Doe","age":42})
request.send(); // Sends the request to the server