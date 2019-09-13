let grid = new Grid();

function setup()
{
    createCanvas(1000,1000);
}

function draw()
{
    //grid.debug_test();
    grid.display();
}

function mouseClicked()
{
    grid.fillOrUnfillClickedCell(mouseX, mouseY);
}