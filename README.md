# ClimateView - Ilmastonmuutoksen datan visualisointiprojekti
## Esittely

ClimateView on Oulun Ammattikorkeakoulun toisen vuoden tieto- ja viestintätekniikan insinööriopiskelijoiden toteuttama projekti, jonka tarkoituksena oli tehdä ulkopuolisista lähteistä saadun ilmastonmuutosdatan visualisointiin tarkoitettu web-sovellus. Sovelluksessa käyttäjällä on lisäksi mahdollisuus luoda ja hallinnoida omaa tiliään. 
Sovelluksen käyttöönotto on mahdollista asentamalla se manuaalisesti koneelle, tähän ohjeet alempana. 

![My Image](/project/auth-client/readme_images/mainpage.jpg)</br>
Kuva 1: Ylävalikko ja sivun päänäkymä

## Vastuualueet

**Hannu Karjalainen:** Kaaviot 1 ja 5 , react sivuston perusnäkymät , käyttäjän luominen & poistaminen, login. Sivuston ulkoasun muokkaus.</br>
**Kevin Kipinä:** Kaavio 2 sekä sivuston reaktiivisuus mobiililaitteille. Sivuston ulkoasun muokkaus.</br>
**Jarkko Makkonen:** Kaaviot 3 ja 4 sekä sovelluksen testaus.

Lisäksi jokainen muokkasi vastuullaan oleviin kaavioihin liittyvän datan oikeaan muotoon, ja niiden tallentamisen tietokantaan.

## Toteutus

Sovellus esittää kahdelle eri sivulle jaettuna yhteensä viisi eri kaaviota. Jokainen kaavio sisältää dataa eri lähteistä sekä interaktiivisen ominaisuuden. Esimerkiksi ensimmäisessä kaaviossa (V1) on napeista vaihdettavat datasetit ja kolmannessa (V3) infopisteet. Kaavioiden alla on linkit datalähteisiin ja niiden kuvauksiin. Sovellukseen on myös toteutettu oman käyttäjän luominen, tunnuksilla kirjautuminen sekä käyttäjän poistaminen. Kirjautumisen jälkeen etusivun näkymä muuttuu siten, että yläpalkista poistuu käyttäjän luominen ja kirjautuminen, ja niiden tilalle tulee napit ”Log out” ja ”Delete User”, sekä kirjautuneen käyttäjän tunnus näkyy etusivulla.

![My Image](/project/auth-client/readme_images/create_user.jpg)
![My Image](/project/auth-client/readme_images/login.jpg)</br>

Kuva 2: Käyttäjän luominen   &ensp; &ensp; &ensp;   Kuva 3: Sivustolle kirjautuminen



Sovelluksessa on käytetty MySql-tietokantaohjelmistoa datan tallentamiseen, käsittelyyn ja hyödyntämiseen. Tietokantaan on luotu jokaisen kaavion datalle oma taulukko, joka sisältää kaiken siihen liittyvän mittausdatan. 
Selainpuoli sovelluksesta on toteutettu JavaScriptillä React-kirjastoja hyödyntäen. Sovellus toimii Reactin ansiosta yhden sivun applikaationa ja tukee eri näyttökokoja. Ylävalikko muokkautuu pudotusvalikoksi mikäli sovellusta selaa mobiililaitteella.
REST API -rajapinta on kirjoitettu Javalla Spring Boot- sovelluskehystä hyödyntäen. Jokaiselle kaaviolle ja niiden tarvitsemalle datalle on luotu rajapinnassa omat oliot sekä niihin liittyvät CRUD-operaatiot. CRUD operaatiota käyttäen selainpuoli saa käyttöönsä visualisoinneissa sekä käyttäjien hallinnoimisessa hyödynnettävän informaation.

<img src="/project/auth-client/readme_images/visualization1_image.jpg" alt="Kaavio 1" title="Kaavio 1" width="93%" ></br>
Kuva 4: Kaavio 1

![My Image](/project/auth-client/readme_images/visualization3_image.jpg)</br>
Kuva 5: Kaavio 3 ja sen infopisteitä

![My Image](/project/auth-client/readme_images/visualization4_image.jpg)</br>
Kuva 6: Kaavio 4

## Sovelluksen käyttöönotto

1. Kloonaa repo omalle koneelle komennolla ```git clone https://github.com/TVTKMO22-WP-GROUP-10/ClimateView.git```</br>
2. Aseta ” ./main/resources/application.properties” -tiedostoon oman mySQL-tietokannan osoite, portti, käyttäjänimi ja mahdollinen salasana tietokantayhteyden muodostamiseksi.</br>
3.  Tietokanta saadaan täydennettyä oikealla datalla ajamalla omalle koneelle viimeisin .sql-päätteinen tietokantadumppi rawdata-kansiosta.</br>
4. Reactin riippuuvuuksien asennus onnistuu ajamalla komento ```npm install``` kansiossa ”auth-client”. Kun ```npm install``` on tehnyt taikansa, on sovelluksen frontend käyttövalmiina ajamalla komento ```npm start```.</br>
5. Sovelluksen backendin, eli Spring Bootin, käynnistäminen onnistuu ajamalla ”AuthApplication.java”, sekä tietokantasovelluksen käynnistämisellä. 

## Esittelyvideo

 [Linkki esittelyvideoon](https://youtu.be/kqXgJjMSbR4)

## Projektin dokumentaatio

 [Linkki rajapinta-dokumentaatioon](https://r10webprojekti.stoplight.io/docs/r10webprojekti/branches/main/gfvrrghn8fkbi-webprojektiapi)</br>
 [Linkki tietokannan ER-kaavioon](https://lucid.app/lucidchart/fb851351-0fae-4817-9272-c3815e5fc33a/view?invitationId=inv_f25dd273-f96e-4956-a7af-c7f544f27e6d&page=0_0#)

<img src="/project/auth-client/readme_images/database_diagram.jpg" alt="Tietokannan ER-kaavio" title="Tietokannan ER-kaavio" width="70%" ></br>
Kuva 7: Tietokannan ER-kaavio


## Projektiryhmän jäsenet

HpKarjalainen = Hannu Karjalainen <br/>
QuantumBlip = Kevin Kipinä<br/>
jmakkie = Jarkko Makkonen<br/>
