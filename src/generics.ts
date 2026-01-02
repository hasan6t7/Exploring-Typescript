// without generics

function logString(data: string): void {
  console.log(data);
}

function logNumber(data: number): void {
  console.log(data);
}

function logBoolean(data: boolean): void {
  console.log(data);
}

logString("Hasan");
logNumber(22);
logBoolean(true);

// with generics

function logData<T>(data: T): void {
  console.log(data);
}

logData<string>("Hasanujjaman");
logData<number>(22);
logData<boolean>(true);

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<{ name: string }> = {
  success: true,
  data: {
    name: "Hasan",
  },
};

const numberResponse: ApiResponse<number> = {
  success: true,
  data: 22,
};



// constraints 


interface HasId {
  id: number;
}

const id1: HasId = {
  id: 999999,
};

function getId<T extends HasId>(item: T): number {
  return item.id;
}

const result = getId(id1);
console.log(`Id is ${result}`);
