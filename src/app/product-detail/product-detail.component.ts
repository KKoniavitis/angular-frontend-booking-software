import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, CompanyService } from "@shared/services/company/company.service";
import { CommonModule } from "@angular/common";
import { GoogleMap, MapMarker } from "@angular/google-maps";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, GoogleMap, MapMarker],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less'] // Corrected property name
})
export class ProductDetailComponent implements OnInit {
  product: Company | undefined;
  zoom = 15;
  center: google.maps.LatLngLiteral | undefined;
  markerPosition: google.maps.LatLngLiteral | undefined;
  loading = true;

  // Static default coordinates for each product
  private defaultCoordinates: { [key: number]: google.maps.LatLngLiteral } = {
    1: { lat: 37.987097831240206, lng: 23.7600709382424 },
    2: { lat: 38.03159538152975, lng: 23.70799769961482 },
    3: { lat: 40.66726202345278, lng: 22.91802939699029 },
    // Add more products and their respective coordinates here
  };

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private cdr: ChangeDetectorRef // Change detector reference
  ) {}

  ngOnInit(): void {
    // Subscribing to route params to react to changes in the route
    this.route.params.pipe(
      switchMap(params => {
        const id = Number(params['id']);
        return this.companyService.getCompanyById(id);
      })
    ).subscribe({
      next: (product: Company) => {
        this.product = product;

        // Check if latitude and longitude are valid
        if (this.product?.latitude && this.product?.longitude) {
          this.center = { lat: this.product.latitude, lng: this.product.longitude };
          this.markerPosition = { lat: this.product.latitude, lng: this.product.longitude };
        } else {
          console.error("Invalid product coordinates");

          // Use static default values based on product ID
          if (this.product) {
            const defaultCoords = this.defaultCoordinates[this.product.id];
            if (defaultCoords) {
              this.center = defaultCoords;
              this.markerPosition = defaultCoords;
            } else {
              // Fallback to a generic default if no specific default is found
              this.center = { lat: 0, lng: 0 }; // Default fallback
              this.markerPosition = { lat: 0, lng: 0 };
            }
          }
        }

        // Mark the changes explicitly
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Failed to fetch product:", err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
