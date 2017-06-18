$(document).ready(function () {
    var flagBit;
    var vendorCode;
    var yearRange;

    //budgetMode parameter create
    function budgetPayLoad() {
        var yearNow = new Date().getFullYear();
        var yearLast = yearNow - 1;           
        var yearArray = [yearLast, yearLast];
        var vendorCodeArray = ["681", "684", "40X", "406"];
        for (var i = 0; i < yearArray.length; i++) {
            for (var j = 0; j < vendorCodeArray.length; j++) {
                if (yearArray[i] == vendorCodeArray[j]) {
                    console.log('error!');
                } else {
                    var yearRange = parseInt(yearArray[i]);
                    var vendorCode = vendorCodeArray[j];
                    budgetRequest = `<request>
    <type_of_data>Budget</type_of_data>
    <records_from>1</records_from>
    <max_records>1000</max_records>
    <search_criteria>
        <criteria>
            <name>expense_category</name>
            <type>value</type>
            <value>${vendorCode}</value>
        </criteria>
        <criteria>
            <name>year</name>
            <type>value</type>
            <value>${yearRange}</value>
        </criteria>
    </search_criteria>
    <response_columns>
        <column>agency</column>
        <column>department</column>
         <column>expense_category</column>
         <column>budget_code</column>
          <column>budget_name</column>
          <column>pre_encumbered</column>
          <column>accrued_expense</column>
          <column>year</column>
          <column>post_adjustment</column>
        <column>modified</column>
        <column>adopted</column>
        <column>encumbered</column>
        <column>cash_expense</column>               
    </response_columns>
</request>`;                    
                    budgetPayLoadMode(budgetRequest);
                }

            }
        }
    };

    //Contracts parameter create
        function contractActiveRegisteredPayLoad() {
        var yearArray = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];
        var vendorCodeArray = ["VS00013433", "VC00168092", "0003387756", "0001196340"];
        for (var i = 0; i < yearArray.length; i++) {
            for (var j = 0; j < vendorCodeArray.length; j++) {
                if (yearArray[i] == vendorCodeArray[j]) {
                    console.log('error!');
                } else {
                    var yearRange = parseInt(yearArray[i]);
                    var vendorCode = vendorCodeArray[j];
                    spendingRequest = `<request>
    <type_of_data>Spending</type_of_data>
    <records_from>1</records_from>
    <max_records>1000</max_records>
    <search_criteria>
        <criteria>
            <name>payee_code</name>
            <type>value</type>
            <value>${vendorCode}</value>
        </criteria>
        <criteria>
            <name>calendar_year</name>
            <type>value</type>
            <value>${yearRange}</value>
        </criteria>
    </search_criteria>
    <response_columns>
        <column>agency</column>
        <column>fiscal_year</column>
        <column>spending_category</column>
        <column>document_id</column>
        <column>payee_name</column>
        <column>check_amount</column>
        <column>department</column>
        <column>sub_vendor</column>
        <column>sub_contract_reference_id</column>
        <column>expense_category</column>
        <column>calendar_year</column>
        <column>contract_ID</column>
        <column>contract_purpose</column>
        <column>issue_date</column>
        <column>capital_project</column>
        <column>mwbe_category</column>
        <column>associated_prime_vendor</column>
        <column>industry</column>        
    </response_columns>
</request>`;
                    spendingCityWideMode(spendingRequest);
                }

            }
        }
    };


    //spending parameter create
    function cuReady() {
        var yearArray = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];
        var vendorCodeArray = ["VS00013433", "VC00168092", "0003387756", "0001196340"];
        for (var i = 0; i < yearArray.length; i++) {
            for (var j = 0; j < vendorCodeArray.length; j++) {
                if (yearArray[i] == vendorCodeArray[j]) {
                    console.log('error!');
                } else {
                    var yearRange = parseInt(yearArray[i]);
                    var vendorCode = vendorCodeArray[j];
                    spendingRequest = `<request>
    <type_of_data>Spending</type_of_data>
    <records_from>1</records_from>
    <max_records>1000</max_records>
    <search_criteria>
        <criteria>
            <name>payee_code</name>
            <type>value</type>
            <value>${vendorCode}</value>
        </criteria>
        <criteria>
            <name>calendar_year</name>
            <type>value</type>
            <value>${yearRange}</value>
        </criteria>
    </search_criteria>
    <response_columns>
        <column>agency</column>
        <column>fiscal_year</column>
        <column>spending_category</column>
        <column>document_id</column>
        <column>payee_name</column>
        <column>check_amount</column>
        <column>department</column>
        <column>sub_vendor</column>
        <column>sub_contract_reference_id</column>
        <column>expense_category</column>
        <column>calendar_year</column>
        <column>contract_ID</column>
        <column>contract_purpose</column>
        <column>issue_date</column>
        <column>capital_project</column>
        <column>mwbe_category</column>
        <column>associated_prime_vendor</column>
        <column>industry</column>        
    </response_columns>
</request>`;
                    spendingCityWideMode(spendingRequest);
                }

            }
        }
    };
    //spending-otherCity parameter create
    function spendingOtherThanCity() {
        var yearArray = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];
        var vendorCodeArray = ["manpowergroup public sector, inc", "manpowergroup us inc", "experis us inc", "comsys information technology services, llc"];
        for (var i = 0; i < yearArray.length; i++) {
            for (var j = 0; j < vendorCodeArray.length; j++) {
                if (yearArray[i] == vendorCodeArray[j]) {
                    console.log('error!');
                } else {
                    var yearRange = parseInt(yearArray[i]);
                    var vendorCode = vendorCodeArray[j];
                    spendingRequest = `<request>
    <type_of_data>Spending_OGE</type_of_data>
    <records_from>1</records_from>
    <max_records>1000</max_records>
    <search_criteria>
        <criteria>
            <name>payee_name</name>
            <type>value</type>
            <value>${vendorCode}</value>
        </criteria>
        <criteria>
            <name>calendar_year</name>
            <type>value</type>
            <value>${yearRange}</value>
        </criteria>
    </search_criteria>
    <response_columns>
        <column>other_government_entities</column>      
        <column>spending_category</column>
        <column>check_amount</column>
          <column>department</column>
          <column>commodity_line</column>
           <column>expense_category</column>
              <column>calendar_year</column>              
        <column>contract_id</column>
        <column>contract_purpose</column>
        <column>capital_project</column>
         <column>budget_name</column>
          <column>entity_contract_number</column>
         <column>fiscal_year</column>
        <column>payee_name</column>    
              
    </response_columns>
</request>`;
                    spendingOtherEntitiesMode(spendingRequest);
                }

            }
        }
    };


    $("#TableTest").hide();
    var shoot = (function () {
        $('#searchparameterflag').change(function () {
            flagBit = $(this).find('option:selected').text();
            if (flagBit == "Budget") {
                budgetPayLoad();
                $("#TableTest").show();
                $("#budgetView").show();
                $("#alertSignal").hide();              
                $("#contractsView").hide();
                $("#contractsViewPending").hide();
                $("#contractsViewOther").hide();
                $("#spendingCityWideView").hide();
                $("#spendingOtherView").hide();
                outputFlagBit();
            }
            else if (flagBit == "Contracts-(Citywide) with Active and Registered status Category-Expense") {
                contractsMode(contractsRequestNow);
                $("#TableTest").show();
                $("#alertSignal").hide();
                $("#contractsView").show();
                $("#contractsViewPending").hide();
                $("#budgetView").hide();
                $("#contractsViewOther").hide();
                contractsMode(contractsRequestNow);

            }
            else if (flagBit == "Contracts-(Citywide)with Pending status Category-Expense") {
                contractsModePending(contractsRequestNowPending);
                $("#TableTest").show();
                $("#alertSignal").hide();
                $("#budgetView").hide();
                $("#contractsView").hide();
                $("#contractsViewPending").show();
                $("#contractsViewOther").hide();
            }
            else if (flagBit == "Contracts-(Other Government Entities)with Active and Registered status Category-Expense") {
                $("#TableTest").hide();
                $("#alertSignal").show();
                document.getElementById("alertSignal").innerHTML = "No Matched Data Found!";
            }
            else if (flagBit == "Spending-Citywide") {
                cuReady();
                $("#TableTest").show();
                $("#alertSignal").hide();
                $("#budgetView").hide();
                $("#contractsView").hide();
                $("#contractsViewPending").hide();
                $("#contractsViewOther").hide();
                $("#spendingCityWideView").show();
                outputFlagBit();
            }
            else if (flagBit == "Spending-Other Government Entities") {
                spendingOtherThanCity();
                $("#TableTest").show();
                $("#alertSignal").hide();
                $("#budgetView").hide();
                $("#contractsView").hide();
                $("#contractsViewPending").hide();
                $("#contractsViewOther").hide();
                $("#spendingCityWideView").hide();
                $("#spendingOtherView").show();
                outputFlagBit();
            }
        });
    });
    shoot();

    //For Budget Mode
        function budgetPayLoadMode(budgetRequest) {
        var boot = function () {
            $.ajax({
                type: "POST",
                url: "http://www.checkbooknyc.com/api",
                data: `${budgetRequest}`,
                contentType: "text/xml",
                crossDomain: true,
                dataType: "xml",
                cache: false,
                error: function () { alert("No data found."); },
                success: function (xml) {
                    var result = (new XMLSerializer()).serializeToString(xml);
                    xmlDoc = $.parseXML(result),
                        $xml = $(xmlDoc),
                        $response = $xml.find("response");
                    var countFlag = parseInt($response.find("record_count").text());
                    var countFlagProcessed = (countFlag / 1000) + 1;
                    if (2 < countFlagProcessed < 3) {
                        spendingRequestMini = budgetRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 1001 + '<\/records_from>');
                        budgetCityWideModeMini(spendingRequestMini);
                    } else if (3 < countFlagProcessed < 4) {
                        spendingRequestMini = budgetRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 2001 + '<\/records_from>');
                        budgetCityWideModeMini(spendingRequestMini);
                    } else if (4 < countFlagProcessed < 5) {
                        spendingRequestMini = budgetRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 3001 + '<\/records_from>');
                        budgetCityWideModeMini(spendingRequestMini);
                    } else if (5 < countFlagProcessed < 6) {
                        spendingRequestMini = budgetRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 4001 + '<\/records_from>');
                        budgetCityWideModeMini(spendingRequestMini);
                    }

                    $response.find("transaction").each(function () {
                        var agency = $(this).find("agency").text();
                        var year = $(this).find("year").text();
                        var department = $(this).find("department").text();
                        var aptPin = $(this).find("expense_category").text();
                        var department = $(this).find("budget_code").text();
                        var budgetCode = $(this).find("budget_name").text();
                        var budgetNode = $(this).find("modified").text();
                        var modified = $(this).find("adopted").text();
                        var adopted = $(this).find("pre_encumbered").text();
                        var preEncumbered = $(this).find("encumbered").text();
                        var encumbered = $(this).find("cash_expense").text();
                        var cashExpense = $(this).find("post_adjustment").text();
                        var postAdjustment = $(this).find("accrued_expense").text();                      
                        
                        var tr = $("<tr/>");
                        tr.append("<td>" + agency + "</td>"+ "<td>" + year + "</td>"+ "<td>" + department + "</td>" + "<td>" + aptPin + "</td>" + "<td>" + department + "</td>" + "<td>" + budgetCode + "</td>" + "<td>" + budgetNode + "</td>" + "<td>" + modified + "</td>" + "<td>" + adopted + "</td>" + "<td>"
                            + preEncumbered + "</td>" + "<td>" + encumbered + "</td>" + "<td>" + cashExpense + "</td>" + "<td>" + postAdjustment + "</td>");
                        $("#TableTest").append(tr);
                    });
                }
            });
        };
        boot();
    };

    function budgetCityWideModeMini(spendingRequestMini) {
        var boot = function () {
            $.ajax({
                type: "POST",
                url: "http://www.checkbooknyc.com/api",
                data: `${spendingRequestMini}`,
                contentType: "text/xml",
                crossDomain: true,
                dataType: "xml",
                cache: false,
                error: function () { alert("No data found."); },
                success: function (xml) {
                    var result = (new XMLSerializer()).serializeToString(xml);
                    xmlDoc = $.parseXML(result),
                        $xml = $(xmlDoc),
                        $response = $xml.find("response");
                    $response.find("transaction").each(function () {
                        var agency = $(this).find("agency").text();
                        var year = $(this).find("year").text();
                        var department = $(this).find("department").text();
                        var aptPin = $(this).find("expense_category").text();
                        var department = $(this).find("budget_code").text();
                        var budgetCode = $(this).find("budget_name").text();
                        var budgetNode = $(this).find("modified").text();
                        var modified = $(this).find("adopted").text();
                        var adopted = $(this).find("pre_encumbered").text();
                        var preEncumbered = $(this).find("encumbered").text();
                        var encumbered = $(this).find("cash_expense").text();
                        var cashExpense = $(this).find("post_adjustment").text();
                        var postAdjustment = $(this).find("accrued_expense").text();     

                        var tr = $("<tr/>");
                  tr.append("<td>" + agency + "</td>"+ "<td>" + year + "</td>"+ "<td>" + department + "</td>" + "<td>" + aptPin + "</td>" + "<td>" + department + "</td>" + "<td>" + budgetCode + "</td>" + "<td>" + budgetNode + "</td>" + "<td>" + modified + "</td>" + "<td>" + adopted + "</td>" + "<td>"
                            + preEncumbered + "</td>" + "<td>" + encumbered + "</td>" + "<td>" + cashExpense + "</td>" + "<td>" + postAdjustment + "</td>");
                        $("#TableTest").append(tr);
                    });
                }
            });
        };
        boot();
    };
    //For cityWide-Spending
    function spendingCityWideMode(spendingRequest) {
        var boot = function () {
            $.ajax({
                type: "POST",
                url: "http://www.checkbooknyc.com/api",
                data: `${spendingRequest}`,
                contentType: "text/xml",
                crossDomain: true,
                dataType: "xml",
                cache: false,
                error: function () { alert("No data found."); },
                success: function (xml) {
                    var result = (new XMLSerializer()).serializeToString(xml);
                    xmlDoc = $.parseXML(result),
                        $xml = $(xmlDoc),
                        $response = $xml.find("response");
                    var countFlag = parseInt($response.find("record_count").text());
                    var countFlagProcessed = (countFlag / 1000) + 1;
                    if (2 < countFlagProcessed < 3) {
                        spendingRequestMini = spendingRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 1001 + '<\/records_from>');
                        spendingCityWideModeMini(spendingRequestMini);
                    } else if (3 < countFlagProcessed < 4) {
                        spendingRequestMini = spendingRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 2001 + '<\/records_from>');
                        spendingCityWideModeMini(spendingRequestMini);
                    } else if (4 < countFlagProcessed < 5) {
                        spendingRequestMini = spendingRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 3001 + '<\/records_from>');
                        spendingCityWideModeMini(spendingRequestMini);
                    } else if (5 < countFlagProcessed < 6) {
                        spendingRequestMini = spendingRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 4001 + '<\/records_from>');
                        spendingCityWideModeMini(spendingRequestMini);
                    }

                    $response.find("transaction").each(function () {
                        var agency = $(this).find("agency").text();
                        var aptPin = $(this).find("associated_prime_vendor").text();
                        var department = $(this).find("calendar_year").text();
                        var budgetCode = $(this).find("contract_ID").text();
                        var budgetNode = $(this).find("contract_purpose").text();
                        var modified = $(this).find("check_amount").text();
                        var adopted = $(this).find("department").text();
                        var preEncumbered = $(this).find("document_id").text();
                        var encumbered = $(this).find("expense_category").text();
                        var cashExpense = $(this).find("fiscal_year").text();
                        var postAdjustment = $(this).find("industry").text();
                        var accruedExpense = $(this).find("issue_date").text();
                        var pci = $(this).find("mwbe_category").text();
                        var pin = $(this).find("payee_name").text();
                        var purpose = $(this).find("spending_category").text();
                        var rd = $(this).find("sub_vendor").text();
                        var std = $(this).find("sub_contract_reference_id").text();
                        var sb = $(this).find("capital_project").text();

                        var tr = $("<tr/>");
                        tr.append("<td>" + agency + "</td>" + "<td>" + aptPin + "</td>" + "<td>" + department + "</td>" + "<td>" + budgetCode + "</td>" + "<td>" + budgetNode + "</td>" + "<td>" + modified + "</td>" + "<td>" + adopted + "</td>" + "<td>"
                            + preEncumbered + "</td>" + "<td>" + encumbered + "</td>" + "<td>" + cashExpense + "</td>" + "<td>" + postAdjustment + "</td>"
                            + "<td>" + accruedExpense + "</td>" + "<td>" + pci + "</td>" + "<td>" + pin + "</td>" + "<td>" + purpose + "</td>" + "<td>" + rd + "</td>"
                            + "<td>" + std + "</td>" + "<td>" + sb + "</td>");
                        $("#TableTest").append(tr);
                    });
                }
            });
        };
        boot();
    };

    function spendingCityWideModeMini(spendingRequestMini) {
        var boot = function () {
            $.ajax({
                type: "POST",
                url: "http://www.checkbooknyc.com/api",
                data: `${spendingRequestMini}`,
                contentType: "text/xml",
                crossDomain: true,
                dataType: "xml",
                cache: false,
                error: function () { alert("No data found."); },
                success: function (xml) {
                    var result = (new XMLSerializer()).serializeToString(xml);
                    xmlDoc = $.parseXML(result),
                        $xml = $(xmlDoc),
                        $response = $xml.find("response");
                    $response.find("transaction").each(function () {
                        var agency = $(this).find("agency").text();
                        var aptPin = $(this).find("associated_prime_vendor").text();
                        var department = $(this).find("calendar_year").text();
                        var budgetCode = $(this).find("contract_ID").text();
                        var budgetNode = $(this).find("contract_purpose").text();
                        var modified = $(this).find("check_amount").text();
                        var adopted = $(this).find("department").text();
                        var preEncumbered = $(this).find("document_id").text();
                        var encumbered = $(this).find("expense_category").text();
                        var cashExpense = $(this).find("fiscal_year").text();
                        var postAdjustment = $(this).find("industry").text();
                        var accruedExpense = $(this).find("issue_date").text();
                        var pci = $(this).find("mwbe_category").text();
                        var pin = $(this).find("payee_name").text();
                        var purpose = $(this).find("spending_category").text();
                        var rd = $(this).find("sub_vendor").text();
                        var std = $(this).find("spent_to_date").text();

                        var tr = $("<tr/>");
                        tr.append("<td>" + agency + "</td>" + "<td>" + aptPin + "</td>" + "<td>" + department + "</td>" + "<td>" + budgetCode + "</td>" + "<td>" + budgetNode + "</td>" + "<td>" + modified + "</td>" + "<td>" + adopted + "</td>" + "<td>"
                            + preEncumbered + "</td>" + "<td>" + encumbered + "</td>" + "<td>" + cashExpense + "</td>" + "<td>" + postAdjustment + "</td>"
                            + "<td>" + accruedExpense + "</td>" + "<td>" + pci + "</td>" + "<td>" + pin + "</td>" + "<td>" + purpose + "</td>" + "<td>" + rd + "</td>"
                            + "<td>" + std + "</td>");
                        $("#TableTest").append(tr);
                    });
                }
            });
        };
        boot();
    };

    //for Other Governement Entities-spending
    function spendingOtherEntitiesMode(spendingRequest) {
        var boot = function () {
            $.ajax({
                type: "POST",
                url: "http://www.checkbooknyc.com/api",
                data: `${spendingRequest}`,
                contentType: "text/xml",
                crossDomain: true,
                dataType: "xml",
                cache: false,
                error: function () { alert("No data found."); },
                success: function (xml) {
                    var result = (new XMLSerializer()).serializeToString(xml);
                    xmlDoc = $.parseXML(result),
                        $xml = $(xmlDoc),
                        $response = $xml.find("response");
                    var countFlag = parseInt($response.find("record_count").text());
                    var countFlagProcessed = (countFlag / 1000) + 1;
                    if (2 < countFlagProcessed < 3) {
                        spendingRequestMini = spendingRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 1001 + '<\/records_from>');
                        spendingCityWideModeMini(spendingRequestMini);
                    } else if (3 < countFlagProcessed < 4) {
                        spendingRequestMini = spendingRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 2001 + '<\/records_from>');
                        spendingCityWideModeMini(spendingRequestMini);
                    } else if (4 < countFlagProcessed < 5) {
                        spendingRequestMini = spendingRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 3001 + '<\/records_from>');
                        spendingCityWideModeMini(spendingRequestMini);
                    } else if (5 < countFlagProcessed < 6) {
                        spendingRequestMini = spendingRequest.replace(/<records_from>[\s\S]*?<\/records_from>/, '<records_from>' + 4001 + '<\/records_from>');
                        spendingCityWideModeMini(spendingRequestMini);
                    }

                    $response.find("transaction").each(function () {
                        var agency = $(this).find("other_government_entities").text();
                        var aptPin = $(this).find("spending_category").text();
                        var department = $(this).find("check_amount").text();
                        var budgetCode = $(this).find("department").text();
                        var budgetNode = $(this).find("commodity_line").text();
                        var modified = $(this).find("expense_category").text();
                        var adopted = $(this).find("calendar_year").text();
                        var preEncumbered = $(this).find("contract_id").text();
                        var encumbered = $(this).find("contract_purpose").text();
                        var cashExpense = $(this).find("capital_project").text();
                        var postAdjustment = $(this).find("budget_name").text();
                        var accruedExpense = $(this).find("entity_contract_number").text();
                        var pci = $(this).find("fiscal_year").text();
                        var pin = $(this).find("payee_name").text();

                        var tr = $("<tr/>");
                        tr.append("<td>" + agency + "</td>" + "<td>" + aptPin + "</td>" + "<td>" + department + "</td>" + "<td>" + budgetCode + "</td>" + "<td>" + budgetNode + "</td>" + "<td>" + modified + "</td>" + "<td>" + adopted + "</td>" + "<td>"
                            + preEncumbered + "</td>" + "<td>" + encumbered + "</td>" + "<td>" + cashExpense + "</td>" + "<td>" + postAdjustment + "</td>"
                            + "<td>" + accruedExpense + "</td>" + "<td>" + pci + "</td>" + "<td>" + pin + "</td>");
                        $("#TableTest").append(tr);
                    });
                }
            });
        };
        boot();
    };

    function spendingCityWideModeMini(spendingRequestMini) {
        var boot = function () {
            $.ajax({
                type: "POST",
                url: "http://www.checkbooknyc.com/api",
                data: `${spendingRequestMini}`,
                contentType: "text/xml",
                crossDomain: true,
                dataType: "xml",
                cache: false,
                error: function () { alert("No data found."); },
                success: function (xml) {
                    var result = (new XMLSerializer()).serializeToString(xml);
                    xmlDoc = $.parseXML(result),
                        $xml = $(xmlDoc),
                        $response = $xml.find("response");
                    $response.find("transaction").each(function () {
                        var agency = $(this).find("other_government_entities").text();
                        var aptPin = $(this).find("spending_category").text();
                        var department = $(this).find("check_amount").text();
                        var budgetCode = $(this).find("department").text();
                        var budgetNode = $(this).find("commodity_line").text();
                        var modified = $(this).find("expense_category").text();
                        var adopted = $(this).find("calendar_year").text();
                        var preEncumbered = $(this).find("contract_id").text();
                        var encumbered = $(this).find("contract_purpose").text();
                        var cashExpense = $(this).find("capital_project").text();
                        var postAdjustment = $(this).find("budget_name").text();
                        var accruedExpense = $(this).find("entity_contract_number").text();
                        var pci = $(this).find("fiscal_year").text();
                        var pin = $(this).find("payee_name").text();

                        var tr = $("<tr/>");
                        tr.append("<td>" + agency + "</td>" + "<td>" + aptPin + "</td>" + "<td>" + department + "</td>" + "<td>" + budgetCode + "</td>" + "<td>" + budgetNode + "</td>" + "<td>" + modified + "</td>" + "<td>" + adopted + "</td>" + "<td>"
                            + preEncumbered + "</td>" + "<td>" + encumbered + "</td>" + "<td>" + cashExpense + "</td>" + "<td>" + postAdjustment + "</td>"
                            + "<td>" + accruedExpense + "</td>" + "<td>" + pci + "</td>" + "<td>" + pin + "</td>");
                        $("#TableTest").append(tr);
                    });
                }
            });
        };
        boot();
    };

    var outputFlagBit = function outputFlagBit() {
        $('#convert').click(function () {
            $(function () {
                var outputNameFlag = $('#fileoutputname').val();
                var outputFileType = $('input[name=outputTypeRadio]:checked').val();
                if (outputFileType == null && outputNameFlag != null && outputNameFlag != "") {
                    outputCsv(outputNameFlag);
                } else if (outputFileType == "xml" && outputNameFlag != null && outputNameFlag != "") {
                    outputXml(outputNameFlag);
                } else if (outputFileType == "csv" && outputNameFlag != null && outputNameFlag != "") {
                    outputCsv(outputNameFlag);
                }
            });
        });
    };
    //output CSV/XML file, use third-party library
    function outputCsv(outputNameFlag) {
        $('#TableTest').tableExport({ type: 'csv', fileName: outputNameFlag });
    };

    function outputXml(outputNameFlag) {
        $("#TableTest").tableExport({
            type: 'excel', fileName: outputNameFlag,
            excelFileFormat: 'xmlss',
            worksheetName: ['Table 1', 'Table 2', 'Table 3']
        });
    };

    function dataFlagViewerTrigger() {
        document.getElementById("dataFlagViewer").innerHTML = "No Data Found in this parameter! Please reload page and try again!";
    };


});
