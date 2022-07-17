//---------------------- characters & objects --------------------------------
let game = document.querySelector("#game");
let spiderMan = document.querySelector("#spider");
let goblin = document.querySelector("#goblin");
let electro = document.querySelector("#electro");
let docock = document.querySelector("#docock");
let dummy = document.querySelector("#docdummy");
let dummy2 = document.querySelector("#dummy2");
let car = document.querySelector("#car");
let thanos = document.querySelector("#thanos");
let spaceship = document.querySelector("#spaceship");
let sword = document.querySelector("#sword")
let portal = document.querySelector("#teleport");
let play = document.querySelector("#play");
let btnLeft = document.querySelector("#btnLeft");
let btnRight = document.querySelector("#btnRight");

// ----------- music ------------------------------------
let theme = new Audio("Music/theme.mp3");
let gameover = new Audio("Music/gameover.m4a");
let jumpSound = new Audio("Music/jump.m4a");
let knife = new Audio("Music/Knife,_cut_sound_effect(128k)%20Trim.m4a");
let gobyTheme = new Audio("Music/gablin-laugh.mp3");
let spiderweb = new Audio("Music/Spider-Man_web_shoot_sound_effect(128k).m4a");
let electroaudio = new Audio("Music/electrosound%20Trim.m4a");
let ezzz = new Audio("Music/Electric_Sound_Effect(128k).m4a")
let docaudio = new Audio("Music/hello%20peter%20sound.m4a");
let carsound = new Audio("Music/car%20skid.m4a");
let woosh = new Audio("Music/Knife,_cut_sound_effect(128k)%20Trim.m4a");
let thanosaudio = new Audio("Music/thanos.m4a");

// -------------- spiderMan controls -----------------------
addEventListener("keydown", (e) => {
    if (e.key == "w") jump();
    if (e.key == "s") slide();
})

// -------------- Jump function ----------------------
function jump() {
    spiderMan.classList.add("jump");
    jumpSound.play();
    spiderweb.play();

    setTimeout(() => {
        spiderMan.classList.remove("jump");
    }, 500);
}
// -------------- slide function ----------------------
function slide() {
    spiderMan.classList.add("slide");

    setTimeout(() => {
        spiderMan.classList.remove("slide");
    }, 500);
}


// --------------------------- mainFunction ----------------------------------
function mainFunction() {
    theme.currentTime = 0;
    gobyTheme.currentTime = 0;
    electroaudio.currentTime = 0;
    docaudio.currentTime = 0;
    thanosaudio.currentTime = 0;
    gameover.currentTime = 0;
    knife.currentTime = 0;
    woosh.currentTime = 0;
    ezzz.currentTime = 0;
    carsound.currentTime = 0;

    theme.play();
    gobyTheme.play();
    play.classList.add("hide");
    spiderMan.classList.remove("hide");
    goblin.classList.remove("hide");
    goblin.classList.add("run");

    setInterval(() => {
        let clouds = document.createElement("div");
        game.appendChild(clouds);
        clouds.classList.add("cloud");
        clouds.style.top = Math.floor(Math.random() * 200) + "px";
        setInterval(() => {
            game.removeChild(clouds);
        }, 4000);
    }, 1500);

    // ------------------- colison -------------------
    requestAnimationFrame(collisions);
}


// --------------------- Collisons -----------------------------------------------
function collisions() {

    let coundown = 0;
    let coundownHandler = true;

    setInterval(() => {

        if (coundownHandler == true) {

            coundown = coundown + 1

            // ---------- docokk showsup -------------
            if (coundown > 13) {
                dummy.classList.remove("hide")
                docaudio.play()
            }
            // ------ gobyHide ---------------------
            if (coundown > 14) {
                goblin.classList.add("hide")
            }
            // ---------- docokk showsup -------------
            if (coundown > 16) {
                docock.classList.remove("hide")
                car.classList.remove("hide")
            }
            // ---------- gobyAudio pause -------------
            if (coundown > 18) {
                gobyTheme.pause()
            }
            // ---------- electro showsup -------------
            if (coundown > 25) {
                electro.classList.remove("hide")
            }
            // ---------- electro audio play -------------
            if (coundown > 28) {
                electroaudio.play()
            }
            // ---------- docokkAudio pause -------------
            if (coundown > 49) {
                docaudio.pause()
            }
            // ---------- docokk goingBack -------------
            if (coundown > 51) {
                docock.classList.add("hide")
                dummy2.classList.remove("hide")
            }
            if (coundown > 58) {
                dummy2.classList.add("hide")
                electro.classList.add("Hide")
                electroaudio.pause()
            }
            // ---------- thanos showsup -------------
            if (coundown > 64) {
                spaceship.classList.remove("hide")
            }
            if (coundown > 65) {
                portal.classList.remove("hide")
                sword.classList.remove("hide")
                thanos.classList.remove("hide")
                thanosaudio.play()
            }
            if (coundown > 72) {
                goblin.classList.remove("hide")
                goblin.classList.add("run")
                gobyTheme.play()
            }
            if (coundown > 96) {
                thanosaudio.pause
                portal.classList.add("hide")
                sword.classList.add("hide")
                thanos.classList.add("hide")
                goblin.classList.add("hide")
                gobyTheme.pause()
            }
            if (coundown > 98) {
                spaceship.classList.add("spaceRev")
            }
            if (coundown > 100) {
                alert("you win")
            }
        }
    }, 1000);


    // --------------------- collision detection for Goblin --------------------------------------
    setInterval(() => {
        gobyLeft = parseInt(getComputedStyle(goblin, null).getPropertyValue('left'));
        gobytop = parseInt(getComputedStyle(goblin, null).getPropertyValue("top"))
        spideyLeft = parseInt(getComputedStyle(spiderMan, null).getPropertyValue("left"))
        spideytop = parseInt(getComputedStyle(spiderMan, null).getPropertyValue("top"))

        gobyspideyx = Math.abs(gobyLeft - spideyLeft)
        gobyspideyy = Math.abs(gobytop - spideytop)
        // console.log(gobyspideyx, gobyspideyy);
        if (gobyspideyx < 100 && gobyspideyy < 80) {
            coundownHandler = false;
            gameover.play()
            knife.play()
            reset()
        }
    }, 10)

    // --------------------- collision detection for Doc car --------------------------------------
    setInterval(() => {
        carLeft = parseInt(getComputedStyle(car, null).getPropertyValue('left'));
        cartop = parseInt(getComputedStyle(car, null).getPropertyValue("top"))
        spideyLeft = parseInt(getComputedStyle(spiderMan, null).getPropertyValue("left"))
        spideytop = parseInt(getComputedStyle(spiderMan, null).getPropertyValue("top"))

        carspideyx = Math.abs(carLeft - spideyLeft)
        carspideyy = Math.abs(cartop - spideytop)

        if (carspideyx < 100 && carspideyy < 120) {
            coundownHandler = false;
            gameover.play()
            carsound.play()
            reset()
        }
    }, 10)

    // --------------------- collision detection for Electro --------------------------------------
    setInterval(() => {
        electroLeft = parseInt(getComputedStyle(electro, null).getPropertyValue('left'));
        electrotop = parseInt(getComputedStyle(electro, null).getPropertyValue("top"))
        spideyLeft = parseInt(getComputedStyle(spiderMan, null).getPropertyValue("left"))
        spideytop = parseInt(getComputedStyle(spiderMan, null).getPropertyValue("top"))

        electrospideyx = Math.abs(electroLeft - spideyLeft)
        electrospideyy = Math.abs(electrotop - spideytop)

        if (electrospideyx < 100 && electrospideyy < 180) {
            coundownHandler = false;
            gameover.play()
            ezzz.play()
            reset()
        }
    }, 10)

    // --------------------- collision detection for thanosSword --------------------------------------
    setInterval(() => {
        swordsLeft = parseInt(getComputedStyle(sword, null).getPropertyValue('left'));
        swordstop = parseInt(getComputedStyle(sword, null).getPropertyValue("top"))
        spideyLeft = parseInt(getComputedStyle(spiderMan, null).getPropertyValue("left"))
        spideytop = parseInt(getComputedStyle(spiderMan, null).getPropertyValue("top"))

        swordspideyx = Math.abs(swordsLeft - spideyLeft)
        swordspideyy = Math.abs(swordstop - spideytop)

        if (swordspideyx < 100 && swordspideyy < 150) {
            coundownHandler = newFunction(coundownHandler);
            gameover.play()
            woosh.play()
            knife.play()
            reset()
        }
    }, 10)
}

function newFunction(coundownHandler) {
    coundownHandler = false;
    return coundownHandler;
}

//----- RESET --------------------------------------------
function reset() {

    setTimeout(() => {
        gameover.pause()
        knife.pause()
        woosh.pause()
        ezzz.pause()
        carsound.pause()
    }, 1200);

    goblin.classList.add("hide");
    docock.classList.add("hide");
    car.classList.add("hide");
    dummy.classList.add("hide");
    dummy2.classList.add("hide");
    electro.classList.add("hide")
    spider.classList.add("hide");
    spaceship.classList.add("hide");
    sword.classList.add("hide");
    thanos.classList.add("hide");
    spiderMan.classList.add("hide");
    play.classList.remove("hide");
    gameAudioPause();
}

//----- PAUSED --------------------------------------------
function gameAudioPause() {
    gobyTheme.pause();
    docaudio.pause();
    electroaudio.pause();
    thanosaudio.pause();
    theme.pause();
}
