import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
export class ChildPage implements OnInit {
  @Input() data: any
  constructor() { }
  ngOnInit() {
    // const span = document.createElement("span");
    // const div = document.querySelector("div");
    // div.appendChild(span);
    // const allInput = document.querySelectorAll('input[type="button"');
    // Array.from(allInput).forEach((input, i) => {
    //   input.addEventListener("click", (event) => {
    //     span.innerText = `${i + 1} button clicked`;
    //   });
    // });
  }


  onClick(event: any) {
    console.log(event);
    console.log("hiii");
    let content = document.getElementById('menu');
    //  let firstChild = content.firstChild;
  }




}
