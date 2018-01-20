/* eslint-disable */
import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.7,
  googleFonts: [
    {
      name: 'Libre Franklin',
      styles: ['400', '400i', '700', '700i', '900']
    },
    {
      name: 'Cousine',
      styles: ['400', '400i', '700']
    }
  ],
  headerFontFamily: ['Libre Franklin', 'sans-serif'],
  bodyFontFamily: ['Cousine', 'monospace'],
  headerColor: 'black',
  bodyColor: '#333',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1': {
      fontSize: '4rem',
      fontWeight: 900
    }
  })
});

/* eslint-enable */
export default typography;
