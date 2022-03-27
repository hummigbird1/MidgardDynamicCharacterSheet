export class Player {
    name: string = "";
    type: string = "";
    // Grad
    level: number = 1;
    // Herkunft
    origin: string = "";
    // stand
    socialStanding: string = "";
    // Alter
    age: number = 0;
    // Beruf
    occupation: string = "";
    // Glaube
    faith: string = "";
    // Göttliche Gnade
    godlyGrace: number = 0;
    appearance: Appearance = new Appearance();
    stats: CharacterStats = new CharacterStats();
    attributes: Attributes = new Attributes();
    bonusStats: BonusStats = new BonusStats();
    defenseStats: DefenseStats = new DefenseStats();
    experience: ExperiencePoints = new ExperiencePoints();
    currencies: Currencies = new Currencies();
    potions: Potions = new Potions();
    // Ausrüstung
    equipment: Item[] = [];
    weapons: Weapon[] = [];

    // Spezialwaffe
    specialWeapon: Item = new Item();

    // Verbrauchs und Zaubermaterial
    items: ConsumableItem[] = [];

    // Fertigkeiten
    skills: Skill[] = [
        new Skill("Balancieren", 0),
        new Skill("Betäuben", 0),
        new Skill("Beredsamkeit", 0),
        new Skill("Beschatten", 0),
        // TODO add remaining other skills

    ];
    // Grundkenntnisse
    knowledge: Skill[] = [
        new Skill("Einhandschwerter", 0),
        new Skill("Stichwaffen", 0),
        new Skill("Einhandschlagwaffen", 0),
        new Skill("Spießwaffen", 0),
        new Skill("Zweihandschwerter", 0),
        new Skill("Zweihandschlagwaffen", 0),
        new Skill("Kettenwaffen", 0),
        new Skill("Stäbe", 0),
        new Skill("waffenloser Kampf", 0),
        new Skill("Bögen", 0),
        new Skill("Armbrüste", 0),
        new Skill("Schleudern", 0),
        new Skill("Wurfwaffen", 0),
        new Skill("Blasrohre", 0),
        new Skill("Schilde", 0),
        new Skill("Parierwaffen", 0),
        new Skill("Kampf in Vollrüstung", 0),
        new Skill("Lesen und Schreiben", 0),
        new Skill("Wissen von der Magie", 0),
        new Skill("Lesen von Zauberschrift", 0),

    ];

    magicSpells: MagicSpell[] = [];

    notes: string = "";
    remarks: Remark[] = [];
    currentQuest: Quest = new Quest();
}

class Appearance {
    // Größe
    height: number = 0;
    // Gewicht
    weight: number = 0;
    // Gestalt
    figure: string = "";
    // Aussehen (Flavortext)
    appearance: string = "";

}

class Quest {
    // Aktueller Auftrag
    description: string = "";

    //Quest Gegenstände
    questItems: Item[] = [];
    // Bekannte Figuren
    knownCharacters: Item[] = [];

    notes: string = "";
    remarks: Remark[] = [];
}

class Weapon {
    name: string = "";
    // Verzauberung
    enchantment: string = "";
    // EW: Angriff
    attack: number = 0;
    // Schaden
    damage: DiceValue = new DiceValue();
    // EW: Abwehr
    defense: number = 0;
    // -APV - Ausdauerpunkte Verlust
    actionPointLossValue: number = 0;
    // PP - Praxis Punkte
    misfortuneCount: number = 0;
}

export class Skill {
    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }
    // Fertigkeit<
    name: string = "";
    // EW
    level: number = 0;
    // EW Bonus durch Attribute
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

    // AP - Ausdauerpunkte
    staminaPointCost: number = 0;

    // Wirkung
    effectDescription: string = "";

    // Zauberdauer
    effectDuration: string = "";

    // Wirkungsdauer
    castDuration: string = "";

    // Wirkungsbereich
    areaOfEffect: string = "";

    // Zutaten
    requiredIngredients: ConsumableItem[] = [];

}

class DiceValue {
    diceSides: number = 0;
    numberOfDice: number = 0;
    bonusValue: number = 0;
}

class DefenseStats {
    // Rüstung - Flavortext
    armorDescription: string = "";
    //RK - Rüstungsklasse
    armorClass: string = "";
    // LPV - Lebenspunkte Verlustwert
    hitPointLossValue: number = 0;
    //Abwehr
    defense: number = 0;
    magicResistance: MagicResistance = new MagicResistance();
}

class ExperiencePoints {
    // GFP - Gesamterfahrungspunkte
    total: number = 0;
    // AEP - Allgemeine Erfahrungspunkte
    common: number = 0;
    //KEP - Kampferfahrungspunkte
    battle: number = 0;
    // ZEP - Zaubererfahrungspunkte
    magic: number = 0;
}

class BonusStats {
    // Ausdauer
    stamina: number = 0;
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
    // psy ZR - psychische Zauberresistenz
    psychologic: number = 0;

    // phs ZR - physische Zauberresistenz
    physical: number = 0;

    // phk ZR - physikalische Zauberresistenz
    environmental: number = 0;
}

class Attributes {
    // ST - Stärke
    strength: number = 0;
    // GE - Geschicklichkeit
    agility: number = 0;
    //KO - Konstitution
    constitution: number = 0;
    // IN - Intelligenz
    intelligence: number = 0;
    // ZT - Zaubertalent
    magicAffinity: number = 0;
    // AU - Aussehen
    looks: number = 0;
    // PA - Persönliche Ausstrahlung
    charisma: number = 0;
    // SB - Selbstbeherrschung
    selfControl: number = 0;
    //HGW - Handgemenge Wert / Raufen
    closeQuarterCombatAffinity: number = 0;
    //KAW - Kraftakt Wert
    showOfStrengthAffinitiy: number = 0;
    // RW - Reaktions Wert
    reaction: number = 0;
    // B - Bewegung
    movement: number = 0;
    // WLW - Wiederbelebungswert
    revivalAffinitiy: number = 0;
    // LP-Basis - Lebenspunkte-Basis
    hitPointsBase: number = 0;
    // GiT - Gift Toleranz
    poisonResistance: number = 0;

}

class Currencies {
    coins: Coins = new Coins();
    jewels: Jewels = new Jewels();
}

class Coins {
    // GS - Goldstücke
    gold: number = 0;
    // SS - Silberstücke
    silver: number = 0;
    // KS - Kupferstücke
    copper: number = 0;
}

class Jewels {
    // 50er
    fifties: number = 0;
    // 100er
    hundreds: number = 0;
    // 1000er
    thousands: number = 0;
}

class CharacterStats {
    current: Stats = new Stats();
    base: Stats = new Stats();
}

class Stats {
    // LP - Lebenspunkte
    hitPoints: number = 0;
    // AP - Ausdauerpunkte
    staminaPoints: number = 0;
}

class Item {
    name: string = "";
    description: string = "";
}

export class ConsumableItem extends Item {
    quantity: number = 1;
}

class Remark {
    shortText: string = "";
    text: string = "";
    // TODO Can we store links and images here?
}

class Potions {
    strength: StrengthPotions = new StrengthPotions();
    healing: HealingPotions = new HealingPotions();
}

class StrengthPotions {
    // 1W6
    small: number = 0;
    // 2W6
    large: number = 0;
}

class HealingPotions {
    // 1W6
    small: number = 0;
    // 2W6
    medium: number = 0;
    // 3W6
    large: number = 0;
}