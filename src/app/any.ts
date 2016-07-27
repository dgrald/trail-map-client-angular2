import * as _ from 'lodash';

export class Any {
  public static number(): number {
    return Math.random();
  }

  public static string(): string {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    return _.reduce(_.range(1, 5), (accum, nextNum) => {
        return accum += possible.charAt(Math.floor(Math.random() * possible.length));
    }, "");
  }

  public static trailObject(): any {
    return {name: Any.string(), location: {longitude: Any.number(), latitude: Any.number()}};
  }
};
