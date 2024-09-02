import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      azul: string,
      preto: string,
      laranja: string,
      creme: string,
      cinzaEscuro: string,
      cinza: string,
      branco: string,
      bgColor: string,
      colorAlert: string,
      bdColor: string
    },
    fonts: {
      primary: string
    }
  }
}