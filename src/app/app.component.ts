import { Component } from '@angular/core';
import { ColumnModel, PageService, SelectionService, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { orderData } from './order-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PageService, SelectionService]
})
export class AppComponent {
  pageSettings = {
    pageSize: 5
  };

  data = orderData;
  selectionSettings: SelectionSettingsModel = {
    type: 'Single',
    mode: 'Row',
    persistSelection: true
  };
  columns: ColumnModel[] = [
    { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true },
    { field: 'CustomerName', headerText: 'Customer Name' },
    { field: 'OrderDate', headerTemplate: 'Order Date' }
  ];

  changePageSize() {
    this.pageSettings = {
      pageSize: this.pageSettings.pageSize === 5 ? 3 : 5
    }
  }
}
