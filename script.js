const input = document.querySelector('#title'),
      btn = document.querySelector('#create'),
      list = document.querySelector('#list');
let yes , no;
const obj = [];

function element() {
  let div = document.createElement('div')
  
  div.innerHTML =
  `<ul class="list-group list-group-flush" id="list">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${input.value}</span>
      <span>
      <span id="yes" class="btn btn-small btn-success">&check;</span>
      <span id="no" class="btn btn-small btn-danger">&times;</span>
      </span>
    </li> 
  </ul>`
  list.append(div)
    yes = document.querySelector('#yes'),
    no = document.querySelector('#no');
}



btn.addEventListener('click', () => {
  element()
  input.value = ''
  console.log(yes, no)
}) 

// yes.addEventListener('click', () => {
//   console.log('dgdgd')
// })
