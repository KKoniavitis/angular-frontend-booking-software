import { Subscription } from "rxjs";

export const unsubscribe = (subscriptions: Subscription[]): void => {
  subscriptions.forEach((subscription) => subscription.unsubscribe());
};
