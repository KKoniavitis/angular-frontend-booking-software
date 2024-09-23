import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isLeapYear from "dayjs/plugin/isLeapYear";
import localeData from "dayjs/plugin/localeData";
import localizedFormat from "dayjs/plugin/localizedFormat";
import timezone from "dayjs/plugin/timezone";
import updateLocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";

export const dayjsConfig = () => {
  dayjs.extend(isLeapYear);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(localeData);
  dayjs.extend(localizedFormat);
  dayjs.extend(updateLocale);
  dayjs.extend(customParseFormat);
};
