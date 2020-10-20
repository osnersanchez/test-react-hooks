export interface Gif {
    id: string;
    title: string;
    url: string;
}

export interface ServiceRespond<T> {
    data: T[],
    loading: boolean
}
