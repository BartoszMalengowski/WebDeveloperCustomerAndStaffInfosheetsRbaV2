function ClassEnabler() {
    // GLOBAL VALUES  
    var statusSpan = document.getElementById("Status_xml_value");
    var statusCurrentValue = statusSpan.innerHTML;
    var actionSpan = document.getElementById("Action_xml_value");
    var actionCurrentValue = actionSpan.innerHTML;

    // PLATES VALUES
    var enabledClassDatePlates = document.querySelectorAll(".PlatesDiv_Enabled_DateInput");
    var enabledClassSelectPlates = document.querySelectorAll(".PlatesDiv_Enabled_SelectInput");
    var enabledClassTextInputPlates = document.querySelectorAll(".PlatesDiv_Enabled_TextInput");
    var platesSelectsSpecTable = document.querySelectorAll("#plates .SummaryDiv_Enabled_SelectInput");
    var platesInputsSpecTable = document.querySelectorAll("#plates .SummaryDiv_Enabled_TextInput");
    var Pbox = document.querySelectorAll("#plates input[type=checkbox]");
    var Phidden_box = document.querySelectorAll("#plates input[type=hidden]");
    var QPlate = document.querySelectorAll("#plates input[type=number]");
    var platesDate = document.getElementById("PlatesOrderDate_ID")

    // DATE INPUTS
    for (let i = 0; i < enabledClassDatePlates.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
            enabledClassDatePlates[i].setAttribute("class", "PlatesDiv_Disabled_DateInput");
            enabledClassDatePlates[i].disabled = true;
        }
    }
    // SELECT INPUTS
    for (let i = 0; i < enabledClassSelectPlates.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
            enabledClassSelectPlates[i].setAttribute("class", "PlatesDiv_Disabled_SelectInput");
            enabledClassSelectPlates[i].disabled = true;
        }
    }
    // TEXT INPUTS
    for (let i = 0; i < enabledClassTextInputPlates.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
            enabledClassTextInputPlates[i].setAttribute("class", "PlatesDiv_Disabled_TextInput");
            enabledClassTextInputPlates[i].disabled = true;
        }
    }
    // SPEC TABLE
    for (let i = 0; i < platesSelectsSpecTable.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
            platesSelectsSpecTable[i].setAttribute("class", "SummaryDiv_Disabled_TextInput");
            platesSelectsSpecTable[i].disabled = true;
        }
    }
    for (let i = 0; i < platesInputsSpecTable.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
            platesInputsSpecTable[i].setAttribute("class", "SummaryDiv_Disabled_TextInput");
            platesInputsSpecTable[i].disabled = true;
        }
    }


    // Potwierdzam powyższe dane i zamawiam przygotowanie projektu do druku:
    if (
        statusCurrentValue == "MATRYCE W PRODUKCJI" ||
        statusCurrentValue == "GOTOWE" ||
        statusCurrentValue == "REZYGNACJA") {
        document.getElementById("PlatesOrder_Activator").style.visibility = "hidden";


    }
    if (statusCurrentValue == "POTWIERDZENIE" && actionCurrentValue == "NOWY PROJEKT") {
        platesDate.setAttribute("class", "today PlatesDiv_Enabled_DateInput");
    } else if (statusCurrentValue == "MATRYCE W PRODUKCJI" ||
        statusCurrentValue == "GOTOWE" ||
        statusCurrentValue == "REZYGNACJA") {
        platesDate.setAttribute("class", "PlatesDiv_Disabled_DateInput");
        platesDate.disabled = true;
    };

    for (let i = 0; i < Pbox.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "REKLAMACJA" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "WZNOWIENIE") {
                Pbox[i].disabled = true;
        }
    }

    for (let i = 0; i < Phidden_box.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
                Phidden_box[i].disabled = true;
        }
    }

    for (let i = 0; i < QPlate.length; i++) {
        if (
            statusCurrentValue == "POTWIERDZENIE" &&
            actionCurrentValue == "NOWY PROJEKT") {
                QPlate[i].setAttribute("class", "SummaryDiv_Enabled_TextInput");
                QPlate[i].removeAttribute("disabled");
        }
    }





    // RENEWAL
    var enabledClassDateRen = document.querySelectorAll(".RenDiv_Enabled_DateInput");
    var enabledClassSelectRen = document.querySelectorAll(".RenDiv_Enabled_SelectInput");
    var enabledClassTextAreaRen = document.querySelectorAll(".RenDiv_Enabled_TextArea");
    var renDate = document.getElementById("RenewalOrderDate_ID")
    var renewalSelectsSpecTable = document.querySelectorAll("#renewal .SummaryDiv_Enabled_SelectInput");
    var renewalInputsSpecTable = document.querySelectorAll("#renewal .SummaryDiv_Enabled_TextInput");
    var Rbox = document.querySelectorAll("#renewal input[type=checkbox]");
    var Rhidden_box = document.querySelectorAll("#renewal input[type=hidden]");
    var QREN = document.querySelectorAll("#renewal input[type=number]");


    for (let i = 0; i < enabledClassDateRen.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
            enabledClassDateRen[i].setAttribute("class", "RenDiv_Disabled_DateInput");
            enabledClassDateRen[i].disabled = true;
        }
    }

    for (let i = 0; i < enabledClassTextAreaRen.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
            enabledClassTextAreaRen[i].setAttribute("class", "RenDiv_Disabled_TextArea");
            enabledClassTextAreaRen[i].disabled = true;
        }
    }

    for (let i = 0; i < enabledClassSelectRen.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
            enabledClassSelectRen[i].setAttribute("class", "RenDiv_Disabled_SelectInput");
            enabledClassSelectRen[i].disabled = true;
        }
    }

    if (statusCurrentValue == "POTWIERDZENIE" && actionCurrentValue == "WZNOWIENIE") {
        renDate.setAttribute("class", "today RenDiv_Enabled_DateInput");
    }
    else if (
        statusCurrentValue == "MATRYCE W PRODUKCJI" ||
        statusCurrentValue == "GOTOWE") {
        document.getElementById("RenewalOrder_Activator").style.display = "none";
    }

    // SPEC TABLE
    for (let i = 0; i < renewalSelectsSpecTable.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA" ||
            actionCurrentValue == "WZNOWIENIE") {
            renewalSelectsSpecTable[i].setAttribute("class", "SummaryDiv_Disabled_TextInput");
            renewalSelectsSpecTable[i].disabled = true;
        }
    }
    for (let i = 0; i < renewalInputsSpecTable.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
            renewalInputsSpecTable[i].setAttribute("class", "SummaryDiv_Disabled_TextInput");
            renewalInputsSpecTable[i].disabled = true;
        }
    }


    for (let i = 0; i < Rbox.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
            Rbox[i].disabled = true;
        }
    }
    for (let i = 0; i < Rhidden_box.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "REKLAMACJA") {
                Rhidden_box[i].disabled = true;
        }
    }
    for (let i = 0; i < QREN.length; i++) {
        if (
            statusCurrentValue == "POTWIERDZENIE" &&
            actionCurrentValue == "WZNOWIENIE") {
                QREN[i].setAttribute("class", "SummaryDiv_Enabled_TextInput");
            QREN[i].removeAttribute("disabled");
        }
    }


    // MOD
    var enabledClassDateMod = document.querySelectorAll(".ModDiv_Enabled_DateInput");
    var enabledClassSelectMod = document.querySelectorAll(".ModDiv_Enabled_SelectInput");
    var enabledClassTextAreaMod = document.querySelectorAll(".ModDiv_Enabled_TextArea");
    var enabledClassTextInput = document.querySelectorAll(".ModDiv_Enabled_TextInput");
    var modSelectsSpecTable = document.querySelectorAll("#modification .SummaryDiv_Enabled_SelectInput");
    var modInputsSpecTable = document.querySelectorAll("#modification .SummaryDiv_Enabled_TextInput");
    var Mbox = document.querySelectorAll("#modification input[type=checkbox]");
    var Mhidden_box = document.querySelectorAll("#modification input[type=hidden]");
    var QMod = document.querySelectorAll("#modification input[type=number]");
    var modDate = document.getElementById("ModificationOrderDate_ID");

    for (let i = 0; i < enabledClassDateMod.length; i++) {
        if (

            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "REKLAMACJA") {
            enabledClassDateMod[i].setAttribute("class", "ModDiv_Disabled_DateInput");
            enabledClassDateMod[i].disabled = true;
        }
    }

    for (let i = 0; i < enabledClassTextInput.length; i++) {
        if (

            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "REKLAMACJA") {
                enabledClassTextInput[i].setAttribute("class", "ModDiv_Disabled_TextInput");
                enabledClassTextInput[i].disabled = true;
        }
    }

    for (let i = 0; i < enabledClassTextAreaMod.length; i++) {
        if (

            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "REKLAMACJA") {
            enabledClassTextAreaMod[i].setAttribute("class", "ModDiv_Disabled_TextArea");
            enabledClassTextAreaMod[i].disabled = true;
        }
    }

    for (let i = 0; i < enabledClassSelectMod.length; i++) {
        if (

            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "REKLAMACJA") {
            enabledClassSelectMod[i].setAttribute("class", "ModDiv_Disabled_SelectInput");
            enabledClassSelectMod[i].disabled = true;
        }
    }



    for (let i = 0; i < modSelectsSpecTable.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||

            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "REKLAMACJA" ||
            actionCurrentValue == "NOWY PROJEKT") {
            modSelectsSpecTable[i].setAttribute("class", "SummaryDiv_Disabled_TextInput");
            modSelectsSpecTable[i].disabled = true;
        }
    }
    for (let i = 0; i < modInputsSpecTable.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||

            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "REKLAMACJA" ||
            actionCurrentValue == "NOWY PROJEKT") {
            modInputsSpecTable[i].setAttribute("class", "SummaryDiv_Disabled_TextInput");
            modInputsSpecTable[i].disabled = true;
        }
    }

    if (statusCurrentValue == "POTWIERDZENIE" && actionCurrentValue == "ZMIANA") {
        modDate.setAttribute("class", "today ModDiv_Enabled_DateInput");
    }
    else if (
        statusCurrentValue == "MATRYCE W PRODUKCJI" ||
        statusCurrentValue == "GOTOWE") {
        document.getElementById("ModificationOrder_Activator").style.visibility = "hidden";
    }


    for (let i = 0; i < Mbox.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "REKLAMACJA" ||
            actionCurrentValue == "WZNOWIENIE") {
                Mbox[i].disabled = true;
        }
    }

    for (let i = 0; i < Mhidden_box.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "REKLAMACJA" ||
            actionCurrentValue == "WZNOWIENIE") {
                Mhidden_box[i].disabled = true;
        }
    }



    
    for (let i = 0; i < QMod.length; i++) {
        if (
            statusCurrentValue == "POTWIERDZENIE" &&
            actionCurrentValue == "ZMIANA") {
                QMod[i].setAttribute("class", "SummaryDiv_Enabled_TextInput");
                QMod[i].removeAttribute("disabled");
        }
    }


    // COMPLAINT
    var enabledClassDateCom = document.querySelectorAll(".ComDiv_Enabled_DateInput");
    var enabledClassSelectCom = document.querySelectorAll(".ComDiv_Enabled_SelectInput");
    var enabledClassTextAreaCom = document.querySelectorAll(".ComDiv_Enabled_TextArea");
    var comSelectsSpecTable = document.querySelectorAll("#complaint .SummaryDiv_Enabled_SelectInput");
    var comInputsSpecTable = document.querySelectorAll("#complaint .SummaryDiv_Enabled_TextInput");
    var Cbox = document.querySelectorAll("#complaint input[type=checkbox]");
    var Chidden_box = document.querySelectorAll("#complaint input[type=hidden]");
    var QCom = document.querySelectorAll("#complaint input[type=number]");
    var comDate = document.getElementById("ComplaintOrderDate_ID")

    for (let i = 0; i < enabledClassDateCom.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||

            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA") {
            enabledClassDateCom[i].setAttribute("class", "ComDiv_Disabled_DateInput");
            enabledClassDateCom[i].disabled = true;
        }
    }

    for (let i = 0; i < enabledClassTextAreaCom.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||

            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA") {
            enabledClassTextAreaCom[i].setAttribute("class", "ComDiv_Disabled_TextArea");
            enabledClassTextAreaCom[i].disabled = true;
        }
    }

    for (let i = 0; i < enabledClassSelectCom.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||

            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA") {
            enabledClassSelectCom[i].setAttribute("class", "ComDiv_Disabled_SelectInput");
            enabledClassSelectCom[i].disabled = true;
        }
    }


    if (statusCurrentValue == "POTWIERDZENIE" && actionCurrentValue == "REKLAMACJA")  {
        comDate.setAttribute("class", "today ComDiv_Enabled_DateInput");
    }
    else if (
        statusCurrentValue == "MATRYCE W PRODUKCJI" ||
        statusCurrentValue == "GOTOWE") {
        document.getElementById("ComplaintOrder_Activator").style.visibility = "hidden";
    }


    for (let i = 0; i < comSelectsSpecTable.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "NOWY PROJEKT") {
            comSelectsSpecTable[i].setAttribute("class", "SummaryDiv_Disabled_TextInput");
            comSelectsSpecTable[i].disabled = true;
        }
    }
    for (let i = 0; i < comInputsSpecTable.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "WZNOWIENIE" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "NOWY PROJEKT") {
            comInputsSpecTable[i].setAttribute("class", "SummaryDiv_Disabled_TextInput");
            comInputsSpecTable[i].disabled = true;
        }
    }

    for (let i = 0; i < Cbox.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "WZNOWIENIE") {
            Cbox[i].disabled = true;
        }
    }

    for (let i = 0; i < Chidden_box.length; i++) {
        if (
            statusCurrentValue == "MATRYCE W PRODUKCJI" ||
            statusCurrentValue == "GOTOWE" ||
            actionCurrentValue == "NOWY PROJEKT" ||
            actionCurrentValue == "ZMIANA" ||
            actionCurrentValue == "WZNOWIENIE") {
                Chidden_box[i].disabled = true;
        }
    }

    for (let i = 0; i < QCom.length; i++) {
        if (
            statusCurrentValue == "POTWIERDZENIE" &&
            actionCurrentValue == "REKLAMACJA") {
                QCom[i].setAttribute("class", "SummaryDiv_Enabled_TextInput");
                QCom[i].removeAttribute("disabled");
        }
    }
    
  
  
//     // GLOBAL VALUES  
//     var statusSpan = document.getElementById("Status_xml_value");
//     var statusCurrentValue = statusSpan.innerHTML;
//     var actionSpan = document.getElementById("Action_xml_value");
//     var actionCurrentValue = actionSpan.innerHTML;

//     // PLATES VALUES
//     var enabledClassDatePlates = document.querySelectorAll(".PlatesDiv_Enabled_DateInput");
//     var enabledClassSelectPlates = document.querySelectorAll(".PlatesDiv_Enabled_SelectInput");
//     var enabledClassTextInputPlates = document.querySelectorAll(".PlatesDiv_Enabled_TextInput");
//     var platesDate = document.getElementById("PlatesOrderDate_ID")

//     // DATE INPUTS
//     for (let i = 0; i < enabledClassDatePlates.length; i++) {
//         if (
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassDatePlates[i].setAttribute("class", "PlatesDiv_Disabled_DateInput");
//             enabledClassDatePlates[i].disabled = "disabled";
//         }
//     }
//     // SELECT INPUTS
//     for (let i = 0; i < enabledClassSelectPlates.length; i++) {
//         if (
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassSelectPlates[i].setAttribute("class", "PlatesDiv_Disabled_SelectInput");
//             enabledClassSelectPlates[i].disabled = "disabled";
//         }
//     }
//     // TEXT INPUTS
//     for (let i = 0; i < enabledClassTextInputPlates.length; i++) {
//         if (
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassTextInputPlates[i].setAttribute("class", "PlatesDiv_Disabled_TextInput");
//             enabledClassTextInputPlates[i].disabled = "disabled";
//         }
//     }



//     // Potwierdzam powyższe dane i zamawiam przygotowanie projektu do druku:
//     if (
//         statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//         statusCurrentValue == "GOTOWE" ||
//         statusCurrentValue == "REZYGNACJA") {
//         document.getElementById("PlatesOrder_Activator").style.visibility = "hidden";
//     }
//     if (statusCurrentValue == "POTWIERDZENIE") {
//         platesDate.setAttribute("class", "today PlatesDiv_Enabled_DateInput");
//     } else if (statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//         statusCurrentValue == "GOTOWE" ||
//         statusCurrentValue == "REZYGNACJA") {
//         platesDate.setAttribute("class", "PlatesDiv_Disabled_DateInput");
//         platesDate.disabled = "disabled";
//     };

//     // RENEWAL
//     var enabledClassDateRen = document.querySelectorAll(".RenDiv_Enabled_DateInput");
//     var enabledClassSelectRen = document.querySelectorAll(".RenDiv_Enabled_SelectInput");
//     var enabledClassTextAreaRen = document.querySelectorAll(".RenDiv_Enabled_TextArea");
//     var renDate = document.getElementById("RenewalOrderDate_ID")

//     for (let i = 0; i < enabledClassDateRen.length; i++) {
//         if (
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassDateRen[i].setAttribute("class", "RenDiv_Disabled_DateInput");
//             enabledClassDateRen[i].disabled = "disabled";
//         }
//     }

//     for (let i = 0; i < enabledClassTextAreaRen.length; i++) {
//         if (
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassTextAreaRen[i].setAttribute("class", "RenDiv_Disabled_TextArea");
//             enabledClassTextAreaRen[i].disabled = "disabled";
//         }
//     }

//     for (let i = 0; i < enabledClassSelectRen.length; i++) {
//         if (
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassSelectRen[i].setAttribute("class", "RenDiv_Disabled_SelectInput");
//             enabledClassSelectRen[i].disabled = "disabled";
//         }
//     }

//     if (statusCurrentValue == "POTWIERDZENIE") {
//         renDate.setAttribute("class", "today RenDiv_Enabled_DateInput");
//     }
//     else if (
//         statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//         statusCurrentValue == "GOTOWE") {
//         document.getElementById("RenewalOrder_Activator").style.visibility = "hidden";
//     }


//     // MOD
//     var enabledClassDateMod = document.querySelectorAll(".ModDiv_Enabled_DateInput");
//     var enabledClassSelectMod = document.querySelectorAll(".ModDiv_Enabled_SelectInput");
//     var enabledClassTextAreaMod = document.querySelectorAll(".ModDiv_Enabled_TextArea");
//     var modProjectDate = document.getElementById("ModificationOrderDate_ID");

//     for (let i = 0; i < enabledClassDateMod.length; i++) {
//         if (
            
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassDateMod[i].setAttribute("class", "ModDiv_Disabled_DateInput");
//             enabledClassDateMod[i].disabled = "disabled";
//         }
//     }

//     for (let i = 0; i < enabledClassTextAreaMod.length; i++) {
//         if (
            
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassTextAreaMod[i].setAttribute("class", "ModDiv_Disabled_TextArea");
//             enabledClassTextAreaMod[i].disabled = "disabled";
//         }
//     }

//     for (let i = 0; i < enabledClassSelectMod.length; i++) {
//         if (
            
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassSelectMod[i].setAttribute("class", "ModDiv_Disabled_SelectInput");
//             enabledClassSelectMod[i].disabled = "disabled";
//         }
//     }

//     if (actionCurrentValue == "ZMIANA" && statusCurrentValue == "POTWIERDZENIE") {
//         modProjectDate.setAttribute("class", "today ModDiv_Enabled_DateInput");
//         document.getElementById("ModificationProjectOrder_Activator").style.visibility = "visible";
//         document.getElementById("ModificationPlatesOrder_Activator").style.visibility = "hidden";
//       }
    
//       else if (
//         statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//         statusCurrentValue == "GOTOWE" ||
//         statusCurrentValue == "REZYGNACJA") {
//         document.getElementById("ModificationProjectOrder_Activator").style.visibility = "hidden";
//         document.getElementById("ModificationProjectOrder_Activator").style.visibility = "hidden";
//         document.getElementById("plate_order_confirmation_value").disabled = "disabled"
//       }


//     // COMPLAINT
//     var enabledClassDateCom = document.querySelectorAll(".ComDiv_Enabled_DateInput");
//     var enabledClassSelectCom = document.querySelectorAll(".ComDiv_Enabled_SelectInput");
//     var enabledClassTextAreaCom = document.querySelectorAll(".ComDiv_Enabled_TextArea");
//     var comDate = document.getElementById("ComplaintOrderDate_ID")

//     for (let i = 0; i < enabledClassDateCom.length; i++) {
//         if (
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassDateCom[i].setAttribute("class", "ComDiv_Disabled_DateInput");
//             enabledClassDateCom[i].disabled = "disabled";
//         }
//     }

//     for (let i = 0; i < enabledClassTextAreaCom.length; i++) {
//         if (
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassTextAreaCom[i].setAttribute("class", "ComDiv_Disabled_TextArea");
//             enabledClassTextAreaCom[i].disabled = "disabled";
//         }
//     }

//     for (let i = 0; i < enabledClassSelectCom.length; i++) {
//         if (
//             statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//             statusCurrentValue == "GOTOWE" ||
//             statusCurrentValue == "REZYGNACJA") {
//             enabledClassSelectCom[i].setAttribute("class", "ComDiv_Disabled_SelectInput");
//             enabledClassSelectCom[i].disabled = "disabled";
//         }
//     }

//     if (statusCurrentValue == "POTWIERDZENIE") {
//         comDate.setAttribute("class", "today ComDiv_Enabled_DateInput");
//     }
//     else if (
//         statusCurrentValue == "MATRYCE W PRODUKCJI" ||
//         statusCurrentValue == "GOTOWE") {
//         document.getElementById("ComplaintOrder_Activator").style.visibility = "hidden";
//     }


    // SUMMARY VALUES

    var prodDate = document.getElementById("ProductionDate_ID");
    var enabledClassDateSummary = document.querySelectorAll("#summary .SummaryDiv_Enabled_DateInput");
    var enabledClassSelectSummary = document.querySelectorAll("#summary .SummaryDiv_Enabled_SelectInput, .SummaryACTIVATORDiv_Enabled_SelectInput");
    var enabledClassTextInputSummary = document.querySelectorAll("#summary .SummaryDiv_Enabled_TextInput");
    var enabledClassTextAreaSummary = document.querySelectorAll("#summary .SummaryDiv_Enabled_TextArea");

    for (let i = 0; i < enabledClassDateSummary.length; i++) {
        if (statusCurrentValue == "POTWIERDZENIE") {
            enabledClassDateSummary[i].disabled = "disabled";
        }
    }
    for (let i = 0; i < enabledClassSelectSummary.length; i++) {
        if (statusCurrentValue == "POTWIERDZENIE") {
            enabledClassSelectSummary[i].disabled = "disabled";
        }
    }

    for (let i = 0; i < enabledClassTextInputSummary.length; i++) {
        if (statusCurrentValue == "POTWIERDZENIE") {
            enabledClassTextInputSummary[i].setAttribute("class", "SummaryDiv_Disabled_TextInput");
            enabledClassTextInputSummary[i].disabled = "disabled";

        }
    }
    for (let i = 0; i < enabledClassTextAreaSummary.length; i++) {
        if (statusCurrentValue == "POTWIERDZENIE") {
            enabledClassTextAreaSummary[i].setAttribute("class", "SummaryDiv_Disabled_TextArea");
            enabledClassTextAreaSummary[i].disabled = "disabled";
        }
    }

    if (statusCurrentValue == "MATRYCE W PRODUKCJI") {
        prodDate.setAttribute("class", "today SummaryDiv_Enabled_DateInput");
    };
};

