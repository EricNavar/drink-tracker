import { DrinkingSession } from '../commonTypes';

export const session: DrinkingSession = {
    _id: '1234',
    timeInterval: 30,
    drinkLimit: 8,
    title: "Blake's birthday party",
    timeStart: new Date('2023-06-25T22:35:00.000Z'),
    timeEnd: new Date('2023-06-25T23:35:00.000Z'),
    drinks: [
        {
            _id: 'd1',
            timeDrank: new Date('2023-06-25T22:40:00.000Z'),
            drinkName: 'Pink Whitney',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            _id: 'd2',
            timeDrank: new Date('2023-06-25T22:45:00.000Z'),
            drinkName: 'Whiskey Sour',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            _id: 'd3',
            timeDrank: new Date('2023-06-25T22:50:00.000Z'),
            drinkName: 'Moscow Mule',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            _id: 'd4',
            timeDrank: new Date('2023-06-25T22:55:00.000Z'),
            drinkName: 'Vodka Mio',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            _id: 'd5',
            timeDrank: new Date('2023-06-25T23:00:00.000Z'),
            drinkName: 'Malibu Seltzer',
            drinkType: 'Seltzer',
            weight: 1,
        },
        {
            _id: 'd6',
            timeDrank: new Date('2023-06-25T23:05:00.000Z'),
            drinkName: 'Bud Light funnel',
            drinkType: 'Beer',
            weight: 2,
        },
        {
            _id: 'd7',
            timeDrank: new Date('2023-06-25T23:10:00.000Z'),
            drinkName: 'Gummy Bear shot',
            drinkType: 'Liquor',
            weight: 1,
        },
    ],
};

export const sessions: DrinkingSession[] = [session];
