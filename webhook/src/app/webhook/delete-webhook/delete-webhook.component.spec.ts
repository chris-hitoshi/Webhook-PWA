import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWebhookComponent } from './delete-webhook.component';

describe('DeleteWebhookComponent', () => {
  let component: DeleteWebhookComponent;
  let fixture: ComponentFixture<DeleteWebhookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWebhookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWebhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
