import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Artist } from 'src/app/artists/artist';
import { ArtistService } from 'src/app/artists/artist.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";




@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
providers: [MessageService,ConfirmationService]
})
export class ArtistsComponent implements OnInit {
  productDialog: boolean;

  newArtistDialog: boolean;

  artists: Artist[];

  artist: Artist;

  selectedArtists: Artist[];

  submitted: boolean;

  statuses: any[];

  picture: any = File; 

  addForm:FormGroup;

  constructor(private artistService: ArtistService,private formBuilder:FormBuilder, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({

        "realName": new FormControl('', Validators.compose([Validators.required])),
        "stageName": new FormControl('', Validators.compose([Validators.required])),
        "recordLabel": new FormControl('', Validators.compose([Validators.required])),
        "dob": new FormControl('', Validators.compose([Validators.required])),
        "dod": new FormControl(''),
       // "picture": new FormControl(''),
      });

    this.artistService.getArtists().subscribe(res => {
      this.artists = res
      // if(res.status == 200){
      //   console.log(res)
      //   this.artists = res
      //   console.log(this.artists)
      // }
    });
      this.statuses = [
          {label: 'INSTOCK', value: 'instock'},
          {label: 'LOWSTOCK', value: 'lowstock'},
          {label: 'OUTOFSTOCK', value: 'outofstock'}
      ];
  }

  openNew() {
   //   this.submitted = false;
      this.newArtistDialog = true;
  }

  deleteselectedArtists() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected products?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.artists = this.artists.filter(val => !this.selectedArtists.includes(val));
              this.selectedArtists = null;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
          }
      });
  }

  editProduct(artist: Artist) {
      this.artist = {...artist};
      this.productDialog = true;
  }

  deleteProduct(artist: Artist) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + artist.realName + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.artists = this.artists.filter(val => val.id !== artist.id);
            //  this.artist = {};
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Artist Deleted', life: 3000});
              this.artistService.deleteArtist(artist.id).subscribe(res =>{
                  console.log(res);
              })
          }
      });
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }
  
  saveProduct() {
      this.submitted = true;

      if (this.artist.realName.trim()) {
          if (this.artist.id) {
              this.artists[this.findIndexById(this.artist.id)] = this.artist;                
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Artist Updated', life: 3000});
              this.artistService.updateArtist(this.artist).subscribe(res =>{
              });
          }
          else {
             // this.artist.id = this.createId();
             //this.artist.image = 'product-placeholder.svg';
              this.artists.push(this.artist);
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Artist Created', life: 3000});
          }

          this.artists = [...this.artists];
          this.productDialog = false;
         // this.artist = {};
      }
  }

  findIndexById(id: number): number {
      let index = -1;
      for (let i = 0; i < this.artists.length; i++) {
          if (this.artists[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  onPicureSelected(event){
    this.picture = <File>event.target.files[0];

  }

  rate(artist:Artist){

  }

  onSubmit(artist:Artist){
      console.log(artist)
    //   const formData = new FormData();
    //     formData.append('artist', JSON.stringify(artist));
    //     formData.append('file', this.picture);
    //     console.log(formData)
      this.artistService.createArtist(artist).subscribe(res => {
          this.artist = res;
          this.artists.push(this.artist);

      })
      this.newArtistDialog = false;
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Artist Created', life: 3000});

  }

  hideNewArtistDialog(){
    this.newArtistDialog = false;

  }


  // createId(): string {
  //     let id = '';
  //     var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //     for ( var i = 0; i < 5; i++ ) {
  //         id += chars.charAt(Math.floor(Math.random() * chars.length));
  //     }
  //     return id;
  // }

}
