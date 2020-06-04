var termini;

var commentsMap = new Map();

var pilatesClassic = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var pilatesStott = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var pilatesReformer = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];


var coreCrossfit = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var coreGluteCore = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var coreBadAss = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];


var jogaHatHa = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var jogaIyengar = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var jogaVinyasa = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];


var cardioRowing = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var cardioCycling = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var cardioRunning = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];


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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
    };
/////SREDA///////
var termin13 = {
    naziv: "Pilates",
    vrsta: "Reformer",
    nivo: "lvl 2", 
    max: 10,
    current: 6,
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: [""]
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
    subs: [""]
    };
var termin15 = {
    naziv: "Yoga",
    vrsta: "Hat-ha",
    nivo: "lvl 1", 
    max: 10,
    current: 4,
    startTime: 13,
    startAndFinishTime: "13:00 - 14:00",
    duration: 1,
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
    };
var termin23 = {
    naziv: "Cardio",
    vrsta: "Running",
    nivo: "lvl 5", 
    max: 10,
    current: 2,
    startTime: 16,
    startAndFinishTime: "16:00 - 17:00",
    duration: 1,
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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
    subs: [""]
    };
var termin30 = {
    naziv: "Core",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 9,
    startTime: 17,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: [""]
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
    subs: [""]
    };
var termin32 = {
    naziv: "Cardio",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 3,
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: [""]
    }; 

///////SUBOTA////////
var termin33 = {
    naziv: "Pilates",
    vrsta: "Reformer",
    nivo: "lvl 2", 
    max: 10,
    current: 6,
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: [""]
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
    subs: [""]
    };
var termin35 = {
    naziv: "Yoga",
    vrsta: "Hat-ha",
    nivo: "lvl 1", 
    max: 10,
    current: 4,
    startTime: 13,
    startAndFinishTime: "13:00 - 14:00",
    duration: 1,
    subs: [""]
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
    subs: [""]
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
    subs: [""]
    };
var termin38 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 7,
    startTime: 19,
    startAndFinishTime: "19:00 - 20:00",
    duration: 1,
    subs: [""]
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
    subs: [""]
    };
var termin40 = {
    naziv: "Cardio",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 3,
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: [""]
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
    subs: [""]
    };
var termin42 = {
    naziv: "Core",
    vrsta: "BadAss",
    nivo: "lvl 4", 
    max: 10,
    current: 7,
    startTime: 19,
    startAndFinishTime: "19:00 - 20:00",
    duration: 1,
    subs: [""]
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
    subs: [""]
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
    subs: [""]
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

    //poziva se na onload index body
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
    window.alert("Dodati ste u ovaj termin.");
    //console.log(termini[index].subs);

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
//dodavanje komentara
function addComment(arg, str, ocena){
    //console.log(arg);
    //console.log(str);
commentsMap.get(arg).push([str,ocena,localStorage.getItem("username"), false]);
//console.log(commentsMap.get(arg));
}
//prikazivanje ostalih komentara
function showContent(id, trening) {
    for (let i = 0; i < commentsMap.get(trening).length ;i++) {
        if(commentsMap.get(trening)[i][3] == false){
            var temp = document.getElementsByTagName("template")[0];
            var clon = temp.content.cloneNode(true);
            clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get(trening)[i][2];
            clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get(trening)[i][0]; 
            commentsMap.get(trening)[i][3] = true;
            
            document.getElementById(id).appendChild(clon);
        }
    }
}
//onload za jogu
function showInitialCommentsJoga(){
    for (var m in commentsMap){
        for (var i=0 ; i<commentsMap[m].length; i++){
            commentsMap[m][i][3] = false;
        }
    } 
    //stavi prvi komentar za iyengarJoga
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('jogaIyengar')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('jogaIyengar')[0][0]; 
    commentsMap.get('jogaIyengar')[0][3] = true;
    document.getElementById('CommentSectionjogaIyengar').appendChild(clon);

    //stavi prvi komentar za jogaHatHa
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('jogaHatHa')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('jogaHatHa')[0][0]; 
    commentsMap.get('jogaHatHa')[0][3] = true;
    document.getElementById('CommentSectionjogaHatHa').appendChild(clon);

    //stavi prvi komentar za jogaVinyasa
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('jogaVinyasa')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('jogaVinyasa')[0][0]; 
    commentsMap.get('jogaVinyasa')[0][3] = true;
    document.getElementById('CommentSectionjogaVinyasa').appendChild(clon);

}

//onload za cardio
function showInitialCommentsCardio(){
    for (var m in commentsMap){
        for (var i=0 ; i<commentsMap[m].length; i++){
            commentsMap[m][i][3] = false;
        }
    } 
    //stavi prvi komentar za iyengarJoga
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('cardioRowing')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('cardioRowing')[0][0]; 
    commentsMap.get('cardioRowing')[0][3] = true;
    document.getElementById('CommentSectioncardioRowing').appendChild(clon);

    //stavi prvi komentar za jogaHatHa
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('cardioCycling')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('cardioCycling')[0][0]; 
    commentsMap.get('cardioCycling')[0][3] = true;
    document.getElementById('CommentSectioncardioCycling').appendChild(clon);

    //stavi prvi komentar za jogaVinyasa
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('cardioRunning')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('cardioRunning')[0][0]; 
    commentsMap.get('cardioRunning')[0][3] = true;
    document.getElementById('CommentSectioncardioRunning').appendChild(clon);

}

//onload za core
function showInitialCommentsCore(){
    for (var m in commentsMap){
        for (var i=0 ; i<commentsMap[m].length; i++){
            commentsMap[m][i][3] = false;
        }
    } 
    //stavi prvi komentar za iyengarJoga
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('coreCrossfit')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('coreCrossfit')[0][0]; 
    commentsMap.get('coreCrossfit')[0][3] = true;
    document.getElementById('CommentSectioncoreCrossfit').appendChild(clon);

    //stavi prvi komentar za jogaHatHa
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('coreGluteCore')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('coreGluteCore')[0][0]; 
    commentsMap.get('coreGluteCore')[0][3] = true;
    document.getElementById('CommentSectioncoreGluteCore').appendChild(clon);

    //stavi prvi komentar za jogaVinyasa
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('coreBadAss')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('coreBadAss')[0][0]; 
    commentsMap.get('coreBadAss')[0][3] = true;
    document.getElementById('CommentSectioncoreBadAss').appendChild(clon);

}

//onload za pilates
function showInitialCommentsPilates(){
    for (var m in commentsMap){
        for (var i=0 ; i<commentsMap[m].length; i++){
            commentsMap[m][i][3] = false;
        }
    } 
    //stavi prvi komentar za iyengarJoga
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('pilatesClassic')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('pilatesClassic')[0][0]; 
    commentsMap.get('pilatesClassic')[0][3] = true;
    document.getElementById('CommentSectionpilatesClassic').appendChild(clon);

    //stavi prvi komentar za jogaHatHa
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('pilatesStott')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('pilatesStott')[0][0]; 
    commentsMap.get('pilatesStott')[0][3] = true;
    document.getElementById('CommentSectionpilatesStott').appendChild(clon);

    //stavi prvi komentar za jogaVinyasa
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('pilatesReformer')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('pilatesReformer')[0][0]; 
    commentsMap.get('pilatesReformer')[0][3] = true;
    document.getElementById('CommentSectionpilatesReformer').appendChild(clon);

}

function calculateAvgRaiting(id){
    var ret = 0;
    for (let i = 0; i < commentsMap.get(id).length; i++) {
        ret+= commentsMap.get(id)[i][1];
    }
    return ret/commentsMap.get(id).length;
}

/*
OVO SU TI ARGUMENTI KAD BUDES POZIVAO funkciju getLvl

Hat-ha
Classic
Rowing
GluteCore
Cycling
Crossfit
Iyengar
Reformer
Stoti
Vinyasa
BadAss
Running

*/
function getLvl(id){
    for (let i = 0; i < termini.length; i++) {
        if(termini[i].naziv == id){
            return termini[i].nivo;
        }
        
    }
}