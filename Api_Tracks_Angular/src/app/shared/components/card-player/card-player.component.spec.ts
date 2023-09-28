import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayerComponent } from './card-player.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardPlayerComponent', () => {
  let component: CardPlayerComponent;
  let fixture: ComponentFixture<CardPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CardPlayerComponent],
    schemas: [NO_ERRORS_SCHEMA]
});
    fixture = TestBed.createComponent(CardPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
