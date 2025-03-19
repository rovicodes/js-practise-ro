let keyPressed;
let insertDiv = document.querySelector('#insert')
// let h2 = document.createElement('h2');
// insertDiv.appendChild(h2)

window.addEventListener("keydown", function(event){

    // document.querySelector('h2').innerHTML = ''
     keyPressed = event.key
      //console.log(keyPressed)
    displayKey(keyPressed)

})

function displayKey(key)
{   
    insertDiv.innerHTML = `<h2>${key}</h2>`
}

// const insert = document.getElementById('insert');

// window.addEventListener('keydown', (e) => {
//   insert.innerHTML = `
//     <div class='color'>
//     <table>
//     <tr>
//       <th>Key</th>
//       <th>Keycode</th> 
//       <th>Code</th>
//     </tr>
//     <tr>
//       <td>${e.key === ' ' ? 'Space' : e.key}</td>
//       <td>${e.keyCode}</td> 
//       <td>${e.code}</td>
//     </tr>
    
//   </table>
//     </div>
//   `;
// });
