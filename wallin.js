
var Robot = function(robot) {
    robot.clone();
    robot.ahead(12);
    robot.rotateCannon(2);
    robot.fire();

};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.ahead(50);
    robot.rotateCannon(180);

};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    var scanned = ev.scannedRobot;
    if(scanned.id !== robot.parentId && scanned.parentId !== robot.id) {
        robot.fire();
        robot.rotateCannon(-25);
        robot.ahead(10);
        
    } else {
        robot.ahead(50);
    }    

};

Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
    robot.ahead();
};

Robot.prototype.onRobotCollision = function(ev) {
    var robot = ev.robot;
    robot.back(10);
    robot.turn(20);
    robot.ahead(90);
};

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
    robot.back(5);
    robot.turn(90);
    robot.ahead(90);
};