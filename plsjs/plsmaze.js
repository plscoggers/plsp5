let grid = new Grid();
let locked = true;

function setup()
{
    createCanvas(1000,1000);
}

function draw()
{
    grid.display();
}

function mousePressed()
{
    locked = false;
    grid.setFill(mouseX,mouseY);
}

function mouseDragged()
{
    if(!locked)
        grid.fillOrUnfillDraggedMouse(mouseX, mouseY);
}

function mouseReleased()
{
    locked = true;
}