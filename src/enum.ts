// numeric enum

enum Direction {
  up,
  down,
  left,
  right,
}

const dir: Direction = Direction.up;
console.log(dir);

enum Role {
  user = 1,
  admin,
  superAdmin,
}

const role: Role = Role.superAdmin;
console.log(role);

// string enum

enum Status {
  success="SUCCESS",
  error="ERROR",
  pending ="PENDING",
}

const res:Status = Status.success
console.log(res)
