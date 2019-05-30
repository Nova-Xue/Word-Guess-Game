var fruit = ["mango","stawberry","orange","banana","watermelon"];
function getRandomFruit(){
    var ranIndex = Math.floor(Math.random()*fruit.length);
    return fruit[ranIndex];
}
var word = getRandomFruit();
var guessContent = document.getElementById("guessContent");
var guessHistory = document.getElementById("guessHistory");
var win = document.getElementById("win");
alert("answer "+word);
var guess="";
var flag = true;
document.onkeypress = function keyPess(e){
    //get pressed key
    var key = e.key.toLowerCase();
    alert(key);
    alert(e.keyCode);
    var boolKey = (e.keyCode<91 && e.keyCode> 64)||(e.keyCode<123 && e.keyCode> 96);
    alert(boolKey);
    //first time press
    if(flag){
        //press-to-start effect
        document.getElementById("press-to-start").style.display = "none";
        document.getElementById("container").style.display = "block";
        //give spaces to fruits
        for(var i = 0; i < word.length;i++){
        guessContent.innerHTML += "_ "
        
        }
        flag = false;
    }
    //not first time press
    else if (guess.length == 10){//lose
        alert("you lose");
        guessHistory.innerHTML = "";
        word = getRandomFruit();
        flag = true;
    }else if(boolKey &&(!word.includes(key))){// word not have key
        alert("not contain");
        if(guess.includes(key)){//same guess
            alert("please try another letter");

        }else{
            guess += key;
            guessHistory.innerHTML = guess;

        }

    }else if (boolKey && word.includes(key)){// word contains key
           //replace by all possible index
           for (var i =  0 ; i< word.length;i++){
                if (word.charAt(i) == key){ // i is the index of key in word and should be the index of guesscontent
                    var newGuess = guessContent.innerHTML.substring(0,2*i)+key+" "+guessContent.innerHTML.substring(2*i+2);
                    guessContent.innerHTML = newGuess;
                }
           }
    }
}   