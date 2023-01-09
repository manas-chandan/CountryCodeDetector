import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabulardataPage } from './tabulardata.page';

const routes: Routes = [
  {
    path: '',
    component: TabulardataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabulardataPageRoutingModule {}
