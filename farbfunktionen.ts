// Gib deinen Code hier ein

/**
 * Einige nützliche Farb-Funktionen.
 */
//% color=190 weight=10 icon="\uf1ec" block="Farbfunktionen"
namespace Farbfunktionen {
    /**
     * Berechne den Farbwert (Hue) aus RGB Komponenten.
     */
    //% block="Farbwert Rot $red | Gruen $green | Blau $blue "
    //% red.min=0 
    //% green.min=0 
    //% blue.min=0 
    export function farbwert(red:number, green:number, blue:number):number {
        let max_value = Math.max(red, Math.max(green, blue))
        let min_value = Math.min(red, Math.min(green, blue))
        let chroma = max_value - min_value
        let hue = 0
        if (chroma == 0) {
            hue = 0
        } else if (max_value == red) {
            hue = (green - blue) * 60 / chroma
            if (hue < 0) {
                hue = hue + 360
            }
        } else if (max_value == green) {
            hue = (blue - red) * 60 / chroma + 120
        } else {
            hue = (red - green) * 60 / chroma + 240
        }
        return hue
    }


    /**
     * Berechne eine Farbe aus einem Farbwert. 
     */
    //% block="Farbwert_zu_Farbe Farbwert $hue "
    //% hue.min=0 v.max=360 v.defl=0
    export function farbwert_zu_farbe(hue: number): number {
        let bereich = hue / 60
        let x = 1 - Math.abs(bereich % 2 - 1)
        x = Math.floor(x * 255)
        let rot = 0
        let gruen = 0
        let blau = 0
        if (bereich <= 1) {
            rot = 255
            gruen = x
        } else if (bereich <= 2) {
            rot = x
            gruen = 255
        } else if (bereich <= 3) {
            gruen = 255
            blau = x
        } else if (bereich <= 4) {
            gruen = x
            blau = 255
        } else if (bereich <= 5) {
            rot = x
            blau = 255
        } else {
            rot = 255
            blau = x
        }
        return basic.rgb(rot, gruen, blau)
    }
}