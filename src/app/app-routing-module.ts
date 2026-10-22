import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HijoCochesComponent } from './components/hijo-coches-component/hijo-coches-component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'productos',component:ListaProductosComponent} ,
  {path:'coches',component:HijoCochesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
