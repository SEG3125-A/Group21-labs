// src/components/ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../products.json'; // Assume this is your products data
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
  const [isExpanded, setIsExpanded] = useState(false);
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <Link to={`/product/back`} className="btn btn-primary mr-2">{t('back')}</Link>
      {isExpanded && (
        <div className="additional-details">
          {/* Display additional information here */}
          <p>{product.longDescription}</p>
          {/* Include other details like reviews, specifications, etc. */}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
