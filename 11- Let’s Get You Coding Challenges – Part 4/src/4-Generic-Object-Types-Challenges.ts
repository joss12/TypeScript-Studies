/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a generic object type for an air conditioner with 2 properties that can only accept one specific type
*/
// ----------------------------------------------------
    // type AirConditioner<T> = {
    //     winter:T,
    //     summer:T
    // }

    // const myAC: AirConditioner <string>={
    //     winter:'warm',
    //     summer:'cold'
    // }
    // console.log(myAC)
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create a generic object type for a smartphone with 3 properties that can accept any type of value. Finally, store the object property values in an array
*/
// ----------------------------------------------------
    type Smartphone<T1, T2, T3> = {
        manufacturer:T1,
        model:T2,
        rating:T3
    }
    const myPhone: Smartphone <string, string, number> ={
        manufacturer: "Samsung",
        model:"J6+",
        rating:3.5
    }
    const phoneSpecs:(string | number | boolean)[]=
    [myPhone.manufacturer, myPhone.model, myPhone.rating]
console.log(phoneSpecs)
// ----------------------------------------------------
