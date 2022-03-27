export class Player {
    name: string = "";
    type: string = "";
    // Grad
    level: number = 1;
    // Herkunft
    origin: string = "";
    // stand
    age: number = 0;
    // Beruf
    occupation: string = "";
    // Glaube
    faith: string = "";
    // Göttliche Gnade
    godlyGrace: number = 0;
    height: number = 0;
    weight: number = 0;
    // Gestalt
    figure: string = "";
    // Aussehen
    appearance: string = "";
    baseStats: Stats = new Stats();
    bonus: Bonus = new Bonus();
    currentStats: Stats = new Stats();
    defenseStats: DefenseStats = new DefenseStats();
    attributes: Attributes = new Attributes();
    experienve: Experience = new Experience();
    valueables: PlayerValueables = new PlayerValueables();
    // Ausrüstung
    equipment: string = "";
    items: Item[] = [];

    weapons: Weapon[] = [];
    specialWeapon: string = "";
    // FErtigkeiten
    abilities: Ability[] = [];
    // Grundkenntnisse
    baseAbilities: Ability[] = [];

    currentQuest: Quest = new Quest();

    magicSpells: MagicSpell[] = [];
}

class Quest {
    description: string = "";
    
    //Quest Gegenstände
    questItems: string = ""; // TODO Might be more comfortable as a string list?
    // Bekannte Figuren
    knownCharacters: string = ""; // TODO Might be more comfortable as a string list?
}

class Weapon{
    name: string = "";
    enchantment: string = "";
    // EW: Angriff
    attack: number = 0;
    // Schaden
    damage: DiceValue = new DiceValue();
    // EW: Abwehr
    defense: number = 0;
    // -APV
    actionPointLossValue: number = 0;
    // PP
    misfortuneCount: number = 0;
}

class Ability {
    // Fertigkeit
    name: string = "";
    // EW
    level: number = 0;

    characterBonus: number = 0;

    get total(): number {
        return this.level + this.characterBonus;
    }

}

class MagicSpell {
    // Zauber
    name: string = "";

    // Art
    type: string = "";

    // AP
    actionPointCost: number = 0;

    // Wirkung
    effectDescription: string = "";

    // Zauberdauer
    effectDuration: string = "";

    // Wirkungsdauer
    castDuration: string = "";

    // Wirkungsbereich
    areaOfEffect: string = "";
    
    // Zutaten
    ingredients: string = "";

}

class DiceValue {
    diceSides: number = 0;
    numberOfDice: number = 0;
    bonusValue: number = 0;
}

class DefenseStats {
    // Rüstung
    armorDescription: string = "";
    //RK
    armorClass: string = "";
    // LPV
    hitPointLossValue: number = 0;
    //Abwehr
    defense: number = 0;
    magicResistance: MagicResistance = new MagicResistance();
}

class Experience {
    // GFP
    total: number = 0;
    // AEP
    common: number = 0;
    //KEP
    battle: number = 0;
    // ZEP
    magic: number = 0;
}

class Bonus {
    // Ausdauer
    endurance: number = 0;
    // Zaubern
    magic: number = 0;
    // Angriff
    attack: number = 0;
    // Schaden
    damage: number = 0;
    //Abwehr
    defense: number = 0;
    
    magicResistance = new MagicResistance();
    
}

class MagicResistance {
    // psy ZR
    psychologic: number = 0;

    // phs ZR
    physical: number = 0;

    // phk ZR
    environmental: number = 0;
}

class Attributes {
    // ST
  strength: number = 0;
  // GE
  agility: number= 0;
  //KO
  constitution: number = 0;
  // IN
  intelligence: number = 0;
  // ZT
  magicAffinity: number = 0;
  // AU
  looks: number = 0;
  // PA
  charisma: number = 0;
  // SB
  selfControl: number = 0;
  //HGW
  closeQuarterCombatAffinity: number = 0;
  //KAW
  showOfStrengthAffinitiy: number = 0;
  // RW
  reaction: number = 0;
  // B
  movement: number = 0;
  // WLW
  resurrectionAffinitiy: number = 0;
  // LB-Basis
  hitPointsBase: number = 0;
  // GiT
  poisonResistance: number = 0;

}

class PlayerValueables {
    coins: Coins = new Coins();
    jewels: Jewels = new Jewels();
}

class Coins {
    gold: number = 0;
    silver: number = 0;
    copper: number = 0;
}

class Jewels {
    fifties: number = 0;
    hundreds: number = 0;
    thousands: number = 0;
}

class Stats {
    hitPoints: number = 0;
    actionPoints: number = 0;
}

export class Item {
    name: string = "";
    description: string = "";
    quantity: number = 1;
}
