import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  // selector: '[app-test]'
  // class
  // selector: '.app-test',

  // templateUrl: './test.component.html',
  template: `<div>Inline template</div>`,
  // styleUrls: ['./test.component.css']
  styles: [`div {
    color: red;
  }`]
})
export class TestComponent {

}
