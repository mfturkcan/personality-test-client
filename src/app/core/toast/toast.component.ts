import { Component, OnInit } from '@angular/core';


declare var $: any;
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.toast').toast('show');

  }

}
