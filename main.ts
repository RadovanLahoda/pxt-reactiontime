const min: number = 2000;
const max: number = 8000;
let start: number = 0;
let end: number = 0;
let randomNum: number = 0;
basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
        `);
input.onButtonPressed(Button.A, function()
{let randomNum = Math.randomRange(min, max)
    basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
`);
basic.pause(randomNum)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
`);
start = control.millis();
music.ringTone(Note.D);
})
input.onButtonPressed(Button.B, function() {
end = control.millis();
let result = (end - start) / 10;
basic.showNumber(result);
})