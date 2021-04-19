gsap.to('.blink', {duration: 0.5, opacity: 0, ease: "steps(1)", repeat: -1})

var tl = gsap.timeline();

tl.to('.txt1', {display: 'inline', duration: 1});

tl.to('.txt12>span', {display: 'inline-block', duration: 2, stagger: 0.1});
tl.to('.txt12>span', {display: 'none', duration: 0.3});
tl.to('.br1', {display: 'block'});
tl.to('.txt2', {display: 'inline', duration: 0.5});
tl.to('.txt3', {display: 'inline', duration: 0.5});
tl.to('.txt4', {display: 'inline', duration: 0.5});
tl.to('.txt5', {display: 'inline', duration: 0.3});
tl.to('.txt6', {display: 'inline', duration: 2});
tl.to('.txt7', {display: 'inline', duration: 0.5});
tl.to('.txt8', {display: 'inline', duration: 3});
tl.to('.txt9', {display: 'inline', duration: 1});
tl.to('.txt10', {display: 'inline', duration: 0.5});
tl.to('.txt11', {display: 'inline', duration: 2});


/*
 tl.to('.txt1',{display:'inline',duration:2});
 tl.to('.txt2>span',{display:'inline-block', duration:0.2,stagger:0.1});
 tl.to('.txt3>span',{display:'inline-block', duration:0.2,stagger:0.1});
 tl.to('.txt4>span',{display:'inline-block', duration:0.2,stagger:0.1});
 tl.to('.txt5>span',{display:'inline-block', duration:0.2,stagger:0.1});
 tl.to('.txt6>span',{display:'inline-block', duration:0.2,stagger:0.1});
 tl.to('.txt7>span',{display:'inline-block', duration:0.2,stagger:0.1});
 tl.to('.txt8>span',{display:'inline-block', duration:0.2,stagger:0.1});
 tl.to('.txt9>span',{display:'inline-block', duration:0.2,stagger:0.1});
 tl.to('.txt10>span',{display:'inline-block', duration:0.2,stagger:0.1});
 tl.to('.txt11>span',{display:'inline-block', duration:0.2,stagger:0.1});
*/


tl.to('.txt40>.dot,.txt30>span', {display: 'none', duration: 0.15});
tl.to('.txt11,.txt10', {display: 'none', duration: 0.15});
tl.to('.txt9,.txt8', {display: 'none', duration: 0.15});
tl.to('.txt7,.txt6', {display: 'none', duration: 0.15});
tl.to('.txt5,.txt4', {display: 'none', duration: 0.15});
tl.to('.txt3,.txt2', {display: 'none', duration: 0.15});

tl.to('.txt30>span', {display: 'inline-block', duration: 0.2, stagger: 0.1});
tl.to('.txt40>.dot', {display: 'inline-block', duration: 3, stagger: 0.1});

tl.to('.txt40>.dot,.txt30>span', {display: 'none'});

tl.to('.txt1', {display: 'none'});

tl.to('.txt50,.blink', {display: 'inline', duration: 2.5, delay: 1});
tl.to('.txt51,.blink', {display: 'inline', duration: 2, delay: 1});

tl.to('body>*,body>*>span', {display: 'none'});

tl.call(logo);

function logo() {
    gsap.set('svg', {
        display: 'block'
    })

    /* gsap.to('.line',{
     y:360,
     display:'block',
     stagger:.1,
     repeat:-1,
     duration:300,
     stagger:.2,
     yoyo:true,
     ease:"linear",
     duration:2,
     opacity:0,
     ease:"steps(1)",
     repeat:-1,
       modifiers: {
         y : function(y){
         let t = parseFloat(y);
         t = Math.sin(t);
         return (t*40) + "px";
             }
       }
   }); */
    gsap.to('.line', {
        y: 360 / 30,
        stagger: .1,
        repeat: 1,
        duration: 10,
        stagger: .2,
        yoyo: true,
        ease: "linear",
        modifiers: {
            y: function (y) {
                let t = parseFloat(y);
                t = Math.sin(t);
                return (t * 40) + "px";
                x = Math.random() * 1000;
            }
        },
        onComplete: goto
    });

    function goto() {
        gsap.to('body', {
            opacity: 0,
            duration: 1,
            onComplete: function () {
                window.location = 'boule.html';
            }
        });
    }
}
/*tl.timeScale(5);*/
