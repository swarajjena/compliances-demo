import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AdminPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-panel',
  templateUrl: 'admin-panel.html',
})
export class AdminPanelPage {

  users=[
    {name:"Saurabh Gupta",role:"Administrator",active:true},
    {name:"Ankur Seth",role:"Reviewer",active:true},
    {name:"Swarna Sinha",role:"User",active:true},
    {name:"Madhab Rathore",role:"User",active:false},
    {name:"Riya Dev",role:"User",active:true},

  ]

  reports=[
    {user:"Riya Dev",job:"generated",target:"Compliance List",time:"26-09-2018 5:13 PM"},
    {user:"Riya Dev",job:"generated",target:"Compliance List",time:"24-09-2018 4:14 PM"},
    {user:"Ankur Seth",job:"generated",target:"Compliance List",time:"22-09-2018 3:56 PM"},
    {user:"Riya Dev",job:"generated",target:"Compliance List",time:"21-09-2018 5:13 PM"},
    {user:"Saurabh Gupta",job:"added",target:"User",time:"15-09-2018 5:13 PM"},
    {user:"Madhab Rathore",job:"generated",target:"Compliance List",time:"13-09-2018 5:13 PM"},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPanelPage');
  }

  logout(){
    this.storage.set("user",null).then(()=>{
          this.navCtrl.setRoot(LoginPage);
    })
  }

  changeActive(name){
    for(let user of this.users){
      if(user.name==name)
      user.active=!user.active
    }
  }


  goToHomePage(){
    this.navCtrl.setRoot(HomePage)
  }

}
