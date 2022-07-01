import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { ApiPostListResolver1, ApiPostListResolver2 } from './heroes.resolvers';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    resolve: {
      hero1: ApiPostListResolver1,
      hero2: ApiPostListResolver2,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
