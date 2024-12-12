import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsNavComponent } from './project-details-nav.component';

describe('ProjectDetailsNavComponent', () => {
  let component: ProjectDetailsNavComponent;
  let fixture: ComponentFixture<ProjectDetailsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailsNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
