import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BidGemsListPage } from './bid-gems-list.page';

describe('BidGemsListPage', () => {
  let component: BidGemsListPage;
  let fixture: ComponentFixture<BidGemsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidGemsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BidGemsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
