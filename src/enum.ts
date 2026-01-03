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
  success = "SUCCESS",
  error = "ERROR",
  pending = "PENDING",
}

const res: Status = Status.success;
console.log(res);

// const enum

const enum Size {
  small,
  medium,
  large,
}

const h1: Size = Size.small;
console.log(h1);

enum PostStatus {
  Draft = "DRAFT",
  Published = "PUBLISHED",
  Archived = "ARCHIVED",
}

type BlogPost = {
  title: string;
  content: string;
  status: PostStatus;
};

const post: BlogPost = {
  title: "Typescript enum",
  content: "Enums are very powerful",
  status: PostStatus.Published,
};
const post2: BlogPost = {
  title: "Typescript enum 2 " ,
  content: "Enums are very powerful 2 ",
  status: PostStatus.Archived,
};


console.log(post2)