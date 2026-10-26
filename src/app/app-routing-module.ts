import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HijoCochesComponent } from './components/hijo-coches-component/hijo-coches-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumeroComponent } from './components/padre-numero-component/padre-numero-component';
import { ComicsSimplesComponent } from './components/comics-simples-component/comics-simples-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'productos',component:ListaProductosComponent} ,
  {path:'coches',component:HijoCochesComponent},
  {path:"padre", component:PadreCochesComponent},
  {path:"padredeportes", component:PadreDeportesComponent},
  {path:"numeros" , component:PadreNumeroComponent},
  {path:"comicsimples", component:ComicsSimplesComponent},
  {path:"json", component:ComicsJsonComponent},
  {path:"excel", component:ComicsExcelComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
