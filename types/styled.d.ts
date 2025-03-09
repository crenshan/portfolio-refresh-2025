/* eslint-disable @typescript-eslint/no-explicit-any */
import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: { [key: string]: string };

    colors: { [key: string]: string };

    breakpoints: { [key: string]: number };

    [key: string]: any;
  }
}
