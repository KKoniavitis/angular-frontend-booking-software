export interface IDataLoader {
  loadRequiredGlobalData(): void;
  loadRequiredSecuredData(): void;
}
