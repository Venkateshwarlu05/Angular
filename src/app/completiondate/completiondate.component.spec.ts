import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletiondateComponent } from './completiondate.component';

describe('CompletiondateComponent', () => {
  let component: CompletiondateComponent;
  let fixture: ComponentFixture<CompletiondateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletiondateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletiondateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
