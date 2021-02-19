import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GemDetailPage } from './gem-detail.page';

describe('GemDetailPage', () => {
  let component: GemDetailPage;
  let fixture: ComponentFixture<GemDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GemDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
