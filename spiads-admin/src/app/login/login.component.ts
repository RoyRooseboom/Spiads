import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: { gebruikersnaam: string; wachtwoord: string } = {
    gebruikersnaam: '',
    wachtwoord: '',
  };

  verplichtText = 'Ingevulde waarde is onjuist';

  send() {}
}
