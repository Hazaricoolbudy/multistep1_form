var form1 = document.getElementById('form1')
var form2 = document.getElementById('form2')
var form3 = document.getElementById('form3')

// button next
var next1 = document.getElementById('next1')
var next2 = document.getElementById('next2')
// back buttonS
var back1 = document.getElementById('back1')
var back2 = document.getElementById('back2')
next1.onclick = function () {
    form1.style.left = "-450px"
    form2.style.left = "40px"
}
next2.onclick = function () {
    form2.style.left = "-450px"
    form3.style.left = "40px"
}
back1.onclick = function () {
    form1.style.left = "0px"
    form2.style.left = "450px"
}
back2.onclick = function () {
    form2.style.left = "0px"
    form3.style.left = "450px"
}