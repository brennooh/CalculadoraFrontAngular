import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor(private http:HttpClient) { }

  calcular(a:number, b:number, o:number){

    let headers = new HttpHeaders();
    headers.set("Content-Type","application/x-www-form-urlencoded");

    let params = new HttpParams();
    params.append("operandoA", a);
    params.append("operandoB", b);
    params.append("operador", o);

    return this.http.post('http://localhost:8080/Calculadora/calcular',{operandoA:a, operandoB:b, operador:o},{headers});
  }
}
