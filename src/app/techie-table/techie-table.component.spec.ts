import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechieTableComponent } from './techie-table.component';

describe('TechieTableComponent', () => {
  let component: TechieTableComponent;
  let fixture: ComponentFixture<TechieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechieTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
