import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotodetailService {

  constructor(private http: HttpClient) { }

  getImage(){
   return this.http.post('https://multipleproduct.wacocolife.com/api/gallery/showClient/1',{})
  }
}
