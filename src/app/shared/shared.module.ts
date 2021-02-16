import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinLoaderComponent } from './components/spin-loader/spin-loader.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SpinLoaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SpinLoaderComponent],
})
export class SharedModule {}
