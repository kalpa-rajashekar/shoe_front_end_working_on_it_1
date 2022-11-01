import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shoe } from 'src/app/model/Shoe';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewshoe',
  templateUrl: './viewshoe.component.html',
  styleUrls: ['./viewshoe.component.css']
})
export class ViewshoeComponent implements OnInit {
  @Input()
  shoes!: Shoe;

  constructor(private httpClientService: HttpClientService, private router: Router
    ) { }
  
    ngOnInit() {
    }
  
    deleteShoe() {
      this.httpClientService.deleteShoe(this.shoes.id).subscribe(
        (shoes: any) => {
          this.router.navigate(['admin', 'shoes']);
        }
      );
    }
    editShoe() {
      this.router.navigate(['admin', 'shoes'], { queryParams: { action: 'edit', id: this.shoes.id } });
    }
  
  }