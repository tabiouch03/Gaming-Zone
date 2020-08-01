import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNewsComponent } from './game-news.component';

describe('GameNewsComponent', () => {
  let component: GameNewsComponent;
  let fixture: ComponentFixture<GameNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
