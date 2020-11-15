import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BidingPage } from './biding.page';

describe('BidingPage', () => {
  let component: BidingPage;
  let fixture: ComponentFixture<BidingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
