import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWebhookComponent } from './update-webhook.component';

describe('EditWebhookComponent', () => {
  let component: UpdateWebhookComponent;
  let fixture: ComponentFixture<UpdateWebhookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWebhookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWebhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
