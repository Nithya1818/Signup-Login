import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class communicationServices {
  data = [
   
  ];
  constructor(private http: HttpClient) {}
  getData() {
   return  this.data;
  }

//   addUsertoList(){
//        let user= this.data;
//     this.data.map(val=>{
//      return val
//     });
//   }
}