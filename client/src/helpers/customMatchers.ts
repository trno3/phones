export {};

declare global {
  namespace jasmine {
    interface NothingMatcher {
      toVerify(expected: any): boolean;
    }
  }
}
