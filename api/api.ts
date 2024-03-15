// import axios from 'axios';

// export const fetchOrderDetails = async () => {
//   try {
//     const response = await axios.get('https://groww-intern-assignment.vercel.app/v1/api/order-details');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching order details:', error);
//     throw new Error('Failed to fetch order details');
//   }
// };


import axios from 'axios';
import cache from "memory-cache";

const cachedFetch = async (url : string) => {
  const cachedResponse = cache.get(url);
  if (cachedResponse) {
    return cachedResponse;
  } else {
    const hours = 24;
    const response = await axios.get(url);
    const data = response.data;
    cache.put(url, data, hours * 1000 * 60 * 60);
    return data;
  } 
};

export const fetchOrderDetails = async () => {
  try {
    return await cachedFetch('https://groww-intern-assignment.vercel.app/v1/api/order-details');
  } catch (error) {
    console.error('Error fetching order details:', error);
    throw new Error('Failed to fetch order details');
  }
};
