export interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  slug: string;
  price: number;
  created_at: string;
}

export const products: Product[] = [
  {
    id: 'uuid01', 
    name: 'product test1',
    description: 'produto muito legal para voce comprar',
    price: 12.50,
    image_url: 'https://source.unsplash.com/random?product1',
    slug: 'product-test1',
    created_at: '2021-02-03T00:00:00'
  },
  {
    id: 'uuid02',
    name: 'product test2',
    description: 'produto muito legal para voce comprar',
    price: 150.50,
    image_url: 'https://source.unsplash.com/random?product2',
    slug: 'product-test2',
    created_at: '2021-02-03T00:00:00'
  },
  {
    id: 'uuid03',
    name: 'product test3',
    description: 'produto muito legal para voce comprar',
    price: 32.50,
    image_url: 'https://source.unsplash.com/random?product3',
    slug: 'product-test3',
    created_at: '2021-02-03T00:00:00'
  },
  {
    id: 'uuid04',
    name: 'product test4',
    description: 'produto muito legal para voce comprar',
    price: 322.50,
    image_url: 'https://source.unsplash.com/random?product4',
    slug: 'product-test4',
    created_at: '2021-02-03T00:00:00'
  },
  {
    id: 'uuid05',
    name: 'product test4',
    description: 'produto muito legal para voce comprar',
    price: 8.50,
    image_url: 'https://source.unsplash.com/random?product5',
    slug: 'product-test4',
    created_at: '2021-02-03T00:00:00'
  }
]

export interface CreditCard {
  number: string;
  name: string;
  expiration_month: number;
  expiration_year: number;
  cvv: string;
}
