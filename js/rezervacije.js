var termini;

var commentsMap = new Map();

var pilatesClassic = ["Odlican trening.", "Super ekipa!"];
var pilatesStott = ["Odlican trening.", "Super ekipa!"];
var pilatesReformer = ["Odlican trening.", "Super ekipa!"];


var coreCrossfit = ["Odlican trening.", "Super ekipa!"];
var coreGluteCore = ["Odlican trening.", "Super ekipa!"];
var coreBadAss = ["Odlican trening.", "Super ekipa!"];


var jogaHatHa = ["Odlican trening.", "Super ekipa!"];
var jogaIyengar = ["Odlican trening.", "Super ekipa!"];
var jogaVinyasa = ["Odlican trening.", "Super ekipa!"];


var cardioRowing = ["Odlican trening.", "Super ekipa!"];
var cardioCycling = ["Odlican trening.", "Super ekipa!"];
var cardioRunning = ["Odlican trening.", "Super ekipa!"];


commentsMap.set('pilatesClassic', pilatesClassic);
commentsMap.set('pilatesStott', pilatesStott);
commentsMap.set('pilatesReformer', pilatesReformer);


commentsMap.set('coreCrossfit', coreCrossfit);
commentsMap.set('coreGluteCore', coreGluteCore);
commentsMap.set('coreBadAss', coreBadAss);


commentsMap.set('jogaHatHa', jogaHatHa);
commentsMap.set('jogaIyengar', jogaIyengar);
commentsMap.set('jogaVinyasa', jogaVinyasa);


commentsMap.set('cardioRowing', cardioRowing);
commentsMap.set('cardioCycling', cardioCycling);
commentsMap.set('cardioRunning', cardioRunning);

var names  = ["Moma", "Nidza", "Coa", "Mina", "Vuk", "Tijana", "Marija", "Veske", "Dule", "Adrijan", "Jelica", "Drazen"];

var termin1 = {
    naziv: "Yoga",
    vrsta: "Hat-ha",
    nivo: "lvl 1", 
    max: 10,
    current: 4,
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin2 = {
    naziv: "Pilates",
    vrsta: "Classic",
    nivo: "lvl 1", 
    max: 10,
    current: 7,
    startTime: 12,
    startAndFinishTime: "12:00 - 13:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin3 = {
    naziv: "Cardio",
    vrsta: "Rowing",
    nivo: "lvl 5", 
    max: 10,
    current: 2,
    startTime: 16,
    startAndFinishTime: "16:00 - 17:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin4 = {
    naziv: "Core",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 9,
    startTime: 17,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin5 = {
    naziv: "Core",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 19,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin6 = {
    naziv: "Cardio",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };

    ///////UTORAK
var termin7 = {
    naziv: "Yoga",
    vrsta: "Iyengar",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin8 = {
    naziv: "Yoga",
    vrsta: "Reformer",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    startTime: 11,
    startAndFinishTime: "11:00 - 12:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin9 = {
    naziv: "Pilates",
    vrsta: "Stoti",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    startTime: 14,
    startAndFinishTime: "14:00 - 15:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin10 = {
    naziv: "Core",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 9,
    startTime: 17,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin11 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 19,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin12 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
/////SREDA///////
var termin13 = {
    naziv: "Pilates",
    vrsta: "Reformer",
    nivo: "lvl 1", 
    max: 10,
    current: 6,
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin14 = {
    naziv: "Yoga",
    vrsta: "Vinyasa",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    startTime: 12,
    startAndFinishTime: "12:00 - 13:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin15 = {
    naziv: "Yoga",
    vrsta: "Hat-ha",
    nivo: "lvl 2", 
    max: 10,
    current: 4,
    startTime: 13,
    startAndFinishTime: "13:00 - 14:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin16 = {
    naziv: "Pilates",
    vrsta: "Classic",
    nivo: "lvl 1", 
    max: 10,
    current: 6,
    startTime: 15,
    startAndFinishTime: "15:00 - 16:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin17 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 18,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin18 = {
    naziv: "Core",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 7,
    startTime: 19,
    startAndFinishTime: "19:00 - 20:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin19 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 8,
    startTime: 20,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin20 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };  
    /////CETVRTAK/////      
var termin21 = {
    naziv: "Yoga",
    vrsta: "Hat-ha",
    nivo: "lvl 1", 
    max: 10,
    current: 4,
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin22 = {
    naziv: "Pilates",
    vrsta: "Classic",
    nivo: "lvl 1", 
    max: 10,
    current: 7,
    startTime: 12,
    startAndFinishTime: "12:00 - 13:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin23 = {
    naziv: "Cardio",
    vrsta: "Rowing",
    nivo: "lvl 5", 
    max: 10,
    current: 2,
    startTime: 16,
    startAndFinishTime: "16:00 - 17:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin24 = {
    naziv: "Core",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 9,
    startTime: 17,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin25 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 19,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin26 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };   
    /////////PETAK//////
var termin27 = {
    naziv: "Yoga",
    vrsta: "Iyengar",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin28 = {
    naziv: "Yoga",
    vrsta: "Reformer",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    startTime: 11,
    startAndFinishTime: "11:00 - 12:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin29 = {
    naziv: "Pilates",
    vrsta: "Stoti",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    startTime: 14,
    startAndFinishTime: "14:00 - 15:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin30 = {
    naziv: "Core",
    vrsta: "Cycling",
    nivo: "lvl 4", 
    max: 10,
    current: 9,
    startTime: 17,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin31 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 19,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin32 = {
    naziv: "Cardio",
    vrsta: "GluteCore",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    }; 

///////SUBOTA////////
var termin33 = {
    naziv: "Pilates",
    vrsta: "Reformer",
    nivo: "lvl 1", 
    max: 10,
    current: 6,
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin34 = {
    naziv: "Yoga",
    vrsta: "Vinyasa",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    startTime: 12,
    startAndFinishTime: "12:00 - 13:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin35 = {
    naziv: "Yoga",
    vrsta: "Hat-ha",
    nivo: "lvl 2", 
    max: 10,
    current: 4,
    startTime: 13,
    startAndFinishTime: "13:00 - 14:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin36 = {
    naziv: "Pilates",
    vrsta: "Classic",
    nivo: "lvl 1", 
    max: 10,
    current: 6,
    startTime: 15,
    startAndFinishTime: "15:00 - 16:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin37 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 18,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin38 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 4", 
    max: 10,
    current: 7,
    startTime: 19,
    startAndFinishTime: "19:00 - 20:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin39 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 8,
    startTime: 20,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin40 = {
    naziv: "Cardio",
    vrsta: "GluteCore",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };  
//////NEDELJA//////
var termin41 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 18,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin42 = {
    naziv: "Core",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 7,
    startTime: 19,
    startAndFinishTime: "19:00 - 20:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin43 = {
    naziv: "Core",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 8,
    startTime: 20,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };
var termin44 = {
    naziv: "Cardio",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["moma" ,"nidza"]
    };  
var termini= [termin1, termin2, termin3, termin4, termin5,
              termin7, termin8, termin9, termin11, termin12,
              termin13, termin14, termin15,termin16,termin17,termin18,termin20,
              termin21, termin21, termin21, termin24, termin25, termin26,
              termin27, termin28, termin29, termin30, termin31, 
              termin33, termin34, termin35,termin36,termin37,termin38,termin39,termin40,
              termin41,termin42,termin43,termin44
            ];
var terminiIndexi = [
                     1, 21, 61, 91, 101, 
                     2, 12, 72, 102, 112,
                     3, 23, 33, 53, 83, 93, 113,
                     4, 24, 64, 94, 104, 114,
                     5, 15, 75, 95, 105,
                     6, 26, 36, 56, 86, 96, 106, 116,
                     87, 97,107,117
                    ];
function insertClasses(){
    //upisuje sve termine u raspored
    for (let index = 0; index < terminiIndexi.length; index++) {
        let id = "[id='" + terminiIndexi[index] + "']";
        let a = document.querySelector(id).children;
        a[0].innerHTML = termini[index].naziv;
        a[1].innerHTML = termini[index].vrsta;
    }
    localStorage.setItem("username", "Coa");
    for (let index = 0; index < termini.length; index++) {
        names = shuffle(names);
        let num = termini[index].current;
        termini[index].subs = [];
        for (let i = 0; i <num ; i++ ){
            termini[index].subs.push(names[i]);
        }
    }
}

function makeReservation(param){
   //console.log(param.closest("td").id);
    let id = param.closest("td").id;
    let index = findIndex(id);
    
    
    if(termini[index].current == termini[index].max){
        window.alert("Zao nam je ovaj termin je popunjen.")
        return;
    }

    for (let i = 0; i < termini[index].subs.length; i++) {
        if(termini[index].subs[i] == localStorage.getItem("username")){
            window.alert("Vec ste se prijavili za ovaj termin.");
            return;
        }
    }
    termini[index].current++;
    termini[index].subs.push(localStorage.getItem("username"));
    
    console.log(termini[index].subs);

}
function findIndex(id){
    for (let index = 0; index < terminiIndexi.length; index++) {
        if(terminiIndexi[index] == id ){
            return index;
        }       
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  function addComment(arg){
    commentsMap.get(arg).push("");
  }