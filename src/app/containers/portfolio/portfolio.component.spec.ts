import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { PortfolioComponent } from "./portfolio.component";

// Associated components.
import { HeaderReturnComponent } from "../../components/header/Header-Return/header-return.component";

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PortfolioComponent,

        // Associated components.
        HeaderReturnComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  // Check if H1 title is seen.
  it("should render H1 header", () => {
    let h1: HTMLElement = fixture.nativeElement.querySelector("#portfolio > h1 > strong");
    component.title = "Portfolio";
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });
});
