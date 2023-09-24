// abstract class Robot {
//   constructor(
//     public name: string,
//     public model: string,
//     public durability: string,
//     public weight: number
//   ) {
//     this.name = name;
//     this.model = model;
//     this.durability = durability;
//     this.weight = weight;
//   }
//   get robotData() {
//     return `${this.name} robot number $${this.model} has a durability $${this.durability}
//     and weight $${this.weight}`;
//   }
// }

// class Advon extends Robot {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }
// }

// class Veax extends Robot {
//   constructor(
//     public id: number,
//     name: string,
//     model: string,
//     durability: string,
//     weight: number
//   ) {
//     super(name, model, durability, weight);
//   }
// }

// const avdonRobot = new Advon(112233, "Avdon12", "AN343", "Medium", 40);
// console.log(avdonRobot);
// const veaxRobot = new Veax(11245, "Veax9", "AB556", "Large", 50);
// console.log(veaxRobot);

// // const robot = new Robot();

