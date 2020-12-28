;(function(doc,window){
    const ipt = doc.getElementById('user');
    const btn = doc.getElementById('login');

    const init = () => {
        ipt.value = '';
        handleEventLogin()
    }

    function handleEventLogin(){
        btn.addEventListener('click', (e)=>{
            let val = ipt.value;
            if(val){
                window.location.href = `index.html?name=${val}`;
                window.sessionStorage.setItem("user", JSON.stringify(val));
            }
        })
    }

    init()
})(document, window)