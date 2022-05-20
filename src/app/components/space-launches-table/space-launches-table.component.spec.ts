import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLaunchesTableComponent } from './space-launches-table.component';

describe('SpaceLaunchesTableComponent', () => {
  let component: SpaceLaunchesTableComponent;
  let fixture: ComponentFixture<SpaceLaunchesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceLaunchesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceLaunchesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
