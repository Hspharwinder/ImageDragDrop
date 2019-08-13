import { Component } from '@angular/core';

// FileSystemDirectoryEntry
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Drag-Drop';
  constructor() {
    
  }
 
}


// ref: https://github.com/georgipeltekov/ngx-file-drop




// public dropped(files: NgxFileDropEntry[]){
//   this.filesStore = files; // fileStore using in DOM

//   var reader = new FileReader(); // for reading file
//   for(const droppedFile of this.filesStore){
//     // Is it a file?
//     if(droppedFile.fileEntry.isFile){
//       let fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
//       fileEntry.file((file:File) => {
//         // Here you can access the real file
//         console.log(droppedFile.relativePath, file);
//         //Code for reading File
//         reader.readAsDataURL(file);
//           reader.onload = () => {
//               this.imgUrl = reader.result;
//           };
//       });


//        /**
//         // You could upload it like this:
//         const formData = new FormData()
//         formData.append('logo', file, relativePath)

//         // Headers
//         const headers = new HttpHeaders({
//           'security-token': 'mytoken'
//         })

//         this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
//         .subscribe(data => {
//           // Sanitized logo returned from backend
//         })
//         **/


//     }else{
//        // It was a directory (empty directories are added, otherwise only files)
//       const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
//       console.log(droppedFile.relativePath, fileEntry);
//     }
//   }
// }