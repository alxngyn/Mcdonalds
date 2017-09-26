console.log("starting app.js")

var input = 0,
    results = 0;


$(document).ready(function(){
    $('#start_button').click(function(){
        var total_cost = 0,
            total_calories = 0;
        // empty table
        $('#results_table').empty();

        // add header
        $('#results_table').append(
            '<thead class="thead-default">'
            +'<th>'+'Name'+'</th>'
            +'<th>'+'Calories'+'</th>'
            +'<th>'+'Cost $'+'</th>'
            +'</thead>'
        );
        // get input
        input = parseInt($('#input_field').val()*100);
        // build table
        if (input === parseInt(input, 10)){
            console.log("is int!");
            results = knapsack(items, input);
            total_calories = results.maxVal;
            solutionSet = results.solutionSet;
            for (var i = 0; i < solutionSet.length; i++) {
                total_cost += solutionSet[i].w/100
                $('#results_table').append(
                    '<tr>'
                    +'<td>'+solutionSet[i].name+'</td>'
                    +'<td>'+solutionSet[i].b+'</td>'
                    +'<td>$'+solutionSet[i].w/100+'</td>'
                    +'</tr>'
                );
            }
            $('#results_table').append(
                '<tr class="total-row table-warning">'
                +'<td>'+'TOTAL'+'</td>'
                +'<td>'+total_calories+'</td>'
                +'<td>$'+total_cost.toFixed(2)+'</td>'
                +'</tr>'
            );
        } else {
            console.log("is not int!")
        }
    });
});
