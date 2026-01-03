"use strict";
// numeric enum
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
const dir = Direction.up;
console.log(dir);
var Role;
(function (Role) {
    Role[Role["user"] = 1] = "user";
    Role[Role["admin"] = 2] = "admin";
    Role[Role["superAdmin"] = 3] = "superAdmin";
})(Role || (Role = {}));
const role = Role.superAdmin;
console.log(role);
//# sourceMappingURL=enum.js.map