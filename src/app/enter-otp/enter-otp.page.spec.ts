import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterOtpPage } from './enter-otp.page';

describe('EnterOtpPage', () => {
  let component: EnterOtpPage;
  let fixture: ComponentFixture<EnterOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
