const stars13 = document.querySelector(".ratings13").children;
const ocenaVinyasa = document.querySelector("#vinyasaYogaOcena");
let index13;

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
        index13=i;
        cistoca.value = index13 + 1;
    });
    stars13[i].addEventListener("mouseout",function(){
        for(let j=0;j<stars13.length;j++){
            stars13[j].classList.remove("fa-star");
            stars13[j].classList.add("fa-star-o");
        }
        for(let j=0;j<=index13;j++){
            stars13[j].classList.remove("fa-star-o");
            stars13[j].classList.add("fa-star");
        }
    });
}