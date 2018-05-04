import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ServerListComponent } from './server-list.component';
import { ServerItemComponent } from '../server-item/server-item.component';
import { MorgothService } from '../../morgoth/morgoth.service';
import { MorgothTestingService } from '../../morgoth/testing';
import { MorgothModule } from '../../morgoth/morgoth.module';
import { SharedModule } from '../../shared/shared.module';

describe('ServerListComponent', () => {
  let component: ServerListComponent;
  let fixture: ComponentFixture<ServerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MorgothModule,
        SharedModule,
      ],
      declarations: [
        ServerItemComponent,
        ServerListComponent
      ],
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
    fixture = TestBed.createComponent(ServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([MorgothService], (service: MorgothTestingService) => {
    expect(component).toBeTruthy();
  }));
});
