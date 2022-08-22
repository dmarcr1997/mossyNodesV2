import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCardContainerComponent } from './portfolio-card-container.component';

describe('PortfolioCardContainerComponent', () => {
  let component: PortfolioCardContainerComponent;
  let fixture: ComponentFixture<PortfolioCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
