var canvas = document.getElementById('canvas');

        canvas.width=canvas.scrollWidth;
        canvas.height=canvas.scrollHeight;

        var ctx = canvas.getContext('2d');

        var bamboo = new Image();
        bamboo.src = './Bamboof.jpg';
        var grass = new Image();
        grass.src = './Grassf.png'; 
        var shinobi = new Image();
        shinobi.src = './Shinobi.png';
        var shinobi0 = new Image();
        shinobi0.src = './Shinobi_0.png';
        var shinobic = new Image();
        shinobic.src = './Shinobi_c.png';
        var enemy = new Image();
        enemy.src = './Enemy.png';
        var bam_hit = new Image();
        bam_hit.src = './Bamboo_hit.png';
        var spear = new Image();
        spear.src = './SpikesT.png';
        var menu = new Image();
        menu.src = './Menu.png';
        var Over = new Image();
        Over.src = './Over.png';
        var mouseX=0;
        var mouseY=0;
        var btnPlay = new button(763,1139,480,560);
        var btnRetry = new buttonRetry(742,1160,570,641);
        var xg=0; 
        var count=22;
        var veloc=30;
        var jump=false,crouch=false;
        var posX = 150;
        var posY = 510;
        var edge = canvas.width-213;
        var temp =0;
        //Menu
        function drawMenu(ctx,menu)
        {
            if(!menu.complete)
            {
                setTimeout(function(){
                    drawMenu(ctx,menu);
                },50);
                return;
            }
            setInterval(function(){
                background(ctx,bamboo); 
                ctx.drawImage(shinobi,posX,posY,213,426);
                drawGrass(ctx,grass);
                ctx.drawImage(menu,0,0,canvas.width,canvas.height);
            },5);
        }
        //Grass
        function drawGrass(ctx,grass)
        {
            if(!grass.complete)
            {
                setTimeout(function(){
                    drawGrass(ctx,grass);
                },50);
                return;
            }
            xg-=10;
            ctx.drawImage(grass,xg,826,7600,194);
            if(xg<=-3799)
        {
            xg=0;
        }
        }
        //Bamboo
        function drawhit(ctx,bam_hit)
        {
            if(!bam_hit.complete)
            {
                setTimeout(function(){
                    drawhit(ctx,bam_hit);
                },50);
                return;
            } 
            ctx.drawImage(bam_hit,1500,0,195,426);
        }
        //Spear
        function drawSpear(ctx,spear)
        {
            if(!spear.complete)
            {
                setTimeout(function(){
                    drawSpear(ctx,spear);
                },50);
                return;
            } 
            ctx.drawImage(spear,700,-30,550,580);
        }
        //Enemy
        function drawEnemy(ctx,enemy)
        {
            if(!enemy.complete)
            {
                setTimeout(function(){
                    drawEnemy(ctx,enemy);
                },50);
                return;
            } 
            ctx.drawImage(enemy,1500,510,282,426);
        }
        //Backgorund
        var x=0;
        function background(ctx,bamboo)
        {
            if(!bamboo.complete)
            {
                setTimeout(function(){
                    background(ctx,bamboo);
                },50);
                return;
            }
            x-=2;
        ctx.drawImage(bamboo,x,-50,7104,960);
        if(x<=-3551)
        {
            x=0;
        }

        /*ctx.font = '70px Helvetica';
        ctx.fillText('Shinobi',20,70);
        ctx.font = '50px Helvetica';
        ctx.fillText('Adventures',20,130);*/
        }
        var temp2=0;
        //Retry function
        function gameOver(ctx,Over)
        {
            if(!Over.complete)
            {
                setTimeout(function(){
                    drawMenu(ctx,Over);
                },50);
                return;
            }
            setInterval(function(){
                background(ctx,bamboo); 
                drawGrass(ctx,grass);
                ctx.drawImage(Over,0,0,canvas.width,canvas.height);
            },5);

            document.addEventListener('click',Retry,false); 
        }
        var mouseX2;
        var mouseY2;
        function Retry(f)
        {
            if(temp2==0)
            {
            mouseX2=f.pageX-canvas.offsetLeft;
            mouseY2=f.pageY-canvas.offsetTop;
            console.log(mouseX2);
            console.log(mouseY2);
            if(btnRetry.checkRetry())
            {
                if((btnRetry.checkRetry())==true)
                {
                temp2++;
                }
                drawShinobi(ctx,shinobi);
                posX=150;
                
            }
            }
        }

        function buttonRetry(xLR,xRR,yTR,yBR)
        {
            this.xLeftR=xLR;
            this.xRightR=xRR;
            this.yTopR=yTR;
            this.yBotR=yBR;
        }

        buttonRetry.prototype.checkRetry = function()
        {
            if(this.xLeftR <= mouseX2 && mouseX2<=this.xRightR && this.yTopR <= mouseY2 && mouseY2<=this.yBotR)
            {   
                return true;
            }
        }

        //Mouse click+button
        function mouseClicked(d)
        {
            if(temp==0)
            {
            mouseX=d.pageX-canvas.offsetLeft;
            mouseY=d.pageY-canvas.offsetTop;
            if(btnPlay.checkClicked())
            {
                if((btnPlay.checkClicked())==true)
                {
                    temp++;
                }
                drawShinobi(ctx,shinobi);
            }
            }
        }
        function button(xL,xR,yT,yB)
        {
            this.xLeft=xL
            this.xRight=xR
            this.yTop=yT
            this.yBot=yB
        }
        button.prototype.checkClicked = function()
        {
            if(this.xLeft <= mouseX && mouseX<=this.xRight && this.yTop <= mouseY && mouseY<=this.yBot)
            {   
                return true;
            }
        }
        
        function drawShinobi(ctx,shinobi)
        {
            if(!shinobi.complete)
            {
                setTimeout(function(){
                    drawShinobi(ctx,shinobi);
                },50);
                return;
            } 
            setInterval(function(){
                document.onkeydown = function(e)
        {
            if(posY <510)
            {
                jump=true;
            }
            if(posY >510)
            {
                crouch=true;
            }
            console.log(e);
            if((e.keyCode==37)|| (e.keyCode==65))
            {
                console.log("LEFT");
                posX=posX-15;
            }
            if((e.keyCode==38 && jump==false) || (e.keyCode==32 && jump==false)||(e.keyCode==87 && jump==false))
            {
                console.log("UP");posY=posY-150;
                jump=true;
            }
            if(e.keyCode==39 || e.keyCode==68)
            {
                console.log("RIGHT");
                posX=posX+15;
            }
            if((e.keyCode==40 && crouch == false) || (e.keyCode==83 && crouch == false))
            {
                console.log("DOWN");
                posY=posY+150;
            }

            if(posY<510)
            {
                jump=true;
            }
            else
            {
                jump=false;
            }
            if(posY>510)
            {
                crouch=true;
            }
            else
            {
                crouch=false;
            }
        }
                background(ctx,bamboo);   
                drawhit(ctx,bam_hit);
                drawEnemy(ctx,enemy);
                drawSpear(ctx,spear);
                
                if(jump==true)
                {
                    ctx.drawImage(shinobi0,posX,posY+veloc,270,426);
                }
                else if(crouch==true)
                {
                    ctx.drawImage(shinobic,posX,posY+100,426,213);
                }
                else
                {
                    ctx.drawImage(shinobi,posX,posY,213,426); 
                }
                drawGrass(ctx,grass); 

                if(posX>=1687)
                {
                    gameOver(ctx,Over);
                }
            }, 5);
        }

        document.addEventListener('click',mouseClicked,false);
        drawMenu(ctx,menu);