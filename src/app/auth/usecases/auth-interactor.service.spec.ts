import { TestBed } from "@angular/core/testing";

import { AuthModule } from "@auth0/auth0-angular";
import { auth0Config } from "@infra/auth0/auth0.config";

import { AuthInteractor } from "./auth-interactor.service";

describe("AuthInteractorService", () => {
  let service: AuthInteractor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule.forRoot(auth0Config)]
    });
    service = TestBed.inject(AuthInteractor);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
