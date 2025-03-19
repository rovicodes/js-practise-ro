let setIntervalId

function colorChanger(){
  
    let color = '#'

    for(i=0; i<6 ; i++)
    {
        color += (Math.floor(Math.random()*16)).toString(16)
    }

   document.querySelector('body').style.backgroundColor = color
}

document.querySelector('#start').addEventListener('click', function(){ 
    if(!setIntervalId){
        setIntervalId = setInterval(colorChanger, 1000)
    }
    
    
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(setIntervalId)
    setIntervalId = null
    console.log('color change stopped')
})

