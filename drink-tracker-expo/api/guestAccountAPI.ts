import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrinkingLimitsProps, DrinkingSession } from '../commonTypes';
import { session } from '../data/dummysessions';

export const editSession = async (session: DrinkingSession) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        const sessions = jsonValue != null ? JSON.parse(jsonValue) : null;
        sessions.push(session);
        await AsyncStorage.setItem('sessions', sessions);
    } catch (e) {
        console.log('error');
    }
};

export const addNewSession = async (session: DrinkingSession) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        let sessions: DrinkingSession[];
        if (!jsonValue) {
            sessions = [session];
        } else {
            sessions = jsonValue != null ? JSON.parse(jsonValue) : null;
            sessions.push(session);
        }
        await AsyncStorage.setItem('sessions', JSON.stringify(sessions));
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
    // try {
    //     const jsonValue = await AsyncStorage.getItem('sessions');
    //     const sessions = jsonValue != null ? JSON.parse(jsonValue) : null;
    //     const results = sessions.filter(
    //         (session: DrinkingSession) => session._id === id
    //     );
    //     if (results.length > 0) {
    //         return results[0];
    //     } else {
    //         console.log('session not found');
    //     }
    // } catch (e) {
    //     console.log('error');
    // }
    return session;
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
