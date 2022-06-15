import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const locale = { locale: id };

//  "2021-09-24T04:33:17.186Z" -> "1 January 2021"
export const formatDate = (datetime, pattern = 'MMMM d, yyyy', { fallback = 'N/A' } = {}) => (
  datetime ? format(new Date(datetime), pattern, locale) : fallback
);
