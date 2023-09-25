// function
function displaygreeting(name){
    const message = `hello, ${name}!`;
    console.log(message);
}
displaygreeting('lzt');

// setTimeout
setTimeout(() => {
    console.log('3 seconds has elapsed');
}, 3000);

let a = 2;

// switch
switch(a){
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`the value is ${a}`);

// 三元表达式
let firstnumber = 10;
let secondnumber = 20;
let biggestnumber = firstnumber > secondnumber ? firstnumber: secondnumber;
console.log(`${biggestnumber}`);

// 循环
for (let i = 1; i <10; i++) {
    console.log(i);
}

let j = 0;
while (j<10) {
    console.log(j);
    j++;
}

let icecreamflavors = ["1", "2","3","4","5"];
for (let h = 0; h < icecreamflavors.length; h++) {
    console.log(`${icecreamflavors[h]}`);
}




