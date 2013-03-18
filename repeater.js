
var Robot = function(robot) {

};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.ahead(100);
    robot.rotateCannon(360);
    robot.ahead(100);

};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    var scanned = ev.scannedRobot;
    if(scanned.id !== robot.parentId && scanned.parentId !== robot.id) {
        robot.fire();
        robot.rotateCannon(-25);
        robot.ahead(5);
        
    } else if (robot.parentId > 1) {
        robot.rotateCannon(360);
    } else {
        robot.ahead(100);
    }    

};

Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
    if (robot.availableDisappears == 1) {
        robot.disappear();
      robot.ahead(200);
    }
    robot.ahead(400);
};

Robot.prototype.onRobotCollision = function(ev) {
    var robot = ev.robot;
};

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
    robot.turnRight(15);
};