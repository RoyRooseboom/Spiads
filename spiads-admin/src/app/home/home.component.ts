import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Lid } from '../entities/lid';
import { HomeService } from './service/home.service';
import { map } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedColumns: string[] = [
    'naam',
    'achternaam',
    'email',
    'adress',
    'postcode',
    'woonplaats',
    'iban',
    'handtekening',
  ];
  dataSource: MatTableDataSource<Lid> = new MatTableDataSource<Lid>([]);

  constructor(private homeService: HomeService) {}

  getLeden() {
    this.homeService
      .getAllLeden()
      .pipe(
        map((resp) => {
          this.dataSource.data = resp;
        })
      )
      .subscribe();
  }
}
