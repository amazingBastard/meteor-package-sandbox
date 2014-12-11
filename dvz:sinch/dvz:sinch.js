// Sinch API Wrapper

Sinch = {
  receiveSMS: function(input){
    return Http.get('https://api.sinch.com/v1/receiveSMS/' + input);
  },
  sendSMS: function(from, to){
    return Http.put('https://api.sinch.com/v1/sendSMS/' + from + '&' + to);
  }
}
