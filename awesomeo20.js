
var Robot = function(robot) {
    robot.clone();

};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.ahead(1);
    robot.rotateCannon(20);
    robot.turn(1);

};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    var scanned = ev.scannedRobot;
    if(scanned.id !== robot.parentId && scanned.parentId !== robot.id) {
        robot.fire();
        robot.rotateCannon(-25);
        robot.ahead(10);
        
    } else {
        robot.ahead(100);
    }    

};

Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
    if (robot.availableDisappears == 1) {
      robot.disappear();
      robot.turnRight(90);
      robot.ahead(200);
    };
    robot.turnRight(5);
    robot.ahead(20);
    robot.turn(ev.bearing);
};

Robot.prototype.onRobotCollision = function(ev) {
    var robot = ev.robot;
    robot.back(30);
};

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
    robot.back(50);
    robot.turn(130);
};
