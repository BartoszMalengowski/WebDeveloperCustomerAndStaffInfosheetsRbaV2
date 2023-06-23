$(document).ready(function (e) {

    var additional_actions = document.getElementById("additional_actions_value");
    var additional_actions_CurrentValue = additional_actions.innerHTML;
  
    var options = [
      "",
      "wznowienie matryc",
      "zmiana matryc",
      "reklamacja matryc",
      
    ];
  
    $("#additional_actions_value").empty();
    $.each(options, function (i, p) {
      $("#additional_actions_value").append($("<option></option>").val(p).html(p));
      $("#additional_actions_value option[value='" + additional_actions_CurrentValue + "']")
        .attr("selected", "selected");
    });
  });