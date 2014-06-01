function drawGrid ()
{
	ctx.fillStyle = BACKGROUND_COLOR;
	ctx.fillRect(FIELD_DX, FIELD_DY, GRID_SIZE_X * LINK_SIZE_X, GRID_SIZE_Y*LINK_SIZE_Y);
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	ctx.strokeStyle = GRID_COLOR;
	ctx.lineWidth = 1;
	for(var i = 0; i < GRID_SIZE_Y; i++)
		for(var j = 0; j < GRID_SIZE_X; j++)
		{
			// ctx.fillStyle = freeTiles[i*GRID_SIZE_X + j].color;													// color pallete
			// ctx.fillRect(FIELD_DX -(-j * LINK_SIZE_X), FIELD_DY -(-i * LINK_SIZE_Y), LINK_SIZE_X, LINK_SIZE_Y);
			ctx.strokeRect(FIELD_DX -(-j * LINK_SIZE_X), FIELD_DY -(-i * LINK_SIZE_Y), LINK_SIZE_X, LINK_SIZE_Y);
		}
	drawBorder();
}

function drawBorder()
{
	
	ctx.strokeStyle = BORDER_COLOR;
	ctx.lineWidth   = BORDER_THICKNESS;

	ctx.beginPath();
	ctx.moveTo(FIELD_DX-1, FIELD_DY-1);
		ctx.lineTo(FIELD_DX - (-GRID_SIZE_X * LINK_SIZE_X)+1, FIELD_DY-1);
		ctx.lineTo(FIELD_DX - (-GRID_SIZE_X * LINK_SIZE_X)+1, FIELD_DY -(-GRID_SIZE_Y * LINK_SIZE_Y)+1);
		ctx.lineTo(FIELD_DX-1, FIELD_DY - (-GRID_SIZE_Y * LINK_SIZE_Y)+1);
		ctx.lineTo(FIELD_DX-1, FIELD_DY-1);
	ctx.stroke();
}
