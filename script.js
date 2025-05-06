var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var tryagain=document.getElementById("tryagain")
var restart=document.getElementById("restart")
var randomnumber=Math.floor(Math.random()*10)+1
var totalscore=10
function check(){
    var enterdnumber=parseInt(guessnumber.value)
    if(enterdnumber==randomnumber){
        result.textContent="Right"
        result.style.color="green"
        randomnumber=Math.floor(Math.random()*10)+1
        
    }
    else{
        result.textContent="wrong"
        result.style.color="red"
        totalscore--
        score.textContent="score:"+totalscore


    }
    if(totalscore===0){
        tryagain.style.display="block"
        guessnumber.disabled=true
        document.querySelector("button").disabled=true
        restart.style.display="inline-block"
    }
}
        function restartgame(){
            totalscore=10;
            randomnumber=Math.floor(Math.random()*10)+1
            score.textContent="score"+totalscore
            result.textContent="Right/Wrong"
            tryagain.style.display="none"
            guessnumber.disabled=false
            document.querySelector("button").disabled="false"
            restart.style.display="none"
            guessnumber.value=" "
        }


