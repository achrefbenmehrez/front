import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss']
})
export class AddSalesComponent implements OnInit {
  public tableData = [
    {
      
      QTY: '1.00',
      Price: '15000.00',
      Discount: '0.00',
      Tax	: '0.00',
      Subtotal: '1500.00',
      
      },
    {
      Sno:'2',
      ProductName: 'prod2',
      QTY: '1.00',
      Price: '1500.00',
      Discount: '0.00',
      Tax	: '0.00',
      Subtotal: '1500.00',
      img: '',
    },
    {
      Sno:'3',
      ProductName: 'prod3',
      QTY: '1.00',
      Price: '1500.00',
      Discount: '0.00',
      Tax	: '0.00',
      Subtotal: '1500.00',
      img: '',
    },
  ]
  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }
  delete(index:any)
  {
    this.tableData.splice(index, 1);
  }
}
