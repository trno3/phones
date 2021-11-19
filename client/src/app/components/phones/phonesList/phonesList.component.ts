import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Phone } from 'src/app/models/phone';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phonesList.component.html',
  styleUrls: ['./phonesList.component.scss'],
})
export class PhonesListComponent implements OnInit {
  public phoneData: Observable<Phone[]> | null = null;

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.phoneData = this.phoneService.getList();
  }
}
