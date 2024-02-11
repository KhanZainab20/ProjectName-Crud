function get(){
let a=document.getElementById("input").value;
//console.log(a)}

const ul =document.querySelector("ul")
ul.innerHTML += `<li>${a}
<button onclick="update">update</button>
<button onclick="deleteItem(this)">delete</button></li>`
}

function deleteItem(getobject) {
console.log(getobject)
getobject.parentElement.remove()

}
