let x,k,m,a,f,v,r,d;

function setup()
{
    createCanvas(400,400);
    x = width / 2 - 10;
    k = 2;  //spring constant k pls F = -k(x-r)
    m = 100;  //object mass pls F = ma
    f = 0; //Force 
    a = 0; //acceleration
    v = 0;  //velocity
    r = 40;  //resting position
    d = 0.92; //dampening v = d * (v + a)
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
    //pls don't forever move
    if(abs(v) < 0.001)
    {
        v = 0;
    }
    //pls detect collision
    if(x < 10)
    {
        x = 10;
        v = -v;
    }
}