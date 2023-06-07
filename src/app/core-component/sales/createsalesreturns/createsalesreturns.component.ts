import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-createsalesreturns',
  templateUrl: './createsalesreturns.component.html',
  styleUrls: ['./createsalesreturns.component.scss']
})
export class CreatesalesreturnsComponent implements OnInit {
  public routes = routes;
  public tableData = [
    {
      ProductName: '',
      NetUnitPrice: '',
      Stock: '',
      QTY: '',
      Discount: '',
      Tax : '',
      Subtotal : '',
      img: "",
    },
    {
      ProductName: '',
      NetUnitPrice: '',
      Stock: '',
      QTY: '',
      Discount: '',
      Tax : '',
      Subtotal : '',
      img: "",
    }]

  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }
delete(index:any)
{
  this.tableData.splice(index, 1);
}
}
