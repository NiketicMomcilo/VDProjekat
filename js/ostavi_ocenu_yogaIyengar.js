const stars11 = document.querySelector(".ratings11").children;
const ocenaIyengar = document.querySelector("#iyengarYogaOcena");
let index11;

for(let i=0;i<stars11.length;i++){
    stars11[i].addEventListener("mouseover",function(){
        for(let j=0;j<stars11.length;j++){
            stars11[j].classList.remove("fa-star");
            stars11[j].classList.add("fa-star-o");
        }
        for(let j=0;j<=i;j++){
            stars11[j].classList.remove("fa-star-o");
            stars11[j].classList.add("fa-star");
        }
    });
    stars11[i].addEventListener("click",function(){
        index11=i;
        cistoca.value = index11 + 1;
    });
    stars11[i].addEventListener("mouseout",function(){
        for(let j=0;j<stars11.length;j++){
            stars11[j].classList.remove("fa-star");
            stars11[j].classList.add("fa-star-o");
        }
        for(let j=0;j<=index11;j++){
            stars11[j].classList.remove("fa-star-o");
            stars11[j].classList.add("fa-star");
        }
    });
}