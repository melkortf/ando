import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorAlertComponent } from './error-alert.component';
import { By } from '@angular/platform-browser';

describe('ErrorAlertComponent', () => {
  let component: ErrorAlertComponent;
  let fixture: ComponentFixture<ErrorAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply correct css classes', () => {
    component.message = 'FAKE_MESSAGE';
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('div')).nativeElement as HTMLDivElement;
    expect(div).toBeTruthy();
    expect(div.classList.contains('alert')).toBe(true);
    expect(div.classList.contains('alert-danger')).toBe(true);
  });

  it('should render the message itself', () => {
    component.message = 'FAKE_MESSAGE';
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('div')).nativeElement as HTMLDivElement;
    expect(div.innerText).toBe('FAKE_MESSAGE');
  });
});
