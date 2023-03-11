import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage, 
    children: [
      {
        path: 'infinity-scroll',
        loadChildren: () => import('../infinity-scroll/infinity-scroll.module').then( m => m.InfinityScrollPageModule)

      },
      {
        path: 'grid',
        loadChildren: () => import('../grid/grid.module').then( m => m.GridPageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('../card/card.module').then( m => m.CardPageModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('../icons/icons.module').then( m => m.IconsPageModule)
      },
      {
        path: 'badge',
        loadChildren: () => import('../badge/badge.module').then( m => m.BadgePageModule)
      },
      {
        path: '',
        redirectTo: '/activity1/grid',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/activity1/grid',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
})
export class TabsPageRoutingModule {}
