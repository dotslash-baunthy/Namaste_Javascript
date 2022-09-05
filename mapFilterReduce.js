const users = [
    { firstName: "Akshit", lastName: "Baunthiyal", age: 27 },
    { firstName: "Ananya", lastName: "Baunthiyal", age: 23 },
    { firstName: "Anita", lastName: "Baunthiyal", age: 50 },
    { firstName: "Subodh", lastName: "Kumar", age: 60 }
];

// Get firstName lastName from the list, array.map
// const output = users.map((user) => {
//     return user.firstName + " " + user.lastName;
// });

// Get object list of all users age: number, array.reduce
// const output = users.reduce((ageObject, cur) => {
//     if (ageObject[cur.age]) {
//         ageObject[cur.age]++;
//     }
//     else {
//         ageObject[cur.age] = 1;
//     }
//     return ageObject
// }, {});

// Get all users that have an age of over 30, function chaining filter.map
const functionChaining = users.filter((user) => {
    return user.age > 30;
}).map((user) => {
    return user.firstName;
});

// Get all users that have an age of over 30, array.reduce
const reduceOnly = users.reduce((userArr, user) => {
    if (user.age > 30) {
        userArr.push(user.firstName);
    }
    return userArr;
}, []);

console.log(reduceOnly);