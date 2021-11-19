import { Component, Input, OnInit } from '@angular/core';

import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'phone-item',
  templateUrl: 'phoneItem.component.html',
  styleUrls: ['./phoneItem.component.scss'],
})
export class PhoneItemComponent implements OnInit {
  @Input() data: Phone = {};

  constructor() {}

  ngOnInit() {}
}
