import { ChangeDetectionStrategy, Component } from "@angular/core";

import { NzSpinModule } from "ng-zorro-antd/spin";

@Component({
  selector: "app-loader",
  templateUrl: "./app-loader.component.html",
  styleUrls: ["./app-loader.component.less"],
  standalone: true,
  imports: [NzSpinModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLoaderComponent {}
