function getArrayItem<T>(item: Array<T>):T{
    return item[2]
}

// let number = getArrayItem<number>([1,2,3,4,5]);
let someStr = getArrayItem<string>(["Hey", "Hi", "Eddy", "Boss"]);

console.log(someStr);