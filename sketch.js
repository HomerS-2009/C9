var box1;

function setup() {
  createCanvas(600,400);

  box1 = createSprite(100,100,40,40)
}

function draw() 
{
  background(30);

  if(keyIsDown(UP_ARROW))[
    box1.y = box1.y -2
  ]

  if(keyIsDown(DOWN_ARROW))[
    box1.y = box1.y +2
  ]

  if(keyIsDown(LEFT_ARROW))[
    box1.x = box1.x -2
  ]

  if(keyIsDown(RIGHT_ARROW))[
    box1.x = box1.x +2
  ]


  drawSprites()

}




