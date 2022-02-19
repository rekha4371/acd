var c1;

function setup(){
createCanvas(400,400);

}

function draw(){
background("black");
c1character();
drawSprites();
}

function c1character(){
    if(frameCount%100 === 0){
    c1 = createSprite(50,200,20,20);
    c1.y = Math.round(random(10,250))
    c1.shapeColor="red";
    c1.velocityX=3;
    }
}