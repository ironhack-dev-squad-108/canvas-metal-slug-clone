var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height


var bgSky = new Background("images/background-sky.png", 300*512/294,300, 0, 0, -0.5, 0)
var bgForest = new Background("images/background-forest.png", 450*512/323,450, 0, 150, -2, 0)
var bgClouds = new Background("images/background-clouds.png", 105*512/109,105, 0, 10, -1, 0)

function updateEverything() {
  bgForest.update()
  bgClouds.update()
  bgSky.update()
}
function drawEverything() {
  // Clear the canvas
  ctx.clearRect(0,0,width,height)

  bgSky.draw(ctx)
  bgForest.draw(ctx)
  bgClouds.draw(ctx)
}

// // Solution 1 for animation: With setInterval (easier)
// setInterval(()=> {
//   updateEverything()
//   drawEverything()
// }, 1000/60)

// Solution 2 for animation: With requestAnimationFrame (better)
function animation(){
  updateEverything()
  drawEverything()
  window.requestAnimationFrame(animation)
}
animation()