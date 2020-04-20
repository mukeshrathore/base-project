import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { BaseTableComponent } from './components/base-table/base-table.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [LibComponent, BaseTableComponent, ButtonComponent, TableComponent],
  imports: [
  ],
  exports: [LibComponent]
})
export class LibModule { }
