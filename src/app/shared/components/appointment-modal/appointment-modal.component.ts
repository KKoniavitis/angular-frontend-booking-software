import { Component, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Company, CompanyService } from "@shared/services/company/company.service";
import { NzFormItemComponent, NzFormLabelComponent } from "ng-zorro-antd/form";
import { NzColDirective } from "ng-zorro-antd/grid";
import { NzDatePickerComponent } from "ng-zorro-antd/date-picker";
import { NzTimePickerComponent } from "ng-zorro-antd/time-picker";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: "app-appointment-modal",
  templateUrl: "./appointment-modal.component.html",
  standalone: true,
  imports: [
    NzFormLabelComponent,
    NzFormItemComponent,
    NzColDirective,
    NzDatePickerComponent,
    FormsModule,
    NzTimePickerComponent,
    NzButtonComponent
  ],
  styleUrls: ["./appointment-modal.component.less"]
})
export class AppointmentModalComponent {
  @Input() product: Company | undefined; // Injected product
  selectedDate: Date | null = null; // Initialize selectedDate
  selectedTime: Date | null = null; // Initialize selectedTime

  disabledDate = (current: Date): boolean => {
    return current && current < new Date(new Date().setHours(0, 0, 0, 0)); // Disable only past dates
  }
  constructor(private modal: NzModalRef,
              private companyService : CompanyService,
              private auth: AuthService) {}

  submitForm(): void {
    if (this.selectedDate && this.selectedTime) {
      // Get the user information from Auth0
      this.auth.user$.subscribe(user => {
        if (user) {
          const appointmentDetails = {
            date: this.selectedDate,
            time: this.selectedTime,
            companyId: this.product?.id, // Assuming you want to send the product ID too
            userId: user.sub // Get user ID from Auth0
          };

          // Call the service to book the appointment
          this.companyService.bookAppointment(appointmentDetails).subscribe(
            response => {
              console.log('Appointment booked successfully:', response);
              this.modal.close(response); // Close the modal and return the response
            },
            error => {
              console.error('Error booking appointment:', error);
            }
          );
        } else {
          console.error('User not logged in.');
        }
      });
    } else {
      console.error('Please select both a date and a time.');
    }
  }

  cancel(): void {
    this.modal.destroy();
  }
}
