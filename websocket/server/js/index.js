(function(){
    const WebSocket = require('ws');

    const ws = new WebSocket.Server({
        port:3000
    },()=>{
        console.log('开启了websocket server')
    })
    
    const init = ()=>{
        ws.on("connection", handleEventConnect);
        ws.on("open", handleEventOpen);
        ws.on("error", handleEventError);
        ws.on("close", handleEventClose);
    }

    function handleEventConnect(wss){
      console.log('handleEventConnect');
      wss.on("message", handleEventMessage);
    }

    function handleEventMessage(msg){
      console.log('handleEventMessage', msg, ws.clients);
    //   ws.clients 所有的客户端连接 发送给所有连接的客户端消息
      ws.clients.forEach(c => {
          c.send(msg);
      })
    }

    function handleEventOpen(){
        console.log('handleEventOpen');
    }

    function handleEventError(){
        console.log('handleEventError');
    }

    function handleEventClose(){
        console.log('handleEventClose');
    }

    init();
    
})()