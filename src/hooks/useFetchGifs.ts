import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { Gif, ServiceRespond } from "../shared/interfaces";

export const useFetchGif = (category: string) => {
  const [state, setState] = useState<ServiceRespond<Gif>>({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifs(category)
    .then((gifList: Gif[]) => {

      setState({
        data: gifList,
        loading: false
      })
    });
  }, [category]);

  return state;
};