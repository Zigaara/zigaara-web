function nin_check() {

    var first_name = document.getElementById('first_name').value.toUpperCase();
    var last_name = document.getElementById('last_name').value.toUpperCase();
    var nin = document.getElementById('nin').value;

    var all_data = {
    "searchParameter": nin,
    "verificationType":"NIN-SEARCH",
    "transactionReference": ""
}

$.ajax({
    headers: {
        'userid': '1668011184920',
        'apiKey': 'DTHswgJl1K3roPN5FeVp'
      },
    url: 'https://api.verified.africa/sfx-verify/v3/id-service/',
    method: 'POST',
    dataType: 'json',
    data: JSON.stringify(all_data),
    contentType: 'application/json',
    beforeSend: function(){
        document.getElementById('show-error').style.display = 'none';
        document.getElementById('sign-btn').style.display = 'none';
        document.getElementById('sign-btn-load').style.display = 'block';
    },
    error: function(result){
        if(result.description == 'Success') {

            if(result.response[0].firstname == first_name && result.response[0].surname == last_name) {
                window.location.href = "https://zigaara.netlify.app/success.html";
            } else {
                document.getElementById('error').innerHTML = 'Could not verify details';
                document.getElementById('show-error').style.display = 'block';
                document.getElementById('sign-btn').style.display = 'block';
                document.getElementById('sign-btn-load').style.display = 'none';
            }
        } else {
            if(result.description){
                document.getElementById('error').innerHTML = result.description;
            }else {
                document.getElementById('error').innerHTML = 'An unexpected error occured from the third party';
            }
            
            document.getElementById('show-error').style.display = 'block';
            document.getElementById('sign-btn').style.display = 'block';
            document.getElementById('sign-btn-load').style.display = 'none';
            console.log(result)
        } 
    },
    success: function(result){
        if(result.description == 'Success') {

            if(result.response[0].firstname == first_name && result.response[0].surname == last_name) {
                window.location.href = "https://zigaara.netlify.app/success.html";
            } else {
                document.getElementById('error').innerHTML = 'Could not verify details';
                document.getElementById('show-error').style.display = 'block';
                document.getElementById('sign-btn').style.display = 'block';
                document.getElementById('sign-btn-load').style.display = 'none';
            }
        } else {
            if(result.description){
                document.getElementById('error').innerHTML = result.description;
            }else {
                document.getElementById('error').innerHTML = 'An unexpected error occured from the third party';
            }
            document.getElementById('show-error').style.display = 'block';
            document.getElementById('sign-btn').style.display = 'block';
            document.getElementById('sign-btn-load').style.display = 'none';
            console.log(result)
        } 
    }
});
}

