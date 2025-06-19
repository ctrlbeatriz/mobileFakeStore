import { Component, OnInit } from '@angular/core';
import { ApiService, Product } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@Component({
   standalone: true, 
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule],

  
})
export class Tab1Page implements OnInit {
  products: Product[] = [];
  isLoading = false;
  errorMsg: string | null = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(event?: any) {
    this.isLoading = true;
    this.errorMsg = null;
    this.api.getProducts().subscribe({
      next: data => {
        this.products = data;
        this.isLoading = false;
        if (event) { event.target.complete(); }
      },
      error: err => {
        console.error(err);
        this.errorMsg = 'Erro ao carregar produtos.';
        this.isLoading = false;
        if (event) { event.target.complete(); }
      }
    });
  }
}
