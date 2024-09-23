/* eslint-disable prettier/prettier */
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostListener, OnInit } from "@angular/core";

import { NzTableModule } from "ng-zorro-antd/table";
import { FormsModule } from "@angular/forms";
import { LocationService } from "@shared/services/location/location.service";
import { Location } from "@shared/services/location/location.interface";
import { Therapy } from "@shared/services/therapy/therapy.interface";
import { TherapyService } from "@shared/services/therapy/therapy.service";

@Component({
  selector: "app-enterprise-overview",
  templateUrl: "./enterprise-overview.component.html",
  styleUrls: ["./enterprise-overview.component.less"],
  standalone: true,
  imports: [NzTableModule, CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterpriseOverviewComponent implements OnInit{
  locations: Location[] = [];
  therapies: Therapy[] = [];
  selectedLocation: string = '';
  selectedTherapy: string = '';
  showDropdown: boolean = false;
  showDropdownTherapies: boolean = false;

  constructor(private countryService: LocationService, private therapyService: TherapyService) {}

  ngOnInit(): void {
    this.fetchLocations();
    this.fetchTherapies();
  }

  fetchLocations() {
    this.countryService.getCountries().subscribe((data: Location[]) => {
      this.locations = data;
    });
  }

  fetchTherapies() {
    this.therapyService.getTherapies().subscribe((data: Therapy[]) => {
      this.therapies = data;
    });
  }

  // Show location dropdown and hide therapy dropdown
  onFocus() {
    this.showDropdown = true;
    this.showDropdownTherapies = false; // Close therapy dropdown
  }

  // Show therapy dropdown and hide location dropdown
  onFocusTherapies() {
    this.showDropdownTherapies = true;
    this.showDropdown = false; // Close location dropdown
  }

  selectLocation(location: any) {
    this.selectedLocation = location.name;
    this.showDropdown = false;
  }

  selectTherapy(therapy: any) {
    this.selectedTherapy = therapy.name;
    this.showDropdownTherapies = false;
  }

  // Combine both click listeners into one
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Close location dropdown if clicked outside
    if (!target.closest('.dropdown') && !target.closest('.input')) {
      this.showDropdown = false;
    }

    // Close therapy dropdown if clicked outside
    if (!target.closest('.dropdown') && !target.closest('.input')) {
      this.showDropdownTherapies = false;
    }
  }
}

