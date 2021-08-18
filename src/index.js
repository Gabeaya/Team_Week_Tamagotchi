import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import Tamagotchi from './js/tamagotchi.js';



$(document).ready(function() {
  $('#left-button').click(function() {
    alert("you hit the left button");
    event.preventDefault();
  });
  $('#select-button').click(function() {
    alert("you hit the select button");
    event.preventDefault();
  });
  $('#right-button').click(function() {
    alert("you hit the right button");
    event.preventDefault();
  });

});