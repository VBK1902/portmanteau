import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadcompComponent } from './downloadcomp.component';

describe('DownloadcompComponent', () => {
  let component: DownloadcompComponent;
  let fixture: ComponentFixture<DownloadcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
