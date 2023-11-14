import axios from 'axios';
import { Drink } from '../commonTypes';
import {
    endSession as endSessionGuest,
    addNewSession as addNewSessionGuest,
    getRecentSessions as getRecentSessionsGuest,
    getAllSessions as getAllSessionsGuest,
    getSession as getSessionGuest,
    addNewDrink as addNewDrinkGuest,
    deleteSession as deleteSessionGuest,
    editDrink as editDrinkGuest,
} from './guestAccountAPI';

const isFullAccount = () => {
    return false;
};

export const endSession = async (sessionId: string, timeEnd: number) => {
    if (isFullAccount()) {
        //TODO: expand this to apply to any attribute
        endSessionGuest(sessionId, timeEnd);
    } else {
        endSessionGuest(sessionId, timeEnd);
    }
};

export const addNewSession = async (
    sessionId: string,
    title: string,
    startTime: number
) => {
    if (isFullAccount()) {
        //TODO
        return addNewSessionGuest(sessionId, title, startTime);
    } else {
        return addNewSessionGuest(sessionId, title, startTime);
    }
};

export const getRecentSessions = async () => {
    if (isFullAccount()) {
        //TODO
        return getRecentSessionsGuest();
    } else {
        return getRecentSessionsGuest();
    }
};

export const getAllSessions = async () => {
    if (isFullAccount()) {
        //TODO
        return getAllSessionsGuest();
    } else {
        return getAllSessionsGuest();
    }
};

export const getSession = async (id: string) => {
    if (!id) {
        console.log('id does not exist');
    }
    if (isFullAccount()) {
        //TODO
        return getSessionGuest(id);
    } else {
        return getSessionGuest(id);
    }
};

export const editDrink = async (sessionId: string, drink:Drink) => {
    if (isFullAccount()) {
        //TODO
        return editDrinkGuest(sessionId, drink);
    } else {
        return editDrinkGuest(sessionId, drink);
    }
};

// returns newly created session
export const addNewDrink = async (sessionId: string, drink: Drink) => {
    if (isFullAccount()) {
        //TODO
        return addNewDrinkGuest(sessionId, drink);
    } else {
        return addNewDrinkGuest(sessionId, drink);
    }
};

export const sendFeedback = async (feedback: string) => {
    const data = {
        feedback: feedback,
        time: Date.now(),
    };
    const url = ``;
    return axios
        .post(url, data)
        .then(function (response: any) {
            return response;
        })
        .catch(function (error: any) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

export const deleteSession = async (sessionId: string) => {
    return deleteSessionGuest(sessionId);
};
