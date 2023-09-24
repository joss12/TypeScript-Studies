/**
 * The "this" key word we call apply and bind methods
 */

//-------------------------------------------------- 1
const person = {
    objFunc(): void{
        // console.log("Object", this);
    },
};

person.objFunc();
//-------------------------------------------------- 2
class Test {
    classFunc(): void{
        // console.log("class", this)
    }
};

let test = new Test();
test.classFunc();

//-------------------------------------------------- 3
// function addition(): void{
//     console.log("function", this);
// }

// function addition(a: number, b:number): void{
//     console.log("function", this, a + b);
// }
// addition.call({name: "Eddy"}, 10, 55);
// addition.apply({name: "Eddy"}, [13, 10]);

// let operation1 = addition.bind({name: "Eddy"}, 12, 10)
// operation1();
// let operation2 = addition.bind({name: "Eddy"}, 250, 350)
// operation2();
