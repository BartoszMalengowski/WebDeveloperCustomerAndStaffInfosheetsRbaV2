// Print Coordinators

$(document).ready(function (e) {

    var clientPrintCoordinator = document.getElementById("client_print_coordinator_value");
    var clientPrintCoordinator_CurrentValue = clientPrintCoordinator.innerHTML;
    var clientPrintCoordinator1 = document.getElementById("client_print_coordinator_value1");
    var clientPrintCoordinator_CurrentValue1 = clientPrintCoordinator1.innerHTML;
    var clientPrintCoordinator2 = document.getElementById("client_print_coordinator_value2");
    var clientPrintCoordinator_CurrentValue2 = clientPrintCoordinator2.innerHTML;
    var clientPrintCoordinator3 = document.getElementById("client_print_coordinator_value3");
    var clientPrintCoordinator_CurrentValue3 = clientPrintCoordinator3.innerHTML;

    var options = [

        "",
        "coordinator1",
        "coordinator2",

    ];

    $("#client_print_coordinator_value").empty();
    $.each(options, function (i, p) {
        $("#client_print_coordinator_value").append($("<option></option>").val(p).html(p));
        $("#client_print_coordinator_value option[value='" + clientPrintCoordinator_CurrentValue + "']")
            .attr("selected", "selected");
    });
    $("#client_print_coordinator_value1").empty();
    $.each(options, function (i, p) {
        $("#client_print_coordinator_value1").append($("<option></option>").val(p).html(p));
        $("#client_print_coordinator_value1 option[value='" + clientPrintCoordinator_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#client_print_coordinator_value2").empty();
    $.each(options, function (i, p) {
        $("#client_print_coordinator_value2").append($("<option></option>").val(p).html(p));
        $("#client_print_coordinator_value2 option[value='" + clientPrintCoordinator_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#client_print_coordinator_value3").empty();
    $.each(options, function (i, p) {
        $("#client_print_coordinator_value3").append($("<option></option>").val(p).html(p));
        $("#client_print_coordinator_value3 option[value='" + clientPrintCoordinator_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
});

//client Compensation Curve

$(document).ready(function (e) {

    var client_compensation_curve = document.getElementById("client_compensation_curve_value");
    var client_compensation_curve_CurrentValue = client_compensation_curve.innerHTML;
    var client_compensation_curve1 = document.getElementById("client_compensation_curve_value1");
    var client_compensation_curve_CurrentValue1 = client_compensation_curve1.innerHTML;
    var client_compensation_curve2 = document.getElementById("client_compensation_curve_value2");
    var client_compensation_curve_CurrentValue2 = client_compensation_curve2.innerHTML;
    var client_compensation_curve3 = document.getElementById("client_compensation_curve_value3");
    var client_compensation_curve_CurrentValue3 = client_compensation_curve3.innerHTML;

    var options = [
        "",
        "Maxtone SX",
        "01 client",
        "02 client",
        "Maxtone AM",
        "01 client",
        "02 client",

    ];

    $("#client_compensation_curve_value").empty();
    $.each(options, function (i, p) {
        $("#client_compensation_curve_value").append($("<option></option>").val(p).html(p));
        $("#client_compensation_curve_value option[value='" + client_compensation_curve_CurrentValue + "']")
            .attr("selected", "selected");
        $('#client_compensation_curve_value option:contains("Maxtone SX")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#client_compensation_curve_value option:contains("Maxtone AM")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    })
    $("#client_compensation_curve_value1").empty();
    $.each(options, function (i, p) {
        $("#client_compensation_curve_value1").append($("<option></option>").val(p).html(p));
        $("#client_compensation_curve_value1 option[value='" + client_compensation_curve_CurrentValue1 + "']")
            .attr("selected", "selected");
        $('#client_compensation_curve_value1 option:contains("Maxtone SX")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#client_compensation_curve_value1 option:contains("Maxtone AM")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    })
    $("#client_compensation_curve_value2").empty();
    $.each(options, function (i, p) {
        $("#client_compensation_curve_value2").append($("<option></option>").val(p).html(p));
        $("#client_compensation_curve_value2 option[value='" + client_compensation_curve_CurrentValue2 + "']")
            .attr("selected", "selected");
        $('#client_compensation_curve_value2 option:contains("Maxtone SX")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#client_compensation_curve_value2 option:contains("Maxtone AM")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    })
    $("#client_compensation_curve_value3").empty();
    $.each(options, function (i, p) {
        $("#client_compensation_curve_value3").append($("<option></option>").val(p).html(p));
        $("#client_compensation_curve_value3 option[value='" + client_compensation_curve_CurrentValue3 + "']")
            .attr("selected", "selected");
        $('#client_compensation_curve_value3 option:contains("Maxtone SX")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#client_compensation_curve_value3 option:contains("Maxtone AM")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");

    })
});

//plate_type

$(document).ready(function (e) {

    var P_spec_plates_type16 = document.getElementById("spec_plates_type_valueP16");
    var P_spec_plates_type_CurrentValue16 = P_spec_plates_type16.innerHTML;
    var M_spec_plates_type16 = document.getElementById("spec_plates_type_valueM16");
    var M_spec_plates_type_CurrentValue16 = M_spec_plates_type16.innerHTML;
    var R_spec_plates_type16 = document.getElementById("spec_plates_type_valueR16");
    var R_spec_plates_type_CurrentValue16 = R_spec_plates_type16.innerHTML;
    var C_spec_plates_type16 = document.getElementById("spec_plates_type_valueC16");
    var C_spec_plates_type_CurrentValue16 = C_spec_plates_type16.innerHTML;

    var options = [

        "",
        "NXH 1.14",
        "NXH 1.7",

    ];

    $("#spec_plates_type_valueP16").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP16").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP16 option[value='" + P_spec_plates_type_CurrentValue16 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM16").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM16").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM16 option[value='" + M_spec_plates_type_CurrentValue16 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR16").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR16").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR16 option[value='" + R_spec_plates_type_CurrentValue16 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC16").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC16").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC16 option[value='" + C_spec_plates_type_CurrentValue16 + "']")
            .attr("selected", "selected");
    });
});

//Screen Ruling

$(document).ready(function (e) {

    var P_spec_screen_rulling1 = document.getElementById("spec_screen_rulling_valueP1");
    var P_spec_screen_rulling_CurrentValue1 = P_spec_screen_rulling1.innerHTML;
    var P_spec_screen_rulling2 = document.getElementById("spec_screen_rulling_valueP2");
    var P_spec_screen_rulling_CurrentValue2 = P_spec_screen_rulling2.innerHTML;
    var P_spec_screen_rulling3 = document.getElementById("spec_screen_rulling_valueP3");
    var P_spec_screen_rulling_CurrentValue3 = P_spec_screen_rulling3.innerHTML;
    var P_spec_screen_rulling4 = document.getElementById("spec_screen_rulling_valueP4");
    var P_spec_screen_rulling_CurrentValue4 = P_spec_screen_rulling4.innerHTML;
    var P_spec_screen_rulling5 = document.getElementById("spec_screen_rulling_valueP5");
    var P_spec_screen_rulling_CurrentValue5 = P_spec_screen_rulling5.innerHTML;
    var P_spec_screen_rulling6 = document.getElementById("spec_screen_rulling_valueP6");
    var P_spec_screen_rulling_CurrentValue6 = P_spec_screen_rulling6.innerHTML;
    var P_spec_screen_rulling7 = document.getElementById("spec_screen_rulling_valueP7");
    var P_spec_screen_rulling_CurrentValue7 = P_spec_screen_rulling7.innerHTML;
    var P_spec_screen_rulling8 = document.getElementById("spec_screen_rulling_valueP8");
    var P_spec_screen_rulling_CurrentValue8 = P_spec_screen_rulling8.innerHTML;
    var P_spec_screen_rulling9 = document.getElementById("spec_screen_rulling_valueP9");
    var P_spec_screen_rulling_CurrentValue9 = P_spec_screen_rulling9.innerHTML;
    var P_spec_screen_rulling10 = document.getElementById("spec_screen_rulling_valueP10");
    var P_spec_screen_rulling_CurrentValue10 = P_spec_screen_rulling10.innerHTML;
    var P_spec_screen_rulling11 = document.getElementById("spec_screen_rulling_valueP11");
    var P_spec_screen_rulling_CurrentValue11 = P_spec_screen_rulling11.innerHTML;
    var P_spec_screen_rulling12 = document.getElementById("spec_screen_rulling_valueP12");
    var P_spec_screen_rulling_CurrentValue12 = P_spec_screen_rulling12.innerHTML;
    var P_spec_screen_rulling13 = document.getElementById("spec_screen_rulling_valueP13");
    var P_spec_screen_rulling_CurrentValue13 = P_spec_screen_rulling13.innerHTML;
    var P_spec_screen_rulling14 = document.getElementById("spec_screen_rulling_valueP14");
    var P_spec_screen_rulling_CurrentValue14 = P_spec_screen_rulling14.innerHTML;
    var P_spec_screen_rulling15 = document.getElementById("spec_screen_rulling_valueP15");
    var P_spec_screen_rulling_CurrentValue15 = P_spec_screen_rulling15.innerHTML;

    var M_spec_screen_rulling1 = document.getElementById("spec_screen_rulling_valueM1");
    var M_spec_screen_rulling_CurrentValue1 = M_spec_screen_rulling1.innerHTML;
    var M_spec_screen_rulling2 = document.getElementById("spec_screen_rulling_valueM2");
    var M_spec_screen_rulling_CurrentValue2 = M_spec_screen_rulling2.innerHTML;
    var M_spec_screen_rulling3 = document.getElementById("spec_screen_rulling_valueM3");
    var M_spec_screen_rulling_CurrentValue3 = M_spec_screen_rulling3.innerHTML;
    var M_spec_screen_rulling4 = document.getElementById("spec_screen_rulling_valueM4");
    var M_spec_screen_rulling_CurrentValue4 = M_spec_screen_rulling4.innerHTML;
    var M_spec_screen_rulling5 = document.getElementById("spec_screen_rulling_valueM5");
    var M_spec_screen_rulling_CurrentValue5 = M_spec_screen_rulling5.innerHTML;
    var M_spec_screen_rulling6 = document.getElementById("spec_screen_rulling_valueM6");
    var M_spec_screen_rulling_CurrentValue6 = M_spec_screen_rulling6.innerHTML;
    var M_spec_screen_rulling7 = document.getElementById("spec_screen_rulling_valueM7");
    var M_spec_screen_rulling_CurrentValue7 = M_spec_screen_rulling7.innerHTML;
    var M_spec_screen_rulling8 = document.getElementById("spec_screen_rulling_valueM8");
    var M_spec_screen_rulling_CurrentValue8 = M_spec_screen_rulling8.innerHTML;
    var M_spec_screen_rulling9 = document.getElementById("spec_screen_rulling_valueM9");
    var M_spec_screen_rulling_CurrentValue9 = M_spec_screen_rulling9.innerHTML;
    var M_spec_screen_rulling10 = document.getElementById("spec_screen_rulling_valueM10");
    var M_spec_screen_rulling_CurrentValue10 = M_spec_screen_rulling10.innerHTML;
    var M_spec_screen_rulling11 = document.getElementById("spec_screen_rulling_valueM11");
    var M_spec_screen_rulling_CurrentValue11 = M_spec_screen_rulling11.innerHTML;
    var M_spec_screen_rulling12 = document.getElementById("spec_screen_rulling_valueM12");
    var M_spec_screen_rulling_CurrentValue12 = M_spec_screen_rulling12.innerHTML;
    var M_spec_screen_rulling13 = document.getElementById("spec_screen_rulling_valueM13");
    var M_spec_screen_rulling_CurrentValue13 = M_spec_screen_rulling13.innerHTML;
    var M_spec_screen_rulling14 = document.getElementById("spec_screen_rulling_valueM14");
    var M_spec_screen_rulling_CurrentValue14 = M_spec_screen_rulling14.innerHTML;
    var M_spec_screen_rulling15 = document.getElementById("spec_screen_rulling_valueM15");
    var M_spec_screen_rulling_CurrentValue15 = M_spec_screen_rulling15.innerHTML;

    var R_spec_screen_rulling1 = document.getElementById("spec_screen_rulling_valueR1");
    var R_spec_screen_rulling_CurrentValue1 = R_spec_screen_rulling1.innerHTML;
    var R_spec_screen_rulling2 = document.getElementById("spec_screen_rulling_valueR2");
    var R_spec_screen_rulling_CurrentValue2 = R_spec_screen_rulling2.innerHTML;
    var R_spec_screen_rulling3 = document.getElementById("spec_screen_rulling_valueR3");
    var R_spec_screen_rulling_CurrentValue3 = R_spec_screen_rulling3.innerHTML;
    var R_spec_screen_rulling4 = document.getElementById("spec_screen_rulling_valueR4");
    var R_spec_screen_rulling_CurrentValue4 = R_spec_screen_rulling4.innerHTML;
    var R_spec_screen_rulling5 = document.getElementById("spec_screen_rulling_valueR5");
    var R_spec_screen_rulling_CurrentValue5 = R_spec_screen_rulling5.innerHTML;
    var R_spec_screen_rulling6 = document.getElementById("spec_screen_rulling_valueR6");
    var R_spec_screen_rulling_CurrentValue6 = R_spec_screen_rulling6.innerHTML;
    var R_spec_screen_rulling7 = document.getElementById("spec_screen_rulling_valueR7");
    var R_spec_screen_rulling_CurrentValue7 = R_spec_screen_rulling7.innerHTML;
    var R_spec_screen_rulling8 = document.getElementById("spec_screen_rulling_valueR8");
    var R_spec_screen_rulling_CurrentValue8 = R_spec_screen_rulling8.innerHTML;
    var R_spec_screen_rulling9 = document.getElementById("spec_screen_rulling_valueR9");
    var R_spec_screen_rulling_CurrentValue9 = R_spec_screen_rulling9.innerHTML;
    var R_spec_screen_rulling10 = document.getElementById("spec_screen_rulling_valueR10");
    var R_spec_screen_rulling_CurrentValue10 = R_spec_screen_rulling10.innerHTML;
    var R_spec_screen_rulling11 = document.getElementById("spec_screen_rulling_valueR11");
    var R_spec_screen_rulling_CurrentValue11 = R_spec_screen_rulling11.innerHTML;
    var R_spec_screen_rulling12 = document.getElementById("spec_screen_rulling_valueR12");
    var R_spec_screen_rulling_CurrentValue12 = R_spec_screen_rulling12.innerHTML;
    var R_spec_screen_rulling13 = document.getElementById("spec_screen_rulling_valueR13");
    var R_spec_screen_rulling_CurrentValue13 = R_spec_screen_rulling13.innerHTML;
    var R_spec_screen_rulling14 = document.getElementById("spec_screen_rulling_valueR14");
    var R_spec_screen_rulling_CurrentValue14 = R_spec_screen_rulling14.innerHTML;
    var R_spec_screen_rulling15 = document.getElementById("spec_screen_rulling_valueR15");
    var R_spec_screen_rulling_CurrentValue15 = R_spec_screen_rulling15.innerHTML;

    var C_spec_screen_rulling1 = document.getElementById("spec_screen_rulling_valueC1");
    var C_spec_screen_rulling_CurrentValue1 = C_spec_screen_rulling1.innerHTML;
    var C_spec_screen_rulling2 = document.getElementById("spec_screen_rulling_valueC2");
    var C_spec_screen_rulling_CurrentValue2 = C_spec_screen_rulling2.innerHTML;
    var C_spec_screen_rulling3 = document.getElementById("spec_screen_rulling_valueC3");
    var C_spec_screen_rulling_CurrentValue3 = C_spec_screen_rulling3.innerHTML;
    var C_spec_screen_rulling4 = document.getElementById("spec_screen_rulling_valueC4");
    var C_spec_screen_rulling_CurrentValue4 = C_spec_screen_rulling4.innerHTML;
    var C_spec_screen_rulling5 = document.getElementById("spec_screen_rulling_valueC5");
    var C_spec_screen_rulling_CurrentValue5 = C_spec_screen_rulling5.innerHTML;
    var C_spec_screen_rulling6 = document.getElementById("spec_screen_rulling_valueC6");
    var C_spec_screen_rulling_CurrentValue6 = C_spec_screen_rulling6.innerHTML;
    var C_spec_screen_rulling7 = document.getElementById("spec_screen_rulling_valueC7");
    var C_spec_screen_rulling_CurrentValue7 = C_spec_screen_rulling7.innerHTML;
    var C_spec_screen_rulling8 = document.getElementById("spec_screen_rulling_valueC8");
    var C_spec_screen_rulling_CurrentValue8 = C_spec_screen_rulling8.innerHTML;
    var C_spec_screen_rulling9 = document.getElementById("spec_screen_rulling_valueC9");
    var C_spec_screen_rulling_CurrentValue9 = C_spec_screen_rulling9.innerHTML;
    var C_spec_screen_rulling10 = document.getElementById("spec_screen_rulling_valueC10");
    var C_spec_screen_rulling_CurrentValue10 = C_spec_screen_rulling10.innerHTML;
    var C_spec_screen_rulling11 = document.getElementById("spec_screen_rulling_valueC11");
    var C_spec_screen_rulling_CurrentValue11 = C_spec_screen_rulling11.innerHTML;
    var C_spec_screen_rulling12 = document.getElementById("spec_screen_rulling_valueC12");
    var C_spec_screen_rulling_CurrentValue12 = C_spec_screen_rulling12.innerHTML;
    var C_spec_screen_rulling13 = document.getElementById("spec_screen_rulling_valueC13");
    var C_spec_screen_rulling_CurrentValue13 = C_spec_screen_rulling13.innerHTML;
    var C_spec_screen_rulling14 = document.getElementById("spec_screen_rulling_valueC14");
    var C_spec_screen_rulling_CurrentValue14 = C_spec_screen_rulling14.innerHTML;
    var C_spec_screen_rulling15 = document.getElementById("spec_screen_rulling_valueC15");
    var C_spec_screen_rulling_CurrentValue15 = C_spec_screen_rulling15.innerHTML;

    var options = [

        "",
        "200",

    ];

    $("#spec_screen_rulling_valueP1").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP1").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP1 option[value='" + P_spec_screen_rulling_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP2").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP2").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP2 option[value='" + P_spec_screen_rulling_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP3").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP3").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP3 option[value='" + P_spec_screen_rulling_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP4").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP4").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP4 option[value='" + P_spec_screen_rulling_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP5").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP5").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP5 option[value='" + P_spec_screen_rulling_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP6").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP6").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP6 option[value='" + P_spec_screen_rulling_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP7").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP7").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP7 option[value='" + P_spec_screen_rulling_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP8").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP8").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP8 option[value='" + P_spec_screen_rulling_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP9").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP9").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP9 option[value='" + P_spec_screen_rulling_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP10").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP10").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP10 option[value='" + P_spec_screen_rulling_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP11").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP11").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP11 option[value='" + P_spec_screen_rulling_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP12").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP12").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP12 option[value='" + P_spec_screen_rulling_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP13").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP13").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP13 option[value='" + P_spec_screen_rulling_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP14").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP14").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP14 option[value='" + P_spec_screen_rulling_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueP15").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueP15").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueP15 option[value='" + P_spec_screen_rulling_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM1").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM1").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM1 option[value='" + M_spec_screen_rulling_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM2").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM2").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM2 option[value='" + M_spec_screen_rulling_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM3").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM3").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM3 option[value='" + M_spec_screen_rulling_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM4").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM4").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM4 option[value='" + M_spec_screen_rulling_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM5").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM5").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM5 option[value='" + M_spec_screen_rulling_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM6").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM6").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM6 option[value='" + M_spec_screen_rulling_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM7").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM7").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM7 option[value='" + M_spec_screen_rulling_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM8").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM8").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM8 option[value='" + M_spec_screen_rulling_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM9").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM9").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM9 option[value='" + M_spec_screen_rulling_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM10").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM10").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM10 option[value='" + M_spec_screen_rulling_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM11").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM11").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM11 option[value='" + M_spec_screen_rulling_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM12").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM12").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM12 option[value='" + M_spec_screen_rulling_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM13").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM13").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM13 option[value='" + M_spec_screen_rulling_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM14").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM14").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM14 option[value='" + M_spec_screen_rulling_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueM15").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueM15").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueM15 option[value='" + M_spec_screen_rulling_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR1").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR1").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR1 option[value='" + R_spec_screen_rulling_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR2").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR2").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR2 option[value='" + R_spec_screen_rulling_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR3").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR3").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR3 option[value='" + R_spec_screen_rulling_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR4").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR4").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR4 option[value='" + R_spec_screen_rulling_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR5").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR5").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR5 option[value='" + R_spec_screen_rulling_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR6").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR6").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR6 option[value='" + R_spec_screen_rulling_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR7").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR7").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR7 option[value='" + R_spec_screen_rulling_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR8").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR8").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR8 option[value='" + R_spec_screen_rulling_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR9").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR9").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR9 option[value='" + R_spec_screen_rulling_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR10").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR10").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR10 option[value='" + R_spec_screen_rulling_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR11").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR11").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR11 option[value='" + R_spec_screen_rulling_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR12").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR12").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR12 option[value='" + R_spec_screen_rulling_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR13").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR13").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR13 option[value='" + R_spec_screen_rulling_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR14").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR14").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR14 option[value='" + R_spec_screen_rulling_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueR15").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueR15").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueR15 option[value='" + R_spec_screen_rulling_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC1").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC1").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC1 option[value='" + C_spec_screen_rulling_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC2").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC2").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC2 option[value='" + C_spec_screen_rulling_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC3").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC3").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC3 option[value='" + C_spec_screen_rulling_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC4").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC4").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC4 option[value='" + C_spec_screen_rulling_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC5").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC5").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC5 option[value='" + C_spec_screen_rulling_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC6").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC6").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC6 option[value='" + C_spec_screen_rulling_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC7").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC7").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC7 option[value='" + C_spec_screen_rulling_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC8").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC8").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC8 option[value='" + C_spec_screen_rulling_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC9").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC9").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC9 option[value='" + C_spec_screen_rulling_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC10").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC10").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC10 option[value='" + C_spec_screen_rulling_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC11").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC11").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC11 option[value='" + C_spec_screen_rulling_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC12").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC12").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC12 option[value='" + C_spec_screen_rulling_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC13").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC13").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC13 option[value='" + C_spec_screen_rulling_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC14").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC14").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC14 option[value='" + C_spec_screen_rulling_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_valueC15").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_valueC15").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_valueC15 option[value='" + C_spec_screen_rulling_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
});

//Angles

$(document).ready(function (e) {

    var P_spec_angle1 = document.getElementById("spec_angle_valueP1");
    var P_spec_angle_CurrentValue1 = P_spec_angle1.innerHTML;
    var P_spec_angle2 = document.getElementById("spec_angle_valueP2");
    var P_spec_angle_CurrentValue2 = P_spec_angle2.innerHTML;
    var P_spec_angle3 = document.getElementById("spec_angle_valueP3");
    var P_spec_angle_CurrentValue3 = P_spec_angle3.innerHTML;
    var P_spec_angle4 = document.getElementById("spec_angle_valueP4");
    var P_spec_angle_CurrentValue4 = P_spec_angle4.innerHTML;
    var P_spec_angle5 = document.getElementById("spec_angle_valueP5");
    var P_spec_angle_CurrentValue5 = P_spec_angle5.innerHTML;
    var P_spec_angle6 = document.getElementById("spec_angle_valueP6");
    var P_spec_angle_CurrentValue6 = P_spec_angle6.innerHTML;
    var P_spec_angle7 = document.getElementById("spec_angle_valueP7");
    var P_spec_angle_CurrentValue7 = P_spec_angle7.innerHTML;
    var P_spec_angle8 = document.getElementById("spec_angle_valueP8");
    var P_spec_angle_CurrentValue8 = P_spec_angle8.innerHTML;
    var P_spec_angle9 = document.getElementById("spec_angle_valueP9");
    var P_spec_angle_CurrentValue9 = P_spec_angle9.innerHTML;
    var P_spec_angle10 = document.getElementById("spec_angle_valueP10");
    var P_spec_angle_CurrentValue10 = P_spec_angle10.innerHTML;
    var P_spec_angle11 = document.getElementById("spec_angle_valueP11");
    var P_spec_angle_CurrentValue11 = P_spec_angle11.innerHTML;
    var P_spec_angle12 = document.getElementById("spec_angle_valueP12");
    var P_spec_angle_CurrentValue12 = P_spec_angle12.innerHTML;
    var P_spec_angle13 = document.getElementById("spec_angle_valueP13");
    var P_spec_angle_CurrentValue13 = P_spec_angle13.innerHTML;
    var P_spec_angle14 = document.getElementById("spec_angle_valueP14");
    var P_spec_angle_CurrentValue14 = P_spec_angle14.innerHTML;
    var P_spec_angle15 = document.getElementById("spec_angle_valueP15");
    var P_spec_angle_CurrentValue15 = P_spec_angle15.innerHTML;

    var M_spec_angle1 = document.getElementById("spec_angle_valueM1");
    var M_spec_angle_CurrentValue1 = M_spec_angle1.innerHTML;
    var M_spec_angle2 = document.getElementById("spec_angle_valueM2");
    var M_spec_angle_CurrentValue2 = M_spec_angle2.innerHTML;
    var M_spec_angle3 = document.getElementById("spec_angle_valueM3");
    var M_spec_angle_CurrentValue3 = M_spec_angle3.innerHTML;
    var M_spec_angle4 = document.getElementById("spec_angle_valueM4");
    var M_spec_angle_CurrentValue4 = M_spec_angle4.innerHTML;
    var M_spec_angle5 = document.getElementById("spec_angle_valueM5");
    var M_spec_angle_CurrentValue5 = M_spec_angle5.innerHTML;
    var M_spec_angle6 = document.getElementById("spec_angle_valueM6");
    var M_spec_angle_CurrentValue6 = M_spec_angle6.innerHTML;
    var M_spec_angle7 = document.getElementById("spec_angle_valueM7");
    var M_spec_angle_CurrentValue7 = M_spec_angle7.innerHTML;
    var M_spec_angle8 = document.getElementById("spec_angle_valueM8");
    var M_spec_angle_CurrentValue8 = M_spec_angle8.innerHTML;
    var M_spec_angle9 = document.getElementById("spec_angle_valueM9");
    var M_spec_angle_CurrentValue9 = M_spec_angle9.innerHTML;
    var M_spec_angle10 = document.getElementById("spec_angle_valueM10");
    var M_spec_angle_CurrentValue10 = M_spec_angle10.innerHTML;
    var M_spec_angle11 = document.getElementById("spec_angle_valueM11");
    var M_spec_angle_CurrentValue11 = M_spec_angle11.innerHTML;
    var M_spec_angle12 = document.getElementById("spec_angle_valueM12");
    var M_spec_angle_CurrentValue12 = M_spec_angle12.innerHTML;
    var M_spec_angle13 = document.getElementById("spec_angle_valueM13");
    var M_spec_angle_CurrentValue13 = M_spec_angle13.innerHTML;
    var M_spec_angle14 = document.getElementById("spec_angle_valueM14");
    var M_spec_angle_CurrentValue14 = M_spec_angle14.innerHTML;
    var M_spec_angle15 = document.getElementById("spec_angle_valueM15");
    var M_spec_angle_CurrentValue15 = M_spec_angle15.innerHTML;

    var R_spec_angle1 = document.getElementById("spec_angle_valueR1");
    var R_spec_angle_CurrentValue1 = R_spec_angle1.innerHTML;
    var R_spec_angle2 = document.getElementById("spec_angle_valueR2");
    var R_spec_angle_CurrentValue2 = R_spec_angle2.innerHTML;
    var R_spec_angle3 = document.getElementById("spec_angle_valueR3");
    var R_spec_angle_CurrentValue3 = R_spec_angle3.innerHTML;
    var R_spec_angle4 = document.getElementById("spec_angle_valueR4");
    var R_spec_angle_CurrentValue4 = R_spec_angle4.innerHTML;
    var R_spec_angle5 = document.getElementById("spec_angle_valueR5");
    var R_spec_angle_CurrentValue5 = R_spec_angle5.innerHTML;
    var R_spec_angle6 = document.getElementById("spec_angle_valueR6");
    var R_spec_angle_CurrentValue6 = R_spec_angle6.innerHTML;
    var R_spec_angle7 = document.getElementById("spec_angle_valueR7");
    var R_spec_angle_CurrentValue7 = R_spec_angle7.innerHTML;
    var R_spec_angle8 = document.getElementById("spec_angle_valueR8");
    var R_spec_angle_CurrentValue8 = R_spec_angle8.innerHTML;
    var R_spec_angle9 = document.getElementById("spec_angle_valueR9");
    var R_spec_angle_CurrentValue9 = R_spec_angle9.innerHTML;
    var R_spec_angle10 = document.getElementById("spec_angle_valueR10");
    var R_spec_angle_CurrentValue10 = R_spec_angle10.innerHTML;
    var R_spec_angle11 = document.getElementById("spec_angle_valueR11");
    var R_spec_angle_CurrentValue11 = R_spec_angle11.innerHTML;
    var R_spec_angle12 = document.getElementById("spec_angle_valueR12");
    var R_spec_angle_CurrentValue12 = R_spec_angle12.innerHTML;
    var R_spec_angle13 = document.getElementById("spec_angle_valueR13");
    var R_spec_angle_CurrentValue13 = R_spec_angle13.innerHTML;
    var R_spec_angle14 = document.getElementById("spec_angle_valueR14");
    var R_spec_angle_CurrentValue14 = R_spec_angle14.innerHTML;
    var R_spec_angle15 = document.getElementById("spec_angle_valueR15");
    var R_spec_angle_CurrentValue15 = R_spec_angle15.innerHTML;

    var C_spec_angle1 = document.getElementById("spec_angle_valueC1");
    var C_spec_angle_CurrentValue1 = C_spec_angle1.innerHTML;
    var C_spec_angle2 = document.getElementById("spec_angle_valueC2");
    var C_spec_angle_CurrentValue2 = C_spec_angle2.innerHTML;
    var C_spec_angle3 = document.getElementById("spec_angle_valueC3");
    var C_spec_angle_CurrentValue3 = C_spec_angle3.innerHTML;
    var C_spec_angle4 = document.getElementById("spec_angle_valueC4");
    var C_spec_angle_CurrentValue4 = C_spec_angle4.innerHTML;
    var C_spec_angle5 = document.getElementById("spec_angle_valueC5");
    var C_spec_angle_CurrentValue5 = C_spec_angle5.innerHTML;
    var C_spec_angle6 = document.getElementById("spec_angle_valueC6");
    var C_spec_angle_CurrentValue6 = C_spec_angle6.innerHTML;
    var C_spec_angle7 = document.getElementById("spec_angle_valueC7");
    var C_spec_angle_CurrentValue7 = C_spec_angle7.innerHTML;
    var C_spec_angle8 = document.getElementById("spec_angle_valueC8");
    var C_spec_angle_CurrentValue8 = C_spec_angle8.innerHTML;
    var C_spec_angle9 = document.getElementById("spec_angle_valueC9");
    var C_spec_angle_CurrentValue9 = C_spec_angle9.innerHTML;
    var C_spec_angle10 = document.getElementById("spec_angle_valueC10");
    var C_spec_angle_CurrentValue10 = C_spec_angle10.innerHTML;
    var C_spec_angle11 = document.getElementById("spec_angle_valueC11");
    var C_spec_angle_CurrentValue11 = C_spec_angle11.innerHTML;
    var C_spec_angle12 = document.getElementById("spec_angle_valueC12");
    var C_spec_angle_CurrentValue12 = C_spec_angle12.innerHTML;
    var C_spec_angle13 = document.getElementById("spec_angle_valueC13");
    var C_spec_angle_CurrentValue13 = C_spec_angle13.innerHTML;
    var C_spec_angle14 = document.getElementById("spec_angle_valueC14");
    var C_spec_angle_CurrentValue14 = C_spec_angle14.innerHTML;
    var C_spec_angle15 = document.getElementById("spec_angle_valueC15");
    var C_spec_angle_CurrentValue15 = C_spec_angle15.innerHTML;

    var options = [

        "",
        "82.5",
        "52.5",
        "7.5",
        "22.5",
        "7.5",
        "37.5",
        "82.5",
        "67.5",
    ];

    $("#spec_angle_valueP1").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP1").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP1 option[value='" + P_spec_angle_CurrentValue1 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP1 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP1 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP2").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP2").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP2 option[value='" + P_spec_angle_CurrentValue2 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP2 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP2 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP3").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP3").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP3 option[value='" + P_spec_angle_CurrentValue3 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP3 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP3 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP4").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP4").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP4 option[value='" + P_spec_angle_CurrentValue4 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP4 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP4 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP5").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP5").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP5 option[value='" + P_spec_angle_CurrentValue5 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP5 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP5 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP6").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP6").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP6 option[value='" + P_spec_angle_CurrentValue6 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP6 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP6 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP7").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP7").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP7 option[value='" + P_spec_angle_CurrentValue7 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP7 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP7 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP8").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP8").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP8 option[value='" + P_spec_angle_CurrentValue8 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP8 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP8 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP9").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP9").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP9 option[value='" + P_spec_angle_CurrentValue9 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP9 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP9 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP10").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP10").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP10 option[value='" + P_spec_angle_CurrentValue10 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP10 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP10 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP11").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP11").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP11 option[value='" + P_spec_angle_CurrentValue11 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP11 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP11 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP12").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP12").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP12 option[value='" + P_spec_angle_CurrentValue12 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP12 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP12 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP13").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP13").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP13 option[value='" + P_spec_angle_CurrentValue13 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP13 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP13 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP14").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP14").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP14 option[value='" + P_spec_angle_CurrentValue14 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP14 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP14 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueP15").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueP15").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueP15 option[value='" + P_spec_angle_CurrentValue15 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueP15 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP15 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM1").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM1").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM1 option[value='" + M_spec_angle_CurrentValue1 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM1 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM1 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM2").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM2").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM2 option[value='" + M_spec_angle_CurrentValue2 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM2 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM2 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM3").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM3").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM3 option[value='" + M_spec_angle_CurrentValue3 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM3 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM3 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM4").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM4").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM4 option[value='" + M_spec_angle_CurrentValue4 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM4 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM4 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM5").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM5").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM5 option[value='" + M_spec_angle_CurrentValue5 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM5 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM5 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM6").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM6").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM6 option[value='" + M_spec_angle_CurrentValue6 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM6 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM6 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM7").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM7").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM7 option[value='" + M_spec_angle_CurrentValue7 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM7 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM7 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM8").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM8").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM8 option[value='" + M_spec_angle_CurrentValue8 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM8 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM8 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM9").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM9").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM9 option[value='" + M_spec_angle_CurrentValue9 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM9 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM9 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM10").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM10").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM10 option[value='" + M_spec_angle_CurrentValue10 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM10 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM10 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM11").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM11").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM11 option[value='" + M_spec_angle_CurrentValue11 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM11 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM11 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM12").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM12").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM12 option[value='" + M_spec_angle_CurrentValue12 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM12 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM12 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM13").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM13").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM13 option[value='" + M_spec_angle_CurrentValue13 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM13 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM13 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM14").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM14").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM14 option[value='" + M_spec_angle_CurrentValue14 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM14 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM14 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueM15").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueM15").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueM15 option[value='" + M_spec_angle_CurrentValue15 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueM15 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM15 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR1").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR1").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR1 option[value='" + R_spec_angle_CurrentValue1 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR1 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR1 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR2").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR2").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR2 option[value='" + R_spec_angle_CurrentValue2 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR2 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR2 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR3").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR3").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR3 option[value='" + R_spec_angle_CurrentValue3 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR3 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR3 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR4").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR4").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR4 option[value='" + R_spec_angle_CurrentValue4 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR4 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR4 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR5").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR5").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR5 option[value='" + R_spec_angle_CurrentValue5 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR5 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR5 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR6").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR6").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR6 option[value='" + R_spec_angle_CurrentValue6 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR6 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR6 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR7").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR7").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR7 option[value='" + R_spec_angle_CurrentValue7 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR7 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR7 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR8").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR8").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR8 option[value='" + R_spec_angle_CurrentValue8 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR8 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR8 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR9").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR9").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR9 option[value='" + R_spec_angle_CurrentValue9 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR9 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR9 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR10").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR10").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR10 option[value='" + R_spec_angle_CurrentValue10 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR10 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR10 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR11").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR11").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR11 option[value='" + R_spec_angle_CurrentValue11 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR11 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR11 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR12").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR12").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR12 option[value='" + R_spec_angle_CurrentValue12 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR12 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR12 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR13").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR13").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR13 option[value='" + R_spec_angle_CurrentValue13 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR13 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR13 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR14").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR14").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR14 option[value='" + R_spec_angle_CurrentValue14 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR14 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR14 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueR15").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueR15").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueR15 option[value='" + R_spec_angle_CurrentValue15 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueR15 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR15 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC1").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC1").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC1 option[value='" + C_spec_angle_CurrentValue1 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC1 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC1 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC2").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC2").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC2 option[value='" + C_spec_angle_CurrentValue2 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC2 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC2 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC3").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC3").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC3 option[value='" + C_spec_angle_CurrentValue3 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC3 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC3 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC4").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC4").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC4 option[value='" + C_spec_angle_CurrentValue4 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC4 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC4 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC5").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC5").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC5 option[value='" + C_spec_angle_CurrentValue5 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC5 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC5 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC6").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC6").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC6 option[value='" + C_spec_angle_CurrentValue6 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC6 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC6 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC7").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC7").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC7 option[value='" + C_spec_angle_CurrentValue7 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC7 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC7 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC8").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC8").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC8 option[value='" + C_spec_angle_CurrentValue8 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC8 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC8 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC9").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC9").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC9 option[value='" + C_spec_angle_CurrentValue9 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC9 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC9 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC10").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC10").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC10 option[value='" + C_spec_angle_CurrentValue10 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC10 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC10 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC11").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC11").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC11 option[value='" + C_spec_angle_CurrentValue11 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC11 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC11 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC12").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC12").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC12 option[value='" + C_spec_angle_CurrentValue12 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC12 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC12 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC13").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC13").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC13 option[value='" + C_spec_angle_CurrentValue13 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC13 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC13 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC14").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC14").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC14 option[value='" + C_spec_angle_CurrentValue14 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC14 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC14 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_valueC15").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_valueC15").append($("<option></option>").val(p).html(p));
        $("#spec_angle_valueC15 option[value='" + C_spec_angle_CurrentValue15 + "']")
            .attr("selected", "selected");
        $('#spec_angle_valueC15 option:contains("AM CMYK 7.5 | 37.5 | 82.5 | 67.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC15 option:contains("SX CMYK 82.5 | 52.5 | 7.5 | 22.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
});

//DC

$(document).ready(function (e) {

    var P_spec_DC1 = document.getElementById("spec_DC_valueP1");
    var P_spec_DC_CurrentValue1 = P_spec_DC1.innerHTML;
    var P_spec_DC2 = document.getElementById("spec_DC_valueP2");
    var P_spec_DC_CurrentValue2 = P_spec_DC2.innerHTML;
    var P_spec_DC3 = document.getElementById("spec_DC_valueP3");
    var P_spec_DC_CurrentValue3 = P_spec_DC3.innerHTML;
    var P_spec_DC4 = document.getElementById("spec_DC_valueP4");
    var P_spec_DC_CurrentValue4 = P_spec_DC4.innerHTML;
    var P_spec_DC5 = document.getElementById("spec_DC_valueP5");
    var P_spec_DC_CurrentValue5 = P_spec_DC5.innerHTML;
    var P_spec_DC6 = document.getElementById("spec_DC_valueP6");
    var P_spec_DC_CurrentValue6 = P_spec_DC6.innerHTML;
    var P_spec_DC7 = document.getElementById("spec_DC_valueP7");
    var P_spec_DC_CurrentValue7 = P_spec_DC7.innerHTML;
    var P_spec_DC8 = document.getElementById("spec_DC_valueP8");
    var P_spec_DC_CurrentValue8 = P_spec_DC8.innerHTML;
    var P_spec_DC9 = document.getElementById("spec_DC_valueP9");
    var P_spec_DC_CurrentValue9 = P_spec_DC9.innerHTML;
    var P_spec_DC10 = document.getElementById("spec_DC_valueP10");
    var P_spec_DC_CurrentValue10 = P_spec_DC10.innerHTML;
    var P_spec_DC11 = document.getElementById("spec_DC_valueP11");
    var P_spec_DC_CurrentValue11 = P_spec_DC11.innerHTML;
    var P_spec_DC12 = document.getElementById("spec_DC_valueP12");
    var P_spec_DC_CurrentValue12 = P_spec_DC12.innerHTML;
    var P_spec_DC13 = document.getElementById("spec_DC_valueP13");
    var P_spec_DC_CurrentValue13 = P_spec_DC13.innerHTML;
    var P_spec_DC14 = document.getElementById("spec_DC_valueP14");
    var P_spec_DC_CurrentValue14 = P_spec_DC14.innerHTML;
    var P_spec_DC15 = document.getElementById("spec_DC_valueP15");
    var P_spec_DC_CurrentValue15 = P_spec_DC15.innerHTML;

    var M_spec_DC1 = document.getElementById("spec_DC_valueM1");
    var M_spec_DC_CurrentValue1 = M_spec_DC1.innerHTML;
    var M_spec_DC2 = document.getElementById("spec_DC_valueM2");
    var M_spec_DC_CurrentValue2 = M_spec_DC2.innerHTML;
    var M_spec_DC3 = document.getElementById("spec_DC_valueM3");
    var M_spec_DC_CurrentValue3 = M_spec_DC3.innerHTML;
    var M_spec_DC4 = document.getElementById("spec_DC_valueM4");
    var M_spec_DC_CurrentValue4 = M_spec_DC4.innerHTML;
    var M_spec_DC5 = document.getElementById("spec_DC_valueM5");
    var M_spec_DC_CurrentValue5 = M_spec_DC5.innerHTML;
    var M_spec_DC6 = document.getElementById("spec_DC_valueM6");
    var M_spec_DC_CurrentValue6 = M_spec_DC6.innerHTML;
    var M_spec_DC7 = document.getElementById("spec_DC_valueM7");
    var M_spec_DC_CurrentValue7 = M_spec_DC7.innerHTML;
    var M_spec_DC8 = document.getElementById("spec_DC_valueM8");
    var M_spec_DC_CurrentValue8 = M_spec_DC8.innerHTML;
    var M_spec_DC9 = document.getElementById("spec_DC_valueM9");
    var M_spec_DC_CurrentValue9 = M_spec_DC9.innerHTML;
    var M_spec_DC10 = document.getElementById("spec_DC_valueM10");
    var M_spec_DC_CurrentValue10 = M_spec_DC10.innerHTML;
    var M_spec_DC11 = document.getElementById("spec_DC_valueM11");
    var M_spec_DC_CurrentValue11 = M_spec_DC11.innerHTML;
    var M_spec_DC12 = document.getElementById("spec_DC_valueM12");
    var M_spec_DC_CurrentValue12 = M_spec_DC12.innerHTML;
    var M_spec_DC13 = document.getElementById("spec_DC_valueM13");
    var M_spec_DC_CurrentValue13 = M_spec_DC13.innerHTML;
    var M_spec_DC14 = document.getElementById("spec_DC_valueM14");
    var M_spec_DC_CurrentValue14 = M_spec_DC14.innerHTML;
    var M_spec_DC15 = document.getElementById("spec_DC_valueM15");
    var M_spec_DC_CurrentValue15 = M_spec_DC15.innerHTML;

    var R_spec_DC1 = document.getElementById("spec_DC_valueR1");
    var R_spec_DC_CurrentValue1 = R_spec_DC1.innerHTML;
    var R_spec_DC2 = document.getElementById("spec_DC_valueR2");
    var R_spec_DC_CurrentValue2 = R_spec_DC2.innerHTML;
    var R_spec_DC3 = document.getElementById("spec_DC_valueR3");
    var R_spec_DC_CurrentValue3 = R_spec_DC3.innerHTML;
    var R_spec_DC4 = document.getElementById("spec_DC_valueR4");
    var R_spec_DC_CurrentValue4 = R_spec_DC4.innerHTML;
    var R_spec_DC5 = document.getElementById("spec_DC_valueR5");
    var R_spec_DC_CurrentValue5 = R_spec_DC5.innerHTML;
    var R_spec_DC6 = document.getElementById("spec_DC_valueR6");
    var R_spec_DC_CurrentValue6 = R_spec_DC6.innerHTML;
    var R_spec_DC7 = document.getElementById("spec_DC_valueR7");
    var R_spec_DC_CurrentValue7 = R_spec_DC7.innerHTML;
    var R_spec_DC8 = document.getElementById("spec_DC_valueR8");
    var R_spec_DC_CurrentValue8 = R_spec_DC8.innerHTML;
    var R_spec_DC9 = document.getElementById("spec_DC_valueR9");
    var R_spec_DC_CurrentValue9 = R_spec_DC9.innerHTML;
    var R_spec_DC10 = document.getElementById("spec_DC_valueR10");
    var R_spec_DC_CurrentValue10 = R_spec_DC10.innerHTML;
    var R_spec_DC11 = document.getElementById("spec_DC_valueR11");
    var R_spec_DC_CurrentValue11 = R_spec_DC11.innerHTML;
    var R_spec_DC12 = document.getElementById("spec_DC_valueR12");
    var R_spec_DC_CurrentValue12 = R_spec_DC12.innerHTML;
    var R_spec_DC13 = document.getElementById("spec_DC_valueR13");
    var R_spec_DC_CurrentValue13 = R_spec_DC13.innerHTML;
    var R_spec_DC14 = document.getElementById("spec_DC_valueR14");
    var R_spec_DC_CurrentValue14 = R_spec_DC14.innerHTML;
    var R_spec_DC15 = document.getElementById("spec_DC_valueR15");
    var R_spec_DC_CurrentValue15 = R_spec_DC15.innerHTML;

    var C_spec_DC1 = document.getElementById("spec_DC_valueC1");
    var C_spec_DC_CurrentValue1 = C_spec_DC1.innerHTML;
    var C_spec_DC2 = document.getElementById("spec_DC_valueC2");
    var C_spec_DC_CurrentValue2 = C_spec_DC2.innerHTML;
    var C_spec_DC3 = document.getElementById("spec_DC_valueC3");
    var C_spec_DC_CurrentValue3 = C_spec_DC3.innerHTML;
    var C_spec_DC4 = document.getElementById("spec_DC_valueC4");
    var C_spec_DC_CurrentValue4 = C_spec_DC4.innerHTML;
    var C_spec_DC5 = document.getElementById("spec_DC_valueC5");
    var C_spec_DC_CurrentValue5 = C_spec_DC5.innerHTML;
    var C_spec_DC6 = document.getElementById("spec_DC_valueC6");
    var C_spec_DC_CurrentValue6 = C_spec_DC6.innerHTML;
    var C_spec_DC7 = document.getElementById("spec_DC_valueC7");
    var C_spec_DC_CurrentValue7 = C_spec_DC7.innerHTML;
    var C_spec_DC8 = document.getElementById("spec_DC_valueC8");
    var C_spec_DC_CurrentValue8 = C_spec_DC8.innerHTML;
    var C_spec_DC9 = document.getElementById("spec_DC_valueC9");
    var C_spec_DC_CurrentValue9 = C_spec_DC9.innerHTML;
    var C_spec_DC10 = document.getElementById("spec_DC_valueC10");
    var C_spec_DC_CurrentValue10 = C_spec_DC10.innerHTML;
    var C_spec_DC11 = document.getElementById("spec_DC_valueC11");
    var C_spec_DC_CurrentValue11 = C_spec_DC11.innerHTML;
    var C_spec_DC12 = document.getElementById("spec_DC_valueC12");
    var C_spec_DC_CurrentValue12 = C_spec_DC12.innerHTML;
    var C_spec_DC13 = document.getElementById("spec_DC_valueC13");
    var C_spec_DC_CurrentValue13 = C_spec_DC13.innerHTML;
    var C_spec_DC14 = document.getElementById("spec_DC_valueC14");
    var C_spec_DC_CurrentValue14 = C_spec_DC14.innerHTML;
    var C_spec_DC15 = document.getElementById("spec_DC_valueC15");
    var C_spec_DC_CurrentValue15 = C_spec_DC15.innerHTML;

    var options = [

        "",
        "Digicap",
    ];


    $("#spec_DC_valueP1").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP1").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP1 option[value='" + P_spec_DC_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP2").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP2").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP2 option[value='" + P_spec_DC_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP3").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP3").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP3 option[value='" + P_spec_DC_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP4").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP4").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP4 option[value='" + P_spec_DC_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP5").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP5").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP5 option[value='" + P_spec_DC_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP6").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP6").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP6 option[value='" + P_spec_DC_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP7").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP7").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP7 option[value='" + P_spec_DC_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP8").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP8").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP8 option[value='" + P_spec_DC_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP9").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP9").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP9 option[value='" + P_spec_DC_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP10").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP10").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP10 option[value='" + P_spec_DC_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP11").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP11").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP11 option[value='" + P_spec_DC_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP12").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP12").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP12 option[value='" + P_spec_DC_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP13").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP13").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP13 option[value='" + P_spec_DC_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP14").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP14").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP14 option[value='" + P_spec_DC_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueP15").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueP15").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueP15 option[value='" + P_spec_DC_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM1").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM1").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM1 option[value='" + M_spec_DC_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM2").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM2").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM2 option[value='" + M_spec_DC_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM3").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM3").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM3 option[value='" + M_spec_DC_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM4").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM4").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM4 option[value='" + M_spec_DC_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM5").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM5").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM5 option[value='" + M_spec_DC_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM6").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM6").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM6 option[value='" + M_spec_DC_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM7").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM7").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM7 option[value='" + M_spec_DC_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM8").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM8").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM8 option[value='" + M_spec_DC_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM9").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM9").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM9 option[value='" + M_spec_DC_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM10").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM10").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM10 option[value='" + M_spec_DC_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM11").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM11").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM11 option[value='" + M_spec_DC_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM12").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM12").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM12 option[value='" + M_spec_DC_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM13").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM13").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM13 option[value='" + M_spec_DC_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM14").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM14").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM14 option[value='" + M_spec_DC_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueM15").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueM15").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueM15 option[value='" + M_spec_DC_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR1").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR1").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR1 option[value='" + R_spec_DC_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR2").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR2").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR2 option[value='" + R_spec_DC_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR3").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR3").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR3 option[value='" + R_spec_DC_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR4").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR4").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR4 option[value='" + R_spec_DC_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR5").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR5").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR5 option[value='" + R_spec_DC_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR6").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR6").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR6 option[value='" + R_spec_DC_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR7").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR7").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR7 option[value='" + R_spec_DC_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR8").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR8").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR8 option[value='" + R_spec_DC_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR9").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR9").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR9 option[value='" + R_spec_DC_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR10").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR10").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR10 option[value='" + R_spec_DC_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR11").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR11").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR11 option[value='" + R_spec_DC_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR12").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR12").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR12 option[value='" + R_spec_DC_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR13").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR13").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR13 option[value='" + R_spec_DC_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR14").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR14").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR14 option[value='" + R_spec_DC_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueR15").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueR15").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueR15 option[value='" + R_spec_DC_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC1").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC1").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC1 option[value='" + C_spec_DC_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC2").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC2").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC2 option[value='" + C_spec_DC_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC3").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC3").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC3 option[value='" + C_spec_DC_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC4").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC4").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC4 option[value='" + C_spec_DC_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC5").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC5").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC5 option[value='" + C_spec_DC_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC6").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC6").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC6 option[value='" + C_spec_DC_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC7").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC7").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC7 option[value='" + C_spec_DC_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC8").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC8").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC8 option[value='" + C_spec_DC_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC9").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC9").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC9 option[value='" + C_spec_DC_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC10").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC10").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC10 option[value='" + C_spec_DC_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC11").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC11").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC11 option[value='" + C_spec_DC_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC12").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC12").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC12 option[value='" + C_spec_DC_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC13").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC13").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC13 option[value='" + C_spec_DC_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC14").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC14").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC14 option[value='" + C_spec_DC_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_valueC15").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_valueC15").append($("<option></option>").val(p).html(p));
        $("#spec_DC_valueC15 option[value='" + C_spec_DC_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
});

//Print Type

$(document).ready(function (e) {

    var P_spec_print_type1 = document.getElementById("spec_print_type_valueP1");
    var P_spec_print_type_CurrentValue1 = P_spec_print_type1.innerHTML;
    var P_spec_print_type2 = document.getElementById("spec_print_type_valueP2");
    var P_spec_print_type_CurrentValue2 = P_spec_print_type2.innerHTML;
    var P_spec_print_type3 = document.getElementById("spec_print_type_valueP3");
    var P_spec_print_type_CurrentValue3 = P_spec_print_type3.innerHTML;
    var P_spec_print_type4 = document.getElementById("spec_print_type_valueP4");
    var P_spec_print_type_CurrentValue4 = P_spec_print_type4.innerHTML;
    var P_spec_print_type5 = document.getElementById("spec_print_type_valueP5");
    var P_spec_print_type_CurrentValue5 = P_spec_print_type5.innerHTML;
    var P_spec_print_type6 = document.getElementById("spec_print_type_valueP6");
    var P_spec_print_type_CurrentValue6 = P_spec_print_type6.innerHTML;
    var P_spec_print_type7 = document.getElementById("spec_print_type_valueP7");
    var P_spec_print_type_CurrentValue7 = P_spec_print_type7.innerHTML;
    var P_spec_print_type8 = document.getElementById("spec_print_type_valueP8");
    var P_spec_print_type_CurrentValue8 = P_spec_print_type8.innerHTML;
    var P_spec_print_type9 = document.getElementById("spec_print_type_valueP9");
    var P_spec_print_type_CurrentValue9 = P_spec_print_type9.innerHTML;
    var P_spec_print_type10 = document.getElementById("spec_print_type_valueP10");
    var P_spec_print_type_CurrentValue10 = P_spec_print_type10.innerHTML;
    var P_spec_print_type11 = document.getElementById("spec_print_type_valueP11");
    var P_spec_print_type_CurrentValue11 = P_spec_print_type11.innerHTML;
    var P_spec_print_type12 = document.getElementById("spec_print_type_valueP12");
    var P_spec_print_type_CurrentValue12 = P_spec_print_type12.innerHTML;
    var P_spec_print_type13 = document.getElementById("spec_print_type_valueP13");
    var P_spec_print_type_CurrentValue13 = P_spec_print_type13.innerHTML;
    var P_spec_print_type14 = document.getElementById("spec_print_type_valueP14");
    var P_spec_print_type_CurrentValue14 = P_spec_print_type14.innerHTML;
    var P_spec_print_type15 = document.getElementById("spec_print_type_valueP15");
    var P_spec_print_type_CurrentValue15 = P_spec_print_type15.innerHTML;

    var M_spec_print_type1 = document.getElementById("spec_print_type_valueM1");
    var M_spec_print_type_CurrentValue1 = M_spec_print_type1.innerHTML;
    var M_spec_print_type2 = document.getElementById("spec_print_type_valueM2");
    var M_spec_print_type_CurrentValue2 = M_spec_print_type2.innerHTML;
    var M_spec_print_type3 = document.getElementById("spec_print_type_valueM3");
    var M_spec_print_type_CurrentValue3 = M_spec_print_type3.innerHTML;
    var M_spec_print_type4 = document.getElementById("spec_print_type_valueM4");
    var M_spec_print_type_CurrentValue4 = M_spec_print_type4.innerHTML;
    var M_spec_print_type5 = document.getElementById("spec_print_type_valueM5");
    var M_spec_print_type_CurrentValue5 = M_spec_print_type5.innerHTML;
    var M_spec_print_type6 = document.getElementById("spec_print_type_valueM6");
    var M_spec_print_type_CurrentValue6 = M_spec_print_type6.innerHTML;
    var M_spec_print_type7 = document.getElementById("spec_print_type_valueM7");
    var M_spec_print_type_CurrentValue7 = M_spec_print_type7.innerHTML;
    var M_spec_print_type8 = document.getElementById("spec_print_type_valueM8");
    var M_spec_print_type_CurrentValue8 = M_spec_print_type8.innerHTML;
    var M_spec_print_type9 = document.getElementById("spec_print_type_valueM9");
    var M_spec_print_type_CurrentValue9 = M_spec_print_type9.innerHTML;
    var M_spec_print_type10 = document.getElementById("spec_print_type_valueM10");
    var M_spec_print_type_CurrentValue10 = M_spec_print_type10.innerHTML;
    var M_spec_print_type11 = document.getElementById("spec_print_type_valueM11");
    var M_spec_print_type_CurrentValue11 = M_spec_print_type11.innerHTML;
    var M_spec_print_type12 = document.getElementById("spec_print_type_valueM12");
    var M_spec_print_type_CurrentValue12 = M_spec_print_type12.innerHTML;
    var M_spec_print_type13 = document.getElementById("spec_print_type_valueM13");
    var M_spec_print_type_CurrentValue13 = M_spec_print_type13.innerHTML;
    var M_spec_print_type14 = document.getElementById("spec_print_type_valueM14");
    var M_spec_print_type_CurrentValue14 = M_spec_print_type14.innerHTML;
    var M_spec_print_type15 = document.getElementById("spec_print_type_valueM15");
    var M_spec_print_type_CurrentValue15 = M_spec_print_type15.innerHTML;

    var R_spec_print_type1 = document.getElementById("spec_print_type_valueR1");
    var R_spec_print_type_CurrentValue1 = R_spec_print_type1.innerHTML;
    var R_spec_print_type2 = document.getElementById("spec_print_type_valueR2");
    var R_spec_print_type_CurrentValue2 = R_spec_print_type2.innerHTML;
    var R_spec_print_type3 = document.getElementById("spec_print_type_valueR3");
    var R_spec_print_type_CurrentValue3 = R_spec_print_type3.innerHTML;
    var R_spec_print_type4 = document.getElementById("spec_print_type_valueR4");
    var R_spec_print_type_CurrentValue4 = R_spec_print_type4.innerHTML;
    var R_spec_print_type5 = document.getElementById("spec_print_type_valueR5");
    var R_spec_print_type_CurrentValue5 = R_spec_print_type5.innerHTML;
    var R_spec_print_type6 = document.getElementById("spec_print_type_valueR6");
    var R_spec_print_type_CurrentValue6 = R_spec_print_type6.innerHTML;
    var R_spec_print_type7 = document.getElementById("spec_print_type_valueR7");
    var R_spec_print_type_CurrentValue7 = R_spec_print_type7.innerHTML;
    var R_spec_print_type8 = document.getElementById("spec_print_type_valueR8");
    var R_spec_print_type_CurrentValue8 = R_spec_print_type8.innerHTML;
    var R_spec_print_type9 = document.getElementById("spec_print_type_valueR9");
    var R_spec_print_type_CurrentValue9 = R_spec_print_type9.innerHTML;
    var R_spec_print_type10 = document.getElementById("spec_print_type_valueR10");
    var R_spec_print_type_CurrentValue10 = R_spec_print_type10.innerHTML;
    var R_spec_print_type11 = document.getElementById("spec_print_type_valueR11");
    var R_spec_print_type_CurrentValue11 = R_spec_print_type11.innerHTML;
    var R_spec_print_type12 = document.getElementById("spec_print_type_valueR12");
    var R_spec_print_type_CurrentValue12 = R_spec_print_type12.innerHTML;
    var R_spec_print_type13 = document.getElementById("spec_print_type_valueR13");
    var R_spec_print_type_CurrentValue13 = R_spec_print_type13.innerHTML;
    var R_spec_print_type14 = document.getElementById("spec_print_type_valueR14");
    var R_spec_print_type_CurrentValue14 = R_spec_print_type14.innerHTML;
    var R_spec_print_type15 = document.getElementById("spec_print_type_valueR15");
    var R_spec_print_type_CurrentValue15 = R_spec_print_type15.innerHTML;

    var C_spec_print_type1 = document.getElementById("spec_print_type_valueC1");
    var C_spec_print_type_CurrentValue1 = C_spec_print_type1.innerHTML;
    var C_spec_print_type2 = document.getElementById("spec_print_type_valueC2");
    var C_spec_print_type_CurrentValue2 = C_spec_print_type2.innerHTML;
    var C_spec_print_type3 = document.getElementById("spec_print_type_valueC3");
    var C_spec_print_type_CurrentValue3 = C_spec_print_type3.innerHTML;
    var C_spec_print_type4 = document.getElementById("spec_print_type_valueC4");
    var C_spec_print_type_CurrentValue4 = C_spec_print_type4.innerHTML;
    var C_spec_print_type5 = document.getElementById("spec_print_type_valueC5");
    var C_spec_print_type_CurrentValue5 = C_spec_print_type5.innerHTML;
    var C_spec_print_type6 = document.getElementById("spec_print_type_valueC6");
    var C_spec_print_type_CurrentValue6 = C_spec_print_type6.innerHTML;
    var C_spec_print_type7 = document.getElementById("spec_print_type_valueC7");
    var C_spec_print_type_CurrentValue7 = C_spec_print_type7.innerHTML;
    var C_spec_print_type8 = document.getElementById("spec_print_type_valueC8");
    var C_spec_print_type_CurrentValue8 = C_spec_print_type8.innerHTML;
    var C_spec_print_type9 = document.getElementById("spec_print_type_valueC9");
    var C_spec_print_type_CurrentValue9 = C_spec_print_type9.innerHTML;
    var C_spec_print_type10 = document.getElementById("spec_print_type_valueC10");
    var C_spec_print_type_CurrentValue10 = C_spec_print_type10.innerHTML;
    var C_spec_print_type11 = document.getElementById("spec_print_type_valueC11");
    var C_spec_print_type_CurrentValue11 = C_spec_print_type11.innerHTML;
    var C_spec_print_type12 = document.getElementById("spec_print_type_valueC12");
    var C_spec_print_type_CurrentValue12 = C_spec_print_type12.innerHTML;
    var C_spec_print_type13 = document.getElementById("spec_print_type_valueC13");
    var C_spec_print_type_CurrentValue13 = C_spec_print_type13.innerHTML;
    var C_spec_print_type14 = document.getElementById("spec_print_type_valueC14");
    var C_spec_print_type_CurrentValue14 = C_spec_print_type14.innerHTML;
    var C_spec_print_type15 = document.getElementById("spec_print_type_valueC15");
    var C_spec_print_type_CurrentValue15 = C_spec_print_type15.innerHTML;

    var options = [

        "",
        "awers",
        "rewers",

    ]


    $("#spec_print_type_valueP1").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP1").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP1 option[value='" + P_spec_print_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP2").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP2").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP2 option[value='" + P_spec_print_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP3").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP3").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP3 option[value='" + P_spec_print_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP4").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP4").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP4 option[value='" + P_spec_print_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP5").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP5").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP5 option[value='" + P_spec_print_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP6").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP6").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP6 option[value='" + P_spec_print_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP7").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP7").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP7 option[value='" + P_spec_print_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP8").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP8").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP8 option[value='" + P_spec_print_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP9").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP9").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP9 option[value='" + P_spec_print_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP10").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP10").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP10 option[value='" + P_spec_print_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP11").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP11").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP11 option[value='" + P_spec_print_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP12").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP12").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP12 option[value='" + P_spec_print_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP13").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP13").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP13 option[value='" + P_spec_print_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP14").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP14").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP14 option[value='" + P_spec_print_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueP15").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueP15").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueP15 option[value='" + P_spec_print_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM1").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM1").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM1 option[value='" + M_spec_print_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM2").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM2").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM2 option[value='" + M_spec_print_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM3").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM3").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM3 option[value='" + M_spec_print_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM4").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM4").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM4 option[value='" + M_spec_print_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM5").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM5").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM5 option[value='" + M_spec_print_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM6").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM6").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM6 option[value='" + M_spec_print_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM7").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM7").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM7 option[value='" + M_spec_print_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM8").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM8").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM8 option[value='" + M_spec_print_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM9").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM9").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM9 option[value='" + M_spec_print_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM10").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM10").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM10 option[value='" + M_spec_print_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM11").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM11").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM11 option[value='" + M_spec_print_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM12").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM12").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM12 option[value='" + M_spec_print_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM13").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM13").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM13 option[value='" + M_spec_print_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM14").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM14").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM14 option[value='" + M_spec_print_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueM15").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueM15").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueM15 option[value='" + M_spec_print_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR1").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR1").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR1 option[value='" + R_spec_print_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR2").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR2").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR2 option[value='" + R_spec_print_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR3").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR3").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR3 option[value='" + R_spec_print_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR4").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR4").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR4 option[value='" + R_spec_print_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR5").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR5").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR5 option[value='" + R_spec_print_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR6").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR6").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR6 option[value='" + R_spec_print_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR7").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR7").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR7 option[value='" + R_spec_print_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR8").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR8").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR8 option[value='" + R_spec_print_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR9").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR9").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR9 option[value='" + R_spec_print_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR10").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR10").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR10 option[value='" + R_spec_print_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR11").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR11").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR11 option[value='" + R_spec_print_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR12").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR12").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR12 option[value='" + R_spec_print_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR13").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR13").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR13 option[value='" + R_spec_print_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR14").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR14").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR14 option[value='" + R_spec_print_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueR15").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueR15").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueR15 option[value='" + R_spec_print_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC1").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC1").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC1 option[value='" + C_spec_print_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC2").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC2").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC2 option[value='" + C_spec_print_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC3").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC3").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC3 option[value='" + C_spec_print_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC4").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC4").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC4 option[value='" + C_spec_print_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC5").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC5").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC5 option[value='" + C_spec_print_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC6").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC6").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC6 option[value='" + C_spec_print_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC7").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC7").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC7 option[value='" + C_spec_print_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC8").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC8").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC8 option[value='" + C_spec_print_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC9").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC9").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC9 option[value='" + C_spec_print_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC10").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC10").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC10 option[value='" + C_spec_print_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC11").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC11").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC11 option[value='" + C_spec_print_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC12").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC12").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC12 option[value='" + C_spec_print_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC13").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC13").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC13 option[value='" + C_spec_print_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC14").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC14").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC14 option[value='" + C_spec_print_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_valueC15").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_valueC15").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_valueC15 option[value='" + C_spec_print_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
});

//Raster

$(document).ready(function (e) {

    var P_spec_raster_type1 = document.getElementById("spec_raster_type_valueP1");
    var P_spec_raster_type_CurrentValue1 = P_spec_raster_type1.innerHTML;
    var P_spec_raster_type2 = document.getElementById("spec_raster_type_valueP2");
    var P_spec_raster_type_CurrentValue2 = P_spec_raster_type2.innerHTML;
    var P_spec_raster_type3 = document.getElementById("spec_raster_type_valueP3");
    var P_spec_raster_type_CurrentValue3 = P_spec_raster_type3.innerHTML;
    var P_spec_raster_type4 = document.getElementById("spec_raster_type_valueP4");
    var P_spec_raster_type_CurrentValue4 = P_spec_raster_type4.innerHTML;
    var P_spec_raster_type5 = document.getElementById("spec_raster_type_valueP5");
    var P_spec_raster_type_CurrentValue5 = P_spec_raster_type5.innerHTML;
    var P_spec_raster_type6 = document.getElementById("spec_raster_type_valueP6");
    var P_spec_raster_type_CurrentValue6 = P_spec_raster_type6.innerHTML;
    var P_spec_raster_type7 = document.getElementById("spec_raster_type_valueP7");
    var P_spec_raster_type_CurrentValue7 = P_spec_raster_type7.innerHTML;
    var P_spec_raster_type8 = document.getElementById("spec_raster_type_valueP8");
    var P_spec_raster_type_CurrentValue8 = P_spec_raster_type8.innerHTML;
    var P_spec_raster_type9 = document.getElementById("spec_raster_type_valueP9");
    var P_spec_raster_type_CurrentValue9 = P_spec_raster_type9.innerHTML;
    var P_spec_raster_type10 = document.getElementById("spec_raster_type_valueP10");
    var P_spec_raster_type_CurrentValue10 = P_spec_raster_type10.innerHTML;
    var P_spec_raster_type11 = document.getElementById("spec_raster_type_valueP11");
    var P_spec_raster_type_CurrentValue11 = P_spec_raster_type11.innerHTML;
    var P_spec_raster_type12 = document.getElementById("spec_raster_type_valueP12");
    var P_spec_raster_type_CurrentValue12 = P_spec_raster_type12.innerHTML;
    var P_spec_raster_type13 = document.getElementById("spec_raster_type_valueP13");
    var P_spec_raster_type_CurrentValue13 = P_spec_raster_type13.innerHTML;
    var P_spec_raster_type14 = document.getElementById("spec_raster_type_valueP14");
    var P_spec_raster_type_CurrentValue14 = P_spec_raster_type14.innerHTML;
    var P_spec_raster_type15 = document.getElementById("spec_raster_type_valueP15");
    var P_spec_raster_type_CurrentValue15 = P_spec_raster_type15.innerHTML;

    var M_spec_raster_type1 = document.getElementById("spec_raster_type_valueM1");
    var M_spec_raster_type_CurrentValue1 = M_spec_raster_type1.innerHTML;
    var M_spec_raster_type2 = document.getElementById("spec_raster_type_valueM2");
    var M_spec_raster_type_CurrentValue2 = M_spec_raster_type2.innerHTML;
    var M_spec_raster_type3 = document.getElementById("spec_raster_type_valueM3");
    var M_spec_raster_type_CurrentValue3 = M_spec_raster_type3.innerHTML;
    var M_spec_raster_type4 = document.getElementById("spec_raster_type_valueM4");
    var M_spec_raster_type_CurrentValue4 = M_spec_raster_type4.innerHTML;
    var M_spec_raster_type5 = document.getElementById("spec_raster_type_valueM5");
    var M_spec_raster_type_CurrentValue5 = M_spec_raster_type5.innerHTML;
    var M_spec_raster_type6 = document.getElementById("spec_raster_type_valueM6");
    var M_spec_raster_type_CurrentValue6 = M_spec_raster_type6.innerHTML;
    var M_spec_raster_type7 = document.getElementById("spec_raster_type_valueM7");
    var M_spec_raster_type_CurrentValue7 = M_spec_raster_type7.innerHTML;
    var M_spec_raster_type8 = document.getElementById("spec_raster_type_valueM8");
    var M_spec_raster_type_CurrentValue8 = M_spec_raster_type8.innerHTML;
    var M_spec_raster_type9 = document.getElementById("spec_raster_type_valueM9");
    var M_spec_raster_type_CurrentValue9 = M_spec_raster_type9.innerHTML;
    var M_spec_raster_type10 = document.getElementById("spec_raster_type_valueM10");
    var M_spec_raster_type_CurrentValue10 = M_spec_raster_type10.innerHTML;
    var M_spec_raster_type11 = document.getElementById("spec_raster_type_valueM11");
    var M_spec_raster_type_CurrentValue11 = M_spec_raster_type11.innerHTML;
    var M_spec_raster_type12 = document.getElementById("spec_raster_type_valueM12");
    var M_spec_raster_type_CurrentValue12 = M_spec_raster_type12.innerHTML;
    var M_spec_raster_type13 = document.getElementById("spec_raster_type_valueM13");
    var M_spec_raster_type_CurrentValue13 = M_spec_raster_type13.innerHTML;
    var M_spec_raster_type14 = document.getElementById("spec_raster_type_valueM14");
    var M_spec_raster_type_CurrentValue14 = M_spec_raster_type14.innerHTML;
    var M_spec_raster_type15 = document.getElementById("spec_raster_type_valueM15");
    var M_spec_raster_type_CurrentValue15 = M_spec_raster_type15.innerHTML;

    var R_spec_raster_type1 = document.getElementById("spec_raster_type_valueR1");
    var R_spec_raster_type_CurrentValue1 = R_spec_raster_type1.innerHTML;
    var R_spec_raster_type2 = document.getElementById("spec_raster_type_valueR2");
    var R_spec_raster_type_CurrentValue2 = R_spec_raster_type2.innerHTML;
    var R_spec_raster_type3 = document.getElementById("spec_raster_type_valueR3");
    var R_spec_raster_type_CurrentValue3 = R_spec_raster_type3.innerHTML;
    var R_spec_raster_type4 = document.getElementById("spec_raster_type_valueR4");
    var R_spec_raster_type_CurrentValue4 = R_spec_raster_type4.innerHTML;
    var R_spec_raster_type5 = document.getElementById("spec_raster_type_valueR5");
    var R_spec_raster_type_CurrentValue5 = R_spec_raster_type5.innerHTML;
    var R_spec_raster_type6 = document.getElementById("spec_raster_type_valueR6");
    var R_spec_raster_type_CurrentValue6 = R_spec_raster_type6.innerHTML;
    var R_spec_raster_type7 = document.getElementById("spec_raster_type_valueR7");
    var R_spec_raster_type_CurrentValue7 = R_spec_raster_type7.innerHTML;
    var R_spec_raster_type8 = document.getElementById("spec_raster_type_valueR8");
    var R_spec_raster_type_CurrentValue8 = R_spec_raster_type8.innerHTML;
    var R_spec_raster_type9 = document.getElementById("spec_raster_type_valueR9");
    var R_spec_raster_type_CurrentValue9 = R_spec_raster_type9.innerHTML;
    var R_spec_raster_type10 = document.getElementById("spec_raster_type_valueR10");
    var R_spec_raster_type_CurrentValue10 = R_spec_raster_type10.innerHTML;
    var R_spec_raster_type11 = document.getElementById("spec_raster_type_valueR11");
    var R_spec_raster_type_CurrentValue11 = R_spec_raster_type11.innerHTML;
    var R_spec_raster_type12 = document.getElementById("spec_raster_type_valueR12");
    var R_spec_raster_type_CurrentValue12 = R_spec_raster_type12.innerHTML;
    var R_spec_raster_type13 = document.getElementById("spec_raster_type_valueR13");
    var R_spec_raster_type_CurrentValue13 = R_spec_raster_type13.innerHTML;
    var R_spec_raster_type14 = document.getElementById("spec_raster_type_valueR14");
    var R_spec_raster_type_CurrentValue14 = R_spec_raster_type14.innerHTML;
    var R_spec_raster_type15 = document.getElementById("spec_raster_type_valueR15");
    var R_spec_raster_type_CurrentValue15 = R_spec_raster_type15.innerHTML;

    var C_spec_raster_type1 = document.getElementById("spec_raster_type_valueC1");
    var C_spec_raster_type_CurrentValue1 = C_spec_raster_type1.innerHTML;
    var C_spec_raster_type2 = document.getElementById("spec_raster_type_valueC2");
    var C_spec_raster_type_CurrentValue2 = C_spec_raster_type2.innerHTML;
    var C_spec_raster_type3 = document.getElementById("spec_raster_type_valueC3");
    var C_spec_raster_type_CurrentValue3 = C_spec_raster_type3.innerHTML;
    var C_spec_raster_type4 = document.getElementById("spec_raster_type_valueC4");
    var C_spec_raster_type_CurrentValue4 = C_spec_raster_type4.innerHTML;
    var C_spec_raster_type5 = document.getElementById("spec_raster_type_valueC5");
    var C_spec_raster_type_CurrentValue5 = C_spec_raster_type5.innerHTML;
    var C_spec_raster_type6 = document.getElementById("spec_raster_type_valueC6");
    var C_spec_raster_type_CurrentValue6 = C_spec_raster_type6.innerHTML;
    var C_spec_raster_type7 = document.getElementById("spec_raster_type_valueC7");
    var C_spec_raster_type_CurrentValue7 = C_spec_raster_type7.innerHTML;
    var C_spec_raster_type8 = document.getElementById("spec_raster_type_valueC8");
    var C_spec_raster_type_CurrentValue8 = C_spec_raster_type8.innerHTML;
    var C_spec_raster_type9 = document.getElementById("spec_raster_type_valueC9");
    var C_spec_raster_type_CurrentValue9 = C_spec_raster_type9.innerHTML;
    var C_spec_raster_type10 = document.getElementById("spec_raster_type_valueC10");
    var C_spec_raster_type_CurrentValue10 = C_spec_raster_type10.innerHTML;
    var C_spec_raster_type11 = document.getElementById("spec_raster_type_valueC11");
    var C_spec_raster_type_CurrentValue11 = C_spec_raster_type11.innerHTML;
    var C_spec_raster_type12 = document.getElementById("spec_raster_type_valueC12");
    var C_spec_raster_type_CurrentValue12 = C_spec_raster_type12.innerHTML;
    var C_spec_raster_type13 = document.getElementById("spec_raster_type_valueC13");
    var C_spec_raster_type_CurrentValue13 = C_spec_raster_type13.innerHTML;
    var C_spec_raster_type14 = document.getElementById("spec_raster_type_valueC14");
    var C_spec_raster_type_CurrentValue14 = C_spec_raster_type14.innerHTML;
    var C_spec_raster_type15 = document.getElementById("spec_raster_type_valueC15");
    var C_spec_raster_type_CurrentValue15 = C_spec_raster_type15.innerHTML;

    var options = [

        "",
        "AM",
        "SX",

    ];

    $("#spec_raster_type_valueP1").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP1").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP1 option[value='" + P_spec_raster_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP2").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP2").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP2 option[value='" + P_spec_raster_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP3").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP3").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP3 option[value='" + P_spec_raster_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP4").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP4").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP4 option[value='" + P_spec_raster_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP5").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP5").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP5 option[value='" + P_spec_raster_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP6").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP6").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP6 option[value='" + P_spec_raster_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP7").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP7").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP7 option[value='" + P_spec_raster_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP8").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP8").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP8 option[value='" + P_spec_raster_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP9").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP9").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP9 option[value='" + P_spec_raster_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP10").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP10").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP10 option[value='" + P_spec_raster_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP11").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP11").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP11 option[value='" + P_spec_raster_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP12").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP12").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP12 option[value='" + P_spec_raster_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP13").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP13").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP13 option[value='" + P_spec_raster_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP14").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP14").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP14 option[value='" + P_spec_raster_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueP15").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueP15").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueP15 option[value='" + P_spec_raster_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM1").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM1").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM1 option[value='" + M_spec_raster_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM2").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM2").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM2 option[value='" + M_spec_raster_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM3").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM3").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM3 option[value='" + M_spec_raster_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM4").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM4").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM4 option[value='" + M_spec_raster_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM5").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM5").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM5 option[value='" + M_spec_raster_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM6").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM6").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM6 option[value='" + M_spec_raster_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM7").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM7").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM7 option[value='" + M_spec_raster_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM8").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM8").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM8 option[value='" + M_spec_raster_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM9").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM9").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM9 option[value='" + M_spec_raster_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM10").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM10").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM10 option[value='" + M_spec_raster_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM11").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM11").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM11 option[value='" + M_spec_raster_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM12").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM12").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM12 option[value='" + M_spec_raster_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM13").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM13").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM13 option[value='" + M_spec_raster_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM14").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM14").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM14 option[value='" + M_spec_raster_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueM15").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueM15").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueM15 option[value='" + M_spec_raster_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR1").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR1").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR1 option[value='" + R_spec_raster_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR2").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR2").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR2 option[value='" + R_spec_raster_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR3").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR3").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR3 option[value='" + R_spec_raster_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR4").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR4").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR4 option[value='" + R_spec_raster_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR5").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR5").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR5 option[value='" + R_spec_raster_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR6").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR6").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR6 option[value='" + R_spec_raster_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR7").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR7").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR7 option[value='" + R_spec_raster_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR8").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR8").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR8 option[value='" + R_spec_raster_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR9").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR9").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR9 option[value='" + R_spec_raster_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR10").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR10").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR10 option[value='" + R_spec_raster_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR11").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR11").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR11 option[value='" + R_spec_raster_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR12").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR12").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR12 option[value='" + R_spec_raster_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR13").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR13").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR13 option[value='" + R_spec_raster_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR14").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR14").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR14 option[value='" + R_spec_raster_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueR15").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueR15").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueR15 option[value='" + R_spec_raster_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC1").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC1").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC1 option[value='" + C_spec_raster_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC2").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC2").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC2 option[value='" + C_spec_raster_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC3").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC3").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC3 option[value='" + C_spec_raster_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC4").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC4").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC4 option[value='" + C_spec_raster_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC5").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC5").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC5 option[value='" + C_spec_raster_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC6").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC6").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC6 option[value='" + C_spec_raster_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC7").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC7").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC7 option[value='" + C_spec_raster_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC8").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC8").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC8 option[value='" + C_spec_raster_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC9").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC9").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC9 option[value='" + C_spec_raster_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC10").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC10").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC10 option[value='" + C_spec_raster_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC11").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC11").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC11 option[value='" + C_spec_raster_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC12").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC12").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC12 option[value='" + C_spec_raster_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC13").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC13").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC13 option[value='" + C_spec_raster_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC14").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC14").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC14 option[value='" + C_spec_raster_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_valueC15").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_valueC15").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_valueC15 option[value='" + C_spec_raster_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
});


//Plates Type

$(document).ready(function (e) {

    var P_spec_plates_type1 = document.getElementById("spec_plates_type_valueP1");
    var P_spec_plates_type_CurrentValue1 = P_spec_plates_type1.innerHTML;
    var P_spec_plates_type2 = document.getElementById("spec_plates_type_valueP2");
    var P_spec_plates_type_CurrentValue2 = P_spec_plates_type2.innerHTML;
    var P_spec_plates_type3 = document.getElementById("spec_plates_type_valueP3");
    var P_spec_plates_type_CurrentValue3 = P_spec_plates_type3.innerHTML;
    var P_spec_plates_type4 = document.getElementById("spec_plates_type_valueP4");
    var P_spec_plates_type_CurrentValue4 = P_spec_plates_type4.innerHTML;
    var P_spec_plates_type5 = document.getElementById("spec_plates_type_valueP5");
    var P_spec_plates_type_CurrentValue5 = P_spec_plates_type5.innerHTML;
    var P_spec_plates_type6 = document.getElementById("spec_plates_type_valueP6");
    var P_spec_plates_type_CurrentValue6 = P_spec_plates_type6.innerHTML;
    var P_spec_plates_type7 = document.getElementById("spec_plates_type_valueP7");
    var P_spec_plates_type_CurrentValue7 = P_spec_plates_type7.innerHTML;
    var P_spec_plates_type8 = document.getElementById("spec_plates_type_valueP8");
    var P_spec_plates_type_CurrentValue8 = P_spec_plates_type8.innerHTML;
    var P_spec_plates_type9 = document.getElementById("spec_plates_type_valueP9");
    var P_spec_plates_type_CurrentValue9 = P_spec_plates_type9.innerHTML;
    var P_spec_plates_type10 = document.getElementById("spec_plates_type_valueP10");
    var P_spec_plates_type_CurrentValue10 = P_spec_plates_type10.innerHTML;
    var P_spec_plates_type11 = document.getElementById("spec_plates_type_valueP11");
    var P_spec_plates_type_CurrentValue11 = P_spec_plates_type11.innerHTML;
    var P_spec_plates_type12 = document.getElementById("spec_plates_type_valueP12");
    var P_spec_plates_type_CurrentValue12 = P_spec_plates_type12.innerHTML;
    var P_spec_plates_type13 = document.getElementById("spec_plates_type_valueP13");
    var P_spec_plates_type_CurrentValue13 = P_spec_plates_type13.innerHTML;
    var P_spec_plates_type14 = document.getElementById("spec_plates_type_valueP14");
    var P_spec_plates_type_CurrentValue14 = P_spec_plates_type14.innerHTML;
    var P_spec_plates_type15 = document.getElementById("spec_plates_type_valueP15");
    var P_spec_plates_type_CurrentValue15 = P_spec_plates_type15.innerHTML;

    var M_spec_plates_type1 = document.getElementById("spec_plates_type_valueM1");
    var M_spec_plates_type_CurrentValue1 = M_spec_plates_type1.innerHTML;
    var M_spec_plates_type2 = document.getElementById("spec_plates_type_valueM2");
    var M_spec_plates_type_CurrentValue2 = M_spec_plates_type2.innerHTML;
    var M_spec_plates_type3 = document.getElementById("spec_plates_type_valueM3");
    var M_spec_plates_type_CurrentValue3 = M_spec_plates_type3.innerHTML;
    var M_spec_plates_type4 = document.getElementById("spec_plates_type_valueM4");
    var M_spec_plates_type_CurrentValue4 = M_spec_plates_type4.innerHTML;
    var M_spec_plates_type5 = document.getElementById("spec_plates_type_valueM5");
    var M_spec_plates_type_CurrentValue5 = M_spec_plates_type5.innerHTML;
    var M_spec_plates_type6 = document.getElementById("spec_plates_type_valueM6");
    var M_spec_plates_type_CurrentValue6 = M_spec_plates_type6.innerHTML;
    var M_spec_plates_type7 = document.getElementById("spec_plates_type_valueM7");
    var M_spec_plates_type_CurrentValue7 = M_spec_plates_type7.innerHTML;
    var M_spec_plates_type8 = document.getElementById("spec_plates_type_valueM8");
    var M_spec_plates_type_CurrentValue8 = M_spec_plates_type8.innerHTML;
    var M_spec_plates_type9 = document.getElementById("spec_plates_type_valueM9");
    var M_spec_plates_type_CurrentValue9 = M_spec_plates_type9.innerHTML;
    var M_spec_plates_type10 = document.getElementById("spec_plates_type_valueM10");
    var M_spec_plates_type_CurrentValue10 = M_spec_plates_type10.innerHTML;
    var M_spec_plates_type11 = document.getElementById("spec_plates_type_valueM11");
    var M_spec_plates_type_CurrentValue11 = M_spec_plates_type11.innerHTML;
    var M_spec_plates_type12 = document.getElementById("spec_plates_type_valueM12");
    var M_spec_plates_type_CurrentValue12 = M_spec_plates_type12.innerHTML;
    var M_spec_plates_type13 = document.getElementById("spec_plates_type_valueM13");
    var M_spec_plates_type_CurrentValue13 = M_spec_plates_type13.innerHTML;
    var M_spec_plates_type14 = document.getElementById("spec_plates_type_valueM14");
    var M_spec_plates_type_CurrentValue14 = M_spec_plates_type14.innerHTML;
    var M_spec_plates_type15 = document.getElementById("spec_plates_type_valueM15");
    var M_spec_plates_type_CurrentValue15 = M_spec_plates_type15.innerHTML;

    var R_spec_plates_type1 = document.getElementById("spec_plates_type_valueR1");
    var R_spec_plates_type_CurrentValue1 = R_spec_plates_type1.innerHTML;
    var R_spec_plates_type2 = document.getElementById("spec_plates_type_valueR2");
    var R_spec_plates_type_CurrentValue2 = R_spec_plates_type2.innerHTML;
    var R_spec_plates_type3 = document.getElementById("spec_plates_type_valueR3");
    var R_spec_plates_type_CurrentValue3 = R_spec_plates_type3.innerHTML;
    var R_spec_plates_type4 = document.getElementById("spec_plates_type_valueR4");
    var R_spec_plates_type_CurrentValue4 = R_spec_plates_type4.innerHTML;
    var R_spec_plates_type5 = document.getElementById("spec_plates_type_valueR5");
    var R_spec_plates_type_CurrentValue5 = R_spec_plates_type5.innerHTML;
    var R_spec_plates_type6 = document.getElementById("spec_plates_type_valueR6");
    var R_spec_plates_type_CurrentValue6 = R_spec_plates_type6.innerHTML;
    var R_spec_plates_type7 = document.getElementById("spec_plates_type_valueR7");
    var R_spec_plates_type_CurrentValue7 = R_spec_plates_type7.innerHTML;
    var R_spec_plates_type8 = document.getElementById("spec_plates_type_valueR8");
    var R_spec_plates_type_CurrentValue8 = R_spec_plates_type8.innerHTML;
    var R_spec_plates_type9 = document.getElementById("spec_plates_type_valueR9");
    var R_spec_plates_type_CurrentValue9 = R_spec_plates_type9.innerHTML;
    var R_spec_plates_type10 = document.getElementById("spec_plates_type_valueR10");
    var R_spec_plates_type_CurrentValue10 = R_spec_plates_type10.innerHTML;
    var R_spec_plates_type11 = document.getElementById("spec_plates_type_valueR11");
    var R_spec_plates_type_CurrentValue11 = R_spec_plates_type11.innerHTML;
    var R_spec_plates_type12 = document.getElementById("spec_plates_type_valueR12");
    var R_spec_plates_type_CurrentValue12 = R_spec_plates_type12.innerHTML;
    var R_spec_plates_type13 = document.getElementById("spec_plates_type_valueR13");
    var R_spec_plates_type_CurrentValue13 = R_spec_plates_type13.innerHTML;
    var R_spec_plates_type14 = document.getElementById("spec_plates_type_valueR14");
    var R_spec_plates_type_CurrentValue14 = R_spec_plates_type14.innerHTML;
    var R_spec_plates_type15 = document.getElementById("spec_plates_type_valueR15");
    var R_spec_plates_type_CurrentValue15 = R_spec_plates_type15.innerHTML;

    var C_spec_plates_type1 = document.getElementById("spec_plates_type_valueC1");
    var C_spec_plates_type_CurrentValue1 = C_spec_plates_type1.innerHTML;
    var C_spec_plates_type2 = document.getElementById("spec_plates_type_valueC2");
    var C_spec_plates_type_CurrentValue2 = C_spec_plates_type2.innerHTML;
    var C_spec_plates_type3 = document.getElementById("spec_plates_type_valueC3");
    var C_spec_plates_type_CurrentValue3 = C_spec_plates_type3.innerHTML;
    var C_spec_plates_type4 = document.getElementById("spec_plates_type_valueC4");
    var C_spec_plates_type_CurrentValue4 = C_spec_plates_type4.innerHTML;
    var C_spec_plates_type5 = document.getElementById("spec_plates_type_valueC5");
    var C_spec_plates_type_CurrentValue5 = C_spec_plates_type5.innerHTML;
    var C_spec_plates_type6 = document.getElementById("spec_plates_type_valueC6");
    var C_spec_plates_type_CurrentValue6 = C_spec_plates_type6.innerHTML;
    var C_spec_plates_type7 = document.getElementById("spec_plates_type_valueC7");
    var C_spec_plates_type_CurrentValue7 = C_spec_plates_type7.innerHTML;
    var C_spec_plates_type8 = document.getElementById("spec_plates_type_valueC8");
    var C_spec_plates_type_CurrentValue8 = C_spec_plates_type8.innerHTML;
    var C_spec_plates_type9 = document.getElementById("spec_plates_type_valueC9");
    var C_spec_plates_type_CurrentValue9 = C_spec_plates_type9.innerHTML;
    var C_spec_plates_type10 = document.getElementById("spec_plates_type_valueC10");
    var C_spec_plates_type_CurrentValue10 = C_spec_plates_type10.innerHTML;
    var C_spec_plates_type11 = document.getElementById("spec_plates_type_valueC11");
    var C_spec_plates_type_CurrentValue11 = C_spec_plates_type11.innerHTML;
    var C_spec_plates_type12 = document.getElementById("spec_plates_type_valueC12");
    var C_spec_plates_type_CurrentValue12 = C_spec_plates_type12.innerHTML;
    var C_spec_plates_type13 = document.getElementById("spec_plates_type_valueC13");
    var C_spec_plates_type_CurrentValue13 = C_spec_plates_type13.innerHTML;
    var C_spec_plates_type14 = document.getElementById("spec_plates_type_valueC14");
    var C_spec_plates_type_CurrentValue14 = C_spec_plates_type14.innerHTML;
    var C_spec_plates_type15 = document.getElementById("spec_plates_type_valueC15");
    var C_spec_plates_type_CurrentValue15 = C_spec_plates_type15.innerHTML;

    var options = [

        "",
        "NXH 1.14",
        "NXH 1.7",

    ];

    $("#spec_plates_type_valueP1").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP1").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP1 option[value='" + P_spec_plates_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP2").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP2").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP2 option[value='" + P_spec_plates_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP3").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP3").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP3 option[value='" + P_spec_plates_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP4").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP4").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP4 option[value='" + P_spec_plates_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP5").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP5").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP5 option[value='" + P_spec_plates_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP6").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP6").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP6 option[value='" + P_spec_plates_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP7").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP7").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP7 option[value='" + P_spec_plates_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP8").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP8").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP8 option[value='" + P_spec_plates_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP9").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP9").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP9 option[value='" + P_spec_plates_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP10").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP10").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP10 option[value='" + P_spec_plates_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP11").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP11").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP11 option[value='" + P_spec_plates_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP12").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP12").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP12 option[value='" + P_spec_plates_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP13").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP13").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP13 option[value='" + P_spec_plates_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP14").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP14").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP14 option[value='" + P_spec_plates_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueP15").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueP15").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueP15 option[value='" + P_spec_plates_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM1").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM1").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM1 option[value='" + M_spec_plates_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM2").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM2").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM2 option[value='" + M_spec_plates_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM3").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM3").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM3 option[value='" + M_spec_plates_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM4").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM4").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM4 option[value='" + M_spec_plates_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM5").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM5").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM5 option[value='" + M_spec_plates_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM6").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM6").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM6 option[value='" + M_spec_plates_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM7").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM7").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM7 option[value='" + M_spec_plates_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM8").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM8").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM8 option[value='" + M_spec_plates_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM9").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM9").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM9 option[value='" + M_spec_plates_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM10").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM10").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM10 option[value='" + M_spec_plates_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM11").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM11").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM11 option[value='" + M_spec_plates_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM12").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM12").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM12 option[value='" + M_spec_plates_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM13").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM13").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM13 option[value='" + M_spec_plates_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM14").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM14").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM14 option[value='" + M_spec_plates_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueM15").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueM15").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueM15 option[value='" + M_spec_plates_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR1").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR1").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR1 option[value='" + R_spec_plates_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR2").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR2").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR2 option[value='" + R_spec_plates_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR3").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR3").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR3 option[value='" + R_spec_plates_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR4").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR4").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR4 option[value='" + R_spec_plates_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR5").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR5").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR5 option[value='" + R_spec_plates_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR6").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR6").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR6 option[value='" + R_spec_plates_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR7").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR7").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR7 option[value='" + R_spec_plates_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR8").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR8").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR8 option[value='" + R_spec_plates_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR9").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR9").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR9 option[value='" + R_spec_plates_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR10").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR10").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR10 option[value='" + R_spec_plates_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR11").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR11").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR11 option[value='" + R_spec_plates_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR12").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR12").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR12 option[value='" + R_spec_plates_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR13").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR13").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR13 option[value='" + R_spec_plates_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR14").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR14").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR14 option[value='" + R_spec_plates_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueR15").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueR15").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueR15 option[value='" + R_spec_plates_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC1").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC1").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC1 option[value='" + C_spec_plates_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC2").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC2").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC2 option[value='" + C_spec_plates_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC3").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC3").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC3 option[value='" + C_spec_plates_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC4").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC4").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC4 option[value='" + C_spec_plates_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC5").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC5").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC5 option[value='" + C_spec_plates_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC6").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC6").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC6 option[value='" + C_spec_plates_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC7").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC7").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC7 option[value='" + C_spec_plates_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC8").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC8").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC8 option[value='" + C_spec_plates_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC9").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC9").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC9 option[value='" + C_spec_plates_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC10").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC10").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC10 option[value='" + C_spec_plates_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC11").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC11").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC11 option[value='" + C_spec_plates_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC12").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC12").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC12 option[value='" + C_spec_plates_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC13").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC13").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC13 option[value='" + C_spec_plates_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC14").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC14").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC14 option[value='" + C_spec_plates_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_valueC15").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_valueC15").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_valueC15 option[value='" + C_spec_plates_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
});

//Yes or No acivators

$(document).ready(function (e) {

    var yes_or_no = document.getElementById("yes_or_no_value");
    var yes_or_no_CurrentValue = yes_or_no.innerHTML;
    var yes_or_no1 = document.getElementById("yes_or_no_value1");
    var yes_or_no_CurrentValue1 = yes_or_no1.innerHTML;
    var yes_or_no2 = document.getElementById("yes_or_no_value2");
    var yes_or_no_CurrentValue2 = yes_or_no2.innerHTML;
    var yes_or_no3 = document.getElementById("yes_or_no_value3");
    var yes_or_no_CurrentValue3 = yes_or_no3.innerHTML;

    var options = [

        "",
        "Tak",
        "Nie",
    ];

    $("#yes_or_no_value").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value option[value='" + yes_or_no_CurrentValue + "']")
            .attr("selected", "selected");
            $("#yes_or_no_value").prop("required", true);
    });
    $("#yes_or_no_value1").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value1").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value1 option[value='" + yes_or_no_CurrentValue1 + "']")
            .attr("selected", "selected");
            $("#yes_or_no_value1").prop("required", true);
    });
    $("#yes_or_no_value2").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value2").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value2 option[value='" + yes_or_no_CurrentValue2 + "']")
            .attr("selected", "selected");
            $("#yes_or_no_value2").prop("required", true);
    });
    $("#yes_or_no_value3").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value3").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value3 option[value='" + yes_or_no_CurrentValue3 + "']")
            .attr("selected", "selected");
            $("#yes_or_no_value3").prop("required", true);
    });
});


