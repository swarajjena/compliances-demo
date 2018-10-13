import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const countries_list= [ 
  {name: 'Afghanistan', code: 'AF'}, 
  {name: 'Argentina', code: 'AR'}, 
  {name: 'Australia', code: 'AU'}, 
  {name: 'Brazil', code: 'BR'}, 
  {name: 'Canada', code: 'CA'}, 
  {name: 'China', code: 'CN'}, 
  {name: 'France', code: 'FR'}, 
  {name: 'Germany', code: 'DE'}, 
  {name: 'Greece', code: 'GR'}, 
  {name: 'Hong Kong', code: 'HK'}, 
  {name: 'India', code: 'IN'}, 
  {name: 'Indonesia', code: 'ID'}, 
  {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
  {name: 'Israel', code: 'IL'}, 
  {name: 'Italy', code: 'IT'}, 
  {name: 'Japan', code: 'JP'}, 
  {name: 'Korea, Republic of', code: 'KR'}, 
  {name: 'Malaysia', code: 'MY'}, 
  {name: 'Mexico', code: 'MX'}, 
  {name: 'Nepal', code: 'NP'}, 
  {name: 'Netherlands', code: 'NL'}, 
  {name: 'Russian Federation', code: 'RU'}, 
  {name: 'Saudi Arabia', code: 'SA'}, 
  {name: 'Singapore', code: 'SG'}, 
  {name: 'South Africa', code: 'ZA'}, 
  {name: 'Spain', code: 'ES'}, 
  {name: 'Sri Lanka', code: 'LK'}, 
  {name: 'Switzerland', code: 'CH'}, 
  {name: 'Taiwan, Province of China', code: 'TW'}, 
  {name: 'United Arab Emirates', code: 'AE'}, 
  {name: 'United Kingdom', code: 'GB'}, 
  {name: 'United States', code: 'US'}
]


const states_of_india=[
  
   { id:"AP",title:"Andhra Pradesh"},
   { id:"AR",title:"Arunachal Pradesh"},
   { id:"AS",title:"Assam"},
   { id:"BR",title:"Bihar"},
   { id:"CG",title:"Chhattisgarh"},
   { id:"Chandigarh",title:"Chandigarh"},
   { id:"DN",title:"Dadra and Nagar Haveli"},
   { id:"DD",title:"Daman and Diu"},
   { id:"DL",title:"Delhi"},
   { id:"GA",title:"Goa"},
   { id:"GJ",title:"Gujarat"},
   { id:"HR",title:"Haryana"},
   { id:"HP",title:"Himachal Pradesh"},
   { id:"JK",title:"Jammu and Kashmir"},
   { id:"JH",title:"Jharkhand"},
   { id:"KA",title:"Karnataka"},
   { id:"KL",title:"Kerala"},
   { id:"MP",title:"Madhya Pradesh"},
   { id:"MH",title:"Maharashtra"},
   { id:"MN",title:"Manipur"},
   { id:"ML",title:"Meghalaya"},
   { id:"MZ",title:"Mizoram"},
   { id:"NL",title:"Nagaland"},
   { id:"OR",title:"Orissa"},
   { id:"PB",title:"Punjab"},
   { id:"PY",title:"Pondicherry"},
   { id:"RJ",title:"Rajasthan"},
   { id:"SK",title:"Sikkim"},
   { id:"TN",title:"Tamil Nadu"},
   { id:"TR",title:"Tripura"},
   { id:"UP",title:"Uttar Pradesh"},
   { id:"UK",title:"Uttarakhand"},
   { id:"WB",title:"West Bengal"}
 
]
const attributes={
    "India":{
        main_attributes:[{
            title:"Company Type",
            id:"company_type",
            options:[
              {id:"pvt",title:"PVT LTD"},
              {id:"llp",title:"LLP"}
            ]
        },{
          title:"Factory",
          id:"factory",
          options:[
            {id:"yes",title:"YES"},
            {id:"no",title:"NO"}
          ]
        },{
          title:"Premise",
          id:"premise",
          options:[
            {id:"rented",title:"RENTED"},
            {id:"leased",title:"LEASED"},
            {id:"both",title:"BOTH"}
          ]
        }],
        states:states_of_india
    },
    "Default":{
      main_attributes:[{
        title:"Factory",
        id:"factory",
        options:[
          {id:"yes",title:"YES"},
          {id:"no",title:"NO"}
        ]
      },{
        title:"Premise",
        id:"premise",
        options:[
          {id:"rented",title:"RENTED"},
          {id:"leased",title:"LEASED"},
          {id:"both",title:"BOTH"}
        ]
      }]
  }
}

@Injectable()
export class DatabaseProvider {
  countries = countries_list;
  final_selected_countries=[];
  attributes=attributes;
  stored_attributes={};
  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
  }

}
