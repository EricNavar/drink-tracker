export type DrinkingSession = {
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
    DrinkingLimits = 'Drinking Limits',
    Feedback = 'Feedback',
    Home = 'Home',
    Onboarding = 'Onboarding',
    PrivacyPolicy = 'Privacy Policy',
    RecentSessions = 'Recent Sessions',
    Session = 'Session',
    Summary = 'Summary',
}
