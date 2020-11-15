import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GemBidPage } from './gem-bid.page';

describe('GemBidPage', () => {
  let component: GemBidPage;
  let fixture: ComponentFixture<GemBidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemBidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GemBidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
