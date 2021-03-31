var canvas;
var music;
var block1,block2,block3,block4,ball


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1=createSprite( 100,580,140,10 )
block1.shapeColor="red"


block2=createSprite( 300,580,140,10 )
block2.shapeColor="blue"

block3=createSprite( 500,580,140,10 )
block3.shapeColor="orange"


block4=createSprite( 700,580,140,10 )
block4.shapeColor="green"

ball=createSprite( random(20,750),100,20,20 )
ball.shapeColor="white"

ball.velocityX=8
ball.velocityY=6


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
 edges=createEdgeSprites()  
 ball.bounceOff(edges)

 if(ball.isTouching(block1)){
ball.shapeColor="red"


 }



 if(ball.isTouching(block2)){
    ball.shapeColor="blue"
    music.play()
    
    
     }


     if(ball.isTouching(block3)){
        ball.shapeColor="orange"
        
        
         }


         if(ball.isTouching(block4)){
            ball.shapeColor="green"
            ball.velocityX=0
            ball.velocityY=0
            music.stop()
             }
            


ball.bounceOff(block1)
ball.bounceOff(block2)
ball.bounceOff(block3)
ball.bounceOff(block4)


    //add condition to check if box touching surface and make it box
drawSprites()
}
