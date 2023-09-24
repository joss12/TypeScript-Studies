interface RobotInterface{
    name: string;
    durability: string;
    weight: number;
    robotData(): string;
}

abstract class Robot implements RobotInterface {
    constructor(
      public name: string,
      protected model: string,
      public durability: string,
      public weight: number,

    ) {
      this.name = name;
      this.model = model;
      this.durability = durability;
      this.weight = weight;
    }
        robotData() {
      return `${this.name} robot number $${this.model} has a durability $${this.durability}
        and weight $${this.weight}`;
    }
  }

  interface AvdonRobot{
    id: number;
    durability: string;
    weight: number;
    getModel(model: string): string;
  }
  
  class Advon extends Robot {
    constructor(
      public id: number,
      name: string,
      model: string,
      durability: string,
      weight: number
    ) {
      super(name, model, durability, weight);
    }
  
    public getModel(model: string) {
      return (this.model = model);
    }
  }


  interface EgRobRobot{
    id: number;
    durability: string;
    weight: number;

  }
  
  class EgRob extends Robot {
    constructor(
      public id: number,
      name: string,
      model: string,
      durability: string,
      weight: number
    ) {
      super(name, model, durability, weight);
    }
  
    public getModel(model: string) {
      return (this.model = model);
    }
  }
  
  const avdonRobot = new Advon(112233, "Avdon12", "AN343", "Medium", 40);
  console.log(avdonRobot);

  const EgRobRobot = new EgRob(112233, "EgRob12", "AG343", "Medium", 40);
  console.log(EgRobRobot);
  