getInfo = function (info, infoName) {
    return info.find(element => element.name == infoName).value;
};

composeEmail = function (newsletterBool = false) {
    formInfo = $('form').serializeArray();
    if (!newsletterBool) {
        var emailPsico = {
            sender: "yourEmail@example.com",
            recipient: "yourEmail@example.com",
            object: "Nuovo paziente in arrivo!",
            content: getInfo(formInfo, "medIdText").concat(" ha consigliato la terapia a ", getInfo(formInfo, "pazName"), " ", getInfo(formInfo, "pazSurname"), ".")
        };
        alert(JSON.stringify(emailPsico));

        var emailPaz = {
            sender: "yourEmail@example.com",
            recipient: getInfo(formInfo, "pazEmail"),
            object: "Indicazioni percorso psicoterapeutico",
            content: "Buongiorno".concat(getInfo(formInfo, "pazName"), "!")
        };
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