getInfo = function (info, infoName) {
    return info.find(element => element.name == infoName).value;
};

function sendMail(email) {
    var to = email;
    var subject = "HTML formatted email";
    var content = "";
    content += "<html><body>";
    content += "<table width='100%'><tr><td>"; // Outer table
    content += "<table width='60%'>"; // Nested table
    content += "<tr><td width='70%'>This is a row</td><td width='30%'>999999</td></tr>";
    content += "<tr><td width='70%'>So is this</td><td width='30%'>9999</td></tr>";
    content += "</table>";
    content += "</td></tr></table>";
    content += "</body></html>";
var email =
        "From: 'me'\r\n" +
        "To: " + to + "\r\n" +
        "Subject: " + subject + "\r\n" +
        "Content-Type: text/html; charset='UTF-8'\r\n" +
        "Content-Transfer-Encoding: base64\r\n\r\n" +
        "<html><body>" +
        content +
        "</body></html>";
    var base64EncodedEmail = window.btoa(email).replace(/\+/g, "-").replace(/\//g, "_");
    var request = gapi.client.gmail.users.messages.send({
        "userId": "me",
        "resource": {
            "raw": base64EncodedEmail
        }
    });
    request.execute();
}

composeEmail = function (newsletterBool = false) {
    formInfo = $('form').serializeArray();
    if (!newsletterBool) {
        var emailPsico = {
            sender: "yourEmail@example.com",
            recipient: "yourEmail@example.com",
            subject: "Nuovo paziente in arrivo!",
            content: getInfo(formInfo, "medIdText").concat(" ha consigliato la terapia a ", getInfo(formInfo, "pazName"), " ", getInfo(formInfo, "pazSurname"), ".")
        };
        alert(JSON.stringify(emailPsico));

        var emailPaz = {
            sender: "yourEmail@example.com",
            recipient: getInfo(formInfo, "pazEmail"),
            subject: "Indicazioni percorso psicoterapeutico",
            content: "Buongiorno".concat(getInfo(formInfo, "pazName"), "!")
        };
        window.open("mailto:".concat(emailPaz.recipient,"?subject=",emailPaz.subject,"&body=",emailPaz.body));
        alert(JSON.stringify(emailPaz));
    }
    else {
        var emailPsico = {
            sender: "yourEmail@example.com",
            recipient: "yourEmail@example.com",
            object: "Richiesta iscrizione newsletter",
            content: getInfo(formInfo, "medMail").concat(" ha richiesto di iscriversi alla newsletter.")
        };
        alert(JSON.stringify(emailPsico));
    }
};

printConsent = function(){
    printConsentDOM = document.getElementById('printConsent');
    printConsentDOM.innerText = composeConsent();
    printConsentDOM.hidden=false;
    printJS('printConsent', 'html');
    printConsentDOM.hidden=true;
}

composeConsent = function(){
    formInfo = $('form').serializeArray();
    var name = getInfo(formInfo, "pazName");
    var surname = getInfo(formInfo, "pazSurname");
    var d = new Date();
    content = "Pavia, ".concat(d.getDate(),"-",d.getMonth(),"-",d.getFullYear(),"\n\n","Il sottoscritto ",name," ",surname," da' il consenso all'invio dei suoi dati personali (nome, cognome, indirizzo email) a terzi al fine unico di ricevere informazioni, non vincolanti e una tantum, sull'inizio di un percorso di psicoterapia.\n\nFirma:");
    return content;
}