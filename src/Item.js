const Item = class {
    constructor(
      name, 
      group, 
      AD, 
      AP, 
      crit,
      lethality,
      attackSpeed,
      armorPen,
      magicPen,
      armor, 
      MR, 
      tenacity,
      MS, 
      health, 
      healthRegen,
      mana, 
      manaRegen,
      haste,
      lifesteal,
      healShieldPower,
      cost, 
      image, 
      passives=[], 
      actives=[]
    ) {
        this.name = name;
        this.group = group;
        this.AD = AD;
        this.AP = AP;
        this.crit = crit;
        this.lethality = lethality;
        this.attackSpeed = attackSpeed;
        this.armorPen = armorPen;
        this.magicPen = magicPen;
        this.armor = armor;
        this.MR = MR;
        this.tenacity = tenacity;
        this.MS = MS;
        this.health = health;
        this.healthRegen = healthRegen;
        this.mana = mana;
        this.manaRegen = manaRegen;
        this.haste = haste;
        this.lifesteal = lifesteal;
        this.healShieldPower = healShieldPower;
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

