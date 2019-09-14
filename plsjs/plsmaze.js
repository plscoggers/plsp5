let grid = new Grid(10,10,640,640);
let locked = true;

function setup()
{
    createCanvas(1000,1000);
    frameRate(60);
    clear_button = createButton('Clear');
    clear_button.position(0,650);
    clear_button.mousePressed(clearScreen);
}

function draw()
{
    grid.display();
}

function mousePressed()
{
    //Run an initial check to see if click was in grid
    var mousePos = new Point(mouseX, mouseY);
    var gridLocs = grid.getLocs(mousePos);

    if(grid.boundsCheck(gridLocs))
    {
        locked = false;
        grid.setFill(mousePos);
        grid.fillOrUnfillDraggedMouse(mousePos);  //I need to call this here otherwise it won't fill the first block on a simple click unless you wiggle the mouse
    }
}

function mouseDragged()
{
    if(!locked)
    {
        var mousePos = new Point(mouseX, mouseY);
        grid.fillOrUnfillDraggedMouse(mousePos);
    }
}

function mouseReleased()
{
    locked = true;
}

function clearScreen()
{
    grid.clearGrid();
}