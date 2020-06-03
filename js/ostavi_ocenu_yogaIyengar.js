const stars11 = document.querySelector(".ratings11").children;
const cistoca = document.querySelector("#iyengarYogaOcena");
let index1;

for(let i=0;i<stars11.length;i++){
    stars1[i].addEventListener("mouseover",function(){
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
        index1=i;
        cistoca.value = index1 + 1;
    });
    stars11[i].addEventListener("mouseout",function(){
        for(let j=0;j<stars11.length;j++){
            stars11[j].classList.remove("fa-star");
            stars11[j].classList.add("fa-star-o");
        }
        for(let j=0;j<=index1;j++){
            stars11[j].classList.remove("fa-star-o");
            stars11[j].classList.add("fa-star");
        }
    });
}