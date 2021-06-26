

// function handleClick()
// {
//     // var audio = new Audio('music/snare.mp3');
//     // audio.play();
  
// }

for(var i=0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

            var buttonInnerHTML=this.innerHTML;
                makesound(buttonInnerHTML);
                buttonAnimation(buttonInnerHTML);
       
    })};

    document.addEventListener("keypress",function(event){
    makesound(event.key);
    
    
    buttonAnimation(event.key);

})

function buttonAnimation(x){

   var active=document.querySelector("."+x);

   active.classList.add("pressed");

   setTimeout(function(){
       active.classList.remove("pressed");
   },100);

}

function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio('music/tom-1.mp3');
             audio.play();
            break;

        case "a":
             var audio = new Audio('music/tom-2.mp3');
             audio.play();
            break;

        case "s":
             var audio = new Audio('music/tom-3.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('music/tom-4.mp3');
            audio.play();
            break;
    
        case "l":
            var audio = new Audio('music/kick-bass.mp3');
            audio.play();
            break;

            
        case "k":
            var audio = new Audio('music/snare.mp3');
            audio.play();
            break;
    
        case "j":
            var audio = new Audio('music/crash.mp3');
            audio.play();
            break;
        
        
                                    
    
        default:
            break;
    }


}