import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GemsPage } from './gems.page';

describe('GemsPage', () => {
  let component: GemsPage;
  let fixture: ComponentFixture<GemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
