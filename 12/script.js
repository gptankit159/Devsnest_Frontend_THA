const inp = document.getElementById('msg');
const mList = document.querySelector('.mList');
const btn = document.querySelector("#btn");

btn.addEventListener( 'click', ()=>{
    console.log(inp.value);
    if(inp.value){
        const newToDoDiv = document.createElement("div");
        newToDoDiv.classList.add("msgs");
        newToDoDiv.innerHTML=inp.value;
        mList.append(newToDoDiv);
        inp.value="";
    }
    const forDel = document.querySelectorAll(".msgs");
    forDel.forEach( ele => {
        ele.addEventListener('click', ()=> {
            ele.style.display = "none";
        });    
    });
});


