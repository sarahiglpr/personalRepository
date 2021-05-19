import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesMainComponent } from './quotes/quotes-main.component';

const routes: Routes = [
  { path: '', component: QuotesMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

