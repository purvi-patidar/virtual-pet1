//Create variables here
var  dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dogs = loadImage("Dog.png");
  happyDogs = loadImage("happydog.png");
}

function setup() {
  var canvas = createCanvas(500, 500);
  database = firebase.database();

  foodStock = database.ref('Food')
  foodStock.on("value",readStock);

  var dog = createSprite(255,350);
   dog.addImage(happyDogs);
   dog.scale=0.5;
   
 
}



function draw() {  
background(46,139,87);



textSize(20);
fill("red");
stroke(4);
text("PRESS UP ARROW KEY TO FEED DRAGO MILK",20,100);
fill("yellow")
text("Food Remaining:"+foodS,150,150);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogs);
} 



  drawSprites();
  
}


function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  food:x
})
}