import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Product } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
   standalone: true, 
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [CommonModule, IonicModule],
  
})
export class Tab2Page implements OnInit {
  product: Product | null = null;
  isLoading = true;
  errorMsg: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.loadDetails();
  }

  loadDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;
    if (id !== null) {
      this.isLoading = true;
      this.api.getProductById(id).subscribe({
        next: data => {
          this.product = data;
          this.isLoading = false;
        },
        error: err => {
          console.error(err);
          this.errorMsg = 'Erro ao carregar detalhes.';
          this.isLoading = false;
        }
      });
    } else {
      this.errorMsg = 'ID inválido.';
      this.isLoading = false;
    }
  }
}
