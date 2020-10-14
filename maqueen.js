let U = 0
let direction = false
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    U = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (U < 25 && U != 0) {
        basic.showIcon(IconNames.Surprised)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 31)
        basic.pause(1000)
        direction = Math.randomBoolean()
        if (direction == true) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 120)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            basic.pause(1000)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 120)
            basic.pause(1000)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
    }
})
