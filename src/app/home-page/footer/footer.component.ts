import { Component, Input } from '@angular/core';
import { BrandLogo } from '../../interfaces/brand-logo';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() footerLogo!: BrandLogo;
  protected year: number = new Date().getFullYear();
}
