import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostdetailComponent }  from './components/home/subcomponents/postdetail/postdetail.component' ;
import { PostlistComponent } from './components/home/subcomponents/postlist/postlist.component';


const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent ,
    children : [
      {
        path: 'post/:id',
        component: PostdetailComponent
      },
      {
        path: '',
        component: PostlistComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
