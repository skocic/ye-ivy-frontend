import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ivy Frontend';

  throwError() {
    throw new Error('An unhandled error happened');
  }

  throwHandledError() {
    try {
      throw new Error('An error happened');
    } catch (error) {
      console.error('Log error', error);
    }
    console.log('Script execution continues');
  }
}
