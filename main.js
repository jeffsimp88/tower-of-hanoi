const i = document.querySelector('#container')
const b1 = document.querySelector('#bar1')
const b2 = document.querySelector('#bar2')
const b3 = document.querySelector('#bar3')
const d1 = document.querySelector('#disk1')
const d2 = document.querySelector('#disk2')
const d3 = document.querySelector('#disk3')
const d4 = document.querySelector('#disk4')


let win = document.createElement('div')
function winner(){
    if (b3.childElementCount===4){
        win.textContent = "YOU ARE A WINNER!"
        document.getElementById('hand').appendChild(win)
        mode = "Game Won"
    }
}


let mode = "pickup" 
let selectedDisk = null

/* Randy's Code + Our own additional conditions*/
const barClick = function (e){
    const bar = e.currentTarget
    const disk = bar.lastElementChild
    
    
    if (b3.childElementCount===4){
        mode = "Game Won"
    } else if (mode ==="pickup"){        
        if (disk){
            console.log("You got " + disk.id)
            selectedDisk = disk
            document.getElementById('hand').append(selectedDisk)
            mode = 'drop'
        }else{
            console.log("no disks")
        }
    }else {
        if(bar.childElementCount != 0 && selectedDisk.dataset.width > disk.dataset.width){
            console.log("Disk too big")
        }else{
            console.log("you dropped onto " + bar.id)
            bar.append(selectedDisk)
            mode = "pickup"  
        }
    }
 winner()
}


b1.addEventListener('click', barClick)
b2.addEventListener('click', barClick)
b3.addEventListener('click', barClick)

