var http = require('http');
const { functionsIn } = require('lodash');

function startserver() {
  function server(request, response) {
    // 写请求头：状态码200，请求类型text-plain
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    // 网站内容
    response.end('Frlank社区后端服务');
    // 开启网站
    http.createServer(server).listen(9999);
  }
}
