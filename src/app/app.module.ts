import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule } from '@angular/forms';

//Importar el LOCALE
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEsCl from '@angular/common/locales/es-CL';
import { StarComponent } from './product/product-list/star/star.component';
import { DefaultPipe } from './shared/image.pipe';

import { HttpClientModule } from '@angular/common/http';

//Registrar el LOCALE
registerLocaleData(localeEsCl, 'es-CL');

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    DefaultPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
