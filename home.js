var player  = document.getElementById('player');
var block = document.getElementById('block');
var scoreelement = document.getElementById('score');
var score = 0;

function moveleft(){
    var curleft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curleft <= 0) return;
    var newleft = curleft-100;
    player.style.left = newleft + "px";
}

function moveright(){
    var curleft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curleft >= 200) return;
    var newleft = curleft+100;
    player.style.left = newleft + "px";
}

document.addEventListener('keydown', function(eventInfo){
  if(eventInfo.key == 'ArrowLeft') moveleft();
  else if(eventInfo.key == 'ArrowRight') moveright();
})

block.addEventListener('animationiteration', function(){
    var randpos = Math.floor((Math.random()*3))*100;
    block.style.left = randpos + "px";
    score++;
    scoreelement.innerHTML = `Score: ${score}`;
})

setInterval(function(){
 var playerleft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
 var blockleft =  parseInt(window.getComputedStyle(block).getPropertyValue('left'));
 var blocktop =  parseInt(window.getComputedStyle(block).getPropertyValue('top'));
 if (playerleft == blockleft && blocktop < 450 && blocktop >310){
    alert(`Game Over!!! \n Your Score: ${score}`);
    block.style.top = -100+'px';
    score = 0;
    location.reload();
 }
},1)