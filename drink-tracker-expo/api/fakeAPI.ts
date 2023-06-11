const editSession = async (value: any) => {};

const addNewSession = async (value: any) => {
    try {
        await AsyncStorage.setItem('sessions', value);
    } catch (e) {
        // saving error
    }
};

const getRecentSessions = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};

const getAllSessions = async (page: number) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};

const getSession = async (id: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};
