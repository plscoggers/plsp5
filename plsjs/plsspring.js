let x,k,m,a,f,v,r,d;

function setup()
{
    createCanvas(400,400);
    x = width / 2 - 10;
    k = 2;
    m = 100;
    f = 0;
    a = 0;
    v = 0;
    r = 40;
    d = 0.92;
    //d = 0.92;
}

function draw()
{
    background(50);
    rect(x, height / 2 - 10,20,20);
    line(0, height / 2, x, height / 2);
    f = -k * (x - r);
    a = f / m;
    v = d * (v + a);
    x += v;
    if(abs(v) < 0.001)
    {
        v = 0;
    }
    //collision detection
    if(x < 10)
    {
        x = 10;
        v = -v;
    }
}