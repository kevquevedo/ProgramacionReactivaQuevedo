import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenPerroComponent } from './imagen-perro.component';

describe('ImagenPerroComponent', () => {
  let component: ImagenPerroComponent;
  let fixture: ComponentFixture<ImagenPerroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenPerroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
