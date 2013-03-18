
var Robot = function(robot) {
    robot.clone();
    robot.rotateCannon(360); 
    robot.turn(360)

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
    robot.turn(100);
    robot.ahead(150);
    robot.rotateCannon(180);
    robot.turn(40);
    robot.rotateCannon(30);
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