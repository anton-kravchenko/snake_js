var CANVAS_WIDTH =  1200;
var CANVAS_HEIGHT = 700;

var GRID_SIZE_X = 25;
var GRID_SIZE_Y = 25;

var LINK_SIZE_X = 20;
var LINK_SIZE_Y = 20;

// var UP    = new Link(0, -2); 
// var DOWN  = new Link(0, 2);
// var LEFT  = new Link(-2, 0);
// var RIGHT = new Link(2, 0); 

var UP    = new Link(0, -1); 
var DOWN  = new Link(0, 1);
var LEFT  = new Link(-1, 0);
var RIGHT = new Link(1, 0); 

var BORDER_THICKNESS = 2;
var BACKGROUND_COLOR = '222222';
var GRID_COLOR = '292929';
var BORDER_COLOR = '777777';
var HEAD_COLOR = 'Yellow';
var TAIL_COLOR = 'Yellow';

var FIELD_DX = ((CANVAS_WIDTH -  GRID_SIZE_X * LINK_SIZE_X) / 2).toFixed();
var FIELD_DY = ((CANVAS_HEIGHT - GRID_SIZE_Y * LINK_SIZE_Y) / 2).toFixed();

// var colors = new Array(	'Aqua', 'Aquamarine', 'BlueViolet', 'Chartreuse', 'Cyan', 'DarkOrange', 'DarkTurquoise', 
// 						'DeepPink', 'DeepSkyBlue', 'Fuchsia', 'Gold', 'GoldenRod', 'Green', 'GreenYellow',
// 						'LawnGreen', 'LightBlue', 'LightGreen', 'Lime', 'SpringGreen',
// 						'Turquoise', 'YellowGreen', 'Yellow', 'SpringGreen', 'PaleTurquoise', 'MediumSpringGreen'); 
var colors = new Array('Gold'); 

var canMove = true;