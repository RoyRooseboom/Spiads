import { Component, Input } from '@angular/core';

@Component({
  selector: 'tekstveld',
  templateUrl: './tekstveld.component.html',
  styleUrls: ['./tekstveld.component.scss'],
})
export class TekstveldComponent {
  verplichtText = 'Dit veldt is verplicht';

  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() ngObject: string = '';
  @Input() name: string = '';
  @Input() modelName: string = '';
  @Input() label: string = '';
}
