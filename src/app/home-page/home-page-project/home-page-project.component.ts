import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Project } from '../../interfaces/project';
import { DemoType } from '../../interfaces/enums/demo-type';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page-project',
  standalone: true,
  imports: [RouterLink, TitleCasePipe, UpperCasePipe],
  templateUrl: './home-page-project.component.html',
  styleUrl: './home-page-project.component.css'
})
export class HomePageProjectComponent {
  @Input({ required: true }) projects!: Project[]
  protected demoType =  DemoType;
}
