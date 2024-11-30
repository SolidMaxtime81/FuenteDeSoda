import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products/products-page/products-page.component';
import { ProductsAddPageComponent } from './pages/products/products-add-page/products-add-page.component';
import { ProductsEditPageComponent } from './pages/products/products-edit-page/products-edit-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'products',
        children:[
          {
            path: '',
            component: ProductsPageComponent
          },
          {
            path: 'add',
            component: ProductsAddPageComponent
          },
          {
            path: 'edit',
            component: ProductsEditPageComponent
          }
        ]
      }
    ],
  },
];
