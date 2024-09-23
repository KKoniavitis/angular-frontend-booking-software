import { TestBed } from "@angular/core/testing";

import { AppGlobalService } from "./app-global.service";

describe("AppGlobalService", () => {
  let service: AppGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppGlobalService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
