
var Robot = function(robot) {
    robot.ahead(12);
    robot.rotateCannon(2);
    robot.fire();

};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.ahead(100);
    robot.rotateCannon(180);
    robot.turn(80);
    robot.ahead(90);
    robot.rotateCannon(180);

};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    robot.fire();

};

Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
    robot.turn(90);
    robot.rotateCannon(90);
    robot.ahead(100);
    robot.rotateCannon(180);
};

Robot.prototype.onRobotCollision = function(ev) {
    var robot = ev.robot;
};

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
    robot.back(100);
    robot.rotate(100);
    robot.fire()
    robot.ahead(50);
};