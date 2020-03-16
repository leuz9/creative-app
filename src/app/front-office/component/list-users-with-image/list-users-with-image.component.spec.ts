import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersWithImageComponent } from './list-users-with-image.component';

describe('ListUsersWithImageComponent', () => {
  let component: ListUsersWithImageComponent;
  let fixture: ComponentFixture<ListUsersWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersWithImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
