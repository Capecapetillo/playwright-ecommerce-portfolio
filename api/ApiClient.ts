import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  private readonly request: APIRequestContext;
  private readonly baseUrl = 'https://automationexercise.com/api';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getProductsList() {
    return this.request.get(`${this.baseUrl}/productsList`);
  }

  async getBrandsList() {
    return this.request.get(`${this.baseUrl}/brandsList`);
  }

  async searchProduct(searchTerm: string) {
    return this.request.post(`${this.baseUrl}/searchProduct`, {
      form: { search_product: searchTerm },
    });
  }

  async verifyLogin(email: string, password: string) {
    return this.request.post(`${this.baseUrl}/verifyLogin`, {
      form: { email, password },
    });
  }
}