import { renderHook } from "@testing-library/react-hooks";
import { useFetchGif } from "../../hooks/useFetchGifs";
import { Gif, ServiceRespond } from "../../shared/interfaces";

// TODO: it is used in both tests waitForNextUpdate, because, if not in the first call, the customHook is unmount

describe('useFetchGif test suit', () => {
  it('should return initial state when call useFetchGif method', async () => {
    const { result, waitForNextUpdate } = renderHook<string, ServiceRespond<Gif>>(() => useFetchGif('One Push'));
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  it('should return state with images array and loading false when call useFetchGif method', async () => {
    const { result, waitForNextUpdate } = renderHook<string, ServiceRespond<Gif>>(() => useFetchGif('One Push'));

    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});