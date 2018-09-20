import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Page01Component} from './pages/page01/page01.component';

const routes: Routes = [
  {
    path: 'page01',
    component: Page01Component
  },
  {
    path: 'page02',
    component: Page01Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
