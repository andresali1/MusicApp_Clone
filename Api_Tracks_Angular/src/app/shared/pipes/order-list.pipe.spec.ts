import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('testing entrance and exit of values', () => {
    //TODO: Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;

    //TODO: Act
    const result: TrackModel[] = pipe.transform(data);

    //TODO: Assert
    expect(result).toEqual(data);
  });

  it('testing Ascending order', () => {
    //TODO: Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;
    const firstValue = data.find((i: any) => i._id === 7); //TODO: 50 Cent
    const lastValue = data.find((i: any) => i._id === 6); //TODO: TNT

    //TODO: Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'asc');
    const firstResult = result[0];
    const lastResult = result[result.length - 1];

    //TODO: Assert
    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);
  });

  it('testing Descending order', () => {
    //TODO: Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;
    const firstValue = data.find((i: any) => i._id === 7); //TODO: 50 Cent
    const lastValue = data.find((i: any) => i._id === 6); //TODO: TNT

    //TODO: Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'desc');
    const firstResult = result[0];
    const lastResult = result[result.length - 1];

    //TODO: Assert
    expect(firstResult).toEqual(lastValue);
    expect(lastResult).toEqual(firstValue);
  });
});
