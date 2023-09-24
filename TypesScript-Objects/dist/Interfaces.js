"use strict";
class Robot {
    constructor(name, model, durability, weight) {
        this.name = name;
        this.model = model;
        this.durability = durability;
        this.weight = weight;
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
class Advon extends Robot {
    constructor(id, name, model, durability, weight) {
        super(name, model, durability, weight);
        this.id = id;
    }
    getModel(model) {
        return (this.model = model);
    }
}
class EgRob extends Robot {
    constructor(id, name, model, durability, weight) {
        super(name, model, durability, weight);
        this.id = id;
    }
    getModel(model) {
        return (this.model = model);
    }
}
const avdonRobot = new Advon(112233, "Avdon12", "AN343", "Medium", 40);
console.log(avdonRobot);
const EgRobRobot = new EgRob(112233, "EgRob12", "AG343", "Medium", 40);
console.log(EgRobRobot);
