// numeric enum
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
// string enum
var Status;
(function (Status) {
    Status["success"] = "SUCCESS";
    Status["error"] = "ERROR";
    Status["pending"] = "PENDING";
})(Status || (Status = {}));
const res = Status.success;
console.log(res);
// const enum
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
const h1 = Size.small;
console.log(h1);
var PostStatus;
(function (PostStatus) {
    PostStatus["Draft"] = "DRAFT";
    PostStatus["Published"] = "PUBLISHED";
    PostStatus["Archived"] = "ARCHIVED";
})(PostStatus || (PostStatus = {}));
const post = {
    title: "Typescript enum",
    content: "Enums are very powerful",
    status: PostStatus.Published,
};
const post2 = {
    title: "Typescript enum 2 ",
    content: "Enums are very powerful 2 ",
    status: PostStatus.Archived,
};
console.log(post2);
export {};
//# sourceMappingURL=enum.js.map