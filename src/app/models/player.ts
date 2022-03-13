export class Player {
    name: string = "";
    baseStats: Stats = new Stats();
    currentStats: Stats = new Stats();
    valueables: PlayerValueables = new PlayerValueables();
    items: Item[] = [];
}

class PlayerValueables {
    coins: Coins = new Coins();
    jewels: Jewels = new Jewels();
}

class Coins {
    gold: Number = 0;
    silver: Number = 0;
    copper: Number = 0;
}

class Jewels {
    fifties: Number = 0;
    hundreds: Number = 0;
    thousands: Number = 0;
}

class Stats {
    hitPoints: Number = 0;
    actionPoints: Number = 0;
}

export class Item {
    name: string | null = null;
    description: string | null = null;
    quantity: Number = 1;
}