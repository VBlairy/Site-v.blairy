var tl = gsap.timeline({
    onRepeat: changeWord,
    onStart: changeWord,
    //repeat: -1,
    repeatDelay: 0
});
//initialise la timeline en repeat illimité + onRepeat on change le mot + onStart on change le mot aussi !!
tl.set("#hand", {
    x: -800,
    duration: 3,
    ease: "linear"
});
//positionne la main a -300 sur x
tl.to("#hand", {
    x: 0,
    duration: 2,
    ease: "linear"
});
//avance la main à 0 sur x  en 2 secondes
var n = 15,
    rx = document.getElementById('hand').clientHeight / 10,
    ry = document.getElementById('hand').clientHeight / 10,
    so = 0,
    wh = 35,
    cw = true;
//initialisation des variables pour la fonction qui fait le  cercle


//  for (let i = 0; i < 250; i++) {
//    var top1=String(ry + -ry * Math.cos((100 / n / 180) * (i + so) * Math.PI)) + 'px';
//    var left1=String(rx + rx * (cw ? Math.sin((35 / n / 360) * (i + so) * Math.PI) : -Math.sin((360 / n / 180) * (i + so) * Math.PI))) + 'px';
//    tl.to("#hand", {x: top1,y: left1 , duration: 0.05, ease:"linear"});
//  }
// dans le for  c'est une fonction mathématique pour faire un cercle
for (let i = 0; i < 45; i++) {
    var top1 = String(ry + -ry * Math.cos((360 / n / 180) * (i + so) * Math.PI)) + 'px';
    var left1 = String(rx + rx * (cw ? Math.sin((360 / n / 180) * (i + so) * Math.PI) : -Math.sin((360 / n / 180) * (
        i + so) * Math.PI))) + 'px';
    tl.to("#hand", {
        x: top1,
        y: left1,
        duration: 0.1,
        ease: "linear"
    });
}


for (let i = 0; i < 61; i++) {
    var top1 = String(ry + -ry * Math.cos((360 / n / 180) * (i + so) * Math.PI)) + 'px';
    var left1 = String(rx + rx * (cw ? Math.sin((180 / n / 180) * (i + so) * Math.PI) : -Math.sin((360 / n / 180) * (i + so) * Math.PI))) + 'px';
    tl.to("#hand", {x: top1, y: left1, duration: 0.15, ease: "linear"});
}
// for (let i = 0; i < 50; i++) {
//   var top1=String(ry + -ry * Math.cos((360 / n / 180) * (i + so) * Math.PI)) + 'px';
//   var left1=String(rx + rx * (cw ? Math.sin((180 / n / 360) * (i + so) * Math.PI) : -Math.sin((360 / n / 180) * (i + so) * Math.PI))) + 'px';
//   tl.to("#hand", {x: top1,y: left1 , duration: 0.2, ease:"linear"});
//}
// for (let i = 0; i < 50; i++) {
//   var top1=String(ry + -ry * Math.cos((360 / n / 180) * (i + so) * Math.PI)) + 'px';
//   var left1=String(rx + rx * (cw ? Math.sin((360 / n / 180) * (i + so) * Math.PI) : -Math.sin((360 / n / 180) * (i + so) * Math.PI))) + 'px';
//   tl.to("#hand", {x: top1,y: left1 , duration: 0.025, ease:"linear"});
// }


//on abaisse la main de 250
tl.to("#hand", {
    y: 900,
    duration: 2,
    ease: "linear"
});

//on affiche le message
tl.to("#word", {
    scale: 2,
    opacity: 1,
    duration: 3,
    ease: Power2.easeInOut
});

//la main disparait
tl.to("#hand", {
    opacity: 0,
    duration: 1,
    ease: "linear"
});


//fonction qui choisit le mot
function changeWord() {
    var words = ['Rencontre', 'Décès', 'Naissance', 'Trahison', 'Accident', 'Maladie', 'Succès', 'Échec',
        'Malédiction', 'Bénédiction', 'Infidélité', 'Créativité', 'Abondance', 'Destin'
    ];
    var div = document.getElementById('word');
    div.innerHTML = words[getRandomInt(words.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//YOYO grille
var yoyo = $('.yoyo');

TweenMax.set(yoyo, {
    opacity: 0
})
TweenMax.to(yoyo, 1, {
    opacity: 1,
    repeat: -1,
    yoyo: true,
    ease: Power2.easeInOut
});