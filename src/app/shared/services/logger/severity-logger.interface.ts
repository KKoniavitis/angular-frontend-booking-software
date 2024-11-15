export interface ISeverityLogger {
  trace(message: any, ...optionalParams: any[]): void;
  debug(message: any, ...optionalParams: any[]): void;
  info(message: any, ...optionalParams: any[]): void;
  warn(message: any, ...optionalParams: any[]): void;
  error(message: any, ...optionalParams: any[]): void;
  fatal(message: any, ...optionalParams: any[]): void;
}
