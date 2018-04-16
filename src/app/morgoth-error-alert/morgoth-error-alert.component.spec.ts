import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MorgothErrorAlertComponent } from './morgoth-error-alert.component';
import { MorgothService } from '../morgoth/morgoth.service';
import { MorgothTestingService } from '../morgoth/testing';
import { SharedModule } from '../shared/shared.module';

describe('MorgothErrorAlertComponent', () => {
  let component: MorgothErrorAlertComponent;
  let fixture: ComponentFixture<MorgothErrorAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorgothErrorAlertComponent ],
      imports: [ SharedModule ],
      providers: [
        {
          provide: MorgothService,
          useClass: MorgothTestingService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorgothErrorAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([MorgothService], (service: MorgothTestingService) => {
    expect(component).toBeTruthy();
  }));
});
