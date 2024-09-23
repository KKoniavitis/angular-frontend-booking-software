import { provideHttpClient } from "@angular/common/http";
import { APP_INITIALIZER } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { initializeRequiredGlobalDataFactory } from "@infra/angular/initializers/required-data.initializer";

import { BootstrapService } from "./bootstrap.service";

describe("BootstrapService", () => {
  let service: BootstrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        provideHttpClient(),
        {
          provide: APP_INITIALIZER,
          useFactory: initializeRequiredGlobalDataFactory,
          multi: true,
          deps: [BootstrapService]
        }
      ]
    });

    service = TestBed.inject(BootstrapService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
