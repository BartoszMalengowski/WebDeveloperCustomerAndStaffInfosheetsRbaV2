//   Sterowanie tabami i divami
function divTab_Controller_Customers() {

  var divPlates = document.getElementById("plates");
  var divRenewal = document.getElementById("renewal");
  var divModification = document.getElementById("modification");
  var divComplaint = document.getElementById("complaint");
  var platesTab = document.getElementById("platesTab");
  var renewalTab = document.getElementById("renewalTab");
  var modificationTab = document.getElementById("modificationTab");
  var complaintTab = document.getElementById("complaintTab");
  var actionSpan = document.getElementById("Action_xml_value");
  var actionCurrentValue = actionSpan.innerHTML;

  if (actionCurrentValue == "NOWY PROJEKT") {
  divPlates.style.visibility = "visible",
  platesTab.setAttribute("class", "enabled_tab"),
  platesTab.style.visibility = "visible";
  // do sprawdzania czy poprawnie enabler dziala
  // renewalTab.style.visibility = "visible";
  // modificationTab.style.visibility = "visible";
  // complaintTab.style.visibility = "visible";
  renewalTab.style.display = "none";
  modificationTab.style.display = "none";
  complaintTab.style.display = "none";
};

  // dla WZNOWIEN
  if (actionCurrentValue == "WZNOWIENIE" 
  ) {
    divRenewal.style.visibility = "visible",
    renewalTab.setAttribute("class", "enabled_tab"),
    platesTab.style.display = "none";
    renewalTab.style.visibility = "visible";
    modificationTab.style.display = "none";
    complaintTab.style.display = "none";
  };

  // dla ZMIAN
  if (actionCurrentValue == "ZMIANA" ) {
    divModification.style.visibility = "visible",
    modificationTab.setAttribute("class", "enabled_tab"),
    platesTab.style.display = "none";
    renewalTab.style.display = "none";
    modificationTab.style.visibility = "visible";
    complaintTab.style.display = "none";
  };


  // dla REKLAMACJI
  if (actionCurrentValue == "REKLAMACJA"
  ) {
    divComplaint.style.visibility = "visible",
    complaintTab.setAttribute("class", "enabled_tab"),
    platesTab.style.display = "none";
    renewalTab.style.display = "none";
    modificationTab.style.display = "none";
    complaintTab.style.visibility = "visible";
  };
}

function handleTabClick(strTabId) {

  document.getElementById("plates").style.visibility = "hidden";
  document.getElementById("renewal").style.visibility = "hidden";
  document.getElementById("modification").style.visibility = "hidden";
  document.getElementById("complaint").style.visibility = "hidden";
  
  document.getElementById("platesTab").style.background = "#b8b8b8";
  document.getElementById("renewalTab").style.background = "#b8b8b8";;
  document.getElementById("modificationTab").style.background = "#b8b8b8";;
  document.getElementById("complaintTab").style.background = "#b8b8b8";;
  
  document.getElementById("platesTab").style.borderBottom = "solid dimgray 1px";
  document.getElementById("renewalTab").style.borderBottom = "solid dimgray 1px";
  document.getElementById("modificationTab").style.borderBottom = "solid dimgray 1px";
  document.getElementById("complaintTab").style.borderBottom = "solid dimgray 1px";

  document.getElementById("platesLabel").style.color = "#3F3F3F";
  document.getElementById("renewalLabel").style.color = "#3F3F3F";
  document.getElementById("modificationLabel").style.color = "#3F3F3F";
  document.getElementById("complaintLabel").style.color = "#3F3F3F";

  document.getElementById(strTabId).style.visibility = "visible";
  document.getElementById(strTabId + "Tab").style.background = "#E3E3E3";
  document.getElementById(strTabId + "Tab").style.borderBottom = "#3F3F3F";
  document.getElementById(strTabId + "Label").style.color = "#3F3F3F";
}