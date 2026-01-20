import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    private products: any[] = [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            description: 'Product 1 description',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            description: 'Product 2 description',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'Product 3 description',
        },
    ];


    getAllProducts(): any[] {
        return this.products;
    }

    getProductById(id: number): any {
        return this.products.find((product) => product.id === id);
    }
}
