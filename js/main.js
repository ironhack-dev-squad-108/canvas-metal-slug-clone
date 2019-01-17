var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var bgImg = new Image()
bgImg.src = "images/sprites-background.png"
var bgX = 0
var bgWidth = 1000
var bgHeight = height


function updateEverything() {
  bgX -= 5
  // If we don't see anymore the background
  if (bgX < -bgWidth) {
    bgX += bgWidth
  }
}
function drawEverything() {
  // Clear the canvas
  ctx.clearRect(0,0,width,height)

  // Draw the bg, taken from a croped version of the image
  ctx.drawImage(bgImg,
    5,300, // x,y of the crop
    519-10,320, // width,height of the crop
    bgX,0, // x,y to positionate the picture
    bgWidth,bgHeight // the width and height of the picture
  )
  ctx.drawImage(bgImg,
    5,300, 
    519-10,320,
    bgX+bgWidth,0,
    bgWidth,bgHeight
  )
}

// // With setInterval (easier)
// setInterval(()=> {
//   updateEverything()
//   drawEverything()
// }, 1000/60)

// With requestAnimationFrame (better)
function animation(){
  updateEverything()
  drawEverything()
  window.requestAnimationFrame(animation)
}
animation()