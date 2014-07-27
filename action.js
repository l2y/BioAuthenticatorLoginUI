function help() {
        var helpPop = document.createElement("div");
        document.body.appendChild(helpPop);
}

function login() {
    var loading = $("#info");
    loading.toggle();
    $('#signup').prop('disabled', true);
    $('#help').prop('disabled', true);
    $('#login').button('loading');
    setTimeout(function(){
        loading.toggle();
        $('#login').button('reset');
        $('#signup').prop('disabled', false);
        $('#help').prop('disabled', false);
        $('#success').modal('show');
    },3000);
    
}

function signUp() {
    
}

function openGlass() {

}