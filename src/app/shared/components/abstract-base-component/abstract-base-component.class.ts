import { Component, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

import { unsubscribe } from "../../utils/observable.utils";

@Component({ template: "", standalone: true })
export abstract class AbstractBaseComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];

  addSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    console.log("[AbstractBaseComponent] ngOnDestroy");
    unsubscribe(this.subscriptions);
    this.subscriptions = [];
  }
}
