import AsyncStorage from '@react-native-async-storage/async-storage';

export const editSession = async (value: any) => {
    try {
        await AsyncStorage.setItem('sessions', value)
    } catch (e) {
        // saving error
    }
}

export const addNewSession = async (value: any) => {
    try {
        await AsyncStorage.setItem('sessions', value)
    } catch (e) {
        // saving error
    }
}

export const getRecentSessions = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

export const getAllSessions = async (page: number) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

export const getSession = async (id: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}
