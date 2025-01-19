import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-overview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects-overview.component.html',
  styleUrl: './projects-overview.component.css'
})
export class ProjectsOverviewComponent {
  @Input() projects!: Project[];
}
