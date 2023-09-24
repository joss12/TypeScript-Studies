interface Product{
    name: string;
    price?: number;
    rating?: number;
    sales?: number
}


const onlineCourse: Product = {
    name: "TS Bootcamp",
    price: 10.44,
    rating: 4.6,
    sales: 1111
}

type PartialTYPE<Type> ={
    [Key in keyof Type]?: Type[Key]
}

const inPersonWorkshop: PartialTYPE<Product> = {
    name:"TS Workhop",
}

console.log(onlineCourse);
console.log(inPersonWorkshop);