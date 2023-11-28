const inputColor = document.getElementById("color")
const inputName = document.getElementById("name")
const buttStart = document.getElementById("Start")
let color = rc()
console.log(color.toString())
inputColor.value = color
function rc()
  {
    return  "#"+Math.floor(Math.random()*16777215).toString(16);
  }

function gameStart(){
    let name = inputName.value
    color = inputColor.value
    console.log(name + " " + name.length)
    if(name.length >= 3 && name.length <= 10){
        document.getElementById("All").remove();
        document.getElementById("Start").remove()
        start(name, color)
    }
}

