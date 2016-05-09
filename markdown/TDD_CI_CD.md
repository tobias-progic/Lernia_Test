TDD
---
> TDD = Test Driven Development

TDD är en utvecklingsmetod, inte en testmetod.

TDD:
* är automatiska tester
* tester skrivs före (produktions)koden
* utvecklas av utvecklare
* körs av utvecklare
* ingår i automatiska testkörningar (CI, CD, etc)
* all kod ska ha testfall (även rättningar, nya features)

[TDD på Wikipedia](https://en.wikipedia.org/wiki/Test-driven_development)

## TDD (test) som utvecklingsmetod
TDD är primärt en utvecklingsmetod eftersom att den stöttar utveckling, kravuppfyllelse, dokumentation, regressionstestning och ingår naturligt i s.k. continuous integration (CI) samt continuous deployment (CD).

### I TDD skriver man testfallen _före_ koden
Då ett utvecklingsprojekt som anammar TDD påbörjar sin utveckling börjar man med att skriva testfallen. 
Eftersom att testfallen inte kommer passera innan det finns kod att testa och som uppfyller testerna så kommer alla testfall att "lysa rött" då de körs.
Därefter fyller man på med programkod successivt tills testfallen passerar ("lyser grönt"). Då vet man att man uppfyllt kraven som sattes upp.

För att testa så mycket som möjligt av sin kod vill man även inkludera testfall för s.k. randvillkor och felaktiga invärden, t.ex. -1, null, "" osv.

### Coverage
Code coverage är ett procentuellt mått på hur stor del av koden som faktiskt testas av testfallen.
Man bör sträva efter att ha så hög code coverage som är praktiskt möjligt.

Ex:
```javascript
function add(x,y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else {
        return undefined;
    }
}

add(2,2);   //Testar bara hälften av koden!
add("2",2); //Testar resterande 50%. Nu har vi 100% coverage.
```

### För- och nackdelar med TDD

#### Fördelar
* Test first - genomtänkt kod. Måste förstå området för att kunna skriva tester varpå (produktions)koden blir naturligt modulär och enkel att testa
* "Gratis" unit-tester till CI (nedan)
* Spec och dokumentation blir testfallen. Dvs en körbar kravspec
* Regressionstestning ingår "automatiskt"
* Trygghet för utvecklare

#### Nackdelar
* Vid små projekt kan TDD vara ineffektivt
* Kreativitetshämmande vid prototyping. (Subjektivt)
* Tar mer tid. Mer kod = fler buggar. (Även testkoden måste ju skrivas, granskas och förstås fungera)
* Samma utvecklare skriver tester som kod. Kan leda till sk "blind spots"

## Continuous Integration (CI)

Integration är när flera (sub)system fogas samman till en större helhet. T.ex. kan flera utvecklingsteam leverera olika delar av den totala produktens kod. För att den färdiga produkten ska fungera behöver alla delar integreras.

Continuous Integration är en metod som innebär att varje utvecklingsteam ofta (t.ex. vi varje git push) testkör sin kod i det större systemet. En nödvändig del i ett CI-system är automatiska tester; unit-tester och andra.
I och med TDD så finns unit-testerna med från början och dessa körs vid varje tillfälle som någon levererar kod.
Dvs den egna kodens unit-tester körs, men med hela kodbasen integrerad så som den ser ut just vid tillfället då testerna körs.
CI ger korta cykler och snabb feedback vilket gör upptäckande och rättning av fel snabbare, enklare och billigare.

Checkar man in kod som förstör systemet så är det enkelt att backa från sin senaste leverans och därmed se till att systemet fungerar, samtidigt som man löser sin bugg lokalt innan man integrerar på nytt.

Det finns olika CI-system. Ett av de mest välkända heter Jenkins och kan användas som [byggserver](http://deviq.com/build-server/), CI osv.

Länkar:

[https://www.thoughtworks.com/continuous-integration](https://www.thoughtworks.com/continuous-integration)

[https://jenkins.io/](https://jenkins.io/)


## Continuous Deployment (CD)

CD är en förlängning av CI och innebär att varje levererans av kod också hamnar på produktionsservern. Dvs all kod kommer snabbt ut till slutanvändaren.

## Systemtest

Att testa hela systemet från utsidan, ofta manuell testning. 

Det finns dock metoder för att automatiskt testa t.ex. websidor, mobilappar osv.
Ett sådant system är `Selenium` som bl.a. ingår i SAAS-tjänsten 
[https://saucelabs.com/](https://saucelabs.com/)

Bra överblick av systemtestning
[http://www.softwaretestingclass.com/system-testing-what-why-how/](http://www.softwaretestingclass.com/system-testing-what-why-how/)
