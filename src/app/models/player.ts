export class Player {
    name: string = "";
    baseStats: Stats = new Stats();
    currentStats: Stats = new Stats();
    attributes: Attributes = new Attributes();
    valueables: PlayerValueables = new PlayerValueables();
    items: Item[] = [];
}

class Attributes {
  strength: number = 0;
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
    name: string | null = null;
    description: string | null = null;
    quantity: number = 1;
}
