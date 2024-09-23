import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditProfileComponent } from "./edit-profile.component";

describe("SiteOverviewComponent", () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditProfileComponent]
    });
    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
