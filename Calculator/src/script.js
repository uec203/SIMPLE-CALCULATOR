const input = document.getElementById("user-input");

const number = document.querySelectorAll(".numbers").forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if(input.innerHTML==="0"){
            input.innerHTML="";
        }
        input.innerHTML+=e.target.innerHTML.trim();
    })
});
const calculate = document.querySelectorAll(".operations").forEach((item)=>{
    item.addEventListener("click",(e)=>{
        let last = input.innerText.substring(input.innerText.length-1, input.innerText.length);
        console.log(last);
        if(e.target.innerHTML==="="){
            if(isNaN(last))
                input.innerHTML=input.innerText.substring(0,input.innerText.length-1);
            input.innerHTML=eval(input.innerText);
        }
        else if(e.target.innerHTML==="AC"){
            input.innerHTML=0;
        }
        else if(e.target.innerHTML==="DEL"){
            input.innerHTML=input.innerText.substring(0,input.innerText.length-1);
            if(input.innerText.length==0){
                input.innerText=0;
            }
        }
        else{
            if(isNaN(last)){
                input.innerHTML=input.innerText.substring(0,input.innerText.length-1);
            }
            input.innerHTML+=e.target.innerHTML;
        }
    })
});