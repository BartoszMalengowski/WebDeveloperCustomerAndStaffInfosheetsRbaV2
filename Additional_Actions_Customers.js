$(document).ready(function (e) {

    var additional_actions_customers = document.getElementById("additional_actions_customers_value");
    var additional_actions_customers_CurrentValue = additional_actions_customers.innerHTML;
  
    var options = [

      "",
      "wznowienie matryc",
      "zmiana matryc",
    ];
  
    $("#additional_actions_customers_value").empty();
    $.each(options, function (i, p) {
      $("#additional_actions_customers_value").append($("<option></option>").val(p).html(p));
      $("#additional_actions_customers_value option[value='" + additional_actions_customers_CurrentValue + "']")
        .attr("selected", "selected");
    });
  });