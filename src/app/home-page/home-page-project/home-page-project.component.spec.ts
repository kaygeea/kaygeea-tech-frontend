import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageProjectComponent } from './home-page-project.component';

describe('HomePageProjectComponent', () => {
  let component: HomePageProjectComponent;
  let fixture: ComponentFixture<HomePageProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
