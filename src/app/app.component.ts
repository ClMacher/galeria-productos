/*  Nombre: Claudio Macher Chávez */
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'Empresa ACME';
  _listFilter: string = '';
  filteredProducts: IProduct[]=[];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts =
      this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
  }

  crearProducto(){
    let datos: any = {
      name: 'Producto' + Math.round(Math.random()*(100 - 1) + 1),
      code: this.productService.generarCodigo(),
      date: '2019-03-07',
      price: Math.round(Math.random() * (130 - 20) + 20),
      description: 'Producto de prueba',
      rating: Math.round(Math.random() * (200 - 1) + 1),
      image: ''
    };
    this.guardarProducto(datos);
  }

  guardarProducto(producto: IProduct){
    this.productService.saveProduct(producto).subscribe(() => {
      return this.productService.getProducts().subscribe((res: any[]) => {
        this.products = res;
        this.filteredProducts = res;
      },
        err => console.log(err));
    })
  }

  /*products:IProduct[] = [
    {
      "productId": 1,
      "productName": "Zapatillas de lona",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "price": 19.95,
      "description": "Zapatillas de lona con caña marca Converse",
      "starRating": 3.2,
      "imageUrl": "" /*https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png*/
    /*},

    {
      "productId": 2,
      "productName": "Jeans azules",
      "productCode": "GDN-0012",
      "releaseDate": "March 20, 2016",
      "price": 15.00,
      "description": "Pantalones jeans color azul",
      "starRating": 4.4,
      "imageUrl": "https://cdn.pixabay.com/photo/2016/03/31/19/24/clothes-1294974_960_720.png"
    },

    {
      "productId": 3,
      "productName": "Chaleco verde",
      "productCode": "GDN-0013",
      "releaseDate": "March 19, 2016",
      "price": 20.95,
      "description": "Chaleco color verde de lana",
      "starRating": 5.0,
      "imageUrl": "https://cdn.pixabay.com/photo/2016/03/31/19/21/clothes-1294933_960_720.png"
    },

    {
      "productId": 4,
      "productName": "Gorro azul",
      "productCode": "GDN-0014",
      "releaseDate": "March 15, 2016",
      "price": 5.50,
      "description": "Gorro de mago color azul",
      "starRating": 4.6,
      "imageUrl": "https://cdn.pixabay.com/photo/2012/04/24/23/26/magician-41104_960_720.png"
    },

    {
      "productId": 5,
      "productName": "Perro",
      "productCode": "GDN-0015",
      "releaseDate": "March 19, 2016",
      "price": 100.95,
      "description": "Perro regalón",
      "starRating": 5.0,
      "imageUrl": "https://cdn.pixabay.com/photo/2012/05/07/13/41/dog-48490_960_720.png"
    },

    {
      "productId": 6,
      "productName": "Guitarra",
      "productCode": "GDN-0016",
      "releaseDate": "March 19, 2016",
      "price": 19.95,
      "description": "Guitarra acústica",
      "starRating": 3.2,
      "imageUrl": "https://cdn.pixabay.com/photo/2013/07/12/15/06/guitar-149427_960_720.png"
    }
  ]*/

  ngOnInit(): void {
    this.productService.getProducts().subscribe( (res : any[]) => {
      this.products = res;
      this.filteredProducts = res;
      console.log(this.products);
    },
    err => console.log(err)
    )
    // this.products = this.productService.getProducts();
    // this.filteredProducts = this.products;
  }
}

