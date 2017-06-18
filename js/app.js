$(document).ready(function () {
    var flagBit;
    var a = 2013;
    var b = 2;
    var vendorCode;
    var yearRange;    
    var budgetRequestNow = `<request>
    <type_of_data>Budget</type_of_data>
    <max_records>50</max_records>
    <records_from>1</records_from>    
    <search_criteria>
        <criteria>
            <name>year</name>
            <type>value</type>
            <value>${a + b}</value>
        </criteria>
    </search_criteria>
    <criteria>
            <name>expense_category</name>
            <type>value</type>
            <value>681</value>
        </criteria>
    <response_columns>
        <column>agency</column>
        <column>year</column>
        <column>department</column>
        <column>expense_category</column>
        <column>budget_code</column>
        <column>budget_name</column>
        <column>modified</column>
        <column>adopted</column>
        <column>pre_encumbered</column>
        <column>encumbered</column>
        <column>cash_expense</column>
        <column>post_adjustment</column>
        <column>accrued_expense</column>
    </response_columns>
</request>`;
    //Data for 2014 verndor=manpowergroup public
    var contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2014</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>VS00013433</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>        
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;

    var contractsRequestNowPending = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2014</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>VS00013433</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>          
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>            
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>             
               <column>document_code</column>
               <column>mwbe_category</column>              
        </response_columns>
        </request>`;

    var contractsRequestOther = `<request>
    <type_of_data>Contracts_OGE</type_of_data>
    <records_from>1</records_from>
    <max_records>500</max_records>
    <search_criteria>
        <criteria>
            <name>calendar_year</name>
            <type>value</type>
            <value>2015</value>
        </criteria>
        <criteria>
            <name>status</name>
            <type>value</type>
            <value>active</value>
        </criteria>
        <criteria>
            <name>category</name>
            <type>value</type>
            <value>expense</value>
        </criteria>
        <criteria>
            <name>prime_vendor</name>
            <type>value</type>
            <value>ManpowerGroup Public</value>
        </criteria>  
        </search_criteria>
    <response_columns>
        <column>contract_id</column>
        <column>purpose</column>
        <column>version</column>
        <column>parent_contract_id</column>
        <column>original_amount</column>
        <column>current_amount</column>
        <column>spent_to_date</column>
        <column>year</column>
        <column>other_government_entities</column>
        <column>prime_vendor</column>
        <column>contract_type</column>
        <column>award_method</column>
        <column>expense_category</column>
        <column>start_date</column>
        <column>end_date</column>
        <column>pin</column>
        <column>document_code</column>
        <column>budget_name</column>
        <column>commodity_line</column>
        <column>entity_contract_number</column>
        <column>contract_industry</column>
    </response_columns>
</request>`;

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


    $("#TableTest").hide();
    var shoot = (function () {
        $('#searchparameterflag').change(function () {
            console.log("love arrow shoot")
            flagBit = $(this).find('option:selected').text();
            console.log(90, flagBit);
            if (flagBit == "Budget") {
                budgetMode(budgetRequestNow);
                console.log("head", budgetRequestNow)
                $("#TableTest").show();
                $("#budgetView").show();
                $("#contractsView").hide();
                $("#contractsViewPending").hide();
                $("#contractsViewOther").hide();
                for (i = 0; i < 1; i++) {
                    let budgetRequestNow = `<request>
    <type_of_data>Budget</type_of_data>
    <max_records>50</max_records>
    <records_from>1</records_from>    
    <search_criteria>
        <criteria>
            <name>year</name>
            <type>value</type>
            <value>2016</value>
        </criteria>
            <criteria>
            <name>expense_category</name>
            <type>value</type>
            <value>684</value>
        </criteria>
    </search_criteria>
    <response_columns>
        <column>agency</column>
        <column>year</column>
        <column>department</column>
        <column>expense_category</column>
        <column>budget_code</column>
        <column>budget_name</column>
        <column>modified</column>
        <column>adopted</column>
        <column>pre_encumbered</column>
        <column>encumbered</column>
        <column>cash_expense</column>
        <column>post_adjustment</column>
        <column>accrued_expense</column>
    </response_columns>
</request>`;
                    budgetMode(budgetRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    let budgetRequestNow = `<request>
    <type_of_data>Budget</type_of_data>
    <max_records>50</max_records>
    <records_from>1</records_from>    
    <search_criteria>
        <criteria>
            <name>year</name>
            <type>value</type>
            <value>2016</value>
        </criteria>
            <criteria>
            <name>expense_category</name>
            <type>value</type>
            <value>40X</value>
        </criteria>
    </search_criteria>
    <response_columns>
        <column>agency</column>
        <column>year</column>
        <column>department</column>
        <column>expense_category</column>
        <column>budget_code</column>
        <column>budget_name</column>
        <column>modified</column>
        <column>adopted</column>
        <column>pre_encumbered</column>
        <column>encumbered</column>
        <column>cash_expense</column>
        <column>post_adjustment</column>
        <column>accrued_expense</column>
    </response_columns>
</request>`;
                    budgetMode(budgetRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    let budgetRequestNow = `<request>
    <type_of_data>Budget</type_of_data>
    <max_records>50</max_records>
    <records_from>1</records_from>    
    <search_criteria>
        <criteria>
            <name>year</name>
            <type>value</type>
            <value>2016</value>
        </criteria>
            <criteria>
            <name>expense_category</name>
            <type>value</type>
            <value>406</value>
        </criteria>
    </search_criteria>
    <response_columns>
        <column>agency</column>
        <column>year</column>
        <column>department</column>
        <column>expense_category</column>
        <column>budget_code</column>
        <column>budget_name</column>
        <column>modified</column>
        <column>adopted</column>
        <column>pre_encumbered</column>
        <column>encumbered</column>
        <column>cash_expense</column>
        <column>post_adjustment</column>
        <column>accrued_expense</column>
    </response_columns>
</request>`;
                    budgetMode(budgetRequestNow);
                };
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
                for (i = 0; i < 1; i++) {
                    //data for 2015 manpower public sector
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2015</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>VS00013433</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>           
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    //data for 2016 manpower public sector
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2016</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>VS00013433</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>         
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    //data for 2014 manpower us
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2014</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>VC00168092</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>          
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    //data for 2015 manpower us
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2015</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>VC00168092</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>          
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    //data for 2016 manpower us
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2016</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>VC00168092</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>         
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    //data for 2014 experis us
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2014</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>3387756</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>          
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    //data for 2015 experis us
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2015</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>3387756</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>            
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    //data for 2016 experis us
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2016</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>3387756</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>          
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    //data for 2014 comsys information technology services, llc
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2014</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>1196340</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>           
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    //data for 2015 comsys information technology services, llc
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2015</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>1196340</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>           
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };
                for (i = 0; i < 1; i++) {
                    //data for 2016 comsys information technology services, llc
                    let contractsRequestNow = `<request>
        <type_of_data>Contracts</type_of_data>
      <records_from>1</records_from>
      <max_records>50</max_records>
      <search_criteria>
        <criteria>
              <name>status</name>
              <type>value</type>
              <value>active</value>
          </criteria>
          <criteria>
              <name>category</name>
              <type>value</type>
              <value>expense</value>
          </criteria>
          <criteria>
              <name>calendar_year</name>
              <type>value</type>
              <value>2016</value>
          </criteria>
          <criteria>
              <name>vendor_code</name>
              <type>value</type>
              <value>1196340</value>
          </criteria>                      
        </search_criteria>
        <response_columns>
            <column>agency</column>
               <column>vendor</column>
               <column>contract_id</column>
               <column>version</column>
        <column>purpose</column>
            <column>parent_contract_id</column>
               <column>original_amount</column>
               <column>current_amount</column>
        <column>spent_to_date</column>        
            <column>apt_pin</column>
               <column>pin</column>
            <column>contract_type</column>
            <column>award_method</column>
            <column>expense_category</column>
               <column>start_date</column>
               <column>end_date</column>
               <column>industry</column>
               <column>year</column>
               <column>document_code</column>
               <column>mwbe_category</column>
               <column>sub_vendor</column>
               <column>sub_contract_reference_id</column>
               <column>associated_prime_vendor</column>
        </response_columns>
        </request>`;
                    contractsMode(contractsRequestNow);
                };

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
                $("#TableTest").hide();
                $("#alertSignal").show();
                document.getElementById("alertSignal").innerHTML = "No Matched Data Found!";
            }
        });
    });
    shoot();
    function budgetMode(budgetRequestNow) {
        console.log("TOAST");
        $('#submit').click(function () {
            $.ajax({
                type: "POST",
                url: "http://www.checkbooknyc.com/api",
                data: budgetRequestNow,
                contentType: "text/xml",
                crossDomain: true,
                dataType: "xml",
                cache: false,
                error: function () { alert("No data found."); },
                success: function (xml) {
                    var result = (new XMLSerializer()).serializeToString(xml);
                    console.log("BBOM");
                    xmlDoc = $.parseXML(result),
                        $xml = $(xmlDoc),
                        $response = $xml.find("response");
                    console.log(8);
                    $response.find("transaction").each(function () {
                        var agency = $(this).find("agency").text();
                        var year = $(this).find("year").text();
                        var department = $(this).find("department").text();
                        var expenseCategory = $(this).find("expense_category").text();
                        var budgetCode = $(this).find("budget_code").text();
                        var budgetNode = $(this).find("budget_name").text();
                        var modified = $(this).find("modified").text();
                        var adopted = $(this).find("adopted").text();
                        var preEncumbered = $(this).find("pre_encumbered").text();
                        var encumbered = $(this).find("encumbered").text();
                        var cashExpense = $(this).find("cash_expense").text();
                        var postAdjustment = $(this).find("post_adjustment").text();
                        var accruedExpense = $(this).find("accrued_expense").text();

                        var tr = $("<tr/>");
                        tr.append("<td>" + agency + "</td>" + "<td>" + year + "</td>" + "<td>" + department + "</td>" + "<td>" + expenseCategory
                            + "</td>" + "<td>" + budgetCode + "</td>" + "<td>" + budgetNode + "</td>" + "<td>" + modified + "</td>" + "<td>" + adopted + "</td>" + "<td>"
                            + preEncumbered + "</td>" + "<td>" + encumbered + "</td>" + "<td>" + cashExpense + "</td>" + "<td>" + postAdjustment + "</td>" + "<td>" + accruedExpense + "</td>");
                        $("#TableTest").append(tr);
                    });
                }
            });
        });
        // outputFlagBit();
    };

    function contractsMode(contractsRequestNow) {
        $('#submit').click(function () {
            console.log(2, 'BOOM');
            $.ajax({
                type: "POST",
                url: "http://www.checkbooknyc.com/api",
                data: contractsRequestNow,
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
                        var aptPin = $(this).find("apt_pin").text();
                        var department = $(this).find("associated_prime_vendor").text();
                        var expenseCategory = $(this).find("award_method").text();
                        var budgetCode = $(this).find("contract_id").text();
                        var budgetNode = $(this).find("contract_type").text();
                        var modified = $(this).find("current_amount").text();
                        var adopted = $(this).find("document_code").text();
                        var preEncumbered = $(this).find("end_date").text();
                        var encumbered = $(this).find("expense_category").text();
                        var cashExpense = $(this).find("industry").text();
                        var postAdjustment = $(this).find("mwbe_category").text();
                        var accruedExpense = $(this).find("original_amount").text();
                        var pci = $(this).find("parent_contract_id").text();
                        var pin = $(this).find("pin").text();
                        var purpose = $(this).find("purpose").text();
                        // var rd = $(this).find("registration_date").text();
                        var rd;
                        var std = $(this).find("spent_to_date").text();
                        var sb = $(this).find("sub_vendor").text();
                        var vendor = $(this).find("vendor").text();
                        var version = $(this).find("version").text();
                        var year = $(this).find("year").text();

                        var tr = $("<tr/>");
                        tr.append("<td>" + agency + "</td>" + "<td>" + aptPin + "</td>" + "<td>" + department + "</td>" + "<td>" + expenseCategory
                            + "</td>" + "<td>" + budgetCode + "</td>" + "<td>" + budgetNode + "</td>" + "<td>" + modified + "</td>" + "<td>" + adopted + "</td>" + "<td>"
                            + preEncumbered + "</td>" + "<td>" + encumbered + "</td>" + "<td>" + cashExpense + "</td>" + "<td>" + postAdjustment + "</td>"
                            + "<td>" + accruedExpense + "</td>" + "<td>" + pci + "</td>" + "<td>" + pin + "</td>" + "<td>" + purpose + "</td>" + "<td>" + std + "</td>" + "<td>" + sb + "</td>" + "<td>" + vendor + "</td>" + "<td>" + version + "</td>" + "<td>" + year + "</td>");
                        $("#TableTest").append(tr);
                    });
                }
            });
        });
        outputFlagBit();
    };

    function contractsModePending(contractsRequestNowPending) {
        $('#submit').click(function () {
            console.log(2, 'BOOM');
            $.ajax({
                type: "POST",
                url: "http://www.checkbooknyc.com/api",
                data: contractsRequestNowPending,
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
                        var aptPin = $(this).find("apt_pin").text();
                        var department = $(this).find("award_method").text();
                        var expenseCategory = $(this).find("contract_id").text();
                        var budgetCode = $(this).find("contract_type").text();
                        var budgetNode = $(this).find("current_amount").text();
                        var modified = $(this).find("document_code").text();
                        var adopted = $(this).find("end_date").text();
                        var preEncumbered = $(this).find("industry").text();
                        var encumbered = $(this).find("mwbe_category").text();
                        var cashExpense = $(this).find("original_amount").text();
                        var postAdjustment = $(this).find("pin").text();
                        var accruedExpense = $(this).find("purpose").text();
                        var pci = $(this).find("start_date").text();
                        var pin = $(this).find("vendor").text();
                        var purpose = $(this).find("version").text();

                        var tr = $("<tr/>");
                        tr.append("<td>" + agency + "</td>" + "<td>" + aptPin + "</td>" + "<td>" + department + "</td>" + "<td>" + expenseCategory
                            + "</td>" + "<td>" + budgetCode + "</td>" + "<td>" + budgetNode + "</td>" + "<td>" + modified + "</td>" + "<td>" + adopted + "</td>" + "<td>"
                            + preEncumbered + "</td>" + "<td>" + encumbered + "</td>" + "<td>" + cashExpense + "</td>" + "<td>" + postAdjustment + "</td>"
                            + "<td>" + accruedExpense + "</td>" + "<td>" + pci + "</td>" + "<td>" + pin + "</td>" + "<td>" + purpose + "</td>");
                        $("#TableTest").append(tr);
                    });
                }
            });
        });
        outputFlagBit();
    };

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
