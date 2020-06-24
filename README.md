## Project Authors; Jeff Simpson and Stephen Serio

* Stephen Created the divs in the HTML
* Jeff modified the divs in the CSS portion during the same time.
* Did so using VSCode Live share.
* just figured out on how to make the blocks to move. Now figuring out for the bars to accept only certain ones.
* Added onclick and ondrop functions to pick out the blocks accordingly.Still figuring out the bars to accept the disks. On to the final step of proramming wins, losses in hopes in finding the missing link of code.

-JS I added some test button with a function. Commented them out temporarily.
Also updated CSS to display in the center and changed the font style.


disk1.onmousedown = function (event) {
   const i = document.getElementById('container')
   const x = document.getElementById('bar1')
   const y = document.getElementById('bar2')
   const z = document.getElementById('bar3')

   function select(e) {
      let item = e.target
      if (item != x && item != y && item != z) {
         console.log(e)

      }
   }

   let shiftX = event.clientX - disk1.getBoundingClientRect().left;
   let shiftY = event.clientY - disk1.getBoundingClientRect().top;
   i.addEventListener("click", select)

   disk1.style.position = 'absolute';
   disk1.style.zIndex = 1000;
   document.body.append(disk1);
   let test = document.createElement("div")
   test.textContent = "TEST"

   moveAt(event.pageX, event.pageY);

   function moveAt(pageX, pageY) {
      disk1.style.left = pageX - shiftX + 'px';
      disk1.style.top = pageY - shiftY + 'px';
   }

   function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
      function moveItem(e) {
         let item = e.target
         if (item === x) {
            console.log(item)
            console.log(test)
            document.getElementById('bar1').appendChild(test)
         } else if (item === y) {
            console.log(item)
            console.log(test)
            document.getElementById('bar2').appendChild(test)

         } else if (item === z) {
            console.log(item)
            console.log(test)
            document.getElementById('bar3').appendChild(test)
         }
      }

      document.addEventListener('mousemove', onMouseMove);
      i.addEventListener("click", moveItem)

      disk1.onmouseup = function () {
         document.removeEventListener('mousemove', onMouseMove);
         disk1.onmouseup = null;
      };

   };

   disk1.ondragstart = function () {
      return false;
   };

   disk2.onmousedown = function (event) {
      // disk1.onmousedown = function (event) {

      disk2.style.position = 'absolute';
      disk2.style.zIndex = 1000;
      //     let shiftX = event.clientX - disk1.getBoundingClientRect().left;
      //     let shiftY = event.clientY - disk1.getBoundingClientRect().top;

      document.body.append(disk2);
      //     disk1.style.position = 'absolute';
      //     disk1.style.zIndex = 1000;
      //     document.body.append(disk1);

      function moveAt(pageX, pageY) {
         disk2.style.left = pageX - disk2.offsetWidth / 2 + 'px';
         disk2.style.top = pageY - disk2.offsetHeight / 2 + 'px';
      }
      //     moveAt(event.pageX, event.pageY);

      moveAt(event.pageX, event.pageY);
      //     function moveAt(pageX, pageY) {
      //         disk1.style.left = pageX - shiftX + 'px';
      //         disk1.style.top = pageY - shiftY + 'px';
      //     }

      function onMouseMove(event) {
         moveAt(event.pageX, event.pageY);
      }
      //     function onMouseMove(event) {
      //         moveAt(event.pageX, event.pageY);
      //     }

      //     document.addEventListener('mousemove', onMouseMove);

      //     disk1.onmouseup = function () {
      //         document.removeEventListener('mousemove', onMouseMove);
      //         disk1.onmouseup = null;
      //     };

      // };

      // disk1.ondragstart = function () {
      //     return false;
      // };

      // disk2.onmousedown = function (event) {

      document.addEventListener('mousemove', onMouseMove);
      //     disk2.style.position = 'absolute';
      //     disk2.style.zIndex = 1000;

      disk2.onmouseup = function () {
         document.removeEventListener('mousemove', onMouseMove);
         disk2.onmouseup = null;
      };
   };
   //     document.body.append(disk2);

   disk2.ondragstart = function () {
      return false;
   };
   //     function moveAt(pageX, pageY) {
   //         disk2.style.left = pageX - disk2.offsetWidth / 2 + 'px';
   //         disk2.style.top = pageY - disk2.offsetHeight / 2 + 'px';
   //     }

   disk3.onmousedown = function (event) {
      //     moveAt(event.pageX, event.pageY);

      //     function onMouseMove(event) {
      //         moveAt(event.pageX, event.pageY);
      //     }

      //     document.addEventListener('mousemove', onMouseMove);

      //     disk2.onmouseup = function () {
      //         document.removeEventListener('mousemove', onMouseMove);
      //         disk2.onmouseup = null;
      //     };
      // };

      // disk2.ondragstart = function () {
      //     return false;
      // };

      // disk3.onmousedown = function (event) {

      disk3.style.position = 'absolute';
      disk3.style.zIndex = 1000;
      //     disk3.style.position = 'absolute';
      //     disk3.style.zIndex = 1000;

      document.body.append(disk3);
      //     document.body.append(disk3);

      function moveAt(pageX, pageY) {
         disk3.style.left = pageX - disk3.offsetWidth / 2 + 'px';
         disk3.style.top = pageY - disk3.offsetHeight / 2 + 'px';
      }
      //     function moveAt(pageX, pageY) {
      //         disk3.style.left = pageX - disk3.offsetWidth / 2 + 'px';
      //         disk3.style.top = pageY - disk3.offsetHeight / 2 + 'px';
      //     }

      moveAt(event.pageX, event.pageY);
      //     moveAt(event.pageX, event.pageY);

      function onMouseMove(event) {
         moveAt(event.pageX, event.pageY);
      }
      //     function onMouseMove(event) {
      //         moveAt(event.pageX, event.pageY);
      //     }

      document.addEventListener('mousemove', onMouseMove);
      //     document.addEventListener('mousemove', onMouseMove);


      disk3.onmouseup = function () {
         document.removeEventListener('mousemove', onMouseMove);
         disk3.onmouseup = null;
      };
      //     disk3.onmouseup = function () {
      //         document.removeEventListener('mousemove', onMouseMove);
      //         disk3.onmouseup = null;
      //     };

   };
   disk3.ondragstart = function () {
      return false;
   };
   // };
   // disk3.ondragstart = function () {
   //     return false;
   // };

   disk4.onmousedown = function (event) {
      // disk4.onmousedown = function (event) {

      disk4.style.position = 'absolute';
      disk4.style.zIndex = 1000;
      //     disk4.style.position = 'absolute';
      //     disk4.style.zIndex = 1000;

      document.body.append(disk4);
      //     document.body.append(disk4);

      function moveAt(pageX, pageY) {
         disk4.style.left = pageX - disk4.offsetWidth / 2 + 'px';
         disk4.style.top = pageY - disk4.offsetHeight / 2 + 'px';
      }
      //     function moveAt(pageX, pageY) {
      //         disk4.style.left = pageX - disk4.offsetWidth / 2 + 'px';
      //         disk4.style.top = pageY - disk4.offsetHeight / 2 + 'px';
      //     }

      moveAt(event.pageX, event.pageY);
      //     moveAt(event.pageX, event.pageY);

      function onMouseMove(event) {
         moveAt(event.pageX, event.pageY);
      }
      //     function onMouseMove(event) {
      //         moveAt(event.pageX, event.pageY);
      //     }

      document.addEventListener('mousemove', onMouseMove);
      //     document.addEventListener('mousemove', onMouseMove);

      disk4.onmouseup = function () {
         document.removeEventListener('mousemove', onMouseMove);
         disk4.onmouseup = null;
      };
      //     disk4.onmouseup = function () {
      //         document.removeEventListener('mousemove', onMouseMove);
      //         disk4.onmouseup = null;
      //     };

   };
   // };

   disk4.ondragstart = function () {
      return false;
   };
   // disk4.ondragstart = function () {
   //     return false;
   // };
}
