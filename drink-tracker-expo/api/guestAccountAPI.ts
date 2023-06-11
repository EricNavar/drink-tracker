import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrinkingSession } from '../commonTypes';

export const editSession = async (value: any) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        const sessions = jsonValue != null ? JSON.parse(jsonValue) : null;
        sessions.push(value);
        await AsyncStorage.setItem('sessions', value);
    } catch (e) {
        console.log('error')
    }
};

export const addNewSession = async (value: any) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        const sessions = jsonValue != null ? JSON.parse(jsonValue) : null;
        sessions.push(value);
        await AsyncStorage.setItem('sessions', value);
    } catch (e) {
        console.log('error')
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

export const getAllSessions = async (page: number) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('error');
    }
};

export const getSession = async (id: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem('sessions');
        const sessions = jsonValue != null ? JSON.parse(jsonValue) : null;
        const results = sessions.filter((session: DrinkingSession) => session._id === id);
        if (results.length > 0) {
            return results[0];
        }
        else {
            console.log('session not found');
        }
    } catch (e) {
        console.log('error');
    }
};
