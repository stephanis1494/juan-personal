// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ballObject: {
    ballX: 600,
    ballY: 300,
    ballSpeedX: 5,
    ballSpeedY: 5,
    ballRadius: 10,
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
    BRICK_HEIGHT: 20,
    BRICK_GAP: 2,
    BRICK_ROWS: 6,
    BRICK_COLUMNS: 10,
    emptyRows: 3,
    bricksLeft: 0,
    specialBrickDestroyed: false
  },
  playerObject: {
    livesRemaining: 3,
    score: 0,
    comboStatus: false
  },
  powerUpObject: {
    x: 50,
    y: 50,
    speedY: 5,
    rad: 10,
    taken: false
  }
};
