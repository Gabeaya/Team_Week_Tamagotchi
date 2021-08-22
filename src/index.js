import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Tamagotchi from './js/tamagotchi.js';
/* eslint-disable no-console */


function disableColors(level) {
  for (let i = 100; i > 0; i-=10) {
    $(`.${level}-${i}`).hide(); // eg (.feed-100).hide();
  }
}

console.log("assets/images/nap.png");

var position = 0;

var tamagotchi = new Tamagotchi();


var myTimer = setInterval(assessHunger, 1000);

myTimer;

function assessHunger () {
  console.log(tamagotchi.hunger);
  if (tamagotchi.hunger >= 90 && tamagotchi.hunger <= 100){
    disableColors("feed");
    $(".feed-100").show();
  } else if (tamagotchi.hunger >= 80 && tamagotchi.hunger < 90){
    disableColors("feed");
    $(".feed-90").show();
  } else if (tamagotchi.hunger >= 70 && tamagotchi.hunger < 80){
    disableColors("feed");
    $(".feed-80").show();
  } else if (tamagotchi.hunger >= 60 && tamagotchi.hunger < 70){
    disableColors("feed");
    $(".feed-70").show();
  } else if (tamagotchi.hunger >= 50 && tamagotchi.hunger < 60){
    disableColors("feed");
    $(".feed-60").show();
    $(".feed-100").hide();
  } else if (tamagotchi.hunger >= 40 && tamagotchi.hunger < 50){
    disableColors("feed");
    $(".feed-50").show();
  } else if (tamagotchi.hunger >= 30 && tamagotchi.hunger < 40){
    disableColors("feed");
    $(".feed-40").show();
  } else if (tamagotchi.hunger >= 20 && tamagotchi.hunger < 30){
    disableColors("feed");
    $(".feed-30").show();
  } else if (tamagotchi.hunger >= 10 && tamagotchi.hunger < 20){
    disableColors("feed");
    $(".feed-20").show();
  } else if (tamagotchi.hunger > 0 && tamagotchi.hunger < 10){
    disableColors("feed");
    $(".feed-10").show();
  } else if (tamagotchi.hunger >= 0 ){
    disableColors("feed");
    $(".gif-space").attr("src", "assets/images/toilet.png");
    clearInterval(myTimer);
  }
}


function decipherPosition(position) {
  /* eslint-disable no-console */
  disableCursors();
  /* eslint-enable no-console */
  if (position === 0) {
    $(".feed-highlight").show();
  } else if (position === 1){ 
    $(".nap-highlight").show();
  } else if (position === 2) {
    $(".clean-highlight").show();
  } else if (position === 3) {
    $(".play-highlight").show();
  }
}

function disableCursors(){ 
  $(".play-highlight").hide();
  $(".nap-highlight").hide();
  $(".feed-highlight").hide();
  $(".clean-highlight").hide();
}


$(document).ready(function() {
  $('#start-game').click(function() {
    const userName = $("#name").val();
    const demoMode = $("#demo-mode").val();
    console.log(`WELCOME ${userName} YOU ARE PLAYING IN ${demoMode}`);
  });

  $('.btn-left').click(function() {
    if (position - 1 === -1) {
      position = 3;
    } else {
      position -= 1;
    }
    decipherPosition(position);
    event.preventDefault();
  });
  $('.select-button').click(function() {
    alert("you hit the select button");
    event.preventDefault();
  });
  $('.btn-right').click(function() {
    if (position +1 === 4) {
      position = 0;
    } else { 
      position += 1;
    }
    decipherPosition(position);
    event.preventDefault();
  });

});