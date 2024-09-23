import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EnterpriseOverviewComponent } from "./enterprise-overview.component";

describe("EnterpriseOverviewComponent", () => {
  let component: EnterpriseOverviewComponent;
  let fixture: ComponentFixture<EnterpriseOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EnterpriseOverviewComponent]
    });
    fixture = TestBed.createComponent(EnterpriseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
