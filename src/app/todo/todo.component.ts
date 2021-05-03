import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public Items: Item[] = [];
  itemToInsert = new FormControl('hello');
  showVal = () => {
    this.Items.push({ title: this.itemToInsert.value });
    this.itemToInsert.setValue('');
  };
  Delete(index:number){
    this.Items.splice(index,1);
  }
}

export interface Item {
  title: string;
}


//http://localhost:5000