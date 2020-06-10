import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Muli',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Muli', 'sans-serif'],
  bodyFontFamily: ['Muli', 'sans-serif'],
});

export default typography;
