import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comics';
import * as XSLX from 'xlsx';
@Component({
  selector: 'app-comics-excel-component',
  standalone: false,
  styleUrl: './comics-excel-component.css',
  templateUrl: './comics-excel-component.html',
})
export class ComicsExcelComponent {
  public arrayComics:Array<Comic>;

  constructor(private _cdr:ChangeDetectorRef) {
    this.arrayComics = new Array<Comic>();
  }

  public cargarComics():void {
    let path="./assets/comics.xlsx";
    fetch(path).then((response)=>response.arrayBuffer())
    .then((buffer)=>{
      //leer el buffer y convertirlo a un libro de trabajo de Excel
      let workbook=XSLX.read(buffer,{type:"array"});
      //obtener la primera hoja del libro de trabajo
      let hojaName=workbook.SheetNames[0];
      let hoja=workbook.Sheets[hojaName];
      //como tiene formato de tabla,covertimoso en array de objetos 
      let data=XSLX.utils.sheet_to_json(hoja);

      this.arrayComics = data.map((item: any) => new Comic(item.nombre, item.imagen, item.descripcion));
      this._cdr.detectChanges();
      
    })
    
  }

}
