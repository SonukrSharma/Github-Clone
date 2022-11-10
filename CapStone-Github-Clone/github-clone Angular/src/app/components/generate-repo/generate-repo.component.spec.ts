import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRepoComponent } from './generate-repo.component';

describe('GenerateRepoComponent', () => {
  let component: GenerateRepoComponent;
  let fixture: ComponentFixture<GenerateRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateRepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
