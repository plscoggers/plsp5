let x,y,vx,vy,a,dampx,dampy,cw,ch;

function setup()
{
    createCanvas(1000,1000);
    frameRate(60);
    background(51);
    cw = 50;
    ch = 50;
    x = Math.round(Math.random() * (width - cw));
    vx = Math.round(Math.random() * 100);
    y = Math.round(Math.random() * width - ch);
    vy = Math.round(Math.random(100));
    dampx = Math.random();
    dampy = Math.random();
    a = -9.81;
}

function updatePosition()
{
    vy += a * 0.1;
    y -= vy;
    x += vx;
}

//pls collide
function collisionCheck()
{
    if(y >= height - ch / 2)
    {
        y = height - ch / 2;
        vy = -(vy + dampy);
    }
    if(y <= ch / 2)
    {
        y = ch / 2;
        vy = -(vy - dampy);
    }
    if(x >= width - cw / 2)
    {
        x = width - cw / 2;
        vx = -(vx - dampx);
    }
    if(x <= cw / 2)
    {
        x = cw / 2;
        vx = -(vx + dampx);
    }
}

function draw()
{
    fill(0,0,255 - abs(vy) * 2);
    ellipse(x,y,cw,ch);
    updatePosition();
    collisionCheck();

}