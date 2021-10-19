
import { SearchComponent } from './components/search/search.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path:'',
    component: WrapperComponent,
    children:[
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
