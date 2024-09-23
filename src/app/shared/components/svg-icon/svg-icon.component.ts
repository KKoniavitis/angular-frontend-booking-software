import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

import { SvgIconSize } from "@shared/components/svg-icon/svg-icon.model";

@Component({
  selector: "app-svg-icon",
  templateUrl: "./svg-icon.component.html",
  styleUrls: ["./svg-icon.component.less"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent implements OnInit {
  @Input() icon = "";
  @Input() size?: SvgIconSize;
  @Input() color?: string;

  src = "";

  style = "";

  ngOnInit(): void {
    this.src = `assets/sprites/app-sprite.svg#${this.icon}`;

    if (this.color) {
      this.style = `fill: ${this.color}`;
    }
  }
}
