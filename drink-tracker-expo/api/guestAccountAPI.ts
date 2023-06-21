import AsyncStorage from '@react-native-async-storage/async-storage';
import { Drink, DrinkingLimitsProps, DrinkingSession } from '../commonTypes';

export const addNewSession = async (
    sessionId: string,
    title: string,
    timeStart: number
) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        const drinkingLimits: DrinkingLimitsProps = await getDrinkingLimits();
        const newSession: DrinkingSession = {
            _id: sessionId,
            title,
            timeStart,
            drinks: [],
            drinkLimit: drinkingLimits.totalDrinkLimit, // TODO: clean up this code
            timeInterval: drinkingLimits.timeInterval,
        };
        let sessions: DrinkingSession[];
        if (!jsonValue) {
            // if there's no sessions because the user just started the app for the first time
            sessions = [newSession];
        } else {
            sessions = jsonValue != null ? JSON.parse(jsonValue) : null;
            sessions.push(newSession);
        }
        await AsyncStorage.setItem('sessions', JSON.stringify(sessions));
        return newSession;
    } catch (e) {
        console.log('error');
    }
};

export const getRecentSessions = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('error');
    }
};

// 25-session pages
export const getAllSessions = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.log('error');
    }
};

export const getSession = async (id: string) => {
    console.log('looking for session of id', id);
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        const sessions = jsonValue != null ? JSON.parse(jsonValue) : null;
        const results = sessions.filter(
            (session: DrinkingSession) => session._id === id
        );
        if (results.length > 0) {
            return results[0];
        } else {
            console.log('session not found');
            return;
        }
    } catch (e) {
        console.log('error');
    }
};

// overwrites all the sessions to store only the provided ones
export const storeSessionsLocally = async (sessions: DrinkingSession[]) => {
    await AsyncStorage.setItem('sessions', JSON.stringify(sessions));
};

export const storeDrinkingLimits = async (
    drinkingLimits: DrinkingLimitsProps
) => {
    await AsyncStorage.setItem(
        'drinkingLimits',
        JSON.stringify(drinkingLimits)
    );
};

export const getDrinkingLimits = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('drinkingLimits');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('error');
    }
};

const addNewDrinkGuestHelper = (session: DrinkingSession, drink: Drink) => {
    session.drinks.push(drink);
    return session;
};

export const endSession = async (sessionId: string, timeEnd: number) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        const sessions = jsonValue != null ? JSON.parse(jsonValue) : null;
        sessions.map((session: DrinkingSession) =>
            session._id === sessionId
                ? Object.assign(session, { timeEnd: timeEnd })
                : session
        );
        console.log(sessions);
        // await AsyncStorage.setItem('sessions', sessions);
    } catch (e) {
        console.log('error');
    }
};

export const addNewDrink = async (sessionId: string, drink: Drink) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        const sessions = jsonValue != null ? JSON.parse(jsonValue) : null;
        sessions.map((session: DrinkingSession) =>
            session._id === sessionId
                ? addNewDrinkGuestHelper(session, drink)
                : session
        );
        await AsyncStorage.setItem('sessions', sessions);
    } catch (e) {
        console.log('error');
    }
};

export const deleteSession = async (sessionId: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        if (!jsonValue) {
            console.log('could not load sessions');
            return;
        }
        const sessions = JSON.parse(jsonValue);
        if (sessions && sessions.length) {
            const newSessions = sessions.filter((session: DrinkingSession) => session._id !== sessionId);
            await AsyncStorage.setItem('sessions', JSON.stringify(newSessions));
            return newSessions;
        }
        else {
            throw new Error('could not parse JSON')
        }
    } catch (e) {
        console.log('error');
    }
};

const deleteDrinkHelper = (session: DrinkingSession, drinkId: string) => {
    session.drinks = session.drinks.filter(drink => drink._id !== drinkId);
    return session;
};

export const deleteDrink = async (sessionId: string, drinkId: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        if (!jsonValue) {
            console.log('could not load sessions');
            return;
        }
        const sessions = JSON.parse(jsonValue);
        if (sessions && sessions.length) {
            const newSessions = sessions.filter((session: DrinkingSession) => {
                return session._id === sessionId ? deleteDrinkHelper(session, drinkId) : session;
            });
            await AsyncStorage.setItem('sessions', JSON.stringify(newSessions));
            return sessions.filter((session:DrinkingSession) => session._id === sessionId)[0];
        }
        else {
            throw new Error('could not parse JSON')
        }
    } catch (e) {
        console.log('error');
    }
};