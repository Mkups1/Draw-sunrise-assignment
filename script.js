// draw sunrise
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 400
cnv.height = 400

let clothCloudImg = document.getElementById("cloth-cloud-img")
let cloudX = 180
let cloudX2 = 140
let sunY = 300
let sunColour = 0
let sunRadius = 25


ctx.fillStyle = "blue"
ctx.fillRect(0, 0, 400, 300)

ctx.fillStyle = "red"
ctx.beginPath()
ctx.arc(200, 300, 25, 0, 2 * Math.PI)
ctx.fill()

ctx.fillStyle = "green"
ctx.fillRect(0, 300, 400, 100)


requestAnimationFrame(loop)
function loop(){
    cloudX++
    cloudX2--
    sunY--
    sunColour++
    sunRadius += 0.1

    ctx.fillStyle ="blue"
    ctx.fillRect(0, 0, 400, 300)
    
    ctx.fillStyle = "green"
    ctx.fillRect(0, 300, 400, 100)

    ctx.drawImage(clothCloudImg, cloudX2, 100)
    ctx.drawImage(clothCloudImg, cloudX, 80)

    ctx.fillStyle = "rgb(255," + sunColour + ",0)"
    ctx.beginPath()
    ctx.arc(200, sunY, sunRadius, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = "green"
    ctx.fillRect(0, 300, 400, 100)
    
    requestAnimationFrame(loop)
}


