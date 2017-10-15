var emailBtn = document.getElementById('email');


var show_modal = function(){

    uglipop({class:'emailModal', //styling class for Modal
          source:'div',
          content:'emailModal'
          });

};


    emailBtn.addEventListener('click', show_modal, false);

    function moveUp(el, range) {
        //* get starting y value **/
        //var startingPoints = 192;
        var elementToMove = document.getElementById(el);
        //console.log('startingPoint', el.getAttribute('transform'));
        //svar yPos = Math.round(startingPoints[1]);
        var startingPoint = 192;
        var yPos = startingPoint;
        var tick = function() {
          yPos = yPos - 1;
          //console.log(yPos,xPos);
          var trans = yPos + 'px';
          elementToMove.style.top = trans;

        if (yPos > 80) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }

      };

      tick();
    }

    moveUp('moon');
var callfunction = function(){
  var footer2 = document.getElementById('footer2');
  footer2.classList.add('down');
  setTimeout(function(){
    if(mainMuteFlag == false){
      myAudio.volume = 0;
    }
  },1200);
  var contact_section = document.getElementById('sovog-container');
  contact_section.style.opacity = 1;
  contact_section.style.transform = 'scale(3) translateX(100%) rotateZ(0deg) translateY(-0.5rem)';
  contact_section.style.top = '40%';
  var leftArm = document.getElementById('left-arm-full');
  leftArm.style.animation = 'block';
  var rightArm = document.getElementById('right-arm-full');
  rightArm.style.animation = 'block';
  var rightLeg = document.getElementById('right-leg-full');
  rightLeg.style.animation = 'block';
  var leftLeg = document.getElementById('left-leg-full');
  leftLeg.style.animation = 'block';
  var contact_section = document.getElementById('contact_section');
  contact_section.classList.add('fadeIn');

  contact_section.style.display = 'flex';
  setTimeout(function(){
    var head = document.getElementById('full_head');
    head.style.animation = 'block';
    var antennae = document.getElementById('antennae');
    antennae.style.animation = 'block';

  }, 900);
}
var increaseAudio = function(){
  if(mainMuteFlag == false){
setInterval(function(){

  if(myAudio.volume < 0.2){
  myAudio.volume = myAudio.volume + 0.005;
  console.log('volume:',   myAudio.volume);
} else {
  console.log('top volume');
  clearInterval(increaseAudio);
  decreaseAudio();
}
}, 300);
}
};

var decreaseAudio = function(){
  if(mainMuteFlag == false){

  setInterval(function(){
    if(myAudio.volume > 0.005){
      myAudio.volume = myAudio.volume - 0.005;
      console.log('volume:',   myAudio.volume);
    } else{
      console.log('clear decrease interval');
      clearInterval(decreaseAudio);
    }
  }, 300);
}
}
    var move_bot = function(element){
      element.style.animation = 'come-to-me 12s linear';
      hasntMoved = false;
      increaseAudio();
      element.addEventListener("webkitAnimationEnd", callfunction,false);
      element.addEventListener("animationend", callfunction,false);
      element.addEventListener("oanimationend", callfunction,false);
      var land = document.getElementById('land');
      var roboty = document.getElementById('sovog-container');
      /*setTimeout(function(){
        //land.classList.add('fadeOut');
        //roboty.style.opacity = 0 ;
      }, 20000);*/

    }
    var robot = document.getElementById('sovog-container');

    robot.addEventListener('click', function(){
      move_bot(robot)}
      );



myAudio = new Audio('/audio/robotic.mp3');
window.myAudio = myAudio;
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();
myAudio.volume = 0.005;

var hasntMoved = true;

function hoverBot(){
  console.log('outBot');
  if(mainMuteFlag == false){
  myAudio.volume = 0.05;
  }
  robot.style.transform = 'scale(1.05) translate(-25%,0)';
};

function outBot(){
  console.log('outBot');
  if(mainMuteFlag == false){
    myAudio.volume = 0.005;
    myAudio.play();
  }
  robot.style.transform = '';
};
var timeout;
delayTimeMs = 1000;
robot.onmouseover = function(e) {
  if(hasntMoved == true){
    hoverBot();
  }
timeout = setTimeout(function() {
}, delayTimeMs);
};
robot.onmouseout = function(e) {

if(timeout) {
  if(hasntMoved == true){
    outBot();
  }
  clearTimeout(timeout);
}
};

var sound = document.getElementById('sound-icon');

var mainMuteFlag = false;

var audioFlag = true;

sound.addEventListener('click', function(){
  if(audioFlag == true){
    if(mainMuteFlag == false){
      myAudio.volume = 0;
        console.log('turn off');
      myAudio.pause();
      sound.classList.add('off');
  }
  audioFlag = false;
  mainMuteFlag = true;
} else{
    console.log('back on');
  myAudio.play();
  myAudio.volume = 0.005;
  sound.classList.remove('off');
  audioFlag = true;
  mainMuteFlag = false;
}
});
