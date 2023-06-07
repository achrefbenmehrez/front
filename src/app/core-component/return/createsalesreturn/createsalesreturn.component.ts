import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-createsalesreturn',
  templateUrl: './createsalesreturn.component.html',
  styleUrls: ['./createsalesreturn.component.scss']
})
export class CreatesalesreturnComponent implements OnInit {
  public routes = routes;
  public tableData = [
 
    {
  
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
