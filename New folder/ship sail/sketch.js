var ship, ship_sailing;
var sea;
//var age=[1,2,3,4,5,6,7]
//var sum=0
function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimg = loadImage("sea.png");
}

function setup(){
  createCanvas(1200,600);
  sea = createSprite(300,190,600,10);
  sea.addImage(seaimg);
  ship = createSprite(500,300,20,50);
  ship.addAnimation("sailing",ship_sailing);
  ship.scale = 0.4;
/*for (a=0; a<age.length; a++){
sum=sum+a;  
}
avg=sum/age.length;
console.log(a);
console.log (sum);
console.log(avg);*/
  }

  console.log(sea.y)
function draw(){ 
  background("white");
  

 
  sea.velocityX=4;
  if(sea.x>1200){
sea.x=sea.width/2;
  }
  drawSprites();
}