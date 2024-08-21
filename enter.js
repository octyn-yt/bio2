function enter() {
    document.getElementById("enter").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
    var audio = document.getElementById("bgm");
    audio.play();
}