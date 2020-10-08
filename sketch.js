    // creating var for bullet 
    var bullet,bullet_Weight,bullet_Speed;

    // creating var for wall 
    var wall,wall_Thickness

     
    

    function setup()
    {
      // creating the collision area 
      createCanvas(1000,250);
      
      // creating sprite for bullet 
      bullet = createSprite(50,100,50,20);
      // giving random velocity to the bullet
      bullet_Speed = Math.round(random(223,321));
      // giving random weight to the bullet
      bullet_Weight = Math.round(random(30,52));

      // creating sprite for wall
      wall = createSprite(950,100,20,100);
      wall_Thickness = Math.round(random(22,83));
    
    }

    function draw()
    {
      // clearing the background 
      background(225);

      // giving velocity to the bullet
      bullet.velocityX = bullet_Speed;


      // calling functuin damage to calculate the damage on the wall 
      damage();

      // to make everything visible 
      drawSprites();
    }

    function damage()
    {

      if (hasCollided(bullet,wall))
      {
        bullet.velocityX = 0;
        var damage_Wall = 0.5*bullet_Weight*bullet_Speed*bullet_Speed/wall_Thickness*wall_Thickness*wall_Thickness
        
         if (damage_Wall>10)
         {

          wall.shapeColor = color(225,0,0);
         }
         
         if (damage_Wall<10)
         {

          wall.shapeColor = color(0,225,0);
         }
     
        }
    }


    function hasCollided(x,y)

    {
      if (x.x - y.x < x.width/2 + y.width/2 
      &&  y.x - x.x < x.width/2 + y.width/2
      &&  x.x - y.x < x.height/2 + y.height/2 
      &&  y.x - x.x < x.height/2 + y.height/2)
      {

        
      }

    }