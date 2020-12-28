;(function(doc, window){
    const ul = doc.getElementById('ul');
    const btn = doc.getElementById('btn');
    const ipt = doc.getElementById('ipt');
    const close = doc.getElementById('close');
    const ws = new WebSocket('ws://localhost:3000');

    const init = ()=>{
        handEventOpen();
    }

    function handEventOpen(){
        ws.addEventListener("open", (e)=>{
            console.log("websocket open", e)
            handEventMessage();
        })
    }
    
    function handEventMessage(){
        ws.addEventListener("message", (e)=>{
            console.log("websocket message", e)
            const data = JSON.parse(e.data);
            console.log(data, 'data')
            ul.append(renderUl(data))
        })
    }

    btn.addEventListener("click", (e)=>{
        let val = ipt.value;
        let time = new Date().getTime();
        let user = window.sessionStorage.getItem('user');
        console.log('user', user)
        console.log(val, time)
        ws.send(JSON.stringify({
            data:val,
            date:time,
            user:user
        }))
    })

    close.addEventListener("click", ()=>{
        ws.addEventListener("close", (e)=>{
            console.log("websocket close", e)
        })
        window.location.href = 'login.html';
    })
   

    function renderUl(data){
        let li = doc.createElement('li');

        li.innerHTML = `<p>${data.user}</p><p>
            <span>${data.data}</span>
            <br />
            <span>${data.date}</span>
        </p>`;
        console.log(li)
        return li;
    }

    init()

})(document, window)