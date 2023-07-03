declare module 'randomcolor' {
  const randomColor: {
    (options?: randomColor.Options): string | string[];
    default: typeof randomColor;
  };

  namespace randomColor {
    interface Options {
      luminosity?: 'random' | 'bright' | 'light' | 'dark';
      count?: number;
    }
  }

  export = randomColor;
}
