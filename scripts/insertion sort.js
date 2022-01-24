async function insertionSort(){
  var el = document.querySelectorAll('.bar');
  var i, j;
  for(j = 1; j < el.length; j++){
    i = j - 1;
    while(i >= 0 && (el[i].offsetHeight > el[i + 1].offsetHeight)){
      changeColor(el[i], 'red');
      changeColor(el[i+1], 'red');
      swap(el[i], el[i+1]);
      await wait();
      changeColor(el[i], 'var(--default)');
      changeColor(el[i+1], 'var(--default)');
      i = i - 1;
    }
  }

  for (var k = 0; k < el.length; k++){
    changeColor(el[k], 'green');
  }
}