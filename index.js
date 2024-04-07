
document.body.classList.add(localStorage.getItem("theme"))
let screen = document.getElementById("screen")
function show(e) {
    screen.value += e 
}
function Equal() {
    screen.value = eval(screen.value)
}
let numbers = document.querySelectorAll(".numbers span")
let circle = document.getElementById("circle")
function del() {
    screen.value = screen.value.slice(0, -1)
}
function cleardata(){
    screen.value = ""
}

let themes = []


numbers.forEach((number) => {
    number.addEventListener("click", () => {
        themes.push(number.getAttribute("data-theme"))
        document.body.classList.remove(...themes)
        document.body.classList.add(number.getAttribute("data-theme"))
        localStorage.setItem("theme", number.getAttribute("data-theme"))
    } , false)  
})