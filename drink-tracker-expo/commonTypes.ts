export type DrinkingSession = {
    id: string;
    timeStart: Date;
    timeEnd: Date;
    drinks: Drink[];
    title: string;
    timeInterval: number;
    drinkLimit: number;
};

export type Drink = {
    timeDrank: Date;
    drinkName: string;
    drinkType?: string;
    weight: number;
};

export type NavigationProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
    };
};

export enum Screens {
    Onboarding = 'Onboarding',
    Home = 'Home',
    DrinkingLimits = 'Drinking Limits',
    Session = 'Session',
    Summary = 'Summary',
    Settings = 'Settings',
    PrivacyPolicy = 'Privacy Policy',
    Feedback = 'Feedback',
    About = 'About',
}
