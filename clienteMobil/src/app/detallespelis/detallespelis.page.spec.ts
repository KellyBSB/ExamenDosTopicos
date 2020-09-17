import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallespelisPage } from './detallespelis.page';

describe('DetallespelisPage', () => {
  let component: DetallespelisPage;
  let fixture: ComponentFixture<DetallespelisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallespelisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallespelisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
