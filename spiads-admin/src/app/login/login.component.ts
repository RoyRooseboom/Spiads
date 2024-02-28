import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: { email: string; wachtwoord: string } = {
    email: '',
    wachtwoord: '',
  };

  verplichtText = 'Ingevulde waarde is onjuist';

  send() {}
}
