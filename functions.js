var x = 1;

a();
b();
console.log(x);

function a() {
    var x = 100
    console.log(x);
}

function b() {
    var x = 1000;
    console.log(x);
}

// function a() {
//     var x = 10;
// }
// // a();
// console.log(a.x);