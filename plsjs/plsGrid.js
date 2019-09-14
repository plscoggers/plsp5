//Contains all classes related to Grid to later be used for maze solving
//TODO:
//1.  Make draggable to fill squares -- complete
//2.  Change the 2D array to a 1D array...maybe?
//3.  Clean up duplicated code for drawing in squares


//Point
//Container for a point...duh.
class Point
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
}

//MazeCell
//Container for each of the grid locations on the screen
class MazeCell
{
    constructor(top_right, width=20, height=20)
    {
        this.top_right = top_right;
        this.height = height;
        this.width = width;
        this.is_filled = false;
    }

    display()
    {
        if(this.is_filled)
            fill(0);
        rect(this.top_right.x, this.top_right.y, this.width, this.height);
        fill(255);

    }
}

//The collection of MazeCells
class Grid
{
    constructor(block_height=20, block_width=20, canvas_height=500, canvas_width=500)
    {
        this.cell_list = [];
        this.cell_dim = block_height;
        this.grid_dim = canvas_height;
        this.fill = true;
        this.invalid = false;
        for(var i = 0; i < canvas_width / block_width; ++i)
        {
            this.cell_list[i] = [];
            for(var j = 0; j < canvas_height / block_height; ++j)
            {
                var top_right = new Point(i * block_width, j * block_height);
                this.cell_list[i][j] = new MazeCell(top_right, block_width, block_height);
            }      
        }
    }

    display()
    {
        for(var i = 0; i < this.cell_list.length; ++i)
        {
            for(var j = 0; j < this.cell_list[i].length; ++j)
            {
                this.cell_list[i][j].display();
            }
        }
    }

    getLocs(p)
    {
        return new Point(floor(p.x / this.cell_dim), floor(p.y / this.cell_dim));
    }

    boundsCheck(p)
    {
        if(p.x < this.cell_list.length)
        {
            return p.y < this.cell_list[p.x].length;
        }
        else
            return false;
    }

    //These two can probably be refactored a bit better
    setFill(p)
    {
        var pos = this.getLocs(p)
        if(this.boundsCheck(pos))
            this.fill = !this.cell_list[pos.x][pos.y].is_filled;
    }

    fillOrUnfillDraggedMouse(p)
    {
        var pos = this.getLocs(p);
        if(this.boundsCheck(pos))
            this.cell_list[pos.x][pos.y].is_filled = this.fill;
    }
}





