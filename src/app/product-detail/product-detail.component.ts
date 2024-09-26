import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, CompanyService } from "@shared/services/company/company.service";
import { CommonModule } from "@angular/common";
import { GoogleMap, MapMarker } from "@angular/google-maps";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, GoogleMap, MapMarker],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.less'
})
export class ProductDetailComponent implements OnInit{
  product: Company | undefined; // To hold the product data
  zoom = 15; // Set an appropriate zoom level
  center: google.maps.LatLngLiteral | undefined;
  markerPosition: google.maps.LatLngLiteral | undefined;
  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.companyService.getCompanies().subscribe((products: Company[]) => {
      this.product = products.find(p => p.id === id);

      if (this.product?.latitude && this.product?.longitude) {
        // Set the map's center and marker position if the coordinates are valid
        this.center = { lat: this.product.latitude, lng: this.product.longitude };
        this.markerPosition = { lat: this.product.latitude, lng: this.product.longitude };
      } else {
        // Fallback to a default location or handle missing coordinates
        console.error("Invalid product coordinates");
        this.center = { lat: 0, lng: 0 };
      }
    });
  }
}