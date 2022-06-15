import numeral from 'numeral';

try {
  numeral.register('locale', 'id', {
    delimiters: {
      thousands: ',',
      decimal: '.',
    },
    abbreviations: {
      thousand: 'rb',
      million: 'jt',
      billion: 'm',
      trillion: 't',
    },
  });
  numeral.locale('id');
} catch (e) {
  console.log(e);
}

export const formatNumber = (number, format = '0,0') => (
  numeral(number).format(format)
);

export const formatMoney = (number, currency = 'Rp') => (
  `${currency} ${numeral(number).format('0,0')}`
);
