import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabulardata',
    pathMatch: 'full'
  },
  {
    path: 'location-finder',
    loadChildren: () => import('./location-finder/location-finder.module').then( m => m.LocationFinderPageModule)
  },
  {
    path: 'child',
    loadChildren: () => import('./child/child.module').then( m => m.ChildPageModule)
  },
  {
    path: 'tabulardata',
    loadChildren: () => import('./tabulardata/tabulardata.module').then( m => m.TabulardataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
