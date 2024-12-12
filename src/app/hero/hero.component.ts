import { Component } from '@angular/core';
import { heroImage } from '../../assets/images/imageData';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroImage = heroImage;
}
