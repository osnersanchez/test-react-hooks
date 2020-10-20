import { Gif } from "../shared/interfaces";

const wrapperGifList = (list: any[]): Gif[] => (
    list.map((gif: any) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
    }))
);


export const getGifs = async (category: string) => {
    const apiKey = 'tELWIwGLK0fa98UbjL68820G1V1gleUi';
    const endpoint = 'https://api.giphy.com/v1/gifs/search';
    const res = await fetch(`${endpoint}?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`);
    const { data } = await res.json();
    return wrapperGifList(data);
};
