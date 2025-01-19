import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDetailsComponent } from './skills-details.component';

describe('SkillsDetailsComponent', () => {
  let component: SkillsDetailsComponent;
  let fixture: ComponentFixture<SkillsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
