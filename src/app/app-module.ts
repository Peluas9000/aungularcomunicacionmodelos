import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { HijoCochesComponent } from './components/hijo-coches-component/hijo-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { DeporteComponent } from './components/deporte-component/deporte-component';
import { PadreNumeroComponent } from './components/padre-numero-component/padre-numero-component';
import { HijoNumeroComponent } from './components/hijo-numero-component/hijo-numero-component';
import { ComicsSimplesComponent } from './components/comics-simples-component/comics-simples-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';

@NgModule({
  declarations: [
    App,
    ListaProductosComponent,
    HomeComponent,
    MenuComponent,
    PadreCochesComponent,
    HijoCochesComponent,
    PadreDeportesComponent,
    DeporteComponent,
    PadreNumeroComponent,
    HijoNumeroComponent,
    ComicsSimplesComponent,
    ComicsJsonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
