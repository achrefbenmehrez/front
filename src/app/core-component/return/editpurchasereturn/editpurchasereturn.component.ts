import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-editpurchasereturn',
  templateUrl: './editpurchasereturn.component.html',
  styleUrls: ['./editpurchasereturn.component.scss']
})
export class EditpurchasereturnComponent implements OnInit {
  public routes = routes;
  public tableData = [
   
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
