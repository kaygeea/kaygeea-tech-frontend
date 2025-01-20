import { Component, Input} from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input({required: true}) profile!: Profile["data"];
}
