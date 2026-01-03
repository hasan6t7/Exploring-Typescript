function handleApiResponse(res) {
    if (res.status === 200) {
        console.log("Success", res.message);
        return res.data;
    }
    else {
        throw new Error("Something went Wrong");
    }
}
const userRes = handleApiResponse({
    status: 200,
    message: "Fetch data Successfully",
    data: {
        name: "Hasan",
        age: 21,
    },
});
console.log(userRes);
export {};
//# sourceMappingURL=response_handler.js.map