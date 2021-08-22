import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import Tamagotchi from './js/tamagotchi.js';
/* eslint-disable no-console */

function disableColors(level) {
  for (let i = 100; i > 0; i-=10) {
    $(`.${level}-${i}`).hide();
  }
}

function testColors() {
  const level = "feed"
  for (let i = 100; i > 0; i-=10) {
    setTimeout(function(){ 
      disableColors(level);
      alert("hey");
      $(`.${level}-${i}`).show()
    }, 3000);
    console.log(`.${level}-${i}`);
    // setInterval(function() {
    //   disableColors(level);
    //   $(`.${level}-${i}`).show();
    //   /* eslint-disable no-console */
    //   console.log(`.${level}-${i}`);
    //   /* eslint-enable no-console */
    // }, 1000);
  }
}

disableColors("nap");


testColors();
var position = 0;

function decipherPosition(position) {
  /* eslint-disable no-console */
  console.log("test");
  console.log(position);
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
  $('#select-button').click(function() {
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