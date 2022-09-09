    var dice=Math.floor( Math.random() * 6) + 1;
    var dices="dice"+dice+".png";
    var diceimg="images/"+dices;
    document.querySelectorAll("img")[1].setAttribute("src", diceimg);
    
    var img1=Math.floor(Math.random()*6)+1;
    var imgend="images/dice"+img1+".png";
    document.querySelectorAll("img")[0].setAttribute("src", imgend);

    if(dice>img1){
        document.querySelector("h1").innerHTML="💥 Player 1 won";
    }
    else if(img1>dice){
        document.querySelector("h1").innerHTML="Player 2 won 💥";
    }
    else{
        document.querySelector("h1").innerHTML="💥 Its a draw 💥";
    }