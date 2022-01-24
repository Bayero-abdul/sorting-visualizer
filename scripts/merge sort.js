async function merge(){
  var bars = document.querySelectorAll(".bar");
  await mergeSort(bars, 0, bars.length-1);
}

async function mergeSort(el, low, high){
  if (low < high){
    var mid = low + ((high - low) >> 1);
    // el[mid].style.backgroundColor = 'yellow';
    // await new Promise(resolve => {setTimeout(() => { resolve('');}, 1000);});
    await mergeSort(el, low, mid);
    await mergeSort(el, mid + 1, high);
    await mergePartition(el, low, mid, high);  
  }
  // for (var k = 0; k <= high; k++){
  //   changeColor(el[k], 'green');
  // }
}

async function mergePartition(el, low, mid, high){
  var n = mid - low + 1;
  var m = high - mid;
  
  const leftArray = new Array(n);
  const rightArray = new Array(m);
  

  for(var i = 0; i < n; i++){
    leftArray[i] = el[low + i].offsetHeight;
  } 
  for(var j = 0; j < m; j++){                    
    rightArray[j] = el[mid + 1 + j].offsetHeight;
  }
  
  for(var i = low; i <= high; i++){
    changeColor(el[i], 'red');
  } 

  var i = 0;
  var j = 0; 
  var k = low;
  
  while (i < n && j < m){
    if (leftArray[i] < rightArray[j]){
      el[k++].style.height = leftArray[i++] + "px"; 
    }else{
      el[k++].style.height = rightArray[j++] + "px";
    }
    await wait();
  }
  
  for(; i < n; i++){
    el[k++].style.height = leftArray[i] + "px";
    await wait();
  }
  for(; j < m; j++){
    el[k++].style.height = rightArray[j] + "px";
    await wait();
  }
  
  for(var i = low; i <= high; i++){
    changeColor(el[i],"var(--default)");
  } 
}