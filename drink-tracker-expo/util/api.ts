import {
    editSession as editSessionGuest,
    addNewSession as addNewSessionGuest,
    getRecentSessions as getRecentSessionsGuest,
    getAllSessions as getAllSessionsGuest,
    getSession as getSessionGuest
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

export const getSession = async (id: string) => {
    if (isFullAccount()) {
        getSessionGuest(id);
    } else {

    }
};
