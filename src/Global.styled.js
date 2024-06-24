import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*::before,
*::after {
  box-sizing: border-box;
}

a,
a:visited {
  cursor: pointer;
  text-decoration: none;
}

button,
._btn {
  font-family: Roboto, Arial, Helvetica, sans-serif;
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}
@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }

  100% {
    height: auto;
    opacity: 1;
  }
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  color: #000;
}
`;
