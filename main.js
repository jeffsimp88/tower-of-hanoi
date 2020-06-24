
const i = document.querySelector('#container')
const x = document.querySelector('#bar1')
const y = document.querySelector('#bar2')
const z = document.querySelector('#bar3')


let disks = [d1, d2, d3, d4]
function diskFun() {
    if (d1 > d2 && d2 > d3 && d3 > d4 && disks.length) {

    }
}

function select(e) {
    if (e.target.className !== "disks") {
        return
    }

    const item = e.target
    const itemCopy = item.cloneNode(true)
    itemCopy.id += "selected"
    console.log(itemCopy)
    item.classList.add("selected")
}


x.addEventListener("click", select)
y.addEventListener("click", select)
z.addEventListener("click", select)



let blueBlock = document.getElementById(x)
function moveDisk(o) {
    let item = o.target
    if (item === o) {

    }
}




let test = document.createElement("div")
test.textContent = "TEST"


function moveItem(e) {
    let item = e.target
    if (item === x) {
        console.log(item)
        console.log(x)
        document.getElementById('bar1').appendChild(test)
    } else if (item === y) {
        console.log(item)
        console.log(y)
        document.getElementById('bar2').appendChild(test)

    } else if (item === z) {
        console.log(item)
        console.log(z)
        document.getElementById('bar3').appendChild(test)
    }
}


i.addEventListener("click", moveItem)

