import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';


@NgModule({
  declarations: [FeedbackComponent, SendmessageComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule {
  constructor(){
    alert('oogfogfooo');
  }
 }
