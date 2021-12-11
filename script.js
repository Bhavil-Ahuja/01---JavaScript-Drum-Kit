document.addEventListener("keydown", function(Key) {
    playSound(Key.key);
    document.querySelector("." + Key.key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + Key.key).classList.remove("pressed");
    }, 200)
})

function playSound(keyname) {
    var name;
    switch (keyname) {
        case "a":
            name = "clap.wav";
            break;
        case "s":
            name = "hihat.wav";
            break;
        case "d":
            name = "kick.wav";
            break;
        case "f":
            name = "openhat.wav";
            break;
        case "g":
            name = "boom.wav";
            break;
        case "h":
            name = "ride.wav";
            break;
        case "j":
            name = "snare.wav";
            break;
        case "k":
            name = "tom.wav";
            break;
        case "l":
            name = "tink.wav";
            break;
    }
    var audio = new Audio("sounds/" + name);
    audio.play();
}