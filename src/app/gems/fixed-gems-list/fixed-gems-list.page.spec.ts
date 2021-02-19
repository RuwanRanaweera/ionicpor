import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FixedGemsListPage } from './fixed-gems-list.page';

describe('FixedGemsListPage', () => {
  let component: FixedGemsListPage;
  let fixture: ComponentFixture<FixedGemsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedGemsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FixedGemsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
