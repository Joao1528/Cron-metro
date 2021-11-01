let sec = 00
let min = 00
let hr = 00
let intervalo 

function doisdigitos(digito){

    if(digito<10){
        return "0" + digito
    } else{
        return digito
    }

}


function mudartime (){
   
    sec++
    if (sec ==60){
        min++
        sec= 0
    }

    if (min ==60){
        hr++
        min = 0
    }
    time = document.getElementById("time").innerHTML =  doisdigitos(hr) + ":" +  doisdigitos(min)+ ":" + doisdigitos(sec)


}


function iniciar(){
    mudartime()

    intervalo = setInterval(mudartime,1000)

}

function pausar(){

    clearInterval(intervalo)

}

function reiniciar(){

    sec = 0
    min = 0 
    hr = 0
    time = document.getElementById("time").innerHTML =  doisdigitos(hr) + ":" +  doisdigitos(min)+ ":" + doisdigitos(sec)


}