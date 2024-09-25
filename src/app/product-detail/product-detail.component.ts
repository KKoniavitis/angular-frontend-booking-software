import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, CompanyService } from "@shared/services/company/company.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.less'
})
export class ProductDetailComponent implements OnInit{
  product: Company | undefined; // To hold the product data
  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get the product ID from the route
    this.companyService.getCompanies().subscribe((products: Company[]) => {
      this.product = products.find(p => p.id === id); // Find the product by ID
    });
  }
}