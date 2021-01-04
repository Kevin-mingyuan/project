;(function(doc,window){
    const ipt = doc.getElementById('user');
    const btn = doc.getElementById('login');
    const houseNum = doc.getElementById('houseNum');


    const init = () => {
        ipt.value = '';
        handleEventLogin()
    }

    function handleEventLogin(){
        btn.addEventListener('click', (e)=>{
            let val = ipt.value;
            let houseNumVal = houseNum.value;

            if(val){
                window.location.href = `index.html?name=${val}&house=${houseNumVal}`;
                window.sessionStorage.setItem("user", JSON.stringify(val));
            }
        })
    }

    init()
})(document, window)