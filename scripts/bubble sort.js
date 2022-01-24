async function bubbleSort(){
  var el = document.querySelectorAll('.bar');
  var i, j;
  for(i = 0; i < el.length; i++){
    for(j = 0; j < el.length - i - 1; j++){
      changeColor(el[j], 'red');
      changeColor(el[j+1], 'red');
      if (el[j].offsetHeight > el[j+1].offsetHeight){
        swap(el[j], el[j+1]);
        await wait();
      }
      changeColor(el[j], 'var(--default)');
      changeColor(el[j+1], 'var(--default)');
    }
    changeColor(el[el.length - i - 1], 'green');
  }
}