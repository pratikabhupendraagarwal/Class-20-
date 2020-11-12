var fixedrect, movingrect;
var gameOb1,gameOb2;

function setup(){
  createCanvas(600,600);
  fixedrect=createSprite(200,400,50,90);
  fixedrect.shapeColor="red";
  fixedrect.debug=true;

  movingrect=createSprite(400,200,90,50);
  movingrect.shapeColor="blue";
  movingrect.debug=true;

  gameOb1=createSprite(200,100,50,90);
  gameOb1.shapeColor="pink";  

gameOb2=createSprite(400,100,50,90);
gameOb2.shapeColor="purple";


}

function draw(){
  background("black");

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x);
  //movingrect.x-fixedrect.x=fixedrect.width/2+movingrect.width/2
  // =50/2+90/2
  // =25+45
  //=70
  
  drawSprites();
  if(isTouching(movingrect,gameOb1)){
    movingrect.shapeColor="yellow";
    gameOb1.shapeColor="yellow";
  }
  else{
    movingrect.shapeColor="blue";
    gameOb1.shapeColor="pink";
  }



  if(isTouching(movingrect,gameOb2)){
    movingrect.shapeColor="yellow";
    gameOb2.shapeColor="yellow";
  }
  else{
    gameOb2.shapeColor="purple";
  }


  if(isTouching(movingrect,fixedrect)){
    movingrect.shapeColor="yellow";
  fixedrect.shapeColor="yellow";
  }
  else{
  fixedrect.shapeColor="red";
  }

}

function isTouching(a,b){
  //a=movingrect  b=gameOb1
  if(a.x-b.x<b.width/2+a.width/2
    && b.x-a.x<b.width/2+a.width/2
    && a.y-b.y<b.height/2+a.height/2
    && b.y-a.y<b.height/2+a.height/2){
   return true;
  }
  else{
    return false;
  }
}