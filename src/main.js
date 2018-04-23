import './styles.css';
// import { Triangle } from './template.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tamagotchi } from './tamagotchi.js';
import { minutes, seconds, totalSeconds, timer } from './timer.js';
import { Snacks } from './snacks.js';

$(document).ready(function(){
  $("#nameInput").submit(function(event){
    event.preventDefault();
    let petName = $("#yourName").val();
    let newPet = new Tamagotchi($('#yourName').val());
    let newTime = timer();
//declared variables
    newPet.setNeeds();
//initial jquery input
    $('.pet-actions').removeClass('d-none');
    $('.stats').removeClass('d-none');
    $("#nameInput").addClass('d-none');

    console.log(newTime);
    $('#tama-name').text(newPet.name);
    setInterval(() =>{newTime},1000);
    setInterval(()=>{$("#hungerBar").text(newPet.hunger)},1000);
    setInterval(()=>{$("#restBar").text(newPet.rest)}, 1000);
    setInterval(()=>{$("#happyBar").text(newPet.happiness)}, 1000);
//interaction buttons
    $("#eat").click(function(){
      newPet.giveFood(1);
    });
    $('#sleep').click(function(){
      newPet.giveSleep(1);
    });
    $('#play').click(function(){
      newPet.giveHappiness(1);
    });
    setInterval(() =>{newPet.giveDeath()}, 1000);
  });
});
