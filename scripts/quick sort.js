function quick(){
  var bars = document.querySelectorAll(".bar");
  quickSort(bars, 0, bars.length);
}

async function quickSort(el, low, high){
  if (low < high){
    var j = await Partition(el, low, high);
    await quickSort(el, low, j);
    await quickSort(el, j+1, high);
    for (k = 0; k < high; k++){
      changeColor(el[k], 'green');
    }
  }
}

async function Partition(el, low, high){
  var pivot = el[low].offsetHeight;
  changeColor(el[low], 'red'); //pivot color
  
  var j = high;

  for(var i = high - 1; i > low; i--){
    changeColor(el[i], 'yellow');
    await wait();
    if(el[i].offsetHeight > pivot){
      j--;
      changeColor(el[j], 'blue');
      changeColor(el[i], 'blue');
      await wait();
      swap(el[i], el[j]);
      changeColor(el[j], 'var(--default)');
      changeColor(el[i], 'var(--default)');
    }
    changeColor(el[i], 'var(--default)');
  }
  swap(el[j-1], el[low]);
  changeColor(el[low], 'var(--default)');
  return (j-1);
}