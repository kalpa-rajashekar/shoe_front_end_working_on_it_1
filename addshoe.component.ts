import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shoe } from 'src/app/model/Shoe';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-addshoe',
  templateUrl: './addshoe.component.html',
  styleUrls: ['./addshoe.component.css']
})
export class AddshoeComponent implements OnInit {
  @Input()
  shoe!: Shoe;
  
  @Output()
  shoeAddedEvent = new EventEmitter();
  
  public selectedFile: any;
  imgURL: any;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public onFileChanged(event:any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveShoe() {
    //If there is no book id then it is an add book call else it is an edit book call
    if (this.shoe.id == null) {

      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/shoes/upload', uploadData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.httpClientService.addShoe(this.shoe).subscribe(
              (shoe) => {
                this.shoeAddedEvent.emit();
                this.router.navigate(['admin', 'shoes']);
              }
            );
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
        );
    } else {
      this.httpClientService.updateShoe(this.shoe).subscribe(
        (shoe) => {
          this.shoeAddedEvent.emit();
          this.router.navigate(['admin', 'shoes']);
        }
      );
    }

  }

}