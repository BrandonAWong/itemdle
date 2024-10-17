const Item = class {
    constructor(name, group, AD, AP, armor, MR, health, cost, image, passives=[], actives=[]) {
        this.name = name;
        this.group = group;
        this.AD = AD;
        this.AP = AP;
        this.armor = armor;
        this.MR = MR;
        this.health = health;
        this.cost = cost;
        this.image = image;
        this.passives = passives;
        this.actives = actives;
    }

    get hasPassives() {
        return this.passives.length > 0;
    }

    get hasActives() {
        return this.actives.length > 0;
    }

    *getStats() {
        yield this.AD;
        yield this.AP;
        yield this.armor;
        yield this.MR;
        yield this.health;
        yield this.cost;
    }
}

export default Item;
