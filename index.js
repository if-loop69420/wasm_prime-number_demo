import init, { add,prime } from './pkg/addition.js'

await init()

const i1 = document.querySelector('#i1')
const i2 = document.querySelector('#i2')
const prime_input = document.querySelector('#prime_input')


document.querySelector('#button').addEventListener('click', () => {
  document.querySelector('#result').innerHTML = add(i1.value, i2.value)
})


function find_row_size(size){
  let row_size = 30;
  while (row_size > 5){
    console.log(size % row_size)
    if (size % row_size == 0){
      return row_size;
    }
    row_size--;
  }
  return row_size;
}


function generate_table(){
  let primes = prime(prime_input.value)
  var body = document.getElementsByTagName('body')[0];
  const myArray = primes.split(',')
  if(document.getElementsByTagName('table').length > 0){
    document.getElementsByTagName('table')[0].remove()
  }
  var tbl = document.createElement('table');
  tbl.setAttribute("class", "fixed_header");
  var tblBody = document.createElement('tbody');
  var row_size = find_row_size(myArray.length)
  for(var i = 0; i < myArray.length; i++) {
    var row = document.createElement('tr');
    for(var j = 0; j < row_size && myArray[i*row_size + j] != undefined; j++){
      var cell = document.createElement('td');
      var cellText = document.createTextNode(myArray[i * row_size + j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
  tbl.setAttribute("style", "color:white");
}


document.querySelector('#prime_button').addEventListener('click', () => {
  generate_table()
})
