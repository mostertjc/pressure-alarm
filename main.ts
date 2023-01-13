input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "intruder") {
        basic.showIcon(IconNames.Angry)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    }
})
radio.setGroup(34)
