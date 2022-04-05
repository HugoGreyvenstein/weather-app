export interface Conditions {
    name: string,
    weather: { main: string, icon: string }[],
    main: {
        temp: number,
        temp_max: number,
        temp_min: number,
    },
}
