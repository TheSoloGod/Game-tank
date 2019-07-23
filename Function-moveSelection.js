function moveSelection(evt) {
    switch (evt.keyCode) {
        case 32://space
            gameBoard.buildMyBulletCase();
            break;
        case 37://left
            gameBoard.setMoveTank(0, ORIENTATION_LEFT, true, REVERSE);
            break;
        case 39://right
            gameBoard.setMoveTank(0, ORIENTATION_RIGHT, true, NONREVERSE);
            break;
        case 38://up
            gameBoard.setMoveTank(0, ORIENTATION_UP, false, REVERSE);
            break;
        case 40://down
            gameBoard.setMoveTank(0, ORIENTATION_DOWN, false, NONREVERSE);
            break;
    }
}