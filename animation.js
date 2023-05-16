
//Button animation
function colorChangeBorder(selector, colors, ms){
    let el=document.querySelector(selector);
    let anime=[];
    for( i=0;i<colors.length;i++)
        anime[i]={borderColor:colors[i]};
    el.animate(anime,{duration:ms, iterations:Infinity});
}
colorChangeBorder('.btn_contact',['#05f501','#00F0FF','#1400FF'],10000);

function colorChangeText(selector, colors, ms){
    let el=document.querySelector(selector);
    let anime=[];
    for(i=0;i<colors.length;i++)
        anime[i]={color:colors[i]};
    el.animate(anime,{duration:ms, iterations:Infinity});
}
colorChangeText('.btn_contact',['#05f501','#00F0FF','#1400FF'],10000);