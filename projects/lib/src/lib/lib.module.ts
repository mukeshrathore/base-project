import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { TableComponent } from './components/table/table.component';
import { ClientPaginatedTableComponent } from './components/table/client-paginated-table/client-paginated-table.component';
import { ServerPaginatedTableComponent } from './components/table/server-paginated-table/server-paginated-table.component';



@NgModule({
  declarations: [LibComponent, TableComponent, ClientPaginatedTableComponent, ServerPaginatedTableComponent],
  imports: [
  ],
  exports: [LibComponent]
})
export class LibModule { }
