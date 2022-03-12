export class Player {
    name: string = "";
    valueables: PlayerValueables = new PlayerValueables()
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