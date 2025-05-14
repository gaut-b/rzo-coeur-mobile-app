import { Env } from '@env';
import axios, { type CreateAxiosDefaults } from 'axios';

const BASE_CLIENT_CONFIG: CreateAxiosDefaults = {};

export const openFoodFactsApiClient = axios.create({
  ...BASE_CLIENT_CONFIG,
  baseURL: Env.OPEN_FOOD_FACTS_API_BASE_URL,
});

export const rzoApiClient = axios.create({
  ...BASE_CLIENT_CONFIG,
  baseURL: Env.RZO_API_BASE_URL,
});

export const client = axios.create({
  baseURL: 'https://dummyjson.com/',
});
