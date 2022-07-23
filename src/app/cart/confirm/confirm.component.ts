import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit, OnDestroy {
  @Input('totalPrice') totalPrice : number = 0;
  @Input('FullName') FullName : string = 'test';

  subscribe !: Subscription;
  constructor(private route : ActivatedRoute) {
    // this.subscribe = this.route.queryParams.subscribe(data => {
    //   //console.log(data);
    //   this.FullName = data['FullName'];
    //   this.totalPrice = data['totalPrice'];
    // })
   }
   ngOnDestroy(): void {
    //this.subscribe.unsubscribe();
  }
  ngOnInit(): void {
  }

}
