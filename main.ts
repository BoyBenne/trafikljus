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
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    Ljud += 1
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    for (let index = 0; index < 200; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    Ljud += -1
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    Ljud += 1
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    for (let index = 0; index < 200; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    Ljud += -1
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
let Ljud = 0
Start()
while (0 == Ljud) {
    music.playMelody("- - - C - - - - ", 650)
}
