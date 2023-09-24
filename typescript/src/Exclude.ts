
// type MixedTYPES = 
// "Hi"
// 666
// ["TS", "JS"]
// {name: "TS"; price: number}
// "Hey"
// {name: "JS"; price: number}
// 13
// {name: "Php"; price: 11.99}
// [12, 13, 14, 15];

// type NoStrings = Exclude<MixedTYPES, string>;
// type NotNumbers = Exclude<MixedTYPES, number>;
// type NotProduct = Exclude<MixedTYPES, {name: "TS"}>;
// type NotProductsArr1 = Exclude<MixedTYPES, []>;
// type NotProductsArr2 = Exclude<MixedTYPES, string[]>;
// type NotProductsArr3 = Exclude<MixedTYPES, number[]>;