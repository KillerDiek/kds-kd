Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addDicePreset({
        type: "d20",
        labels: [
            "F#ck\nMe!",
            "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
            "F#ck\nYou!"
        ],
        system: "dnd5e"
    })
});