// src/components/CustomerService.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Account = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <h2>{t('account')}</h2>
      <button>{t('delete_account')}</button>
      <button>{t('reset_password')}</button>
      {/* Implement functionality for live chat, email support, etc. */}
    </div>
  );
};

export default Account;
