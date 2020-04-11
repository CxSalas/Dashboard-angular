import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publicationcard',
  templateUrl: './publicationcard.component.html',
  styleUrls: ['./publicationcard.component.less']
})
export class PublicationcardComponent implements OnInit {

  constructor() { }

  @Input() title: String = "Hola";

  ngOnInit(): void {
  }

}
