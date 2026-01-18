# App Project
Her skal jeg lage en app til emne MM-207 i mitt siste semester hos UiA.
Planen er å lage en app som skal gå ut på wordle/loldl konseptet. Eller gjett-spill om du vil si det sånn.

Her har jeg mange ideer, men det viktigste er å greie en av dem. Derfor tar jeg for meg første spillet som hoved mål/fokus.
Selve appen kaller jeg "Steam Guesser", siden jeg vil bruke Steam sitt rammeverk for API for å hente ut spiller tid og mer info.
Steam gjør det lett å hente ut JSON data fra offentlige brukere på tjenesten dems.

Hoved spillet jeg tenker å lage er "Guess the top 10", altså gjette top 10 spill. Poenget med spillet er at to eller flere skal spille sammen der en eller fler spiller mot _kun_ en annen, _hosten_.
_Hosten_, vil sitte å se på de andre og sin egen steam side å vite fasiten på hvem spill han har på top 10 mest spilte, mens de andre vil prøve å gjette. 
Konseptet er relativt lett, det er litt som en liten quiz som venner kan spille med hverandre.

Oppbyggingen av prosjektet vil jo være det å liste ut spill i liste form, sortert etter spiller tid. Også hente ut _coverart_, og kanskje spiller tid _( Jeg tenkte at spillerne kanskje kunne vite spille tiden til personen, tilfelle det var for vansklig. Men dette er ikke 100% enda.)_ Jeg vil også hente ut navnet på spilleren og profilbildet dems, sånn at det er lett å vite hvem sine spill vi gjetter etter.

I prosjekt beskrivelsen står det at vi skal ha offline funksjonalitet, det blir vanskelig med denne appen. Det står også at vi skal ha innlogging. Det kan også være litt vrient, men mulig. Det jeg har tenkt da er at når du logger inn så vil du kunne se hvem steamID du har søkt, eller bare en Admin side som trenger innlogging også kan se hvem steamID som har blitt spilt med.
