// src/components/CustomerService.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const CustomerService = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <h2>{t('customer_service')}</h2>
      <p>{t('customer_service_description')}</p>
      {/* Implement functionality for live chat, email support, etc. */}
    </div>
  );
};

export default CustomerService;
