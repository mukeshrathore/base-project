import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { ListBoxComponent } from './components/list-box/list-box.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [LibComponent, ButtonComponent, TableComponent, ListBoxComponent, SpinnerComponent],
  imports: [
  ],
  exports: [LibComponent]
})
export class LibModule { }
