import {Component, input, signal} from '@angular/core';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrl: './user-board.component.scss',
  standalone: true,
})
export class UserBoardComponent {
  public title = input('User Board');
  protected readonly userName = signal('John');
}
