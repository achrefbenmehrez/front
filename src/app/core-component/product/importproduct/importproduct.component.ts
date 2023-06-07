import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-importproduct',
  templateUrl: './importproduct.component.html',
  styleUrls: ['./importproduct.component.scss']
})
export class ImportproductComponent {
  selectedFile!: File;
  tableData: any[] = [];
  isTableVisible: boolean = false; // Added property to control table visibility


  constructor(private http: HttpClient) {}

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  toggleTableVisibility() {
    this.isTableVisible = !this.isTableVisible;
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');

      this.http.post<any[]>('http://localhost:8089/api/upload', formData, { headers: headers })
        .subscribe(
          (response: any[]) => {
            console.log('File uploaded successfully');
            this.tableData = response.map((item) => ({
              codePCT: item.codePct,
              quantiteDemande: item.qteInitialeCommandee,
              vrac: 0,
              carton: 0,
              avecvrac: item.avecvrac,
            }));

            // Fetch additional product details
            this.fetchProductDetails();
            this.toggleTableVisibility(); // Show the table section

          },
          (error) => {
            console.error('File upload failed:', error);
            // Handle the error in the UI
          }
        );
    } else {
      console.warn('No file selected');
      // Display a message or handle the case when no file is selected
    }
  }

  fetchProductDetails(): void {
    for (const purchase of this.tableData) {
      const codePCT = purchase.codePCT;
      this.http.get<any>(`http://localhost:8089/api/products/${codePCT}`)
        .subscribe(
          (response: any) => {
            console.log(`Product details fetched for codePCT ${codePCT}`);
            purchase.designation = response.designation;
            purchase.uniteParCaisse = response.uniteParCaisse;
            purchase.prix = response.prix;
            purchase.remise = response.remise;
            purchase.disponible = response.disponible;
            purchase.avecvrac = response.avecvrac;

            // Calculate the quantities after fetching the details
            this.calculateQuantities();
          },
          (error) => {
            console.error(`Failed to fetch product details for codePCT ${codePCT}:`, error);
            // Handle the error in the UI
          }
        );
    }
  }

  calculateMontantApresRemise(purchase: any) {
    const price = parseFloat(purchase.prix) || 0;
    const discount = parseFloat(purchase.remise) || 0;
    const quantiteArrondie = parseFloat(purchase.quantiteArrondie) || 0;

    const amountAfterDiscount = price * quantiteArrondie * (1 - discount / 100);
    purchase.montantApresRemise = amountAfterDiscount.toFixed(2);
  }

  calculateQuantities() {
    for (const purchase of this.tableData) {
      const unitPerCaisse = parseFloat(purchase.uniteParCaisse) || 1;
      const quantiteTotale = parseFloat(purchase.quantiteDemande) || 0;

      if (purchase.avecvrac == 0) {
        // Product cannot be sold in vrac
        const roundedQuantiteArrondie = Math.ceil(quantiteTotale / unitPerCaisse) * unitPerCaisse;
        purchase.carton = Math.floor(roundedQuantiteArrondie / unitPerCaisse);
        purchase.vrac = 0;
        purchase.quantiteArrondie = roundedQuantiteArrondie;
      } else {
        // Product can be sold in vrac
        purchase.carton = Math.floor(quantiteTotale / unitPerCaisse);
        purchase.vrac = quantiteTotale % unitPerCaisse;
        purchase.quantiteArrondie = purchase.carton * unitPerCaisse + purchase.vrac;
      }

      this.calculateMontantApresRemise(purchase);
    }
  }

  cartonCalculate(event: any, purchase: any) {
    const unitPerCaisse = parseFloat(purchase.uniteParCaisse) || 1;
    const carton = parseFloat(purchase.carton) || 0;
    purchase.quantiteArrondie = carton * unitPerCaisse + purchase.vrac;
    purchase.quantiteTotale = purchase.quantiteArrondie;

    this.calculateMontantApresRemise(purchase);
  }

  vracCalculate(event: any, purchase: any) {
    const unitPerCaisse = parseFloat(purchase.uniteParCaisse) || 1;
    const carton = parseFloat(purchase.carton) || 0;
    purchase.quantiteArrondie = carton * unitPerCaisse + purchase.vrac;
    purchase.quantiteTotale = purchase.quantiteArrondie;

    this.calculateMontantApresRemise(purchase);
  }

  changeQuantity(purchase: any, field: string, increment: number) {
    if (field === 'carton') {
      if (purchase.carton + increment >= 0) {
        purchase.carton += increment;
        this.cartonCalculate(null, purchase);
      }
    } else if (field === 'vrac') {
      if (purchase.vrac + increment >= 0) {
        purchase.vrac += increment;
        this.vracCalculate(null, purchase);
      }
    }
  }
  saveOrders(): void {
    const orders = this.tableData.map((purchase) => ({
      customerName: 'John Doe', // Replace with actual customer name
      orderDetails: [
        {
          productName: purchase.designation,
          quantity: purchase.quantiteArrondie,
          codePct:purchase.codePCT,
          vrac:purchase.vrac,
          carton:purchase.carton,
          price: purchase.prix,
          discount: purchase.remise
        }
      ]
    }));

    this.http.post<any>('http://localhost:8089/api/orders', orders)
      .subscribe(
        (response: any) => {
          console.log('Orders saved successfully');
          // Handle the successful response in the UI
        },
        (error) => {
          console.error('Failed to save orders:', error);
          // Handle the error in the UI
        }
      );
  }
  calculateTotalAmount(): number {
    let totalAmount = 0;
    for (const purchase of this.tableData) {
      totalAmount += Number(purchase.montantApresRemise) || 0;
    }
    return totalAmount;
  }
}
