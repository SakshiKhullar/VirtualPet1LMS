var foodValue, food, foodS, x

function preload()
{
  dog_img = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png"); 
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,350,10,10);
  dog.addImage(dog_img);
  dog.scale = 0.3


  
  foodValue = database.ref('/');
  foodValue.on("value", readValue);

  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDog);
  }

  drawSprites();

  push();
  fill("white");
  textSize(25);
  text("Press up arrow key to feed the dog.", 50, 100);
  text("Food Remaining: " + food, 50, 150);
  pop();

}

function readValue(data){
  foodSt = data.val();
  food = foodSt.Food;
  console.log(food)
}

function writeStock(x){

  if(x <= 0) {
    x = 0
  }
  else{
    x = x -1
  }

  database.ref('/').set({
    Food : x
  })


}
