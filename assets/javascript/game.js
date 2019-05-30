var fruit = ["mango","stawberry","orange","banana","watermelon"];
function getRandomFruit(){
    var ranIndex = Math.floor(Math.random()*fruit.length);
    return fruit[ranIndex];
}
var word;
var countWin = 0;
var guessContent = document.getElementById("guessContent");
var guessHistory = document.getElementById("guessHistory");
var win = document.getElementById("win");
//alert("answer "+word);
var guess="";
var flag = true;
document.onkeypress = function keyPess(e){
    //get pressed key
    var key = e.key.toLowerCase();
    //alert(key);
    //alert(e.keyCode);
    var boolKey = (e.keyCode<91 && e.keyCode> 64)||(e.keyCode<123 && e.keyCode> 96);
    //alert(boolKey);
    //first time press
    function reset(){
        document.getElementById("press-to-start").style.display = "none";
        document.getElementById("container").style.display = "block";
        guessContent.innerHTML="";
        guessHistory.innerHTML="";
        count = 0;
        guess="";
        if(fruit.length>0){// 
            word = getRandomFruit();
            for(var i = 0; i < word.length;i++){
                guessContent.innerHTML += "_ ";
                }
        }else{
            alert("I have no more word");
        }
        
        
        flag = false;
    }
    //initialize
    if(flag){
        reset();
    }else if(!boolKey){
        alert("please enter a letter");
    }else{//user entered a letter
        if(word.includes(key)){//letter in the word //right letter
            //show letter effect
            if(guessContent.innerHTML.indexOf(key) == -1){//letter not in the guess
                for (var i =  0 ; i< word.length;i++){
                    if (word.charAt(i) == key){ // i is the index of key in word and should be the index of guesscontent
                        var newGuess = guessContent.innerHTML.substring(0,2*i)+key+" "+guessContent.innerHTML.substring(2*i+2);
                        guessContent.innerHTML = newGuess;
                    }
               }
            }else{//letter alreay there
                alert("you have got this letter");
            }
            
            if(guessContent.innerHTML.indexOf("_") == -1){//last correct letter
                countWin++;
                win.innerHTML = countWin;
                // u win
                alert("you win");
                //remove1 word from fruit
                fruit.splice(fruit.indexOf(word),1);
                //press any key to continue
                flag = true;
                document.getElementById("press-to-start").style.display="block";
            }
        }else{//letter not in the word //wrong letter
            if(guess.indexOf(key) != -1){//letter in history //repeated letter
                alert("please enter a new letter");
            }else{// letter not in history // store the letter to history
                if(guess.length == 5){//new letter but not enough count lose
                    //no more guess and lose
                    alert("no more chance");
                    //press any key to continue
                    flag = true;
                     document.getElementById("press-to-start").style.display="block";
                }else{//new letter and enough count
                    //guess continue
                    guess += key;
                    guessHistory.innerHTML = guess;
                }
            }
        }


        
    }
    

}   