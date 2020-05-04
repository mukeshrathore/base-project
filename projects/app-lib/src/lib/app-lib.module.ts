import { NgModule } from '@angular/core';
import { AppLibComponent } from './app-lib.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { ListBoxComponent } from './components/list-box/list-box.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [AppLibComponent, ButtonComponent, TableComponent, ListBoxComponent, SpinnerComponent],
  imports: [],
  exports: [AppLibComponent]
})
export class AppLibModule { }
