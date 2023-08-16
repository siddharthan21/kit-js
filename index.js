for(var i =0;i<(document.getElementsByClassName("drum").length);i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" ,function(){


        var element=this.innerHTML;
        

        var audio = new Audio("/deums/sounds/"+element+".mp3")
        audio.play();
        
    });
}

document.addEventListener("keypress",function(event){


        var press  = event.key;

        var audio = new Audio("/deums/sounds/"+press+".mp3")
        audio.play();

        // alert(this.event);
        // console.log(event.key);
});