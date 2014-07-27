var answer = 123;

function help() {
        var helpPop = document.createElement("div");
        document.body.appendChild(helpPop);
}

function ieReadFile(filename) {
     try {
        var fso  = new ActiveXObject("Scripting.FileSystemObject");
        var fh = fso.OpenTextFile(filename, 1);
        var contents = fh.ReadAll();
        fh.Close();
        return contents;
    }
     catch (Exception)
      {
        alert(Exception);
        return false;
      }
}

function login() {
    var loading = $("#info");
    loading.toggle();
    $('#signup').prop('disabled', true);
    $('#help').prop('disabled', true);
    $('#login').button('loading');

    window.open('file:///C:/Users/Cain/Documents/MATLAB/opiconsole_win_v1.40_20140427/matlab/authenticate_matlab.bat');
    setTimeout(function(){
        answer = ieReadFile('C:/Users/Cain/Documents/MATLAB/opiconsole_win_v1.40_20140427/matlab/authenticate_output.txt');
        loading.toggle();
        $('#login').button('reset');
        $('#signup').prop('disabled', false);
        $('#help').prop('disabled', false);
        //successOpen();
        $('#answerout').html("Welcome back, " + retAnswer()  + "!");
        $('#success').modal('show');
    }, 20000);
    
}

function retAnswer() {
    var output;

    if(answer == 0) {
        output = "Allan";
    } else if (answer == 1) {
        output = "Davin";
    } else if (answer == 2) {
        output = "Nhieu";
    } else {
        output = "!"
    }
    return output;

}

function successOpen() {
    //$('#success').on('shown.bs.modal', function () {
        //$('#answerout').html ="Welcome back, " + retAnswer()  + "!";
        //alert('open');
    //});
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