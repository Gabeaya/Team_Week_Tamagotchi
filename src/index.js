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

function death() {
  disableColors("nap");
  disableColors("feed");
  disableColors("play");
  disableColors("clean");
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


// changeGifStatus(var, var "", time);
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
      changeGifStatus("default", "hungry", "food-cloud", 3000);
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
      $("default").html("");
      death();
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
        tamagotchi.hungerAdder();
        changeGifStatus("default", "gozi-eat", "chocolate", 5000);
      } else if (position === 1) {
        console.log("nap");
      } else if (position === 2) {
        changeGifStatus("default", "gozi-clean", "shower", 5000);
        console.log("clean");
      } else if (position === 3){ 
        console.log("play");
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
