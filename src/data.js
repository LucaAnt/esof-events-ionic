module.exports = {
    "calendar": [
      {
        "time": "8:00",
        "sessions": [
          {
            "nome": "Colazione",
            "inizio": "8:00",
            "fine": "9:00",
            "luogo": "Caffè degli specchi",
            "id": "162gs38dh"
          },
          {
            "nome": "Presentazione ESOF 2019",
            "inizio": "9:00",
            "fine": "10:00",
            "luogo": "Piazza Unità d'Italia",
            "id": "@263gs79"
          },
          {
            "nome": "FINE",
            "inizio": "10:00",
            "fine": "11:00",
            "luogo": "Piazza Unità d'Italia",
            "id": "@263gs79"
          }
        ]
      }
    ],
    "speakers": [
      {
        "nome": "Mario Bianchi",
        "img": "https://www.netclipart.com/pp/m/120-1205442_download-bart-simpson-head-png.png",
        "intervento": "Colazione",
        "inizio": "8:00",
        "fine": "9:00",
        "desc": "bla bla bla caffè cornetto e amaro",
        "id": "27sghs$"
      },
      {
        "nome": "Dario Cross",
        "img": "https://www.film.it/fileadmin/mediafiles/film/multimedia/201707/images/628x400/MV5BYWUyMTI0NTMtYTMyZC00ZjAwLTk0MWUtYWZjNWU4ZDFmZmFmXkEyXkFqcGdeQXVyNTc3MjUzNTI%40._V1_SY1000_CR0%2C0%2C1499%2C1000_AL_.jpg",
        "intervento": "Presentazione ESOF 2019",
        "inizio": "9:00",
        "fine": "10:00",
        "desc": "bla bla bla caffè cornetto e amaro",
        "id": "37sshs$"
      },
      {
        "nome": "Franco Tell",
        "img": "https://i1.wp.com/www.bluegrassyouthballet.org/bybsite/wp-content/uploads/2014/08/Dia-Web-Graphic.jpg",
        "intervento": "Fine",
        "inizio": "10:00",
        "fine": "11:00",
        "desc": "bla bla bla caffè cornetto e amaro",
        "id": "77s@hs$"
      }
    ],
    "map":
    {
      "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "evento":"inizio"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              13.761223554611204,
              45.647663367418474
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
          "evento":"fine"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              13.7611323595047,
              45.647164602302496
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "evento":"fine"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              13.762301802635193,
              45.64791837343119
            ]
          }
        }
      ]
    }
}
    
  
  }