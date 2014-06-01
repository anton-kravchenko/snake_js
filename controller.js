document.onkeydown = function(e) {
    e = e || event;
    switch (e.keyCode) {
        case 38:  
            snake.moveUp();
                break;
        case 40: 
            snake.moveDown();
        	   break; 
        case 37:
            snake.moveLeft();
                break; 
        case 39:
            snake.moveRight();
                break; 
    }
}
