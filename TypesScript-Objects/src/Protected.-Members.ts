// abstract class Robot {
//   constructor(
//     private name: string,
//     protected model: string,
//     private durability: string,
//     private weight: number
//   ) {
//     this.name = name;
//     this.model = model;
//     this.durability = durability;
//     this.weight = weight;
//   }
//   get robotData() {
//     return `${this.name} robot number $${this.model} has a durability $${this.durability}
//       and weight $${this.weight}`;
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

//   public getModel(model: string) {
//     return (this.model = model);
//   }
// }

// const avdonRobot = new Advon(112233, "Avdon12", "AN343", "Medium", 40);
// console.log(avdonRobot.getModel("AN343"));
