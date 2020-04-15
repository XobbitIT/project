import { Component, OnInit } from '@angular/core';
import { TodoService } from '../dashboard/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  addTodo() {
    console.log('add');
    this.todoService.addTodo({
      name: 'test', 
      priority: 1, 
      authorId: 'PTphuwoYEnXiAkT95TOXnEz4mCr2',
      date: new Date()
    });
  }

}