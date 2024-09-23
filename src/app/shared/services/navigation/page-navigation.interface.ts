export interface IPageNavigation {
  reload(): void;
  goToHome(): void;
  goToLogin(targetUrl?: string): void;
}
