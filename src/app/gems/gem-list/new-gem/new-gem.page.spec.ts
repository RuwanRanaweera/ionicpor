import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewGemPage } from './new-gem.page';

describe('NewGemPage', () => {
  let component: NewGemPage;
  let fixture: ComponentFixture<NewGemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewGemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
