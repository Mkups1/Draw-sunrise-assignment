// draw sunrise
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 400
cnv.height = 400

let clothCloudImg = document.getElementById("cloth-cloud-img")

ctx.fillStyle = "blue"
ctx.fillRect(0, 0, 400, 300)

ctx.fillStyle = "red"
ctx.beginPath()
ctx.arc(200, 300, 25, 0, 2 * Math.PI)
ctx.fill()

ctx.fillStyle = "green"
ctx.fillRect(0, 300, 400, 100)

ctx.drawImage(clothCloudImg, 140, 100)
ctx.drawImage(clothCloudImg, 180, 80)

