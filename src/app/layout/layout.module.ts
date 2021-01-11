import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material/material.module';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

@NgModule({
  declarations: [LayoutComponent, TopNavbarComponent],
  imports: [CommonModule, LayoutRoutingModule, MaterialModule],
})
export class LayoutModule {}
