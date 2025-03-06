const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
       // console.log(button)
       button.addEventListener('click', function(eventObj){
           let btnColor = eventObj.target.id
           body.style.backgroundColor = eventObj.target.id

           
        //    switch (btnColor) {
        //     case "grey":
        //         
        //         break;
        //     case "white":
        //         body.style.backgroundColor = "white"
        //         break;
        //     case "blue":
        //         body.style.backgroundColor = "blue"
        //         break;
        //     case "yellow":
        //         body.style.backgroundColor = "yellow"
        //         break;
           
        //     default:
        //         break;
        //    }
       })
})
