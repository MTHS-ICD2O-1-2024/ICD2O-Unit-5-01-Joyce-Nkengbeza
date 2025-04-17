// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

function calculatearea() {
  // input
  const abase = parseInt(document.getElementById('a-base').value);
  const bbase = parseInt(document.getElementById('b-base').value);
  const height = parseInt(document.getElementById('height-length').value);
    

  // process
    const trapezoidarea = [(abase + bbase) / 2] * height

  // output
  document.getElementById('area').innerHTML = 'area is:' + trapezoidarea + 'mm²'
}

