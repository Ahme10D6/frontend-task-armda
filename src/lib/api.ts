const BASE_URL = 'https://fakestoreapi.com';
import { Product } from '@/types/product';
import axios from 'axios';

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};