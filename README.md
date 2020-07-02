# Sina**psi**

## Description

**ITA:**
Ogni contatto nasce da un incontro, ogni incontro genera una connessione. Sinapsi è una semplice web app pensata per mettere in contatto facilmente medici di base e psicologi e fornire contenuti illustrativi mirati.

**ENG:**
Every contact comes from a match, every match generates a connection. Sinapsi is a simple static web app designed to provide an easy connection between family doctors and psychologist, dispensing also some useful explanatory content.

## Demo

Sinapsi provides services meant to be used from trusted family doctors only and is therefore protected by password.

A demo version for illustrative purposes [can be found here](https://detsutut.github.io/sinapsi/demo.html).

## Content Encryption

A static website like Sinapsi consists of files downloaded and processed by the visitor’s browser, therefore it's impossible to manage users access verification that needs to be handled server-side. 
However, it is still possible to implement some password protection using client-side scripting like [crypto-js](https://github.com/brix/crypto-js), a AES-256 encryption which encrypts the html page mixing its plain text representation and a user-defined password, which is mandatory to unencrypt the page content (see [Credits](https://github.com/detsutut/sinapsi#credits) section).

In Sinapsi, *premium* services and contents have been embedded in the encrypted html page, so that they can be accessed and used only by trusted family doctors who owns the password.

## Authors

* **Tommaso Buonocore** - *Author and Repository Maintainer* - [GitHub](https://github.com/detsutut), [LinkedIn](https://www.linkedin.com/in/tbuonocore/)
* **Andrea Avondo** - *Copyright Owner* 
* **Giulia Monardo** - *Copyright Owner*

## Credits

* [Robin Moisson](https://robinmoisson.github.io/staticrypt/) for AES-256 encryption system for static pages, based on [crypto-js](https://github.com/brix/crypto-js)
* [Templated](https://templated.co) for the original template and design
* [Pexels](https://www.pexels.com) for all the images that are not personally owned

## License

This project is is provided under the terms of the [Creative Commons Attribution 3.0 Unported](https://creativecommons.org/licenses/by/3.0/) public license. See the [LICENSE.txt](LICENSE.txt) file for details.
