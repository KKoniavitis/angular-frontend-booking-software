import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth-provider-callback",
  templateUrl: "./auth-provider-callback.component.html",
  styleUrls: ["./auth-provider-callback.component.less"],
  standalone: true
})
export class AuthProviderCallbackComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("[AuthCallbackComponent] ngOnInit");
  }
}
