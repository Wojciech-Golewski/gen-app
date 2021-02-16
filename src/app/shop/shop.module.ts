import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MainShopComponent } from './components/main-shop/main-shop.component';
import { ShopTableComponent } from './components/shop-table/shop-table.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainShopComponent, ShopTableComponent],
  imports: [CommonModule, ShopRoutingModule, MaterialModule, SharedModule],
})
export class ShopModule {}
