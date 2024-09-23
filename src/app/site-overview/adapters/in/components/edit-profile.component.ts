import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthService } from "@auth0/auth0-angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-site-overview",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.less"],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent implements OnInit{
  user: any = {
    name: '',
    email: '',
    password: ''
  };
  profilePicture: string = '/assets/images/profile/default-profile.jpg'; // Default profile picture

  showSuccessMessage: boolean = false; // Flag for success message
  successMessage: string = 'Το προφίλ αποθηκεύτηκε επιτυχώς!'; // The message text

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.user.name = user.name || ''; // Use empty string if name is not available
        this.user.email = user.email || ''; // Use empty string if email is not available
        // Optionally set other user details if available
      } else {
        // Handle the case when user is null or undefined
        console.warn('User not found or not authenticated');
      }
    });
  }

  onProfilePicChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    console.log('Profile updated:', this.user);
    this.showSuccessMessage = true; // Show the success message

    setTimeout(() => {
      this.showSuccessMessage = false; // Hide the message after 3 seconds
      this.router.navigateByUrl('/edit-profile', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/edit-profile']);
        window.location.reload();
      });
    }, 1500); // Adjust the time as needed
  }
}
