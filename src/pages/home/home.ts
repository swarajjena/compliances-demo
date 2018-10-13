import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selected_countries=[];

  active_tab="selected_countries";

  main_attributes=[];

  attributes_current={"states":{}};

  states=[];

  states_specific_attributes=[{title:"Attribute 1",id:"attr1"},
  {title:"Attribute 2",id:"attr2"},
  {title:"Attribute 3",id:"attr3"}
  ]

  active_state="AP";

  show_compliances_list=false;

  constructor(public navCtrl: NavController,public storage:Storage,public db:DatabaseProvider) {

  }

  logout(){
    this.storage.set("user",null).then(()=>{
          this.navCtrl.setRoot(LoginPage);
    })
  }

  selectCountry(country){
    if(this.selected_countries.indexOf(country)<0)
          this.selected_countries.push(country);
    else
          this.selected_countries.splice(this.selected_countries.indexOf(country), 1);
    console.log(this.selected_countries)
  }

  applySelectedCountries(){
    this.db.final_selected_countries=this.selected_countries;
    this.closeSelectedCountries();
    this.makeActive(this.db.final_selected_countries[0])
  }

  closeSelectedCountries(){
      if(this.active_tab=="selected_countries")
          this.active_tab=""
      else 
          this.active_tab="selected_countries"   
  }

  makeActive(country){
    if(this.active_tab!=country){
      this.active_tab=country;
      if(this.db.attributes[country]!=null){
          this.main_attributes=this.db.attributes[country].main_attributes;
          if(this.db.attributes[country].states!=null){
            this.states=this.db.attributes[country].states;
            console.log(this.states)

          }
      }else
          this.main_attributes=this.db.attributes["Default"].main_attributes;

      if(this.db.stored_attributes[country]!=null)
          this.attributes_current=this.db.stored_attributes[country];
      else
          this.attributes_current={states:{}}

      console.log(this.main_attributes)
    }
    else
        this.active_tab=""
  }

  saveAttributes(country){
    this.db.stored_attributes[country]=this.attributes_current;
  }

  activateState(state){
    this.active_state=state;
    console.log(this.attributes_current)
  }

}
