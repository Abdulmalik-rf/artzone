import useLanguage from '../i18n/useLanguage';

const Price = ({ amount, plus = false, className = '' }) => {
  const lang = useLanguage(s => s.lang);
  const num = Number(amount).toFixed(2);
  const prefix = plus && Number(amount) > 0 ? '+' : '';
  const symbol = lang === 'ar' ? 'ر.س' : 'SAR';

  return (
    <span className={`price-display ${className}`} style={{ whiteSpace: 'nowrap' }}>
      {prefix}{num} {symbol}
    </span>
  );
};

export default Price;
