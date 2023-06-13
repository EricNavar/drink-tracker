import axios from 'axios';
import { DrinkingSession } from '../commonTypes';
import { session } from '../data/dummysessions';
import {
    editSession as editSessionGuest,
    addNewSession as addNewSessionGuest,
    getRecentSessions as getRecentSessionsGuest,
    getAllSessions as getAllSessionsGuest,
    getSession as getSessionGuest,
} from './guestAccountAPI';

const isFullAccount = () => {
    return false;
};

export const editSession = async (value: any) => {
    if (isFullAccount()) {
        editSessionGuest(value);
    } else {
    }
};

export const addNewSession = async (value: any) => {
    if (isFullAccount()) {
        addNewSessionGuest(value);
    } else {
    }
};

export const getRecentSessions = async () => {
    if (isFullAccount()) {
        getRecentSessionsGuest();
    } else {
    }
};

export const getAllSessions = async (page: number) => {
    if (isFullAccount()) {
        getAllSessionsGuest(page);
    } else {
    }
};

export const getSession = async (id: string): Promise<DrinkingSession> => {
    if (isFullAccount()) {
        return getSessionGuest(id);
    } else {
        return session;
    }
};

export const editDrink = async (sessionId: string, drinkId: string) => {
    console.log('hello');
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
