import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SteamConnectLinkComponent } from './steam-connect-link.component';

describe('SteamConnectLinkComponent', () => {
  let component: SteamConnectLinkComponent;
  let fixture: ComponentFixture<SteamConnectLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteamConnectLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamConnectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
