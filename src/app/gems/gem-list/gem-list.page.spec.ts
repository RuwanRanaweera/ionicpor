import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GemListPage } from './gem-list.page';

describe('GemListPage', () => {
  let component: GemListPage;
  let fixture: ComponentFixture<GemListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GemListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
