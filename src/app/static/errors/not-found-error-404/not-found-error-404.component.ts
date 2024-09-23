import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-not-found-error404",
  templateUrl: "./not-found-error-404.component.html",
  styleUrls: ["./not-found-error-404.component.less"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundError404Component {}
