async function selectionSort(){
  var el = document.querySelectorAll('.bar');
  var i, j;

  for(i = 0; i < el.length; i++){
    minIndex = i;
    for(j = i+1; j < el.length; j++){
      changeColor(el[j], 'red');
      await wait();
      if (el[j].offsetHeight < el[minIndex].offsetHeight){        
        changeColor(el[minIndex], 'var(--default)');
        minIndex = j;
        changeColor(el[minIndex], 'blue');
      }else{
        changeColor(el[j], 'var(--default)');
      }
    }
    if(minIndex != i){
      swap(el[i], el[minIndex]);
      changeColor(el[minIndex], 'var(--default)');
    }
    changeColor(el[i], 'green');
  }
}