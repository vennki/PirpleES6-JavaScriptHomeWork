/*
    Title of the file: SwitchStatement.js
    Description: This is a javascript file to demonstrate the usage of Switch Statement in javascript and solving a time adder problem
    Author: Venkata Lanka
    Date: 09th January 2019
*/

// function to accept 2 values and 2 labels and add them to return the largest possible time label
function timeAdder(value1, label1, value2, label2) {
    const acceptLabels = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];
    let val1InSeconds;
    let val2InSeconds;

    // calling checkLabel function to validate the labels
    if(!checkLabel(label1, acceptLabels)){
      console.log("label1 is not valid");
    }
    if(!checkLabel(label2, acceptLabels)){
      console.log("label2 is not valid");
    }
    
    // calling checkValue function to validate the values
    if (!checkValue(value1, label1, acceptLabels) || !checkValue(value2, label2, acceptLabels)){
      return false;
    }
    
    // calling convertToSeconds function to convert the value into seconds based on the label passed
    val1InSeconds = convertToSeconds(value1, label1);
    val2InSeconds = convertToSeconds(value2, label2);
    
  //   console.log(val1InSeconds);
  //   console.log(val2InSeconds);
    
  // calling the convertToLargestLabel function to add the times and logging the time in term of largest possible label
    console.log(convertToLargestLabel(val1InSeconds, val2InSeconds));
    
    
  }
  
  // This is the function to convert the value to seconds based on the label
  function convertToSeconds(value, label) {
    switch(label){
      case "days" :
        return value * 24 * 60 * 60;
      case "day" :
        return value * 24 * 60 * 60;
      case "hours" :
        return value * 60 * 60;
      case "hour" :
        return value * 60 * 60;
      case "minutes" :
        return value * 60;
      case "minute" :
        return value * 60;
      default:
        return value;
    }
  }
  
  // This the function to add the times and returning the time in term of largest possible label
  function convertToLargestLabel(value1InSecs, value2InSecs){
    const totalValue = value1InSecs + value2InSecs;
    const dayInSeconds = 86400;
    const hourInSeconds = 3600;
    const minuteInSeconds = 60;
    const time = [];
    
    if(totalValue % dayInSeconds === 0){
      if((totalValue/dayInSeconds) > 1){
          time.push(totalValue/dayInSeconds);
          time.push("days");
          return time;
      } else {
          time.push(totalValue/dayInSeconds);
          time.push("day");
          return time;
      } 
    } else if(totalValue % hourInSeconds === 0){
      if((totalValue/hourInSeconds) > 1){
          time.push(totalValue/hourInSeconds);
          time.push("hours");
          return time;
      } else {
          time.push(totalValue/hourInSeconds);
          time.push("hour");
          return time;
      } 
    } else if(totalValue % minuteInSeconds === 0){
      if((totalValue/minuteInSeconds) > 1){
          time.push(totalValue/minuteInSeconds);
          time.push("minutes");
          return time;
      } else {
          time.push(totalValue/minuteInSeconds);
          time.push("minute");
          return time;
      } 
    } else {
      if(totalValue > 1){
          time.push(totalValue);
          time.push("seconds");
          return time;
      } else {
          time.push(totalValue);
          time.push("second");
          return time;
      } 
    }
  }
  
  // This is the function to check the label passed
  function checkLabel(label, validLabels){
  //   console.log(label);
  //   console.log(typeof label);
  //   console.log(validLabels.includes(label));
    if(typeof label === "string" && validLabels.includes(label)) {
      return true;
    } else {
      return false;
    }
  }
  
  // This is the function to check the value passed
  function checkValue(value, label, validLabels){
    const singularLabels = validLabels.slice(4, validLabels.length);
    const pluralLables = validLabels.slice(0, 4);
    if(typeof value === "number"){
      switch(value) {
        case 0:
          console.log("value should not be zero. Please check and try again!");
          return false;
        case 1:
          if(singularLabels.includes(label)){
            return true;
          } else {
            console.log("labels should be singular for singular values. Please check and try again!");
            return false;
          }
        default:
          if(pluralLables.includes(label)){
            return true;
          } else {
            console.log("labels should be plural for plural values. Please check and try again!");
            return false;
          }
      }
    }
    else {
      console.log("Value(s) cannot contain " + typeof value);
      return false;
    }
    
  }
  

  // This warns that the lables should be plural for plural values
  timeAdder(5,"hour",5,"minutes");

  // This warns that value cannot be boolean and that the label1 is not valid
  timeAdder(false,false,5,"minutes");
  
  // This warns that the value cannot be object
  timeAdder({},"days",5,"minutes");
  
  // This warns that the labels should be singular for singular values
  timeAdder(1,"hours",5,"hours");
  
  // This returns [4, "minutes"]
  timeAdder(1,"minute",3,"minutes");
  
  // This returns [145, "hours"]
  timeAdder(5,"days",25,"hours");
  
  // This returns [1, "hour"]
  timeAdder(3599,"seconds",1,"second");
    
