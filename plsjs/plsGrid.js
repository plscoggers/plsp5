//Contains all classes related to Grid to later be used for maze solving
//TODO:
//1.  Make draggable to fill squares


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

    fillOrUnfillClickedCell(x,y)
    {
        if(x > this.grid_dim || y > this.grid_dim)
            return;
        var width_pos = floor(x / this.cell_dim);
        var height_pos = floor(y / this.cell_dim);
        this.cell_list[width_pos][height_pos].is_filled = !this.cell_list[width_pos][height_pos].is_filled;
    }
}





