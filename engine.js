var canvas= document.querySelector('canvas')


canvas.width=600
canvas.height=600

var c=canvas.getContext("2d")

function random(min, max) {
      return Math.random() * (max - min) + min;
    }

function draw(){
 
  randomwalk()
 }
 var x = random(0, 600);
  var y = random(0, 600);


function randomwalk(){

  

      c.beginPath();
      c.moveTo(x,y);
      x += random(-5, 5);
      y += random(-5, 5);
      c.lineWidth = 5;
      c.lineTo(x, y);
      c.strokeStyle="red"
      c.stroke();
  
             
  
 


}

function animate(){
	window.setInterval(()=>{
    
		draw()
	},250 );
    
}

animate();