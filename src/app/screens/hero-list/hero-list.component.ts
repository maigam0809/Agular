import { Component, OnInit } from '@angular/core';

import {HEROES} from '../../mock-data/HEROES';
import {Hero} from '../../models/Hero';
import {Skill} from '../../models/Skill';
import {SKILLS} from '../../mock-data/SKILLS';

// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import { textSpanIntersectsWithTextSpan } from 'typescript';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor() { }
  heroes:Array<Hero> = HEROES;
  detail: string = "<a href='http://google.com'>Link to google</a>";
  templateSkills:Array<Skill> = SKILLS;
  
  selectedSkills: Array<Skill> = [];
  
  formObject:Hero = {
    id: 0,
    name: "",
    img: "",
    skills:[]
  }
  
  ngOnInit(): void {
    
  }
  
  // Thêm sản phẩm vào danh mục
  // addSkill(checkedSkill: Skill){
  //   let index = this.selectedSkills.indexOf(checkedSkill);
  //   console.log(index);
  //   // if(index == -1){
  //   //   this.selectedSkills.push(checkedSkill);
  //   // }else{
  //   //   this.selectedSkills = this.selectedSkills.filter(item => item != checkedSkill)
  //   // }
  // }
  //  Lấy value in checked
   checkSkill(skillId:Number): Boolean{
    // let lstskill = this.formObject.skills == null ? []: this.formObject.skills
    let lstskill = this.formObject.skills ;
    let existedIndex = lstskill.findIndex(item => item.id == skillId);
    return existedIndex != -1;
  }

  // checkSkill(skillId: Number): Boolean{
  //   let lstSkill = this.formObject.skills;
  //   let existedIndex = lstSkill.findIndex(item => item.id == skillId);
  //   return existedIndex != -1;
  // }

  addSkill(checkedSkill: Skill){
    let index = this.selectedSkills.indexOf(checkedSkill);
    if(index == -1){
      this.selectedSkills.push(checkedSkill);
    }else{
      this.selectedSkills = this.selectedSkills.filter(item => item != checkedSkill)
    }
  }

  

  // xoá sản phảm
  // removeHero(hero:Hero){
  //   this.heroes = this.heroes.filter((x: Hero) => x != hero);
  // }

  // submitform products
  submitForm(event: any){
    event.preventDefault();
    let index = this.heroes.findIndex(item => item.id == this.formObject.id);
    if(index == -1){
      this.heroes.push({...this.formObject});
    }else{
      this.heroes[index] = {...this.formObject};
    }
    this.formObject = {
      id: 0,
      name: "",
      img: "",
      skills: []
    }
  }

  // submitForm(event: any){
  //   event.preventDefault();

  //   let index = this.heroes.findIndex(item => item.id == this.formObject.id);
  //   if(index == -1){

  //     this.heroes.push({...this.formObject});

  //   }else{
  //     this.heroes[index] = {...this.formObject}
  //   }
    
  //   this.formObject = {
  //     id: 0,
  //     name: "",
  //     img: "",
  //     skills: []
  //   }
    

  //   // let formData = new FormData(event.target);
  //   // console.log(this.formObject);
  //   // let newHero: Hero = {
  //   //   id: Number(formData.get('id')),
  //   //   name: `${formData.get('name')}`,
  //   //   img: `${formData.get('img')}`
  //   // }
  //   // this.heroes.push(newHero);
  //   // // console.log(formData.get('id'), formData.get('name'));
  //   // event.target.reset();
    
  // }

  // updateHero(hero:Hero){
  //   let updateHero = {...hero};
  //   this.formObject = updateHero;
  // }

  // save Skill checked
  // updateFormObject(skill:Skill, event:any){
  //   // let lstskill = this.formObject.skills == null ? []: this.formObject.skills
  //   let lstskill = this.formObject.skills
  //   let existtedIndex = lstskill.findIndex(item =>item.id = skill.id);
  //   // console.log(existtedIndex);

  //   if(event.target.checked && existtedIndex == -1){
  //     this.formObject.skills.push(skill);
  //   }


  //   if(event.target.checked == false && existtedIndex != -1){
  //     this.formObject.skills = this.formObject.skills.filter(item =>item.id != skill.id);
  //   }
  //   // console.log(this.formObject);
  // }

  // updateFormObjectAttribute(attributeName: string, event: any){
  //   switch (attributeName){
  //     case 'id':
  //       this.formObject.id = Number(event.target.value)
  //       break;
  //     case 'name':
  //       this.formObject.name = event.target.value
  //       break;
  //     case 'img':
  //       this.formObject.img = event.target.value
  //       break;
  //   }
  // }

  updateHero(hero: Hero){
    let updateHero = {...hero};
    this.formObject = updateHero;
  }

  updateFormObjectSkill(skill: Skill, event: any){
    let lstSkill = this.formObject.skills;
    let existedIndex = lstSkill.findIndex(item => item.id == skill.id);
    if(event.target.checked && existedIndex == -1){
      this.formObject.skills.push(skill);
    }

    if(event.target.checked == false && existedIndex != -1){
      this.formObject.skills = this.formObject.skills.filter(
                                      item => item.id != skill.id
                                    );
    }
  }


  updateFormObjectAttribute(attributeName: string, event: any){
    switch (attributeName){
      case 'id':
        this.formObject.id = Number(event.target.value)
        break;
      case 'name':
        this.formObject.name = event.target.value
        break;
      case 'img':
        this.formObject.img = event.target.value
        break;
    }
  }


  parentRemoveHero(data: Hero){
    // console.log("HeroListComponent - parentRemoveHero()");
    // console.log(data);
    this.heroes = this.heroes.filter(item => item.id != data.id);
  }


  parentEditHero(data: Hero){
    console.log("HeroListComponent - parentUpdateHero()");
      // console.log(data);
    let updateHero = {...data};
    this.formObject = updateHero;
  }
  inputValue ="";
  updateInputValue(event){
    this.inputValue = event.target.value;
  }

  currentDate ='';
  gender = 2;
   

  



}