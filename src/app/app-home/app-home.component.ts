import { Component } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';

import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {

  constructor(private _router:Router, private route: ActivatedRoute) { }
  public imgUrl;
  public filesStore:NgxFileDropEntry[]=[]; 

  public dropped(files: NgxFileDropEntry[]){
      
    this.filesStore = files; // fileStore using in DOM 

    var reader = new FileReader(); // for reading file
    for(const droppedFile of files){
      // Is it a file?
      if(droppedFile.fileEntry.isFile){
        let fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file:File) => {
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          //Code for reading File
          reader.readAsDataURL(file);
            reader.onload = () => {
                this.imgUrl = reader.result;
                localStorage.setItem('ImgUrl', reader.result.toString());
            };
        });
        this._router.navigate(['appDetail']);
        
      }else{
          // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  public fileOver(event){
    console.log(event);
  }
  public fileLeave(event){
    console.log(event);
  }

}
