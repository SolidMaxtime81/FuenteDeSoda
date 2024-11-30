import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAddPageComponent } from './products-add-page.component';

describe('ProductsAddPageComponent', () => {
  let component: ProductsAddPageComponent;
  let fixture: ComponentFixture<ProductsAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAddPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
