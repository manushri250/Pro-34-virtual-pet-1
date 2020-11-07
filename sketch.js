//Create variables here
var dog, happydogimg, database, foodS, foodStock;
var dogimg;
//var x =20;


function preload()
{
  //load images here
  dogimg=loadImage("dog.png");
  happydogimg=loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  foodStock.set(20);

  createCanvas(500, 500);
  dog = createSprite(250,300,20,20);
  dog.addImage(dogimg);
  dog.scale = 0.2;

  
  
}


function draw() { 
  background((46, 139, 87)); 
  if(foodS!==undefined){
    textSize(20);
    fill(255)
    text("Note : Press the up arrow key to feed the dog",75,100);
  text("food remaining : " + foodS, 100, 200);
  }
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogimg);
    
  }

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogimg);
    
  }


  


  drawSprites();
  //add styles here
  
  textSize(50);
  //fill(255);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;

  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}






