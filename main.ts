function Start () {
    music.setTempo(120)
    Ljud = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
input.onButtonPressed(Button.A, function () {
    Red_light_Green_light()
})
input.onButtonPressed(Button.B, function () {
    Red_light_Green_light()
})
function Red_light_Green_light () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    Ljud += 1
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    for (let index = 0; index < 150; index++) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    Ljud += -1
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
let Ljud = 0
Start()
basic.forever(function () {
    while (0 == Ljud) {
        music.playMelody("- - - C - - - - ", 650)
    }
})
