var grabzit = require('grabzit');

var client = new grabzit("YmIzNTM5NjA0ZjM1NGI2MGI5N2U5ODBmYjdjN2ZiYjE", "_euBGU5nUELFJJ8XTHtGFQKEnN9YzHXioQA72ytwVII");

var options = {"marginTop":20,"marginBottom":20,"templateId":"whitelabelledcv"};

client.html_to_pdf("<html><body><h1>Hello World!</h1></body></html>", options);
//Then call the save or save_to method
client.save_to(null, function (error, id){
    //this callback is called once the capture is downloaded
    if (error != null){
        throw error;
    }
    
    return ""
});