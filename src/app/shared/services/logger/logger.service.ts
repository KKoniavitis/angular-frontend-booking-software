import { Injectable } from "@angular/core";

import { sentryConfig } from "../../../infrastructure/sentry/sentry.config";
import * as Sentry from "@sentry/angular-ivy";

import { ICommonLogger } from "../../services/logger/common-logger.interface";
import { ISeverityLogger } from "../../services/logger/severity-logger.interface";
import { ISimpleLogger } from "../../services/logger/simple-logger.interface";

@Injectable({
  providedIn: "root"
})
export class LoggerService implements ICommonLogger, ISimpleLogger, ISeverityLogger {
  constructor() {}

  init(): void {
    Sentry.init(sentryConfig);
  }

  log(message: string, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
    // Sentry SeverityLevel = 'log' | 'debug' | 'info' | 'warning' | 'error' | 'fatal';
    Sentry.captureMessage(this._resolveMessageType(message, optionalParams), "log");
  }

  trace(message: any, optionalParams: any[]): void {
    console.trace(message, ...optionalParams);
    Sentry.captureMessage(message, {
      level: "log",
      tags: { tag: "trace" }
    });
  }

  debug(message: any, ...optionalParams: any[]): void {
    console.debug(message, ...optionalParams);
    Sentry.captureMessage(this._resolveMessageType(message, optionalParams), "debug");
  }

  info(message: any, ...optionalParams: any[]): void {
    console.info(message, ...optionalParams);
    Sentry.captureMessage(this._resolveMessageType(message, optionalParams), "info");
  }

  warn(message: any, ...optionalParams: any[]): void {
    console.warn(message, ...optionalParams);
    Sentry.captureMessage(this._resolveMessageType(message, optionalParams), "warning");
  }

  error(message: any, ...optionalParams: any[]): void {
    console.error(message, ...optionalParams);
    Sentry.captureMessage(this._resolveMessageType(message, optionalParams), "error");
  }

  fatal(message: any, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
    Sentry.captureMessage(this._resolveMessageType(message, optionalParams), "fatal");
  }

  private _resolveMessageType(message: any, optionalParams: any[]): string {
    let paramsStr = "";

    if (optionalParams?.length) {
      paramsStr = " " + this._formatParams(optionalParams);
    }

    return message + paramsStr;
  }

  private _formatParams(params: any[]): string {
    let formatStr = "";

    // Is there at least one object in the array?
    if (params.some((p) => typeof p === "object")) {
      // Build comma-delimited string
      params.forEach((item: any, idx: number) => {
        formatStr += JSON.stringify(item, null, 2) + (idx === params.length - 1 ? "" : ",");
      });
    } else {
      formatStr = params.join(",");
    }

    return formatStr;
  }
}
