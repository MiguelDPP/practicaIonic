import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    loadChildren: () => import('./main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },
  // {
  //   path: 'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  // },
  // {
  //   path: 'main-menu',
  //   loadChildren: () => import('./main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'activity1',
    loadChildren: () => import('./activity1/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'infinity-scroll',
    loadChildren: () => import('./activity1/infinity-scroll/infinity-scroll.module').then( m => m.InfinityScrollPageModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./activity1/icons/icons.module').then( m => m.IconsPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./activity1/badge/badge.module').then( m => m.BadgePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
