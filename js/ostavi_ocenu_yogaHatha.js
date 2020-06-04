const stars12 = document.querySelector(".ratings12").children;
const ocenaHatha = document.querySelector("#jogaHatHaOcena");
let index12;

for(let i=0;i<stars12.length;i++){
    stars12[i].addEventListener("mouseover",function(){
        for(let j=0;j<stars12.length;j++){
            stars12[j].classList.remove("fa-star");
            stars12[j].classList.add("fa-star-o");
        }
        for(let j=0;j<=i;j++){
            stars12[j].classList.remove("fa-star-o");
            stars12[j].classList.add("fa-star");
        }
    });
    stars12[i].addEventListener("click",function(){
        index12=i;
        ocenaHatha.value = index12 + 1;
    });
    stars12[i].addEventListener("mouseout",function(){
        for(let j=0;j<stars12.length;j++){
            stars12[j].classList.remove("fa-star");
            stars12[j].classList.add("fa-star-o");
        }
        for(let j=0;j<=index12;j++){
            stars12[j].classList.remove("fa-star-o");
            stars12[j].classList.add("fa-star");
        }
    });
}