import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCodeComponent } from './language-code.component';

describe('LanguageCodeComponent', () => {
  let component: LanguageCodeComponent;
  let fixture: ComponentFixture<LanguageCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
