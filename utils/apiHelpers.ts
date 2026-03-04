import { APIRequestContext, expect } from '@playwright/test';

export class ApiHelpers {
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    // Method to generate a dynamic Bearer Token
    async getAuthToken(clientId: string, clientSecret: string): Promise<string> {
        const response = await this.request.post('https://api.gateway.com/v1/auth', {
            data: {
                id: clientId,
                secret: clientSecret
            }
        });
        
        const body = await response.json();
        return body.access_token; // Returns the token for use in other tests
    }

    // Method to verify a payment status on the backend
    async verifyPaymentStatus(orderId: string, expectedStatus: string) {
        const response = await this.request.get(`/v1/orders/${orderId}`);
        const body = await response.json();
        expect(body.status).toBe(expectedStatus);
    }
}