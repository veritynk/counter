
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function increment(params) {
    count +=  1
    countEl.innerText = count
 }



 function save(params) {
   let countEntr = count + " - "

   saveEl.textContent += countEntr
    console.log(count)

    countEl.textContent = 0
    count = 0
 }




