function Snake()
{
	dir = RIGHT;
	// head = new Link(2, 0, HEAD_COLOR);
	// tail = new Link(3, 0, TAIL_COLOR);
	head = new Link((GRID_SIZE_X/4).toFixed(), (GRID_SIZE_Y/2).toFixed(), HEAD_COLOR);
	tail = new Link((GRID_SIZE_X/4).toFixed()-1, (GRID_SIZE_Y/2).toFixed(), TAIL_COLOR);

	freeTiles.splice(head.y*GRID_SIZE_X + head.x, 1);
	freeTiles.splice(tail.y*GRID_SIZE_X + tail.x, 1);

	snakeBody = new Array(head, tail);
	target = createNewTarget();
	snakeMoveDirection = RIGHT;
	this.draw();
}
Snake.prototype = {
	draw 		: function()
	{
		for(var i = 0; i < snakeBody.length;i++)
		{
			ctx.fillStyle = snakeBody[i].color;
			ctx.fillRect(	FIELD_DX -(-snakeBody[i].x * LINK_SIZE_X), 
							FIELD_DY -(-snakeBody[i].y * LINK_SIZE_Y), 
							LINK_SIZE_X, LINK_SIZE_Y);
		}
		ctx.fillStyle = target.color;
			ctx.fillRect(	FIELD_DX -(-target.x * LINK_SIZE_X), 
							FIELD_DY -(-target.y * LINK_SIZE_Y), 
							LINK_SIZE_X, LINK_SIZE_X);

	},
	moveRight 	: function()
	{
		snakeMoveDirection = RIGHT;
		this.move(RIGHT);
	},
	moveLeft 	: function()
	{		
		snakeMoveDirection = LEFT;
		this.move(LEFT);
	},
	moveDown	: function()
	{
		snakeMoveDirection = DOWN;
		this.move(DOWN);
	},
	moveUp		: function()
	{
		snakeMoveDirection = UP;
		this.move(UP);
	},
	move 		: function(dir)
	{
		debugger;
		freeTiles.splice(tail.y*GRID_SIZE_X + tail.x, 0, tail); // return empty link to storage	// need fix

		var earnNewBlock = false;
		if(null == dir) dir = snakeMoveDirection;

		var tempLink = new Link(head.x -(-dir.x), head.y -(-dir.y));

		if(	head.x < 0 || head.x == GRID_SIZE_X ||	 						// check out of bounds
			head.y < 0 || head.y == GRID_SIZE_Y)
		{
			canMove = false;	
			debugger;
		}
			

			
		for (var i = 0; i < snakeBody.length; i++) 							// collid with body Links 
		{
			if(tempLink.y ==  snakeBody[i].y && tempLink.x == snakeBody[i].x)
			canMove = false;	
		}		
																
		if(canMove)
		if(tempLink.x == target.x && tempLink.y == target.y)	
		{
			snakeBody.splice(0, 0, new Link(target.x, target.y, target.color));
			head = snakeBody[0];
				delete target;
			target = createNewTarget();										// eat new link
			earnNewBlock = true;
			debugger;
		}

		if(canMove && !earnNewBlock)
		{
			for (var i = snakeBody.length -1; i > 0; i--)
			{
				snakeBody[i].x = snakeBody[i-1].x;
				snakeBody[i].y = snakeBody[i-1].y;
			}
			snakeBody[0].x = tempLink.x;
			snakeBody[0].y = tempLink.y;
		}

		delete tempLink;
		drawGrid();
		this.draw();

	}

}