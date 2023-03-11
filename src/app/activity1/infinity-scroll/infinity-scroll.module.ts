import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinityScrollPageRoutingModule } from './infinity-scroll-routing.module';

import { InfinityScrollPage } from './infinity-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinityScrollPageRoutingModule
  ],
  declarations: [InfinityScrollPage]
})
export class InfinityScrollPageModule {}
