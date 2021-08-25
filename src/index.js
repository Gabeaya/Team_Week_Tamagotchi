import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Tamagotchi from './js/tamagotchi.js';
/* eslint-disable no-console */

function disableColors(level) {
  for (let i = 100; i > 0; i-=10) {
    $(`.${level}-${i}`).hide();

  }
}

function death() {
  $(".clean").hide();
  $(".clean-highlight").hide();
  $(".play").hide();
  $(".play-highlight").hide();
  $(".nap").hide();
  $(".nap-highlight").hide();
  $(".feed").hide();
  $(".feed-highlight").hide();
  $(".default").hide();
  $(".death").show();
}

function changeGifStatus(currentGifClass, newGifClass, secondGif, gifTimeMS) {
  $(`.${currentGifClass}`).toggle();
  $(`.${newGifClass}`).toggle();
  if (secondGif !== "") {
    $(`.${secondGif}`).toggle();
  }
  setTimeout(function(){
    $(`.${newGifClass}`).toggle();
    $(`.${currentGifClass}`).toggle();
    if (secondGif !== "") {
      $(`.${secondGif}`).toggle();
    }
  }, 
  gifTimeMS);
}

setTimeout(function(){
  $(".birth").hide();
  $(".default").show();
  main();
}, 
8400);//seemless time transition

function main () {
  var position = 0;
  var tamagotchi = new Tamagotchi();
  var myTimer = setInterval(assessAttributes, 5000);
  var attributes = ["feed", "clean", "nap", "play"];

  myTimer;
  
  function assessAttributes () {
    attributes.forEach(attribute => {
      tamagotchi[attribute] -= 10;
      if (tamagotchi[attribute] >= 90 && tamagotchi[attribute] <= 100){
        disableColors(attribute);
        $(`.${attribute}-100`).show();
      } else if (tamagotchi[attribute] >= 80 && tamagotchi[attribute] < 90){
        disableColors(attribute);
        $(`.${attribute}-90`).show();
      } else if (tamagotchi[attribute] >= 70 && tamagotchi[attribute] < 80){
        disableColors(attribute);
        $(`.${attribute}-80`).show();
      } else if (tamagotchi[attribute] >= 60 && tamagotchi[attribute] < 70){
        $(".nap-70").show();
        $(`.${attribute}-70`).show();
      } else if (tamagotchi[attribute] >= 50 && tamagotchi[attribute] < 60){
        $(".nap-60").show();
        $(`.${attribute}-60`).show();
      } else if (tamagotchi[attribute] >= 40 && tamagotchi[attribute] < 50){
        $(`.${attribute}-50`).show();
      } else if (tamagotchi.feed >= 40 && tamagotchi.feed < 50){
        changeGifStatus("default", "hungry", "food-cloud", 3000);
      } else if (tamagotchi[attribute] >= 30 && tamagotchi[attribute] < 40){
        disableColors(attribute);
        $(`.${attribute}-40`).show();
      } else if (tamagotchi[attribute] >= 20 && tamagotchi[attribute] < 30){
        disableColors(attribute);
        $(`.${attribute}-30`).show();
      } else if (tamagotchi[attribute] >= 10 && tamagotchi[attribute] < 20){
        $(".nap-20").show();
        $(`.${attribute}-20`).show();
      } else if (tamagotchi[attribute] > 0 && tamagotchi[attribute] < 10){
        $(".nap-10").show();
        $(`.${attribute}-10`).show();
      } else if (tamagotchi[attribute] >= 0 ){
        disableColors("nap");
        disableColors("feed");
        disableColors("play");
        disableColors("clean");
        death();
        clearInterval(myTimer);
      }
    })

  }
  
  function decipherPosition(position) {
    disableCursors();
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
    $('.btn-left').click(function() {
      if (position - 1 === -1) {
        position = 3;
      } else {
        position -= 1;
      }
      decipherPosition(position);
      event.preventDefault();
    });
    $('.btn-select').click(function() {
      if (position === 0) {
        console.log("feed");
        changeGifStatus("default", "gozi-eat", "chocolate", 4000);
        tamagotchi.feed = 100;
      } else if (position === 1) {
        changeGifStatus("default", "gozi-sleep", "", 4000)
        tamagotchi.nap = 100;
      } else if (position === 2) {
        changeGifStatus("default", "gozi-clean", "shower", 4000);
        tamagotchi.clean = 100;
      } else if (position === 3){ 
        changeGifStatus("default", "gozi-play", "", 4000);
        tamagotchi.play = 100;
      }
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
}
