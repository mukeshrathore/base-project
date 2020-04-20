import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [LibComponent, ButtonComponent, TableComponent],
  imports: [
  ],
  exports: [LibComponent]
})
export class LibModule { }
