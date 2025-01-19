import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsNavComponent } from './projects-nav.component';

describe('ProjectsNavComponent', () => {
  let component: ProjectsNavComponent;
  let fixture: ComponentFixture<ProjectsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
