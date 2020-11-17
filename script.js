(function(){

    let randomnumber = Math.floor(Math.random() * 22);


    document.getElementById("run").addEventListener("click", function(){
        let inputnumber = parseInt(document.getElementById("num").value);

        if(inputnumber === randomnumber){
            alert(`Awesome! Your number ${inputnumber} was correct! You can be named many things, but hungry is not one of them`);
        }
        else if ((inputnumber - 1) === randomnumber || (inputnumber + 1) === randomnumber){
            alert(`So close, but you just missed it! Are you in a class that started on the thirteenth or what?`)
        }
        else{
            alert (`Bummer... You guessed ${inputnumber} and the secretnumber was ${randomnumber}`);
        }
    })

})();