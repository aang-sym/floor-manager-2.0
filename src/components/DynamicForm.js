var saleType={
    sale:['Mob UPD', 'Mob PPN', 'MBB UPD', 'MBB New', 'Bundle', 'NBN'],
    nonsale:['Device Help', 'Account Help', 'Email Help', 'Bill Query', 'Complaint']
}

// Get main and sub menu

var main = document.getElementById('main_menu');
var sub = document.getElementById('sub_menu');

// Trigger event when main menu change occurs

main.addEventListener('change', function(){

    // Get selected option

    var selected_option = saleType[this.value];

    // Remove sub menu

    while(sub.options.length > 0){
        
        sub.options.remove(0);

    }

    // convert selected object into array and create options for each array
    // using option constructor it will create html element with given value and innerText

    Array.from(selected_option).forEach(function(el){
        let option = new Option(el, el);

        //append child in sub menu

        sub.appendChild(option);
    })

})