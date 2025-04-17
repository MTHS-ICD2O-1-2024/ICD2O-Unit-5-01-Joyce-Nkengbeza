// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1;

function check() {
  // input
  const usernumber = parseInt(document.getElementById('number').value);
    

  // process
    if (usernumber === randomNumber) {

  // output
  document.getElementById('pickANumber').innerHTML = '<p>You have guessed the correct number!</p>'
    }
    
    if (usernumber !== randomNumber) {
    document.getElementById('pickANumber').innerHTML = 
    '<p>You have guessed the wrong Number!' +
    '<br/>The Correct number was:' + randomNumber + '</p>'
    }
  }
