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

export const editSession = async (session: DrinkingSession) => {
    if (isFullAccount()) {
        //TODO
        editSessionGuest(session);
    } else {
        editSessionGuest(session);
    }
};

export const addNewSession = async (newSession: DrinkingSession) => {
    if (isFullAccount()) {
        //TODO
        addNewSessionGuest(newSession);
    } else {
        addNewSessionGuest(newSession);
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
    if (isFullAccount()) {
        //TODO
        return getSessionGuest(id);
    } else {
        return getSessionGuest(id);
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
