interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

function handleApiResponse<T extends object>(res: ApiResponse<T>): T {
  if (res.status === 200) {
    console.log("Success", res.message);
    return res.data;
  } else {
    throw new Error("Something went Wrong");
  }
}

const userRes = handleApiResponse<{ name: string; age: number }>({
  status: 200,
  message: "Fetch data Successfully",
  data: {
    name: "Hasan",
    age: 21,
  },
});

console.log(userRes)
