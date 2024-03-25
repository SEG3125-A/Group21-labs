// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json'; // Assume you have a JSON file with products
import { useTranslation } from 'react-i18next';

const ProductList = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const categories = [...new Set(productsData.map(product => product.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="row">
            {productsData.filter(product => product.category === category).map(product => (
              <div key={product.id} className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary mr-2">{t('view_details')}</Link>
                    <Link to={`/cart/add/${product.id}`} className="btn btn-primary mr-2">{t('add_to_cart')}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
