const stars13 = document.querySelector(".ratings12").children;
const cistoca = document.querySelector("#iyengarYogaOcena");
let index1;

for(let i=0;i<stars13.length;i++){
    stars13[i].addEventListener("mouseover",function(){
        for(let j=0;j<stars13.length;j++){
            stars13[j].classList.remove("fa-star");
            stars13[j].classList.add("fa-star-o");
        }
        for(let j=0;j<=i;j++){
            stars13[j].classList.remove("fa-star-o");
            stars13[j].classList.add("fa-star");
        }
    });
    stars13[i].addEventListener("click",function(){
        index1=i;
        cistoca.value = index1 + 1;
    });
    stars13[i].addEventListener("mouseout",function(){
        for(let j=0;j<stars13.length;j++){
            stars13[j].classList.remove("fa-star");
            stars13[j].classList.add("fa-star-o");
        }
        for(let j=0;j<=index1;j++){
            stars13[j].classList.remove("fa-star-o");
            stars13[j].classList.add("fa-star");
        }
    });
}