import { DrinkingSession } from '../commonTypes';

export const session: DrinkingSession = {
    title: "Blake's birthday party",
    timeStart: new Date('June 25, 2023 08:24:00'),
    timeEnd: new Date('June 25, 2023 012:24:00'),
    drinks: [
        {
            timeDrank: new Date('June 25, 2023 08:00:00'),
            drinkName: 'Pink Whitney',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            timeDrank: new Date('June 25, 2023 08:10:00'),
            drinkName: 'Whiskey Sour',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            timeDrank: new Date('June 25, 2023 08:20:00'),
            drinkName: 'Moscow Mule',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            timeDrank: new Date('June 25, 2023 08:30:00'),
            drinkName: 'Vodka Mio',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            timeDrank: new Date('June 25, 2023 08:40:00'),
            drinkName: 'Malibu Seltzer',
            drinkType: 'Seltzer',
            weight: 1,
        },
        {
            timeDrank: new Date('June 25, 2023 08:50:00'),
            drinkName: 'Bud Light funnel',
            drinkType: 'Beer',
            weight: 2,
        },
        {
            timeDrank: new Date('June 25, 2023 08:50:00'),
            drinkName: 'Gummy Bear shot',
            drinkType: 'Liquor',
            weight: 1,
        },
    ],
};

export const sessions: DrinkingSession[] = [session];
