// class Robot {
//   constructor(
//     public readonly id: number,
//     public readonly model: string,
//     public name: string,
//     private sentient: boolean
//   ) {
//     this.id = id;
//     this.model = model;
//     this.name = name;
//     this.sentient = sentient;
//   }
//   walk(): void {
//     console.log("The robot can walk");
//   }

//   abilityTothink(): boolean {
//     return this.sentient;
//   }
// }

// const robot = new Robot(12345, "GBRT", "GR-lite", true);

// console.log(robot);
// console.log(robot.abilityTothink());
// Property 'sentient' is private and only accessible within class 'Robot'
// robot.sentient

class Book {
  constructor(
    public title: string,
    public author: string,
    public ISBN: number,
    public numCopies: number,
    private verified: boolean

  ) {
    this.title = title;;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
    this.verified = verified;
  }

  getAvaibility(){
    return this.getBook()
  }
  getBook(){
    if(this.numCopies === 0){
        return "Out of stock"
    }else if(this.numCopies < 10){
        return "Low stock"
    }
    return "In stock"
  }

  sell(numCopiesSold = 1){
    this.numCopies -= numCopiesSold;
  }

  stock(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
  }

  getVerification(): boolean {
       return this.verified;
  }
}

const JsBook = new Book("TypeScript", "Eddy Mouity", 123456, 5, true);
console.log(JsBook.getBook());
JsBook.stock(12);
console.log(JsBook.getBook());
JsBook.sell(17);
console.log(JsBook.getBook());
console.log(JsBook.getVerification())

