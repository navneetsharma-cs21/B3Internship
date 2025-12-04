//var scope
var a =23;
var a = 10;
function test(){
    var a =24;
    if(true){
        var a =25;
        console.log(a);
    }
    console.log(a);
}

console.log(a);
test();

//let scope

let b =23;
b = 30;
function test2(){
    let b =24;
    if(true){
        let b =25;
        console.log(b);
    }
    console.log(b);
}

console.log(b);
test2();