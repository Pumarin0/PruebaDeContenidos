import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent implements OnInit {

  paises: any = [];
  cols: any = [];
 

  

  ngOnInit()
  {
    this.obtenerAllCountries();
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'capital', header: 'Capital' },
      { field: 'poblacion', header: 'Poblacion' }

    ];

   


  }

  constructor(private http: HttpClient)
  {

  }

  


  obtenerAllCountries()
  {
    this.http.get('https://restcountries.com/v3.1/all').subscribe((ListaDePaises: any) => {
      

      ListaDePaises.map((auxpais: any) => {
        let pais = {
          nombre: auxpais.name.common,
          capital: auxpais.capital,
          poblacion: auxpais.population,
         
        }
        this.paises.push(pais);        
      })
    })
  }

}






