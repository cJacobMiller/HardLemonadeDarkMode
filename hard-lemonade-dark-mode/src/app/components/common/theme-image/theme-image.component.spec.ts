import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeImageComponent } from './theme-image.component';

describe('ThemeImageComponent', () => {
  let component: ThemeImageComponent;
  let fixture: ComponentFixture<ThemeImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeImageComponent]
    });
    fixture = TestBed.createComponent(ThemeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
