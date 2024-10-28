import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErorPageComponent } from './eror-page/eror-page.component';

const routes: Routes = [
  {path:"",component:StartFrameworkComponent,pathMatch:"full"},
  {path:"startframework",component:StartFrameworkComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"**",component:ErorPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
