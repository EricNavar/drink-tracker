type DrinkingSession = {
    timeStart: Date;
    timeEnd: Date;
    drinks: Drink[];
    title: string;
}

type Drink = {
    timeDrank: Date;
    drinkName: string;
    drinkType: string;
    weight: number;
};