import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-title',
  templateUrl: './service-title.component.html',
  styleUrls: ['./service-title.component.scss']
})
export class ServiceTitleComponent implements OnInit {

  @Input() modifier: string = 'default';
  public baseClassName: string = 'service-title';
  public modifierClassName: string;

  constructor() { }

  ngOnInit() {
    this.modifierClassName = `${this.baseClassName}--${this.modifier}`;
  }

}
