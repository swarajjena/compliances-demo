import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';


const SERVER_URL="http://52.172.133.188:3001/"



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  registerCredentials = { username: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient,private storage: Storage) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad DetailPage');
    this.storage.get("user").then(
      data=>{
        if(data==="" || data==undefined)return;
        let time_diff=new Date().getTime()-new Date(data.created).getTime()
        console.log(time_diff);
        if(time_diff>3600000){
        }else{
          this.navCtrl.setRoot(HomePage)
        }
      });
    
  }

  login(){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    if(this.registerCredentials.username=="saurabh" && this.registerCredentials.password=="saurabh"){
      let data={}
      data["created"]=new Date();
      data["username"]=this.registerCredentials.username;
      this.storage.set("user",data).then(()=>{
        this.storage.get("user").then(
          data=>{
            if(data==="" || data==undefined)
                return;
            console.log(data);
            this.navCtrl.setRoot(HomePage);
          });
      })

    }

    


/*    this.http.post(SERVER_URL+'api/users/login',"username="+this.registerCredentials.username+"&password="+this.registerCredentials.password,options).toPromise()
    .then(data=>{
          console.log(data)
          data["username"]=this.registerCredentials.username;
          this.storage.set("user",data).then(()=>{
            this.storage.get("user").then(
              data=>{
                if(data==="" || data==undefined)
                    return;
                console.log(data);
                this.navCtrl.push(HomePage);
              });
          })

        }
        ,err=>{
          console.log(err)
        }
    )
  */  
  }



/*    .subscribe(
          data => function(data){
              console.log(data);
              this.httpClient.post(ADMIN_SERVER_URL+'api/system/identities/issue', identity, {responseType: 'blob'})
          }.bind(this),error => {
            console.log(error)
          }
    )      */
  

}
