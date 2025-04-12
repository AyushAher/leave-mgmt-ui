import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

const mockActivatedRoute = {
  snapshot: {
    queryParamMap: {
      get: (key: string) => null, // or return a mock value like 'mock-token'
    },
  },
};

const mockRouter = {
  navigate: jasmine.createSpy('navigate'),
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        // If LoginService has dependencies, mock it too
        {
          provide: LoginService,
          useValue: {
            GetCode: () => 'https://login.microsoftonline.com/',
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have link', () => {
    expect(component.loginCodeUrl).toContain(
      'https://login.microsoftonline.com/'
    );
  });
});
