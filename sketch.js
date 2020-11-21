var moving_rectangle,fixed_rectangle;


function setup() {
  createCanvas(800,400);


  moving_rectangle = createSprite(400, 200, 50, 50);
  moving_rectangle.shapeColor="green";
  moving_rectangle.debug = true;

  fixed_rectangle = createSprite(300,100,50,50);
  fixed_rectangle.shapeColor = "green";
  fixed_rectangle.debug = true;
}

function draw() {
  background(0);  

  moving_rectangle.y = mouseY;
  moving_rectangle.x = mouseX;


if(moving_rectangle.x - fixed_rectangle.x < moving_rectangle.width/2 + fixed_rectangle.width/2 && 
  fixed_rectangle.x - moving_rectangle.x < fixed_rectangle.width/2 + moving_rectangle.width/2 && 
  moving_rectangle.y - fixed_rectangle.y < moving_rectangle.height /2 + fixed_rectangle.height/2 && 
  fixed_rectangle.y - moving_rectangle.y < fixed_rectangle.height/2 + moving_rectangle.height/2){

  moving_rectangle.shapeColor = "red";
  fixed_rectangle.shapeColor = "red";
}
else{

  moving_rectangle.shapeColor = "green";
  fixed_rectangle.shapeColor = "green";
}



  drawSprites();
}