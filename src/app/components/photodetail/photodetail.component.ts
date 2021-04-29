import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotodetailService } from '../../services/photodetail.service';
@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.scss']
})
export class PhotodetailComponent implements OnInit {

  hasDetail:any;

  photos:any = [];

  constructor(private photoService: PhotodetailService) { }

  ngOnInit(): void {
   this.photoService.getImage().subscribe( (data:any) =>{
     this.photos = data.items;
     console.log(this.photos)
   })
  }
  detail(data){
    this.hasDetail = JSON.parse(data.gallery_cont);
    console.log(data)
  }

}
