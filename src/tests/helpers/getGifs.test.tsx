import { getGifs } from '../../helpers/getGifs';

describe('getGifs test suit', () => {
  it('should return length equal 10 when call getGifs and input exist', async () => {
    const gifList = await getGifs('Chin cahan')
    expect(gifList.length).toBe(10);
  });

  it('should return length equal 0 when call getGifs and input is empty', async () => {
    const gifList = await getGifs('')
    expect(gifList.length).toBe(0);
  });
});