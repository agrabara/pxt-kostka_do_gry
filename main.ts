// Program symuluje kostkę do gry
// losując i prezentując cyfry od 1-6

// inicjujemy zmienne -> 0 oznacza, że nic jeszcze nie było losowane
let kostka = 0
kostka = 0

// Funkcja losująca -> działa na potrząsanie
// losuje cyfrę od 1 do 6 i wpsisuje ją do zmiennej "kostka"
input.onGesture(Gesture.Shake, function () {
    kostka = Math.randomRange(1, 6)
})

// Główna pętla programu
// wyświetlanie/prezentacja zawartości zmiennej "kostka"
// w postaci ścian kostki do gry
// wyświetlanie na planszy 3x3
// można poszerzyć zakres na 5x5 według chęci
basic.forever(function () {
    if (kostka == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (kostka == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (kostka == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (kostka == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (kostka == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (kostka == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
 