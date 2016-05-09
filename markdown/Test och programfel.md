TEST
----


Historiskt har utvecklingsteam och testteam haft olika ansvarsområden. Inte sällan har utvecklare ansett att test är "någon annans problem".
I takt med utbredningen av agila metoder som t.ex. Scrum, med koncept som självorganiserande, självförsörjande team har insikten om att test är en integral del av utveckling vuxit fram och accepterats.
> Kort uttryckt: som utvecklare är du ansvarig för din kod från början till slut, vilket natruligt inkluderar testning.

TDD och agila metoder passar bra ihop eftersom att agila metoder söker snabba iterationer för att få snabb feedback. 
TDD bidrar till just det genom automatiserade tester som snabbt ger feedback.

## Varför testar man?
* Bekräfta att koden gör vad den ska
* Säkerställa att kraven är uppfyllda
* Leta efter svårförutsägbara fel
* Säkerställa att inget har "gått sönder" sedan en tidigare version
* För att få fram mätvärden (t.ex. prestanda/minnesåtgång/säkerhet)
* etc

## När testar man?
Testning sker alltid under mjukvaruutveckling, oavsiktligt eller avsiktligt. Varje gång du kör din kod så testar du att den beter sig som förväntat. Programutveckling, även utan uttalad teststrategi, innehåller således testning som en integral del av utvecklingsarbetet.

Mer formell testning sker på olika nivåer (nedan) men generellt är det billigare att hitta fel ju tidigare de upptäcks, helst redan i designfasen innan man ens börjat skriva kod!

Eftersom att programutveckling (i de flesta fall) bedrivs som en del av ett företags verksamhet är kostnaden viktig. Ett programfel som upptäcks tidigt är billigare att åtgärda en ett fel som upptäcks sent i projektet. Därför är det kostnadseffektivt att testa tidigt (och kontinuerligt).

Automatiska tester är billigast att utföra men kan kosta mer att utveckla initialt än manuella tester. Generellt är det en bra idé att överväga att automatisera all repetitiv, förutsägbar och objektiv testning eftersom att kostnaden per utfört automatiskt test är minimal i förhållande till manuella tester som utförs av avlönade människor. 

Vi människor har dock än så länge ett övertag över datorerna när det gäller testning av mjuka värden. Exempelvis sker användbarhetstestning ("Är vårt gränssnitt enkelt att förstå?") av människor. Andra former av grafisk testning är också typiskt manuell; som t.ex. att avgöra om en web-app följer företagets grafiska profil väl eller inte.


## Nivåer av testning
Ett (stort) mjukvarusystem består av många funktioner, objekt och filer. Dessutom utvecklas olika delar av olika personer, team, organisationer eller rentav av distribuerade team i olika geografiska områden och tidszoner.

Koden kan testas ur olika perspektiv och på olika nivåer med s.k. unit testing som den lägsta (mest granulära) nivån.


* Unit testing - Funktion/objektnivå
* Integration testing - Systemnivå då olika moduler integreras och testas ihop
* Smoke testing - Snabbtest vid integration för att se att inget fundamentalt slutat fungera
* End-to-end testing - Systemnivå sett utifrån
* Regression testing - Kontinuerlig testning för att se att koden fortfarande fungerar (minst) lika bra som förra versionen
* Manual testing - Testning utförd av människor, t.ex. när du kör din kod och kollar loggar, eller någon följer ett manus för att testa din webb-applikation
* Performance testing - Mätning av prestanda
* Penetration testing - Försök att hacka och hitta säkerhetsluckor
* osv


## Programfel

Testning syftar bl.a. till att upptäcka programfel. Därför repeterar vi några typer av programfel här.

### Syntax
Synktaktiska fel upptäcks vid parsning (eller av s.k. _linters_) och handlar om t.ex. stavfel eller grammatiska fel.
Ex:
```javascript

var 1one = 42;  //otillåten namngivning av variabel

var o = {
    prop = 42   //'=' ska vara ':'
};

function test() {
    //... do something
}
Test(); //test() är inte Test()
```

### Runtime-fel
Att t.ex. försöka använda en egenskap (property) som inte finns gör att programmet kraschar.
Ex
```javascript

var o = {
    prop1: 42
};
o.prop2.prop22 = 42;    //Cannot set property 'prop22' of undefined

```

#### Oväntad sk Type coercion
I boolesk kontext tolkar Javascript värden som antingen sant (truthy) eller falskt (falsy) vilket kan leda till oväntade resultat om man inte är uppmärksam.

T.ex: är den tomma strängen `""` falsy och följande kodexempel kan ha skrivits i syfte att kontrollera om variabeln `x` finns eller inte.
```javascript
var x = "";

if (x) {
    console.log(x); //Kommer inte köras eftersom att "" är falsy i boolesk kontext
}

``` 

Ett annat exempel är då ett värde av en typ tolkas som en annorlunda typ
```javascript
var x = "2";    //sträng

if (x == 2) {
    console.log('x är lika med två');   //"0" har tolkats som 0, dvs en sträng tolkas som en integer
    var y = x + 2;
    console.log(y);     //--> "22"!!
}

```

##### Short-circuiting
Då en variabel tilldelas ett värde _om_ värdet är truthy annars ett annat värde så får man se upp med type coercion.
Ex:
```javascript
var myInparam = "";

var v = myInparam || "not initialized"; // v = "" eftersom att den tomma strängen är truthy.

```

#### Strict comparison (===, !==)

En inte ovanlig missupfattning är att javascript inte har datatyper pga att det är s.k. _losely typed_.
Javascript har ett typsystem och kan särskilja på värden av olika typer.

För att säkerställa att en jämförelse inkluderar både värde och datatyp används `===` resp `!==`.
Ex: (jmf med exempel ovan)
```javascript
function twoPlusTwo(v) {
    if (x === 2) {
        var y = x + 2;
        console.log(y);
    }
}

var x = "2";
twoPlusTwo(x);  // "2" är inte exakt lika med 2. Inget skrivs ut. If-satsen evaluerar till false


x = 2;
twoPlusTwo(x);  // 2 är exakt lika med 2. Utskrift: 4

```


### Kontrollerade allvarliga fel (try...catch...finally)
Då man som utvecklare behöver begränsa t.ex. vilken typ av värden en funktion kan hantera vill man ibland signalera då fel typ skickas in mha `throw`.

`throw` sänder en signal, s.k. _exception_ som, om den inte fångas upp avbryter exekveringen av programmet.
```javascript
function twoPlusTwo(v) {
    if (typeof v !== 'number') {    //Acceptera bara numeriska värden - inte t.ex. strängar
        throw "v is not a number!";
    }
    if (x === 2) {
        console.log("x är lika med två");
        var y = x + 2;
        console.log(y);
    }
}

```

För att hantera kod som kan kasta exceptions använder man `try`-`catch`-block:
```javascript

var x = "2";
try {
    twoPlusTwo(x);
} catch (e) {
    console.log(e);
}

```




### Logiska fel
Feltänk som gör att koden inte beter sig som förväntat.

Ex:
```javascript
var n = 4;  //vi vill loopa fyra gånger

for (i=0; n <= 4; i++) { //loopa 5 gånger!
    //... 
}
```



