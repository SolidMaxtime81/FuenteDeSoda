import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../../components/menu/menu.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { environment } from '../../../../environment/environment';
import { lastValueFrom, Observable } from 'rxjs';
import { Product } from '../../../models/entities/product';

@Component({
  selector: 'frnd-products-page',
  standalone: true,
  imports: [MenuComponent, NgFor],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit {
  
  constructor(private httpClient: HttpClient) { }

  private serverUrl = environment.serverUrl;

  data: Product[] = [];


  async ngOnInit() {
    this.setDataTable();
  }

  async setDataTable() {
    this.data = await this.getAll();
  }


  add(name: string, price: number, description: string): Observable<string> {
    const info: Product = {
      id: 0,
      name: name,
      guid: "",
      price: price,
      description: description,
      createdDate: new Date(),
      updatedDate: new Date(),
      createdBy: 0,
      updatedBy: 0,
      status: 1,
    };

    return this.httpClient.post<string>(`${this.serverUrl}/products`, info);
  }

  update(id: number, name: string, price: number, description: string): Observable<string> {
    const info: Product = {
      id: 0,
      name: name,
      guid: "",
      price: price,
      description: description,
      createdDate: new Date(),
      updatedDate: new Date(),
      createdBy: 0,
      updatedBy: 0,
      status: 1,
    };
    return this.httpClient.put<string>(`${this.serverUrl}/products/${id}`, info);
  }

  delete(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.serverUrl}/products/${id}`);
  }
  
  async get(id: number): Promise<Product> {
    const response = await lastValueFrom(this.httpClient.get<Product>(`${this.serverUrl}/products/${id}`));
    return response;
  }

  async getAll(): Promise<Product[]> {
    const response = await lastValueFrom(this.httpClient.get<Product[]>(`${this.serverUrl}/products`));
    return response;
  }
}
