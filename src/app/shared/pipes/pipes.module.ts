import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilitiesPipe } from './abilities/abilities.pipe';

@NgModule({
  declarations: [AbilitiesPipe],
  imports: [
    CommonModule
  ],
  exports: [AbilitiesPipe]
})

export class PipesModule { }
