import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

title="Employee-details"

headers=["ID" , "Name" , "Age" , "Designation" , "Address"]

rows=[
  {
    "ID":"001",
    "Name":"Arun",
    "Age":"23",
    "Designation":"Sales manager",
    "Address":"Salem"
  },
  {
    "ID":"002",
    "Name":"Surya",
    "Age":"24",
    "Designation":"Sales manager",
    "Address":"Erode"
  },
  {
    "ID":"003",
    "Name":"Prakash",
    "Age":"19",
    "Designation":"Manager",
    "Address":"Tiruchengode"
  },{
    "ID":"004",
    "Name":"Abinaya",
    "Age":"18",
    "Designation":"Account Executive",
    "Address":"Namakkal"
  },
  {
    "ID":"005",
    "Name":"Aakash",
    "Age":"26",
    "Designation":"Business Development Manager",
    "Address":"Kovai"
  },
  {
    "ID":"006",
    "Name":"Sangi",
    "Age":"24",
    "Designation":"Sales manager",
    "Address":"Mettur"
  },
  {
    "ID":"007",
    "Name":"Narmadha",
    "Age":"21",
    "Designation":"Sales person",
    "Address":"Kolathur"
  },
  {
    "ID":"008",
    "Name":"Sumathi",
    "Age":"29",
    "Designation":"Business Development Manager",
    "Address":"Kovai"
  },
  {
    "ID":"009",
    "Name":"Sakthi",
    "Age":"28",
    "Designation":"Business Manager",
    "Address":"karur"
  },
  {
    "ID":"010",
    "Name":"kumar",
    "Age":"35",
    "Designation":"Director",
    "Address":"Chennai"
  }
]
}