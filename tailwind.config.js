module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "'Poppins', sans-serif",
      ],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F597E',
          0.1: '#77B6DE',
          0.2: '#67ADDA',
          0.3: '#469BD1',
          0.4: '#2F87BF',
          0.5: '#27709F',
          0.6: '#1F597E',
          0.7: '#143951',
          0.8: '#091924',
          0.9: '#000000',
        },
        success: {
          DEFAULT: '#48B527',
          0.1: '#B7ECA7',
          0.2: '#AAE997',
          0.3: '#8EE175',
          0.4: '#73DA54',
          0.6: '',
          0.7: '',
          0.8: '',
          0.9: '',
          0.10: '',
        },
        neutral: {
          DEFAULT: '#AFB9C0',
          0.1: '#F3F3F3',
          0.2: '#E7E7E7',
          0.3: '#B7B7B7',
          0.4: '#707070',
          0.6: '#0F0D0E',
          0.7: '#0B0A08',
          0.8: '#0A0607',
          0.9: '#080405',
        },
        dark: {
          DEFAULT: '#242A2E',
        },
        light: {
          DEFAULT: '#B4BDC4',
        },
        special: {
          info: '#3385FF',
          success: '#48B527',
          warning: '#D3844D',
          danger: '#FF3A30',
        },
      },
      fontSize: {
        'xxxs': '.5rem',
        'xxs': '.625rem',
      },
      height: {
        '6.25': '6.25rem',
      },
      zIndex: {
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modalBackdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070,
        footer: 1080,
      },
    },
  },
  plugins: [],
}
