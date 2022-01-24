newArray();

var arr_size = document.querySelector("#arr-size");
var speed = document.querySelector("#speed");
var speedValue = speed.value;
var arrSize = arr_size.value;
var milliseconds = 10000/Math.pow(10, speedValue);


document.querySelector("#generate").addEventListener("click", newArray);
arr_size.addEventListener("input", createBars);
speed.addEventListener("input", changeSpeed);
document.querySelector("#sort").addEventListener("click", sort);


function createBars(){
  arrSize = arr_size.value;
  newArray()
}

function newArray(){
  document.querySelector(".bars-container").innerHTML= "";
  let arr = [];
  for(var i = 0; i < arrSize; i++){
    arr.push(Math.floor(Math.random() * 96) + 5);
  }
  
  for(var i = 0; i < arrSize; i++){
    var bars= [];
    bars[i] = document.createElement("div");
    bars[i].style.height = (arr[i] * 4) + 'px';
    bars[i].classList.add("bar");
    bars[i].style.width = (arr_size.max * 5 / arrSize) + '%';
    document.querySelector(".bars-container").appendChild(bars[i]);
  }
}

function changeSpeed(){
  milliseconds = 10000/Math.pow(10, speed.value);
}

function wait(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('');
    }, milliseconds);
  });
}

function swap(el1, el2){
  var temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

function changeColor(el, color){
  el.style.backgroundColor = color;
}

async function sort (){
  let algorithm = document.querySelector("#sorting-algorithms").value;
  switch(algorithm)
  {
    case 'insertion': insertionSort();
            break;
    case 'bubble': bubbleSort();
            break;
    case 'selection': selectionSort();
            break;
    case 'quick': quick();
            break;
    case 'merge': merge();
            break;
  }
};
