import axios from 'axios';

const API_URL = 'http://localhost:3000/api/products';

const productService = {
  async getAllProducts() {
    const response = await axios.get(API_URL);
    return response.data;
  },

  async getProduct(id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  async addProduct(product) {
    const response = await axios.post(API_URL, product);
    return response.data;
  },

  async updateProduct(id, product) {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data;
  },

  async deleteProduct(id) {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },
};

export default productService;