function colorChecker() {

    for (let i = 1; i <= 15; i++) {
        let colorP = "Color_P" + i;
        let colorR = "Color_R" + i;
        let colorM = "Color_M" + i;
        let colorC = "Color_C" + i;
        let checkboxP = "checkbox_rowP" + i;
        let checkboxR = "checkbox_rowR" + i;
        let checkboxM = "checkbox_rowM" + i;
        let checkboxC = "checkbox_rowC" + i;

        if (
            document.getElementById(colorP).value == "" ||
            document.getElementById(colorR).value == "" ||
            document.getElementById(colorM).value == "" ||
            document.getElementById(colorC).value == "") 
            {
            document.getElementById(checkboxP).checked = false;
            document.getElementById(checkboxR).checked = false;
            document.getElementById(checkboxM).checked = false;
            document.getElementById(checkboxC).checked = false;
            document.getElementById(checkboxP).style.display = "none";
            document.getElementById(checkboxR).style.display = "none";
            document.getElementById(checkboxM).style.display = "none";
            document.getElementById(checkboxC).style.display = "none";
        };
    };
}