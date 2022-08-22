/* eslint-disable react-hooks/rules-of-hooks */
import { useLang } from 'context/LanguageContext';
import { formatPostDate } from 'utils/helpers';

const formatMessage = (msgId, ...args) => {
  const { messages } = useLang();

  const msg = messages[msgId];

  if (msg == null) {
    return msgId;
  }

  if (typeof msg === 'function') {
    return msg(...args);
  }

  return msg;
};

const formatDate = (dateStr) => {
  const { lang } = useLang();

  return formatPostDate(dateStr, lang);
};

export { formatMessage, formatDate };
