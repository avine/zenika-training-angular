import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.product = {
      title: 'TITLE',
      description: 'DESC',
      photo: 'PHOTO.png',
      price: 12,
    };

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should bind product description', () => {
    component.product = {
      title: 'TITLE',
      description: 'DESC',
      photo: 'PHOTO.png',
      price: 12,
    };

    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('.card-body p')?.textContent).toBe('DESC');
  });
});
