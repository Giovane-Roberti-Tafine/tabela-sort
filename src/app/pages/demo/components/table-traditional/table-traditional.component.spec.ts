import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTraditionalComponent } from './table-traditional.component';

describe('TableTraditionalComponent', () => {
  let component: TableTraditionalComponent;
  let fixture: ComponentFixture<TableTraditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTraditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
