import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LsCacheService } from './services/ls-cache.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private readonly lsCacheService: LsCacheService) {}

  ngOnInit(): void {
    initFlowbite();
  }

  ngOnDestroy(): void {
    this.lsCacheService.clearAppData();
  }
}
