import { extendTheme } from '@chakra-ui/react';

const config = {
  // Can be one of dark, light or system
  initialColorMode: `system`,
  useSystemColorMode: true,
};

// const fontSizes = {
//   md: '2rem',
// };

const theme = extendTheme({ config });

export default theme;
