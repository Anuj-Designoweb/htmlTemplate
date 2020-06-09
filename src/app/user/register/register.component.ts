import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchdataService } from '../../fetchdata.service';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[FetchdataService]
})
export class RegisterComponent implements OnInit {
Name:String;
password:String;
email:String;
fileToUpload:File;
fileToSubmit:File;
mobileNumber:number;
registerForm:FormGroup;
attachedFile:File;
imageUrl:String = "";
images = [];
file: File ;
  duration:any;
  Number:number = 0;
  m:number = 0;
  s:number = 0;
  constructor(private saveData: FetchdataService,private formBuilder: FormBuilder) { }
//   submit() {
// this.saveData.submit(this.email,this.password,this.username,this.mobileNumber)
//   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['',[Validators.required]],
    
    
    
    
  })

}

// uploader.onAfterAddingFile = function(fileItem) {
//   console.info('onAfterAddingFile', fileItem);
//     var urlSt = URL.createObjectURL(fileItem._file);
//     var audio = new Audio(urlSt);
//     // fileItem.file.audioDuration = audio.duration; //won't work
//     audio.addEventListener('loadeddata',function(){
//       fileItem.file.audioDuration = audio.duration;
//       $scope.$apply();//required to update view
// });
//var audio = document.createElement('audio');



//FOR AUDIO METADATA

//FOR FILE UPLOAD ONLY AUDIO DURATION
  


//console.log("drerere>>>>>>>>>>>" + this.duration)

// if (event.target.files && event.target.files[0]) {
//   var target = event.currentTarget;
//   var file = target.files[0];

//    var audio = document.createElement('audio');

//   // var target = attachedFile;
   
//    var reader = new FileReader();
 
//    if (target.files && file) {
//        var reader = new FileReader();

//        reader.onload = function (e) {
//            audio.src = e.target.result;
//            audio.addEventListener('loadedmetadata', function(){
//                // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
//                var duration = audio.duration;
           
//                // example 12.3234 seconds
//                console.log("The duration of the song is of: " + duration + " seconds");
//                // Alternatively, just display the integer value with
//                // parseInt(duration)
//                // 12 seconds
//            },false);
//        };

//        reader.readAsDataURL(file);
// }}}

//console.log("outer duration>>>>>>>" + duratip)

// removeSelectedFile(index) {
//   // Delete the item from fileNames list
//   this.images.splice(index, 1);
// }

onSubmit() {
  if (this.registerForm.valid) {
  var employee = {
    "firstName":this.registerForm.value.firstName,
    "lastName":this.registerForm.value.lastName,
    "email":this.registerForm.value.email,
    "password":this.registerForm.value.password,
    "confirmPassword":this.registerForm.value.confirmPassword
  }
}
this.saveData.createBlog(employee).subscribe(res=> {
  console.log(res)
})
}

}

