import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'Mike';
  allowPress = true;


  onPressButton() {
    this.username = '';
  }
}
