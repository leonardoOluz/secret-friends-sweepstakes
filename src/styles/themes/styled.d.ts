import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      azul: string,
      preto: string,
      laranja: string,
      creme: string,
      cinza: string,
      branco: string
    },
    fonts: {
      primary: string
    }
  }
}