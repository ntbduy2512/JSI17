var date = new Date();


function get(){

    document.getElementById('result1').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    document.getElementById('result2').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    document.getElementById('result3').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    document.getElementById('result4').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    document.getElementById('result5').innerHTML = date.getMinutes() + ":" +  date.getSeconds();

}

function start1(){
    document.getElementById('result1').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    const myInterval1 = setInterval(myTimer1, 1000);   
    function myTimer1(){

        document.getElementById('result1').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    }
}

function start2(){
    document.getElementById('result2').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    const myInterval2 = setInterval(myTimer2, 1000);   
    function myTimer2(){

        document.getElementById('result2').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    }
}
function start3(){
    document.getElementById('result3').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    const myInterval3 = setInterval(myTimer3, 1000);   
    function myTimer3(){

        document.getElementById('result3').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    }
}
function start4(){
    document.getElementById('result4').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    const myInterval1 = setInterval(myTimer4, 1000);   
    function myTimer4(){

        document.getElementById('result4').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    }
}
function start5(){
    document.getElementById('result5').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    const myInterval1 = setInterval(myTimer5, 1000);   
    function myTimer5(){

        document.getElementById('result5').innerHTML = date.getMinutes() + ":" +  date.getSeconds();
    }
}