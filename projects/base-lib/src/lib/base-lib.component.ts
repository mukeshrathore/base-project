import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'base-base-lib',
  template: `
    <p>
      base-lib works!
    </p>
  `,
  styles: [
  ],
})
export class BaseLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
