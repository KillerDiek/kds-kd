Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "hfd", name: "Hard F-Dice"}, "default");
    dice3d.addDicePreset({
        type: "d20",
        labels: [
            "Fuck\nMe!",
            "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
            "Fuck\nYou!"
        ],
        system: "hfd",
        fontScale: 0.85
    });

    dice3d.addSystem({id: "spd", name: "Emote Dice"}, "default");
    dice3d.addDicePreset({
        type: "d4",
        labels: [
            "\nOh Dear", "\nOh No", "\nHuh...", "\nYay!"
        ],
        system: "spd",
        fontScale: 0.55
    })
});
