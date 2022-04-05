export interface Forecast {
    list: {
        dt: number;
        temp: {
            day: number;
            min: number;
            max: number;
        },
        weather: [
            {
                main: string;
                icon: string;
            }
        ],
    }[];

    city: {
        name: string;
    }
}
