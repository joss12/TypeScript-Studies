type magazineInfo = {
    name: string;
    author: string;
    sales: number;
    international: boolean;
    price: number;
    publicationYear: number;
}

let magazine:magazineInfo = {
    name: "Health unleashed",
    author: "Eddy Mouity",
    sales: 1444,
    international:true,
    price:10.99,
    publicationYear: 2012
}
console.log(magazine)

// console.log(magazine.author);
// console.log(magazine.name);

type MagazineName = {
    name: string;
    author: string
}

let magazineName: MagazineName = magazine;
 console.log(magazineName);
console.log(magazine.name);
console.log(magazine.author);