import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { 'class': 'wm-theme-colors' }
})
export class HomeComponent {

  public replay;

  constructor() {

    //setTimeout(() => this.replay = true, 3000);

  }

  animating() { console.log('Animating...'); }
  animated() { console.log('Animated'); }

  log(msg) { console.log(msg); }

  readonly content = {

    top: { 
      title: "Get your single page application done right",
      description: "Wizdm provides all the key features of a modern single page application ready to use, so, for you to focus on launching your idea the quickest!", 
      disclaimer: "Join us and become part of the revolution of wizdm",
      image: "assets/img/blue-buddha.svg",
      call: "Get started",
      link: "apply"
    },

    features: [
      { 
        icon: "fas:fa-mobile-alt",
        title: "Responsive navigation",
        description: "Navigation smoothly adapts to the device the application renders to."
      },
      { 
        icon: "far:fa-clone",
        title: "Modular design",
        description: "Desiged with full modularity to enable collaboration while minimizing the final bundle size and loading time."
      },
      { 
        icon: "fas:fa-code",
        title: "UI elements",
        description: "Rich collections of advanced UI elements ready to use for you to avoid re-inventing the wheel."
      },
      { 
        icon: "fas:fa-icons",
        title: "Icon sets",
        description: "Both Material icons font and FontAwesome icon set are natively supported to enrich you user interface.",
        aos: true
      },
      { 
        icon: "fas:fa-globe-europe",//"fas:fa-language",
        title: "Internationalization",
        description: "Thanks to a flexible content manager at its core, wizdm handles as many lanuages as you need at once."
      },
      { 
        icon: "fab:fa-markdown",
        title: "Static content",
        description: "Markdown rendering to quickly set up static contents such as terms of service and privacy without extra coding."
      },
      { 
        icon: "fas:fa-user-circle",
        title: "Account management",
        description: "User authetication, email verification and recovery, rich user profile data and account cancelletion."
      },
      { 
        icon: "fas:fa-sync-alt",
        title: "Data synchronization",
        description: "Real-time online and offline data sync based on severless NoSQL database ready for global level scale."
      },
      { 
        icon: "fas:fa-folder-open",//"fas:fa-cloud-upload-alt",
        title: "File storage",
        description: "File uploading capabilities for user profile image and more."
      },
      { 
        icon: "far:fa-edit",
        title: "Content editing",
        description: "Powerfull built-in WYSIWYG content editing capabilities to serve your needs."
      },
      { 
        icon: "far:fa-comment",
        title: "Feedback form",
        description: "Direct feedback support to immediately collect user's suggestions."
      },
      { 
        icon: "fas:fa-directions",
        title: "Smart redirection",
        description: "Prevents unwanted external redirections to keep the user engaged."
      },
      { 
        icon: "fab:fa-angular",
        title: "Angular powered",
        description: "Designed using the latest edge technologies for maximum performances and compatibility."
      },
      { 
        icon: "fab:fa-github",
        title: "Open source",
        description: "Wizdm is 100% open source and supported by a growing community."
      },
      { 
        icon: "fas:fa-rocket",
        title: "For bootrappers",
        description: "Designed and mantained by the very same bootstrappers actively using it to fuel their initiatives."
      }
    ]
  };


  
}