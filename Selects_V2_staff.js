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
    var clientPrintCoordinator4 = document.getElementById("client_print_coordinator_value4");
    var clientPrintCoordinator_CurrentValue4 = clientPrintCoordinator4.innerHTML;

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
    $("#client_print_coordinator_value4").empty();
    $.each(options, function (i, p) {
        $("#client_print_coordinator_value4").append($("<option></option>").val(p).html(p));
        $("#client_print_coordinator_value4 option[value='" + clientPrintCoordinator_CurrentValue4 + "']")
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

    var spec_screen_rulling1 = document.getElementById("spec_screen_rulling_value1");
    var spec_screen_rulling_CurrentValue1 = spec_screen_rulling1.innerHTML;
    var spec_screen_rulling2 = document.getElementById("spec_screen_rulling_value2");
    var spec_screen_rulling_CurrentValue2 = spec_screen_rulling2.innerHTML;
    var spec_screen_rulling3 = document.getElementById("spec_screen_rulling_value3");
    var spec_screen_rulling_CurrentValue3 = spec_screen_rulling3.innerHTML;
    var spec_screen_rulling4 = document.getElementById("spec_screen_rulling_value4");
    var spec_screen_rulling_CurrentValue4 = spec_screen_rulling4.innerHTML;
    var spec_screen_rulling5 = document.getElementById("spec_screen_rulling_value5");
    var spec_screen_rulling_CurrentValue5 = spec_screen_rulling5.innerHTML;
    var spec_screen_rulling6 = document.getElementById("spec_screen_rulling_value6");
    var spec_screen_rulling_CurrentValue6 = spec_screen_rulling6.innerHTML;
    var spec_screen_rulling7 = document.getElementById("spec_screen_rulling_value7");
    var spec_screen_rulling_CurrentValue7 = spec_screen_rulling7.innerHTML;
    var spec_screen_rulling8 = document.getElementById("spec_screen_rulling_value8");
    var spec_screen_rulling_CurrentValue8 = spec_screen_rulling8.innerHTML;
    var spec_screen_rulling9 = document.getElementById("spec_screen_rulling_value9");
    var spec_screen_rulling_CurrentValue9 = spec_screen_rulling9.innerHTML;
    var spec_screen_rulling10 = document.getElementById("spec_screen_rulling_value10");
    var spec_screen_rulling_CurrentValue10 = spec_screen_rulling10.innerHTML;
    var spec_screen_rulling11 = document.getElementById("spec_screen_rulling_value11");
    var spec_screen_rulling_CurrentValue11 = spec_screen_rulling11.innerHTML;
    var spec_screen_rulling12 = document.getElementById("spec_screen_rulling_value12");
    var spec_screen_rulling_CurrentValue12 = spec_screen_rulling12.innerHTML;
    var spec_screen_rulling13 = document.getElementById("spec_screen_rulling_value13");
    var spec_screen_rulling_CurrentValue13 = spec_screen_rulling13.innerHTML;
    var spec_screen_rulling14 = document.getElementById("spec_screen_rulling_value14");
    var spec_screen_rulling_CurrentValue14 = spec_screen_rulling14.innerHTML;
    var spec_screen_rulling15 = document.getElementById("spec_screen_rulling_value15");
    var spec_screen_rulling_CurrentValue15 = spec_screen_rulling15.innerHTML;

    var summary_screen_rulling = document.getElementById("summary_screen_ruling");
    var summary_screen_ruling_CurrentValue = summary_screen_rulling.innerHTML;

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
    $("#spec_screen_rulling_value1").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value1").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value1 option[value='" + spec_screen_rulling_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value2").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value2").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value2 option[value='" + spec_screen_rulling_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value3").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value3").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value3 option[value='" + spec_screen_rulling_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value4").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value4").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value4 option[value='" + spec_screen_rulling_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value5").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value5").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value5 option[value='" + spec_screen_rulling_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value6").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value6").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value6 option[value='" + spec_screen_rulling_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value7").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value7").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value7 option[value='" + spec_screen_rulling_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value8").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value8").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value8 option[value='" + spec_screen_rulling_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value9").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value9").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value9 option[value='" + spec_screen_rulling_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value10").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value10").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value10 option[value='" + spec_screen_rulling_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value11").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value11").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value11 option[value='" + spec_screen_rulling_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value12").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value12").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value12 option[value='" + spec_screen_rulling_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value13").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value13").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value13 option[value='" + spec_screen_rulling_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value14").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value14").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value14 option[value='" + spec_screen_rulling_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_screen_rulling_value15").empty();
    $.each(options, function (i, p) {
        $("#spec_screen_rulling_value15").append($("<option></option>").val(p).html(p));
        $("#spec_screen_rulling_value15 option[value='" + spec_screen_rulling_CurrentValue15 + "']")
            .attr("selected", "selected");
    });

    $("#summary_screen_ruling").empty();
    $.each(options, function (i, p) {
        $("#summary_screen_ruling").append($("<option></option>").val(p).html(p));
        $("#summary_screen_ruling option[value='" + summary_screen_ruling_CurrentValue + "']")
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

    var spec_angle1 = document.getElementById("spec_angle_value1");
    var spec_angle_CurrentValue1 = spec_angle1.innerHTML;
    var spec_angle2 = document.getElementById("spec_angle_value2");
    var spec_angle_CurrentValue2 = spec_angle2.innerHTML;
    var spec_angle3 = document.getElementById("spec_angle_value3");
    var spec_angle_CurrentValue3 = spec_angle3.innerHTML;
    var spec_angle4 = document.getElementById("spec_angle_value4");
    var spec_angle_CurrentValue4 = spec_angle4.innerHTML;
    var spec_angle5 = document.getElementById("spec_angle_value5");
    var spec_angle_CurrentValue5 = spec_angle5.innerHTML;
    var spec_angle6 = document.getElementById("spec_angle_value6");
    var spec_angle_CurrentValue6 = spec_angle6.innerHTML;
    var spec_angle7 = document.getElementById("spec_angle_value7");
    var spec_angle_CurrentValue7 = spec_angle7.innerHTML;
    var spec_angle8 = document.getElementById("spec_angle_value8");
    var spec_angle_CurrentValue8 = spec_angle8.innerHTML;
    var spec_angle9 = document.getElementById("spec_angle_value9");
    var spec_angle_CurrentValue9 = spec_angle9.innerHTML;
    var spec_angle10 = document.getElementById("spec_angle_value10");
    var spec_angle_CurrentValue10 = spec_angle10.innerHTML;
    var spec_angle11 = document.getElementById("spec_angle_value11");
    var spec_angle_CurrentValue11 = spec_angle11.innerHTML;
    var spec_angle12 = document.getElementById("spec_angle_value12");
    var spec_angle_CurrentValue12 = spec_angle12.innerHTML;
    var spec_angle13 = document.getElementById("spec_angle_value13");
    var spec_angle_CurrentValue13 = spec_angle13.innerHTML;
    var spec_angle14 = document.getElementById("spec_angle_value14");
    var spec_angle_CurrentValue14 = spec_angle14.innerHTML;
    var spec_angle15 = document.getElementById("spec_angle_value15");
    var spec_angle_CurrentValue15 = spec_angle15.innerHTML;


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
        $('#spec_angle_valueP1 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP1 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP2 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP2 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP3 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP3 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP4 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP4 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP5 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP5 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP6 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP6 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP7 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP7 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP8 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP8 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP9 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP9 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP10 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP10 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP11 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP11 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP12 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP12 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP13 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP13 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP14 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP14 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueP15 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueP15 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM1 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM1 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM2 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM2 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM3 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM3 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM4 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM4 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM5 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM5 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM6 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM6 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM7 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM7 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM8 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM8 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM9 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM9 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM10 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM10 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM11 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM11 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM12 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM12 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM13 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM13 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM14 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM14 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueM15 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueM15 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR1 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR1 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR2 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR2 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR3 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR3 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR4 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR4 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR5 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR5 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR6 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR6 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR7 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR7 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR8 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR8 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR9 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR9 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR10 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR10 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR11 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR11 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR12 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR12 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR13 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR13 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR14 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR14 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueR15 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueR15 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC1 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC1 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC2 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC2 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC3 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC3 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC4 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC4 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC5 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC5 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC6 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC6 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC7 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC7 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC8 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC8 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC9 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC9 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC10 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC10 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC11 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC11 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC12 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC12 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC13 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC13 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC14 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC14 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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
        $('#spec_angle_valueC15 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_valueC15 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value1").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value1").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value1 option[value='" + spec_angle_CurrentValue1 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value1 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value1 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value2").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value2").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value2 option[value='" + spec_angle_CurrentValue2 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value2 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value2 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value3").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value3").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value3 option[value='" + spec_angle_CurrentValue3 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value3 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value3 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value4").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value4").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value4 option[value='" + spec_angle_CurrentValue4 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value4 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value4 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value5").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value5").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value5 option[value='" + spec_angle_CurrentValue5 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value5 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value5 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value6").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value6").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value6 option[value='" + spec_angle_CurrentValue6 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value6 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value6 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value7").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value7").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value7 option[value='" + spec_angle_CurrentValue7 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value7 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value7 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value8").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value8").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value8 option[value='" + spec_angle_CurrentValue8 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value8 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value8 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value9").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value9").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value9 option[value='" + spec_angle_CurrentValue9 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value9 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value9 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value10").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value10").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value10 option[value='" + spec_angle_CurrentValue10 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value10 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value10 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value11").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value11").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value11 option[value='" + spec_angle_CurrentValue11 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value11 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value11 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value12").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value12").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value12 option[value='" + spec_angle_CurrentValue12 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value12 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value12 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value13").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value13").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value13 option[value='" + spec_angle_CurrentValue13 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value13 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value13 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value14").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value14").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value14 option[value='" + spec_angle_CurrentValue14 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value14 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value14 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#spec_angle_value15").empty();
    $.each(options, function (i, p) {
        $("#spec_angle_value15").append($("<option></option>").val(p).html(p));
        $("#spec_angle_value15 option[value='" + spec_angle_CurrentValue15 + "']")
            .attr("selected", "selected");
        $('#spec_angle_value15 option:contains("AM CMYK 7.5 | 67.5 | 82.5 | 37.5")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#spec_angle_value15 option:contains("SX CMYK 82.5 | 22.5 | 7.5 | 52.5")')
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

    var spec_DC1 = document.getElementById("spec_DC_value1");
    var spec_DC_CurrentValue1 = spec_DC1.innerHTML;
    var spec_DC2 = document.getElementById("spec_DC_value2");
    var spec_DC_CurrentValue2 = spec_DC2.innerHTML;
    var spec_DC3 = document.getElementById("spec_DC_value3");
    var spec_DC_CurrentValue3 = spec_DC3.innerHTML;
    var spec_DC4 = document.getElementById("spec_DC_value4");
    var spec_DC_CurrentValue4 = spec_DC4.innerHTML;
    var spec_DC5 = document.getElementById("spec_DC_value5");
    var spec_DC_CurrentValue5 = spec_DC5.innerHTML;
    var spec_DC6 = document.getElementById("spec_DC_value6");
    var spec_DC_CurrentValue6 = spec_DC6.innerHTML;
    var spec_DC7 = document.getElementById("spec_DC_value7");
    var spec_DC_CurrentValue7 = spec_DC7.innerHTML;
    var spec_DC8 = document.getElementById("spec_DC_value8");
    var spec_DC_CurrentValue8 = spec_DC8.innerHTML;
    var spec_DC9 = document.getElementById("spec_DC_value9");
    var spec_DC_CurrentValue9 = spec_DC9.innerHTML;
    var spec_DC10 = document.getElementById("spec_DC_value10");
    var spec_DC_CurrentValue10 = spec_DC10.innerHTML;
    var spec_DC11 = document.getElementById("spec_DC_value11");
    var spec_DC_CurrentValue11 = spec_DC11.innerHTML;
    var spec_DC12 = document.getElementById("spec_DC_value12");
    var spec_DC_CurrentValue12 = spec_DC12.innerHTML;
    var spec_DC13 = document.getElementById("spec_DC_value13");
    var spec_DC_CurrentValue13 = spec_DC13.innerHTML;
    var spec_DC14 = document.getElementById("spec_DC_value14");
    var spec_DC_CurrentValue14 = spec_DC14.innerHTML;
    var spec_DC15 = document.getElementById("spec_DC_value15");
    var spec_DC_CurrentValue15 = spec_DC15.innerHTML;

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
    $("#spec_DC_value1").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value1").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value1 option[value='" + spec_DC_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value2").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value2").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value2 option[value='" + spec_DC_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value3").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value3").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value3 option[value='" + spec_DC_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value4").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value4").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value4 option[value='" + spec_DC_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value5").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value5").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value5 option[value='" + spec_DC_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value6").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value6").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value6 option[value='" + spec_DC_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value7").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value7").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value7 option[value='" + spec_DC_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value8").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value8").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value8 option[value='" + spec_DC_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value9").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value9").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value9 option[value='" + spec_DC_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value10").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value10").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value10 option[value='" + spec_DC_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value11").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value11").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value11 option[value='" + spec_DC_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value12").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value12").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value12 option[value='" + spec_DC_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value13").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value13").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value13 option[value='" + spec_DC_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value14").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value14").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value14 option[value='" + spec_DC_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_DC_value15").empty();
    $.each(options, function (i, p) {
        $("#spec_DC_value15").append($("<option></option>").val(p).html(p));
        $("#spec_DC_value15 option[value='" + spec_DC_CurrentValue15 + "']")
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

    var spec_print_type1 = document.getElementById("spec_print_type_value1");
    var spec_print_type_CurrentValue1 = spec_print_type1.innerHTML;
    var spec_print_type2 = document.getElementById("spec_print_type_value2");
    var spec_print_type_CurrentValue2 = spec_print_type2.innerHTML;
    var spec_print_type3 = document.getElementById("spec_print_type_value3");
    var spec_print_type_CurrentValue3 = spec_print_type3.innerHTML;
    var spec_print_type4 = document.getElementById("spec_print_type_value4");
    var spec_print_type_CurrentValue4 = spec_print_type4.innerHTML;
    var spec_print_type5 = document.getElementById("spec_print_type_value5");
    var spec_print_type_CurrentValue5 = spec_print_type5.innerHTML;
    var spec_print_type6 = document.getElementById("spec_print_type_value6");
    var spec_print_type_CurrentValue6 = spec_print_type6.innerHTML;
    var spec_print_type7 = document.getElementById("spec_print_type_value7");
    var spec_print_type_CurrentValue7 = spec_print_type7.innerHTML;
    var spec_print_type8 = document.getElementById("spec_print_type_value8");
    var spec_print_type_CurrentValue8 = spec_print_type8.innerHTML;
    var spec_print_type9 = document.getElementById("spec_print_type_value9");
    var spec_print_type_CurrentValue9 = spec_print_type9.innerHTML;
    var spec_print_type10 = document.getElementById("spec_print_type_value10");
    var spec_print_type_CurrentValue10 = spec_print_type10.innerHTML;
    var spec_print_type11 = document.getElementById("spec_print_type_value11");
    var spec_print_type_CurrentValue11 = spec_print_type11.innerHTML;
    var spec_print_type12 = document.getElementById("spec_print_type_value12");
    var spec_print_type_CurrentValue12 = spec_print_type12.innerHTML;
    var spec_print_type13 = document.getElementById("spec_print_type_value13");
    var spec_print_type_CurrentValue13 = spec_print_type13.innerHTML;
    var spec_print_type14 = document.getElementById("spec_print_type_value14");
    var spec_print_type_CurrentValue14 = spec_print_type14.innerHTML;
    var spec_print_type15 = document.getElementById("spec_print_type_value15");
    var spec_print_type_CurrentValue15 = spec_print_type15.innerHTML;

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
    $("#spec_print_type_value1").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value1").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value1 option[value='" + spec_print_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value2").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value2").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value2 option[value='" + spec_print_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value3").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value3").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value3 option[value='" + spec_print_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value4").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value4").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value4 option[value='" + spec_print_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value5").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value5").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value5 option[value='" + spec_print_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value6").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value6").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value6 option[value='" + spec_print_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value7").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value7").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value7 option[value='" + spec_print_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value8").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value8").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value8 option[value='" + spec_print_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value9").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value9").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value9 option[value='" + spec_print_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value10").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value10").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value10 option[value='" + spec_print_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value11").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value11").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value11 option[value='" + spec_print_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value12").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value12").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value12 option[value='" + spec_print_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value13").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value13").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value13 option[value='" + spec_print_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value14").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value14").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value14 option[value='" + spec_print_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_print_type_value15").empty();
    $.each(options, function (i, p) {
        $("#spec_print_type_value15").append($("<option></option>").val(p).html(p));
        $("#spec_print_type_value15 option[value='" + spec_print_type_CurrentValue15 + "']")
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

    var spec_raster_type1 = document.getElementById("spec_raster_type_value1");
    var spec_raster_type_CurrentValue1 = spec_raster_type1.innerHTML;
    var spec_raster_type2 = document.getElementById("spec_raster_type_value2");
    var spec_raster_type_CurrentValue2 = spec_raster_type2.innerHTML;
    var spec_raster_type3 = document.getElementById("spec_raster_type_value3");
    var spec_raster_type_CurrentValue3 = spec_raster_type3.innerHTML;
    var spec_raster_type4 = document.getElementById("spec_raster_type_value4");
    var spec_raster_type_CurrentValue4 = spec_raster_type4.innerHTML;
    var spec_raster_type5 = document.getElementById("spec_raster_type_value5");
    var spec_raster_type_CurrentValue5 = spec_raster_type5.innerHTML;
    var spec_raster_type6 = document.getElementById("spec_raster_type_value6");
    var spec_raster_type_CurrentValue6 = spec_raster_type6.innerHTML;
    var spec_raster_type7 = document.getElementById("spec_raster_type_value7");
    var spec_raster_type_CurrentValue7 = spec_raster_type7.innerHTML;
    var spec_raster_type8 = document.getElementById("spec_raster_type_value8");
    var spec_raster_type_CurrentValue8 = spec_raster_type8.innerHTML;
    var spec_raster_type9 = document.getElementById("spec_raster_type_value9");
    var spec_raster_type_CurrentValue9 = spec_raster_type9.innerHTML;
    var spec_raster_type10 = document.getElementById("spec_raster_type_value10");
    var spec_raster_type_CurrentValue10 = spec_raster_type10.innerHTML;
    var spec_raster_type11 = document.getElementById("spec_raster_type_value11");
    var spec_raster_type_CurrentValue11 = spec_raster_type11.innerHTML;
    var spec_raster_type12 = document.getElementById("spec_raster_type_value12");
    var spec_raster_type_CurrentValue12 = spec_raster_type12.innerHTML;
    var spec_raster_type13 = document.getElementById("spec_raster_type_value13");
    var spec_raster_type_CurrentValue13 = spec_raster_type13.innerHTML;
    var spec_raster_type14 = document.getElementById("spec_raster_type_value14");
    var spec_raster_type_CurrentValue14 = spec_raster_type14.innerHTML;
    var spec_raster_type15 = document.getElementById("spec_raster_type_value15");
    var spec_raster_type_CurrentValue15 = spec_raster_type15.innerHTML;

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
    $("#spec_raster_type_value1").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value1").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value1 option[value='" + spec_raster_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value2").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value2").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value2 option[value='" + spec_raster_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value3").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value3").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value3 option[value='" + spec_raster_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value4").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value4").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value4 option[value='" + spec_raster_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value5").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value5").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value5 option[value='" + spec_raster_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value6").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value6").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value6 option[value='" + spec_raster_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value7").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value7").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value7 option[value='" + spec_raster_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value8").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value8").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value8 option[value='" + spec_raster_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value9").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value9").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value9 option[value='" + spec_raster_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value10").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value10").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value10 option[value='" + spec_raster_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value11").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value11").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value11 option[value='" + spec_raster_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value12").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value12").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value12 option[value='" + spec_raster_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value13").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value13").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value13 option[value='" + spec_raster_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value14").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value14").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value14 option[value='" + spec_raster_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_raster_type_value15").empty();
    $.each(options, function (i, p) {
        $("#spec_raster_type_value15").append($("<option></option>").val(p).html(p));
        $("#spec_raster_type_value15 option[value='" + spec_raster_type_CurrentValue15 + "']")
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

    var spec_plates_type1 = document.getElementById("spec_plates_type_value1");
    var spec_plates_type_CurrentValue1 = spec_plates_type1.innerHTML;
    var spec_plates_type2 = document.getElementById("spec_plates_type_value2");
    var spec_plates_type_CurrentValue2 = spec_plates_type2.innerHTML;
    var spec_plates_type3 = document.getElementById("spec_plates_type_value3");
    var spec_plates_type_CurrentValue3 = spec_plates_type3.innerHTML;
    var spec_plates_type4 = document.getElementById("spec_plates_type_value4");
    var spec_plates_type_CurrentValue4 = spec_plates_type4.innerHTML;
    var spec_plates_type5 = document.getElementById("spec_plates_type_value5");
    var spec_plates_type_CurrentValue5 = spec_plates_type5.innerHTML;
    var spec_plates_type6 = document.getElementById("spec_plates_type_value6");
    var spec_plates_type_CurrentValue6 = spec_plates_type6.innerHTML;
    var spec_plates_type7 = document.getElementById("spec_plates_type_value7");
    var spec_plates_type_CurrentValue7 = spec_plates_type7.innerHTML;
    var spec_plates_type8 = document.getElementById("spec_plates_type_value8");
    var spec_plates_type_CurrentValue8 = spec_plates_type8.innerHTML;
    var spec_plates_type9 = document.getElementById("spec_plates_type_value9");
    var spec_plates_type_CurrentValue9 = spec_plates_type9.innerHTML;
    var spec_plates_type10 = document.getElementById("spec_plates_type_value10");
    var spec_plates_type_CurrentValue10 = spec_plates_type10.innerHTML;
    var spec_plates_type11 = document.getElementById("spec_plates_type_value11");
    var spec_plates_type_CurrentValue11 = spec_plates_type11.innerHTML;
    var spec_plates_type12 = document.getElementById("spec_plates_type_value12");
    var spec_plates_type_CurrentValue12 = spec_plates_type12.innerHTML;
    var spec_plates_type13 = document.getElementById("spec_plates_type_value13");
    var spec_plates_type_CurrentValue13 = spec_plates_type13.innerHTML;
    var spec_plates_type14 = document.getElementById("spec_plates_type_value14");
    var spec_plates_type_CurrentValue14 = spec_plates_type14.innerHTML;
    var spec_plates_type15 = document.getElementById("spec_plates_type_value15");
    var spec_plates_type_CurrentValue15 = spec_plates_type15.innerHTML;

    var plates_type = document.getElementById("plates_type_value");
    var plates_type_CurrentValue = plates_type.innerHTML;


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
    $("#spec_plates_type_value1").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value1").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value1 option[value='" + spec_plates_type_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value2").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value2").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value2 option[value='" + spec_plates_type_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value3").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value3").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value3 option[value='" + spec_plates_type_CurrentValue3 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value4").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value4").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value4 option[value='" + spec_plates_type_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value5").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value5").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value5 option[value='" + spec_plates_type_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value6").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value6").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value6 option[value='" + spec_plates_type_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value7").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value7").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value7 option[value='" + spec_plates_type_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value8").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value8").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value8 option[value='" + spec_plates_type_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value9").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value9").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value9 option[value='" + spec_plates_type_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value10").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value10").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value10 option[value='" + spec_plates_type_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value11").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value11").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value11 option[value='" + spec_plates_type_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value12").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value12").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value12 option[value='" + spec_plates_type_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value13").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value13").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value13 option[value='" + spec_plates_type_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value14").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value14").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value14 option[value='" + spec_plates_type_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#spec_plates_type_value15").empty();
    $.each(options, function (i, p) {
        $("#spec_plates_type_value15").append($("<option></option>").val(p).html(p));
        $("#spec_plates_type_value15 option[value='" + spec_plates_type_CurrentValue15 + "']")
            .attr("selected", "selected");
    });

    $("#plates_type_value").empty();
    $.each(options, function (i, p) {
        $("#plates_type_value").append($("<option></option>").val(p).html(p));
        $("#plates_type_value option[value='" + plates_type_CurrentValue + "']")
            .attr("selected", "selected");
    });
});

//Couriers

$(document).ready(function (e) {

    var courier1 = document.getElementById("courier1");
    var courier_CurrentValue1 = courier1.innerHTML;
    var courier1 = document.getElementById("courier2");
    var courier_CurrentValue2 = courier2.innerHTML;

    var options = [

        "",
        "GLS",
        "DPD",
        "DHL",
        "Błyskawica",
        "Transport firmowy",
        "Odbiór osobisty",

    ];

    $("#courier1").empty();
    $.each(options, function (i, p) {
        $("#courier1").append($("<option></option>").val(p).html(p));
        $("#courier1 option[value='" + courier_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
    $("#courier2").empty();
    $.each(options, function (i, p) {
        $("#courier2").append($("<option></option>").val(p).html(p));
        $("#courier2 option[value='" + courier_CurrentValue2 + "']")
            .attr("selected", "selected");
    });
});



//Samples

$(document).ready(function (e) {


    var samples1 = document.getElementById("samples_value1");
    var samples_CurrentValue1 = samples1.innerHTML;

    var options = [

        "",
        "wydruk flekso",
        "produkt sklepowy",
        "inny wzorzec",
        "--BRAK WZORCA--",

    ];

    $("#samples_value1").empty();
    $.each(options, function (i, p) {
        $("#samples_value1").append($("<option></option>").val(p).html(p));
        $("#samples_value1 option[value='" + samples_CurrentValue1 + "']")
            .attr("selected", "selected");
    });
});

//Fleksograf Graphics

$(document).ready(function (e) {
    var graphicsApproval = document.getElementById("graphics_value");
    var graphicsApprovalCurrentValue = graphicsApproval.innerHTML;
    var graphicsApproval1 = document.getElementById("graphics_value1");
    var graphicsApprovalCurrentValue1 = graphicsApproval1.innerHTML;
    var graphicsApproval2 = document.getElementById("graphics_value2");
    var graphicsApprovalCurrentValue2 = graphicsApproval2.innerHTML;
    var graphicsApproval3 = document.getElementById("graphics_value3");
    var graphicsApprovalCurrentValue3 = graphicsApproval3.innerHTML;

    var options = [

        "",
        "graphic1",
        "graphic2",
        "-",

    ];
    $("#graphics_value").empty();
    $.each(options, function (i, p) {
        $("#graphics_value").append($("<option></option>").val(p).html(p));
        $("#graphics_value option[value='" + graphicsApprovalCurrentValue + "']")
            .attr("selected", "selected")
        $('#graphics_value option:contains("Fleksograf studio prepress ")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#graphics_value option:contains("Graficy zewnętrzni")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#graphics_value1").empty();
    $.each(options, function (i, p) {
        $("#graphics_value1").append($("<option></option>").val(p).html(p));
        $("#graphics_value1 option[value='" + graphicsApprovalCurrentValue1 + "']")
            .attr("selected", "selected");
        $('#graphics_value1 option:contains("Fleksograf studio prepress")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#graphics_value1 option:contains("Graficy zewnętrzni")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#graphics_value2").empty();
    $.each(options, function (i, p) {
        $("#graphics_value2").append($("<option></option>").val(p).html(p));
        $("#graphics_value2 option[value='" + graphicsApprovalCurrentValue2 + "']")
            .attr("selected", "selected");
        $('#graphics_value2 option:contains("Fleksograf studio prepress")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#graphics_value2 option:contains("Graficy zewnętrzni")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
    $("#graphics_value3").empty();
    $.each(options, function (i, p) {
        $("#graphics_value3").append($("<option></option>").val(p).html(p));
        $("#graphics_value3 option[value='" + graphicsApprovalCurrentValue3 + "']")
            .attr("selected", "selected");
        $('#graphics_value3 option:contains("Fleksograf studio prepress")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
        $('#graphics_value3 option:contains("Graficy zewnętrzni")')
            .attr("disabled", "disabled")
            .css("color", "white")
            .css("font-family", "Roboto")
            .css("background", "dimgray");
    });
});

//Versions

$(document).ready(function (e) {

    var Nr_of_acceptPDF = document.getElementById("Nr_of_acceptPDF");
    var Nr_of_acceptPDF_CurrentValue = Nr_of_acceptPDF.innerHTML;



    var options = [

        "",
        "v1",
        "v2",
        "v3",
        "v4",
        "v5",
        "v6",
        "v7",
        "v8",
        "v9",
        "v10",
        "v11",
        "v12",
        "v13",
        "v14",
        "v15",

    ];

    $("#Nr_of_acceptPDF").empty();
    $.each(options, function (i, p) {
        $("#Nr_of_acceptPDF").append($("<option></option>").val(p).html(p));
        $("#Nr_of_acceptPDF option[value='" + Nr_of_acceptPDF_CurrentValue + "']")
            .attr("selected", "selected");
    });
});

//Varnish

$(document).ready(function (e) {

    var varnish = document.getElementById("varnish_value");
    var varnish_CurrentValue = varnish.innerHTML;

    var options = [

        "",
        "Tak (awers)",
        "Tak (rewers)",
        "Nie",

    ];

    $("#varnish_value").empty();
    $.each(options, function (i, p) {
        $("#varnish_value").append($("<option></option>").val(p).html(p));
        $("#varnish_value option[value='" + varnish_CurrentValue + "']")
            .attr("selected", "selected");
    });
});

//White

$(document).ready(function (e) {

    var white = document.getElementById("white_value");
    var white_CurrentValue = white.innerHTML;

    var options = [

        "",
        "Tak",
        "Tak x2",
        "Nie",

    ];

    $("#white_value").empty();
    $.each(options, function (i, p) {
        $("#white_value").append($("<option></option>").val(p).html(p));
        $("#white_value option[value='" + white_CurrentValue + "']")
            .attr("selected", "selected");
    });
});

//Awers Rewers

$(document).ready(function (e) {

    var awers_rewers = document.getElementById("awers_rewers_value");
    var awers_rewers_CurrentValue = awers_rewers.innerHTML;

    var options = [

        "",
        "Awers",
        "Rewers",

    ];

    $("#awers_rewers_value").empty();
    $.each(options, function (i, p) {
        $("#awers_rewers_value").append($("<option></option>").val(p).html(p));
        $("#awers_rewers_value option[value='" + awers_rewers_CurrentValue + "']")
            .attr("selected", "selected");
    });
});

//EXPOSURE

$(document).ready(function (e) {

    var exposure = document.getElementById("exposure_value");
    var exposure_CurrentValue = exposure.innerHTML;

    var options = [

        "",
        "TIL",
        "TIL-R",
        "DITR",
        "FILM",

    ];

    $("#exposure_value").empty();
    $.each(options, function (i, p) {
        $("#exposure_value").append($("<option></option>").val(p).html(p));
        $("#exposure_value option[value='" + exposure_CurrentValue + "']")
            .attr("selected", "selected");
    })
});

//client Machine

$(document).ready(function (e) {

    var machine = document.getElementById("machine_value");
    var machine_CurrentValue = machine.innerHTML;

    var options = [

        "",
        "machine1",
        "machine2",

    ];

    $("#machine_value").empty();
    $.each(options, function (i, p) {
        $("#machine_value").append($("<option></option>").val(p).html(p));
        $("#machine_value option:contains('" + machine_CurrentValue + "')")
            .attr("selected", "selected");
    })
});

//Point_Test

$(document).ready(function (e) {

    var point_test = document.getElementById("point_test_value");
    var point_test_CurrentValue = point_test.innerHTML;

    var options = [

        "",
        "OK",
        "Do korekty",

    ];

    $("#point_test_value").empty();
    $.each(options, function (i, p) {
        $("#point_test_value").append($("<option></option>").val(p).html(p));
        $("#point_test_value option[value='" + point_test_CurrentValue + "']")
            .attr("selected", "selected");
    })
});

//Viscosity of Plate

$(document).ready(function (e) {

    var viscosity_of_plate = document.getElementById("viscosity_of_plate_value");
    var viscosity_of_plate_CurrentValue = viscosity_of_plate.innerHTML;

    var options = [

        "",
        "Lepkość OK",
        "Zbyt lepka",
        "Nie dość lepka",

    ];

    $("#viscosity_of_plate_value").empty();
    $.each(options, function (i, p) {
        $("#viscosity_of_plate_value").append($("<option></option>").val(p).html(p));
        $("#viscosity_of_plate_value option[value='" + viscosity_of_plate_CurrentValue + "']")
            .attr("selected", "selected");
    })
});

//Mask compatibility

$(document).ready(function (e) {

    var mask_compatibility = document.getElementById("mask_compatibility_value");
    var mask_compatibility_CurrentValue = mask_compatibility.innerHTML;

    var options = [

        "",
        "Zgodna",
        "Nie zgodna",

    ];

    $("#mask_compatibility_value").empty();
    $.each(options, function (i, p) {
        $("#mask_compatibility_value").append($("<option></option>").val(p).html(p));
        $("#mask_compatibility_value option[value='" + mask_compatibility_CurrentValue + "']")
            .attr("selected", "selected");
    })
});

//Production Operator

$(document).ready(function (e) {

    var production_operator = document.getElementById("production_operator_value");
    var production_operator_CurrentValue = production_operator.innerHTML;
    var production_operator1 = document.getElementById("production_operator_value1");
    var production_operator_CurrentValue1 = production_operator1.innerHTML;

    var options = [

        "",
        "operator1",
        "operator2",

    ];

    $("#production_operator_value").empty();
    $.each(options, function (i, p) {
        $("#production_operator_value").append($("<option></option>").val(p).html(p));
        $("#production_operator_value option[value='" + production_operator_CurrentValue + "']")
            .attr("selected", "selected");
    })
    $("#production_operator_value1").empty();
    $.each(options, function (i, p) {
        $("#production_operator_value1").append($("<option></option>").val(p).html(p));
        $("#production_operator_value1 option[value='" + production_operator_CurrentValue1 + "']")
            .attr("selected", "selected");
    })
});

//Dissection

$(document).ready(function (e) {

    var dissection = document.getElementById("dissection_value");
    var dissection_CurrentValue = dissection.innerHTML;

    var options = [

        "",
        "Brak",
        "Występuje",

    ];

    $("#dissection_value").empty();
    $.each(options, function (i, p) {
        $("#dissection_value").append($("<option></option>").val(p).html(p));
        $("#dissection_value option[value='" + dissection_CurrentValue + "']")
            .attr("selected", "selected");
    })
});

//Undesired elements

$(document).ready(function (e) {

    var undesired_elements = document.getElementById("undesired_elements_value");
    var undesired_elements_CurrentValue = undesired_elements.innerHTML;

    var options = [

        "",
        "Brak",
        "Wystepują",

    ];

    $("#undesired_elements_value").empty();
    $.each(options, function (i, p) {
        $("#undesired_elements_value").append($("<option></option>").val(p).html(p));
        $("#undesired_elements_value option[value='" + undesired_elements_CurrentValue + "']")
            .attr("selected", "selected");
    })
});

//Yes or No

$(document).ready(function (e) {

    var yes_or_no = document.getElementById("yes_or_no_value");
    var yes_or_no_CurrentValue = yes_or_no.innerHTML;
    var yes_or_no1 = document.getElementById("yes_or_no_value1");
    var yes_or_no_CurrentValue1 = yes_or_no1.innerHTML;
    var yes_or_no2 = document.getElementById("yes_or_no_value2");
    var yes_or_no_CurrentValue2 = yes_or_no2.innerHTML;
    var yes_or_no3 = document.getElementById("yes_or_no_value3");
    var yes_or_no_CurrentValue3 = yes_or_no3.innerHTML;
    var yes_or_no4 = document.getElementById("yes_or_no_value4");
    var yes_or_no_CurrentValue4 = yes_or_no4.innerHTML;
    var yes_or_no5 = document.getElementById("yes_or_no_value5");
    var yes_or_no_CurrentValue5 = yes_or_no5.innerHTML;
    var yes_or_no6 = document.getElementById("yes_or_no_value6");
    var yes_or_no_CurrentValue6 = yes_or_no6.innerHTML;
    var yes_or_no7 = document.getElementById("yes_or_no_value7");
    var yes_or_no_CurrentValue7 = yes_or_no7.innerHTML;
    var yes_or_no8 = document.getElementById("yes_or_no_value8");
    var yes_or_no_CurrentValue8 = yes_or_no8.innerHTML;
    var yes_or_no9 = document.getElementById("yes_or_no_value9");
    var yes_or_no_CurrentValue9 = yes_or_no9.innerHTML;
    var yes_or_no10 = document.getElementById("yes_or_no_value10");
    var yes_or_no_CurrentValue10 = yes_or_no10.innerHTML;
    var yes_or_no11 = document.getElementById("yes_or_no_value11");
    var yes_or_no_CurrentValue11 = yes_or_no11.innerHTML;
    var yes_or_no12 = document.getElementById("yes_or_no_value12");
    var yes_or_no_CurrentValue12 = yes_or_no12.innerHTML;
    var yes_or_no13 = document.getElementById("yes_or_no_value13");
    var yes_or_no_CurrentValue13 = yes_or_no13.innerHTML;
    var yes_or_no14 = document.getElementById("yes_or_no_value14");
    var yes_or_no_CurrentValue14 = yes_or_no14.innerHTML;
    var yes_or_no15 = document.getElementById("yes_or_no_value15");
    var yes_or_no_CurrentValue15 = yes_or_no15.innerHTML;
    // var yes_or_no16 = document.getElementById("yes_or_no_value16");
    // var yes_or_no_CurrentValue16 = yes_or_no16.innerHTML;
    var yes_or_no17 = document.getElementById("yes_or_no_value17");
    var yes_or_no_CurrentValue17 = yes_or_no17.innerHTML;

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
        $("#yes_or_no_value").attr("required", "");
    });
    $("#yes_or_no_value1").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value1").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value1 option[value='" + yes_or_no_CurrentValue1 + "']")
            .attr("selected", "selected");
        $("#yes_or_no_value1").attr("required", "");
    });
    $("#yes_or_no_value2").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value2").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value2 option[value='" + yes_or_no_CurrentValue2 + "']")
            .attr("selected", "selected");
        $("#yes_or_no_value2").attr("required", "");
    });
    $("#yes_or_no_value3").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value3").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value3 option[value='" + yes_or_no_CurrentValue3 + "']")
            .attr("selected", "selected");
        $("#yes_or_no_value3").attr("required", "");
    });
    $("#yes_or_no_value4").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value4").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value4 option[value='" + yes_or_no_CurrentValue4 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value5").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value5").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value5 option[value='" + yes_or_no_CurrentValue5 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value6").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value6").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value6 option[value='" + yes_or_no_CurrentValue6 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value7").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value7").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value7 option[value='" + yes_or_no_CurrentValue7 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value8").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value8").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value8 option[value='" + yes_or_no_CurrentValue8 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value9").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value9").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value9 option[value='" + yes_or_no_CurrentValue9 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value10").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value10").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value10 option[value='" + yes_or_no_CurrentValue10 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value11").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value11").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value11 option[value='" + yes_or_no_CurrentValue11 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value12").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value12").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value12 option[value='" + yes_or_no_CurrentValue12 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value13").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value13").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value13 option[value='" + yes_or_no_CurrentValue13 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value14").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value14").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value14 option[value='" + yes_or_no_CurrentValue14 + "']")
            .attr("selected", "selected");
    });
    $("#yes_or_no_value15").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value15").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value15 option[value='" + yes_or_no_CurrentValue15 + "']")
            .attr("selected", "selected");
    });
    // $("#yes_or_no_value16").empty();
    // $.each(options, function (i, p) {
    //     $("#yes_or_no_value16").append($("<option></option>").val(p).html(p));
    //     $("#yes_or_no_value16 option[value='" + yes_or_no_CurrentValue16 + "']")
    //         .attr("selected", "selected");
    // });
    $("#yes_or_no_value17").empty();
    $.each(options, function (i, p) {
        $("#yes_or_no_value17").append($("<option></option>").val(p).html(p));
        $("#yes_or_no_value17 option[value='" + yes_or_no_CurrentValue17 + "']")
            .attr("selected", "selected");
        $("#yes_or_no_value17").attr("required", "");
    });
});


