// Import stylesheets
import './style.css';
const spinBtn = document.querySelector("#Spin");
spinBtn.addEventListener("click", ()=> Spin())
let count = 0
let Red = 0
let Blue = 0 
let Yellow = 0
let Green = 0
const Colours = ["Red", "Blue", "Yellow", "Green"];

function Spin(){
  count ++ 
  let Spin=Math.floor(Math.random() *Colours.length);
  if (Spin == 0){
    Red++
  }
  if (Spin == 1){
    Blue++
  }
  if (Spin == 2){
    Yellow++
  }
  if (Spin == 3){
    Green++
  }
  console.log(Spin);
  document.getElementById('Box').style.backgroundColor = Colours[Spin];
  document.getElementById("Results").innerHTML += Colours[Spin] + " , ";
  document.getElementById("TotalSpins").innerHTML = count;
  let maxnum = Math.max(Red, Blue, Yellow, Green);
  let maxcol = 0; 
  if (maxnum == Red){
    maxcol = 0
  }
  if (maxnum == Blue){
    maxcol = 1
  }
  if (maxnum == Yellow){
    maxcol = 2
  }
  if (maxnum == Green){
    maxcol = 3
  }

  document.getElementById("MostSpun").innerHTML = Colours[maxcol]

}







