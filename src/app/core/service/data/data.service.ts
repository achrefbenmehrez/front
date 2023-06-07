import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getlivraison() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  public getCountryList(): Observable<any> {
    return this.http.get('assets/JSON/countrys.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getExpenseCategoryList(): Observable<any> {
    return this.http.get('assets/JSON/expenseCategoryList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getExpenseList(): Observable<any> {
    return this.http.get('assets/JSON/expenseList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getCustomerList(): Observable<any> {
    return this.http.get('assets/JSON/customerList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getQuotationList(): Observable<any> {
    return this.http.get('assets/JSON/quotationList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getTransferList(): Observable<any> {
    return this.http.get('assets/JSON/transferList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getUserList(): Observable<any> {
  return this.http.get('http://localhost:8089/api/users/all').pipe(
    map((res: any) => {
      return res;
    })
  );
}

  

  public getInvoiceReport(): Observable<any> {
    return this.http.get('assets/JSON/invoiceReport.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getProductList(): Observable<any> {
    return this.http.get('assets/JSON/productList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getCategoryList(): Observable<any> {
    return this.http.get('assets/JSON/categoryList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSubcategoryList(): Observable<any> {
    return this.http.get('assets/JSON/subcategoryList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  
  public getSalesList(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSalesReturnLists(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPurchaseList(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSalesReturnList(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPurchaseReturnList(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSupplierList(): Observable<any> {
    return this.http.get('assets/JSON/supplierList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPeopleUserList(): Observable<any> {
    return this.http.get('assets/JSON/peopleUserList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getStoreList(): Observable<any> {
    return this.http.get('assets/JSON/storeList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getStateList(): Observable<any> {
    return this.http.get('assets/JSON/stateList.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPurchaseOrderReport(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getInventoryReport(): Observable<any> {
    return this.http.get('assets/JSON/inventoryReport.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSalesReport(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPurchaseReport(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getCustomerReport(): Observable<any> {
    return this.http.get('assets/JSON/customerReport.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPaymentSettings(): Observable<any> {
    return this.http.get('assets/JSON/paymentSettings.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getCurrencySettings(): Observable<any> {
    return this.http.get('assets/JSON/currencySettings.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getGroupPermission(): Observable<any> {
    return this.http.get('assets/JSON/groupPermission.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getTaxRates(): Observable<any> {
    return this.http.get('assets/JSON/taxRates.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSupplierReport1(): Observable<any> {
    return this.http.get('assets/JSON/supplierReport1.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSupplierReport2(): Observable<any> {
    return this.http.get('assets/JSON/supplierReport2.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSupplierReport3(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getSalesListModal(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPos1(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPos2(): Observable<any> {
    return this.http.get('').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getPos3(): Observable<any> {
    return this.http.get('assets/JSON/pos3.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getEditPermission(): Observable<any> {
    return this.http.get('assets/JSON/editpermisssion.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getEvents() {
    return this.http.get<any>('assets/JSON/scheduleevents.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getDataTable() {
    return this.http.get<any>('assets/JSON/datatables.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

 

}

