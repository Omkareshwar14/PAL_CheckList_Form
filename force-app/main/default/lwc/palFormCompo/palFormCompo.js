import { LightningElement,track, wire } from 'lwc';
import IMAGE from '@salesforce/resourceUrl/DSGLogo';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import LightningConfirm from "lightning/confirm";
import Id from '@salesforce/user/Id';
import UserNameFIELD from '@salesforce/schema/User.Name';
import { getRecord } from 'lightning/uiRecordApi';
import PalCheckUrl from '@salesforce/label/c.PalCheckListUrl'; // custom label created for url 

import PAL_CHECKLIST_OBJECT from '@salesforce/schema/PAL_Checklist__c';
import MCQ_1 from '@salesforce/schema/PAL_Checklist__c.X1_Profile__c';
import MCQ_2 from '@salesforce/schema/PAL_Checklist__c.X2_Profile__c';
import MCQ_3 from '@salesforce/schema/PAL_Checklist__c.X3_Profile__c';
import MCQ_4 from '@salesforce/schema/PAL_Checklist__c.X4_Profile__c';
import MCQ_5 from '@salesforce/schema/PAL_Checklist__c.X5_Profile__c';
import MCQ_6 from '@salesforce/schema/PAL_Checklist__c.X6_Profile__c';
import MCQ_7 from '@salesforce/schema/PAL_Checklist__c.X7_Profile__c';
import MCQ_8 from '@salesforce/schema/PAL_Checklist__c.X8_Profile__c';
import MCQ_9 from '@salesforce/schema/PAL_Checklist__c.X9_Profile__c';
import EFFECTIVE_DATE from '@salesforce/schema/PAL_Checklist__c.Effective_Date_of_PAL__c';
import STAGE_PICK from '@salesforce/schema/PAL_Checklist__c.Stage__c';



import craeteRecord from '@salesforce/apex/palCheckList.craeteRecord';


export default class PalFormCompo extends LightningElement {
    label1 = PalCheckUrl;


    @track currentUserName;
   

    @wire(getRecord, { recordId: Id, fields: [UserNameFIELD]}) 
    currentUserInfo({error, data}) {
        if (data) {
            this.currentUserName = data.fields.Name.value;
            
        } else if (error) {
            this.error = error ;
        }
    }
    //Static image 
    @track imageUrl = IMAGE;

    get optionsPalQ1() {
        return [
            
            { label: 'Never  ', value: '0' },
            { label: 'Rarely ', value: '1' },
            { label: 'Sometimes ', value: '2' },            
            { label: 'Quite Frequently ', value: '3' },
            { label: 'Nearly Always ', value: '4' }, 
           
        ];
    }
    handleoptionsPalQ1(event){
        this.objZBI.ZBI_A1__c = event.detail.value;
        console.log(event.detail.value);   
    }


   /* @track selectedValue;
    @track options = [];
    
    @wire(getObjectInfo, { objectApiName: PAL_CHECKLIST_OBJECT })
    objectInfo;
    
    
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: MCQ_1})
    typePicklistValues({error, data}) {
    if(data) {
    let optionsValues = [];
    for(let i = 0; i < data.values.length; i++) {
    optionsValues.push({
    label: data.values[i].label,
    value: data.values[i].value
    })
    }
    this.options = optionsValues;
    window.console.log('optionsValues --- '+JSON.stringify(optionsValues));
    }
    else if(error) {
    window.console.log('error --- '+JSON.stringify(error));
    }
    }

    handleChangeMcq01(event){
        this.selectedValue = event.detail.value; 

    }*/
    @track selectedValue;
    @track picklistValuesQue1;
 
    @wire(getPicklistValues, {
        recordTypeId: '$objectInfo.data.defaultRecordTypeId',
        fieldApiName: MCQ_1
        })
        picklistValuesQue1;
        
        
        get optionsQue1() {
        return this.picklistValuesQue1.data
        ? this.picklistValuesQue1.data.values.map(picklistValueQue1 => ({
        label: picklistValueQue1.label,
        value: picklistValueQue1.value
        }))
        : [];
        }
    
        handleChangeMcq01(event){
            this.selectedValue = event.detail.value; 
    
        }

    @track selectedValue02;
    @track options02 = [];
    
    @wire(getObjectInfo, { objectApiName: PAL_CHECKLIST_OBJECT })
    objectInfo;
    
    
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: MCQ_2})
    typePicklistValues02({error, data}) {
    if(data) {
    let optionsValues = [];
    for(let i = 0; i < data.values.length; i++) {
    optionsValues.push({
    label: data.values[i].label,
    value: data.values[i].value
    })
    }
    this.options02 = optionsValues;
    window.console.log('optionsValues --- '+JSON.stringify(optionsValues));
    }
    else if(error) {
    window.console.log('error --- '+JSON.stringify(error));
    }
    }

    handleChangeMcq02(event){
        this.selectedValue02 = event.detail.value; 
        

    }

    @track selectedValue03;
    @track options03 = [];
    
    @wire(getObjectInfo, { objectApiName: PAL_CHECKLIST_OBJECT })
    objectInfo;
    
    
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: MCQ_3})
    typePicklistValues03({error, data}) {
    if(data) {
    let optionsValues = [];
    for(let i = 0; i < data.values.length; i++) {
    optionsValues.push({
    label: data.values[i].label,
    value: data.values[i].value
    })
    }
    this.options03 = optionsValues;
    window.console.log('optionsValues --- '+JSON.stringify(optionsValues));
    }
    else if(error) {
    window.console.log('error --- '+JSON.stringify(error));
    }
    }

    handleChangeMcq03(event){
        this.selectedValue03 = event.detail.value; 

    }

    @track selectedValue04;
    @track options04 = [];
    
    @wire(getObjectInfo, { objectApiName: PAL_CHECKLIST_OBJECT })
    objectInfo;
    
    
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: MCQ_4})
    typePicklistValues04({error, data}) {
    if(data) {
    let optionsValues = [];
    for(let i = 0; i < data.values.length; i++) {
    optionsValues.push({
    label: data.values[i].label,
    value: data.values[i].value
    })
    }
    this.options04 = optionsValues;
    window.console.log('optionsValues --- '+JSON.stringify(optionsValues));
    }
    else if(error) {
    window.console.log('error --- '+JSON.stringify(error));
    }
    }

    handleChangeMcq04(event){
        this.selectedValue04 = event.detail.value; 

    }


    @track selectedValue05;
    @track options05 = [];
    
    @wire(getObjectInfo, { objectApiName: PAL_CHECKLIST_OBJECT })
    objectInfo;
    
    
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: MCQ_5})
    typePicklistValues05({error, data}) {
    if(data) {
    let optionsValues = [];
    for(let i = 0; i < data.values.length; i++) {
    optionsValues.push({
    label: data.values[i].label,
    value: data.values[i].value
    })
    }
    this.options05 = optionsValues;
    window.console.log('optionsValues --- '+JSON.stringify(optionsValues));
    }
    else if(error) {
    window.console.log('error --- '+JSON.stringify(error));
    }
    }

    handleChangeMcq05(event){
        this.selectedValue05 = event.detail.value; 

    }



    @track selectedValue06;
    @track options06 = [];
    
    @wire(getObjectInfo, { objectApiName: PAL_CHECKLIST_OBJECT })
    objectInfo;
    
    
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: MCQ_6})
    typePicklistValues06({error, data}) {
    if(data) {
    let optionsValues = [];
    for(let i = 0; i < data.values.length; i++) {
    optionsValues.push({
    label: data.values[i].label,
    value: data.values[i].value
    })
    }
    this.options06 = optionsValues;
    window.console.log('optionsValues --- '+JSON.stringify(optionsValues));
    }
    else if(error) {
    window.console.log('error --- '+JSON.stringify(error));
    }
    }

    handleChangeMcq06(event){
        this.selectedValue06 = event.detail.value; 

    }


    @track selectedValue07;
    @track options07 = [];
    
    @wire(getObjectInfo, { objectApiName: PAL_CHECKLIST_OBJECT })
    objectInfo;
    
    
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: MCQ_7})
    typePicklistValues07({error, data}) {
    if(data) {
    let optionsValues = [];
    for(let i = 0; i < data.values.length; i++) {
    optionsValues.push({
    label: data.values[i].label,
    value: data.values[i].value
    })
    }
    this.options07 = optionsValues;
    window.console.log('optionsValues --- '+JSON.stringify(optionsValues));
    }
    else if(error) {
    window.console.log('error --- '+JSON.stringify(error));
    }
    }

    handleChangeMcq07(event){
        this.selectedValue07 = event.detail.value; 

    }



    @track selectedValue08;
    @track options08 = [];
    
    @wire(getObjectInfo, { objectApiName: PAL_CHECKLIST_OBJECT })
    objectInfo;
    
    
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: MCQ_8})
    typePicklistValues08({error, data}) {
    if(data) {
    let optionsValues = [];
    for(let i = 0; i < data.values.length; i++) {
    optionsValues.push({
    label: data.values[i].label,
    value: data.values[i].value
    })
    }
    this.options08 = optionsValues;
    window.console.log('optionsValues --- '+JSON.stringify(optionsValues));
    }
    else if(error) {
    window.console.log('error --- '+JSON.stringify(error));
    }
    }

    handleChangeMcq08(event){
        this.selectedValue08 = event.detail.value; 

    }


    @track selectedValue09;
    @track options09 = [];
    
    @wire(getObjectInfo, { objectApiName: PAL_CHECKLIST_OBJECT })
    objectInfo;
    
    
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: MCQ_9})
    typePicklistValues09({error, data}) {
    if(data) {
    let optionsValues = [];
    for(let i = 0; i < data.values.length; i++) {
    optionsValues.push({
    label: data.values[i].label,
    value: data.values[i].value
    })
    }
    this.options09 = optionsValues;
    window.console.log('optionsValues --- '+JSON.stringify(optionsValues));
    }
    else if(error) {
    window.console.log('error --- '+JSON.stringify(error));
    }
    }

    handleChangeMcq09(event){
        this.selectedValue09 = event.detail.value; 

    }

    // next and back button code

    handleNextPage = false;
    handleFirstPage = true;
    handleNextClick() {
      this.handleNextPage = true;
      this.handleFirstPage = false;
  }
  
  handleBack(){
      this.handleNextPage = false;
      this.handleFirstPage = true;
  }

  // Submit button code
  handleSave(){

    handleConfirmClick();




    
  }

  async handleConfirmClick() {
    const result = await LightningConfirm.open({
      message: "Total for Planned(P) :" , 
      message: "Total for Exploratory(E) :" , 
      message: "Total for Sensory(S) :" , 
      message: "Total for Refex(R) :" , 
      variant: "headerless",
      label: "This is the aria-label value",
    });
  }

  //modal popup for save button

  @track ans1 = 0;
  @track ans2 = 0;
  @track ans3 = 0;
  @track ans4 = 0;

  @track isModalOpen = false;
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
        // logic of getting count of P, E, S, R 
        var arr = [];
        arr.push(this.selectedValue);
        arr.push(this.selectedValue02);
        arr.push(this.selectedValue03);
        arr.push(this.selectedValue04);
        arr.push(this.selectedValue05);
        arr.push(this.selectedValue06);
        arr.push(this.selectedValue07);
        arr.push(this.selectedValue08);
        arr.push(this.selectedValue09);

        for(let i =0;i< arr.length;i++){

            if(arr[i] == 'P'){

               this.ans1++;
            }
            else if(arr[i] == 'E'){

                this.ans2++;
            }
            else if(arr[i] == 'S'){

                this.ans3++;
            }else if(arr[i] == 'R') {

                this.ans4++;
            }           
        }

    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }


    @track LastName;
    @track NRIC_num;
    @track Stage_name;
    @track Effective_date;

    handleNRICName(event){
        this.LastName = event.detail.value;             
        
    }

    handleNRICNo(event){
        this.NRIC_num = event.target.value; 
        
    }

    
    handleDate(event){
        this.Effective_date = event.target.value; 

    }
    @wire(getObjectInfo, { objectApiName: PAL_CHECKLIST_OBJECT })
    contactInfo;
    

    @wire(getPicklistValues, {
        recordTypeId : '$contactInfo.data.defaultRecordTypeId',
        fieldApiName: STAGE_PICK 
    }) 

    preValues;

    handlePickChange(event){
        this.Stage_name = event.target.value; 

    }
    

    //submit form
    @track userId = Id;
    @track showModal1 = false;

    handleSubmitButton(){

        const isInputsCorrect = [...this.template.querySelectorAll('lightning-radio-group')]
        .reduce((validSoFar, inputField) => {
            inputField.reportValidity();
            return validSoFar && inputField.checkValidity();
        }, true);

        if (isInputsCorrect) { 

        craeteRecord({
            
            Name: this.LastName,
            NRIC_num: this.NRIC_num,
            Effective_date : this.Effective_date,
            Stage_Name : this.Stage_name,
            
            selectedValue : this.selectedValue,
            selectedValue02 : this.selectedValue02,
            selectedValue03 : this.selectedValue03,
            selectedValue04 : this.selectedValue04,
            selectedValue05 : this.selectedValue05,
            selectedValue06 : this.selectedValue06,
            selectedValue07 : this.selectedValue07,
            selectedValue08 : this.selectedValue08,
            selectedValue09 : this.selectedValue09

            
        })
    
        .then(result => {
            // Handle success, e.g., show a success message or navigate to another page
            console.log('Contact created successfully:', result);
            this.showModal1 = true;
           // this.handleReet();
           // this.isInputValid();
            
                
           
            
            
            
        })
        .catch(error => {
            // Handle error, e.g., show an error message
            console.error('Error creating contact:', error);
           // this.showAlert();
           
            
        });
    }
   
        
    }

    async handleConfirmClick() {
        const result = await LightningConfirm.open({
          message: "Thanks for Submitting the form",
          variant: "headerless",
          label: "This is the aria-label value",
        });
      }

      okButton(){
        
        
        window.open(this.label, '_self');
        
        this.showModal1 = false;
      }



    

    









}