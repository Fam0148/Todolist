import { Component } from '@angular/core';
import { Todo } from './rule/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  todoDescription: String = "";
  todoDate:Date = new Date();

  details: Todo []= []

  display()
    {
    if(this.todoDescription.trim().length && this.todoDate)
    {

              let newTodo : Todo = 
              {
                id:Math.floor(Math.random()*100),
                description:this.todoDescription,
                date:this.todoDate
                }

          this.details.push(newTodo)

        this.todoDescription="";
        this.todoDate = new Date();
    }
    }

  delete(index:number)
    {
      this.details.splice(index,1)
    }
}
