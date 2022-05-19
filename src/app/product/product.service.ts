import { Injectable } from '@angular/core';
import { IProduct } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): IProduct[]{
    return[
      {
        "productId": 1,
        "productName": "Zapatillas de lona",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "price": 19.95,
        "description": "Zapatillas de lona con caña marca Converse",
        "starRating": 41,
        "imageUrl": "" /*https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png*/
      },
  
      {
        "productId": 2,
        "productName": "Jeans azules",
        "productCode": "GDN-0012",
        "releaseDate": "March 20, 2016",
        "price": 15.00,
        "description": "Pantalones jeans color azul",
        "starRating": 1,
        "imageUrl": "https://cdn.pixabay.com/photo/2016/03/31/19/24/clothes-1294974_960_720.png"
      },
  
      {
        "productId": 3,
        "productName": "Chaleco verde",
        "productCode": "GDN-0013",
        "releaseDate": "March 19, 2016",
        "price": 20.95,
        "description": "Chaleco color verde de lana",
        "starRating": 150,
        "imageUrl": "https://cdn.pixabay.com/photo/2016/03/31/19/21/clothes-1294933_960_720.png"
      },
  
      {
        "productId": 4,
        "productName": "Gorro azul",
        "productCode": "GDN-0014",
        "releaseDate": "March 15, 2016",
        "price": 5.50,
        "description": "Gorro de mago color azul",
        "starRating": 85,
        "imageUrl": "https://cdn.pixabay.com/photo/2012/04/24/23/26/magician-41104_960_720.png"
      },
  
      {
        "productId": 5,
        "productName": "Perro",
        "productCode": "GDN-0015",
        "releaseDate": "March 19, 2016",
        "price": 100.95,
        "description": "Perro regalón",
        "starRating": 200,
        "imageUrl": "https://cdn.pixabay.com/photo/2012/05/07/13/41/dog-48490_960_720.png"
      },
  
      {
        "productId": 6,
        "productName": "Guitarra",
        "productCode": "GDN-0016",
        "releaseDate": "March 19, 2016",
        "price": 19.95,
        "description": "Guitarra acústica",
        "starRating": 58,
        "imageUrl": "https://cdn.pixabay.com/photo/2013/07/12/15/06/guitar-149427_960_720.png"
      }
    ]
  }
}
