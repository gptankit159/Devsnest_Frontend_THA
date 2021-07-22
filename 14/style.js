const touch = document.querySelector(".touch");
const click = document.querySelector(".click");
function mouseoverevent(){
    console.log("mouseover");
    let rand1 = Math.floor(Math.random() * 90) + "vh";
    let rand2 = Math.floor(Math.random() * 90) + "vw";
    touch.style.top=rand1;
    console.log(rand1, rand2);
    touch.style.left=rand2;
}
function clickevent(){
    console.log("clicked");
    let rand1 = Math.floor(Math.random() * 65) + "vh";
    let rand2 = Math.floor(Math.random() * 50) + "%";
    click.style.top=rand1;
    console.log(rand1, rand2);
    click.style.left=rand2;
}