import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoService } from 'src/app/services/todo.service';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let mockService: any;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj(['getAll']);
    mockService.getAll.and.returnValue([]);
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      providers: [{provide: TodoService, useValue: mockService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
