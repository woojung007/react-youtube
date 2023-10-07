import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export const formatAgo = (date, lang = 'ko') => {
    return format(date, lang);
};
