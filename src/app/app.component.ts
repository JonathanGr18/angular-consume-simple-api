import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  searchUserID: number | null = null;
  
  userID: number | null = null;
  userTitle: string | null = null;
  isUserCompleted: boolean | null = null;

  constructor(private httpClient: HttpClient) { }

  getUser() {
    this.httpClient.get<user>(`https://jsonplaceholder.typicode.com/todos/${this.searchUserID}`).subscribe(user => {
      this.userID = user.id;
      this.userTitle = user.title;
      this.isUserCompleted = user.completed;
    }); 
  }
}
