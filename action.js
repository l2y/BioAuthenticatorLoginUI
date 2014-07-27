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

function signUpToggle() {
    var signup = $("#signupwindow");
//    $("#createacc").prop('disabled',false);
    signup.toggle();
}

function record() {
    var create = $("#createacc");
    var signal = $("#recordsignal");
    signal.button('loading');
    create.prop('disabled',true);
    $("#loadinggif").toggle();
    setTimeout(function(){
        signal.text('Recorded Signal');
//        signal.prop('disabled',true);
        signal.addClass('disabled');
        create.prop('disabled',false);
        $("#loadinggif").toggle();
    },3000);
    
    $('#accountcreated').on('hidden.bs.modal', function () {
    modalClose();
})
}

function accept() {
 $('#accountcreated').modal('show');
    signUpToggle();
}
function modalClose() {
    $('#signupform').submit();
    $('#accountcreated').modal('hide');
}