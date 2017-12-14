angular.module('App').service('motionSrv', ['$q', 'exBaseSrv', function ($q, exBaseSrv) {
    this.getX = function () {
        return exBaseSrv.getJSON("/api/notice/");
    };
    this.moveForward = function (params) {
        return exBaseSrv.getJSON("/controller/drive/forward/",params);
    };
    this.moveBackward = function (params) {
        return exBaseSrv.getJSON("/controller/drive/backward/",params);
    };
    this.turnLeft = function (params) {
        return exBaseSrv.getJSON("/controller/turn/left/",params);
    };
    this.turnRight = function (params) {
        return exBaseSrv.getJSON("/controller/turn/right/",params);
    };
    this.closeDoor = function (params) {
        return exBaseSrv.getJSON("/controller/door/open/",params);
    };
    this.openDoor = function (params) {
        return exBaseSrv.getJSON("/controller/door/close/",params);
    };
}]);