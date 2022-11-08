let http =require('http');

let requestListener  = function(request,responce){
    console.log(request);
    responce.writeHead(200);
    responce.end('hello world');
}

const server = http.createServer(requestListener);
server.listen(8448);