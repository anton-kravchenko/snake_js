var ex = document.getElementById("ex");
var ctx = ex.getContext("2d");

ex.width = CANVAS_WIDTH-100;
ex.height = CANVAS_HEIGHT-100;

var freeTiles = new Array();

initGrid();
drawBorder();
drawGrid();




var snake = new Snake();
function createNewTarget()
{
	var rand = Math.random();

	var linkNumber = (rand * (freeTiles.length-1)).toFixed();
	return (freeTiles.splice(linkNumber,1))[0];				// splice return array whats why we need to use indiraction
}
function initGrid()
{

for(var y = 0; y < GRID_SIZE_Y; y++)
	for(var x = 0; x < GRID_SIZE_Y; x++)
		freeTiles.push(new Link(x, y, 'Gold'));				// too easy. we need to insert tail of snake
}															// and cut new head of snake every move

anim();
function anim()
{
	if(canMove){
		snake.move();
		setTimeout(anim, 100);
	}
}
