import { Pipe, PipeTransform } from "@angular/core";

import dayjs from "dayjs";

@Pipe({
  name: "localizedDate",
  pure: true,
  standalone: true
})
export class LocalizedDatePipe implements PipeTransform {
  transform(value: any, pattern: string | undefined = undefined, timezone: string | undefined = undefined): unknown {
    if (value) {
      return dayjs(value)
        .tz(timezone)
        .format(pattern || "L");
    }
  }
}
