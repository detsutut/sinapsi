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