import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({providedIn: 'root'})
export class TitleStrategyService extends TitleStrategy{
  constructor(private readonly title: Title) { 
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title) {
      this.title.setTitle(`Koyejo Adinlewa | ${title}`)
    } else {
      this.title.setTitle('Koyejo Adinlewa');
    }
  }
}
