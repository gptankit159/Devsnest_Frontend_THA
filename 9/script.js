let inp = '<div class="seat"></div>';
let row = '<div class="par">' + inp.repeat(10) + '</div>' + '<br>' ;
let col =  row.repeat(10) ;
let Bseats = 0;
let Rseats = 100;
function insert(){
    document.querySelector(".main").innerHTML=('<br>' + col);
}

setTimeout(() => {
const sea = document.querySelectorAll('.seat');   
console.log(sea);
sea.forEach((ele) => {
    ele.addEventListener('click',()=>{
        if(ele.classList.contains('clicked')) {
            ele.classList.remove('clicked');
            Bseats--;
            Rseats++;
        }else{
            ele.classList.add('clicked');
            Bseats++;
            Rseats--;
        }
        document.querySelector('#Bseats').innerText=Bseats;
        document.querySelector('#Rseats').innerText=Rseats;
    });
});
}, 1000);
