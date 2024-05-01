export var uri; // Defining root url under variable 'uri'
if (location.hostname === "localhost") {
        uri = "http://localhost:8086";
} else if (location.hostname === "127.0.0.1") {
        uri = "http://127.0.0.1:8086";
} else {
        uri = "http://127.0.0.1:8086";
}

export const options = {
    method: 'GET', // Options: *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // Options: no-cors, *cors, same-origin
    cache: 'default', // Options: *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // Options: *include, same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
};