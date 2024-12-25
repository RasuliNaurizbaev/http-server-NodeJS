const http = require('http');
const PORT = 5001;
const server = http.createServer((request, response) => {
    // response.write("<h1>Hello World!</h1>");
    const { statusCode } = response;
    if (statusCode !== 200) {
        response.write("Not connect to sever");
    }
    response.write("Server success connecting!")
});

server.listen(PORT, () => { console.log(`server is runnning in ${PORT}`) });