let userID, listID, listName;
let userEmail;
let savedItems;
let newList = 0;

let ClickedList = "";
let UpdateAccount = -1;

let currentUserID, currentListName;

let dashboardLists = [];

let userDetails;
let itemDetails;

let userIndex = [];
let userDetailsIndex = [];

let items = [];

const myLogoutButton = document.getElementById("logout");
myLogoutButton.addEventListener("click", logout);

const myDivHeader = document.getElementById("divHeader");

const myAccountButton = document.getElementById("accountSettings");
myAccountButton.addEventListener("click", showAccountDetails);

const myAddSaveButtons = document.getElementById("AddSaveButtons");

const myDivToDoLists = document.getElementById("ToDoList");

const myDivRegForm = document.getElementById("divRegForm");
const myDivAuth = document.getElementById("divAuth");

const myDivLoginForm = document.getElementById("divLoginForm");

const myTaskDetails = document.getElementById("TaskDetails");

const mySpanRegForm = document.getElementById("RegistrationForm");

const myParaFormError = document.getElementById("paraRegFormError");
const myParaLoginError = document.getElementById("paraLoginFormError");
const myParaNewListError = document.getElementById("paraNewListError");
const myInputRegFirstName = document.getElementById("inputRegFirstName");
const myInputRegLastName = document.getElementById("inputRegLastName");
const myInputRegEmail = document.getElementById("inputRegEmail");
const myInputRegPassword = document.getElementById("inputRegPassword");
const myinputRegTermsCheckbox = document.getElementById("inputRegTermsCheckbox");

const myParaRegFN = document.getElementById("dataParaRegFN");
const myParaRegLN = document.getElementById("dataParaRegLN");
const myParaRegEmail = document.getElementById("dataParaRegEmail");
const myParaRegPwd = document.getElementById("dataParaRegPwd");
const myParaRegTerms = document.getElementById("dataParaRegTerms");

const myDashboard = document.getElementById("divDashboard");

const myInputLoginEmail = document.getElementById("inputLoginEmail");
const myParaLoginEmail = document.getElementById("dataParaLoginEmail");
const myInputLoginPassword = document.getElementById("inputLoginPassword");
const myParaLoginPwd = document.getElementById("dataParaLoginPwd");

const mySignUpButton = document.getElementById("SignUp");
mySignUpButton.addEventListener("click", showRegistrationForm);

const myLoginButton = document.getElementById("Login");
myLoginButton.addEventListener("click", showLoginForm);

const myRegForm = document.getElementById("formReg");
myRegForm.addEventListener("submit", showDashBoard);

const myLoginForm = document.getElementById("formLogin");
myLoginForm.addEventListener("submit", showDashBoard);

const myClearStorageButton = document.getElementById("clearStorage");
myClearStorageButton.addEventListener("click", () => {
    localStorage.clear();
});

const myDivList = document.getElementById("divList");

const mynewListButton = document.getElementById("newList");
mynewListButton.addEventListener("click", addListDetails);

const myAddItemButton = document.getElementById("buttonAddItem");
myAddItemButton.addEventListener("click", addListItem);

const myListSaveButton = document.getElementById("buttonSaveList");
myListSaveButton.addEventListener("click", saveList);

const myOrderedListDivItems = document.getElementById("divItems");

const myDashboardTasks = document.getElementById("Tasks");

const myInputListName = document.getElementById("inputListName");

function showAccountDetails(){
    refreshDetails();
    let userlogin;
    UpdateAccount = 1;
    
    myDashboard.classList.remove("show");
    myDashboard.classList.add("hide");

    myDivAuth.classList.remove("show");
    myDivAuth.classList.add("hide");

    myDivList.classList.remove("show");
    myDivList.classList.add("hide");
    
    myAddSaveButtons.classList.remove("show");
    myAddSaveButtons.classList.add("hide");

    myDivToDoLists.classList.remove("show");
    myDivToDoLists.classList.add("hide");

    myAccountButton.classList.add("hide");
    myAccountButton.classList.remove("show");
    

    showRegistrationForm();


    // myDivRegForm.reset();
    // if(itemDetails.length === 0){
    //     userlogin = userDetails[userIndex[0]].UserID;
    // }
    // else{
    //     userlogin = itemDetails[userIndex[0]].userID;
    // }

    userlogin = userDetails[userDetailsIndex[0]].UserID;
    
    mySpanRegForm.innerText = "Update User Details";

    const myButtonSubmitRegForm = document.getElementById("ButtonSubmitRegForm");
    myButtonSubmitRegForm.innerText = "Update Details";
    
    myInputRegFirstName.value = userDetails[userlogin-1].FirstName;
    myInputRegLastName.value = userDetails[userlogin-1].LastName;
    myInputRegEmail.value = userDetails[userlogin-1].Email;
    myInputRegPassword.value = userDetails[userlogin-1].Password;

    myinputRegTermsCheckbox.checked = userDetails[userlogin-1].Terms;

    alert("Password is in hashed format. Please enter your existing password or choose a new password before updating the details!");

}

function logout(){
    refreshDetails();
    // if(itemDetails.length === 0){
    //     userID = userDetails[userIndex[0]].UserID;
    // }
    // else{
    //     userID = itemDetails[userIndex[0]].userID;

    // }
    // let userlogin = itemDetails[userIndex[0]].userID;
    userID = userDetails[userDetailsIndex[0]].UserID;
    userDetails[userID-1].loggedIn = 0;
    
    
    myDashboard.classList.remove("show");
    myDashboard.classList.add("hide");

    myDivAuth.classList.remove("hide");
    myDivAuth.classList.add("show");

    myDivList.classList.remove("show");
    myDivList.classList.add("hide");
    
    myAddSaveButtons.classList.remove("show");
    myAddSaveButtons.classList.add("hide");

    myDivToDoLists.classList.remove("show");
    myDivToDoLists.classList.add("hide");

    myDivRegForm.classList.remove("show");
    myDivRegForm.classList.add("hide");

    myDivHeader.classList.remove("show");
    myDivHeader.classList.add("hide");
        
}

function removeListItem(e){
    const myOrderedListDivItems = document.getElementById("divItems");
    let myRemoveListitems = myOrderedListDivItems.children;
    for(let k = 0; k < myRemoveListitems.length ; k++){
        if(myRemoveListitems[k].id === e.target.id){
            myOrderedListDivItems.removeChild(myRemoveListitems[k]);
            break;
        }
    }

}

function getIndex(nameOfList){
    for(let i = 0 ; i < userIndex.length; i++){
        if(itemDetails.length !== 0){
            if(itemDetails[userIndex[i]].listName === nameOfList){
                return userIndex[i];
            }
        }                    
    }
    return -1;
}

function saveList(e){
    e.preventDefault();
    refreshDetails();
    let k, ClickedIndex = -1, nameTakenIndex = -1;
    noOfItems = itemDetails.length;
    listID = noOfItems + 1;
    const myOrderedListDivItems = document.getElementById("divItems");
    const myInputListName = document.getElementById("inputOpenListName");
    listName = myInputListName.value;

    myParaNewListError.innerText = "";

    if(listName === ""){
        myParaNewListError.innerText = "Name of the list is mandatory";
        return 0;
    }
    
    ClickedIndex = getIndex(ClickedList);
    nameTakenIndex = getIndex(listName);
    // for(let i = 0 ; i < userIndex.length; i++){
    //     if(itemDetails[userIndex[i]].listName === ClickedList){
    //         ClickedIndex = userIndex[i];
    //     }
    // }
    
    if(ClickedIndex !== -1){
        currentUserID = itemDetails[ClickedIndex].userID;
        currentListID = itemDetails[ClickedIndex].listID;
        let userLists = [];
        for(k = 0; k < itemDetails.length ; k++){
            if(k !== ClickedIndex){
                if(itemDetails[k].userID === currentUserID){
                    userLists.push(itemDetails[k].listName);
                }
            } 
        }
        console.log(userLists);
        if(userLists.includes(listName)){
            setTimeout(() => {
                alert("List with this name already presents. Please give a new name or continue with the existing name");
            },100);
            items = [];
            // ClickedList = "";
            return 0;
        }
        else{
            for(let prop of myOrderedListDivItems.children){
                if(prop.children[0].value === ""){
                    myParaNewListError.innerText = "Please specify To-do list item";
                    return 0;
                }
                items.push(new registerItems(prop.children[0].value, prop.children[1].checked));
            }
            
            if(newList === 0){
                savedItems = new saveItems(currentUserID,currentListID,listName,items);
                itemDetails[ClickedIndex] = savedItems;
            }
            else{
                savedItems = new saveItems(currentUserID,listID,listName,items);
                itemDetails.push(savedItems);;
            }
            
            localStorage.setItem("itemStorage",JSON.stringify(itemDetails));
            showDashboardDetails(currentUserID);
        }
        
    } else{
        
        if(nameTakenIndex !== -1){
            setTimeout(() => {
                alert("List with this name already presents.");
            },100);
            items = [];
            // ClickedList = "";
            return 0;
        }
        else{
            for(let prop of myOrderedListDivItems.children){
                if(prop.children[0].value === ""){
                    myParaNewListError.innerText = "Please specify To-do list item";
                    return 0;
                }
                items.push(new registerItems(prop.children[0].value, prop.children[1].checked));
            }
            savedItems = new saveItems(userID,listID,listName,items);
            itemDetails.push(savedItems);
            localStorage.setItem("itemStorage",JSON.stringify(itemDetails));
            showDashboardDetails(userID);
        }
    }

    items = [];

    myDivList.classList.remove("show");
    myDivList.classList.add("hide");

    myAddSaveButtons.classList.remove("show");
    myAddSaveButtons.classList.add("hide");
    
}

function registerItems(itemName, itemStatus){
    this.itemName = itemName;
    this.done = itemStatus;
}

function saveItems(userID, listID, listName, listItems){
    this.userID = userID;
    this.listID = listID;
    this.listName = listName;
    this.listItems = listItems;
}





function addListItem(e){

    const myTextInputItem = document.createElement("input");
    const myCheckboxInputItem = document.createElement("input")
    const myButtonRemoveInputItem = document.createElement("input");
    const myListItem = document.createElement("li");
    
    let divItemsCount = 0;
    const myOrderedListDivItems = document.getElementById("divItems");
    divItemsCount = myOrderedListDivItems.childElementCount;

    console.log(divItemsCount);

    myListItem.id = divItemsCount+1;

    myTextInputItem.setAttribute("type", "text");
    myTextInputItem.id = "text"+(divItemsCount+1);
    
    myCheckboxInputItem.setAttribute("type", "checkbox");
    myCheckboxInputItem.id = "check"+(divItemsCount+1);
    myCheckboxInputItem.classList.add("checkbox")

    myButtonRemoveInputItem.setAttribute("type", "button");
    myButtonRemoveInputItem.value = "Remove Item";
    myButtonRemoveInputItem.classList.add("removeItem");
    myButtonRemoveInputItem.id = divItemsCount + 1;
    myButtonRemoveInputItem.onclick = removeListItem;

    myListItem.appendChild(myTextInputItem);
    myListItem.appendChild(myCheckboxInputItem);
    myListItem.appendChild(myButtonRemoveInputItem);
    

    myOrderedListDivItems.appendChild(myListItem);
}

function addListDetails(e){

    newList = 1;
    ClickedList = "";

    if(myDivList.childElementCount !== 0){
        let count = myDivList.childElementCount;
        for(let i = 0 ; i < count ; i++){
            myDivList.removeChild(myDivList.children[0]);
        }
    }
    const openListName = document.createElement("label");
    openListName.setAttribute("id", "openListName");
    openListName.innerText = "Name of the list: "

    const TaskInputListName = document.createElement("input");
    TaskInputListName.setAttribute("id", "inputOpenListName");
    TaskInputListName.setAttribute("required", "");

    const TaskOrderList =document.createElement("ol");
    TaskOrderList.setAttribute("id", "divItems");
    TaskOrderList.classList.add("listItems");

    myDivList.appendChild(openListName);
    myDivList.appendChild(TaskInputListName);
    myDivList.appendChild(TaskOrderList);

    const TaskLI = document.createElement("li");
    TaskLI.setAttribute("id", 1);
    TaskOrderList.appendChild(TaskLI);

    const TaskInputText = document.createElement("input");
    TaskInputText.setAttribute("id", "text1");
    TaskInputText.setAttribute("type", "text");
    TaskLI.appendChild(TaskInputText);
    
    const TaskInputCheckbox = document.createElement("input");
    TaskInputCheckbox.setAttribute("id", "checkbox1");
    TaskInputCheckbox.setAttribute("type", "checkbox");
    TaskInputCheckbox.classList.add("checkbox");
    TaskLI.appendChild(TaskInputCheckbox);
    if(myDashboard.classList.contains("show")){
        myDashboard.classList.remove("show");
        myDashboard.classList.add("hide");

        myDivToDoLists.classList.remove("show");
        myDivToDoLists.classList.add("hide");

        myDivList.classList.remove("hide");
        myDivList.classList.add("show");

        myAddSaveButtons.classList.remove("hide");
        myAddSaveButtons.classList.add("show");
    }
}

function showRegistrationForm(e){
    const myDivRegForm = document.getElementById("divRegForm");
    const myDivAuth = document.getElementById("divAuth");
    if(myDivRegForm.classList.contains("hide")){
        myDivRegForm.classList.remove("hide");
        myDivRegForm.classList.add("show");

        myDivAuth.classList.remove("show");
        myDivAuth.classList.add("hide");
    }
}

function showLoginForm(e){
    if(myDivLoginForm.classList.contains("hide")){
        myDivLoginForm.classList.remove("hide");
        myDivLoginForm.classList.add("show");

        myDivAuth.classList.remove("show");
        myDivAuth.classList.add("hide");
    }
}

function registerUserDetails(UserID, FName, LName, Email, Pwd, Terms, loggedIn){
    this.UserID = UserID;
    this.FirstName = FName;
    this.LastName = LName;
    this.Email = Email;
    this.Password = Pwd;
    this.Terms = Terms;
    this.loggedIn = loggedIn;
}

function refreshDetails(){
    userDetails = JSON.parse(localStorage.getItem("userStorage"));
    itemDetails = JSON.parse(localStorage.getItem("itemStorage"));
    if(userDetails === null){
        userDetails = [];
    }
    if(itemDetails === null){
        itemDetails = [];
    }
}

function showDashBoard(e){
    e.preventDefault();
    const myDashboard = document.getElementById("divDashboard");
    refreshDetails();
    if(e.target.id === "formReg"){
        const regForm = document.getElementById(event.target.id);
        let storageLength = userDetails.length;
        
        if(validateRegForm(e)){
            // let storageLength = localStorage.length;
            let newUserDetails;
            // let userID = 0;
            // let userEmail;
            let newUserFlag = 1;
            let userData;
            let loggedIn = 0;
            let passwordHash;
            
            myParaFormError.innerText = "";

            if(UpdateAccount === 1){
                // if(itemDetails.length === 0){
                //     userID = userDetails[userIndex[0]].UserID;
                // }
                // else{
                //     userID = itemDetails[userIndex[0]].userID;

                // }
                userID = userDetails[userDetailsIndex[0]].UserID;
                // userID = userDetails[userlogin-1].userID;

                // Password Hashing

                passwordHash = hashPassword(myInputRegPassword.value);
                console.log(passwordHash);
                

                newUserDetails = new registerUserDetails(userID, myInputRegFirstName.value, myInputRegLastName.value, myInputRegEmail.value, passwordHash, myinputRegTermsCheckbox.checked, 1);
                userDetails[userID-1] = newUserDetails;
                localStorage.setItem("userStorage",JSON.stringify(userDetails));
                regForm.reset();
                UpdateAccount = -1;
                showDashboardDetails(userID);
                return 0;
            }


            if(storageLength !== 0){
                // userID = parseInt(arrayStorageData[0]);
                for(let j = 0 ; j < storageLength ; j++){
                    userData = userDetails[j];
                    if(userData.Email === myInputRegEmail.value){
                        newUserFlag = 0;
                        userID = parseInt(userData.UserID);
                        break;
                    }
                }

                if(newUserFlag === 1){
                    userData = userDetails[storageLength-1];
                    userID = parseInt(userData.UserID) + 1;

                    // Password Hashing

                    passwordHash = hashPassword(myInputRegPassword.value);
                    console.log(passwordHash);



                    newUserDetails = new registerUserDetails(userID, myInputRegFirstName.value, myInputRegLastName.value, myInputRegEmail.value, passwordHash, myinputRegTermsCheckbox.checked, 1);
                    userDetails.push(newUserDetails);
                    // console.log(newUserDetails);
                    // localStorage.setItem(userID+1,JSON.stringify(newUserDetails));
                    localStorage.setItem("userStorage",JSON.stringify(userDetails));
                    
                    regForm.reset();

                    if(myDivRegForm.classList.contains("show")){
                        myDivRegForm.classList.remove("show");
                        myDivRegForm.classList.add("hide");

                        // myDivAuth.classList.remove("hide");
                        // myDivAuth.classList.add("show");
                        if(myDashboard.classList.contains("hide")){
                            myDashboard.classList.remove("hide");
                            myDashboard.classList.add("show");
                            // myDivRegForm.reset();
                            showDashboardDetails(userID);
                        }
                    }

                } else{
                    // console.log(userData);
                    myParaFormError.innerText = "User is already registered."
                }
            }
            else{
                userID = 1;

                // Password Hashing

                passwordHash = hashPassword(myInputRegPassword.value);
                console.log(passwordHash);
                
                newUserDetails = new registerUserDetails(userID, myInputRegFirstName.value, myInputRegLastName.value, myInputRegEmail.value, passwordHash, myinputRegTermsCheckbox.checked, 1);
                userDetails.push(newUserDetails);
                // console.log(newUserDetails);
                // localStorage.setItem(userID+1,JSON.stringify(newUserDetails));
                localStorage.setItem("userStorage",JSON.stringify(userDetails));
                
                if(myDivRegForm.classList.contains("show")){
                    myDivRegForm.classList.remove("show");
                    myDivRegForm.classList.add("hide");

                    // myDivAuth.classList.remove("hide");
                    // myDivAuth.classList.add("show");

                    if(myDashboard.classList.contains("hide")){
                        myDashboard.classList.remove("hide");
                        myDashboard.classList.add("show");
                        // myDivRegForm();
                        showDashboardDetails(userID);
                    }
                }
            }                  
        }
    } else if(e.target.id === "formLogin"){
        if(userDetails !== null){
            myParaLoginError.innerText = "";
            const loginForm = document.getElementById(event.target.id);
            if(validateLoginForm(e)){
                userEmail = myInputLoginEmail.value;
                let userPassword = myInputLoginPassword.value;
                let userFound = 0;
                let k;
                for(k = 0 ; k < userDetails.length; k++){
                    if(userDetails[k].Email === userEmail){
                        userFound = 1;
                        // Password Hashing
                        
                        // passwordHash = hashPassword(myInputRegPassword.value);
                        //userDetails[k].Password === userPassword
                        console.log(checkPassword(userPassword, userDetails[k].Password));
                        if(checkPassword(userPassword, userDetails[k].Password)){
                            userID = userDetails[k].UserID;
                            loginForm.reset();
                            showDashboardDetails(userDetails[k].UserID);
                            break;
                        }
                        else{
                            loginForm.reset();
                            myParaLoginError.innerText = "Invalid password. Please try again!";
                            break;
                        }
                    }
                }

                if(userFound === 0){
                    myParaLoginError.innerText = "User Not Found. Please register to continue";
                }
            }
        } else{
            myParaLoginError.innerText = "User Not Found. Please register to continue";
        }
    }
    
}

function showDashboardDetails(userID){
    let i;
    userIndex = [];
    userDetailsIndex = [];

    myDivHeader.classList.remove("hide");
    myDivHeader.classList.add("show");
    myAccountButton.classList.add("show");
    myAccountButton.classList.remove("hide");

    refreshDetails();

for(let k = 0; k < userDetails.length ; k++){
        if(userDetails[k].UserID === userID){
            userDetailsIndex.push(k);
        }
    }

    if(itemDetails.length === 0){
        

    }else{
        if(myDivList.childElementCount !== 0){
            let count = myDivList.childElementCount;
            for(let i = 0 ; i < count ; i++){
                myDivList.removeChild(myDivList.children[0]);
            }
        }

        if(myDivToDoLists.childElementCount !== 0){
            let count = myDivToDoLists.childElementCount;
            for(let i = 0 ; i < count ; i++){
                myDivToDoLists.removeChild(myDivToDoLists.children[0]);
            }
        }
    
        for(i = 0 ; i < itemDetails.length ; i++){
            
            if(itemDetails[i].userID === userID){
                dashboardLists.push(itemDetails[i].listName);

                const myTaskLI = document.createElement("li");
                const myTaskHREF = document.createElement("a");


                myTaskHREF.setAttribute("href", "#"+itemDetails[i].listName);
                userIndex.push(i);
                myTaskHREF.onclick = openTaskList;
                myTaskHREF.innerText = itemDetails[i].listName;
                myTaskLI.appendChild(myTaskHREF);
                myDivToDoLists.append(myTaskLI);
                // myDashboard.appendChild(myDashboardTasks);

            }
            
        }
    }
    
    if(myDashboard.classList.contains("hide")){
        myDashboard.classList.remove("hide");
        myDashboard.classList.add("show");

        myDivRegForm.classList.remove("show");
        myDivRegForm.classList.add("hide");

        myAddSaveButtons.classList.remove("show");
        myAddSaveButtons.classList.add("hide");

        myDivToDoLists.classList.remove("hide");
        myDivToDoLists.classList.add("show");

        // myDivList.classList.remove("hide");
        // myDivList.classList.add("show");

        // myDivHeader.classList.remove("hide");
        // myDivHeader.classList.add("show");

        myDivLoginForm.classList.remove("show");
        myDivLoginForm.classList.add("hide");
    }



}

function openTaskList(e){
    refreshDetails();
    newList = 0;
    let iListOpen;
    ClickedList = e.target.innerText;
    console.log(e);

    if(myDivList.childElementCount !== 0){
        let count = myDivList.childElementCount;
        for(let i = 0; i < count ; i++){
            myDivList.removeChild(myDivList.children[0]);
        }
    }

    for(let i =0; i < itemDetails.length; i++){
        if(e.target.innerText === itemDetails[i].listName){
            iListOpen = i;
            break;
        }
    }
    
    let openListItems = itemDetails[iListOpen].listItems;
    let noOfItems = openListItems.length;
    let k;
    
    const openListName = document.createElement("label");
    openListName.setAttribute("id", "openListName");
    openListName.innerText = "Name of the list: "

    const TaskInputListName = document.createElement("input");
    TaskInputListName.setAttribute("id", "inputOpenListName");
    TaskInputListName.setAttribute("required", "");
    TaskInputListName.value = itemDetails[iListOpen].listName;

    currentListName = itemDetails[iListOpen].listName;

    const TaskOrderList =document.createElement("ol");
    TaskOrderList.setAttribute("id", "divItems");
    TaskOrderList.classList.add("listItems");

    myDivList.appendChild(openListName);
    myDivList.appendChild(TaskInputListName);
    myDivList.appendChild(TaskOrderList);

    // myTaskDetails.appendChild(openListName);
    // myTaskDetails.appendChild(TaskInputListName);
    // myTaskDetails.appendChild(TaskOrderList);
    
    for(k = 0; k < noOfItems ; k++ ){

        const TaskLI = document.createElement("li");
        TaskLI.setAttribute("id", k+1);
        TaskOrderList.appendChild(TaskLI);

        const TaskInputText = document.createElement("input");
        TaskInputText.setAttribute("id", openListItems[k].itemName);
        TaskInputText.setAttribute("type", "text");
        TaskInputText.value = openListItems[k].itemName;
        TaskLI.appendChild(TaskInputText);
        
        const TaskInputCheckbox = document.createElement("input");
        TaskInputCheckbox.setAttribute("id", "checkbox-"+openListItems[k].itemName);
        TaskInputCheckbox.setAttribute("type", "checkbox");
        TaskInputCheckbox.classList.add("checkbox");
        TaskInputCheckbox.checked = openListItems[k].done;
        TaskLI.appendChild(TaskInputCheckbox);

        const myButtonRemoveInputItem = document.createElement("input");
        myButtonRemoveInputItem.setAttribute("type", "button");
        myButtonRemoveInputItem.value = "Remove Item";
        myButtonRemoveInputItem.classList.add("removeItem");
        myButtonRemoveInputItem.id = k+1;
        myButtonRemoveInputItem.onclick = removeListItem;

    }
    
    myAddSaveButtons.classList.remove("hide");
    myAddSaveButtons.classList.add("show");

    if(myDivList.classList.contains("hide")){
        myDivList.classList.remove("hide");
        myDivList.classList.add("show");
    }
}

function hashPassword(txtPassword){
    let bcrypt = dcodeIO.bcrypt;
    let salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(txtPassword, salt);
    return hash;
}

function checkPassword(txtPassword, hash){
    let bcrypt = dcodeIO.bcrypt;
    return bcrypt.compareSync(txtPassword, hash);
}

function validateRegForm(event){

    let format = /[\t\n\r!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let noPassword = /[\t\n\r()+\-=\[\]{};':"\\|,.<>\/?]/;
    let yesPassword = "! @ # $ % ^ & * _";
    let space = /\s\s+/;
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regFlag = 1;

    myParaRegFN.innerText = "";
    myParaRegLN.innerText = "";
    myParaRegEmail.innerText = "";
    myParaRegPwd.innerText = "";
    myParaRegTerms.innerText = "";

    if(myInputRegFirstName.value === "" || myInputRegFirstName.value === null){
        myParaRegFN.innerText = "First Name is a mandatory field";
        regFlag = 0;
    } else if(format.test(myInputRegFirstName.value) || space.test(myInputRegFirstName.value)){
        myParaRegFN.innerText = "Special Characters and multiple consecutive spaces are not allowed";
        regFlag = 0;
    }
    if(myInputRegLastName.value === "" || myInputRegLastName.value === null){
        myParaRegLN.innerText = "Last Name is a mandatory field";
        regFlag = 0;
    } else if(format.test(myInputRegLastName.value) || space.test(myInputRegLastName.value)){
        myParaRegLN.innerText = "Special Characters and multiple consecutive spaces are not allowed";
        regFlag = 0;
    }
    if(myInputRegEmail.value === "" || myInputRegEmail.value === null){
        myParaRegEmail.innerText = "Email is a mandatory field";
        regFlag = 0;
    } else if(!emailPattern.test(myInputRegEmail.value)){
        myParaRegEmail.innerText = "This is not a valid email pattern";
        regFlag = 0;
    }
    if(myInputRegPassword.value === "" || myInputRegPassword.value === null){
        myParaRegPwd.innerText = "Password is a mandatory field";
        regFlag = 0;
    } else if(space.test(myInputRegPassword.value) || noPassword.test(myInputRegPassword.value)){
        myParaRegPwd.innerText = "Multiple consecutive spaces are not allowed. Only "+ yesPassword + " special characters are allowed.";
        regFlag = 0;
    }
    
    if(myinputRegTermsCheckbox.checked === false){
        myParaRegTerms.innerText = "Please check the checkbox to agree the Terms of use.";
        regFlag = 0;
    }

    if(regFlag === 1){
        return true;
    } else{
        return false;
    }
}

function validateLoginForm(event){

    let format = /[\t\n\r!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let noPassword = /[\t\n\r()+\-=\[\]{};':"\\|,.<>\/?]/;
    let yesPassword = "! @ # $ % ^ & * _";
    let space = /\s\s+/;
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let loginFlag = 1;

    myParaLoginEmail.innerText = "";
    myParaLoginPwd.innerText = "";

    if(myInputLoginEmail.value === "" || myInputLoginEmail.value === null){
        myParaLoginEmail.innerText = "Email is a mandatory field";
        loginFlag = 0;
    } else if(!emailPattern.test(myInputLoginEmail.value)){
        myParaLoginEmail.innerText = "This is not a valid email pattern";
        loginFlag = 0;
    }
    if(myInputLoginPassword.value === "" || myInputLoginPassword.value === null){
        myParaLoginPwd.innerText = "Password is a mandatory field";
        loginFlag = 0;
    } else if(space.test(myInputLoginPassword.value) || noPassword.test(myInputLoginPassword.value)){
        myParaLoginPwd.innerText = "Multiple consecutive spaces are not allowed. Only "+ yesPassword + " special characters are allowed.";
        loginFlag = 0;
    }
    
    if(loginFlag === 1){
        return true;
    } else{
        return false;
    }

}
