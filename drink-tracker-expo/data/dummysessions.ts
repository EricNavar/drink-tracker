import { DrinkingSession } from '../commonTypes';

export const session: DrinkingSession = {
    _id: '1234',
    title: "Blake's birthday party",
    timeInterval: 30,
    drinkLimit: 8,
    drinks: [
        {
            _id: 'd1',
            timeDrank: new Date('2023-05-25T22:40:00.000Z').getTime(),
            drinkName: 'Pink Whitney',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            _id: 'd2',
            timeDrank: new Date('2023-05-25T22:45:00.000Z').getTime(),
            drinkName: 'Whiskey Sour',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            _id: 'd3',
            timeDrank: new Date('2023-05-25T22:50:00.000Z').getTime(),
            drinkName: 'Moscow Mule',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            _id: 'd4',
            timeDrank: new Date('2023-05-25T22:55:00.000Z').getTime(),
            drinkName: 'Vodka Mio',
            drinkType: 'Liquor',
            weight: 1,
        },
        {
            _id: 'd5',
            timeDrank: new Date('2023-05-25T23:00:00.000Z').getTime(),
            drinkName: 'Malibu Seltzer',
            drinkType: 'Seltzer',
            weight: 1,
        },
        {
            _id: 'd6',
            timeDrank: new Date('2023-05-25T23:05:00.000Z').getTime(),
            drinkName: 'Bud Light funnel',
            drinkType: 'Beer',
            weight: 2,
        },
        {
            _id: 'd7',
            timeDrank: new Date('2023-05-25T23:10:00.000Z').getTime(),
            drinkName: 'Gummy Bear shot',
            drinkType: 'Liquor',
            weight: 1,
        },
    ],
    timeStart: new Date('2023-05-25T22:35:35.000Z').getTime(),
    timeEnd: new Date('2023-05-25T23:35:50.000Z').getTime(),
};

export const session2: DrinkingSession = {
    _id: '1235',
    title: "Blake's birthday party",
    timeStart: new Date('2023-05-25T22:35:35.000Z').getTime(),
    timeEnd: new Date('2023-05-25T23:35:50.000Z').getTime(),
    drinks: [
        {
            _id: 'd1',
            timeDrank: new Date('2023-05-25T22:40:00.000Z').getTime(),
            drinkName: 'Pink Whitney',
            drinkType: 'Liquor',
            weight: 1,
        },
    ],
    timeInterval: 30,
    drinkLimit: 8,
};

export const session3: DrinkingSession = {
    _id: '1236',
    title: "Blake's birthday party",
    timeStart: new Date('2023-05-25T22:35:35.000Z').getTime(),
    timeEnd: new Date('2023-05-25T23:35:50.000Z').getTime(),
    drinks: [
        {
            _id: 'd1',
            timeDrank: new Date('2023-05-25T22:40:00.000Z').getTime(),
            drinkName: 'Pink Whitney',
            drinkType: 'Liquor',
            weight: 1,
        },
    ],
    timeInterval: 30,
    drinkLimit: 8,
};

export const sessions: DrinkingSession[] = [session, session2, session3];
