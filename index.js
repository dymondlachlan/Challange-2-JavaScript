// Import stylesheets
import './style.css';
const spinBtn = document.querySelector("#Spin");
spinBtn.addEventListener("click", ()=> Spin())
let count = 0
let red = 0
let blue = 0 
let yellow = 0
let green = 0
const Colours = ["red", "blue", "yellow", "green"];

function Spin(){
  count ++ 
  let Spin=Math.floor(Math.random() *Colours.length);
  if (Spin == 0){
    red++
  }
  if (Spin == 1){
    blue++
  }
  if (Spin == 2){
    yellow++
  }
  if (Spin == 3){
    green++
  }
  console.log(Spin);
  document.getElementById('Box').style.backgroundColor = Colours[Spin];
  document.getElementById("Results").innerHTML += Colours[Spin] + " ";
  document.getElementById("TotalSpins").innerHTML = count;
  let maxnum = Math.max(red, blue, yellow, green);
  let maxcol = 0; 
  if (maxnum == red){
    maxcol = 0
  }
  if (maxnum == blue){
    maxcol = 1
  }
  if (maxnum == yellow){
    maxcol = 2
  }
  if (maxnum == green){
    maxcol = 3
  }

  document.getElementById("MostSpun").innerHTML = Colours[maxcol]

}







