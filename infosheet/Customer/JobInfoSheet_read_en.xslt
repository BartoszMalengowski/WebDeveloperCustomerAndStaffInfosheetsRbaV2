<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <xsl:template match="/">
        <link rel="stylesheet" href="/prinergyweb/custom/JobInfoSheet/Examples/FSP_WORKFLOW_JavaScripts/INFOSHEET_CSS.css"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/jquery-3.6.3.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/ActionStatus_Controller.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/div_Enabler_Controller_Customers.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/divTab_Controller_Customers.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/specTableCounter.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/todayDate.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/letterAndSignsSwapper.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/Selects_infosheet/Adapa/Adapa_Customers.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/CheckboxChecked.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/Clicker.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/rowFader.js"/>
        <script src="/prinergyweb/custom/JobInfoSheet/Examples/FSP_PLATES_ONLY_JavaScripts/colorChecker.js"/>
        <br/>
        <!-- JOB + STATUS SECTION BEGIN -->
        <body onload="ActionStatus_Controller_READ();divTab_Controller_Customers();colorChecker();" >
            <table style="padding-left:15;  margin-bottom:1; " >
                <th align="Right" nowrap="true" style="padding:2; ">
                    <span class="StandardLabel">Zadanie:</span>
                </th>
                <td id="Action_ID"  style="padding:5 10 5 10 ;" >
                    <span id="Action_xml_value">
                        <xsl:for-each select="JobSpec">
                            <xsl:for-each select="JobCurrentAction">
                                <xsl:apply-templates/>
                            </xsl:for-each>
                        </xsl:for-each>
                    </span>
                </td>
                <th align="Right" nowrap="true" style="padding-left:10; ">
                    <span class="StandardLabel">Status:</span>
                </th>
                <td id="Status_ID" align="center" style="padding:5 10 5 10 ;" >
                    <span id="Status_xml_value" >
                        <xsl:for-each select="JobSpec">
                            <xsl:for-each select="JobCurrentStatus">
                                <xsl:apply-templates />
                            </xsl:for-each>
                        </xsl:for-each>
                    </span>
                </td>
            </table>
        </body>
        <!-- JOB STATUS SECTION END -->
        <br/>
        <table border="0px" align="left" width="100%" cellpadding="0" cellspacing="0" style="padding-left:10; padding-right:10;">
            <tbody>
                <!-- INFO SHEET TABS BEGIN -->
                <tr>
                    <td align="left">
                        <table border="0" bordercolor="#FF0000" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                <td id="platesTab" align="center" class="disabled_tab" style="border-right:solid dimgray 1px;border-left:solid dimgray 1px;">
                                        <a href="#" onClick="handleTabClick( 'plates' );" style="text-decoration:none;">
                                            <span id="platesLabel">
                                                    MATRYCE
                                                </span>
                                        </a>
                                    </td>
                                    <td id="modificationTab" align="center" class="disabled_tab" style="border-right:solid dimgray 1px;border-left:solid dimgray 1px;">
                                        <a href="#" onClick="handleTabClick( 'modification' );" style="text-decoration:none;">
                                            <span id="modificationLabel">
                                                    ZMIANA
                                                </span>
                                        </a>
                                    </td>
                                    <td id="renewalTab" align="center" class="disabled_tab" style="border-right:solid dimgray 1px;border-left:solid dimgray 1px;">
                                        <a href="#" onClick="handleTabClick( 'renewal' );" style="text-decoration:none;">
                                            <span id="renewalLabel">
                                                    WZNOWIENIE
                                                </span>
                                        </a>
                                    </td>
                                    <td id="complaintTab" align="center" class="disabled_tab" style="border-right:solid dimgray 1px;border-left:solid dimgray 1px;">
                                        <a href="#" onClick="handleTabClick( 'complaint' );" style="text-decoration:none;">
                                            <span id="complaintLabel">
                                                    REKLAMACJA
                                                </span>
                                        </a>
                                    </td>
                                    <td width="800" style="border-bottom: solid dimgray 1px;">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <!-- INFO SHEET TABS END -->
                <tr>
                    <td>
                            <!-- PLATES SECTION BEGIN -->
                            <div id="plates" style="position: absolute; visibility: visible; background:#E3E3E3; border-left:1px solid dimgray; height:2000; width:890;">
                                <br/>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Data zamówienia matryc:</span>
                                        </th>
                                        <td  align="Left" nowrap="true" style="padding:2 2 2 2 ;" >
                                            <span>
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobPlateOrderDate">
                                                        <input id="PlatesOrderDate_ID" type="date" class="PlatesDiv_Disabled_DateInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <th align="Left" nowrap="true" style="padding:2;">
                                        <span class="StandardLabel">Nazwa projektu:</span>
                                    </th>
                                    <td  align="Left" nowrap="true" style="padding:2 2 2 2 ;" >
                                        <span>
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="JobAlias">
                                                    <input type="text" class="PlatesDiv_Disabled_TextInput" disabled="disabled" style="width:700px;">
                                                        <xsl:attribute name="value">
                                                            <xsl:value-of select="." />
                                                        </xsl:attribute>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </span>
                                    </td>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true">
                                            <span class="StandardLabel">Indeks 1 projektu klienta:</span>
                                        </th>
                                        <td align="left" nowrap="true">
                                            <span >
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCustomerID1Number" >
                                                        <input type="text"  style="width:auto;" class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                        <th align="Left" nowrap="true" style="padding-left:10;">
                                            <span class="StandardLabel">Indeks 2 projektu klienta:</span>
                                        </th>
                                        <td align="left" nowrap="true">
                                            <span >
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCustomerID2Number">
                                                        <input type="text" style="width:auto;" class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Kod zadania:</span>
                                        </th>
                                        <td  align="Left" nowrap="true" >
                                            <span class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCode">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Kod projektu:</span>
                                        </th>
                                        <td align="Left" nowrap="true" style="padding:2;" >
                                            <span class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobProjectCode">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <hr/>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Koordynator drukarni:</span>
                                        </th>
                                        <td align="Left" nowrap="true" style="padding:2;" >
                                            <span class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobProjectCode">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Krzywa kompensacyjna:</span>
                                        </th>
                                        <td align="Left" nowrap="true" style="padding:2;" >
                                            <span class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobProjectCode">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <br/>
                                <table border="1px" bordercolor="dimgray" rules="cols" width="95%" style="border-collapse: collapse; margin-left:10;" class="hoverTable">
                                    <tr>
                                        <th align="center" colspan="13" nowrap="true" style="padding:2; background:#000; ">
                                            <span class="SummaryLabel" style="font-size: 20px;">
                                            SPECYFIKACJA KOMPLETU MATRYC:
                                        </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" class="SummaryLabel">
                                            <span>Lp.</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" class="SummaryLabel">
                                            <span>Kolor</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" class="SummaryLabel">
                                            <span>Lpi</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" class="SummaryLabel">
                                            <span>Kąt</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" class="SummaryLabel">
                                            <span>DC</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" class="SummaryLabel">
                                            <span>Zadruk</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" class="SummaryLabel">
                                            <span>Raster</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" class="SummaryLabel">
                                            <span>Kop.</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" class="SummaryLabel">
                                            <span>Płyta</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" class="SummaryLabel">
                                            <span>Zamów</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">1.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow1">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P1">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style=" font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow1">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow1">
                                                    <input  type="checkbox" id="checkbox_rowP1" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">2.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow2">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P2">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow2">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow2">
                                                    <input  type="checkbox" id="checkbox_rowP2" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">3.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow3">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P3">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow3">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow3">
                                                    <input  type="checkbox" id="checkbox_rowP3" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">4.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow4">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P4">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow4">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow4">
                                                    <input  type="checkbox" id="checkbox_rowP4" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">5.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow5">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow5">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow5">
                                                    <input  type="checkbox" id="checkbox_rowP5" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">6.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow6">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P6">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow6">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow6">
                                                    <input  type="checkbox" id="checkbox_rowP6" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">7.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow7">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P7">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow7">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow7">
                                                    <input  type="checkbox" id="checkbox_rowP7" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">8.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow8">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P8">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow8">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow8">
                                                    <input  type="checkbox" id="checkbox_rowP8" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">9.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow9">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P9">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow9">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow9">
                                                    <input  type="checkbox" id="checkbox_rowP9" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">10.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow10">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P10">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow10">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow10">
                                                    <input  type="checkbox" id="checkbox_rowP10" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">11.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow11">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P11">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow11">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow11">
                                                    <input  type="checkbox" id="checkbox_rowP11" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">12.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow12">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P12">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow12">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow12">
                                                    <input  type="checkbox" id="checkbox_rowP12" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">13.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow13">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P13">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow13">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow13">
                                                    <input  type="checkbox" id="checkbox_rowP13" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">14.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow14">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P14">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow14">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow14">
                                                    <input  type="checkbox" id="checkbox_rowP14" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">15.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow15">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_P15">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow15">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateOrderRow15">
                                                    <input  type="checkbox" id="checkbox_rowP15" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                </table>
                                <br/>
                                <table border="0px" style="padding-left:10;  margin-bottom:1;" id="">
                                    <tr>
                                        <th align="Left" width="100" nowrap="true" >
                                            <span class="StandardLabel" style="color: red;">Potwierdzam zaznaczenie poprawnych kolorów i zamawiam matryce:</span>
                                        </th>
                                        <td align="Left" width="auto" style="padding:2 5 2 5 ;">
                                            <span class="RenDiv_Disabled_TextInput">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobPlateRenewalConfirmation">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <!-- PLATES SECTION END -->
                            <!-- MODIFICATION SECTION BEGIN -->
                            <div id="modification" style="position: absolute; visibility: hidden; background:#E3E3E3; border-left:1px solid dimgray; height:1500; width:890;">
                                <br/>
                                <table style="padding-left:15; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Data zamówienia zmian:</span>
                                        </th>
                                        <td  align="Left" nowrap="true" style="padding:2 2 2 2 ;" >
                                            <span>
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobPlateOrderDate">
                                                        <input type="date" class="ModDiv_Disabled_DateInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <th align="Left" nowrap="true" style="padding:2;">
                                        <span class="StandardLabel">Nazwa projektu:</span>
                                    </th>
                                    <td  align="Left" nowrap="true" style="padding:2 2 2 2 ;" >
                                        <span>
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="JobAlias">
                                                    <input type="text" style="width:700px;" class="ComDiv_Disabled_DateInput" disabled="disabled">
                                                        <xsl:attribute name="value">
                                                            <xsl:value-of select="." />
                                                        </xsl:attribute>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </span>
                                    </td>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true">
                                            <span class="StandardLabel">Indeks 1 projektu klienta :</span>
                                        </th>
                                        <td align="left" nowrap="true">
                                            <span >
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCustomerID1Number" >
                                                        <input type="text" style="width:auto;" class="ComDiv_Disabled_TextInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                        <th align="Left" nowrap="true" style="padding-left:10;">
                                            <span class="StandardLabel">Indeks 2 projektu klienta:</span>
                                        </th>
                                        <td align="left" nowrap="true">
                                            <span >
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCustomerID2Number">
                                                        <input type="text" style="width:auto;" class="ComDiv_Disabled_TextInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table >
                                    <th align="Left" nowrap="true" style="padding-left:15;">
                                        <span class="StandardLabel">Kod zadania:</span>
                                    </th>
                                    <td  align="Left" nowrap="true" class="tooltip">
                                        <span class="ModDiv_Disabled_TextInput">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="JobCode">
                                                    <xsl:apply-templates/>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </span>
                                    </td>
                                </table>
                                <table>
                                    <th align="Left" nowrap="true" style="padding-left:15;">
                                        <span class="StandardLabel">Kod projektu:</span>
                                    </th>
                                    <td class="tooltip" align="Left" nowrap="true" style="padding:2;">
                                        <span class="ModDiv_Disabled_TextInput">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="JobProjectCode">
                                                    <xsl:apply-templates/>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </span>
                                    </td>
                                </table>
                                <hr/>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="false" style="padding:2;">
                                            <span class="StandardLabel">Koordynator drukarni:</span>
                                        </th>
                                        <td align="Left" width="auto" style="padding:2 5 2 5 ;">
                                            <span class="ProjectDiv_Disabled_TextInput">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobPrintCoordinator">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Krzywa kompensacyjna:</span>
                                        </th>
                                        <td align="Left" width="auto" style="padding:2 5 2 5 ;">
                                            <span class="ProjectDiv_Disabled_TextInput">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCompensationCurve">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table cellpadding="0" cellspacing="0" style="padding-left:16;  margin-bottom:1;">
                                    <td style="padding-top:0.2cm; padding-bottom:0.2cm; ">
                                        <span class="StandardLabel">
                                        Informacje na temat zmian w matrycach:
                                    </span>
                                    </td>
                                    <tr>
                                        <td class="ModDiv_Disabled_TextInput" style="padding:5 5 5 5 ;">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="JobPlateModificationComments">
                                                    <p style="text-align:left; height:80; width:810px;">
                                                        <xsl:apply-templates/>
                                                    </p>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </td>
                                    </tr>
                                </table>
                                <br/>
                                <table border="0px" width="100" style="padding-left:10;  margin-bottom:1;" id="ModificationPlatesOrder_Activator">
                                    <th align="Left" nowrap="true" style="padding:2;">
                                        <span class="StandardLabel" style=" color:red">Zamawiam matryce:</span>
                                    </th>
                                    <td align="Left"  width="auto" nowrap="true" style="padding:2 5 2 5 ;">
                                        <span class="ModDiv_Disabled_TextInput">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="JobPlateOrderConfirmation">
                                                    <xsl:apply-templates/>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </span>
                                    </td>
                                </table>
                                <br/>
                                <table border="1px" bordercolor="dimgray" rules="cols" width="95%" style="border-collapse: collapse; margin-left:10;" class="hoverTable">
                                    <tr>
                                        <th align="center" colspan="13" nowrap="true" style="padding:2; background:#000; ">
                                            <span class="SummaryLabel" style="font-size: 20px;">
                                            SPECYFIKACJA KOMPLETU MATRYC:
                                        </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="3" class="SummaryLabel">
                                            <span>Lp.</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="80" class="SummaryLabel">
                                            <span>Kolor</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="30" class="SummaryLabel">
                                            <span>Lpi</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="30" class="SummaryLabel">
                                            <span>Kąt</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="30" class="SummaryLabel">
                                            <span>DC</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="15" class="SummaryLabel">
                                            <span>Zadruk</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="10" class="SummaryLabel">
                                            <span>Raster</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="5" class="SummaryLabel">
                                            <span>Kop.</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="50" class="SummaryLabel">
                                            <span>Płyta</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="55" class="SummaryLabel">
                                            <span>Modyfikuj:</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">1.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow1">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M1">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style=" font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow1">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow1">
                                                    <input  type="checkbox" id="checkbox_rowM1" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">2.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow2">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M2">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow2">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow2">
                                                    <input  type="checkbox" id="checkbox_rowM2" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">3.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow3">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M3">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow3">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow3">
                                                    <input  type="checkbox" id="checkbox_rowM3" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">4.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow4">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M4">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow4">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow4">
                                                    <input  type="checkbox" id="checkbox_rowM4" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">5.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow5">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow5">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow5">
                                                    <input  type="checkbox" id="checkbox_rowM5" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">6.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow6">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M6">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow6">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow6">
                                                    <input  type="checkbox" id="checkbox_rowM6" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">7.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow7">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M7">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow7">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow7">
                                                    <input  type="checkbox" id="checkbox_rowM7" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">8.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow8">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M8">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow8">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow8">
                                                    <input  type="checkbox" id="checkbox_rowM8" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">9.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow9">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M9">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow9">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow9">
                                                    <input  type="checkbox" id="checkbox_rowM9" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">10.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow10">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M10">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow10">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow10">
                                                    <input  type="checkbox" id="checkbox_rowM10" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">11.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow11">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M11">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow11">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow11">
                                                    <input  type="checkbox" id="checkbox_rowM11" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">12.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow12">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M12">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow12">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow12">
                                                    <input  type="checkbox" id="checkbox_rowM12" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">13.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow13">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M13">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow13">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow13">
                                                    <input  type="checkbox" id="checkbox_rowM13" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">14.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow14">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M14">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow14">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow14">
                                                    <input  type="checkbox" id="checkbox_rowM14" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">15.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow15">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_M15">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow15">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateModificationRow15">
                                                    <input  type="checkbox" id="checkbox_rowM15" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                            <!-- RENEWAL SECTION BEGIN -->
                            <div id="renewal" style="position: absolute; visibility: hidden; background:#E3E3E3; border-left:1px solid dimgray; height:2000; width:890;">
                                <br/>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Data zamówienia wznowień:</span>
                                        </th>
                                        <td  align="Left" nowrap="true" style="padding:2 2 2 2 ;" >
                                            <span>
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobPlateOrderDate">
                                                        <input id="PlatesOrderDate_ID" type="date" class="PlatesDiv_Disabled_DateInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <th align="Left" nowrap="true" style="padding:2;">
                                        <span class="StandardLabel">Nazwa projektu:</span>
                                    </th>
                                    <td  align="Left" nowrap="true" style="padding:2 2 2 2 ;" >
                                        <span>
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="JobAlias">
                                                    <input type="text" class="PlatesDiv_Disabled_DateInput" disabled="disabled" style="width:700px;">
                                                        <xsl:attribute name="value">
                                                            <xsl:value-of select="." />
                                                        </xsl:attribute>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </span>
                                    </td>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true">
                                            <span class="StandardLabel">Indeks 1 projektu klienta :</span>
                                        </th>
                                        <td align="left" nowrap="true">
                                            <span >
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCustomerID1Number" >
                                                        <input type="text"  style="width:auto;" class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                        <th align="Left" nowrap="true" style="padding-left:10;">
                                            <span class="StandardLabel">Indeks 2 projektu klienta:</span>
                                        </th>
                                        <td align="left" nowrap="true">
                                            <span >
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCustomerID2Number">
                                                        <input type="text" style="width:auto;" class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Kod zadania:</span>
                                        </th>
                                        <td  align="Left" nowrap="true" >
                                            <span class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCode">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Kod projektu:</span>
                                        </th>
                                        <td align="Left" nowrap="true" style="padding:2;" >
                                            <span class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobProjectCode">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <hr/>
                                <table style="padding-left:10;  margin-bottom:1;">
                                    <td style="padding-top:0.2cm; padding-bottom:0.2cm; ">
                                        <span class="StandardLabel">
                                        Informacje na temat wznowień:
                                    </span>
                                    </td>
                                    <tr>
                                        <td>
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="JobPlateRenewalComments">
                                                    <textarea class="ProjectDiv_Disabled_TextArea" disabled="disabled">
                                                        <xsl:value-of select="."/>
                                                    </textarea>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </td>
                                    </tr>
                                </table>
                                <br/>
                                <table border="0px" style="padding-left:10;  margin-bottom:1;" id="RenewalOrder_Activator">
                                    <tr>
                                        <th align="Left" width="100" nowrap="true" >
                                            <span class="StandardLabel" style="color: red;">Potwierdzam zaznaczenie poprawnych kolorów i zamawiam wznowienia:</span>
                                        </th>
                                        <td align="Left" width="auto" style="padding:2 5 2 5 ;">
                                            <span class="RenDiv_Disabled_TextInput">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobPlateRenewalConfirmation">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <br/>
                                <table border="1px" bordercolor="dimgray" rules="cols" width="95%" style="border-collapse: collapse; margin-left:10;" class="hoverTable">
                                    <tr>
                                        <th align="center" colspan="13" nowrap="true" style="padding:2; background:#000; ">
                                            <span class="SummaryLabel" style="font-size: 20px;">
                                            SPECYFIKACJA KOMPLETU MATRYC:
                                        </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="3" class="SummaryLabel">
                                            <span>Lp.</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="80" class="SummaryLabel">
                                            <span>Kolor</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="30" class="SummaryLabel">
                                            <span>Lpi</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="30" class="SummaryLabel">
                                            <span>Kąt</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="30" class="SummaryLabel">
                                            <span>DC</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="15" class="SummaryLabel">
                                            <span>Zadruk</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="10" class="SummaryLabel">
                                            <span>Raster</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="5" class="SummaryLabel">
                                            <span>Kop.</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="50" class="SummaryLabel">
                                            <span>Płyta</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="55" class="SummaryLabel">
                                            <span>Wznów</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">1.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow1">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R1">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style=" font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow1">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow1">
                                                    <input  type="checkbox" id="checkbox_rowR1" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">2.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow2">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R2">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow2">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow2">
                                                    <input  type="checkbox" id="checkbox_rowR2" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">3.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow3">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R3">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow3">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow3">
                                                    <input  type="checkbox" id="checkbox_rowR3" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">4.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow4">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R4">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow4">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow4">
                                                    <input  type="checkbox" id="checkbox_rowR4" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">5.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow5">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow5">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow5">
                                                    <input  type="checkbox" id="checkbox_rowR5" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">6.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow6">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R6">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow6">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow6">
                                                    <input  type="checkbox" id="checkbox_rowR6" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">7.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow7">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R7">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow7">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow7">
                                                    <input  type="checkbox" id="checkbox_rowR7" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">8.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow8">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R8">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow8">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow8">
                                                    <input  type="checkbox" id="checkbox_rowR8" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">9.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow9">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R9">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow9">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow9">
                                                    <input  type="checkbox" id="checkbox_rowR9" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">10.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow10">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R10">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow10">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow10">
                                                    <input  type="checkbox" id="checkbox_rowR10" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">11.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow11">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R11">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow11">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow11">
                                                    <input  type="checkbox" id="checkbox_rowR11" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">12.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow12">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R12">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow12">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow12">
                                                    <input  type="checkbox" id="checkbox_rowR12" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">13.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow13">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R13">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow13">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow13">
                                                    <input  type="checkbox" id="checkbox_rowR13" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">14.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow14">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R14">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow14">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow14">
                                                    <input  type="checkbox" id="checkbox_rowR14" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">15.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow15">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_R15">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow15">
                                                        <input id="row-Q" class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateRenewalRow15">
                                                    <input  type="checkbox" id="checkbox_rowR15" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                            <!-- RENEWAL SECTION END -->
                            <!-- COMPLAINT SECTION BEGIN -->
                            <div id="complaint" style="position: absolute; visibility: hidden; background:#E3E3E3; border-left:1px solid dimgray; height:2000; width:890;">
                                <br/>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Data złożenia reklamacji do matryc:</span>
                                        </th>
                                        <td  align="Left" nowrap="true" style="padding:2 2 2 2 ;" >
                                            <span>
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobPlateOrderDate">
                                                        <input type="date" class="ComDiv_Disabled_DateInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <th align="Left" nowrap="true" style="padding:2;">
                                        <span class="StandardLabel">Nazwa projektu:</span>
                                    </th>
                                    <td  align="Left" nowrap="true" style="padding:2 2 2 2 ;" >
                                        <span>
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="JobAlias">
                                                    <input type="text" style="width:700px;" class="ComDiv_Disabled_DateInput" disabled="disabled">
                                                        <xsl:attribute name="value">
                                                            <xsl:value-of select="." />
                                                        </xsl:attribute>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </span>
                                    </td>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true">
                                            <span class="StandardLabel">Indeks 1 projektu klienta :</span>
                                        </th>
                                        <td align="left" nowrap="true">
                                            <span >
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCustomerID1Number" >
                                                        <input type="text" style="width:auto;" class="ComDiv_Disabled_TextInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                        <th align="Left" nowrap="true" style="padding-left:10;">
                                            <span class="StandardLabel">Indeks 2 projektu klienta:</span>
                                        </th>
                                        <td align="left" nowrap="true">
                                            <span >
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCustomerID2Number">
                                                        <input type="text" style="width:auto;" class="ComDiv_Disabled_TextInput" disabled="disabled">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Kod zadania:</span>
                                        </th>
                                        <td  align="Left" nowrap="true" >
                                            <span class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobCode">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <table style="padding-left:10; margin-bottom:1;">
                                    <tr>
                                        <th align="Left" nowrap="true" style="padding:2;">
                                            <span class="StandardLabel">Kod projektu:</span>
                                        </th>
                                        <td align="Left" nowrap="true" style="padding:2;" >
                                            <span class="PlatesDiv_Disabled_TextInput" disabled="disabled">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobProjectCode">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <hr/>
                                <table style="padding-left:10;  margin-bottom:1;">
                                    <td style="padding-top:0.2cm; padding-bottom:0.2cm; ">
                                        <span class="StandardLabel">
                                        Opis reklamacji:
                                    </span>
                                    </td>
                                    <tr>
                                        <td>
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="JobPlateComplaintComments">
                                                    <textarea class="ComDiv_Disabled_TextArea" disabled="disabled">
                                                        <xsl:value-of select="."/>
                                                    </textarea>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </td>
                                    </tr>
                                </table>
                                <br/>
                                <table border="0px" style="padding-left:10;  margin-bottom:1;" id="ComplaintOrder_Activator">
                                    <tr>
                                        <th align="Left" width="100" nowrap="true" >
                                            <span class="StandardLabel" style="color: red;">Przyjęto zlecenie do rozpatrzenia reklamacji:</span>
                                        </th>
                                        <td align="Left" width="auto" style="padding:2 5 2 5 ;">
                                            <span class="ProjectDiv_Disabled_TextInput">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="JobPlateComplaintConfirmation">
                                                        <xsl:apply-templates/>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                                <br/>
                                <table border="1px" bordercolor="dimgray" rules="cols" width="95%" style="border-collapse: collapse; margin-left:10;" class="hoverTable">
                                    <tr>
                                        <th align="center" colspan="13" nowrap="true" style="padding:2; background:#000; ">
                                            <span class="SummaryLabel" style="font-size: 20px;">
                                            SPECYFIKACJA KOMPLETU MATRYC:
                                        </span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="3" class="SummaryLabel">
                                            <span>Lp.</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="80" class="SummaryLabel">
                                            <span>Kolor</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="30" class="SummaryLabel">
                                            <span>Lpi</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="30" class="SummaryLabel">
                                            <span>Kąt</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="30" class="SummaryLabel">
                                            <span>DC</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="15" class="SummaryLabel">
                                            <span>Zadruk</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="10" class="SummaryLabel">
                                            <span>Raster</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="5" class="SummaryLabel">
                                            <span>Kop.</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="50" class="SummaryLabel">
                                            <span>Płyta</span>
                                        </th>
                                        <th bgcolor="#3F3F3F" nowrap="true" width="55" class="SummaryLabel">
                                            <span>Do reklamacji:</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">1.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow1">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C1">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style=" font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow1">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="font-size: 14px; ">
                                            <div class="row1">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow1">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow1">
                                                    <input  type="checkbox" id="checkbox_rowC1" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">2.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow2">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C2">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow2">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row2">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow2">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow2">
                                                    <input  type="checkbox" id="checkbox_rowC2" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">3.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow3">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C3">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow3">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row3">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow3">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow3">
                                                    <input  type="checkbox" id="checkbox_rowC3" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">4.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow4">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C4">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow4">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row4">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow4">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow4">
                                                    <input  type="checkbox" id="checkbox_rowC4" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">5.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow5">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow5">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row5">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow5">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow5">
                                                    <input  type="checkbox" id="checkbox_rowC5" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">6.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow6">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C6">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow6">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row6">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow6">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow6">
                                                    <input  type="checkbox" id="checkbox_rowC6" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">7.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow7">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C7">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow7">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row7">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow7">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow7">
                                                    <input  type="checkbox" id="checkbox_rowC7" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">8.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow8">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C8">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow8">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row8">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow8">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow8">
                                                    <input  type="checkbox" id="checkbox_rowC8" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">9.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow9">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C9">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow9">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row9">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow9">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow9">
                                                    <input  type="checkbox" id="checkbox_rowC9" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">10.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow10">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C10">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow10">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row10">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow10">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow10">
                                                    <input  type="checkbox" id="checkbox_rowC10" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">11.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow11">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C11">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow11">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row11">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow11">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow11">
                                                    <input  type="checkbox" id="checkbox_rowC11" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">12.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow12">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C12">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow12">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row12">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow12">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow12">
                                                    <input  type="checkbox" id="checkbox_rowC12" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">13.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow13">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C13">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow13">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row13">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow13">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow13">
                                                    <input  type="checkbox" id="checkbox_rowC13" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">14.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow14">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C14">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow14">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row14">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow14">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow14">
                                                    <input  type="checkbox" id="checkbox_rowC14" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th bgcolor="#3F3F3F" nowrap="true" style="padding:2 5 2 5;">
                                            <span class="SummaryLabel">15.</span>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ColorRow15">
                                                        <input class="SummaryDiv_Disabled_TextInput" disabled="disabled" id="Color_C15">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="LpiRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="AngleRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PatteringRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PrintTypeRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="ScreeningRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="CopiesRow15">
                                                        <input  class="SummaryDiv_Disabled_TextInput" size="5">
                                                            <xsl:attribute name="value">
                                                                <xsl:value-of select="." />
                                                            </xsl:attribute>
                                                        </input>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" style="padding:2 5 2 5; font-size: 14px; ">
                                            <div class="row15">
                                                <xsl:for-each select="JobSpec">
                                                    <xsl:for-each select="PlateAndThicknessRow15">
                                                        <span class="SummaryDiv_Disabled_TextInput">
                                                            <xsl:apply-templates/>
                                                        </span>
                                                    </xsl:for-each>
                                                </xsl:for-each>
                                            </div>
                                        </th>
                                        <th nowrap="true" class="chbx_class">
                                            <xsl:for-each select="JobSpec">
                                                <xsl:for-each select="PlateComplaintRow15">
                                                    <input  type="checkbox" id="checkbox_rowC15" value="yes" disabled="disabled" style="border:solid black 1px;">
                                                        <xsl:choose>
                                                            <xsl:when test=".='yes'">
                                                                <xsl:attribute name="value">yes</xsl:attribute>
                                                                <xsl:attribute name="checked">checked</xsl:attribute>
                                                            </xsl:when>
                                                        </xsl:choose>
                                                    </input>
                                                </xsl:for-each>
                                            </xsl:for-each>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                            <!-- COMPLAINT SECTION END -->
                    </td>
                </tr>
            </tbody>
        </table>
    </xsl:template>
</xsl:stylesheet>