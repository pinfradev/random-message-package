#!/usr/bin/env node
//Esta linea es para que se ejecute dentro de bash

//Variable que llama la funcion que exportamos
let random = require('../src/index')

//Ejecuto la funcion
random.randomMsg()