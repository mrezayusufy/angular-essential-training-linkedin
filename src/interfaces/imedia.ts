export interface IMedia {
    id: number;
    name: string;
    medium: string;
    category: string;
    year: number;
    watchedOn: number | null;
    isFavorite: boolean;
}
