$(document).ready(function(){
displayResult();
/*ADDING POST*/
$('#sub_ddcsn').on('click', function(){
if($('#tid39').val() == ""){
alert('Every field are required');
}else{
$tid39 = $('#tid39').val();
document.getElementById('thnks_pry').innerHTML ="<p>Dear user: Do you know? How much your prayer can make a miraculous effect?<br>When they know that thousands of people are praying daily for the betterment of their lives in the world;<br>By knowing this, they are filled with happiness, their inspirations get strengthen and they start performing their duties with new vigor.</p>";
$.ajax({
type: "POST",
url: "http://localhost/wp/php/dns.php",
data: {
tid39: $tid39
},
success: function(){
$('#tid39').val('');
displayResult();
}
});
}
});
/**********/
});

function displayResult(){
$.ajax({
url: 'http://localhost/wp/php/dns.php',
type: 'POST',
async: false,
data:{
ddcsn_request: 1
},
success: function(response){
$('#ddcsn_result').html(response);
}
});
}

// to submit message 
$(document).ready(function(){
displayResult2();
/*ADDING POST*/
$('#msg_post').on('click', function(){
if($('#tid17').val() == "" || $('#tid92').val() == "" || $('#tid30').val() == ""){
return false;
} else if($('#tid30').val().length <= 5){
alert('Password must contain atleast 6 characters.');
$('#tid30').focus();
return false;
}else{
$tid17 = $('#tid17').val();
$tid92 = $('#tid92').val();
$tid30 = $('#tid30').val();
    document.getElementById('user_message').innerHTML ='<div class="alert alert-success alert-dismissible fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> Dear ' + $tid92 + ', your message has been successfully submitted.</div>';
$.ajax({
type: "POST",
url: "http://localhost/wp/php/create.php",
data: {
tid17: $tid17,
tid92: $tid92,
tid30: $tid30
},
success: function(data){
$('#tid17').val(''),
$('#tid30').val('');
// displayResult2();
// $('#lastrec').load('http://localhost/wp/php/create.php');
$('#lastrec').html(data);
}
});
}
});
/**********/
});

function displayResult2(){

}
