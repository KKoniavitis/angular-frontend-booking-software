import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./app-footer.component.html",
  styleUrls: ["./app-footer.component.less"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFooterComponent {
  constructor() {}
}
