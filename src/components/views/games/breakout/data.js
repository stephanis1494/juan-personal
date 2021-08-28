// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ballObject: {
    ballX: 600,
    ballY: 300,
    ballSpeedX: 4,
    ballSpeedY: 5,
    initialBallSpeedX: 4, 
    initialBallSpeedY: 5,
    ballRadius: 8,
  },
  paddleObject: {
    PADDLE_WIDTH: 150,
    PADDLE_THICKNESS: 10,
    paddleX: 0,
    paddleXOffset: 0,
    DISTANCE_FROM_BOTTOM: 10
  },
  bricksetObject: {
    BRICK_WIDTH: 80,
    BRICK_HEIGHT: 15,
    BRICK_GAP: 2, // space between bricks
    BRICK_ROWS: 8, // brick rows, counting the empty rows, not counting the one that is added with "playerObject.level"
    BRICK_COLUMNS: 10, // how many brick columns
    //// emptyRows are subtracted to BRICK_ROWS
    emptyRows: 3, // empty rows before the bricks
    bricksLeft: 0,
    specialBrickDestroyed: false
  },
  playerObject: {
    livesRemaining: 3,
    score: 0,
    comboStatus: false, // it's true when the ball hits two or more bricks in a row
    gameStatus: 'run', // alternates between run and paused,
    ballLaunched: false, // true when the ball has been launched
    level: 1

  },
  powerUpObject: {
    x: 50,
    y: 50,
    speedY: 5,
    rad: 10,
    taken: false
  }
};
