import React, { FC, useEffect, useState } from 'react';
import { getProducts } from '@/services/products';
import { api } from '@/api';

const Contact: FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  console.log(process.env.PROTOCOL)
  console.log(process.env.HOST_URL)
  console.log(api.defaults.baseURL)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Ошибка при загрузке продуктов');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div>
      {JSON.stringify(products, null, 2)}
    </div>
  )
};

export default Contact;
