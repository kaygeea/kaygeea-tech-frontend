import { Component, Input } from '@angular/core';
import { Profile } from '../interfaces/profile';
import { BrandLogo } from '../interfaces/brand-logo';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() footerLogo!: BrandLogo;
}