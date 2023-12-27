function multiply() {
    // Get the input values
    var totalBuyTtb = parseFloat(document.getElementById('totalBuyTtb').value);
    var totalSellTtb = parseFloat(document.getElementById('totalSellTtb').value);
    var totalBuyGrams = parseFloat(document.getElementById('totalBuyGrams').value);
    var totalSellGrams = parseFloat(document.getElementById('totalSellGrams').value);
    var equityBalance = parseFloat(document.getElementById('equityBalance').value);
    var ozRate = parseFloat(document.getElementById('ozRate').value);


    var expectedBS = parseFloat(document.getElementById('expectedBS').value);
    var totalBuyTtbEx = parseFloat(document.getElementById('totalBuyTtbEx').value);
    var totalSellTtbEx = parseFloat(document.getElementById('totalSellTtbEx').value);
    var totalBuyGramsEx = parseFloat(document.getElementById('totalBuyGramsEx').value);
    var totalSellGramsEx = parseFloat(document.getElementById('totalSellGramsEx').value);

    // Check if all inputs are valid numbers
    if (!isNaN(equityBalance) && !isNaN(ozRate)) {
        // Perform the calculation
        var total_gram = (((totalSellTtb - totalBuyTtb) * 116.64) + (totalSellGrams - totalBuyGrams));
        var result = (equityBalance / total_gram * 31.1035) + ozRate;

        var total_gram_ex = (((totalSellTtbEx - totalBuyTtbEx) * 116.64) + (totalSellGramsEx - totalBuyGramsEx));
        var newOzRate = expectedBS - ozRate;
        var newEquity = (total_gram / 31.1035) * newOzRate;
        
        var finalEquity = equityBalance - newEquity;
        var f_gram =  total_gram + total_gram_ex ;

        var newLimit = (finalEquity / f_gram * 31.1035) + expectedBS;
        console.log(newLimit);
        
        // Update the result field
        var resultField = document.getElementById('result');
        if (expectedBS=='0') {
                resultField.value = 'Your Total Buy: ' + totalBuyTtb + 'Pcs TTB, Total Sell: ' + totalSellTtb + 'Pcs TTB, Total Buy: ' + totalBuyGrams + 'gram, Total Sell: ' + totalSellGrams + 'gram Your Equity: ' + equityBalance + '$' + ' *Your Limit is: ' + result.toFixed(2) + '$*';
           }
            else{
                resultField.value = 'Your Total Buy: ' + (totalBuyTtbEx + totalBuyTtb).toFixed(2) + 'Pcs TTB, Total Sell: ' + (totalSellTtb + totalSellTtbEx).toFixed(2) + 'Pcs TTB, Total Buy: ' + (totalBuyGrams + totalBuyGramsEx).toFixed(2) + 'gram, Total Sell: ' + (totalSellGrams + totalSellGramsEx).toFixed(2) + 'gram, Your old Equity: ' + equityBalance + '$, after Set new limit your Equity Balance will be ' + finalEquity.toFixed(2) + '$, Your old Limit is: ' + result.toFixed(2) + '$ AND *New Limit will be: ' + newLimit.toFixed(2) + '$*';
            }
    } else {
        // If any input is not a valid number, display a message
        document.getElementById('result').value = 'Result: Please enter valid numerical values in all fields';
    }
}


function copyResult() {
    // Get the result field
    var resultField = document.getElementById('result');

    // Select the text in the result field
    resultField.select();
    resultField.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    resultField.setSelectionRange(0, 0);

    // Optionally, provide user feedback (you can customize this part)
    alert('Result copied to clipboard!');
}

