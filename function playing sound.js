function  playing()
{
    mysound = new sound("us-lab-background-1.mp3");
    mysound.play();
    document.getElementById("playButton").disabled = true; // turns off the start button
   
    document.getElementById("stopButton").disabled = false; // turns on the stop button
}
function stop()
{
    window.location.reload();
    document.getElementById("stopButton").disabled = true;
}

function sound(src)
{// add play funtion
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();
}
}