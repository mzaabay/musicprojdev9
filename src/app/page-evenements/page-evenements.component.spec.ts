import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEvenementsComponent } from './page-evenements.component';

describe('PageEvenementsComponent', () => {
  let component: PageEvenementsComponent;
  let fixture: ComponentFixture<PageEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEvenementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
