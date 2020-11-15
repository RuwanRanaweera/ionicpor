import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditGemPage } from './edit-gem.page';

describe('EditGemPage', () => {
  let component: EditGemPage;
  let fixture: ComponentFixture<EditGemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditGemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
