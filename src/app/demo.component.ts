import { Component } from '@angular/core'

@Component({
    selector: 'home',
    template: `<div>
                    <h2>Home Controller</h2>
                </div>`,
  })
  export class HomeComponent {

  }

  @Component({
    selector: 'about-us',
    template: `<div>
                    <h2>About us Controller</h2>
                </div>`,
  })
  export class AboutUsComponent {

  }

  @Component({
    selector: 'downloads',
    template: `<div>
                    <h2>Downloads Controller</h2>
                    <ul>
                        <li routerLinkActive="active" class="btn btn-primary">
                             <a routerLink="audio" style="color: white">Audio</a>
                        </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <li routerLinkActive="active" class="btn btn-primary">
                             <a routerLink="video" style="color: white">Video</a>
                        </li>
                    </ul>
                    <router-outlet></router-outlet>
                </div>`,
  })
  export class DownloadsComponent {

  }

  @Component({
    selector: 'audio-us',
    template: `<div>
                    <h2>Audio Controller</h2>
                </div>`,
  })
  export class AudioComponent {

    constructor(){
        console.log("In audio");
    }

  }

  @Component({
    selector: 'video-us',
    template: `<h2>Video Controller</h2>`,
  })
  export class VideoComponent {

    constructor(){
        console.log("In video");
    }
  }

// @Component({
//     selector: 'audio',
//     template: `<div>
//                     <h2>Audio</h2>
//                 </div>`,
//   })
//   export class AudioComponent {

//   }

//   @Component({
//     selector: 'video',
//     template: `<div>
//                     <h2>About u Controller</h2>
//                 </div>`,
//   })
//   export class VideoComponent {

//   }