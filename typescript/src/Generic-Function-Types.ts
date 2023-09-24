// type FuncType<T> = (elements: T[]) =>number;
type FuncType<T> = (elements: Array<T>) =>number;

let getArrayLength:FuncType<number> = (elements)=>{
    return elements.length;
}

let arrLength = getArrayLength([1,2,3]);
console.log(arrLength);