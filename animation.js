// Lottie animation
let animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json' // шлях до вашого JSON-файлу
  });

//Button animation
function colorChange1(selector, colors, ms){
    let el=document.querySelector(selector);
    let anime=[];
    for(i=0;i<colors.length;i++)
        anime[i]={borderColor:colors[i]};
    el.animate(anime,{duration:ms, iterations:Infinity});
}
colorChange1('.btn_contact',['#FFF500','#05f501','#00F0FF','#1400FF', '#FFF500'],10000);

function colorChange2(selector, colors, ms){
    let el=document.querySelector(selector);
    let anime=[];
    for(i=0;i<colors.length;i++)
        anime[i]={color:colors[i]};
    el.animate(anime,{duration:ms, iterations:Infinity});
}
colorChange2('.btn_contact',['#FFF500','#05f501','#00F0FF','#1400FF', '#FFF500'],10000);