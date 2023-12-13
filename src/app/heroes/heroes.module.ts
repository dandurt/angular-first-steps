import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  imports: [CommonModule, ButtonModule],
  exports: [HeroComponent],
})
export class HeroesModule {}
