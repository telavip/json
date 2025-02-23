const movies = [

{
    "id": 762509,
    "title": "Mufasa: O Rei Leão",
    "genre_ids": [
        12,
        10751,
        16
    ],
    "release_date": "2024-12-18",
    "popularity": 1207.142,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/iMVuv6Gz5fj7vZ51IjRF3AiW87y.jpg",
    "runtime": 118,
    "networks": [],
    "certification": "10",
    "slug": "mufasa-o-rei-leo"
},

{
    "id": 1126166,
    "title": "Ameaça no Ar",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2025-01-22",
    "popularity": 912.172,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/4LPIIwWiedwHeWgRXOjcBaL1tnv.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "14",
    "slug": "ameaa-no-ar"
},

{
    "id": 950396,
    "title": "Entre Montanhas",
    "genre_ids": [
        10749,
        878,
        53
    ],
    "release_date": "2025-02-13",
    "popularity": 1495.874,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/7zL6RxMPmpPSdU5OTdVC4dtiKcr.jpg",
    "runtime": 127,
    "networks": [
        350
    ],
    "certification": "14",
    "slug": "entre-montanhas"
},

{
    "id": 1241982,
    "title": "Moana 2",
    "genre_ids": [
        16,
        12,
        10751,
        35
    ],
    "release_date": "2024-11-21",
    "popularity": 826.702,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/ulVUcVy919yt3IJKtmiJBzf4Kqt.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "L",
    "slug": "moana-2"
},

{
    "id": 939243,
    "title": "Sonic 3: O Filme",
    "genre_ids": [
        28,
        878,
        35,
        10751
    ],
    "release_date": "2024-12-19",
    "popularity": 712.402,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/tfM1T6tAivjvy0sLwt6Y9WvlmzB.jpg",
    "runtime": 110,
    "networks": [
        484
    ],
    "certification": "N/A",
    "slug": "sonic-3-o-filme"
},

{
    "id": 927342,
    "title": "Major Imortal",
    "genre_ids": [
        28,
        18,
        12,
        10752
    ],
    "release_date": "2024-10-31",
    "popularity": 655.805,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/eCB06m1KUGilEOlIzb40nkQhVY0.jpg",
    "runtime": 149,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "major-imortal"
},

{
    "id": 822119,
    "title": "Capitão América: Admirável Mundo Novo",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "2025-02-12",
    "popularity": 574.598,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/viUricKwbToOJIRrKOUr0Bg9rOY.jpg",
    "runtime": 119,
    "networks": [],
    "certification": "14",
    "slug": "capito-amrica-admirvel-mundo-novo"
},

{
    "id": 1160956,
    "title": "Operação Panda",
    "genre_ids": [
        28,
        35
    ],
    "release_date": "2024-10-01",
    "popularity": 475.394,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/rO62kjEpxKoi22euZlM11o2hRJe.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "operao-panda"
},

{
    "id": 1084199,
    "title": "Acompanhante Perfeita",
    "genre_ids": [
        878,
        53
    ],
    "release_date": "2025-01-22",
    "popularity": 441.44,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bjp5zXaIG5tOCtyzUzuf4lsdZub.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "16",
    "slug": "acompanhante-perfeita"
},

{
    "id": 1294203,
    "title": "Minha Culpa: Londres",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2025-02-12",
    "popularity": 399.682,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/grM1am6mYzxA84xDzTk23FQU7dG.jpg",
    "runtime": 119,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "minha-culpa-londres"
},

{
    "id": 539972,
    "title": "Kraven: O Caçador",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2024-12-11",
    "popularity": 375.241,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/pWvQsP9o1MQ4vQNjpL9QeYFXKOs.jpg",
    "runtime": 127,
    "networks": [
        484
    ],
    "certification": "16",
    "slug": "kraven-o-caador"
},

{
    "id": 516729,
    "title": "Paddington: Uma Aventura na Floresta",
    "genre_ids": [
        10751,
        12,
        35
    ],
    "release_date": "2024-11-08",
    "popularity": 321.097,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/lmQnyeuRCDXf5MFNu3eyznO4FTn.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "N/A",
    "slug": "paddington-uma-aventura-na-floresta"
},

{
    "id": 774370,
    "title": "O Homem-Cão",
    "genre_ids": [
        10751,
        16,
        35,
        28
    ],
    "release_date": "2025-01-24",
    "popularity": 302.76,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/iBZlbYSVOYjBJDwg4D3bcK0hE8F.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "L",
    "slug": "o-homem-co"
},

{
    "id": 1247019,
    "title": "Quando a Morte Sussurra 2",
    "genre_ids": [
        27,
        53,
        28
    ],
    "release_date": "2024-10-10",
    "popularity": 278.019,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/9G0czCAjBlZvrfmNhTPRyA14Ktj.jpg",
    "runtime": 112,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "quando-a-morte-sussurra-2"
},

{
    "id": 1138749,
    "title": "The Island",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2023-07-21",
    "popularity": 275.671,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/ajb1rMiorchfRemYHZCkbV9DBg6.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "the-island"
},

{
    "id": 1249289,
    "title": "Código Alarum",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2025-01-16",
    "popularity": 269.218,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/6XVIRVQICfefW8UrjHVasraEgou.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "16",
    "slug": "cdigo-alarum"
},

{
    "id": 912649,
    "title": "Venom: A Última Rodada",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "2024-10-22",
    "popularity": 256.442,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/jQ92em8SMpu0ufGUtZNVlvxO4Qr.jpg",
    "runtime": 110,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "venom-a-ltima-rodada"
},

{
    "id": 549509,
    "title": "O Brutalista",
    "genre_ids": [
        18
    ],
    "release_date": "2024-12-20",
    "popularity": 254.482,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tsVRsCGJ4bZG1xWfQkUgt71ystL.jpg",
    "runtime": 215,
    "networks": [],
    "certification": "N/A",
    "slug": "o-brutalista"
},

{
    "id": 558449,
    "title": "Gladiador 2",
    "genre_ids": [
        28,
        12,
        18
    ],
    "release_date": "2024-11-05",
    "popularity": 231.292,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/342bly9MqveL65TnEFzx8TTUxcL.jpg",
    "runtime": 150,
    "networks": [
        484
    ],
    "certification": "16",
    "slug": "gladiador-2"
},

{
    "id": 1410082,
    "title": "Sniper: The Last Stand",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2025-01-21",
    "popularity": 231.041,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/TVvIyCsFCmLk9MRLbAZi4X8f32.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "sniper-the-last-stand"
},

{
    "id": 993710,
    "title": "De Volta à Ação",
    "genre_ids": [
        28,
        35
    ],
    "release_date": "2025-01-15",
    "popularity": 230.654,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/m4gzzzeYRmrwasrBdJmjhBmjS3U.jpg",
    "runtime": 114,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "de-volta-ao"
},

{
    "id": 1201012,
    "title": "Viva os Noivos!",
    "genre_ids": [
        35,
        10749,
        28
    ],
    "release_date": "2025-02-13",
    "popularity": 216.262,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/4AvT0zWGUcxVkEylAtKEjvY8brc.jpg",
    "runtime": 109,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "viva-os-noivos"
},

{
    "id": 754744,
    "title": "볼빨간 며느리",
    "genre_ids": [
        18
    ],
    "release_date": "2020-10-16",
    "popularity": 213.164,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/uQD0RqVvBsrPh82G7kOBWdM9yWo.jpg",
    "runtime": 71,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 811941,
    "title": "Devara: Rei dos Mares - Parte 1",
    "genre_ids": [
        28,
        18
    ],
    "release_date": "2024-09-26",
    "popularity": 203.224,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/reL2aDdytm4bfKSyMeUm3hwgOw5.jpg",
    "runtime": 175,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "devara-rei-dos-mares-parte-1"
},

{
    "id": 710295,
    "title": "Lobisomem",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2025-01-15",
    "popularity": 187.399,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/nQLt14Yb7B5Mlq4KruQHTSaTCE6.jpg",
    "runtime": 103,
    "networks": [],
    "certification": "16",
    "slug": "lobisomem"
},

{
    "id": 1035048,
    "title": "A Linha da Extinção",
    "genre_ids": [
        28,
        878,
        53
    ],
    "release_date": "2024-11-07",
    "popularity": 181.014,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/8W6pH0sLPKSq8gM7qEnQiRSzWSN.jpg",
    "runtime": 95,
    "networks": [
        484
    ],
    "certification": "16",
    "slug": "a-linha-da-extino"
},

{
    "id": 1255788,
    "title": "O Jardineiro e a Lista da Morte",
    "genre_ids": [
        28,
        35
    ],
    "release_date": "2025-01-30",
    "popularity": 180.881,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/rMoxItfgCGy73Z9bJTLg5mLvk1B.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "o-jardineiro-e-a-lista-da-morte"
},

{
    "id": 1357633,
    "title": "SOLO LEVELING -Segundo Despertar-",
    "genre_ids": [
        28,
        12,
        14,
        16
    ],
    "release_date": "2024-11-26",
    "popularity": 173.025,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/iU1fG893IXb8wdV70D23YTJDrjR.jpg",
    "runtime": 116,
    "networks": [],
    "certification": "N/A",
    "slug": "solo-leveling-segundo-despertar-"
},

{
    "id": 426889,
    "title": "Le clitoris",
    "genre_ids": [
        16,
        99
    ],
    "release_date": "2016-06-18",
    "popularity": 163.799,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/p5i1yyQW6OpLfB59w7ZkX5lvBqD.jpg",
    "runtime": 3,
    "networks": [],
    "certification": "N/A",
    "slug": "le-clitoris"
},

{
    "id": 1184918,
    "title": "Robô Selvagem",
    "genre_ids": [
        16,
        878,
        10751
    ],
    "release_date": "2024-09-12",
    "popularity": 125.837,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/cWsd33Nwp3tgYB5LMMadl3qVMKh.jpg",
    "runtime": 101,
    "networks": [
        484
    ],
    "certification": "L",
    "slug": "rob-selvagem"
},

{
    "id": 259872,
    "title": "Des jours plus belles que la nuit",
    "genre_ids": [
        10749
    ],
    "release_date": "2009-10-10",
    "popularity": 96.756,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/uCkANtG6ezb7hjRKVudY3PUcbvn.jpg",
    "runtime": 60,
    "networks": [],
    "certification": "N/A",
    "slug": "des-jours-plus-belles-que-la-nuit"
},

{
    "id": 1124620,
    "title": "O Macaco",
    "genre_ids": [
        27,
        35
    ],
    "release_date": "2025-02-14",
    "popularity": 95.314,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/56u4HEtE27uBicriDXuVkUknXQ0.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "o-macaco"
},

{
    "id": 945961,
    "title": "Alien: Romulus",
    "genre_ids": [
        27,
        878
    ],
    "release_date": "2024-08-13",
    "popularity": 94.141,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/jB0W9tn4w07MFn7sTfqRTBLVytF.jpg",
    "runtime": 119,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "alien-romulus"
},

{
    "id": 1034541,
    "title": "Terrifier 3",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-10-09",
    "popularity": 77.768,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/gU9ubNnaDKYBxs1DCSfiUIqHSMR.jpg",
    "runtime": 125,
    "networks": [],
    "certification": "18",
    "slug": "terrifier-3"
},

{
    "id": 823219,
    "title": "Flow",
    "genre_ids": [
        16,
        14,
        12
    ],
    "release_date": "2024-08-29",
    "popularity": 124.013,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/66Y6qdAmCTtzrtGSPrwHihIZP0W.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "10",
    "slug": "flow"
},

{
    "id": 1299372,
    "title": "El llanto",
    "genre_ids": [
        27
    ],
    "release_date": "2024-10-25",
    "popularity": 122.861,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/sO8kPwslPK5iXWDS1RKZvXkO95T.jpg",
    "runtime": 107,
    "networks": [],
    "certification": "N/A",
    "slug": "el-llanto"
},

{
    "id": 1114894,
    "title": "Star Trek: Seção 31",
    "genre_ids": [
        878,
        12,
        28,
        18,
        10770
    ],
    "release_date": "2025-01-15",
    "popularity": 154.478,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/eW1F4mCDLx0ydW8PlMq0uqvVDty.jpg",
    "runtime": 96,
    "networks": [
        531,
        484,
        582,
        2303
    ],
    "certification": "12",
    "slug": "star-trek-seo-31"
},

{
    "id": 1114894,
    "title": "Star Trek: Seção 31",
    "genre_ids": [
        878,
        12,
        28,
        18,
        10770
    ],
    "release_date": "2025-01-15",
    "popularity": 154.478,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/eW1F4mCDLx0ydW8PlMq0uqvVDty.jpg",
    "runtime": 96,
    "networks": [
        531,
        484,
        582,
        2303
    ],
    "certification": "12",
    "slug": "star-trek-seo-31"
},

{
    "id": 1154215,
    "title": "Elyas",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-07-03",
    "popularity": 92.678,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/zuwf11mv6ju9Kf8PtlUjB0OzrBg.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "elyas"
},

{
    "id": 1097549,
    "title": "Babygirl",
    "genre_ids": [
        18
    ],
    "release_date": "2024-12-25",
    "popularity": 92.575,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/47AmmkY5Vo4ODLueXUksEin0aWw.jpg",
    "runtime": 114,
    "networks": [],
    "certification": "18",
    "slug": "babygirl"
},

{
    "id": 1005331,
    "title": "Bagagem de Risco",
    "genre_ids": [
        53,
        28
    ],
    "release_date": "2024-12-05",
    "popularity": 76.877,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/6cMRujaT02bDOjYGGy5KncAD7U7.jpg",
    "runtime": 119,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "bagagem-de-risco"
},

{
    "id": 426063,
    "title": "Nosferatu",
    "genre_ids": [
        27,
        14
    ],
    "release_date": "2024-12-25",
    "popularity": 153.349,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/fbkUfzmVzEBFSt6p7VigknREIJT.jpg",
    "runtime": 133,
    "networks": [
        484
    ],
    "certification": "16",
    "slug": "nosferatu"
},

{
    "id": 426063,
    "title": "Nosferatu",
    "genre_ids": [
        27,
        14
    ],
    "release_date": "2024-12-25",
    "popularity": 153.349,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/fbkUfzmVzEBFSt6p7VigknREIJT.jpg",
    "runtime": 133,
    "networks": [
        484
    ],
    "certification": "16",
    "slug": "nosferatu"
},

{
    "id": 507086,
    "title": "Jurassic World: Domínio",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2022-06-01",
    "popularity": 89.146,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/w6Jz1AgjscqBuS8qXBd0wUHz5zC.jpg",
    "runtime": 147,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "jurassic-world-domnio"
},

{
    "id": 1010581,
    "title": "Minha Culpa",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2023-06-08",
    "popularity": 150.539,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/a59iGvF609yAZ5tfZUoQ3XipeQH.jpg",
    "runtime": 117,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "minha-culpa"
},

{
    "id": 1212142,
    "title": "Meio Grávida",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2025-02-04",
    "popularity": 76.189,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/qh4H7H0XYv9TJ0ZSFsOc64NUG1W.jpg",
    "runtime": 100,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "meio-grvida"
},

{
    "id": 1214481,
    "title": "Os Altos e Baixos do Amor",
    "genre_ids": [
        10749,
        35,
        18
    ],
    "release_date": "2025-02-13",
    "popularity": 87.868,
    "vote_average": 4.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/t8KCMc40E4A9m8AsUkr9D9wUgjE.jpg",
    "runtime": 96,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "os-altos-e-baixos-do-amor"
},

{
    "id": 1352774,
    "title": "O Retorno do Leitão",
    "genre_ids": [
        27
    ],
    "release_date": "2025-01-25",
    "popularity": 148.792,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/5wZNFUJAwyX6RCxdqrLO9lLWJ20.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "N/A",
    "slug": "o-retorno-do-leito"
},

{
    "id": 519182,
    "title": "Meu Malvado Favorito 4",
    "genre_ids": [
        16,
        10751,
        35,
        878
    ],
    "release_date": "2024-06-20",
    "popularity": 126.95,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/oCnwP87AskNyzATNEBNHHaktjzG.jpg",
    "runtime": 94,
    "networks": [
        119,
        484
    ],
    "certification": "L",
    "slug": "meu-malvado-favorito-4"
},

{
    "id": 698687,
    "title": "Transformers: O Início",
    "genre_ids": [
        16,
        878,
        12,
        10751
    ],
    "release_date": "2024-09-11",
    "popularity": 85.99,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/9yPuNAZQd5m5iKpQV2MDAfcwW9N.jpg",
    "runtime": 104,
    "networks": [
        531,
        484,
        582,
        2303
    ],
    "certification": "10",
    "slug": "transformers-o-incio"
},

{
    "id": 970450,
    "title": "Werewolves",
    "genre_ids": [
        28,
        27,
        53
    ],
    "release_date": "2024-12-04",
    "popularity": 145.514,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/7CCTW7IALnbp7vRtaZaz11kva0v.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "16",
    "slug": "werewolves"
},

{
    "id": 839033,
    "title": "O Senhor dos Anéis: A Guerra dos Rohirrim",
    "genre_ids": [
        16,
        14,
        12,
        28
    ],
    "release_date": "2024-12-05",
    "popularity": 126.019,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/aLOROyUuOum0zztqPiJDCFgFMcw.jpg",
    "runtime": 134,
    "networks": [
        484
    ],
    "certification": "12",
    "slug": "o-senhor-dos-anis-a-guerra-dos-rohirrim"
},

{
    "id": 411,
    "title": "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
    "genre_ids": [
        12,
        10751,
        14
    ],
    "release_date": "2005-12-07",
    "popularity": 84.903,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/sLw1gxPAvkqhp5XrdO2A50Q5lTW.jpg",
    "runtime": 143,
    "networks": [
        337,
        477
    ],
    "certification": "12",
    "slug": "as-crnicas-de-nrnia-o-leo-a-feiticeira-e-o-guarda-roupa"
},

{
    "id": 826937,
    "title": "시누이의 맛 2",
    "genre_ids": [
        10749
    ],
    "release_date": "2021-01-20",
    "popularity": 66.869,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/r6zVEuy2O6R4keqs33OBz5dMFEg.jpg",
    "runtime": 71,
    "networks": [],
    "certification": "N/A",
    "slug": "-2"
},

{
    "id": 157336,
    "title": "Interestelar",
    "genre_ids": [
        12,
        18,
        878
    ],
    "release_date": "2014-11-05",
    "popularity": 75.278,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg",
    "runtime": 169,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "10",
    "slug": "interestelar"
},

{
    "id": 1000075,
    "title": "Largo Winch: O Preço do Dinheiro",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2024-07-31",
    "popularity": 58.163,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/5H5rmjHYr9YHrBbCGW0nVA43nl.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": "largo-winch-o-preo-do-dinheiro"
},

{
    "id": 1235623,
    "title": "Eye for an Eye 2",
    "genre_ids": [
        28,
        18
    ],
    "release_date": "2024-07-21",
    "popularity": 83.108,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/isVAfZn5orLcUwoI1IUWPMWHmPV.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "eye-for-an-eye-2"
},

{
    "id": 1122418,
    "title": "This Time Next Year",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2024-06-03",
    "popularity": 66.808,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/ckLPzRl9ZDHzNt4tDjkTGUyCYg7.jpg",
    "runtime": 116,
    "networks": [],
    "certification": "N/A",
    "slug": "this-time-next-year"
},

{
    "id": 135348,
    "title": "Tabu",
    "genre_ids": [
        18
    ],
    "release_date": "1977-01-28",
    "popularity": 73.958,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/hIvrgGNsYCDsaJC6Dkk5T3aE1fY.jpg",
    "runtime": 115,
    "networks": [],
    "certification": "N/A",
    "slug": "tabu"
},

{
    "id": 1159311,
    "title": "My Hero Academia: Agora é a Sua Vez",
    "genre_ids": [
        16,
        28,
        12,
        878
    ],
    "release_date": "2024-08-02",
    "popularity": 57.962,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/mSo6C1u3jAUKOS9rWjoWFAn0Xru.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "my-hero-academia-agora-a-sua-vez"
},

{
    "id": 1147416,
    "title": "Miraculous World: Londres, Corrida Contra o Tempo",
    "genre_ids": [
        16,
        12,
        28,
        14
    ],
    "release_date": "2024-11-14",
    "popularity": 82.826,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/l9YoPPpIiVBHjoNxIeaMSgqJ8iO.jpg",
    "runtime": 50,
    "networks": [],
    "certification": "L",
    "slug": "miraculous-world-londres-corrida-contra-o-tempo"
},

{
    "id": 845781,
    "title": "Operação Natal",
    "genre_ids": [
        28,
        14,
        35
    ],
    "release_date": "2024-10-31",
    "popularity": 141.77,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/4Ttcw4l7Cb7VIPwVX08m30ICrCI.jpg",
    "runtime": 124,
    "networks": [
        119
    ],
    "certification": "10",
    "slug": "operao-natal"
},

{
    "id": 155,
    "title": "Batman: O Cavaleiro das Trevas",
    "genre_ids": [
        18,
        28,
        80,
        53
    ],
    "release_date": "2008-07-16",
    "popularity": 56.703,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg",
    "runtime": 152,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "batman-o-cavaleiro-das-trevas"
},

{
    "id": 1138194,
    "title": "Herege",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-10-31",
    "popularity": 81.723,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/j5e2YS1PRUVC1YgSool0JJyNLxJ.jpg",
    "runtime": 111,
    "networks": [
        484
    ],
    "certification": "N/A",
    "slug": "herege"
},

{
    "id": 533535,
    "title": "Deadpool & Wolverine",
    "genre_ids": [
        28,
        35,
        878
    ],
    "release_date": "2024-07-24",
    "popularity": 138.946,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/xq4v7JE8niZ75OYYPDGNn6Gzpyt.jpg",
    "runtime": 128,
    "networks": [
        337
    ],
    "certification": "18",
    "slug": "deadpool-wolverine"
},

{
    "id": 1011985,
    "title": "Kung Fu Panda 4",
    "genre_ids": [
        16,
        10751,
        28,
        35
    ],
    "release_date": "2024-03-02",
    "popularity": 56.524,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/vU5MZaZfdl6P7SRHGjpWYiNYa1t.jpg",
    "runtime": 94,
    "networks": [
        119
    ],
    "certification": "L",
    "slug": "kung-fu-panda-4"
},

{
    "id": 933260,
    "title": "A Substância",
    "genre_ids": [
        27,
        878
    ],
    "release_date": "2024-09-07",
    "popularity": 136.505,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/vWeOgzlhnP1sS23H3rzctGHB9Nb.jpg",
    "runtime": 140,
    "networks": [
        11,
        201
    ],
    "certification": "18",
    "slug": "a-substncia"
},

{
    "id": 1425201,
    "title": "Rosebud Baker: The Mother Lode",
    "genre_ids": [
        35
    ],
    "release_date": "2025-02-18",
    "popularity": 51.597,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/pXtFoZR2YQv1jka1m2mpmB9jUz7.jpg",
    "runtime": 0,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "rosebud-baker-the-mother-lode"
},

{
    "id": 502356,
    "title": "Super Mario Bros. O Filme",
    "genre_ids": [
        16,
        10751,
        12,
        14,
        35
    ],
    "release_date": "2023-04-05",
    "popularity": 51.518,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/ktU3MIeZtuEVRlMftgp0HMX2WR7.jpg",
    "runtime": 92,
    "networks": [
        119,
        307
    ],
    "certification": "L",
    "slug": "super-mario-bros-o-filme"
},

{
    "id": 1323784,
    "title": "Mala influencia",
    "genre_ids": [
        18,
        53,
        10749
    ],
    "release_date": "2025-01-24",
    "popularity": 51.368,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/8xBKZpQpWx8MbbTZm0jLgV4sXil.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "mala-influencia"
},

{
    "id": 1241752,
    "title": "Rita",
    "genre_ids": [
        18
    ],
    "release_date": "2024-03-22",
    "popularity": 51.331,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/grIFQLXXwQmjvYYfXVXCgGTMUWw.jpg",
    "runtime": 113,
    "networks": [],
    "certification": "N/A",
    "slug": "rita"
},

{
    "id": 799766,
    "title": "Better Man - A História de Robbie Williams",
    "genre_ids": [
        10402,
        18
    ],
    "release_date": "2024-12-06",
    "popularity": 73.522,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/Ar6BzLWcvXKQJ7iH0FvvH7tqQic.jpg",
    "runtime": 135,
    "networks": [],
    "certification": "16",
    "slug": "better-man-a-histria-de-robbie-williams"
},

{
    "id": 1075789,
    "title": "Terras Selvagens",
    "genre_ids": [
        28
    ],
    "release_date": "2024-03-08",
    "popularity": 73.036,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/r3eg88OcnLcCihQdaW3IAOlui4F.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "terras-selvagens"
},

{
    "id": 1215185,
    "title": "La infiltrada",
    "genre_ids": [
        18,
        80,
        53
    ],
    "release_date": "2024-10-11",
    "popularity": 71.385,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/xnME9c2PEtYGBDPO4lZXAVeEu0G.jpg",
    "runtime": 119,
    "networks": [],
    "certification": "N/A",
    "slug": "la-infiltrada"
},

{
    "id": 1272149,
    "title": "Bridget Jones: Louca Pelo Garoto",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2025-02-12",
    "popularity": 131.538,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/huG3zwLLSqzSEaAEWS2y7oVs5v7.jpg",
    "runtime": 125,
    "networks": [],
    "certification": "14",
    "slug": "bridget-jones-louca-pelo-garoto"
},

{
    "id": 957119,
    "title": "Sidelined: QB e Eu",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2025-02-06",
    "popularity": 80.371,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/9g4bRZNMUzxk89IW3XmqbCeHcMf.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "sidelined-qb-e-eu"
},

{
    "id": 786892,
    "title": "Furiosa: Uma Saga Mad Max",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "2024-05-22",
    "popularity": 51.193,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/7qOSKoOAPgemYhBwbJgBWcCxPWZ.jpg",
    "runtime": 148,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "16",
    "slug": "furiosa-uma-saga-mad-max"
},

{
    "id": 519182,
    "title": "Meu Malvado Favorito 4",
    "genre_ids": [
        16,
        10751,
        35,
        878
    ],
    "release_date": "2024-06-20",
    "popularity": 126.95,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/oCnwP87AskNyzATNEBNHHaktjzG.jpg",
    "runtime": 94,
    "networks": [
        119,
        484
    ],
    "certification": "L",
    "slug": "meu-malvado-favorito-4"
},

{
    "id": 974576,
    "title": "Conclave",
    "genre_ids": [
        18,
        9648,
        53
    ],
    "release_date": "2024-10-25",
    "popularity": 79.68,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/xS5SK7EVPCmsFAOT48rCsJesmkP.jpg",
    "runtime": 126,
    "networks": [],
    "certification": "N/A",
    "slug": "conclave"
},

{
    "id": 839033,
    "title": "O Senhor dos Anéis: A Guerra dos Rohirrim",
    "genre_ids": [
        16,
        14,
        12,
        28
    ],
    "release_date": "2024-12-05",
    "popularity": 126.019,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/aLOROyUuOum0zztqPiJDCFgFMcw.jpg",
    "runtime": 134,
    "networks": [
        484
    ],
    "certification": "12",
    "slug": "o-senhor-dos-anis-a-guerra-dos-rohirrim"
},

{
    "id": 1029235,
    "title": "Azrael",
    "genre_ids": [
        28,
        27,
        53
    ],
    "release_date": "2024-09-27",
    "popularity": 79.162,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/qpdFKDvJS7oLKTcBLXOaMwUESbs.jpg",
    "runtime": 84,
    "networks": [],
    "certification": "18",
    "slug": "azrael"
},

{
    "id": 1249013,
    "title": "Jugaremos en el bosque",
    "genre_ids": [
        27
    ],
    "release_date": "2024-05-01",
    "popularity": 121.805,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/eBSl9nGymidAyEBdJGADnnm7JKt.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "jugaremos-en-el-bosque"
},

{
    "id": 1318917,
    "title": "Rumo ao Vento",
    "genre_ids": [
        10749
    ],
    "release_date": "2025-01-09",
    "popularity": 121.316,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/h9jr8FgXnhE0QnE6kgBsHKhmbfB.jpg",
    "runtime": 86,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "rumo-ao-vento"
},

{
    "id": 1156593,
    "title": "Sua Culpa",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-12-26",
    "popularity": 120.39,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/bYGXiAHUQqSp8SW3ql2lleZxQ5n.jpg",
    "runtime": 118,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "sua-culpa"
},

{
    "id": 1203329,
    "title": "The Witcher: Sereias das Profundezas",
    "genre_ids": [
        16,
        14,
        28
    ],
    "release_date": "2025-02-10",
    "popularity": 119.568,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ob2oIUL1gV4pNg7s9oGjNBSI2iF.jpg",
    "runtime": 91,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "the-witcher-sereias-das-profundezas"
},

{
    "id": 974453,
    "title": "Último Alvo",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2024-10-31",
    "popularity": 118.307,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/gt70JOD9xsPlpJnuBJAWdOT4yRg.jpg",
    "runtime": 112,
    "networks": [],
    "certification": "N/A",
    "slug": "ltimo-alvo"
},

{
    "id": 324568,
    "title": "おいら女蛮",
    "genre_ids": [
        16,
        35,
        28
    ],
    "release_date": "1992-08-21",
    "popularity": 48.219,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/rWEykM1thLhYee6mK25fGLXyO14.jpg",
    "runtime": 43,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 929204,
    "title": "Wallace & Gromit - Avengança",
    "genre_ids": [
        16,
        35,
        10751,
        12
    ],
    "release_date": "2024-12-18",
    "popularity": 66.149,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/9kzs6gPSOWqqjZz1eHWEvNTW9Dx.jpg",
    "runtime": 79,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "wallace-gromit-avengana"
},

{
    "id": 889737,
    "title": "Coringa: Delírio a Dois",
    "genre_ids": [
        18,
        80,
        53
    ],
    "release_date": "2024-10-01",
    "popularity": 43.793,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/jNttwl5CYgnxNwQ8157BxyYJqu2.jpg",
    "runtime": 138,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "16",
    "slug": "coringa-delrio-a-dois"
},

{
    "id": 14836,
    "title": "Coraline e o Mundo Secreto",
    "genre_ids": [
        16,
        10751,
        14
    ],
    "release_date": "2009-02-05",
    "popularity": 40.741,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/eebuT4ISt1lU0I78ZUPvlzhfdj9.jpg",
    "runtime": 63,
    "networks": [],
    "certification": "10",
    "slug": "coraline-e-o-mundo-secreto"
},

{
    "id": 762441,
    "title": "Um Lugar Silencioso: Dia Um",
    "genre_ids": [
        27,
        878,
        53
    ],
    "release_date": "2024-06-26",
    "popularity": 56.342,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/pN9BtzUeqPIKybAu9baihz6YzyO.jpg",
    "runtime": 100,
    "networks": [
        531,
        484,
        582,
        1853,
        2303
    ],
    "certification": "14",
    "slug": "um-lugar-silencioso-dia-um"
},

{
    "id": 1278101,
    "title": "小小的我",
    "genre_ids": [
        18,
        10751
    ],
    "release_date": "2024-12-27",
    "popularity": 71.183,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yPio0uzv3LKSM3N9jwsJNp2T806.jpg",
    "runtime": 131,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1100782,
    "title": "Sorria 2",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2024-10-16",
    "popularity": 78.599,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/tPGaWmxdPumgOAzbGHu8aRJTaXx.jpg",
    "runtime": 127,
    "networks": [],
    "certification": "18",
    "slug": "sorria-2"
},

{
    "id": 198663,
    "title": "Maze Runner: Correr ou Morrer",
    "genre_ids": [
        28,
        9648,
        878,
        53
    ],
    "release_date": "2014-09-10",
    "popularity": 50.747,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/efAJzIyjYlgdO7fzfMBJcFZqI5v.jpg",
    "runtime": 113,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "maze-runner-correr-ou-morrer"
},

{
    "id": 1182387,
    "title": "Blindado",
    "genre_ids": [
        28,
        80,
        53,
        18
    ],
    "release_date": "2024-10-30",
    "popularity": 55.133,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/cuZ6rE4yYVdzG4L2rtnEZEt3fvR.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "14",
    "slug": "blindado"
},

{
    "id": 150540,
    "title": "Divertida Mente",
    "genre_ids": [
        16,
        10751,
        12,
        18,
        35
    ],
    "release_date": "2015-06-17",
    "popularity": 43.762,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/4Kg34KTlnoHvjLzD7ji2jUSouvD.jpg",
    "runtime": 95,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "divertida-mente"
},

{
    "id": 1064486,
    "title": "Memórias de um Caracol",
    "genre_ids": [
        16,
        18,
        35
    ],
    "release_date": "2024-10-17",
    "popularity": 118.024,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/zeFRmFslWFp8GqbFfzUgwZb2ufW.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": "memrias-de-um-caracol"
},

{
    "id": 7451,
    "title": "Triplo X",
    "genre_ids": [
        28,
        12,
        53,
        80
    ],
    "release_date": "2002-08-09",
    "popularity": 65.515,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/lpmyeqSR2Pc7ytfTp1ScD3ferX4.jpg",
    "runtime": 124,
    "networks": [
        2156
    ],
    "certification": "14",
    "slug": "triplo-x"
},

{
    "id": 1167898,
    "title": "Straight",
    "genre_ids": [
        10749
    ],
    "release_date": "2024-11-21",
    "popularity": 78.179,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/34l0QGrhDv8DawQss6rDRkio4Ga.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "straight"
},

{
    "id": 829557,
    "title": "365 Dias: Hoje",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2022-04-26",
    "popularity": 71.178,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/3104lH1U1XfUXo0ZLawnIjXS0NC.jpg",
    "runtime": 111,
    "networks": [
        8,
        1796
    ],
    "certification": "18",
    "slug": "365-dias-hoje"
},

{
    "id": 978796,
    "title": "O Homem do Saco",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-09-20",
    "popularity": 48.187,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/upJVPS6e99GK1xP6gNKHKNxMsHB.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "o-homem-do-saco"
},

{
    "id": 1100856,
    "title": "O Sussurro da Bruxa",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-06-13",
    "popularity": 50.441,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/2K9JafZ9Ai6Yyg7syTiJaju8bfx.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "o-sussurro-da-bruxa"
},

{
    "id": 1278263,
    "title": "A Semente do Fruto Sagrado",
    "genre_ids": [
        18,
        53,
        80
    ],
    "release_date": "2024-09-18",
    "popularity": 54.948,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/eUseiPOEMhWIOV06RQCNjB4U9Kx.jpg",
    "runtime": 167,
    "networks": [
        2156
    ],
    "certification": "N/A",
    "slug": "a-semente-do-fruto-sagrado"
},

{
    "id": 667538,
    "title": "Transformers: O Despertar das Feras",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2023-06-06",
    "popularity": 43.754,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/zEqwfO5R2LrrLgV61xm8M9TmNTG.jpg",
    "runtime": 127,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "transformers-o-despertar-das-feras"
},

{
    "id": 634649,
    "title": "Homem-Aranha: Sem Volta Para Casa",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2021-12-15",
    "popularity": 65.36,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/8qBccgSj0Ru9Odm1Mjv82cxDr7l.jpg",
    "runtime": 149,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "homem-aranha-sem-volta-para-casa"
},

{
    "id": 299536,
    "title": "Vingadores: Guerra Infinita",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2018-04-25",
    "popularity": 78.113,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/d6jUbQj4E4R5MJlFYfdzANEZbkL.jpg",
    "runtime": 182,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "vingadores-guerra-infinita"
},

{
    "id": 940551,
    "title": "Patos!",
    "genre_ids": [
        16,
        12,
        35,
        10751
    ],
    "release_date": "2023-12-06",
    "popularity": 47.565,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/wXWnUhdnSuADRp9w7aAZNHx682v.jpg",
    "runtime": 83,
    "networks": [
        119
    ],
    "certification": "L",
    "slug": "patos"
},

{
    "id": 496243,
    "title": "Parasita",
    "genre_ids": [
        35,
        53,
        18
    ],
    "release_date": "2019-05-30",
    "popularity": 40.724,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/bik2BZjmVjeE6LOZqtuTjb4jJPQ.jpg",
    "runtime": 132,
    "networks": [
        119,
        1899,
        307,
        1825,
        2156
    ],
    "certification": "16",
    "slug": "parasita"
},

{
    "id": 1055110,
    "title": "扉を閉めた女教師",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2021-10-03",
    "popularity": 38.838,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/t0R81rsu2chPZEpKiHi8zbOOwR3.jpg",
    "runtime": 71,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1064213,
    "title": "Anora",
    "genre_ids": [
        18,
        35,
        10749
    ],
    "release_date": "2024-10-14",
    "popularity": 114.819,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/xmFdNzbUiT5XmH6rbIVGYDQHGeo.jpg",
    "runtime": 139,
    "networks": [],
    "certification": "N/A",
    "slug": "anora"
},

{
    "id": 823464,
    "title": "Godzilla e Kong: O Novo Império",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2024-03-27",
    "popularity": 54.875,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/fWSGD2yrzz6hscocnMD8AEXIThk.jpg",
    "runtime": 115,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "12",
    "slug": "godzilla-e-kong-o-novo-imprio"
},

{
    "id": 1260594,
    "title": "Sumala",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-09-26",
    "popularity": 69.553,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/jCOac0WEpCz8KyQYV0MTQ5oSwmf.jpg",
    "runtime": 113,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "sumala"
},

{
    "id": 138843,
    "title": "Invocação do Mal",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2013-07-18",
    "popularity": 43.732,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/otILeHmcY6wc64DNXi0T7YYATZK.jpg",
    "runtime": 112,
    "networks": [
        1899
    ],
    "certification": "14",
    "slug": "invocao-do-mal"
},

{
    "id": 24428,
    "title": "Os Vingadores: The Avengers",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2012-04-25",
    "popularity": 64.762,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/j9hwS307Zlc5mQTbAnwV75vXG0H.jpg",
    "runtime": 143,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "os-vingadores-the-avengers"
},

{
    "id": 216015,
    "title": "Cinquenta Tons de Cinza",
    "genre_ids": [
        18,
        10749,
        53
    ],
    "release_date": "2015-02-11",
    "popularity": 50.368,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/bijj3VQoYLAZKjuX3T8lgpM7hch.jpg",
    "runtime": 125,
    "networks": [
        8,
        119,
        307,
        484,
        1796
    ],
    "certification": "16",
    "slug": "cinquenta-tons-de-cinza"
},

{
    "id": 929590,
    "title": "Guerra Civil",
    "genre_ids": [
        10752,
        28,
        18
    ],
    "release_date": "2024-04-10",
    "popularity": 47.121,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/3Use5sOQWXL3BvcaKqUH7eQ7I53.jpg",
    "runtime": 109,
    "networks": [
        1899,
        1825
    ],
    "certification": "18",
    "slug": "guerra-civil"
},

{
    "id": 22,
    "title": "Piratas do Caribe: A Maldição do Pérola Negra",
    "genre_ids": [
        12,
        14,
        28
    ],
    "release_date": "2003-07-09",
    "popularity": 40.543,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/zUpeLvZJw5Tf22BAjraOZFex9E0.jpg",
    "runtime": 143,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "piratas-do-caribe-a-maldio-do-prola-negra"
},

{
    "id": 85,
    "title": "Indiana Jones e os Caçadores da Arca Perdida",
    "genre_ids": [
        12,
        28
    ],
    "release_date": "1981-06-12",
    "popularity": 114.131,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/vPDnnfUAgLz7yWQVCK4gJAKFy0m.jpg",
    "runtime": 115,
    "networks": [
        531,
        307,
        499,
        484,
        1853,
        2156,
        2303
    ],
    "certification": "L",
    "slug": "indiana-jones-e-os-caadores-da-arca-perdida"
},

{
    "id": 1164355,
    "title": "Lembayung",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-09-19",
    "popularity": 54.164,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/5x9LrW0yvtt6S3XovIQHgXfYvLL.jpg",
    "runtime": 123,
    "networks": [],
    "certification": "N/A",
    "slug": "lembayung"
},

{
    "id": 1051896,
    "title": "Depois do Apocalipse",
    "genre_ids": [
        28,
        27,
        53,
        878
    ],
    "release_date": "2024-04-12",
    "popularity": 69.158,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/yrmjuloMIfSLKnyUnxvq0jORJ3M.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "14",
    "slug": "depois-do-apocalipse"
},

{
    "id": 2062,
    "title": "Ratatouille",
    "genre_ids": [
        16,
        35,
        10751,
        14
    ],
    "release_date": "2007-06-28",
    "popularity": 43.414,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/oKxcKosRU4FEIeg9vtklDvIfVFv.jpg",
    "runtime": 110,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "ratatouille"
},

{
    "id": 383634,
    "title": "肉体の門",
    "genre_ids": [
        18
    ],
    "release_date": "1988-04-09",
    "popularity": 47.091,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/raNbLci95MJ3L3dMnG7L7bD37lY.jpg",
    "runtime": 119,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1211472,
    "title": "Setembro 5",
    "genre_ids": [
        53,
        18,
        36
    ],
    "release_date": "2024-11-07",
    "popularity": 40.395,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/3emldMXl1Q3p5yFUOZmBtuEn65C.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "setembro-5"
},

{
    "id": 1252309,
    "title": "Pídeme lo que quieras",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-11-29",
    "popularity": 113.677,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/76qnVxU2rPdVvipBN3DPQH6fVYB.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "pdeme-lo-que-quieras"
},

{
    "id": 693134,
    "title": "Duna: Parte Dois",
    "genre_ids": [
        878,
        12
    ],
    "release_date": "2024-02-27",
    "popularity": 54.025,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg",
    "runtime": 166,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "duna-parte-dois"
},

{
    "id": 748783,
    "title": "Garfield - Fora de Casa",
    "genre_ids": [
        16,
        35,
        10751,
        12
    ],
    "release_date": "2024-04-30",
    "popularity": 68.96,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/WbnxK16vL7tSJl35GlnICa0ztP.jpg",
    "runtime": 100,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "garfield-fora-de-casa"
},

{
    "id": 1234821,
    "title": "Jurassic World: Recomeço",
    "genre_ids": [
        878,
        12,
        53
    ],
    "release_date": "2025-07-02",
    "popularity": 43.232,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/8BZ6oGDE336qFshFC44WxZtosBX.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "jurassic-world-recomeo"
},

{
    "id": 1111873,
    "title": "Abigail",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-04-16",
    "popularity": 37.306,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/pQFoHRmJLAlv5b2DNLGBISyxEuc.jpg",
    "runtime": 113,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "abigail"
},

{
    "id": 862,
    "title": "Toy Story: Um Mundo de Aventuras",
    "genre_ids": [
        16,
        12,
        10751,
        35
    ],
    "release_date": "1995-11-22",
    "popularity": 40.319,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/AptcisAVyZqBllXLEGje8MjKzJI.jpg",
    "runtime": 81,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "toy-story-um-mundo-de-aventuras"
},

{
    "id": 299534,
    "title": "Vingadores: Ultimato",
    "genre_ids": [
        12,
        878,
        28
    ],
    "release_date": "2019-04-24",
    "popularity": 46.859,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/7jvlqGsxeMKscskuUZgKk0Kuv99.jpg",
    "runtime": 181,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "vingadores-ultimato"
},

{
    "id": 437342,
    "title": "A Primeira Profecia",
    "genre_ids": [
        27
    ],
    "release_date": "2024-04-03",
    "popularity": 35.95,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/tINXSJfPiVGrTZTHFz5TFDh6SeX.jpg",
    "runtime": 119,
    "networks": [
        337
    ],
    "certification": "18",
    "slug": "a-primeira-profecia"
},

{
    "id": 1252377,
    "title": "La Dolce Villa",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2025-02-12",
    "popularity": 67.596,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/y3GXsdVfxIMA5IVQ2KNnBzDi1RM.jpg",
    "runtime": 99,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "la-dolce-villa"
},

{
    "id": 1325482,
    "title": "Morte Antes do Casamento",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2025-02-11",
    "popularity": 53.67,
    "vote_average": 4.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/fQOyS5280smeEOqXJ6VQbGFospl.jpg",
    "runtime": 106,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "morte-antes-do-casamento"
},

{
    "id": 615453,
    "title": "Ne Zha",
    "genre_ids": [
        16,
        14,
        12
    ],
    "release_date": "2019-07-26",
    "popularity": 50.062,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/ztWc4QvzEatqhGnQT98FsICc8rD.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "ne-zha"
},

{
    "id": 603,
    "title": "Matrix",
    "genre_ids": [
        28,
        878
    ],
    "release_date": "1999-03-31",
    "popularity": 43.127,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/qFHE09iQDbpHUBXJ8cFZu9v2ViO.jpg",
    "runtime": 136,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "matrix"
},

{
    "id": 1081012,
    "title": "Aftermath",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-09-27",
    "popularity": 112.003,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/v9knhuvYKwMUAta6fltNOuun3zF.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "aftermath"
},

{
    "id": 1299652,
    "title": "Watchmen: Capítulo 2",
    "genre_ids": [
        16,
        9648,
        878,
        28,
        18
    ],
    "release_date": "2024-11-25",
    "popularity": 46.811,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/rvSEowY2XE0Gb06FBEwQng2M6KX.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "watchmen-captulo-2"
},

{
    "id": 337167,
    "title": "Cinquenta Tons de Liberdade",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2018-01-17",
    "popularity": 38.816,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/6dS7dlVzMq5vft6IfVCUkZcWBqv.jpg",
    "runtime": 101,
    "networks": [
        8,
        307,
        484,
        1796
    ],
    "certification": "16",
    "slug": "cinquenta-tons-de-liberdade"
},

{
    "id": 271110,
    "title": "Capitão América: Guerra Civil",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2016-04-27",
    "popularity": 64.563,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/3bN7YZnf0mWpYwcektizfNlrCwC.jpg",
    "runtime": 137,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "capito-amrica-guerra-civil"
},

{
    "id": 1196470,
    "title": "Оцеляване",
    "genre_ids": [
        878,
        53,
        12,
        28
    ],
    "release_date": "2024-06-19",
    "popularity": 67.258,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/901kRttzfLScns7ss7RyKqG6d2A.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1001274,
    "title": "La Nuit se traîne",
    "genre_ids": [
        53,
        28
    ],
    "release_date": "2024-08-28",
    "popularity": 53.29,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/jzZJXEa8KX5hsjCCpRaWc69e9gz.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "la-nuit-se-trane"
},

{
    "id": 76341,
    "title": "Mad Max: Estrada da Fúria",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2015-05-13",
    "popularity": 40.112,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/mtgqrSlT47VsmeMVanLTny7BknB.jpg",
    "runtime": 120,
    "networks": [
        8,
        119,
        1899,
        1825
    ],
    "certification": "16",
    "slug": "mad-max-estrada-da-fria"
},

{
    "id": 603692,
    "title": "John Wick 4: Baba Yaga",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2023-03-22",
    "popularity": 42.997,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/dHQEM7aqsvBQnPmjdyTgb5fUG5q.jpg",
    "runtime": 169,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "john-wick-4-baba-yaga"
},

{
    "id": 50270,
    "title": "O Bordel de Paprika",
    "genre_ids": [
        18
    ],
    "release_date": "1991-02-13",
    "popularity": 34.527,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/jwlo74haG1XNmp5IdSJ5Gy3KuIm.jpg",
    "runtime": 116,
    "networks": [],
    "certification": "N/A",
    "slug": "o-bordel-de-paprika"
},

{
    "id": 335787,
    "title": "Uncharted: Fora do Mapa",
    "genre_ids": [
        28,
        12
    ],
    "release_date": "2022-02-10",
    "popularity": 50.001,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/qNAPgepJ4NHNA74ThVsxQEOUceJ.jpg",
    "runtime": 116,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "uncharted-fora-do-mapa"
},

{
    "id": 592983,
    "title": "Enfeitiçados",
    "genre_ids": [
        16,
        14,
        10751,
        12,
        35
    ],
    "release_date": "2024-11-22",
    "popularity": 46.49,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/vuHOjZH8MBq0gS07S206W5dxGkW.jpg",
    "runtime": 110,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "enfeitiados"
},

{
    "id": 592695,
    "title": "Pleasure",
    "genre_ids": [
        18
    ],
    "release_date": "2021-10-08",
    "popularity": 64.092,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/c8gSMaNjnQ0Lr37O703FuwQNIfi.jpg",
    "runtime": 108,
    "networks": [
        11
    ],
    "certification": "N/A",
    "slug": "pleasure"
},

{
    "id": 1043905,
    "title": "Dirty Angels",
    "genre_ids": [
        28,
        18,
        53,
        10752
    ],
    "release_date": "2024-12-11",
    "popularity": 110.566,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/3O3qSGmjRGc10hMwFul8WDxKE5t.jpg",
    "runtime": 104,
    "networks": [],
    "certification": "N/A",
    "slug": "dirty-angels"
},

{
    "id": 1278099,
    "title": "El candidato honesto",
    "genre_ids": [
        35
    ],
    "release_date": "2024-08-08",
    "popularity": 40.017,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/hmV5HPkbQuzgPo11Xm70CMQV3iZ.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "el-candidato-honesto"
},

{
    "id": 1247597,
    "title": "Salve Maria",
    "genre_ids": [
        18
    ],
    "release_date": "2024-10-31",
    "popularity": 49.88,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/c1vxdtbIyKE31mX9znwIsrHJ30S.jpg",
    "runtime": 111,
    "networks": [],
    "certification": "N/A",
    "slug": "salve-maria"
},

{
    "id": 1300607,
    "title": "Os Dois Hemisférios de Lucca",
    "genre_ids": [
        18
    ],
    "release_date": "2025-01-30",
    "popularity": 46.133,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/u226mX8Fr6eHpRnB0SBvZbWgSrJ.jpg",
    "runtime": 96,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "os-dois-hemisfrios-de-lucca"
},

{
    "id": 1361622,
    "title": "Invasão de Lua de Mel",
    "genre_ids": [
        35
    ],
    "release_date": "2025-02-11",
    "popularity": 63.971,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/JRF2CsPVaqbjxJkZM0zAKfdoXH.jpg",
    "runtime": 95,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "invaso-de-lua-de-mel"
},

{
    "id": 1022789,
    "title": "Divertida Mente 2",
    "genre_ids": [
        16,
        12,
        35,
        10751
    ],
    "release_date": "2024-06-11",
    "popularity": 110.252,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/xGvz7nlGQeePcVOpAzOcHsC7kRt.jpg",
    "runtime": 100,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "divertida-mente-2"
},

{
    "id": 51482,
    "title": "Death Note Relight 1: A Versão do Shinigami",
    "genre_ids": [
        10770,
        80,
        18,
        14,
        53,
        16
    ],
    "release_date": "2007-08-31",
    "popularity": 45.006,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/mtcYWsCg3h7xVlp32QgbFOcL4gY.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "death-note-relight-1-a-verso-do-shinigami"
},

{
    "id": 569094,
    "title": "Homem-Aranha: Através do Aranhaverso",
    "genre_ids": [
        16,
        28,
        12,
        878
    ],
    "release_date": "2023-05-31",
    "popularity": 49.278,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/fUwfsPWEEdnSt29jIwJ5eVtySX6.jpg",
    "runtime": 140,
    "networks": [
        119
    ],
    "certification": "10",
    "slug": "homem-aranha-atravs-do-aranhaverso"
},

{
    "id": 361743,
    "title": "Top Gun: Maverick",
    "genre_ids": [
        28,
        18
    ],
    "release_date": "2022-05-21",
    "popularity": 63.762,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/8v3lrllHYRrqEdYWLyscH4RGFDO.jpg",
    "runtime": 131,
    "networks": [],
    "certification": "12",
    "slug": "top-gun-maverick"
},

{
    "id": 1188104,
    "title": "Fúria Sobre Rodas",
    "genre_ids": [
        28,
        80
    ],
    "release_date": "2023-11-09",
    "popularity": 44.839,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/kDyCVJHZvHWTr0YFWxYROEZkf8t.jpg",
    "runtime": 75,
    "networks": [],
    "certification": "16",
    "slug": "fria-sobre-rodas"
},

{
    "id": 728949,
    "title": "Canina",
    "genre_ids": [
        35
    ],
    "release_date": "2024-12-06",
    "popularity": 37.286,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/fny7sIv34t3rvCNk2GWpckHSUXU.jpg",
    "runtime": 98,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "canina"
},

{
    "id": 278,
    "title": "Um Sonho de Liberdade",
    "genre_ids": [
        18,
        80
    ],
    "release_date": "1994-09-23",
    "popularity": 61.768,
    "vote_average": 8.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/xSnM4ahmz692msbMTBsfBWHvR3M.jpg",
    "runtime": 142,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "um-sonho-de-liberdade"
},

{
    "id": 1167271,
    "title": "Perseguição em Taipei",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2024-09-19",
    "popularity": 44.565,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/2CQIo4IWQTsRwuFrp3PW1G1vkHB.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "14",
    "slug": "perseguio-em-taipei"
},

{
    "id": 238,
    "title": "O Poderoso Chefão",
    "genre_ids": [
        18,
        80
    ],
    "release_date": "1972-03-14",
    "popularity": 61.589,
    "vote_average": 8.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/uP46DujkD3nwcisOjz9a0Xw0Knj.jpg",
    "runtime": 175,
    "networks": [
        8,
        531,
        499,
        1796,
        1853,
        2156,
        2303
    ],
    "certification": "14",
    "slug": "o-poderoso-chefo"
},

{
    "id": 385687,
    "title": "Velozes & Furiosos 10",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2023-05-17",
    "popularity": 60.635,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/wDWAA5QApz5L5BKfFaaj8HJCAQM.jpg",
    "runtime": 142,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "velozes-furiosos-10"
},

{
    "id": 98,
    "title": "Gladiador",
    "genre_ids": [
        28,
        18,
        12
    ],
    "release_date": "2000-05-04",
    "popularity": 42.956,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/4DUClyGA6OqjXv6yC0Imf6THGfp.jpg",
    "runtime": 155,
    "networks": [
        8,
        119,
        167,
        307,
        484,
        1796,
        2156
    ],
    "certification": "14",
    "slug": "gladiador"
},

{
    "id": 863,
    "title": "Toy Story 2",
    "genre_ids": [
        16,
        35,
        10751
    ],
    "release_date": "1999-10-30",
    "popularity": 33.699,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/lc7U3mggZkLxhAubC6F5WJspZb4.jpg",
    "runtime": 92,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "toy-story-2"
},

{
    "id": 575264,
    "title": "Missão: Impossível - Acerto de Contas Parte 1",
    "genre_ids": [
        28,
        12
    ],
    "release_date": "2023-07-08",
    "popularity": 35.944,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/56dp5Z70CxlnFxoZh3KjZpxG6qA.jpg",
    "runtime": 155,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "misso-impossvel-acerto-de-contas-parte-1"
},

{
    "id": 1414272,
    "title": "Belyas",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-07",
    "popularity": 109.707,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/5oJ6eMfI7B73cWh0VXaa5MzhfBW.jpg",
    "runtime": 70,
    "networks": [],
    "certification": "N/A",
    "slug": "belyas"
},

{
    "id": 420818,
    "title": "O Rei Leão",
    "genre_ids": [
        12,
        18,
        10751,
        16
    ],
    "release_date": "2019-07-12",
    "popularity": 66.882,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/wrHr8eEJYDAA7WYybyH162s4oZ4.jpg",
    "runtime": 118,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "o-rei-leo"
},

{
    "id": 926670,
    "title": "Henry Danger: O Filme",
    "genre_ids": [
        28,
        35,
        10751,
        878
    ],
    "release_date": "2025-01-17",
    "popularity": 42.955,
    "vote_average": 8.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/ycddfSBZPE7z9VK4PqYELodmbxl.jpg",
    "runtime": 86,
    "networks": [
        531,
        582,
        2303
    ],
    "certification": "N/A",
    "slug": "henry-danger-o-filme"
},

{
    "id": 980477,
    "title": "Ne-Zha 2",
    "genre_ids": [
        16,
        14,
        12
    ],
    "release_date": "2025-01-29",
    "popularity": 109.483,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/bTMf8M7rZ21fChGdtsZtJj4Dfqh.jpg",
    "runtime": 144,
    "networks": [],
    "certification": "N/A",
    "slug": "ne-zha-2"
},

{
    "id": 826937,
    "title": "시누이의 맛 2",
    "genre_ids": [
        10749
    ],
    "release_date": "2021-01-20",
    "popularity": 66.869,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/r6zVEuy2O6R4keqs33OBz5dMFEg.jpg",
    "runtime": 71,
    "networks": [],
    "certification": "N/A",
    "slug": "-2"
},

{
    "id": 829560,
    "title": "365 Dias Finais",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2022-08-18",
    "popularity": 42.801,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/2pxKwxMbd5l3BxK5fBgVCWYweH2.jpg",
    "runtime": 112,
    "networks": [
        8,
        1796
    ],
    "certification": "18",
    "slug": "365-dias-finais"
},

{
    "id": 1222248,
    "title": "Número 24",
    "genre_ids": [
        10752,
        36,
        18
    ],
    "release_date": "2024-10-30",
    "popularity": 109.255,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/jB096esffwNRFO65QcNTAPAfIX0.jpg",
    "runtime": 111,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "nmero-24"
},

{
    "id": 1122418,
    "title": "This Time Next Year",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2024-06-03",
    "popularity": 66.808,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/ckLPzRl9ZDHzNt4tDjkTGUyCYg7.jpg",
    "runtime": 116,
    "networks": [],
    "certification": "N/A",
    "slug": "this-time-next-year"
},

{
    "id": 8966,
    "title": "Crepúsculo",
    "genre_ids": [
        14,
        18,
        10749
    ],
    "release_date": "2008-11-20",
    "popularity": 42.531,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/SD1sc5iCoHNQoNxI8nWwiRxOGw.jpg",
    "runtime": 122,
    "networks": [
        307,
        2156
    ],
    "certification": "12",
    "slug": "crepsculo"
},

{
    "id": 1397347,
    "title": "Saturday Night's Main Event XXXVII",
    "genre_ids": [
        28
    ],
    "release_date": "2024-12-14",
    "popularity": 60.559,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/4wVEOOX8VEGWwEuuIWuN3XT1Avq.jpg",
    "runtime": 82,
    "networks": [],
    "certification": "N/A",
    "slug": "saturday-nights-main-event-xxxvii"
},

{
    "id": 696506,
    "title": "Mickey 17",
    "genre_ids": [
        878,
        35,
        18
    ],
    "release_date": "2025-02-28",
    "popularity": 49.208,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/lrCcovGRcuv8Z1v3ae1ZH5Ird05.jpg",
    "runtime": 137,
    "networks": [],
    "certification": "16",
    "slug": "mickey-17"
},

{
    "id": 675353,
    "title": "Sonic 2: O Filme",
    "genre_ids": [
        28,
        12,
        10751,
        35
    ],
    "release_date": "2022-03-30",
    "popularity": 60.194,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/aT2vdnR3qifI21f7fHTqYW5iAAz.jpg",
    "runtime": 125,
    "networks": [
        484
    ],
    "certification": "10",
    "slug": "sonic-2-o-filme"
},

{
    "id": 1276945,
    "title": "Ferry 2",
    "genre_ids": [
        28,
        18,
        80,
        53
    ],
    "release_date": "2024-12-19",
    "popularity": 49.1,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/oIeHeuhxUpU7wWDqqo769s8D91s.jpg",
    "runtime": 94,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "ferry-2"
},

{
    "id": 507241,
    "title": "O Jogo do Assassino",
    "genre_ids": [
        28,
        35,
        53
    ],
    "release_date": "2024-09-12",
    "popularity": 59.094,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/pPmxLP2eMJEFiY7KZ3WkSFQ1b20.jpg",
    "runtime": 104,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "o-jogo-do-assassino"
},

{
    "id": 82023,
    "title": "Hotel Desire",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2011-12-07",
    "popularity": 38.798,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/myzQj8Rk178DrWsiZjVKjz7Kj9P.jpg",
    "runtime": 38,
    "networks": [],
    "certification": "N/A",
    "slug": "hotel-desire"
},

{
    "id": 135397,
    "title": "Jurassic World: O Mundo dos Dinossauros",
    "genre_ids": [
        28,
        12,
        878,
        53
    ],
    "release_date": "2015-06-06",
    "popularity": 53.246,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/gf3FEmT95ZQ5rBfzsaouIUzxKhy.jpg",
    "runtime": 125,
    "networks": [
        8,
        119,
        167,
        307,
        1796,
        2156
    ],
    "certification": "12",
    "slug": "jurassic-world-o-mundo-dos-dinossauros"
},

{
    "id": 974950,
    "title": "Emilia Pérez",
    "genre_ids": [
        18,
        53
    ],
    "release_date": "2024-08-21",
    "popularity": 44.495,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/A5LA1r1GZB3cS2RpD1hc39Cad1R.jpg",
    "runtime": 132,
    "networks": [],
    "certification": "N/A",
    "slug": "emilia-prez"
},

{
    "id": 995803,
    "title": "Arena Mortal",
    "genre_ids": [
        28,
        878,
        53,
        35,
        27
    ],
    "release_date": "2024-06-25",
    "popularity": 39.873,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yk8ALQPd3lfYDGJ8U429oYFiBaY.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "arena-mortal"
},

{
    "id": 653346,
    "title": "Planeta dos Macacos: O Reinado",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2024-05-08",
    "popularity": 53.242,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/uXjbKJ57H30YrOQx5GfXoGvnsGY.jpg",
    "runtime": 145,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "planeta-dos-macacos-o-reinado"
},

{
    "id": 1072790,
    "title": "Todos Menos Você",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2023-12-21",
    "popularity": 32.255,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/iKOEAPkb5EyCPmAgByYNeAoG5uc.jpg",
    "runtime": 104,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "todos-menos-voc"
},

{
    "id": 11845,
    "title": "Intimidade",
    "genre_ids": [
        10749,
        18,
        14
    ],
    "release_date": "2001-01-20",
    "popularity": 34.499,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/I0mlv1FahaLJqu2ByffMXEn4NN.jpg",
    "runtime": 119,
    "networks": [],
    "certification": "N/A",
    "slug": "intimidade"
},

{
    "id": 1412113,
    "title": "Squid Game: Making Season 2",
    "genre_ids": [
        99
    ],
    "release_date": "2025-01-02",
    "popularity": 49.067,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/zBxRY5qbwyVHzv72OSshrb0Dob5.jpg",
    "runtime": 28,
    "networks": [],
    "certification": "N/A",
    "slug": "squid-game-making-season-2"
},

{
    "id": 726139,
    "title": "Project Silence",
    "genre_ids": [
        53,
        28,
        27,
        878,
        12
    ],
    "release_date": "2024-07-11",
    "popularity": 42.418,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/rXuSca6qEb4xPrSRT7XRzYCFbZB.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "project-silence"
},

{
    "id": 449443,
    "title": "Covil de Ladrões",
    "genre_ids": [
        28,
        80,
        53,
        18
    ],
    "release_date": "2018-01-18",
    "popularity": 37.162,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/8SNJ1Y0j6ARfwl1h9ek1XixXz0G.jpg",
    "runtime": 140,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "16",
    "slug": "covil-de-ladres"
},

{
    "id": 315162,
    "title": "Gato de Botas 2: O Último Pedido",
    "genre_ids": [
        16,
        12,
        14,
        35,
        10751
    ],
    "release_date": "2022-12-07",
    "popularity": 39.603,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/n3bZTjymEdd7laY7qqi4N3VGz7D.jpg",
    "runtime": 103,
    "networks": [
        119,
        307
    ],
    "certification": "L",
    "slug": "gato-de-botas-2-o-ltimo-pedido"
},

{
    "id": 122,
    "title": "O Senhor dos Anéis: O Retorno do Rei",
    "genre_ids": [
        12,
        14,
        28
    ],
    "release_date": "2003-12-17",
    "popularity": 53.002,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/egSO4klmc9pnI1CNnHoYKV70XKI.jpg",
    "runtime": 202,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "o-senhor-dos-anis-o-retorno-do-rei"
},

{
    "id": 639720,
    "title": "Amigos Imaginários",
    "genre_ids": [
        35,
        14,
        10751
    ],
    "release_date": "2024-05-08",
    "popularity": 48.625,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/cn04pOVOFybrdHbuQjzGHVxFj7F.jpg",
    "runtime": 104,
    "networks": [
        531,
        484,
        582,
        1853,
        2303
    ],
    "certification": "L",
    "slug": "amigos-imaginrios"
},

{
    "id": 808,
    "title": "Shrek",
    "genre_ids": [
        16,
        35,
        14,
        12,
        10751
    ],
    "release_date": "2001-05-18",
    "popularity": 42.236,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    "runtime": 90,
    "networks": [
        8,
        119,
        167,
        307,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "shrek"
},

{
    "id": 872585,
    "title": "Oppenheimer",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2023-07-19",
    "popularity": 44.339,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg",
    "runtime": 181,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "oppenheimer"
},

{
    "id": 936621,
    "title": "물오징어6969",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2022-01-27",
    "popularity": 104.068,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/dgSR6qBiQSqaa9QfSMiODAEOF3O.jpg",
    "runtime": 74,
    "networks": [],
    "certification": "N/A",
    "slug": "6969"
},

{
    "id": 424,
    "title": "A Lista de Schindler",
    "genre_ids": [
        18,
        36,
        10752
    ],
    "release_date": "1993-12-15",
    "popularity": 42.232,
    "vote_average": 8.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/bGhhNzJYDsuLruNN5bJ2PvLcMiq.jpg",
    "runtime": 195,
    "networks": [
        119,
        307,
        1860
    ],
    "certification": "14",
    "slug": "a-lista-de-schindler"
},

{
    "id": 402431,
    "title": "Wicked",
    "genre_ids": [
        18,
        10749,
        14
    ],
    "release_date": "2024-11-20",
    "popularity": 102.397,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/qcaKkLwIXCAxJtpetVYHniCvLZj.jpg",
    "runtime": 161,
    "networks": [
        484
    ],
    "certification": "10",
    "slug": "wicked"
},

{
    "id": 996821,
    "title": "Casamentos Cruzados",
    "genre_ids": [
        35
    ],
    "release_date": "2025-01-29",
    "popularity": 41.648,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/pXOC1Z6npX2V5xgOCOzMtCHf0Hx.jpg",
    "runtime": 109,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "casamentos-cruzados"
},

{
    "id": 11,
    "title": "Guerra nas Estrelas",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "1977-05-25",
    "popularity": 31.181,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/dw7X9YPjjAfIxKHW04V64Bb9TB0.jpg",
    "runtime": 121,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "guerra-nas-estrelas"
},

{
    "id": 396535,
    "title": "Invasão Zumbi",
    "genre_ids": [
        27,
        53,
        28,
        12
    ],
    "release_date": "2016-07-20",
    "popularity": 33.554,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/QqHtwk0oHYed26zra9WGQGyBSm.jpg",
    "runtime": 118,
    "networks": [
        8,
        1796,
        464
    ],
    "certification": "14",
    "slug": "invaso-zumbi"
},

{
    "id": 460229,
    "title": "Kiss and Kill",
    "genre_ids": [
        9648,
        53,
        10749
    ],
    "release_date": "2017-08-08",
    "popularity": 35.905,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/5QdNwga65k5iCE7fsghSdBmyVld.jpg",
    "runtime": 81,
    "networks": [],
    "certification": "N/A",
    "slug": "kiss-and-kill"
},

{
    "id": 597,
    "title": "Titanic",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1997-11-18",
    "popularity": 58.414,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    "runtime": 194,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "titanic"
},

{
    "id": 1171640,
    "title": "GTMAX",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "2024-11-19",
    "popularity": 38.789,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/bx92hl70NUhojjO3eV6LqKllj4L.jpg",
    "runtime": 100,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "gtmax"
},

{
    "id": 926393,
    "title": "O Protetor: Capítulo Final",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2023-08-30",
    "popularity": 41.622,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/hoUy4y7JULoSyWryStY9XKpB3XY.jpg",
    "runtime": 103,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "18",
    "slug": "o-protetor-captulo-final"
},

{
    "id": 1302004,
    "title": "Kaskasero",
    "genre_ids": [
        18
    ],
    "release_date": "2024-07-26",
    "popularity": 30.19,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/qSpFNnFC3il0bdhyynzJgwlMRnv.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "N/A",
    "slug": "kaskasero"
},

{
    "id": 587727,
    "title": "Busty Girlfriend",
    "genre_ids": [
        10749
    ],
    "release_date": "2019-03-08",
    "popularity": 39.529,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/f6PfAXtFEkJRcBtOjbzOgz8qqSK.jpg",
    "runtime": 71,
    "networks": [],
    "certification": "N/A",
    "slug": "busty-girlfriend"
},

{
    "id": 671,
    "title": "Harry Potter e a Pedra Filosofal",
    "genre_ids": [
        12,
        14
    ],
    "release_date": "2001-11-16",
    "popularity": 52.639,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/4rtsbE9aQ1qw4gv7yYwaNYfWFoS.jpg",
    "runtime": 152,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "L",
    "slug": "harry-potter-e-a-pedra-filosofal"
},

{
    "id": 604685,
    "title": "Covil de Ladrões 2",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2025-01-08",
    "popularity": 58.294,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/lwU8lY65QqcLOTVlZvL4Dse1h69.jpg",
    "runtime": 144,
    "networks": [],
    "certification": "N/A",
    "slug": "covil-de-ladres-2"
},

{
    "id": 1147710,
    "title": "Sequestro 1971",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2024-06-21",
    "popularity": 41.258,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/jEPBYkNY8G50JR62RTQ3eTTFxQS.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": "sequestro-1971"
},

{
    "id": 370663,
    "title": "Below Her Mouth",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2017-02-10",
    "popularity": 39.419,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/tPhBftWySbanfEialbsUzOuccgN.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "below-her-mouth"
},

{
    "id": 791042,
    "title": "Levels",
    "genre_ids": [
        28,
        878,
        53
    ],
    "release_date": "2024-11-01",
    "popularity": 52.628,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/y1xm0jMIlx9Oo2a3jWNyLGm43sJ.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "levels"
},

{
    "id": 1357459,
    "title": "Tatsulok: Tatlo Magkasalo",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2024-10-11",
    "popularity": 58.201,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/zcmPxGIBxxsGVyYuzNWPCWjlQ8X.jpg",
    "runtime": 61,
    "networks": [],
    "certification": "N/A",
    "slug": "tatsulok-tatlo-magkasalo"
},

{
    "id": 1216191,
    "title": "Oddity - Objetos Obscuros",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2024-07-19",
    "popularity": 44.268,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/tVu0x6DH1wYWy1YuOfXbwy1kDW9.jpg",
    "runtime": 98,
    "networks": [
        2156
    ],
    "certification": "16",
    "slug": "oddity-objetos-obscuros"
},

{
    "id": 27205,
    "title": "A Origem",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "2010-07-15",
    "popularity": 39.286,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/9e3Dz7aCANy5aRUQF745IlNloJ1.jpg",
    "runtime": 148,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "a-origem"
},

{
    "id": 10192,
    "title": "Shrek Para Sempre: O Capítulo Final",
    "genre_ids": [
        35,
        12,
        14,
        16,
        10751
    ],
    "release_date": "2010-05-16",
    "popularity": 32.236,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/iFXVU0ni6YWgQNSPkoGO1Tk5L3g.jpg",
    "runtime": 93,
    "networks": [
        167
    ],
    "certification": "L",
    "slug": "shrek-para-sempre-o-captulo-final"
},

{
    "id": 351286,
    "title": "Jurassic World: Reino Ameaçado",
    "genre_ids": [
        28,
        12,
        878,
        53
    ],
    "release_date": "2018-06-06",
    "popularity": 44.194,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/7xykpkKqfBfDgEKvS4jqpFF0S4K.jpg",
    "runtime": 128,
    "networks": [
        8,
        119,
        307,
        1796,
        2156
    ],
    "certification": "12",
    "slug": "jurassic-world-reino-ameaado"
},

{
    "id": 1242372,
    "title": "从21世纪安全撤离",
    "genre_ids": [
        878,
        35
    ],
    "release_date": "2024-07-18",
    "popularity": 48.445,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/tzVakGUagwlH3gmyhvTbKFjeu0Z.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "21"
},

{
    "id": 1429299,
    "title": "Com Você no Futuro",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2025-02-07",
    "popularity": 39.201,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/rnoIdt6rEks0mFCytMeVvDm74z7.jpg",
    "runtime": 91,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "com-voc-no-futuro"
},

{
    "id": 76600,
    "title": "Avatar: O Caminho da Água",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2022-12-14",
    "popularity": 48.383,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/mbYQLLluS651W89jO7MOZcLSCUw.jpg",
    "runtime": 192,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "avatar-o-caminho-da-gua"
},

{
    "id": 673,
    "title": "Harry Potter e o Prisioneiro de Azkaban",
    "genre_ids": [
        12,
        14
    ],
    "release_date": "2004-05-31",
    "popularity": 39.164,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/1HdMUghqlgOIvbsU9ZtO40IPRzl.jpg",
    "runtime": 142,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "L",
    "slug": "harry-potter-e-o-prisioneiro-de-azkaban"
},

{
    "id": 957452,
    "title": "O Corvo",
    "genre_ids": [
        28,
        14,
        27
    ],
    "release_date": "2024-08-21",
    "popularity": 48.26,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/lNflUElL8Bp7pp5j8sQR2Z9qNZX.jpg",
    "runtime": 111,
    "networks": [
        2156
    ],
    "certification": "18",
    "slug": "o-corvo"
},

{
    "id": 354912,
    "title": "Viva: A Vida é uma Festa",
    "genre_ids": [
        10751,
        16,
        10402,
        12
    ],
    "release_date": "2017-10-27",
    "popularity": 39.089,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/sdl31AfqivY0tryVfo9GMcAUx05.jpg",
    "runtime": 109,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "viva-a-vida-uma-festa"
},

{
    "id": 1006724,
    "title": "鬼才之道",
    "genre_ids": [
        27,
        35,
        53
    ],
    "release_date": "2024-08-07",
    "popularity": 48.22,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/m5IgLXscIYTTQwUtoBTfzSGQpvg.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 497,
    "title": "À Espera de um Milagre",
    "genre_ids": [
        14,
        18,
        80
    ],
    "release_date": "1999-12-10",
    "popularity": 34.493,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/14hEqW67IiHlKpzKMLUXyktzZIV.jpg",
    "runtime": 189,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "-espera-de-um-milagre"
},

{
    "id": 1354627,
    "title": "Bob Esponja: Acampamento do Terror",
    "genre_ids": [
        10770,
        10751,
        35,
        27,
        16
    ],
    "release_date": "2024-10-10",
    "popularity": 37.115,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/sz3tcbtYjpgBnPEF5uBamlTkrcq.jpg",
    "runtime": 45,
    "networks": [
        531,
        582,
        1853,
        2303
    ],
    "certification": "N/A",
    "slug": "bob-esponja-acampamento-do-terror"
},

{
    "id": 1425200,
    "title": "Umjolo: O Amor Não Tem Cura",
    "genre_ids": [
        10749,
        35,
        18
    ],
    "release_date": "2025-02-13",
    "popularity": 51.916,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/2JXvvx0JSKb3uZjLi7YRjZ9WgX9.jpg",
    "runtime": 78,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "umjolo-o-amor-no-tem-cura"
},

{
    "id": 1084736,
    "title": "O Conde de Monte Cristo",
    "genre_ids": [
        28,
        12,
        18
    ],
    "release_date": "2024-06-28",
    "popularity": 58.169,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zpg7yCvUVhFZUzSnI8qETAUhCt3.jpg",
    "runtime": 173,
    "networks": [
        484
    ],
    "certification": "N/A",
    "slug": "o-conde-de-monte-cristo"
},

{
    "id": 550,
    "title": "Clube da Luta",
    "genre_ids": [
        18
    ],
    "release_date": "1999-10-15",
    "popularity": 44.126,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/r3pPehX4ik8NLYPpbDRAh0YRtMb.jpg",
    "runtime": 139,
    "networks": [
        337
    ],
    "certification": "18",
    "slug": "clube-da-luta"
},

{
    "id": 173705,
    "title": "女教師 生徒の眼の前で",
    "genre_ids": [
        18,
        9648,
        27
    ],
    "release_date": "1982-04-09",
    "popularity": 31.096,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/rwGW7zhFKaojtJiSMnoLyVkKZnx.jpg",
    "runtime": 69,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 566525,
    "title": "Shang-Chi e a Lenda dos Dez Anéis",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2021-09-01",
    "popularity": 29.161,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/ArrOBeio968bUuUOtEpKa1teIh4.jpg",
    "runtime": 132,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "shang-chi-e-a-lenda-dos-dez-anis"
},

{
    "id": 637649,
    "title": "Infiltrado",
    "genre_ids": [
        80,
        28,
        53
    ],
    "release_date": "2021-04-22",
    "popularity": 38.683,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/dAtAp4IeT6EYGhewfnNNhalobme.jpg",
    "runtime": 119,
    "networks": [
        307,
        2142,
        2141,
        2156
    ],
    "certification": "16",
    "slug": "infiltrado"
},

{
    "id": 18785,
    "title": "Se Beber, Não Case!",
    "genre_ids": [
        35
    ],
    "release_date": "2009-06-02",
    "popularity": 35.857,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/q55Gluy15mKdjgES7TdETHecWqv.jpg",
    "runtime": 99,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "se-beber-no-case"
},

{
    "id": 68828,
    "title": "アウトランダーズ",
    "genre_ids": [
        16,
        878,
        35
    ],
    "release_date": "1986-12-16",
    "popularity": 33.487,
    "vote_average": 4.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/jb6Ht6p1gc7OubIpA2h0UIdKpB6.jpg",
    "runtime": 51,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1304800,
    "title": "O Rei Leão no Hollywood Bowl",
    "genre_ids": [
        10402
    ],
    "release_date": "2025-02-06",
    "popularity": 40.937,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/rlzV2zLBAD3SoZ6ShuOZxkOdvnV.jpg",
    "runtime": 68,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "o-rei-leo-no-hollywood-bowl"
},

{
    "id": 1082195,
    "title": "A Ordem",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "2024-12-05",
    "popularity": 39.067,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/r6ldDGMzdWErm3auCuKSmsXL125.jpg",
    "runtime": 116,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "a-ordem"
},

{
    "id": 8587,
    "title": "O Rei Leão",
    "genre_ids": [
        10751,
        16,
        18
    ],
    "release_date": "1994-06-15",
    "popularity": 51.881,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/8aIvm8OaJISOpVTt7rMIh7X35G5.jpg",
    "runtime": 89,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "o-rei-leo"
},

{
    "id": 122917,
    "title": "O Hobbit: A Batalha dos Cinco Exércitos",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2014-12-10",
    "popularity": 40.816,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/wRKwrfQ7p0ttrb09G3mcOSyN1pk.jpg",
    "runtime": 144,
    "networks": [
        484,
        2142,
        2141
    ],
    "certification": "12",
    "slug": "o-hobbit-a-batalha-dos-cinco-exrcitos"
},

{
    "id": 12236,
    "title": "A Corrida Maluca",
    "genre_ids": [
        35,
        28
    ],
    "release_date": "1989-04-21",
    "popularity": 44.105,
    "vote_average": 4.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/47d6AwOlCAdgn5ssVRVF56OROLv.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": "a-corrida-maluca"
},

{
    "id": 19995,
    "title": "Avatar",
    "genre_ids": [
        28,
        12,
        14,
        878
    ],
    "release_date": "2009-12-15",
    "popularity": 43.999,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/iNMP8uzV2Ing6ZCw0IICgEFVNfC.jpg",
    "runtime": 177,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "avatar"
},

{
    "id": 329865,
    "title": "A Chegada",
    "genre_ids": [
        18,
        878,
        9648
    ],
    "release_date": "2016-11-10",
    "popularity": 30.076,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/dc3mXcrPJLRsbcdnlKqYJx718RZ.jpg",
    "runtime": 116,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "a-chegada"
},

{
    "id": 810,
    "title": "Shrek Terceiro",
    "genre_ids": [
        14,
        12,
        16,
        35,
        10751
    ],
    "release_date": "2007-05-17",
    "popularity": 28.559,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/4qVzBuD2ZbOZChMSnVlMGgT7xhS.jpg",
    "runtime": 92,
    "networks": [
        8,
        119,
        307,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "shrek-terceiro"
},

{
    "id": 1079091,
    "title": "É Assim Que Acaba",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2024-08-07",
    "popularity": 32.176,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/tYzTDYmiTVfVzsPtXLMPqrk4t6V.jpg",
    "runtime": 130,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "-assim-que-acaba"
},

{
    "id": 2756,
    "title": "O Segredo do Abismo",
    "genre_ids": [
        12,
        28,
        53,
        878
    ],
    "release_date": "1989-08-09",
    "popularity": 43.903,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/iUmlHbK05F38QNnVDTDXa5qXFgF.jpg",
    "runtime": 138,
    "networks": [],
    "certification": "L",
    "slug": "o-segredo-do-abismo"
},

{
    "id": 680,
    "title": "Pulp Fiction: Tempo de Violência",
    "genre_ids": [
        53,
        80
    ],
    "release_date": "1994-09-10",
    "popularity": 39.049,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/tptjnB2LDbuUWya9Cx5sQtv5hqb.jpg",
    "runtime": 154,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "18",
    "slug": "pulp-fiction-tempo-de-violncia"
},

{
    "id": 454626,
    "title": "Sonic: O Filme",
    "genre_ids": [
        28,
        878,
        35,
        10751
    ],
    "release_date": "2020-02-12",
    "popularity": 38.958,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/eOC0FSGqyzcnnx7XFgLazI9nACT.jpg",
    "runtime": 100,
    "networks": [
        8
    ],
    "certification": "L",
    "slug": "sonic-o-filme"
},

{
    "id": 557,
    "title": "Homem-Aranha",
    "genre_ids": [
        28,
        878
    ],
    "release_date": "2002-05-01",
    "popularity": 37.04,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/RbZQL5hXmydecu82UHw9ZGyytB.jpg",
    "runtime": 121,
    "networks": [
        8,
        119,
        167,
        1899,
        484,
        1796,
        1825
    ],
    "certification": "12",
    "slug": "homem-aranha"
},

{
    "id": 68555,
    "title": "Death Note Re-light: L's Successors",
    "genre_ids": [
        10770,
        53,
        16,
        80,
        18,
        14
    ],
    "release_date": "2009-10-07",
    "popularity": 34.473,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/qDhbGqjZ7yFwa7FMIzuiQTQMfEQ.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": "death-note-re-light-ls-successors"
},

{
    "id": 10674,
    "title": "Mulan",
    "genre_ids": [
        16,
        10751,
        12
    ],
    "release_date": "1998-06-18",
    "popularity": 27.963,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/nq4taYpb2PjN1Cwni23GOZJbOaR.jpg",
    "runtime": 88,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "mulan"
},

{
    "id": 120,
    "title": "O Senhor dos Anéis: A Sociedade do Anel",
    "genre_ids": [
        12,
        14,
        28
    ],
    "release_date": "2001-12-18",
    "popularity": 51.727,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/omoMXT3Z7XrQwRZ2OGJGNWbdeEl.jpg",
    "runtime": 179,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "o-senhor-dos-anis-a-sociedade-do-anel"
},

{
    "id": 99861,
    "title": "Vingadores: Era de Ultron",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2015-04-22",
    "popularity": 38.652,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/vGIIl89vglo66yUfbuTxzNAs4y5.jpg",
    "runtime": 141,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "vingadores-era-de-ultron"
},

{
    "id": 177572,
    "title": "Operação Big Hero",
    "genre_ids": [
        12,
        10751,
        16,
        28,
        35
    ],
    "release_date": "2014-10-24",
    "popularity": 38.906,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/zGuS48PShYgLwBpoRBCgzJC20uN.jpg",
    "runtime": 102,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "operao-big-hero"
},

{
    "id": 1125510,
    "title": "O Poço 2",
    "genre_ids": [
        878,
        27,
        53
    ],
    "release_date": "2024-09-27",
    "popularity": 38.84,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/2fJn438T3W2XDlyBlgNuAeAAHrj.jpg",
    "runtime": 100,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "o-poo-2"
},

{
    "id": 615656,
    "title": "Megatubarão 2",
    "genre_ids": [
        28,
        878,
        27
    ],
    "release_date": "2023-08-02",
    "popularity": 31.056,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/cpFSzMpK6FwcAqz8YZKnO1l8QZN.jpg",
    "runtime": 116,
    "networks": [
        119,
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "megatubaro-2"
},

{
    "id": 592831,
    "title": "Megalópolis",
    "genre_ids": [
        878,
        18
    ],
    "release_date": "2024-09-25",
    "popularity": 29.152,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/4FGqIRue7XlokWU79sMqiYiEHwy.jpg",
    "runtime": 138,
    "networks": [],
    "certification": "16",
    "slug": "megalpolis"
},

{
    "id": 1155281,
    "title": "封神第二部：战火西岐",
    "genre_ids": [
        28,
        14,
        10752
    ],
    "release_date": "2025-01-29",
    "popularity": 35.83,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/5bBgvH3hTxlANUsLP1ov0lEKmJp.jpg",
    "runtime": 145,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1029281,
    "title": "Desconhecidos",
    "genre_ids": [
        80,
        27,
        53
    ],
    "release_date": "2024-08-22",
    "popularity": 33.471,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/wNzdnCoVosaeY0vRWajlrFUfUhN.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "desconhecidos"
},

{
    "id": 360778,
    "title": "くノ一忍法帖 IV 忠臣蔵秘抄",
    "genre_ids": [
        28
    ],
    "release_date": "1994-03-24",
    "popularity": 30.02,
    "vote_average": 3.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/7TyWl7VX3dvKxPJUTsu4h9Yh8Az.jpg",
    "runtime": 79,
    "networks": [],
    "certification": "N/A",
    "slug": "-iv-"
},

{
    "id": 333339,
    "title": "Jogador N° 1",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2018-03-28",
    "popularity": 26.87,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/6rS5kiTCjej8FQFwZdqB3zuyEK8.jpg",
    "runtime": 140,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "jogador-n-1"
},

{
    "id": 1226578,
    "title": "Longlegs - Vínculo Mortal",
    "genre_ids": [
        80,
        27,
        53
    ],
    "release_date": "2024-07-10",
    "popularity": 28.548,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/uvkIjbEVPvMxY6HqQYHyrXnF2WQ.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "18",
    "slug": "longlegs-vnculo-mortal"
},

{
    "id": 329505,
    "title": "Il peccato di Lola",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "1984-05-04",
    "popularity": 32.14,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/aSiY96aHJLGWtftHLWvxlImKHGN.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "il-peccato-di-lola"
},

{
    "id": 940721,
    "title": "Godzilla Minus One",
    "genre_ids": [
        878,
        27,
        28
    ],
    "release_date": "2023-11-03",
    "popularity": 37.025,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/9XSOyim1pivuSHQqlrDj5gj2J5w.jpg",
    "runtime": 125,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "godzilla-minus-one"
},

{
    "id": 269149,
    "title": "Zootopia: Essa Cidade é o Bicho",
    "genre_ids": [
        16,
        12,
        10751,
        35
    ],
    "release_date": "2016-02-11",
    "popularity": 34.358,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/jyjBSQ7lCS2XolhbLeAH5HhXahY.jpg",
    "runtime": 108,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "zootopia-essa-cidade-o-bicho"
},

{
    "id": 290098,
    "title": "A Criada",
    "genre_ids": [
        53,
        18,
        10749
    ],
    "release_date": "2016-06-01",
    "popularity": 27.947,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/q6ngYthHXCvA2ZubO4FHTFNRrmc.jpg",
    "runtime": 145,
    "networks": [
        701
    ],
    "certification": "18",
    "slug": "a-criada"
},

{
    "id": 1235409,
    "title": "Standout: The Ben Kjar Story",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-23",
    "popularity": 26.113,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zNeKKRbZRhgxi5Gpu4SWLhmBEH0.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "standout-the-ben-kjar-story"
},

{
    "id": 38810,
    "title": "Dente Canino",
    "genre_ids": [
        18
    ],
    "release_date": "2009-10-22",
    "popularity": 29.152,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/piVMAliwrEYE8kvGIox5uF5Zjg.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "18",
    "slug": "dente-canino"
},

{
    "id": 1426038,
    "title": "Passinho Foda - O Corre Por Trás da Dança",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-20",
    "popularity": 25.66,
    "vote_average": 4.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/wFpWFGjcUv1I8rnCyVgsozOzuEw.jpg",
    "runtime": 50,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "passinho-foda-o-corre-por-trs-da-dana"
},

{
    "id": 106646,
    "title": "O Lobo de Wall Street",
    "genre_ids": [
        80,
        18,
        35
    ],
    "release_date": "2013-12-25",
    "popularity": 38.486,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/esJTXTdj4JZDyP5LUI1Fq3kyNda.jpg",
    "runtime": 180,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "18",
    "slug": "o-lobo-de-wall-street"
},

{
    "id": 1155095,
    "title": "The Moor",
    "genre_ids": [
        27,
        9648,
        18
    ],
    "release_date": "2024-06-14",
    "popularity": 35.793,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/5l3MJjjCWl8GXXNWC7rCMmaB71g.jpg",
    "runtime": 120,
    "networks": [],
    "certification": "N/A",
    "slug": "the-moor"
},

{
    "id": 48650,
    "title": "Um Quarto em Roma",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2010-05-07",
    "popularity": 33.443,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/4kF4qRXFd7MqX2bAJX3e3zQSxhV.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "N/A",
    "slug": "um-quarto-em-roma"
},

{
    "id": 507089,
    "title": "Five Nights at Freddy's - O Pesadelo Sem Fim",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2023-10-25",
    "popularity": 26.83,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/1yUbmAiw2cUSpyXNIaiST7JzCtG.jpg",
    "runtime": 110,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "five-nights-at-freddys-o-pesadelo-sem-fim"
},

{
    "id": 218,
    "title": "O Exterminador do Futuro",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "1984-10-26",
    "popularity": 30.02,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/rZvxTfmaOxWeOeU9w9Vkq5elagp.jpg",
    "runtime": 107,
    "networks": [],
    "certification": "14",
    "slug": "o-exterminador-do-futuro"
},

{
    "id": 588648,
    "title": "A Menina e o Dragão",
    "genre_ids": [
        16,
        10751,
        28,
        12,
        14
    ],
    "release_date": "2024-04-11",
    "popularity": 30.907,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/m6Hc2Ta5PiMaqMLeudG9dOIAAOp.jpg",
    "runtime": 98,
    "networks": [
        484,
        2156
    ],
    "certification": "L",
    "slug": "a-menina-e-o-drago"
},

{
    "id": 1000837,
    "title": "Ainda Estou Aqui",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2024-09-19",
    "popularity": 37.018,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/r7TD7HhzlUYfWIS7ZqSgNxylkXV.jpg",
    "runtime": 135,
    "networks": [],
    "certification": "N/A",
    "slug": "ainda-estou-aqui"
},

{
    "id": 1114513,
    "title": "Não Fale o Mal",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-09-11",
    "popularity": 28.511,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/fiu5OeaiCtQESlblbhPwMlfbFnz.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "18",
    "slug": "no-fale-o-mal"
},

{
    "id": 50619,
    "title": "A Saga Crepúsculo: Amanhecer - Parte 1",
    "genre_ids": [
        12,
        14,
        10749
    ],
    "release_date": "2011-11-16",
    "popularity": 25.107,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/a6PexAo0jJRLlPNBfdiXXr0HYyz.jpg",
    "runtime": 117,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "12",
    "slug": "a-saga-crepsculo-amanhecer-parte-1"
},

{
    "id": 767,
    "title": "Harry Potter e o Enigma do Príncipe",
    "genre_ids": [
        12,
        14
    ],
    "release_date": "2009-07-15",
    "popularity": 32.14,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/rssGxuqkB2TAX9g2VsbBiUZIVzm.jpg",
    "runtime": 153,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "harry-potter-e-o-enigma-do-prncipe"
},

{
    "id": 1109255,
    "title": "Parthenope",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-10-19",
    "popularity": 27.846,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/1PrYlFquzqEEZOvBYGwnGXB8mti.jpg",
    "runtime": 137,
    "networks": [],
    "certification": "N/A",
    "slug": "parthenope"
},

{
    "id": 453395,
    "title": "Doutor Estranho no Multiverso da Loucura",
    "genre_ids": [
        14,
        28,
        12
    ],
    "release_date": "2022-05-04",
    "popularity": 34.349,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/hq2igFqb31fDqGotz8ZuUfwKgn8.jpg",
    "runtime": 126,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "doutor-estranho-no-multiverso-da-loucura"
},

{
    "id": 1726,
    "title": "Homem de Ferro",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "2008-04-30",
    "popularity": 38.484,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/6yObhDNEsAmFyMVfWNL64wQGyzj.jpg",
    "runtime": 126,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "homem-de-ferro"
},

{
    "id": 1047373,
    "title": "A Hora do Silêncio",
    "genre_ids": [
        80,
        53,
        28
    ],
    "release_date": "2024-10-03",
    "popularity": 26.094,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/vbfSnLfrh5yiIAs05eFANNJPKhj.jpg",
    "runtime": 99,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "a-hora-do-silncio"
},

{
    "id": 1202565,
    "title": "No salgas",
    "genre_ids": [
        53,
        27
    ],
    "release_date": "2023-11-24",
    "popularity": 25.656,
    "vote_average": 8.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/53EMwPsZkuKSRzZa2GESTa6ZKV4.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "no-salgas"
},

{
    "id": 1421536,
    "title": "For Old Times' Sake",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-23",
    "popularity": 24.455,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/wdlhgCeUJualsOlghgmjUQIB2s4.jpg",
    "runtime": 20,
    "networks": [],
    "certification": "N/A",
    "slug": "for-old-times-sake"
},

{
    "id": 505642,
    "title": "Pantera Negra: Wakanda para Sempre",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2022-11-09",
    "popularity": 35.591,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/nj9cgMhqXQJkXutKmvVelKNP1Aa.jpg",
    "runtime": 162,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "pantera-negra-wakanda-para-sempre"
},

{
    "id": 244786,
    "title": "Whiplash: Em Busca da Perfeição",
    "genre_ids": [
        18,
        10402
    ],
    "release_date": "2014-10-10",
    "popularity": 29.125,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/dtnzzmGOy2Ni89Ir4I1FTO40FJQ.jpg",
    "runtime": 107,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "whiplash-em-busca-da-perfeio"
},

{
    "id": 12,
    "title": "Procurando Nemo",
    "genre_ids": [
        16,
        10751
    ],
    "release_date": "2003-05-30",
    "popularity": 33.436,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/5jrPMq7IMLTqcuPDlK6jfruEbpq.jpg",
    "runtime": 100,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "procurando-nemo"
},

{
    "id": 818647,
    "title": "Através da Minha Janela",
    "genre_ids": [
        10749,
        18,
        35
    ],
    "release_date": "2022-02-04",
    "popularity": 26.809,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/lQHfOaggM8xjvgGvZHpFPYXduRE.jpg",
    "runtime": 113,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "atravs-da-minha-janela"
},

{
    "id": 1408248,
    "title": "오징어 게임: 벽난로",
    "genre_ids": [],
    "release_date": "2024-12-12",
    "popularity": 30.893,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/wzWcY5MMJaezP4niGmmpdvluvaZ.jpg",
    "runtime": 60,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 156022,
    "title": "O Protetor",
    "genre_ids": [
        53,
        28,
        80
    ],
    "release_date": "2014-09-24",
    "popularity": 37.009,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/7eaAvVnD8eAlFJrPzdxBwJKD8se.jpg",
    "runtime": 132,
    "networks": [
        8,
        119,
        1899,
        1796,
        1825,
        2156
    ],
    "certification": "16",
    "slug": "o-protetor"
},

{
    "id": 575299,
    "title": "Fidelidade",
    "genre_ids": [
        18
    ],
    "release_date": "2019-10-31",
    "popularity": 24.07,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/PYxGi3NOOWAxE3PwtnwR4ANS8S.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "fidelidade"
},

{
    "id": 580489,
    "title": "Venom: Tempo de Carnificina",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2021-09-30",
    "popularity": 29.925,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/h5UzYZquMwO9FVn15R2eK2itmHu.jpg",
    "runtime": 97,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "venom-tempo-de-carnificina"
},

{
    "id": 944401,
    "title": "Dogman",
    "genre_ids": [
        28,
        18,
        80
    ],
    "release_date": "2023-09-27",
    "popularity": 25.047,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/3L91Cmz5lhfPR5ppsmkGT2IC2lJ.jpg",
    "runtime": 115,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "dogman"
},

{
    "id": 1176128,
    "title": "Santa Isn't Real",
    "genre_ids": [
        27
    ],
    "release_date": "2023-12-08",
    "popularity": 28.497,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/pDRZgeTeefpled1CIRLxdXPgXcv.jpg",
    "runtime": 76,
    "networks": [],
    "certification": "N/A",
    "slug": "santa-isnt-real"
},

{
    "id": 1413631,
    "title": "Sisterhood, Inc.",
    "genre_ids": [
        10770,
        18,
        10749
    ],
    "release_date": "2025-02-22",
    "popularity": 23.667,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yPk89A68UWxzG3JLcwZNjP8lpss.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "sisterhood-inc"
},

{
    "id": 1865,
    "title": "Piratas do Caribe: Navegando em Águas Misteriosas",
    "genre_ids": [
        12,
        28,
        14
    ],
    "release_date": "2011-05-15",
    "popularity": 32.002,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/mQuyx1qXOc6ftTctYVG3gcvWrEH.jpg",
    "runtime": 136,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "piratas-do-caribe-navegando-em-guas-misteriosas"
},

{
    "id": 976734,
    "title": "Canário Negro",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2024-10-10",
    "popularity": 34.347,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/pEtIDCyvzKRn8VxtMjqfrRsLjRz.jpg",
    "runtime": 103,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "canrio-negro"
},

{
    "id": 389,
    "title": "12 Homens e uma Sentença",
    "genre_ids": [
        18
    ],
    "release_date": "1957-04-10",
    "popularity": 27.843,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/q8RGf4SbVCObCySZ4PIGsn5wFm6.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "12-homens-e-uma-sentena"
},

{
    "id": 1291559,
    "title": "Até que as Cores Acabem",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-06-26",
    "popularity": 26.089,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/sd6RRPaGkNYpfRlYiWLCjoXahko.jpg",
    "runtime": 119,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "at-que-as-cores-acabem"
},

{
    "id": 1144962,
    "title": "Transmorphers: Mech Beasts",
    "genre_ids": [
        28,
        878
    ],
    "release_date": "2023-06-09",
    "popularity": 38.389,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/oqhaffnQqSzdLrYAQA5W4IdAoCX.jpg",
    "runtime": 84,
    "networks": [],
    "certification": "N/A",
    "slug": "transmorphers-mech-beasts"
},

{
    "id": 1154223,
    "title": "Tigres e Hienas",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-11-22",
    "popularity": 25.639,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ajv9BJjtUendpHxnv2PDUh3wYmi.jpg",
    "runtime": 109,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "tigres-e-hienas"
},

{
    "id": 968051,
    "title": "A Freira 2",
    "genre_ids": [
        27
    ],
    "release_date": "2023-09-06",
    "popularity": 24.432,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/omV2IW2OlFTSw6Hih13hz6lFdvP.jpg",
    "runtime": 110,
    "networks": [
        1899,
        484
    ],
    "certification": "16",
    "slug": "a-freira-2"
},

{
    "id": 228150,
    "title": "Corações de Ferro",
    "genre_ids": [
        10752,
        18,
        28
    ],
    "release_date": "2014-10-15",
    "popularity": 35.583,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/p1ZsfMIfRs7cw2ebx17z1oo9YS7.jpg",
    "runtime": 135,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "coraes-de-ferro"
},

{
    "id": 661539,
    "title": "Um Completo Desconhecido",
    "genre_ids": [
        18,
        10402
    ],
    "release_date": "2024-12-18",
    "popularity": 29.077,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/tXNPJ3XvF4RaEV66Qm9QO3pu3w7.jpg",
    "runtime": 140,
    "networks": [],
    "certification": "14",
    "slug": "um-completo-desconhecido"
},

{
    "id": 639857,
    "title": "The Absence of Eden",
    "genre_ids": [
        53,
        18,
        10749,
        80
    ],
    "release_date": "2024-04-12",
    "popularity": 33.254,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/kBYEjXWG3alk36d4G0zh9y8EyRB.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "the-absence-of-eden"
},

{
    "id": 1029575,
    "title": "Plano em Família",
    "genre_ids": [
        28,
        35
    ],
    "release_date": "2023-12-14",
    "popularity": 23.253,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/3CezGI4ORSgVKk5Ch3UUWtL7SET.jpg",
    "runtime": 118,
    "networks": [
        350
    ],
    "certification": "14",
    "slug": "plano-em-famlia"
},

{
    "id": 870028,
    "title": "The Accountant 2",
    "genre_ids": [
        80,
        53,
        28
    ],
    "release_date": "2025-04-23",
    "popularity": 30.867,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/4rxr2grcBfxwH4penSxndcPwyDp.jpg",
    "runtime": 124,
    "networks": [],
    "certification": "N/A",
    "slug": "the-accountant-2"
},

{
    "id": 12153,
    "title": "As Branquelas",
    "genre_ids": [
        35,
        80
    ],
    "release_date": "2004-06-23",
    "popularity": 24.031,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/aJZOcorpgloDLkPP6ED0t9sXjNu.jpg",
    "runtime": 114,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "as-branquelas"
},

{
    "id": 922806,
    "title": "Sorairo Utility",
    "genre_ids": [
        16,
        35
    ],
    "release_date": "2021-12-31",
    "popularity": 26.803,
    "vote_average": 4.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/c67w0Fge21YHnLqmdN6tjFCWpHQ.jpg",
    "runtime": 15,
    "networks": [],
    "certification": "N/A",
    "slug": "sorairo-utility"
},

{
    "id": 438631,
    "title": "Duna",
    "genre_ids": [
        878,
        12
    ],
    "release_date": "2021-09-15",
    "popularity": 36.869,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/obhGsx4PE9OzsVGtIfoLAIIWGNb.jpg",
    "runtime": 155,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "duna"
},

{
    "id": 616446,
    "title": "Irmãos",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2024-10-10",
    "popularity": 29.868,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/3cA9T9Gt9oinyNWGeOX8qjPFtcc.jpg",
    "runtime": 88,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "irmos"
},

{
    "id": 1296753,
    "title": "Remnant",
    "genre_ids": [
        878,
        27,
        53
    ],
    "release_date": "2024-06-30",
    "popularity": 23.665,
    "vote_average": 4.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/nsdnZqEVBhlNoBFy7iGBbtS9sbp.jpg",
    "runtime": 112,
    "networks": [],
    "certification": "N/A",
    "slug": "remnant"
},

{
    "id": 707610,
    "title": "가슴 큰 울 엄마",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2020-05-06",
    "popularity": 25.028,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zarhMAQRWKjjsNBR1rviIXZ5xtt.jpg",
    "runtime": 69,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 1401586,
    "title": "Sonic 4: O Filme",
    "genre_ids": [
        878,
        12,
        35,
        10751
    ],
    "release_date": "2027-03-19",
    "popularity": 28.493,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/goS166oUlWRnMC766CLxeSCBLa.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "sonic-4-o-filme"
},

{
    "id": 1023915,
    "title": "2073",
    "genre_ids": [
        53,
        99,
        878
    ],
    "release_date": "2024-12-27",
    "popularity": 27.737,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/l67ir3kU53FYd6Vjwhqrkih1H1P.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "N/A",
    "slug": "2073"
},

{
    "id": 1302151,
    "title": "Mesa de regalos",
    "genre_ids": [
        35
    ],
    "release_date": "2025-01-16",
    "popularity": 31.904,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/kF99jQrV04pcb05FkREzo6SepWW.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "mesa-de-regalos"
},

{
    "id": 588228,
    "title": "A Guerra do Amanhã",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "2021-09-03",
    "popularity": 34.334,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/lWQ3hI78Az2RHfzDpEuvougqUz7.jpg",
    "runtime": 138,
    "networks": [
        119,
        2156
    ],
    "certification": "14",
    "slug": "a-guerra-do-amanh"
},

{
    "id": 917496,
    "title": "Os Fantasmas Ainda se Divertem: Beetlejuice Beetlejuice",
    "genre_ids": [
        35,
        14,
        27
    ],
    "release_date": "2024-09-04",
    "popularity": 38.377,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/v33dHteDj03HLtAgUb9CFgA2to1.jpg",
    "runtime": 105,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "os-fantasmas-ainda-se-divertem-beetlejuice-beetlejuice"
},

{
    "id": 1127166,
    "title": "O Fabricante de Lágrimas",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-04-03",
    "popularity": 26.011,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/xOM6dZZa9kfHcyDCIP7Vtg7mQyz.jpg",
    "runtime": 106,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "o-fabricante-de-lgrimas"
},

{
    "id": 38757,
    "title": "Enrolados",
    "genre_ids": [
        16,
        10751,
        12
    ],
    "release_date": "2010-11-24",
    "popularity": 35.446,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/bmbKwPL8nEE5ASZsGYonBsjY6bx.jpg",
    "runtime": 101,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "enrolados"
},

{
    "id": 408,
    "title": "Branca de Neve e os Sete Anões",
    "genre_ids": [
        14,
        16,
        10751
    ],
    "release_date": "1938-01-14",
    "popularity": 22.945,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/5l0dsoLXP2eifLQ0lFCYNC5Lcv0.jpg",
    "runtime": 83,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "branca-de-neve-e-os-sete-anes"
},

{
    "id": 11688,
    "title": "A Nova Onda do Imperador",
    "genre_ids": [
        12,
        16,
        35,
        10751,
        14
    ],
    "release_date": "2000-12-15",
    "popularity": 25.603,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/deHXdFwP071QCseVHdfpdteYojS.jpg",
    "runtime": 76,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-nova-onda-do-imperador"
},

{
    "id": 713704,
    "title": "A Morte do Demônio: A Ascensão",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2023-04-12",
    "popularity": 24.401,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/8wHUr9x7OyXy9bocmX3eOlgOXs1.jpg",
    "runtime": 96,
    "networks": [
        119,
        1899,
        484,
        1825
    ],
    "certification": "18",
    "slug": "a-morte-do-demnio-a-ascenso"
},

{
    "id": 348,
    "title": "Alien: O Oitavo Passageiro",
    "genre_ids": [
        27,
        878
    ],
    "release_date": "1979-05-25",
    "popularity": 29.038,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/yH05Ft4egz5DYy4SLWYYuVMoGqC.jpg",
    "runtime": 117,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "alien-o-oitavo-passageiro"
},

{
    "id": 458156,
    "title": "John Wick 3: Parabellum",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2019-05-15",
    "popularity": 23.215,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/bE6XutmB6tcvzTHBx4JGJLlzouM.jpg",
    "runtime": 132,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "16",
    "slug": "john-wick-3-parabellum"
},

{
    "id": 1294947,
    "title": "Déjame estar contigo",
    "genre_ids": [
        10749,
        35,
        18
    ],
    "release_date": "2025-01-12",
    "popularity": 33.195,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/w1HpWmVwLNBE7effrNPbf02MJfr.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "djame-estar-contigo"
},

{
    "id": 630,
    "title": "O Mágico de Oz",
    "genre_ids": [
        12,
        14,
        10751
    ],
    "release_date": "1939-08-15",
    "popularity": 22.763,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/jKNm6l8YGGn9t99pf8L4F9UEfbH.jpg",
    "runtime": 101,
    "networks": [
        1899,
        447,
        1825
    ],
    "certification": "L",
    "slug": "o-mgico-de-oz"
},

{
    "id": 866398,
    "title": "Beekeeper: Rede de Vingança",
    "genre_ids": [
        80,
        28,
        53
    ],
    "release_date": "2024-01-08",
    "popularity": 30.812,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/6Gw8MMtwE87W7rbrlmL2GnajFc5.jpg",
    "runtime": 105,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "beekeeper-rede-de-vingana"
},

{
    "id": 1124641,
    "title": "Alvo Secreto",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-09-19",
    "popularity": 36.641,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/kPgzYyN5uSqonpTlt2q7wUBCURs.jpg",
    "runtime": 104,
    "networks": [],
    "certification": "N/A",
    "slug": "alvo-secreto"
},

{
    "id": 20352,
    "title": "Meu Malvado Favorito",
    "genre_ids": [
        16,
        10751,
        35
    ],
    "release_date": "2010-07-08",
    "popularity": 26.774,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/sqXerJ5VvfW15xbniuq4CZ77hQJ.jpg",
    "runtime": 95,
    "networks": [
        8,
        119,
        307,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "meu-malvado-favorito"
},

{
    "id": 489,
    "title": "Gênio Indomável",
    "genre_ids": [
        18
    ],
    "release_date": "1997-12-05",
    "popularity": 24.992,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/zY6kY3nOn4mi7VQdn6tCCj1eBZe.jpg",
    "runtime": 126,
    "networks": [
        2156
    ],
    "certification": "14",
    "slug": "gnio-indomvel"
},

{
    "id": 718821,
    "title": "Twisters",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-07-10",
    "popularity": 29.862,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/6RpWnpEL8sXnZgzhEmnT2SLhHL7.jpg",
    "runtime": 133,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "12",
    "slug": "twisters"
},

{
    "id": 260346,
    "title": "Busca Implacável 3",
    "genre_ids": [
        53,
        28
    ],
    "release_date": "2014-12-16",
    "popularity": 23.662,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/77R53qgvACrQJeYpfJf00d9ffHa.jpg",
    "runtime": 91,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "busca-implacvel-3"
},

{
    "id": 12444,
    "title": "Harry Potter e as Relíquias da Morte - Parte 1",
    "genre_ids": [
        12,
        14
    ],
    "release_date": "2010-11-17",
    "popularity": 31.868,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/8iU7JzMtFwphBxGJ1TrOOfQiHtB.jpg",
    "runtime": 146,
    "networks": [
        1899,
        1825
    ],
    "certification": "10",
    "slug": "harry-potter-e-as-relquias-da-morte-parte-1"
},

{
    "id": 1215162,
    "title": "O Vingador da Iugoslávia 2",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2024-09-24",
    "popularity": 28.437,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/fSrBQXN5u0EeG9Acv2SBX84yuBY.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "o-vingador-da-iugoslvia-2"
},

{
    "id": 1429786,
    "title": "Algo Azul",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2025-02-07",
    "popularity": 34.28,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tdqzzSDXeCZzCEzZKPLYQuTwFdG.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "algo-azul"
},

{
    "id": 801335,
    "title": "Torturada Pelo Próprio Pai",
    "genre_ids": [
        53,
        80,
        10770
    ],
    "release_date": "2021-02-27",
    "popularity": 27.608,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/ctoPyY37P0jlaEaA7Vd5VhwiI1k.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "torturada-pelo-prprio-pai"
},

{
    "id": 672,
    "title": "Harry Potter e a Câmara Secreta",
    "genre_ids": [
        12,
        14
    ],
    "release_date": "2002-11-13",
    "popularity": 38.324,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/27DNJjNTLpKDsuhqjSjklyPnos4.jpg",
    "runtime": 161,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "L",
    "slug": "harry-potter-e-a-cmara-secreta"
},

{
    "id": 118,
    "title": "A Fantástica Fábrica de Chocolate",
    "genre_ids": [
        12,
        35,
        10751,
        14
    ],
    "release_date": "2005-07-13",
    "popularity": 24.024,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/o1BtZCp1t7ZpLJu9lLEJ4STKUR3.jpg",
    "runtime": 111,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "a-fantstica-fbrica-de-chocolate"
},

{
    "id": 38,
    "title": "Brilho Eterno de uma Mente sem Lembranças",
    "genre_ids": [
        878,
        18,
        10749
    ],
    "release_date": "2004-03-19",
    "popularity": 25.985,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/z3k9Y2886Uo6owGxoCteHSngwA6.jpg",
    "runtime": 108,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "14",
    "slug": "brilho-eterno-de-uma-mente-sem-lembranas"
},

{
    "id": 1430384,
    "title": "What We Bring",
    "genre_ids": [
        18,
        10751
    ],
    "release_date": "2025-02-22",
    "popularity": 22.465,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/t0fpAuCuATLsWPvvvYBjqufXQAk.jpg",
    "runtime": 10,
    "networks": [],
    "certification": "N/A",
    "slug": "what-we-bring"
},

{
    "id": 127585,
    "title": "X-Men: Dias de um Futuro Esquecido",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2014-05-15",
    "popularity": 22.936,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/bUm0nSsTA6kfFfZHgNbNFisVe7M.jpg",
    "runtime": 131,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "x-men-dias-de-um-futuro-esquecido"
},

{
    "id": 429,
    "title": "Três Homens em Conflito",
    "genre_ids": [
        37
    ],
    "release_date": "1966-12-22",
    "popularity": 25.591,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/bHwIzQrbJKiFwArLLngS1Ej6xPc.jpg",
    "runtime": 163,
    "networks": [
        119,
        47,
        499
    ],
    "certification": "14",
    "slug": "trs-homens-em-conflito"
},

{
    "id": 1145491,
    "title": "Operação de Risco",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2023-07-11",
    "popularity": 24.391,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/jc9EMUNJaQHXDJVfHxKjuvfiWrB.jpg",
    "runtime": 80,
    "networks": [
        47,
        683
    ],
    "certification": "16",
    "slug": "operao-de-risco"
},

{
    "id": 1394041,
    "title": "Disney Channel Mitmachkino 2025",
    "genre_ids": [],
    "release_date": "2025-02-22",
    "popularity": 23.198,
    "vote_average": 10.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/32eZpXEqVb6XEPhcIesWekhqaWZ.jpg",
    "runtime": 60,
    "networks": [],
    "certification": "N/A",
    "slug": "disney-channel-mitmachkino-2025"
},

{
    "id": 38365,
    "title": "Gente Grande",
    "genre_ids": [
        35
    ],
    "release_date": "2010-06-24",
    "popularity": 29.015,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/l4BRuWxXBhfpWeKrSEH4B3wdtvP.jpg",
    "runtime": 102,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "12",
    "slug": "gente-grande"
},

{
    "id": 1014505,
    "title": "OVERLORD: O Reino Sagrado",
    "genre_ids": [
        28,
        12,
        16,
        14
    ],
    "release_date": "2024-09-20",
    "popularity": 35.405,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/gHtatjkKqVOfoyomrTJzqF77uK3.jpg",
    "runtime": 135,
    "networks": [],
    "certification": "N/A",
    "slug": "overlord-o-reino-sagrado"
},

{
    "id": 285,
    "title": "Piratas do Caribe: No Fim do Mundo",
    "genre_ids": [
        12,
        14,
        28
    ],
    "release_date": "2007-05-19",
    "popularity": 33.121,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/2vgdFnsThB3acNVSUN9TzpUwLg5.jpg",
    "runtime": 169,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "piratas-do-caribe-no-fim-do-mundo"
},

{
    "id": 1427276,
    "title": "I Now Pronounce You Retro & Ellie",
    "genre_ids": [
        16,
        10749,
        35,
        10402
    ],
    "release_date": "2025-02-22",
    "popularity": 22.742,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/nC4j7USLt7vQv6MhptcT9Oe75gY.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "i-now-pronounce-you-retro-ellie"
},

{
    "id": 1149913,
    "title": "TOGEFILM - Mei Mei",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2023-04-06",
    "popularity": 22.118,
    "vote_average": 10.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/mCJ6shuScPnCh2CS68sPMxGH4UP.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "togefilm-mei-mei"
},

{
    "id": 330459,
    "title": "Rogue One: Uma História Star Wars",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2016-12-14",
    "popularity": 30.788,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/74C2YX0NLWnozVMRS56d5CKDdEv.jpg",
    "runtime": 133,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "rogue-one-uma-histria-star-wars"
},

{
    "id": 857,
    "title": "O Resgate do Soldado Ryan",
    "genre_ids": [
        18,
        36,
        10752
    ],
    "release_date": "1998-07-24",
    "popularity": 26.728,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/9SykLweWJJ5ISoT52s4Pfmul9DM.jpg",
    "runtime": 170,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "14",
    "slug": "o-resgate-do-soldado-ryan"
},

{
    "id": 524047,
    "title": "Destruição Final: O Último Refúgio",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2020-07-29",
    "popularity": 29.86,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/hAUUVBGprFQXaHuhOFDMKELkH4W.jpg",
    "runtime": 120,
    "networks": [],
    "certification": "14",
    "slug": "destruio-final-o-ltimo-refgio"
},

{
    "id": 11036,
    "title": "Diário de uma Paixão",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2004-05-25",
    "popularity": 36.64,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/A07izLVyZCrmq0HTvFg6qdqiZE5.jpg",
    "runtime": 123,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "dirio-de-uma-paixo"
},

{
    "id": 1165466,
    "title": "Hora do Massacre",
    "genre_ids": [
        27,
        53,
        28
    ],
    "release_date": "2024-05-08",
    "popularity": 24.986,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/zlJ6LEmeiJmdNT9BStqlSzEpepF.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "16",
    "slug": "hora-do-massacre"
},

{
    "id": 7485,
    "title": "Atirador",
    "genre_ids": [
        18,
        28,
        53
    ],
    "release_date": "2007-03-22",
    "popularity": 31.865,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/qluvMxXA2p15s7egazJn9vhX5Gi.jpg",
    "runtime": 126,
    "networks": [
        307
    ],
    "certification": "16",
    "slug": "atirador"
},

{
    "id": 447365,
    "title": "Guardiões da Galáxia: Vol. 3",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2023-05-03",
    "popularity": 38.32,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/4yycSPnchdNAZirGkmCYQwTd3cr.jpg",
    "runtime": 150,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "guardies-da-galxia-vol-3"
},

{
    "id": 473924,
    "title": "동창회의 목적: 더 비기닝",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2017-02-02",
    "popularity": 23.635,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/sqJD8nD2zjRaENBsdcqwpJiSGXj.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 11970,
    "title": "Hércules",
    "genre_ids": [
        16,
        10751,
        14,
        12,
        35,
        10749
    ],
    "release_date": "1997-06-13",
    "popularity": 21.77,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/gKwBRP5o8t6BpUfSeIy09q9AiH0.jpg",
    "runtime": 93,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "hrcules"
},

{
    "id": 10138,
    "title": "Homem de Ferro 2",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2010-04-28",
    "popularity": 34.264,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/vzROjQbgKWMVf2EldXipCcjpuBL.jpg",
    "runtime": 124,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "homem-de-ferro-2"
},

{
    "id": 22705,
    "title": "A Pervertida",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2000-01-28",
    "popularity": 28.428,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/mQjyc1HLwAOi6NHu9U8koCDIrS6.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "a-pervertida"
},

{
    "id": 493529,
    "title": "Dungeons & Dragons: Honra Entre Rebeldes",
    "genre_ids": [
        12,
        14,
        35
    ],
    "release_date": "2023-03-23",
    "popularity": 27.434,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/mVY4DbjYc1hqHnhgJt8rtEqEgfU.jpg",
    "runtime": 134,
    "networks": [
        8,
        307,
        1796,
        1853
    ],
    "certification": "12",
    "slug": "dungeons-dragons-honra-entre-rebeldes"
},

{
    "id": 949484,
    "title": "Cães de Guerra",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-08-29",
    "popularity": 25.972,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/wGk3nQeatNW9qyFfkfPSzFKuLZi.jpg",
    "runtime": 94,
    "networks": [
        2156
    ],
    "certification": "16",
    "slug": "ces-de-guerra"
},

{
    "id": 646683,
    "title": "O Exorcismo",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-05-30",
    "popularity": 22.46,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/fdI9DbwvCSOO4SMDT8spf3SYSqd.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "16",
    "slug": "o-exorcismo"
},

{
    "id": 298618,
    "title": "The Flash",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2023-06-13",
    "popularity": 24.022,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/itYONYDHpJqTuu8BCXAtHxgpglq.jpg",
    "runtime": 144,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "the-flash"
},

{
    "id": 508947,
    "title": "Red: Crescer é Uma Fera",
    "genre_ids": [
        16,
        10751,
        35,
        14
    ],
    "release_date": "2022-03-10",
    "popularity": 25.586,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/qSoLBerH2841Ha4W0LYkexftlpc.jpg",
    "runtime": 100,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "red-crescer-uma-fera"
},

{
    "id": 1306764,
    "title": "Lá Fora",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-10-16",
    "popularity": 23.183,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/2mRpZ01DFVmZARJBEKPa1RMCKn2.jpg",
    "runtime": 141,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "l-fora"
},

{
    "id": 505292,
    "title": "어린 누나",
    "genre_ids": [
        10749
    ],
    "release_date": "2018-03-15",
    "popularity": 28.968,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/e2uKsBgakda3XyHKCLPcUfKsmFw.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 1303236,
    "title": "角頭－大橋頭",
    "genre_ids": [
        80,
        28
    ],
    "release_date": "2024-08-16",
    "popularity": 22.917,
    "vote_average": 9.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/rJnpwN59avSW5vOu9BPiReHkQl4.jpg",
    "runtime": 131,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 387824,
    "title": "엄마친구",
    "genre_ids": [
        18
    ],
    "release_date": "2015-08-20",
    "popularity": 35.371,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/uHTE5QiHfPQLfvqgfYsgISpaqD8.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 348893,
    "title": "Boyka: O Imbatível",
    "genre_ids": [
        28,
        18,
        53
    ],
    "release_date": "2016-08-01",
    "popularity": 32.98,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/3psMSrjgYXC3r6jLkKlWwSIlLo7.jpg",
    "runtime": 86,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "14",
    "slug": "boyka-o-imbatvel"
},

{
    "id": 792307,
    "title": "Pobres Criaturas",
    "genre_ids": [
        878,
        10749,
        35
    ],
    "release_date": "2023-12-07",
    "popularity": 24.363,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/iOdcXYSVzBgmBJzNIlIMOZ6fz0F.jpg",
    "runtime": 141,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "pobres-criaturas"
},

{
    "id": 1426819,
    "title": "Избор",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-22",
    "popularity": 22.738,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/gOMC4LEeclAkPDCYuW1WzJEQA9n.jpg",
    "runtime": 17,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 615777,
    "title": "Babilônia",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2022-12-22",
    "popularity": 21.556,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/qZUmMxJbGmkIYwnS7qRfSOREmvC.jpg",
    "runtime": 189,
    "networks": [
        307
    ],
    "certification": "18",
    "slug": "babilnia"
},

{
    "id": 1128650,
    "title": "誤判",
    "genre_ids": [
        28,
        18,
        80,
        53
    ],
    "release_date": "2024-12-08",
    "popularity": 22.108,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/2tH6utnYvlTpGvbQCs5FdeQIKFp.jpg",
    "runtime": 117,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 493922,
    "title": "Hereditário",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2018-06-07",
    "popularity": 30.719,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/ysdkXpoeDYLpgodiNGBW29S4o2U.jpg",
    "runtime": 127,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "hereditrio"
},

{
    "id": 1134433,
    "title": "Quando a Morte Sussurra",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2023-10-25",
    "popularity": 29.72,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/z9GjAzLasH7ODs8p0XVvrkeorSW.jpg",
    "runtime": 121,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "quando-a-morte-sussurra"
},

{
    "id": 1094974,
    "title": "Sem Refúgio",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-10-04",
    "popularity": 24.946,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/dU05fLDIMBggFIuhpV7IATP5x4j.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "sem-refgio"
},

{
    "id": 153104,
    "title": "Plano Doentio",
    "genre_ids": [
        9648,
        18,
        10749,
        53
    ],
    "release_date": "2003-03-01",
    "popularity": 26.703,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/A6A15cDR8mpdOxW4y7UzFanzbM0.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "plano-doentio"
},

{
    "id": 10191,
    "title": "Como Treinar o Seu Dragão",
    "genre_ids": [
        14,
        12,
        16,
        10751
    ],
    "release_date": "2010-03-18",
    "popularity": 31.834,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/yfj27wcg80MjSn7Il6iGQ2wkTth.jpg",
    "runtime": 98,
    "networks": [
        167
    ],
    "certification": "L",
    "slug": "como-treinar-o-seu-drago"
},

{
    "id": 674,
    "title": "Harry Potter e o Cálice de Fogo",
    "genre_ids": [
        12,
        14
    ],
    "release_date": "2005-11-16",
    "popularity": 36.638,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/3HcD2im4RrOgbITLmqyebE1aTeO.jpg",
    "runtime": 157,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "10",
    "slug": "harry-potter-e-o-clice-de-fogo"
},

{
    "id": 976576,
    "title": "Emmanuelle",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-09-25",
    "popularity": 38.212,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/s9gmKus9YPTDzdMKZQJYPh0VoGk.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "N/A",
    "slug": "emmanuelle"
},

{
    "id": 39254,
    "title": "Gigantes de Aço",
    "genre_ids": [
        28,
        878,
        18
    ],
    "release_date": "2011-09-28",
    "popularity": 27.423,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/pp74uUjwQTknGPqNrerj4FvU0ce.jpg",
    "runtime": 127,
    "networks": [],
    "certification": "10",
    "slug": "gigantes-de-ao"
},

{
    "id": 350,
    "title": "O Diabo Veste Prada",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2006-06-29",
    "popularity": 21.296,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/clsvqIWM5ZILUcHjobQd4WtHZdu.jpg",
    "runtime": 109,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "o-diabo-veste-prada"
},

{
    "id": 73723,
    "title": "O Lorax: Em Busca da Trúfula Perdida",
    "genre_ids": [
        16,
        10751
    ],
    "release_date": "2012-03-01",
    "popularity": 21.761,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/3rfClKuMmhFawkdCJXMEV3OGOJ3.jpg",
    "runtime": 86,
    "networks": [
        8,
        119,
        307,
        1796
    ],
    "certification": "L",
    "slug": "o-lorax-em-busca-da-trfula-perdida"
},

{
    "id": 8960,
    "title": "Hancock",
    "genre_ids": [
        14,
        28
    ],
    "release_date": "2008-07-01",
    "popularity": 34.207,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/anUAnDorLJe0J2o9b0Wh3FTxJ7r.jpg",
    "runtime": 92,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "hancock"
},

{
    "id": 1371727,
    "title": "Sing: Thriller",
    "genre_ids": [
        16,
        10751,
        35,
        10402
    ],
    "release_date": "2024-10-15",
    "popularity": 28.406,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/i77OInTKcrnRlAozFOaB6D5mk15.jpg",
    "runtime": 11,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "sing-thriller"
},

{
    "id": 1389038,
    "title": "Mickey e os Muitos Natais",
    "genre_ids": [
        16,
        12,
        35,
        10751
    ],
    "release_date": "2024-12-01",
    "popularity": 22.445,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/aGSKSs0Mm9Pd1ECXZ4LVe6zEcHn.jpg",
    "runtime": 22,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "mickey-e-os-muitos-natais"
},

{
    "id": 447277,
    "title": "A Pequena Sereia",
    "genre_ids": [
        12,
        10751,
        14,
        10749
    ],
    "release_date": "2023-05-18",
    "popularity": 25.948,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/yeo0MKX2cAE0Ge7qoeRCiMWvSjV.jpg",
    "runtime": 135,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "a-pequena-sereia"
},

{
    "id": 1415630,
    "title": "TITAN",
    "genre_ids": [
        14,
        9648,
        18
    ],
    "release_date": "2025-02-22",
    "popularity": 23.623,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/y58HahMG7QcuBX92q89Vq0Sonwo.jpg",
    "runtime": 20,
    "networks": [],
    "certification": "N/A",
    "slug": "titan"
},

{
    "id": 652,
    "title": "Tróia",
    "genre_ids": [
        12,
        36,
        10752
    ],
    "release_date": "2004-05-13",
    "popularity": 24.019,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/iKp2NxUkqPVSPN2FdXUn9gxj4Nn.jpg",
    "runtime": 162,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "tria"
},

{
    "id": 1233575,
    "title": "Código Preto",
    "genre_ids": [
        53
    ],
    "release_date": "2025-03-12",
    "popularity": 25.579,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/353Z0MmMpZe87PM0vrmU8l4NMSX.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": "cdigo-preto"
},

{
    "id": 675,
    "title": "Harry Potter e a Ordem da Fênix",
    "genre_ids": [
        12,
        14
    ],
    "release_date": "2007-07-08",
    "popularity": 28.928,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/tIf9aUyNljda9MG1pjlOLHCZ3b0.jpg",
    "runtime": 138,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "L",
    "slug": "harry-potter-e-a-ordem-da-fnix"
},

{
    "id": 10195,
    "title": "Thor",
    "genre_ids": [
        12,
        14,
        28
    ],
    "release_date": "2011-04-21",
    "popularity": 23.179,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/aEV9QmgBqjRTdjsvdCgdK89tavQ.jpg",
    "runtime": 115,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "thor"
},

{
    "id": 1104844,
    "title": "BLUE LOCK O FILME -EPISÓDIO NAGI-",
    "genre_ids": [
        16,
        28,
        18
    ],
    "release_date": "2024-04-19",
    "popularity": 32.929,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/sqI1kanuRF6VHRunhbEUVHh8BKV.jpg",
    "runtime": 91,
    "networks": [
        283,
        1968
    ],
    "certification": "12",
    "slug": "blue-lock-o-filme-episdio-nagi-"
},

{
    "id": 1428442,
    "title": "I'm Not Racist",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2025-02-22",
    "popularity": 22.908,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bVQPjIspxgyltSNFvohPG550MBC.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "im-not-racist"
},

{
    "id": 868759,
    "title": "Ghosted: Sem Resposta",
    "genre_ids": [
        28,
        35,
        10749
    ],
    "release_date": "2023-04-18",
    "popularity": 35.335,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/89p7MQ3I5wKzOEO0OCCXEdUqX9R.jpg",
    "runtime": 117,
    "networks": [
        350
    ],
    "certification": "14",
    "slug": "ghosted-sem-resposta"
},

{
    "id": 769,
    "title": "Os Bons Companheiros",
    "genre_ids": [
        18,
        80
    ],
    "release_date": "1990-09-12",
    "popularity": 24.361,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/lanYBnyCcqkaFqz66B8PrBRCtCW.jpg",
    "runtime": 146,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "os-bons-companheiros"
},

{
    "id": 719221,
    "title": "O Tarô da Morte",
    "genre_ids": [
        27
    ],
    "release_date": "2024-05-01",
    "popularity": 20.978,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/ltOnEtJZyruTAOPRs0xYy6njIkY.jpg",
    "runtime": 92,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "N/A",
    "slug": "o-tar-da-morte"
},

{
    "id": 68718,
    "title": "Django Livre",
    "genre_ids": [
        18,
        37
    ],
    "release_date": "2012-12-25",
    "popularity": 22.735,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/1t5UXZYhjqoaz7vUUNJw78F1Yzz.jpg",
    "runtime": 165,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "16",
    "slug": "django-livre"
},

{
    "id": 6479,
    "title": "Eu Sou a Lenda",
    "genre_ids": [
        18,
        878,
        53
    ],
    "release_date": "2007-12-12",
    "popularity": 22.108,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/6urQ17k0Pepx8RoYVeRbwaCSVIS.jpg",
    "runtime": 101,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "eu-sou-a-lenda"
},

{
    "id": 111,
    "title": "Scarface",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "1983-12-09",
    "popularity": 21.541,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/4d6ksr4wsBd1fifF7YLAm9wbWiK.jpg",
    "runtime": 166,
    "networks": [
        167
    ],
    "certification": "18",
    "slug": "scarface"
},

{
    "id": 1181863,
    "title": "Animal Adventures: Save The Forest",
    "genre_ids": [
        16
    ],
    "release_date": "2024-01-15",
    "popularity": 30.656,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/7d3MDFMyn7CwoTP1lozZLbgN0EV.jpg",
    "runtime": 81,
    "networks": [],
    "certification": "N/A",
    "slug": "animal-adventures-save-the-forest"
},

{
    "id": 1003596,
    "title": "Vingadores: Apocalipse",
    "genre_ids": [
        878
    ],
    "release_date": "2026-04-29",
    "popularity": 29.667,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/eO6OdA4RDRWeCVlDMcsoxWYFySD.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "vingadores-apocalipse"
},

{
    "id": 1124,
    "title": "O Grande Truque",
    "genre_ids": [
        18,
        9648,
        878
    ],
    "release_date": "2006-10-17",
    "popularity": 24.928,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/9yOIPXWQ9ttsZfzHvmcS7XiV8To.jpg",
    "runtime": 130,
    "networks": [],
    "certification": "14",
    "slug": "o-grande-truque"
},

{
    "id": 281957,
    "title": "O Regresso",
    "genre_ids": [
        37,
        18,
        12
    ],
    "release_date": "2015-12-25",
    "popularity": 26.696,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/yY9Gy3NBltZWy0rxn9hqfi2Zx8j.jpg",
    "runtime": 157,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "o-regresso"
},

{
    "id": 207508,
    "title": "Blutjunge Verführerinnen",
    "genre_ids": [
        35
    ],
    "release_date": "1971-07-29",
    "popularity": 20.644,
    "vote_average": 3.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/uP4oTvEvWs0hI5DeCvdWf32ZwPY.jpg",
    "runtime": 79,
    "networks": [],
    "certification": "N/A",
    "slug": "blutjunge-verfhrerinnen"
},

{
    "id": 56386,
    "title": "Lager SSadis Kastrat Kommandantur",
    "genre_ids": [
        27,
        10752
    ],
    "release_date": "1976-11-16",
    "popularity": 31.766,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/n79KND1dEYkbR5eVpSNbsxBFYmi.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": "lager-ssadis-kastrat-kommandantur"
},

{
    "id": 1064028,
    "title": "Alice: Subservience",
    "genre_ids": [
        878,
        53
    ],
    "release_date": "2024-08-15",
    "popularity": 36.403,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/6EO0cjZt2vzAOmuDJZGED6GQmi4.jpg",
    "runtime": 105,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "alice-subservience"
},

{
    "id": 102651,
    "title": "Malévola",
    "genre_ids": [
        14,
        12,
        28,
        10751,
        10749
    ],
    "release_date": "2014-05-28",
    "popularity": 21.734,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/dk6dGb014XAP7UOV0psttzcuh3E.jpg",
    "runtime": 97,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "malvola"
},

{
    "id": 317442,
    "title": "The Last: Naruto O Filme",
    "genre_ids": [
        28,
        10749,
        16
    ],
    "release_date": "2014-12-06",
    "popularity": 22.432,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/sKn9V7hvkxJqFWBhNLHStbpHUIN.jpg",
    "runtime": 112,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "10",
    "slug": "the-last-naruto-o-filme"
},

{
    "id": 1116490,
    "title": "Transação Perigosa",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-04-26",
    "popularity": 38.195,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/byDeAJWEIz01PRQUzGFZULCsnC4.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "14",
    "slug": "transao-perigosa"
},

{
    "id": 1096197,
    "title": "Desespero Profundo",
    "genre_ids": [
        53,
        27,
        28
    ],
    "release_date": "2024-01-18",
    "popularity": 28.369,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/iJgY7pFXAs2PKhoA1g9jeoqUmQd.jpg",
    "runtime": 90,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "desespero-profundo"
},

{
    "id": 679,
    "title": "Aliens: O Resgate",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "1986-07-18",
    "popularity": 23.617,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/hTTt89V7S3e3YGpf6g3Ng9pro1i.jpg",
    "runtime": 135,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "aliens-o-resgate"
},

{
    "id": 78383,
    "title": "Nurse: A Enfermeira Assassina",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2013-09-28",
    "popularity": 27.394,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/1Sv0E1E0NwlntDrqH1c43vvSrLF.jpg",
    "runtime": 84,
    "networks": [],
    "certification": "N/A",
    "slug": "nurse-a-enfermeira-assassina"
},

{
    "id": 109445,
    "title": "Frozen: Uma Aventura Congelante",
    "genre_ids": [
        16,
        10751,
        12,
        14
    ],
    "release_date": "2013-11-20",
    "popularity": 34.136,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/fh8yowTUdhF2EIYDSo0UgpJuatI.jpg",
    "runtime": 102,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "frozen-uma-aventura-congelante"
},

{
    "id": 1064307,
    "title": "Espermageddon",
    "genre_ids": [
        16,
        35
    ],
    "release_date": "2025-02-21",
    "popularity": 23.97,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/xXJjuZwSI6O6r4MnnCZuSmEJfiy.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "16",
    "slug": "espermageddon"
},

{
    "id": 578,
    "title": "Tubarão",
    "genre_ids": [
        27,
        53,
        12
    ],
    "release_date": "1975-06-20",
    "popularity": 21.251,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/kIgxgZSp8tdvHxWxkNejVasMsCq.jpg",
    "runtime": 124,
    "networks": [
        119,
        167,
        307,
        2156
    ],
    "certification": "14",
    "slug": "tubaro"
},

{
    "id": 1431735,
    "title": "Dois é Bom, Três é De Mais",
    "genre_ids": [
        35,
        28
    ],
    "release_date": "2025-02-17",
    "popularity": 25.938,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/a8bMSfHv84DL6s9v7Mk7Q5wlSjt.jpg",
    "runtime": 0,
    "networks": [
        307,
        484,
        2156
    ],
    "certification": "N/A",
    "slug": "dois-bom-trs-de-mais"
},

{
    "id": 1151534,
    "title": "Destinos à Deriva",
    "genre_ids": [
        53,
        18
    ],
    "release_date": "2023-09-29",
    "popularity": 20.281,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/lJonRBSvmX3TEGhxSHooGmJa4GG.jpg",
    "runtime": 109,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "destinos-deriva"
},

{
    "id": 645757,
    "title": "Aquele Natal",
    "genre_ids": [
        16,
        35,
        10751,
        14,
        12
    ],
    "release_date": "2024-11-27",
    "popularity": 25.447,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/xGmEaO6EeohksoWB9LNVi96yKfy.jpg",
    "runtime": 95,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "aquele-natal"
},

{
    "id": 959604,
    "title": "L'Amour ouf",
    "genre_ids": [
        10749,
        80,
        18
    ],
    "release_date": "2024-10-16",
    "popularity": 28.916,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/6akNNv4KyrguZUiG4uemfV6toVq.jpg",
    "runtime": 166,
    "networks": [],
    "certification": "N/A",
    "slug": "lamour-ouf"
},

{
    "id": 7980,
    "title": "Um Olhar do Paraíso",
    "genre_ids": [
        14,
        18
    ],
    "release_date": "2009-12-26",
    "popularity": 23.162,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/vJEvxyCflOvCoY3ToK6iQoUCVrn.jpg",
    "runtime": 136,
    "networks": [
        8,
        1796,
        2156
    ],
    "certification": "N/A",
    "slug": "um-olhar-do-paraso"
},

{
    "id": 428323,
    "title": "A Reviravolta",
    "genre_ids": [
        18
    ],
    "release_date": "2017-03-24",
    "popularity": 32.922,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/eF7UhLR1buTUTOfbIKsVT6kX4xc.jpg",
    "runtime": 104,
    "networks": [],
    "certification": "N/A",
    "slug": "a-reviravolta"
},

{
    "id": 6977,
    "title": "Onde os Fracos Não Têm Vez",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "2007-06-13",
    "popularity": 22.907,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/mCCoKay6QPxvgaYmTmF3aGpNS4k.jpg",
    "runtime": 122,
    "networks": [],
    "certification": "16",
    "slug": "onde-os-fracos-no-tm-vez"
},

{
    "id": 1421379,
    "title": "The Congress",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-22",
    "popularity": 22.723,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tu6Q6h2avyfWQtPmXzsugHd96XU.jpg",
    "runtime": 11,
    "networks": [],
    "certification": "N/A",
    "slug": "the-congress"
},

{
    "id": 545611,
    "title": "Tudo em Todo o Lugar ao Mesmo Tempo",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2022-03-24",
    "popularity": 24.339,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/bW21kbvqAt2kMGlaU8qY86C8kQE.jpg",
    "runtime": 139,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "tudo-em-todo-o-lugar-ao-mesmo-tempo"
},

{
    "id": 365177,
    "title": "Borderlands: O Destino do Universo Está em Jogo",
    "genre_ids": [
        28,
        878,
        35
    ],
    "release_date": "2024-08-07",
    "popularity": 35.334,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/pZFUo4exLI3WuOaMhlj9plRdOta.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "14",
    "slug": "borderlands-o-destino-do-universo-est-em-jogo"
},

{
    "id": 1288998,
    "title": "1978",
    "genre_ids": [
        27,
        53,
        18
    ],
    "release_date": "2024-10-16",
    "popularity": 20.948,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/zn7oyy7KTlC01XD3pUn82V9Od0P.jpg",
    "runtime": 81,
    "networks": [],
    "certification": "N/A",
    "slug": "1978"
},

{
    "id": 809,
    "title": "Shrek 2",
    "genre_ids": [
        16,
        10751,
        35,
        14,
        12
    ],
    "release_date": "2004-05-19",
    "popularity": 30.608,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/qHeyupQEoDUdNfppQDl6LQcncUK.jpg",
    "runtime": 93,
    "networks": [
        8,
        119,
        167,
        307,
        2156
    ],
    "certification": "L",
    "slug": "shrek-2"
},

{
    "id": 293660,
    "title": "Deadpool",
    "genre_ids": [
        28,
        12,
        35
    ],
    "release_date": "2016-02-09",
    "popularity": 29.606,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/9it1qyyxxSW7TFKnKF7orVF9BpT.jpg",
    "runtime": 107,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "deadpool"
},

{
    "id": 270946,
    "title": "Os Pinguins de Madagascar: O Filme",
    "genre_ids": [
        10751,
        16,
        12,
        35
    ],
    "release_date": "2014-11-22",
    "popularity": 22.106,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/w9jno0ySammISRGvc0RZREjYUvg.jpg",
    "runtime": 92,
    "networks": [
        8,
        119,
        167,
        307,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "os-pinguins-de-madagascar-o-filme"
},

{
    "id": 260514,
    "title": "Carros 3",
    "genre_ids": [
        10751,
        16,
        12,
        35
    ],
    "release_date": "2017-06-15",
    "popularity": 24.925,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/lVPFdORefTKXKFiSktrXbiFDNAK.jpg",
    "runtime": 90,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "carros-3"
},

{
    "id": 296096,
    "title": "Como Eu Era Antes de Você",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2016-06-01",
    "popularity": 26.69,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/1a60KPNTC4JKYphNQveAB37Lyif.jpg",
    "runtime": 110,
    "networks": [
        307,
        2156
    ],
    "certification": "12",
    "slug": "como-eu-era-antes-de-voc"
},

{
    "id": 932086,
    "title": "Horizon: Uma Saga Americana - Capítulo 1",
    "genre_ids": [
        37,
        18
    ],
    "release_date": "2024-06-26",
    "popularity": 20.591,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/wScEgkA3eWfhyp5WoxGt5Zu3sug.jpg",
    "runtime": 182,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "horizon-uma-saga-americana-captulo-1"
},

{
    "id": 335983,
    "title": "Venom",
    "genre_ids": [
        878,
        28
    ],
    "release_date": "2018-09-28",
    "popularity": 31.749,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    "runtime": 112,
    "networks": [
        167
    ],
    "certification": "14",
    "slug": "venom"
},

{
    "id": 614933,
    "title": "Atlas",
    "genre_ids": [
        878,
        28
    ],
    "release_date": "2024-05-23",
    "popularity": 21.728,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
    "runtime": 120,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "atlas"
},

{
    "id": 739405,
    "title": "Esquema de Risco: Operação Fortune",
    "genre_ids": [
        28,
        53,
        35,
        12
    ],
    "release_date": "2023-01-04",
    "popularity": 19.964,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/fLxXvMcpsK8fGKguP3wZ7Urb2ao.jpg",
    "runtime": 113,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "esquema-de-risco-operao-fortune"
},

{
    "id": 1129598,
    "title": "Presa",
    "genre_ids": [
        28,
        53,
        27
    ],
    "release_date": "2024-03-15",
    "popularity": 36.349,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/gjoDv3uhQtbDiqt2AOYL7qZSI92.jpg",
    "runtime": 86,
    "networks": [],
    "certification": "N/A",
    "slug": "presa"
},

{
    "id": 960112,
    "title": "幼齿花招",
    "genre_ids": [
        18
    ],
    "release_date": "1987-05-26",
    "popularity": 27.37,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/r1FH85IvhgEtqOZAiJ5E7Vn4akg.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1232449,
    "title": "Young Hearts",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2024-10-26",
    "popularity": 37.912,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/xsApLXxqTG5uorAZRF0kJi0oXfR.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": "young-hearts"
},

{
    "id": 116236,
    "title": "La voglia matta",
    "genre_ids": [
        10749,
        35,
        18
    ],
    "release_date": "1962-03-15",
    "popularity": 22.426,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/6fsbLs9HnJSqsd5JcNoJPTJS8FZ.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "la-voglia-matta"
},

{
    "id": 857598,
    "title": "పుష్పా 2 - The Rule",
    "genre_ids": [
        28,
        18,
        53,
        80
    ],
    "release_date": "2024-12-04",
    "popularity": 23.588,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/7HeMz4qskfnoHeZxp6oV4xCjqZs.jpg",
    "runtime": 224,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "-2-the-rule"
},

{
    "id": 280,
    "title": "O Exterminador do Futuro 2: O Julgamento Final",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "1991-07-03",
    "popularity": 28.333,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/nb0ertLALhkUqpmcahDFplqyc0I.jpg",
    "runtime": 136,
    "networks": [
        8,
        119,
        307,
        1796
    ],
    "certification": "12",
    "slug": "o-exterminador-do-futuro-2-o-julgamento-final"
},

{
    "id": 10351,
    "title": "O Mestre dos Desejos",
    "genre_ids": [
        27,
        14
    ],
    "release_date": "1997-09-19",
    "popularity": 23.94,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/i8z8bsl0DnvRUqjnL2d5iqveWgk.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "16",
    "slug": "o-mestre-dos-desejos"
},

{
    "id": 814889,
    "title": "Não Solte!",
    "genre_ids": [
        27,
        18
    ],
    "release_date": "2024-09-18",
    "popularity": 34.075,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/8YwdoPD89FZImGD5wi9cSx1y8rQ.jpg",
    "runtime": 101,
    "networks": [
        484
    ],
    "certification": "16",
    "slug": "no-solte"
},

{
    "id": 68726,
    "title": "Círculo de Fogo",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "2013-07-11",
    "popularity": 21.208,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/3TxCX0Vbk1m4IZg0eomIRUGyJT7.jpg",
    "runtime": 131,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "crculo-de-fogo"
},

{
    "id": 1885,
    "title": "Karatê Kid: A Hora da Verdade",
    "genre_ids": [
        28,
        18,
        10751
    ],
    "release_date": "1984-06-22",
    "popularity": 25.924,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/b2VqAf0GSkPJ6AwzVC64VoXLxzs.jpg",
    "runtime": 126,
    "networks": [
        1899,
        1825
    ],
    "certification": "10",
    "slug": "karat-kid-a-hora-da-verdade"
},

{
    "id": 1160018,
    "title": "Kill: O Massacre no Trem",
    "genre_ids": [
        28,
        80,
        53,
        18
    ],
    "release_date": "2024-07-03",
    "popularity": 19.685,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/mxgrtJvngNhppjCwu2AvdCtvSXa.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "18",
    "slug": "kill-o-massacre-no-trem"
},

{
    "id": 831815,
    "title": "A Missão de Sandy Bochechas",
    "genre_ids": [
        16,
        35,
        12,
        10751
    ],
    "release_date": "2024-10-18",
    "popularity": 20.248,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bfcb1MxYLlddh9FKoC8g07h4TOs.jpg",
    "runtime": 86,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "a-misso-de-sandy-bochechas"
},

{
    "id": 695721,
    "title": "Jogos Vorazes: A Cantiga dos Pássaros e das Serpentes",
    "genre_ids": [
        18,
        878,
        28,
        12,
        53,
        10752
    ],
    "release_date": "2023-11-15",
    "popularity": 21.494,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/5LVmgxNMCWPVY0XtcAccm7rP6FW.jpg",
    "runtime": 157,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "jogos-vorazes-a-cantiga-dos-pssaros-e-das-serpentes"
},

{
    "id": 45243,
    "title": "Se Beber, Não Case! - Parte II",
    "genre_ids": [
        35
    ],
    "release_date": "2011-05-25",
    "popularity": 23.114,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/sz9UqGxRZb70j3rNAnn4Hkic24v.jpg",
    "runtime": 101,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "se-beber-no-case-parte-ii"
},

{
    "id": 82702,
    "title": "Como Treinar o seu Dragão 2",
    "genre_ids": [
        14,
        28,
        12,
        16,
        35,
        10751
    ],
    "release_date": "2014-06-05",
    "popularity": 25.444,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/yqRLscDZE52mAkNhVTKtVVpC5QC.jpg",
    "runtime": 102,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "L",
    "slug": "como-treinar-o-seu-drago-2"
},

{
    "id": 100402,
    "title": "Capitão América 2: O Soldado Invernal",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2014-03-20",
    "popularity": 28.877,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/88iNcBQl9eK6DWIlek9NG2b5fLX.jpg",
    "runtime": 136,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "capito-amrica-2-o-soldado-invernal"
},

{
    "id": 240832,
    "title": "Lucy",
    "genre_ids": [
        28,
        878
    ],
    "release_date": "2014-07-25",
    "popularity": 35.057,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/6f10Yn1vooCMhb6DrY6AvsK19Yh.jpg",
    "runtime": 89,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "16",
    "slug": "lucy"
},

{
    "id": 1417809,
    "title": "憶えのない殺人",
    "genre_ids": [
        10770,
        9648,
        18
    ],
    "release_date": "2025-02-22",
    "popularity": 22.904,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bmW8CgOzIF22ouGsTlHvXEowi9Q.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 15255,
    "title": "O Lutador",
    "genre_ids": [
        28,
        80,
        53,
        18
    ],
    "release_date": "2006-04-11",
    "popularity": 22.696,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/aoxmISj7jjnBgaQusUr13sSqRay.jpg",
    "runtime": 93,
    "networks": [
        2106,
        2107,
        2156
    ],
    "certification": "N/A",
    "slug": "o-lutador"
},

{
    "id": 12445,
    "title": "Harry Potter e as Relíquias da Morte - Parte 2",
    "genre_ids": [
        14,
        12
    ],
    "release_date": "2011-07-12",
    "popularity": 32.869,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/yD3VosOVW8WxPUzBDpEdzfv5pGx.jpg",
    "runtime": 130,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "12",
    "slug": "harry-potter-e-as-relquias-da-morte-parte-2"
},

{
    "id": 572802,
    "title": "Aquaman 2: O Reino Perdido",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2023-12-20",
    "popularity": 24.251,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/oSK996swnjHOPCWAw5CiRoYLsKk.jpg",
    "runtime": 124,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "12",
    "slug": "aquaman-2-o-reino-perdido"
},

{
    "id": 286217,
    "title": "Perdido em Marte",
    "genre_ids": [
        18,
        12,
        878
    ],
    "release_date": "2015-09-30",
    "popularity": 22.103,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/fG3S4zdgnsaF77tJGK3rA9tHBu4.jpg",
    "runtime": 141,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "perdido-em-marte"
},

{
    "id": 744275,
    "title": "After: Depois do Desencontro",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2021-09-01",
    "popularity": 20.909,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/us14PtA89IjtR1JOdDamamPth7e.jpg",
    "runtime": 99,
    "networks": [
        119,
        1899,
        701,
        1825
    ],
    "certification": "16",
    "slug": "after-depois-do-desencontro"
},

{
    "id": 299054,
    "title": "Os Mercenários 4",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2023-09-15",
    "popularity": 24.839,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/yH7750OmhoPcrTA9PZTHohDjpqP.jpg",
    "runtime": 103,
    "networks": [
        484,
        2156
    ],
    "certification": "18",
    "slug": "os-mercenrios-4"
},

{
    "id": 1430094,
    "title": "নীল সুখ",
    "genre_ids": [
        53,
        10749,
        18
    ],
    "release_date": "2025-02-18",
    "popularity": 29.542,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/juBrvp6zd5NTPtzKqhk3kqSDpZq.jpg",
    "runtime": 126,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 436969,
    "title": "O Esquadrão Suicida",
    "genre_ids": [
        28,
        35,
        12
    ],
    "release_date": "2021-07-28",
    "popularity": 30.559,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/wTS3dS2DJiMFFgqKDz5fxMTri.jpg",
    "runtime": 132,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "16",
    "slug": "o-esquadro-suicida"
},

{
    "id": 11544,
    "title": "Lilo & Stitch",
    "genre_ids": [
        16,
        10751,
        35
    ],
    "release_date": "2002-06-21",
    "popularity": 26.674,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/ottRXMCQ9jPB318syTcfIdtJWIE.jpg",
    "runtime": 85,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "lilo-stitch"
},

{
    "id": 1282448,
    "title": "Kemah Terlarang: Kesurupan Massal",
    "genre_ids": [
        27
    ],
    "release_date": "2024-10-10",
    "popularity": 20.59,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/xsKvu7FPLcYUulsBPhBDYknlnRX.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "kemah-terlarang-kesurupan-massal"
},

{
    "id": 313369,
    "title": "La La Land: Cantando Estações",
    "genre_ids": [
        35,
        18,
        10749,
        10402
    ],
    "release_date": "2016-12-01",
    "popularity": 31.631,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/yArr9VMatOTEMRZ0H1s8pNHQW78.jpg",
    "runtime": 128,
    "networks": [],
    "certification": "N/A",
    "slug": "la-la-land-cantando-estaes"
},

{
    "id": 9023,
    "title": "Spirit: O Corcel Indomável",
    "genre_ids": [
        16,
        12,
        10751,
        18,
        37,
        10749
    ],
    "release_date": "2002-05-24",
    "popularity": 19.438,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/jycgp5AdZFKj2Qh2VACG9ilK93l.jpg",
    "runtime": 86,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "L",
    "slug": "spirit-o-corcel-indomvel"
},

{
    "id": 121,
    "title": "O Senhor dos Anéis: As Duas Torres",
    "genre_ids": [
        12,
        14,
        28
    ],
    "release_date": "2002-12-18",
    "popularity": 36.344,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/cmTFY35KK40yBX23Z9HhqU5uZ2O.jpg",
    "runtime": 180,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "o-senhor-dos-anis-as-duas-torres"
},

{
    "id": 257344,
    "title": "Pixels",
    "genre_ids": [
        28,
        35,
        878
    ],
    "release_date": "2015-07-16",
    "popularity": 19.951,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/d26S5EfVXLNxRXqyFy1yyl3qRq3.jpg",
    "runtime": 105,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "pixels"
},

{
    "id": 119450,
    "title": "Planeta dos Macacos: O Confronto",
    "genre_ids": [
        878,
        28,
        18,
        53
    ],
    "release_date": "2014-07-08",
    "popularity": 21.691,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/bFuiF7AvxFJgGowI0vxw37MkwTu.jpg",
    "runtime": 131,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "planeta-dos-macacos-o-confronto"
},

{
    "id": 694,
    "title": "O Iluminado",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "1980-05-23",
    "popularity": 27.283,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/7ceEaLciLfksJkSHqp0vLE5eLyy.jpg",
    "runtime": 146,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "o-iluminado"
},

{
    "id": 72808,
    "title": "A Carne",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1991-05-09",
    "popularity": 22.394,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/4tRnOH2gjBEs8es6d9cHtSo8XGL.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "a-carne"
},

{
    "id": 1389147,
    "title": "DSI: Departamento Secreto de Intervenção",
    "genre_ids": [
        28
    ],
    "release_date": "2024-11-28",
    "popularity": 28.289,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/owX06DajHa0TIqYt5z57x4nIGWw.jpg",
    "runtime": 120,
    "networks": [],
    "certification": "N/A",
    "slug": "dsi-departamento-secreto-de-interveno"
},

{
    "id": 346698,
    "title": "Barbie",
    "genre_ids": [
        35,
        12
    ],
    "release_date": "2023-07-19",
    "popularity": 37.748,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg",
    "runtime": 114,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "12",
    "slug": "barbie"
},

{
    "id": 49026,
    "title": "Batman: O Cavaleiro das Trevas Ressurge",
    "genre_ids": [
        28,
        80,
        18,
        53
    ],
    "release_date": "2012-07-17",
    "popularity": 23.567,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/w7KDOBOKoZNzZkiKInFBlqo7Cbg.jpg",
    "runtime": 165,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "batman-o-cavaleiro-das-trevas-ressurge"
},

{
    "id": 77877,
    "title": "Um Homem de Sorte",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2012-04-19",
    "popularity": 25.918,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/f1Fc5IPLbOsGidnudNpL2RTVoKm.jpg",
    "runtime": 100,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "um-homem-de-sorte"
},

{
    "id": 967847,
    "title": "Ghostbusters: Apocalipse de Gelo",
    "genre_ids": [
        14,
        12,
        35
    ],
    "release_date": "2024-03-20",
    "popularity": 23.938,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/pPJX925yPfqUPsNnOx9We6tppD4.jpg",
    "runtime": 115,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "ghostbusters-apocalipse-de-gelo"
},

{
    "id": 162,
    "title": "Edward Mãos de Tesoura",
    "genre_ids": [
        14,
        18,
        10749
    ],
    "release_date": "1990-12-07",
    "popularity": 19.665,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/sJJv9F6s31pNE1aXUKsWtGspeE4.jpg",
    "runtime": 105,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "edward-mos-de-tesoura"
},

{
    "id": 315635,
    "title": "Homem-Aranha: De Volta ao Lar",
    "genre_ids": [
        28,
        12,
        878,
        18
    ],
    "release_date": "2017-07-05",
    "popularity": 33.906,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/jBcZuqugLRxEvazMPvxKiQlfWlo.jpg",
    "runtime": 133,
    "networks": [
        167,
        582
    ],
    "certification": "12",
    "slug": "homem-aranha-de-volta-ao-lar"
},

{
    "id": 988078,
    "title": "Através da Minha Janela: Além-mar",
    "genre_ids": [
        10749,
        18,
        35
    ],
    "release_date": "2023-06-23",
    "popularity": 19.201,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/252wEUZ6lr4a5sF7DUzRRH3iGEO.jpg",
    "runtime": 110,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "atravs-da-minha-janela-alm-mar"
},

{
    "id": 5492,
    "title": "Atirador Implacável",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2024-08-16",
    "popularity": 21.202,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/zvd8ziOz5atIb0mM55Am7wcKWK4.jpg",
    "runtime": 90,
    "networks": [
        484
    ],
    "certification": "N/A",
    "slug": "atirador-implacvel"
},

{
    "id": 114,
    "title": "Uma Linda Mulher",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "1990-03-23",
    "popularity": 20.233,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/biKuy0cj1ABfitVwMgnRqIPRfPB.jpg",
    "runtime": 119,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "uma-linda-mulher"
},

{
    "id": 1355142,
    "title": "Lockjaw",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2025-02-22",
    "popularity": 23.112,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tXJcjRDZbQMzYSJfIOqbl6wyBE4.jpg",
    "runtime": 77,
    "networks": [],
    "certification": "N/A",
    "slug": "lockjaw"
},

{
    "id": 843527,
    "title": "Uma Ideia de Você",
    "genre_ids": [
        10749,
        18,
        35
    ],
    "release_date": "2024-05-02",
    "popularity": 25.405,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/5rIKVegF7XMPB02RaFaxtFwTPR0.jpg",
    "runtime": 116,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "uma-ideia-de-voc"
},

{
    "id": 57158,
    "title": "O Hobbit: A Desolação de Smaug",
    "genre_ids": [
        14,
        12,
        28
    ],
    "release_date": "2013-12-11",
    "popularity": 21.493,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/beqHE5BZY5LczMxJezL4FdY7mBp.jpg",
    "runtime": 161,
    "networks": [
        2142,
        2141
    ],
    "certification": "12",
    "slug": "o-hobbit-a-desolao-de-smaug"
},

{
    "id": 72190,
    "title": "Guerra Mundial Z",
    "genre_ids": [
        28,
        27,
        878,
        53
    ],
    "release_date": "2013-06-19",
    "popularity": 28.836,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/lIWHCSFdkerKbxAVoZyOtr5LpWy.jpg",
    "runtime": 123,
    "networks": [
        307,
        484
    ],
    "certification": "14",
    "slug": "guerra-mundial-z"
},

{
    "id": 13,
    "title": "Forrest Gump: O Contador de Histórias",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "1994-06-23",
    "popularity": 34.988,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/d74WpIsH8379TIL4wUxDneRCYv2.jpg",
    "runtime": 142,
    "networks": [
        2156
    ],
    "certification": "14",
    "slug": "forrest-gump-o-contador-de-histrias"
},

{
    "id": 1419207,
    "title": "Hitman: The Slaughter",
    "genre_ids": [
        80,
        18
    ],
    "release_date": "2025-02-22",
    "popularity": 22.889,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/lJ54frFq1NXvpvkP19bWwwFQ8uU.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "hitman-the-slaughter"
},

{
    "id": 210577,
    "title": "Garota Exemplar",
    "genre_ids": [
        9648,
        53,
        18
    ],
    "release_date": "2014-10-01",
    "popularity": 32.853,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/9i1ks2UQulcYvbuR1piGGxrlXlP.jpg",
    "runtime": 149,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "garota-exemplar"
},

{
    "id": 1088514,
    "title": "O Quarto ao Lado",
    "genre_ids": [
        18
    ],
    "release_date": "2024-10-07",
    "popularity": 22.695,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/xkR30rpo6Fl0jBZ6QKGR0GUARnK.jpg",
    "runtime": 107,
    "networks": [],
    "certification": "N/A",
    "slug": "o-quarto-ao-lado"
},

{
    "id": 398818,
    "title": "Me Chame Pelo Seu Nome",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2017-07-28",
    "popularity": 24.243,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/qnf5Onsk236CdE5Lff93IX69gHf.jpg",
    "runtime": 132,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "me-chame-pelo-seu-nome"
},

{
    "id": 561,
    "title": "Constantine",
    "genre_ids": [
        14,
        28,
        27
    ],
    "release_date": "2005-02-08",
    "popularity": 22.058,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/dd4uzgUAbBIiRW7dcY0AcgSWohJ.jpg",
    "runtime": 121,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "constantine"
},

{
    "id": 840326,
    "title": "Sisu: Uma História de Determinação",
    "genre_ids": [
        28,
        10752,
        12
    ],
    "release_date": "2022-09-09",
    "popularity": 20.897,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/z47Fl4WYfKBg1n1hfqxq05OVMdR.jpg",
    "runtime": 60,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "sisu-uma-histria-de-determinao"
},

{
    "id": 329,
    "title": "Jurassic Park: O Parque dos Dinossauros",
    "genre_ids": [
        12,
        878
    ],
    "release_date": "1993-06-11",
    "popularity": 18.922,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/mgjJ7FH4V3exsmoHwXrmsUhn0h1.jpg",
    "runtime": 127,
    "networks": [
        119,
        167,
        307
    ],
    "certification": "14",
    "slug": "jurassic-park-o-parque-dos-dinossauros"
},

{
    "id": 568124,
    "title": "Encanto",
    "genre_ids": [
        16,
        35,
        10751,
        14
    ],
    "release_date": "2021-10-13",
    "popularity": 29.463,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/nUG2CEEYbuvaARFUdyWXAIvM8RR.jpg",
    "runtime": 102,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "encanto"
},

{
    "id": 1238358,
    "title": "O Mau Pastor",
    "genre_ids": [
        53,
        80
    ],
    "release_date": "2024-02-23",
    "popularity": 26.663,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/6ltIIiEE9AzFBkV6JddzKFHG8OW.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "16",
    "slug": "o-mau-pastor"
},

{
    "id": 760774,
    "title": "Uma Vida: A História de Nicholas Winton",
    "genre_ids": [
        36,
        18
    ],
    "release_date": "2023-12-21",
    "popularity": 19.415,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/o65cLhzXPp9nBb5RvKRqLfZiMcH.jpg",
    "runtime": 109,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "uma-vida-a-histria-de-nicholas-winton"
},

{
    "id": 447273,
    "title": "Branca de Neve",
    "genre_ids": [
        10751,
        14
    ],
    "release_date": "2025-03-19",
    "popularity": 30.463,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/7fdf9LDtFDpuvOXbZ2hlaR0pFRg.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "branca-de-neve"
},

{
    "id": 1392117,
    "title": "Umami: O Sabor da Ambição",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-11",
    "popularity": 31.587,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/hgT250M6F0o0bUUTyXjEjof6knA.jpg",
    "runtime": 120,
    "networks": [],
    "certification": "N/A",
    "slug": "umami-o-sabor-da-ambio"
},

{
    "id": 467244,
    "title": "Zona de Interesse",
    "genre_ids": [
        18,
        36,
        10752
    ],
    "release_date": "2023-12-15",
    "popularity": 20.59,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/v8pTxM7Hqzkjb53lyv2isMj3G9.jpg",
    "runtime": 105,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "zona-de-interesse"
},

{
    "id": 1276210,
    "title": "Estación Rocafort",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2024-08-30",
    "popularity": 36.304,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/gOaNIKSGOdCV79Ot3KMqvs2A3Y8.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "estacin-rocafort"
},

{
    "id": 766507,
    "title": "O Predador: A Caçada",
    "genre_ids": [
        53,
        28,
        878
    ],
    "release_date": "2022-08-02",
    "popularity": 21.668,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/l3aEMk86DYR78g6u3M2SDCO8yNp.jpg",
    "runtime": 99,
    "networks": [
        337,
        119
    ],
    "certification": "16",
    "slug": "o-predador-a-caada"
},

{
    "id": 302946,
    "title": "O Contador",
    "genre_ids": [
        80,
        53,
        18
    ],
    "release_date": "2016-10-13",
    "popularity": 37.592,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/br5SjDttw1AwAiTfneWxZBBaqjC.jpg",
    "runtime": 127,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "o-contador"
},

{
    "id": 588555,
    "title": "Os Demónios do Meu Avô",
    "genre_ids": [
        16,
        18,
        14
    ],
    "release_date": "2022-09-21",
    "popularity": 18.708,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/ratQL3aRggqdlNvZmoH8ZUfqNlq.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "os-demnios-do-meu-av"
},

{
    "id": 564,
    "title": "A Múmia",
    "genre_ids": [
        12,
        28,
        14
    ],
    "release_date": "1999-04-16",
    "popularity": 22.372,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/x9WtRo3zf7p3K7ERdlpqlRgtYU6.jpg",
    "runtime": 125,
    "networks": [
        8,
        119,
        307,
        2156
    ],
    "certification": "12",
    "slug": "a-mmia"
},

{
    "id": 928480,
    "title": "Verão Monstruoso",
    "genre_ids": [
        12,
        14,
        9648,
        27
    ],
    "release_date": "2024-10-04",
    "popularity": 19.915,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/skM2u0a6P8c4pDERYK2y2iNst5l.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "vero-monstruoso"
},

{
    "id": 1287717,
    "title": "Não Entre",
    "genre_ids": [
        27
    ],
    "release_date": "2024-08-06",
    "popularity": 28.267,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/eb98CTRiY5x2mmXtwRCjiptZtaA.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "no-entre"
},

{
    "id": 760104,
    "title": "X: A Marca da Morte",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2022-03-17",
    "popularity": 19.661,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/As5dKK7fLOlCyVwjqoW5pyiDz6D.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "18",
    "slug": "x-a-marca-da-morte"
},

{
    "id": 330457,
    "title": "Frozen 2",
    "genre_ids": [
        10751,
        16,
        12,
        35,
        14
    ],
    "release_date": "2019-11-20",
    "popularity": 23.522,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/kgY7jbAxqn6iiFxApdkmpPaUxYW.jpg",
    "runtime": 103,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "frozen-2"
},

{
    "id": 8355,
    "title": "A Era do Gelo 3",
    "genre_ids": [
        16,
        35,
        10751,
        12
    ],
    "release_date": "2009-06-26",
    "popularity": 21.194,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/8TmTkDpCTBzWvH7iX6gRqlElMeu.jpg",
    "runtime": 94,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-era-do-gelo-3"
},

{
    "id": 893723,
    "title": "Patrulha Canina: Um Filme Superpoderoso",
    "genre_ids": [
        16,
        10751,
        28,
        878,
        35,
        18,
        12
    ],
    "release_date": "2023-09-21",
    "popularity": 23.936,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/mUirEoPDHqKYKzpfExHPvcnz6ME.jpg",
    "runtime": 92,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "patrulha-canina-um-filme-superpoderoso"
},

{
    "id": 466420,
    "title": "Assassinos da Lua das Flores",
    "genre_ids": [
        80,
        36,
        18
    ],
    "release_date": "2023-10-18",
    "popularity": 19.16,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/kBLMPD5BCmcrHKIhjZ86uWHZG5K.jpg",
    "runtime": 208,
    "networks": [
        350
    ],
    "certification": "14",
    "slug": "assassinos-da-lua-das-flores"
},

{
    "id": 1087822,
    "title": "Hellboy e o Homem Torto",
    "genre_ids": [
        14,
        27,
        28
    ],
    "release_date": "2024-08-29",
    "popularity": 25.897,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/9KxEyyDnuiDs3Er9nQgpJq9yk8g.jpg",
    "runtime": 99,
    "networks": [
        2156
    ],
    "certification": "16",
    "slug": "hellboy-e-o-homem-torto"
},

{
    "id": 19173,
    "title": "Diário Proibido",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2008-10-17",
    "popularity": 20.231,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/3cJs5LE54c9efaKAwmIQmmn53eF.jpg",
    "runtime": 102,
    "networks": [],
    "certification": "N/A",
    "slug": "dirio-proibido"
},

{
    "id": 508883,
    "title": "O Menino e a Garça",
    "genre_ids": [
        16,
        12,
        14,
        10751,
        18
    ],
    "release_date": "2023-07-14",
    "popularity": 33.85,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/f1Tgk09rIZ906260hUmnrOWRhhq.jpg",
    "runtime": 124,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "o-menino-e-a-gara"
},

{
    "id": 877817,
    "title": "Lobos",
    "genre_ids": [
        35,
        28,
        80
    ],
    "release_date": "2024-09-20",
    "popularity": 23.108,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/5LvefZZsapIsOIckLZHbYlwCAkm.jpg",
    "runtime": 100,
    "networks": [
        350
    ],
    "certification": "14",
    "slug": "lobos"
},

{
    "id": 527774,
    "title": "Raya e o Último Dragão",
    "genre_ids": [
        16,
        10751,
        14,
        28,
        12
    ],
    "release_date": "2021-03-03",
    "popularity": 24.829,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
    "runtime": 107,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "raya-e-o-ltimo-drago"
},

{
    "id": 1417030,
    "title": "Bloodsport",
    "genre_ids": [
        18,
        53,
        27,
        35
    ],
    "release_date": "2025-02-23",
    "popularity": 25.381,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/8uQnh0tDVI5jpZiM1qc0Vpp2SrL.jpg",
    "runtime": 15,
    "networks": [],
    "certification": "N/A",
    "slug": "bloodsport"
},

{
    "id": 955916,
    "title": "Lift: Roubo nas Alturas",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2024-01-12",
    "popularity": 18.467,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/ca74jjIYRVDdsnlWk8JzyVY49dE.jpg",
    "runtime": 107,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "lift-roubo-nas-alturas"
},

{
    "id": 1430993,
    "title": "Donor",
    "genre_ids": [
        53
    ],
    "release_date": "2025-02-22",
    "popularity": 22.693,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/8KehdGHWhWjqBNsI3xgi0toIQdi.jpg",
    "runtime": 21,
    "networks": [],
    "certification": "N/A",
    "slug": "donor"
},

{
    "id": 351523,
    "title": "동창회의 목적",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2015-08-06",
    "popularity": 21.476,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/AjlwGaT6tDs2fBIgFaepYiDhL6A.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 974250,
    "title": "Greedy People",
    "genre_ids": [
        35,
        9648,
        80
    ],
    "release_date": "2024-08-23",
    "popularity": 34.905,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/aIUZiciO0nMh8MrhmsTaMWZvEWK.jpg",
    "runtime": 113,
    "networks": [],
    "certification": "N/A",
    "slug": "greedy-people"
},

{
    "id": 335977,
    "title": "Indiana Jones e A Relíquia do Destino",
    "genre_ids": [
        12,
        28
    ],
    "release_date": "2023-06-25",
    "popularity": 22.885,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/v9hytHJF57wcrfgbMSSWWVRnqQx.jpg",
    "runtime": 144,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "indiana-jones-e-a-relquia-do-destino"
},

{
    "id": 1337395,
    "title": "Kiskisan",
    "genre_ids": [
        18
    ],
    "release_date": "2024-09-26",
    "popularity": 28.753,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zs7UlTjgUy0VfUC0qJPklLmpPnY.jpg",
    "runtime": 60,
    "networks": [],
    "certification": "N/A",
    "slug": "kiskisan"
},

{
    "id": 1084863,
    "title": "O Devorador de Almas",
    "genre_ids": [
        53,
        27,
        80,
        9648
    ],
    "release_date": "2024-04-24",
    "popularity": 32.771,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/9i53yANgWPeFGrFl8A7KsmjgLI9.jpg",
    "runtime": 111,
    "networks": [
        2106,
        2107
    ],
    "certification": "N/A",
    "slug": "o-devorador-de-almas"
},

{
    "id": 381288,
    "title": "Fragmentado",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2017-01-19",
    "popularity": 20.848,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/ztYvYWpSpFtzM2w5MwsmNzzQbJg.jpg",
    "runtime": 117,
    "networks": [
        119,
        307
    ],
    "certification": "14",
    "slug": "fragmentado"
},

{
    "id": 799583,
    "title": "Guerra Sem Regras",
    "genre_ids": [
        28,
        35,
        10752
    ],
    "release_date": "2024-04-18",
    "popularity": 22.009,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/xVlsA37y6w9COClNkvk6xq8yN5p.jpg",
    "runtime": 120,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "guerra-sem-regras"
},

{
    "id": 717196,
    "title": "Niko ja Myrskyporojen arvoitus",
    "genre_ids": [
        16,
        10751,
        14
    ],
    "release_date": "2024-10-07",
    "popularity": 29.341,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/4NUrmQjuNc1gXJfMFvGozHxUGgG.jpg",
    "runtime": 85,
    "networks": [
        484
    ],
    "certification": "N/A",
    "slug": "niko-ja-myrskyporojen-arvoitus"
},

{
    "id": 49051,
    "title": "O Hobbit: Uma Jornada Inesperada",
    "genre_ids": [
        12,
        14,
        28
    ],
    "release_date": "2012-12-12",
    "popularity": 24.231,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/ghSOjNRLpXjp9PB22CnGRuZgXJW.jpg",
    "runtime": 182,
    "networks": [
        2142,
        2141
    ],
    "certification": "12",
    "slug": "o-hobbit-uma-jornada-inesperada"
},

{
    "id": 1771,
    "title": "Capitão América: O Primeiro Vingador",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2011-07-22",
    "popularity": 30.435,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/f976JQnjMhCTa1yLXz7UH1pV4DG.jpg",
    "runtime": 124,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "capito-amrica-o-primeiro-vingador"
},

{
    "id": 955555,
    "title": "The Round Up: No Way Out",
    "genre_ids": [
        28,
        80,
        35,
        53,
        18
    ],
    "release_date": "2023-05-31",
    "popularity": 18.236,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/kPtNokhBtgwSp3MHaR3X4O0SPbF.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "16",
    "slug": "the-round-up-no-way-out"
},

{
    "id": 1066262,
    "title": "The Convert",
    "genre_ids": [
        28,
        18
    ],
    "release_date": "2024-03-14",
    "popularity": 31.579,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/44frNIZUfL8kYhxOGHeBJsyXUbW.jpg",
    "runtime": 119,
    "networks": [],
    "certification": "N/A",
    "slug": "the-convert"
},

{
    "id": 101,
    "title": "O Profissional",
    "genre_ids": [
        80,
        18,
        28
    ],
    "release_date": "1994-09-14",
    "popularity": 18.92,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/eIS5HF3wr7E6D1aABJ1IfK3siNF.jpg",
    "runtime": 111,
    "networks": [
        484,
        2156
    ],
    "certification": "14",
    "slug": "o-profissional"
},

{
    "id": 609681,
    "title": "As Marvels",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2023-11-08",
    "popularity": 26.651,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/wpp5KIwjtrKoWj5H0TSsJdqsDx7.jpg",
    "runtime": 156,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "as-marvels"
},

{
    "id": 896151,
    "title": "Blitz",
    "genre_ids": [
        10752,
        18,
        36
    ],
    "release_date": "2024-11-01",
    "popularity": 19.409,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/e9tyjbF2rugENtBolTtEhHOXgzD.jpg",
    "runtime": 120,
    "networks": [
        350
    ],
    "certification": "14",
    "slug": "blitz"
},

{
    "id": 8363,
    "title": "Superbad: É Hoje",
    "genre_ids": [
        35
    ],
    "release_date": "2007-03-20",
    "popularity": 20.59,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/vKFyD2wRl3qCKpbVWjIB3QAWo0K.jpg",
    "runtime": 113,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "superbad-hoje"
},

{
    "id": 1422209,
    "title": "Lint",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2025-02-23",
    "popularity": 21.666,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/59qImxxR1Z57xoQHINaNZQwQ8QX.jpg",
    "runtime": 113,
    "networks": [],
    "certification": "N/A",
    "slug": "lint"
},

{
    "id": 1063877,
    "title": "Não Se Mexa",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-10-24",
    "popularity": 27.263,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/yViacqKI37G5pL02tQ2cuEOUqdQ.jpg",
    "runtime": 90,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "no-se-mexa"
},

{
    "id": 14324,
    "title": "Território Virgem",
    "genre_ids": [
        12,
        28,
        35,
        10749
    ],
    "release_date": "2007-12-17",
    "popularity": 36.241,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/9SUk6RN9lNVt9OHMKFhMTQu2yx1.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "territrio-virgem"
},

{
    "id": 481871,
    "title": "엄마의 직업",
    "genre_ids": [
        18
    ],
    "release_date": "2017-07-27",
    "popularity": 18.708,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/oIoJrYsyg34fe66BWndCit1ekUD.jpg",
    "runtime": 79,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 242,
    "title": "O Poderoso Chefão: Parte III",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "1990-12-25",
    "popularity": 19.895,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/sLvNxyDfM9cHS3jwG0rEa7eR4lh.jpg",
    "runtime": 162,
    "networks": [
        531,
        307,
        484,
        582,
        1853,
        2156,
        2303
    ],
    "certification": "14",
    "slug": "o-poderoso-chefo-parte-iii"
},

{
    "id": 335984,
    "title": "Blade Runner 2049",
    "genre_ids": [
        878,
        18
    ],
    "release_date": "2017-10-04",
    "popularity": 37.499,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "runtime": 164,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "blade-runner-2049"
},

{
    "id": 559,
    "title": "Homem-Aranha 3",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2007-05-01",
    "popularity": 28.241,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/5831VrgpYNPEokBwxurLVpQ3twM.jpg",
    "runtime": 139,
    "networks": [
        8,
        119,
        167,
        1899,
        1796,
        1825
    ],
    "certification": "12",
    "slug": "homem-aranha-3"
},

{
    "id": 38575,
    "title": "Karatê Kid",
    "genre_ids": [
        28,
        12,
        18,
        10751
    ],
    "release_date": "2010-06-10",
    "popularity": 22.31,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/AbBlpGNj69gWQNKO0qg6QGDnbaW.jpg",
    "runtime": 140,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "10",
    "slug": "karat-kid"
},

{
    "id": 1209290,
    "title": "Liga da Justiça: Crise nas Infinitas Terras - Parte Três",
    "genre_ids": [
        16,
        878,
        28
    ],
    "release_date": "2024-07-15",
    "popularity": 23.903,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/xwmo4ZGTyGe82LL6E2yoCmf5OVv.jpg",
    "runtime": 98,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "12",
    "slug": "liga-da-justia-crise-nas-infinitas-terras-parte-trs"
},

{
    "id": 947891,
    "title": "Meu Eu do Futuro",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2024-09-13",
    "popularity": 25.867,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/auYvFnxhWzFxuhVQVSrDw8qkDAS.jpg",
    "runtime": 89,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "meu-eu-do-futuro"
},

{
    "id": 1141182,
    "title": "Die Alone",
    "genre_ids": [
        27,
        53,
        878
    ],
    "release_date": "2024-09-27",
    "popularity": 20.224,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/jg5WvZPpGpnTrwKbLAihf33OVSL.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "die-alone"
},

{
    "id": 1417870,
    "title": "UFC Fight Night 252: Cejudo vs. Song",
    "genre_ids": [
        28
    ],
    "release_date": "2025-02-22",
    "popularity": 23.512,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/2Hhtx7DSoiFvPbr3cxtgp191UAh.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "ufc-fight-night-252-cejudo-vs-song"
},

{
    "id": 78,
    "title": "Blade Runner: O Caçador de Andróides",
    "genre_ids": [
        878,
        18,
        53
    ],
    "release_date": "1982-06-25",
    "popularity": 19.656,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/iMlqdLeNYI2I63q7Fd2nvRbTCG9.jpg",
    "runtime": 117,
    "networks": [],
    "certification": "14",
    "slug": "blade-runner-o-caador-de-andrides"
},

{
    "id": 897087,
    "title": "Herói por Encomenda",
    "genre_ids": [
        28,
        35
    ],
    "release_date": "2023-10-05",
    "popularity": 21.19,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/zM8RkIxq7cJ1V6hOqKQLbHDgkRq.jpg",
    "runtime": 108,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "heri-por-encomenda"
},

{
    "id": 976573,
    "title": "Elementos",
    "genre_ids": [
        16,
        35,
        10751,
        14,
        10749
    ],
    "release_date": "2023-06-14",
    "popularity": 33.803,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/gRkfQ25Hd5afFSzYN2zsIoM1XQS.jpg",
    "runtime": 102,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "elementos"
},

{
    "id": 490132,
    "title": "Green Book: O Guia",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2018-11-16",
    "popularity": 19.153,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/u9dldwRwQjTZGlIxKaAtAPLAjOv.jpg",
    "runtime": 131,
    "networks": [
        119
    ],
    "certification": "12",
    "slug": "green-book-o-guia"
},

{
    "id": 787699,
    "title": "Wonka",
    "genre_ids": [
        35,
        10751,
        14
    ],
    "release_date": "2023-12-06",
    "popularity": 24.823,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/uQWEomz2wLoijrvoFaJt2gUMXRu.jpg",
    "runtime": 120,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "10",
    "slug": "wonka"
},

{
    "id": 278927,
    "title": "Mogli: O Menino Lobo",
    "genre_ids": [
        10751,
        12,
        18,
        14
    ],
    "release_date": "2016-04-07",
    "popularity": 18.058,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/5qf7bJm1aEtTQ7Ce0uPxMRQ9IAe.jpg",
    "runtime": 106,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "mogli-o-menino-lobo"
},

{
    "id": 980489,
    "title": "Gran Turismo: De Jogador a Corredor",
    "genre_ids": [
        12,
        28,
        18
    ],
    "release_date": "2023-08-09",
    "popularity": 23.096,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/qU60nhBRbKU23gIGrZi2CvUj6MQ.jpg",
    "runtime": 135,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "gran-turismo-de-jogador-a-corredor"
},

{
    "id": 938614,
    "title": "Entrevista com o Demônio",
    "genre_ids": [
        27
    ],
    "release_date": "2024-03-19",
    "popularity": 34.749,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/blckaGzdEJ4PdG5RxZPcb77VYFV.jpg",
    "runtime": 93,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "entrevista-com-o-demnio"
},

{
    "id": 851644,
    "title": "Garota do Século 20",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2022-10-06",
    "popularity": 25.378,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/uy3NhZq5IMw9c7vSoP2Z1GsQOJo.jpg",
    "runtime": 121,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "garota-do-sculo-20"
},

{
    "id": 429617,
    "title": "Homem-Aranha: Longe de Casa",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2019-06-28",
    "popularity": 28.744,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/tX0o4AdHpidgniTWwfzK0dNTKrc.jpg",
    "runtime": 130,
    "networks": [
        8,
        167,
        1796
    ],
    "certification": "10",
    "slug": "homem-aranha-longe-de-casa"
},

{
    "id": 585083,
    "title": "Hotel Transilvânia: Transformonstrão",
    "genre_ids": [
        16,
        35,
        10751,
        12,
        14
    ],
    "release_date": "2022-01-31",
    "popularity": 20.8,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/9PbtCo5IIkd26WPQfZUpPyn6fTz.jpg",
    "runtime": 87,
    "networks": [
        119
    ],
    "certification": "10",
    "slug": "hotel-transilvnia-transformonstro"
},

{
    "id": 514593,
    "title": "Você Deveria Ter Partido",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2020-06-18",
    "popularity": 21.467,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/48g3GxLLekaan7agQAOd7i386qK.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "16",
    "slug": "voc-deveria-ter-partido"
},

{
    "id": 1724,
    "title": "O Incrível Hulk",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2008-06-12",
    "popularity": 32.715,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/pA6dp7I97HoTcZ30xKLxkYj59w2.jpg",
    "runtime": 120,
    "networks": [],
    "certification": "10",
    "slug": "o-incrvel-hulk"
},

{
    "id": 824003,
    "title": "Diabolik chi sei?",
    "genre_ids": [
        80,
        28,
        9648,
        53
    ],
    "release_date": "2023-11-30",
    "popularity": 18.463,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/1DAXwi4y941ryPoGbzUlFEEiPAo.jpg",
    "runtime": 124,
    "networks": [],
    "certification": "N/A",
    "slug": "diabolik-chi-sei"
},

{
    "id": 12155,
    "title": "Alice no País das Maravilhas",
    "genre_ids": [
        10751,
        14,
        12
    ],
    "release_date": "2010-03-03",
    "popularity": 22.642,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/bvD0kvICG7hP03vrNvylUINhafM.jpg",
    "runtime": 109,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "alice-no-pas-das-maravilhas"
},

{
    "id": 763215,
    "title": "Donzela",
    "genre_ids": [
        14,
        28,
        12
    ],
    "release_date": "2024-03-07",
    "popularity": 31.411,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ub4EHdVBVm3nHJiamU0gGcKS4ae.jpg",
    "runtime": 110,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "donzela"
},

{
    "id": 1151949,
    "title": "Através das Sombras",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2024-09-10",
    "popularity": 29.27,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/784VvfP6MqCK638vvREnb7Xgkre.jpg",
    "runtime": 143,
    "networks": [
        8,
        1796
    ],
    "certification": "18",
    "slug": "atravs-das-sombras"
},

{
    "id": 8681,
    "title": "Busca Implacável",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2008-02-18",
    "popularity": 21.979,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/q5Lr8E4HSK7Lc4zqWtgtYsM1iJA.jpg",
    "runtime": 94,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "busca-implacvel"
},

{
    "id": 166426,
    "title": "Piratas do Caribe: A Vingança de Salazar",
    "genre_ids": [
        12,
        28,
        14
    ],
    "release_date": "2017-05-23",
    "popularity": 24.191,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/eAFHzqf9jtvG6HbxykBCSQLUNWF.jpg",
    "runtime": 129,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "piratas-do-caribe-a-vingana-de-salazar"
},

{
    "id": 454983,
    "title": "A Barraca do Beijo",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2018-05-11",
    "popularity": 20.577,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/8TbFTREtgpTOMpxQ5ZJjiZIlVS1.jpg",
    "runtime": 105,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "a-barraca-do-beijo"
},

{
    "id": 1431171,
    "title": "Taking Out The Trash",
    "genre_ids": [
        53
    ],
    "release_date": "2025-02-23",
    "popularity": 22.884,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/pOeyNaLdCHiRsi5ZOOyLyV6YKxH.jpg",
    "runtime": 1,
    "networks": [],
    "certification": "N/A",
    "slug": "taking-out-the-trash"
},

{
    "id": 574475,
    "title": "Premonição 6: Laços de Sangue",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2025-05-14",
    "popularity": 18.213,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/3bXGxlByYWgsXYTyGVcYRqDh8gB.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "premonio-6-laos-de-sangue"
},

{
    "id": 530385,
    "title": "Midsommar: O Mal Não Espera a Noite",
    "genre_ids": [
        27,
        18,
        9648
    ],
    "release_date": "2019-07-03",
    "popularity": 19.406,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/sZ6Bjq1VVfiTrALlev0ganz7uka.jpg",
    "runtime": 148,
    "networks": [
        11,
        2142,
        2141,
        201
    ],
    "certification": "18",
    "slug": "midsommar-o-mal-no-espera-a-noite"
},

{
    "id": 10198,
    "title": "A Princesa e o Sapo",
    "genre_ids": [
        16,
        10749,
        14,
        10751
    ],
    "release_date": "2009-12-08",
    "popularity": 27.26,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/7uyZwjeHH9JmfULo4WzMsDpfW0S.jpg",
    "runtime": 98,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-princesa-e-o-sapo"
},

{
    "id": 1145758,
    "title": "Birder",
    "genre_ids": [
        53,
        18
    ],
    "release_date": "2023-08-11",
    "popularity": 17.834,
    "vote_average": 3.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/145oDHaikwhDYuS2BZauZ8u4zTT.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "birder"
},

{
    "id": 447332,
    "title": "Um Lugar Silencioso",
    "genre_ids": [
        27,
        18,
        878
    ],
    "release_date": "2018-04-03",
    "popularity": 26.621,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/tH0YRWQciL1pkwnLR7cZ7xSh7oA.jpg",
    "runtime": 90,
    "networks": [
        531,
        1853,
        2303
    ],
    "certification": "14",
    "slug": "um-lugar-silencioso"
},

{
    "id": 974262,
    "title": "Descendentes: A Ascensão de Copas",
    "genre_ids": [
        14,
        12,
        10751,
        35
    ],
    "release_date": "2024-07-11",
    "popularity": 30.407,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/pOb3V9j4pt546e93CLMYudp9uZq.jpg",
    "runtime": 94,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "descendentes-a-ascenso-de-copas"
},

{
    "id": 870360,
    "title": "The Day the Earth Blew Up: A Looney Tunes Movie",
    "genre_ids": [
        16,
        35,
        878
    ],
    "release_date": "2024-08-01",
    "popularity": 19.879,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/s2lB1kaYCdGSnZX5meQCiOR6HfX.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "the-day-the-earth-blew-up-a-looney-tunes-movie"
},

{
    "id": 11324,
    "title": "Ilha do Medo",
    "genre_ids": [
        18,
        53,
        9648
    ],
    "release_date": "2010-02-14",
    "popularity": 36.235,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/qnWJFFkRv61e030Yc4xG8oVZUqG.jpg",
    "runtime": 138,
    "networks": [],
    "certification": "16",
    "slug": "ilha-do-medo"
},

{
    "id": 646385,
    "title": "Pânico",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2022-01-12",
    "popularity": 18.696,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/oadFpqhJ26yxqIlYcGioZ2W3EHN.jpg",
    "runtime": 114,
    "networks": [],
    "certification": "16",
    "slug": "pnico"
},

{
    "id": 1062807,
    "title": "SPY x FAMILY CÓDIGO: Branco",
    "genre_ids": [
        16,
        35,
        12,
        28
    ],
    "release_date": "2023-12-22",
    "popularity": 18.916,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/thGaW3UXecNJAEdB6rs8sC45JWv.jpg",
    "runtime": 110,
    "networks": [
        283,
        1968
    ],
    "certification": "14",
    "slug": "spy-x-family-cdigo-branco"
},

{
    "id": 181808,
    "title": "Star Wars: Episódio VIII - Os Últimos Jedi",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2017-12-13",
    "popularity": 21.659,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/5dGufuaIG5vNcxPm8QPij5MSPeQ.jpg",
    "runtime": 150,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "star-wars-episdio-viii-os-ltimos-jedi"
},

{
    "id": 585,
    "title": "Monstros S.A.",
    "genre_ids": [
        16,
        35,
        10751
    ],
    "release_date": "2001-11-01",
    "popularity": 37.47,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/mKiG037CiuSZqL1gxsDHyBj28lg.jpg",
    "runtime": 92,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "monstros-sa"
},

{
    "id": 150689,
    "title": "Cinderela",
    "genre_ids": [
        10749,
        14,
        10751,
        18
    ],
    "release_date": "2015-03-06",
    "popularity": 28.204,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/4DsfRsCxrhkHQHGLeY9m8oi9q46.jpg",
    "runtime": 105,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "cinderela"
},

{
    "id": 954,
    "title": "Missão: Impossível",
    "genre_ids": [
        12,
        28,
        53
    ],
    "release_date": "1996-05-22",
    "popularity": 17.654,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/umMK2yDMbBeIAOR480WqnShmF1L.jpg",
    "runtime": 105,
    "networks": [
        337,
        531,
        1853,
        2156,
        2303
    ],
    "certification": "14",
    "slug": "misso-impossvel"
},

{
    "id": 137113,
    "title": "No Limite do Amanhã",
    "genre_ids": [
        28,
        878
    ],
    "release_date": "2014-05-27",
    "popularity": 22.309,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/ibubeKZuo4ZI2Zu2Dm2s0gmMvuk.jpg",
    "runtime": 113,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "no-limite-do-amanh"
},

{
    "id": 414906,
    "title": "Batman",
    "genre_ids": [
        80,
        9648,
        53
    ],
    "release_date": "2022-03-01",
    "popularity": 33.79,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg",
    "runtime": 185,
    "networks": [
        119,
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "batman"
},

{
    "id": 942890,
    "title": "Encontro Macabro",
    "genre_ids": [
        27,
        53,
        35,
        9648
    ],
    "release_date": "2022-09-09",
    "popularity": 25.867,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/mab0O6nM3vgPi9XEbxNMn5Ey9h7.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "16",
    "slug": "encontro-macabro"
},

{
    "id": 54989,
    "title": "Amor Estranho Amor",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "1982-01-11",
    "popularity": 23.898,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/kmsER1iY9y9B9Dc5uBnfUfy8Ys0.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "amor-estranho-amor"
},

{
    "id": 258230,
    "title": "Sete Minutos Depois da Meia-Noite",
    "genre_ids": [
        14,
        12,
        10751
    ],
    "release_date": "2016-10-07",
    "popularity": 19.124,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/scxpDGYLwX7Y8e57kZDbE5qvHwF.jpg",
    "runtime": 108,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "sete-minutos-depois-da-meia-noite"
},

{
    "id": 423108,
    "title": "Invocação do Mal 3: A Ordem do Demônio",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2021-05-25",
    "popularity": 20.197,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/tLmaOXT9rMb17ISQDURKQIu3Okk.jpg",
    "runtime": 111,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "invocao-do-mal-3-a-ordem-do-demnio"
},

{
    "id": 1271673,
    "title": "The Wheels of Heaven",
    "genre_ids": [
        53
    ],
    "release_date": "2025-02-23",
    "popularity": 23.512,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zQAkJw3wNjYRrhH1fnITnYa2LRW.jpg",
    "runtime": 116,
    "networks": [],
    "certification": "N/A",
    "slug": "the-wheels-of-heaven"
},

{
    "id": 1111491,
    "title": "Katie's Mom",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2023-07-02",
    "popularity": 21.179,
    "vote_average": 3.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/mhQTMw2YyGqsMR1DLNxIZY2516j.jpg",
    "runtime": 111,
    "networks": [],
    "certification": "N/A",
    "slug": "katies-mom"
},

{
    "id": 869291,
    "title": "Cuckoo: O Medo Chama",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2024-08-02",
    "popularity": 19.627,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/w7Z0x9Mw3lsjnEANC3BffQfx021.jpg",
    "runtime": 103,
    "networks": [],
    "certification": "14",
    "slug": "cuckoo-o-medo-chama"
},

{
    "id": 62211,
    "title": "Universidade Monstros",
    "genre_ids": [
        16,
        10751
    ],
    "release_date": "2013-06-19",
    "popularity": 18.058,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/gRNSCtyFGspt1iVKWzQZ9sJiTYW.jpg",
    "runtime": 104,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "universidade-monstros"
},

{
    "id": 106,
    "title": "O Predador",
    "genre_ids": [
        878,
        28,
        12,
        53
    ],
    "release_date": "1987-06-12",
    "popularity": 23.089,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/2B6yDvD0hre65fyRi9LC3UJ9uSq.jpg",
    "runtime": 107,
    "networks": [
        337,
        499
    ],
    "certification": "16",
    "slug": "o-predador"
},

{
    "id": 10681,
    "title": "WALL-E",
    "genre_ids": [
        16,
        10751,
        878
    ],
    "release_date": "2008-06-22",
    "popularity": 24.745,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/2TfYp0eMPrcKNjX6PTKGGQODjfF.jpg",
    "runtime": 97,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "wall-e"
},

{
    "id": 49013,
    "title": "Carros 2",
    "genre_ids": [
        16,
        10751,
        12,
        35
    ],
    "release_date": "2011-06-11",
    "popularity": 25.371,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/fIKaabvE40T39nOIngcZPcPJeYe.jpg",
    "runtime": 106,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "carros-2"
},

{
    "id": 746036,
    "title": "O Dublê",
    "genre_ids": [
        28,
        35,
        10749
    ],
    "release_date": "2024-04-24",
    "popularity": 34.729,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/wtmzcE5Pfk5ZXnPHRAUPZnrq5U0.jpg",
    "runtime": 127,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "o-dubl"
},

{
    "id": 116149,
    "title": "As Aventuras de Paddington",
    "genre_ids": [
        35,
        12,
        10751
    ],
    "release_date": "2014-11-24",
    "popularity": 28.737,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/5OkckWBfVPajkIye5PqommeLtDS.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "L",
    "slug": "as-aventuras-de-paddington"
},

{
    "id": 686,
    "title": "Contato",
    "genre_ids": [
        18,
        878,
        9648
    ],
    "release_date": "1997-07-11",
    "popularity": 20.764,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/jUihxs38jpwhc6rO256h4iRdqNb.jpg",
    "runtime": 150,
    "networks": [],
    "certification": "L",
    "slug": "contato"
},

{
    "id": 9757,
    "title": "Norbit - Uma Comédia de Peso",
    "genre_ids": [
        35
    ],
    "release_date": "2007-02-08",
    "popularity": 21.463,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/sExfA7YUSXQJRGmOZ9v52lxd16I.jpg",
    "runtime": 102,
    "networks": [
        8,
        2156
    ],
    "certification": "N/A",
    "slug": "norbit-uma-comdia-de-peso"
},

{
    "id": 1331375,
    "title": "Dominique",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-10-11",
    "popularity": 29.245,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/jvug7Esd89yNLJwGvUfeQ9j69cE.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "18",
    "slug": "dominique"
},

{
    "id": 91314,
    "title": "Transformers: A Era da Extinção",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2014-06-25",
    "popularity": 22.636,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/cLNIRQ2oyJhaUId41aGmSDfD5MI.jpg",
    "runtime": 167,
    "networks": [
        337,
        8,
        531,
        307,
        1796,
        1853,
        2156,
        2303
    ],
    "certification": "12",
    "slug": "transformers-a-era-da-extino"
},

{
    "id": 1262983,
    "title": "MadS",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-10-25",
    "popularity": 17.36,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/61Ub8r6YibJEPKig9g6m1r3rTgG.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "mads"
},

{
    "id": 146233,
    "title": "Os Suspeitos",
    "genre_ids": [
        18,
        53,
        80
    ],
    "release_date": "2013-09-19",
    "popularity": 24.191,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/30YtzPOimO7eG30r8K8rUkqTGNj.jpg",
    "runtime": 153,
    "networks": [
        11,
        701,
        201
    ],
    "certification": "16",
    "slug": "os-suspeitos"
},

{
    "id": 284054,
    "title": "Pantera Negra",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2018-02-13",
    "popularity": 31.354,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/ubXNpxL2ASSzY0f8Hxv08pOsV2L.jpg",
    "runtime": 134,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "pantera-negra"
},

{
    "id": 259316,
    "title": "Animais Fantásticos e Onde Habitam",
    "genre_ids": [
        14,
        12
    ],
    "release_date": "2016-11-16",
    "popularity": 18.442,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/hi04DrUYrNInswI8Kaf9qsTkIDt.jpg",
    "runtime": 132,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "animais-fantsticos-e-onde-habitam"
},

{
    "id": 23168,
    "title": "Atração Perigosa",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "2010-09-15",
    "popularity": 20.573,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/g1IF1RQasgk0o4CTi6AxdZeSAvR.jpg",
    "runtime": 105,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "atrao-perigosa"
},

{
    "id": 38234,
    "title": "O Imbatível III: Redenção",
    "genre_ids": [
        28,
        53,
        80,
        18
    ],
    "release_date": "2010-04-17",
    "popularity": 18.211,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/i1fetl7jL48JUIUt2PZFlCA5Of.jpg",
    "runtime": 96,
    "networks": [
        2106,
        2107
    ],
    "certification": "N/A",
    "slug": "o-imbatvel-iii-redeno"
},

{
    "id": 240,
    "title": "O Poderoso Chefão: Parte II",
    "genre_ids": [
        18,
        80
    ],
    "release_date": "1974-12-20",
    "popularity": 32.712,
    "vote_average": 8.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/7g6wvsWHxBQujUcSXvZLhdFpDUy.jpg",
    "runtime": 202,
    "networks": [
        531,
        307,
        484,
        582,
        1853,
        2303
    ],
    "certification": "14",
    "slug": "o-poderoso-chefo-parte-ii"
},

{
    "id": 438695,
    "title": "Sing 2",
    "genre_ids": [
        16,
        10751,
        10402,
        35
    ],
    "release_date": "2021-12-01",
    "popularity": 22.843,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/bamgEHSfZRMtFHkicCe9jgRad5P.jpg",
    "runtime": 110,
    "networks": [
        484
    ],
    "certification": "L",
    "slug": "sing-2"
},

{
    "id": 12594,
    "title": "O Mestre dos Desejos 2",
    "genre_ids": [
        14,
        27
    ],
    "release_date": "1999-03-12",
    "popularity": 30.397,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/iXxOWbAGdrF04uCajr2fCGHKcKn.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "o-mestre-dos-desejos-2"
},

{
    "id": 284053,
    "title": "Thor: Ragnarok",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2017-10-02",
    "popularity": 26.531,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/3MZlw0ztDak4ATX2FqA5qUh4DfN.jpg",
    "runtime": 131,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "thor-ragnarok"
},

{
    "id": 1328814,
    "title": "Amityville: Onde o Eco Mora",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2024-10-28",
    "popularity": 19.401,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/5FgWREg7fXnhxtK6ylXyJokXj5s.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "amityville-onde-o-eco-mora"
},

{
    "id": 524434,
    "title": "Eternos",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2021-11-03",
    "popularity": 21.974,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg",
    "runtime": 157,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "eternos"
},

{
    "id": 44896,
    "title": "Rango",
    "genre_ids": [
        16,
        35,
        10751,
        37,
        12
    ],
    "release_date": "2011-03-02",
    "popularity": 19.877,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/e5kYzP2hljfdooEzl1lskWn7yoj.jpg",
    "runtime": 111,
    "networks": [
        2156
    ],
    "certification": "10",
    "slug": "rango"
},

{
    "id": 239241,
    "title": "くノ一忍法帖II 聖少女の秘宝",
    "genre_ids": [
        28
    ],
    "release_date": "1992-08-21",
    "popularity": 27.247,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/fLXSe7VuB630VoJ39lTPCiwFoXq.jpg",
    "runtime": 81,
    "networks": [],
    "certification": "N/A",
    "slug": "ii-"
},

{
    "id": 7555,
    "title": "Rambo IV",
    "genre_ids": [
        28,
        53,
        10752
    ],
    "release_date": "2008-01-24",
    "popularity": 17.834,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/2NbmBzgG1chI3fS31HHfZEEsApw.jpg",
    "runtime": 92,
    "networks": [
        8,
        119
    ],
    "certification": "18",
    "slug": "rambo-iv"
},

{
    "id": 324857,
    "title": "Homem-Aranha: No Aranhaverso",
    "genre_ids": [
        16,
        28,
        12,
        878
    ],
    "release_date": "2018-12-06",
    "popularity": 36.173,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/sizv4fncWiCe8i5jWCA8xfqtCB9.jpg",
    "runtime": 117,
    "networks": [
        8,
        119,
        167,
        1796
    ],
    "certification": "10",
    "slug": "homem-aranha-no-aranhaverso"
},

{
    "id": 1271,
    "title": "300",
    "genre_ids": [
        28,
        12,
        10752
    ],
    "release_date": "2007-03-07",
    "popularity": 18.683,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/h7Lcio0c9ohxPhSZg42eTlKIVVY.jpg",
    "runtime": 116,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "300"
},

{
    "id": 1086747,
    "title": "Os Observadores",
    "genre_ids": [
        14,
        27,
        9648
    ],
    "release_date": "2024-06-06",
    "popularity": 17.159,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/zBjRWR2dl7S1OLd9YBXNQDy2cO9.jpg",
    "runtime": 102,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "os-observadores"
},

{
    "id": 93456,
    "title": "Meu Malvado Favorito 2",
    "genre_ids": [
        16,
        35,
        10751
    ],
    "release_date": "2013-06-26",
    "popularity": 18.913,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/iuo55j52aC6sKx3MkYxZZFC7wH6.jpg",
    "runtime": 98,
    "networks": [
        8,
        119,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "meu-malvado-favorito-2"
},

{
    "id": 629,
    "title": "Os Suspeitos",
    "genre_ids": [
        18,
        80,
        53
    ],
    "release_date": "1995-07-19",
    "popularity": 21.653,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/6dUjquPiLtdDgcMWJ4mgoEmkaFJ.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "16",
    "slug": "os-suspeitos"
},

{
    "id": 14160,
    "title": "Up: Altas Aventuras",
    "genre_ids": [
        16,
        35,
        10751,
        12
    ],
    "release_date": "2009-05-28",
    "popularity": 28.156,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/6FnpYYl90HeR2tnAgOTaa7jk8oD.jpg",
    "runtime": 96,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "up-altas-aventuras"
},

{
    "id": 122906,
    "title": "Questão de Tempo",
    "genre_ids": [
        18,
        10749,
        14
    ],
    "release_date": "2013-09-04",
    "popularity": 17.605,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/h3K9Mg9wRcs2gnK6QNfBAXyPMYQ.jpg",
    "runtime": 123,
    "networks": [
        119,
        307
    ],
    "certification": "N/A",
    "slug": "questo-de-tempo"
},

{
    "id": 1196943,
    "title": "छावा",
    "genre_ids": [
        36,
        28,
        18
    ],
    "release_date": "2025-02-14",
    "popularity": 37.45,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/36yid6tJig95GEOrpTcXQatsKrS.jpg",
    "runtime": 161,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 247136,
    "title": "M家の新妻 変態洗礼",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2009-03-27",
    "popularity": 23.437,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/2oVfD5rUV2EElbQ11ds2Vf5nRaZ.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "m-"
},

{
    "id": 881415,
    "title": "Love Me",
    "genre_ids": [
        878,
        18,
        10749
    ],
    "release_date": "2025-01-31",
    "popularity": 33.784,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/uX8Z3qWJ5OjV1uP7yT6yRlw9UL9.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "love-me"
},

{
    "id": 372049,
    "title": "내 친구의 아내",
    "genre_ids": [
        10749
    ],
    "release_date": "2015-12-03",
    "popularity": 19.118,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/6BZKRq3bvTOuG4G01H1jcE0F5TG.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 1091,
    "title": "O Enigma de Outro Mundo",
    "genre_ids": [
        27,
        9648,
        878
    ],
    "release_date": "1982-06-25",
    "popularity": 21.154,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/bazlgJAKWCBF7OllC3JtyJ2DV1n.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "16",
    "slug": "o-enigma-de-outro-mundo"
},

{
    "id": 9502,
    "title": "Kung Fu Panda",
    "genre_ids": [
        28,
        12,
        16,
        10751,
        35
    ],
    "release_date": "2008-06-04",
    "popularity": 23.887,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/f6hXVGOjmwrmMjlPFHgXdFEmA8Y.jpg",
    "runtime": 95,
    "networks": [
        8,
        119,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "kung-fu-panda"
},

{
    "id": 1329336,
    "title": "Os Caras Malvados: Assalto Assombrado",
    "genre_ids": [
        16,
        35
    ],
    "release_date": "2024-10-02",
    "popularity": 25.862,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tbR70ceR2Qw2fNMDj1cvOhmTfwa.jpg",
    "runtime": 24,
    "networks": [
        8
    ],
    "certification": "L",
    "slug": "os-caras-malvados-assalto-assombrado"
},

{
    "id": 420634,
    "title": "Aterrorizante",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2018-01-25",
    "popularity": 19.627,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/mVgilmJLovxTFsX19Yto3ht2qc.jpg",
    "runtime": 82,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "aterrorizante"
},

{
    "id": 209112,
    "title": "Batman vs Superman: A Origem da Justiça",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2016-03-23",
    "popularity": 20.177,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/f43gE7oFn3nCUZX3FRw0jVQK8GK.jpg",
    "runtime": 151,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "batman-vs-superman-a-origem-da-justia"
},

{
    "id": 1397854,
    "title": "O Truque do Amor",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2025-01-01",
    "popularity": 18.033,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/gi6xUdJgh2OyF4yM7YAGGwKgKYS.jpg",
    "runtime": 101,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "o-truque-do-amor"
},

{
    "id": 360920,
    "title": "O Grinch",
    "genre_ids": [
        16,
        10751,
        35,
        14
    ],
    "release_date": "2018-11-08",
    "popularity": 23.086,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/rmXN4DgZrGNxrUaSyR3wE7sG78m.jpg",
    "runtime": 85,
    "networks": [
        8,
        119,
        307,
        1796
    ],
    "certification": "L",
    "slug": "o-grinch"
},

{
    "id": 61791,
    "title": "Planeta dos Macacos: A Origem",
    "genre_ids": [
        53,
        28,
        18,
        878
    ],
    "release_date": "2011-08-03",
    "popularity": 16.91,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/qxe4ONZAgtC0mfsIuOyqVU9JREj.jpg",
    "runtime": 104,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "planeta-dos-macacos-a-origem"
},

{
    "id": 9732,
    "title": "O Rei Leão II: O Reino de Simba",
    "genre_ids": [
        10751,
        12,
        16,
        28
    ],
    "release_date": "1998-10-24",
    "popularity": 24.744,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/9GB2FntD6nBGx1EsKKOtR7v4Tza.jpg",
    "runtime": 81,
    "networks": [
        337
    ],
    "certification": "A",
    "slug": "o-rei-leo-ii-o-reino-de-simba"
},

{
    "id": 9820,
    "title": "Operação Cupido",
    "genre_ids": [
        35,
        10751,
        10749
    ],
    "release_date": "1998-07-28",
    "popularity": 25.371,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/ztIUJ94m2lH7G2utUJ9AzJhTSvr.jpg",
    "runtime": 127,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "operao-cupido"
},

{
    "id": 10020,
    "title": "A Bela e a Fera",
    "genre_ids": [
        10749,
        10751,
        16,
        14
    ],
    "release_date": "1991-10-22",
    "popularity": 28.673,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/4Fu9voTUOBXuWaKrOIEyfgzgQ0i.jpg",
    "runtime": 110,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-bela-e-a-fera"
},

{
    "id": 337339,
    "title": "Velozes & Furiosos 8",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2017-04-12",
    "popularity": 20.741,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/1wcMoiMZ2VxrrWswuarI7g9m9nN.jpg",
    "runtime": 136,
    "networks": [
        8,
        119,
        307,
        1796,
        2156
    ],
    "certification": "14",
    "slug": "velozes-furiosos-8"
},

{
    "id": 197158,
    "title": "Pornô!",
    "genre_ids": [
        18,
        27,
        14,
        35
    ],
    "release_date": "1981-01-01",
    "popularity": 34.694,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/5YEd5kfXK8uoM2bzSYtPc14az82.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "N/A",
    "slug": "porn"
},

{
    "id": 1208808,
    "title": "Turno nocturno",
    "genre_ids": [
        27
    ],
    "release_date": "2024-10-31",
    "popularity": 22.628,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/qFPSQLIb922GT0pRsesu3sEwN91.jpg",
    "runtime": 107,
    "networks": [],
    "certification": "N/A",
    "slug": "turno-nocturno"
},

{
    "id": 1027973,
    "title": "百恵の唇　愛獣",
    "genre_ids": [
        18
    ],
    "release_date": "1980-12-26",
    "popularity": 29.235,
    "vote_average": 2.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/f99W2eAj7EhaQV2tTg9i6yOfnbx.jpg",
    "runtime": 69,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 32657,
    "title": "Percy Jackson e o Ladrão de Raios",
    "genre_ids": [
        12,
        14,
        10751
    ],
    "release_date": "2010-02-01",
    "popularity": 21.448,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/bcTRDr6wTCEjSeXCGEmHrGhwPqf.jpg",
    "runtime": 119,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "percy-jackson-e-o-ladro-de-raios"
},

{
    "id": 1415990,
    "title": "Reunion",
    "genre_ids": [
        27,
        18
    ],
    "release_date": "2025-02-22",
    "popularity": 22.301,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/qM9sHlPdfpmwikPmgDH6TjWyNpv.jpg",
    "runtime": 21,
    "networks": [],
    "certification": "N/A",
    "slug": "reunion"
},

{
    "id": 502235,
    "title": "동창회의 목적 3",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2018-02-20",
    "popularity": 17.349,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/nEwZspwNTkYkV75rvKlfGmvQTyr.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "-3"
},

{
    "id": 1393382,
    "title": "A Vingança do Popeye",
    "genre_ids": [
        27
    ],
    "release_date": "2025-02-13",
    "popularity": 16.741,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/aHHCXbPjI6xHJoo5fkBNmPm2lo1.jpg",
    "runtime": 79,
    "networks": [],
    "certification": "N/A",
    "slug": "a-vingana-do-popeye"
},

{
    "id": 9806,
    "title": "Os Incríveis",
    "genre_ids": [
        28,
        12,
        16,
        10751
    ],
    "release_date": "2004-10-27",
    "popularity": 24.19,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/9u27l1k3aUj774xOGCCaVX3iFDu.jpg",
    "runtime": 115,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "os-incrveis"
},

{
    "id": 659956,
    "title": "Desafie a Escuridão",
    "genre_ids": [
        18
    ],
    "release_date": "2025-01-23",
    "popularity": 32.477,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/s1qCaXeiYABTxqFmiMEpD1xvywW.jpg",
    "runtime": 112,
    "networks": [],
    "certification": "16",
    "slug": "desafie-a-escurido"
},

{
    "id": 1930,
    "title": "O Espetacular Homem-Aranha",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2012-06-23",
    "popularity": 31.343,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/yfhAR1YjC8j3Ocr4q7AlGIOM34l.jpg",
    "runtime": 136,
    "networks": [
        8,
        119,
        167,
        1899,
        1796,
        1825
    ],
    "certification": "10",
    "slug": "o-espetacular-homem-aranha"
},

{
    "id": 510,
    "title": "Um Estranho no Ninho",
    "genre_ids": [
        18
    ],
    "release_date": "1975-11-19",
    "popularity": 18.437,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/nqz0NHRmbc57HZdZxi66shMzGKO.jpg",
    "runtime": 133,
    "networks": [
        1899
    ],
    "certification": "14",
    "slug": "um-estranho-no-ninho"
},

{
    "id": 254128,
    "title": "Terremoto: A Falha de San Andreas",
    "genre_ids": [
        28,
        18,
        53
    ],
    "release_date": "2015-05-27",
    "popularity": 20.545,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/y0Xi03TuBe5PMylesEmKSVguSkN.jpg",
    "runtime": 114,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "terremoto-a-falha-de-san-andreas"
},

{
    "id": 353486,
    "title": "Jumanji: Bem-Vindo à Selva",
    "genre_ids": [
        12,
        35,
        14
    ],
    "release_date": "2017-12-09",
    "popularity": 18.178,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/uT1pHr90KqQGMucv7YgyPdxhMiC.jpg",
    "runtime": 119,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "12",
    "slug": "jumanji-bem-vindo-selva"
},

{
    "id": 1147400,
    "title": "Miraculous World: Paris, As Aventuras De Shadybug e Claw Noir",
    "genre_ids": [
        16,
        12,
        28,
        14,
        10751
    ],
    "release_date": "2023-10-21",
    "popularity": 30.293,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/lwMl9Do2mfHDn1EtxugvHjK7bYZ.jpg",
    "runtime": 50,
    "networks": [
        307,
        2156
    ],
    "certification": "L",
    "slug": "miraculous-world-paris-as-aventuras-de-shadybug-e-claw-noir"
},

{
    "id": 1263421,
    "title": "Baki Hanma x Kengan Ashura",
    "genre_ids": [
        16,
        28,
        14
    ],
    "release_date": "2024-06-05",
    "popularity": 19.874,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/qWEJj7wSVB5TIRFNtF3NkDX6zt8.jpg",
    "runtime": 62,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "baki-hanma-x-kengan-ashura"
},

{
    "id": 537915,
    "title": "After",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2019-04-11",
    "popularity": 26.53,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
    "runtime": 106,
    "networks": [
        119,
        701
    ],
    "certification": "14",
    "slug": "after"
},

{
    "id": 1290182,
    "title": "그 시절, 우리가 좋아했던 소녀",
    "genre_ids": [
        10749,
        18,
        35
    ],
    "release_date": "2025-02-21",
    "popularity": 19.397,
    "vote_average": 9.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/sizyFMA65XgZCXchtpS0VItG2rR.jpg",
    "runtime": 102,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 47971,
    "title": "xXx: Reativado",
    "genre_ids": [
        28,
        12,
        80
    ],
    "release_date": "2017-01-13",
    "popularity": 17.817,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/csohoj37afZPMZP5H6STMDEZjdx.jpg",
    "runtime": 107,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "xxx-reativado"
},

{
    "id": 765897,
    "title": "The Unbreakable Boy",
    "genre_ids": [
        18,
        10751
    ],
    "release_date": "2025-02-20",
    "popularity": 17.156,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/1ICDosjDe6xaMlkUucEDXAvXFeP.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "N/A",
    "slug": "the-unbreakable-boy"
},

{
    "id": 1022796,
    "title": "Wish: O Poder dos Desejos",
    "genre_ids": [
        16,
        10751,
        14,
        12
    ],
    "release_date": "2023-11-13",
    "popularity": 27.245,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/temIXpcua7j5v4FipOxmzTfrB06.jpg",
    "runtime": 92,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "wish-o-poder-dos-desejos"
},

{
    "id": 399566,
    "title": "Godzilla vs. Kong",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "2021-03-24",
    "popularity": 16.571,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/teW53VSLdZMMSmkn5xBBowu3tEr.jpg",
    "runtime": 114,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "godzilla-vs-kong"
},

{
    "id": 353491,
    "title": "A Torre Negra",
    "genre_ids": [
        14,
        28,
        878
    ],
    "release_date": "2017-08-03",
    "popularity": 18.682,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/t4IeczvPNloj3IrDm2NjALKMV01.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "12",
    "slug": "a-torre-negra"
},

{
    "id": 615,
    "title": "A Paixão de Cristo",
    "genre_ids": [
        18
    ],
    "release_date": "2004-02-25",
    "popularity": 18.899,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/nhepbUWTnLb9fm4qk9h52MYBszm.jpg",
    "runtime": 127,
    "networks": [],
    "certification": "14",
    "slug": "a-paixo-de-cristo"
},

{
    "id": 1013850,
    "title": "A Verdadeira Dor",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2024-11-01",
    "popularity": 36.149,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/bnX7UzOcNzfgCZKSXzh5oOFsVRl.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "a-verdadeira-dor"
},

{
    "id": 24021,
    "title": "A Saga Crepúsculo: Eclipse",
    "genre_ids": [
        12,
        14,
        18,
        10749
    ],
    "release_date": "2010-06-23",
    "popularity": 21.644,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/cAQsjxYdfkzhrDZwVDDtMksS34u.jpg",
    "runtime": 123,
    "networks": [
        119,
        307
    ],
    "certification": "12",
    "slug": "a-saga-crepsculo-eclipse"
},

{
    "id": 901362,
    "title": "Trolls 3: Juntos Novamente",
    "genre_ids": [
        16,
        10751,
        10402,
        14,
        35
    ],
    "release_date": "2023-10-12",
    "popularity": 28.139,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/ymbTyNAOx25PW28v6NUqR4cuXPb.jpg",
    "runtime": 91,
    "networks": [
        119,
        484
    ],
    "certification": "L",
    "slug": "trolls-3-juntos-novamente"
},

{
    "id": 13183,
    "title": "Watchmen: O Filme",
    "genre_ids": [
        9648,
        28,
        878
    ],
    "release_date": "2009-03-04",
    "popularity": 22.826,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/7KQk8GQacJKOXOG2ogAerOdjDaI.jpg",
    "runtime": 163,
    "networks": [],
    "certification": "18",
    "slug": "watchmen-o-filme"
},

{
    "id": 81188,
    "title": "A Origem dos Guardiões",
    "genre_ids": [
        16,
        10751,
        14
    ],
    "release_date": "2012-11-21",
    "popularity": 17.585,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/yK0iCFtWKFnwbbTqMd3nD06cq9g.jpg",
    "runtime": 97,
    "networks": [
        167
    ],
    "certification": "L",
    "slug": "a-origem-dos-guardies"
},

{
    "id": 807,
    "title": "Seven: Os Sete Crimes Capitais",
    "genre_ids": [
        80,
        9648,
        53
    ],
    "release_date": "1995-09-22",
    "popularity": 33.751,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/cNFCNa5jUYmFmSpCg7dJ3jWd22d.jpg",
    "runtime": 127,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "seven-os-sete-crimes-capitais"
},

{
    "id": 109418,
    "title": "Gente Grande 2",
    "genre_ids": [
        35
    ],
    "release_date": "2013-07-11",
    "popularity": 23.367,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/xf85TL59cSoDiBZyD8OqvDXkJWa.jpg",
    "runtime": 101,
    "networks": [
        8,
        307,
        484,
        1796
    ],
    "certification": "12",
    "slug": "gente-grande-2"
},

{
    "id": 970347,
    "title": "The Killer",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2024-08-22",
    "popularity": 19.111,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/6PCnxKZZIVRanWb710pNpYVkCSw.jpg",
    "runtime": 126,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "the-killer"
},

{
    "id": 948549,
    "title": "O Amor Sangra",
    "genre_ids": [
        80,
        10749,
        53,
        28,
        12,
        9648
    ],
    "release_date": "2024-03-07",
    "popularity": 21.943,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/3SvswOeTAzVoUSU7wD9T8ZUUcmO.jpg",
    "runtime": 104,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "o-amor-sangra"
},

{
    "id": 959092,
    "title": "Farang",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "2023-06-28",
    "popularity": 18.023,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/asUBBPvil6L6A2uXpwdKmA7f21r.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": "farang"
},

{
    "id": 512200,
    "title": "Jumanji: Próxima Fase",
    "genre_ids": [
        12,
        35,
        14
    ],
    "release_date": "2019-12-04",
    "popularity": 21.115,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/jR3EmKf2ymEVqJXDObpmYQiugpS.jpg",
    "runtime": 123,
    "networks": [
        8,
        484,
        1796,
        2156
    ],
    "certification": "12",
    "slug": "jumanji-prxima-fase"
},

{
    "id": 10625,
    "title": "Meninas Malvadas",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2004-04-30",
    "popularity": 25.792,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/iV7YxvjdmRZo0amjGA2BZW5kkAu.jpg",
    "runtime": 96,
    "networks": [
        531,
        307,
        1853,
        2156,
        2303
    ],
    "certification": "12",
    "slug": "meninas-malvadas"
},

{
    "id": 1302916,
    "title": "Heart Eyes",
    "genre_ids": [
        35,
        27,
        9648
    ],
    "release_date": "2025-02-06",
    "popularity": 16.408,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/4kLK3cl4MbrjVFDQXb9PT11ZaV4.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "heart-eyes"
},

{
    "id": 969492,
    "title": "Zona de Risco",
    "genre_ids": [
        28,
        10752,
        53
    ],
    "release_date": "2024-02-09",
    "popularity": 23.874,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/qLqI0lA5WFIpItLCQNqPJYM3W6p.jpg",
    "runtime": 113,
    "networks": [
        2156
    ],
    "certification": "16",
    "slug": "zona-de-risco"
},

{
    "id": 1326059,
    "title": "Pimpinero: Sangue e Gasolina",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "2024-10-10",
    "popularity": 23.084,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/8XDidaDgghQhcZoNwspuEGFLJAW.jpg",
    "runtime": 122,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "pimpinero-sangue-e-gasolina"
},

{
    "id": 242224,
    "title": "O Babadook",
    "genre_ids": [
        18,
        27
    ],
    "release_date": "2014-05-22",
    "popularity": 19.627,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/3dnkHdiyvdUK3oHkxTnjjnNXaq.jpg",
    "runtime": 93,
    "networks": [
        11,
        201
    ],
    "certification": "16",
    "slug": "o-babadook"
},

{
    "id": 1163194,
    "title": "Troca Surpresa",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2024-03-01",
    "popularity": 20.161,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/g8kvGupn62RdywcE85QO2S0v3r8.jpg",
    "runtime": 123,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "troca-surpresa"
},

{
    "id": 11224,
    "title": "Cinderela",
    "genre_ids": [
        10751,
        14,
        16,
        10749
    ],
    "release_date": "1950-02-22",
    "popularity": 24.677,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/Acj5mmoZQ5lKLNpU2y0XQCt5rNb.jpg",
    "runtime": 74,
    "networks": [
        337,
        447
    ],
    "certification": "L",
    "slug": "cinderela"
},

{
    "id": 1001311,
    "title": "Sob as Águas do Sena",
    "genre_ids": [
        28,
        27
    ],
    "release_date": "2024-06-04",
    "popularity": 28.663,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/njsyAXtUcPjLCjOfGvtNLH4DHL2.jpg",
    "runtime": 104,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "sob-as-guas-do-sena"
},

{
    "id": 168259,
    "title": "Velozes & Furiosos 7",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2015-04-01",
    "popularity": 25.339,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/spydMyyD81HjGJVwZvjajkrWW1h.jpg",
    "runtime": 132,
    "networks": [
        8,
        119,
        307,
        1796,
        2156
    ],
    "certification": "14",
    "slug": "velozes-furiosos-7"
},

{
    "id": 260513,
    "title": "Os Incríveis 2",
    "genre_ids": [
        28,
        12,
        16,
        10751
    ],
    "release_date": "2018-06-14",
    "popularity": 16.884,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/eoSgEzw9LrXFPPjny5CvUEjxUrJ.jpg",
    "runtime": 118,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "os-incrveis-2"
},

{
    "id": 1252470,
    "title": "O Destino de Sikandar",
    "genre_ids": [
        53,
        80,
        9648,
        28
    ],
    "release_date": "2024-11-29",
    "popularity": 20.687,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/qJob2GI2STRpCOoCjWvcJYmXMci.jpg",
    "runtime": 143,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "o-destino-de-sikandar"
},

{
    "id": 58,
    "title": "Piratas do Caribe: O Baú da Morte",
    "genre_ids": [
        12,
        14,
        28
    ],
    "release_date": "2006-07-06",
    "popularity": 34.579,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/dCXOveWolVMMbJZQ0cNslpqohPM.jpg",
    "runtime": 151,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "piratas-do-caribe-o-ba-da-morte"
},

{
    "id": 395817,
    "title": "The Thicket",
    "genre_ids": [
        80,
        53,
        37
    ],
    "release_date": "2024-09-05",
    "popularity": 29.228,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/ukqWWQrJRgJym6dsTt1x3EwR2Kp.jpg",
    "runtime": 108,
    "networks": [],
    "certification": "N/A",
    "slug": "the-thicket"
},

{
    "id": 1174128,
    "title": "동화지만 청불입니다",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2025-01-08",
    "popularity": 22.619,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/mkQE7ZOhBMoVhDFbwLiJ43T5GzX.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 1094274,
    "title": "Y2K",
    "genre_ids": [
        35,
        27,
        878
    ],
    "release_date": "2024-12-06",
    "popularity": 17.341,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/qndubIQalyxBJI5EBNZKGXEX74q.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "y2k"
},

{
    "id": 475557,
    "title": "Coringa",
    "genre_ids": [
        80,
        53,
        18
    ],
    "release_date": "2019-10-01",
    "popularity": 24.184,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/hFQH7iGYukh5naKVKQt7HltWpjz.jpg",
    "runtime": 122,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "coringa"
},

{
    "id": 1417056,
    "title": "Connection",
    "genre_ids": [
        16,
        35
    ],
    "release_date": "2025-02-22",
    "popularity": 22.298,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/f4QYeJ6KONlqhmjxFMjxEySsqP6.jpg",
    "runtime": 2,
    "networks": [],
    "certification": "N/A",
    "slug": "connection"
},

{
    "id": 152601,
    "title": "Ela",
    "genre_ids": [
        10749,
        878,
        18
    ],
    "release_date": "2013-12-18",
    "popularity": 18.404,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/5MKayZIHqdIxAEfWa51iX2amZEG.jpg",
    "runtime": 126,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "ela"
},

{
    "id": 1208491,
    "title": "Lendarys - A Lenda",
    "genre_ids": [
        16,
        12,
        14
    ],
    "release_date": "2024-04-25",
    "popularity": 31.22,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/tsRyGjCwJAcGvXPjypozRKttFJl.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "lendarys-a-lenda"
},

{
    "id": 726209,
    "title": "O Mundo Depois de Nós",
    "genre_ids": [
        18,
        9648,
        53
    ],
    "release_date": "2023-11-22",
    "popularity": 21.435,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/qwHZInQ0MBa1DxHV66ExCCUzBf5.jpg",
    "runtime": 141,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "o-mundo-depois-de-ns"
},

{
    "id": 439079,
    "title": "A Freira",
    "genre_ids": [
        27
    ],
    "release_date": "2018-09-05",
    "popularity": 20.532,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/28vxo5DvV0nHWTbYQL8gN3hmuli.jpg",
    "runtime": 96,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "a-freira"
},

{
    "id": 930094,
    "title": "Vermelho, Branco e Sangue Azul",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2023-07-27",
    "popularity": 18.172,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/4QpHPh42Kc7wOV6cow8rkHlaPW0.jpg",
    "runtime": 121,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "vermelho-branco-e-sangue-azul"
},

{
    "id": 37799,
    "title": "A Rede Social",
    "genre_ids": [
        18
    ],
    "release_date": "2010-10-01",
    "popularity": 26.513,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/o8Y4YbPiV7TCNCEPJKv8AKTe2Gl.jpg",
    "runtime": 121,
    "networks": [],
    "certification": "14",
    "slug": "a-rede-social"
},

{
    "id": 27449,
    "title": "Serpente de Luxo",
    "genre_ids": [
        18
    ],
    "release_date": "1933-07-13",
    "popularity": 30.203,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/dVsv4r90o1gJkNxkpaQ8qxa6G4x.jpg",
    "runtime": 76,
    "networks": [],
    "certification": "N/A",
    "slug": "serpente-de-luxo"
},

{
    "id": 4935,
    "title": "O Castelo Animado",
    "genre_ids": [
        14,
        16,
        12
    ],
    "release_date": "2004-09-09",
    "popularity": 32.363,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/1hTfaEWktMJPxCk5nZNtK7F86C9.jpg",
    "runtime": 120,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "o-castelo-animado"
},

{
    "id": 85877,
    "title": "The 3DD Invader",
    "genre_ids": [
        35,
        878
    ],
    "release_date": "2011-10-06",
    "popularity": 19.861,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/jfYbvQmWt28MTJGB6IX6PC00qHq.jpg",
    "runtime": 73,
    "networks": [],
    "certification": "N/A",
    "slug": "the-3dd-invader"
},

{
    "id": 142,
    "title": "O Segredo de Brokeback Mountain",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2005-10-22",
    "popularity": 16.303,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/qZ7fvWbPABjdU8JciIS9f9jCRCb.jpg",
    "runtime": 134,
    "networks": [
        337,
        307,
        2156
    ],
    "certification": "N/A",
    "slug": "o-segredo-de-brokeback-mountain"
},

{
    "id": 125509,
    "title": "Pânico na Floresta 5",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2012-10-18",
    "popularity": 16.736,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/vsH0zwELHvVSKCyQlEZfDxjMSaP.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "18",
    "slug": "pnico-na-floresta-5"
},

{
    "id": 937287,
    "title": "Rivais",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-04-18",
    "popularity": 19.378,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/w1j3evHiwrGiQ6e9h1l9r66uo29.jpg",
    "runtime": 132,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "rivais"
},

{
    "id": 939099,
    "title": "swingers ZwingerZ",
    "genre_ids": [
        99,
        10749,
        18
    ],
    "release_date": "2022-03-20",
    "popularity": 17.813,
    "vote_average": 4.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/lemo5hfG4w7Sm9mKjiIGmJ3hkYB.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "swingers-zwingerz"
},

{
    "id": 12092,
    "title": "Alice no País das Maravilhas",
    "genre_ids": [
        16,
        10751,
        14,
        12
    ],
    "release_date": "1951-07-28",
    "popularity": 16.566,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/lgnBkVe1PNLgFRgaeBeB2Vgb63M.jpg",
    "runtime": 75,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "alice-no-pas-das-maravilhas"
},

{
    "id": 1087192,
    "title": "Como Treinar o Seu Dragão",
    "genre_ids": [
        14,
        12,
        10751,
        28
    ],
    "release_date": "2025-06-11",
    "popularity": 27.178,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/vdGTQfWD43djVUInKxeSbeXyeIh.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "como-treinar-o-seu-drago"
},

{
    "id": 198184,
    "title": "Chappie",
    "genre_ids": [
        80,
        28,
        878
    ],
    "release_date": "2015-03-04",
    "popularity": 18.676,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/cg93jYwHiDVkesAkllPfeiO6brm.jpg",
    "runtime": 120,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "chappie"
},

{
    "id": 957304,
    "title": "Garotas em Fuga",
    "genre_ids": [
        35,
        80
    ],
    "release_date": "2024-02-22",
    "popularity": 17.128,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/kWJXbCDnbZ3dptB1jibZBraqmRL.jpg",
    "runtime": 84,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "garotas-em-fuga"
},

{
    "id": 1266987,
    "title": "Himas",
    "genre_ids": [
        18
    ],
    "release_date": "2024-05-31",
    "popularity": 18.884,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zDVUD2mvnuEIDfFsYCfzdVmA5OS.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "N/A",
    "slug": "himas"
},

{
    "id": 1221404,
    "title": "映画クレヨンしんちゃん オラたちの恐竜日記",
    "genre_ids": [
        16,
        12,
        35,
        10751
    ],
    "release_date": "2024-08-09",
    "popularity": 28.133,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/nVUZBgpWxGDiKHMI6ymm4neoBsE.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 10607,
    "title": "Vizinhança do Barulho",
    "genre_ids": [
        35,
        80
    ],
    "release_date": "1996-01-12",
    "popularity": 21.632,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/dipKX3GZj0vear7UNbldc7jgskE.jpg",
    "runtime": 84,
    "networks": [],
    "certification": "16",
    "slug": "vizinhana-do-barulho"
},

{
    "id": 56292,
    "title": "Missão: Impossível - Protocolo Fantasma",
    "genre_ids": [
        28,
        53,
        12
    ],
    "release_date": "2011-12-07",
    "popularity": 19.108,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/19vTKySZasegBjQFfdawcY0HBPc.jpg",
    "runtime": 133,
    "networks": [
        337,
        531,
        307,
        1853,
        2156,
        2303
    ],
    "certification": "14",
    "slug": "misso-impossvel-protocolo-fantasma"
},

{
    "id": 286687,
    "title": "화려한 외출",
    "genre_ids": [
        10749,
        18,
        35
    ],
    "release_date": "2013-12-05",
    "popularity": 21.097,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/1bMvC9fOTQSfwIGwXBJNcy2cV9N.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 1813,
    "title": "Advogado do Diabo",
    "genre_ids": [
        18,
        9648,
        53,
        27
    ],
    "release_date": "1997-10-17",
    "popularity": 16.136,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/qL17FxDhLDeTdgZxOg2MQrY8PMv.jpg",
    "runtime": 143,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "advogado-do-diabo"
},

{
    "id": 1415690,
    "title": "Hoagie",
    "genre_ids": [
        35,
        27,
        28
    ],
    "release_date": "2025-02-22",
    "popularity": 22.819,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/SoQPwCphUHTM6FzDnYeusY5SdW.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "N/A",
    "slug": "hoagie"
},

{
    "id": 466282,
    "title": "Para Todos os Garotos que Já Amei",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2018-08-16",
    "popularity": 17.579,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/clbkaZ7uy6mdBjrWWPBfnzF8sQP.jpg",
    "runtime": 100,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "para-todos-os-garotos-que-j-amei"
},

{
    "id": 1075794,
    "title": "Leo",
    "genre_ids": [
        16,
        35,
        10751
    ],
    "release_date": "2023-11-17",
    "popularity": 17.98,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
    "runtime": 106,
    "networks": [
        8
    ],
    "certification": "10",
    "slug": "leo"
},

{
    "id": 520763,
    "title": "Um Lugar Silencioso - Parte II",
    "genre_ids": [
        878,
        53,
        27
    ],
    "release_date": "2021-05-21",
    "popularity": 20.148,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/bqWvndlCAcBteUaHOL5HHEN5uHn.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "12",
    "slug": "um-lugar-silencioso-parte-ii"
},

{
    "id": 593643,
    "title": "O Menu",
    "genre_ids": [
        35,
        27,
        53
    ],
    "release_date": "2022-11-17",
    "popularity": 16.402,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/rxNelQvAjOmNGUUHRujmsHiPEIh.jpg",
    "runtime": 107,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "o-menu"
},

{
    "id": 70981,
    "title": "Prometheus",
    "genre_ids": [
        878,
        12,
        9648
    ],
    "release_date": "2012-05-30",
    "popularity": 21.937,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/k1GZVllOORTiN0XTPdumt9CSAcc.jpg",
    "runtime": 124,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "prometheus"
},

{
    "id": 129,
    "title": "A Viagem de Chihiro",
    "genre_ids": [
        16,
        10751,
        14
    ],
    "release_date": "2001-07-20",
    "popularity": 33.737,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/hhoKhsyJ3hFaxEm5pMdZRiTu2lJ.jpg",
    "runtime": 126,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "a-viagem-de-chihiro"
},

{
    "id": 1154304,
    "title": "Buffalo Kids",
    "genre_ids": [
        16,
        12,
        35,
        10751
    ],
    "release_date": "2024-08-14",
    "popularity": 23.043,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/jnDoq3MjxcZbU5h7uT4oWDO7aGM.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "N/A",
    "slug": "buffalo-kids"
},

{
    "id": 10193,
    "title": "Toy Story 3",
    "genre_ids": [
        16,
        10751,
        35
    ],
    "release_date": "2010-06-16",
    "popularity": 25.773,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/rf67AeS9nP8DD7dZYbvhjEVoIBf.jpg",
    "runtime": 103,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "toy-story-3"
},

{
    "id": 86461,
    "title": "Hanna D. - La ragazza del Vondel Park",
    "genre_ids": [
        18
    ],
    "release_date": "1984-11-02",
    "popularity": 25.331,
    "vote_average": 3.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/r4UtpqTl5VKF8xQKzUjMBb5sDa2.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "N/A",
    "slug": "hanna-d-la-ragazza-del-vondel-park"
},

{
    "id": 300668,
    "title": "Aniquilação",
    "genre_ids": [
        878,
        27
    ],
    "release_date": "2018-02-22",
    "popularity": 19.583,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/lKLADVGMUXbeFPFoNrQfq1a1wPR.jpg",
    "runtime": 115,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "aniquilao"
},

{
    "id": 384018,
    "title": "Velozes & Furiosos: Hobbs & Shaw",
    "genre_ids": [
        28,
        12,
        35
    ],
    "release_date": "2019-08-01",
    "popularity": 24.618,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/w5HWdAJyAbfpXbXDmEt5OIpf6kQ.jpg",
    "runtime": 136,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "14",
    "slug": "velozes-furiosos-hobbs-shaw"
},

{
    "id": 1405750,
    "title": "My Omaha",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-23",
    "popularity": 23.871,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/gRLNoi87L1OKdcwZDB5RxFpJBoz.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "my-omaha"
},

{
    "id": 1141126,
    "title": "Rita",
    "genre_ids": [
        18
    ],
    "release_date": "2024-10-25",
    "popularity": 28.629,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/drytcDXJxCfmLjqcRl6I4qI4axW.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": "rita"
},

{
    "id": 1016121,
    "title": "Belo Desastre",
    "genre_ids": [
        10749,
        18,
        35
    ],
    "release_date": "2023-04-04",
    "popularity": 16.877,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/uNIadSJbxQ0p0DtJLUPfVW6TAEu.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "16",
    "slug": "belo-desastre"
},

{
    "id": 607397,
    "title": "어린 엄마 2",
    "genre_ids": [
        10749
    ],
    "release_date": "2019-03-22",
    "popularity": 21.43,
    "vote_average": 3.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/5kFRzBvznECQwNsVOqRKI2W8Jxq.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "-2"
},

{
    "id": 900667,
    "title": "One Piece: Red",
    "genre_ids": [
        16,
        12,
        28,
        14,
        10402
    ],
    "release_date": "2022-08-06",
    "popularity": 17.326,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/8ibfhe4P7rhmn3lrPhOZzIJHA2B.jpg",
    "runtime": 115,
    "networks": [
        484
    ],
    "certification": "12",
    "slug": "one-piece-red"
},

{
    "id": 61979,
    "title": "Paixão Sem Limites",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2010-12-03",
    "popularity": 22.58,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/zwOLz8EhBMUqqVYSXj8Pf5NqjO9.jpg",
    "runtime": 118,
    "networks": [],
    "certification": "N/A",
    "slug": "paixo-sem-limites"
},

{
    "id": 190859,
    "title": "Sniper Americano",
    "genre_ids": [
        10752,
        28
    ],
    "release_date": "2014-12-25",
    "popularity": 20.68,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/mAXzc2oDTTYcnn6IGHlSXvmXloG.jpg",
    "runtime": 132,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "16",
    "slug": "sniper-americano"
},

{
    "id": 1927,
    "title": "Hulk",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2003-06-19",
    "popularity": 18.39,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/dLEezc8nU4O2i96x68AvpA7xyel.jpg",
    "runtime": 138,
    "networks": [
        119,
        307
    ],
    "certification": "14",
    "slug": "hulk"
},

{
    "id": 425,
    "title": "A Era do Gelo",
    "genre_ids": [
        16,
        35,
        10751,
        12
    ],
    "release_date": "2002-03-10",
    "popularity": 29.215,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/A2NR4rJdD6bIVE61T7rhHxrrGvv.jpg",
    "runtime": 82,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-era-do-gelo"
},

{
    "id": 425094,
    "title": "Echo Torch",
    "genre_ids": [
        27,
        878
    ],
    "release_date": "2016-10-21",
    "popularity": 15.953,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/5VHaxWVhF8WlGRn93IqjrdmkUia.jpg",
    "runtime": 20,
    "networks": [],
    "certification": "N/A",
    "slug": "echo-torch"
},

{
    "id": 1100099,
    "title": "Todo Tempo Que Temos",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-10-10",
    "popularity": 32.278,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/qqOmf6702TDz8esL4oJW6uTCijT.jpg",
    "runtime": 108,
    "networks": [],
    "certification": "N/A",
    "slug": "todo-tempo-que-temos"
},

{
    "id": 324552,
    "title": "John Wick: Um Novo Dia para Matar",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2017-02-08",
    "popularity": 22.289,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/k36UzsRQaY6E055cdYPdYbyREer.jpg",
    "runtime": 122,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "16",
    "slug": "john-wick-um-novo-dia-para-matar"
},

{
    "id": 1079485,
    "title": "Ursinho Pooh: Sangue e Mel 2",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-03-26",
    "popularity": 31.193,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/uJXJlO7Y35729AwVSe5tt1JScEK.jpg",
    "runtime": 93,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "ursinho-pooh-sangue-e-mel-2"
},

{
    "id": 1038263,
    "title": "Maria Callas",
    "genre_ids": [
        18,
        10402
    ],
    "release_date": "2024-11-27",
    "popularity": 19.832,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/bvwkLv20GrNIU7WSjCcpJVKxFUc.jpg",
    "runtime": 124,
    "networks": [],
    "certification": "14",
    "slug": "maria-callas"
},

{
    "id": 420809,
    "title": "Malévola: Dona do Mal",
    "genre_ids": [
        10751,
        14,
        12,
        28
    ],
    "release_date": "2019-10-16",
    "popularity": 20.529,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/2VlGbVShN1qQx6WbshMA4Ex04qJ.jpg",
    "runtime": 118,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "malvola-dona-do-mal"
},

{
    "id": 812,
    "title": "Aladdin",
    "genre_ids": [
        16,
        10751,
        12,
        14,
        10749
    ],
    "release_date": "1992-11-25",
    "popularity": 30.2,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/qYB8MwE6AgLFe5ruBUmPA0RWRPY.jpg",
    "runtime": 93,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "aladdin"
},

{
    "id": 284052,
    "title": "Doutor Estranho",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2016-10-25",
    "popularity": 24.146,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/oW4odCdgmYHgKt6AVOqUasrMVjC.jpg",
    "runtime": 115,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "doutor-estranho"
},

{
    "id": 646097,
    "title": "Rebel Ridge",
    "genre_ids": [
        80,
        28,
        53,
        18
    ],
    "release_date": "2024-08-27",
    "popularity": 27.143,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg",
    "runtime": 131,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "rebel-ridge"
},

{
    "id": 131631,
    "title": "Jogos Vorazes: A Esperança - Parte 1",
    "genre_ids": [
        878,
        12,
        53
    ],
    "release_date": "2014-11-19",
    "popularity": 26.41,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/jeHIqJCRu3kh7KDsKAwWRhEDaFj.jpg",
    "runtime": 123,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "jogos-vorazes-a-esperana-parte-1"
},

{
    "id": 62,
    "title": "2001: Uma Odisseia no Espaço",
    "genre_ids": [
        878,
        9648,
        12
    ],
    "release_date": "1968-04-02",
    "popularity": 16.298,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/pVCmLuATJ0lQs4Vx1zUJUN0if2A.jpg",
    "runtime": 148,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "2001-uma-odisseia-no-espao"
},

{
    "id": 339403,
    "title": "Em Ritmo de Fuga",
    "genre_ids": [
        28,
        80
    ],
    "release_date": "2017-06-28",
    "popularity": 15.822,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/1rYTtQ14rPB3KOgk5TjkUqiQFch.jpg",
    "runtime": 113,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "em-ritmo-de-fuga"
},

{
    "id": 634,
    "title": "O Diário de Bridget Jones",
    "genre_ids": [
        35,
        10749,
        18
    ],
    "release_date": "2001-04-13",
    "popularity": 18.167,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/acjZNtv1H6wVadXnleSmYFjZk5k.jpg",
    "runtime": 97,
    "networks": [
        119,
        307,
        2142,
        2141
    ],
    "certification": "12",
    "slug": "o-dirio-de-bridget-jones"
},

{
    "id": 316029,
    "title": "O Rei do Show",
    "genre_ids": [
        18
    ],
    "release_date": "2017-12-20",
    "popularity": 16.559,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/fTESt4W7qvOu4e75pFduDi7cd40.jpg",
    "runtime": 104,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "o-rei-do-show"
},

{
    "id": 281338,
    "title": "Planeta dos Macacos: A Guerra",
    "genre_ids": [
        18,
        878,
        10752
    ],
    "release_date": "2017-07-11",
    "popularity": 17.81,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/n336SuXSxpQkrzWJbSAeWFcKWy4.jpg",
    "runtime": 140,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "planeta-dos-macacos-a-guerra"
},

{
    "id": 855,
    "title": "Falcão Negro em Perigo",
    "genre_ids": [
        28,
        10752,
        36
    ],
    "release_date": "2001-12-28",
    "popularity": 16.729,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/mwlZSgXxX0XrRGP7gMLdJxlrOTY.jpg",
    "runtime": 145,
    "networks": [],
    "certification": "14",
    "slug": "falco-negro-em-perigo"
},

{
    "id": 496450,
    "title": "Miraculous: As Aventuras de Ladybug - O Filme",
    "genre_ids": [
        16,
        14,
        28,
        10749,
        10751
    ],
    "release_date": "2023-07-05",
    "popularity": 23.361,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/oa9tkk1vF5pefeHHWJzRK3Lo1jo.jpg",
    "runtime": 107,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "miraculous-as-aventuras-de-ladybug-o-filme"
},

{
    "id": 270303,
    "title": "Corrente do Mal",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2015-02-04",
    "popularity": 18.672,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/rGH9NafHyg3Of2cMY5oOVb7p4HA.jpg",
    "runtime": 101,
    "networks": [
        2156
    ],
    "certification": "14",
    "slug": "corrente-do-mal"
},

{
    "id": 25405,
    "title": "O Retorno de Um Herói",
    "genre_ids": [
        18,
        10752,
        10770
    ],
    "release_date": "2009-09-21",
    "popularity": 19.327,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/q0RjelNIn0zEi9nhSqQgDTbmXux.jpg",
    "runtime": 77,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "o-retorno-de-um-heri"
},

{
    "id": 974635,
    "title": "Assassino por Acaso",
    "genre_ids": [
        35,
        10749,
        80
    ],
    "release_date": "2024-05-16",
    "popularity": 17.117,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/gWrdBimWApP3bm2Sk0CSJvjrj0r.jpg",
    "runtime": 116,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "assassino-por-acaso"
},

{
    "id": 1734,
    "title": "O Retorno da Múmia",
    "genre_ids": [
        12,
        28,
        14
    ],
    "release_date": "2001-05-04",
    "popularity": 18.853,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/skqyB0xwsuphLpyCo7AmDzRBadb.jpg",
    "runtime": 130,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "12",
    "slug": "o-retorno-da-mmia"
},

{
    "id": 438148,
    "title": "Minions 2: A Origem de Gru",
    "genre_ids": [
        16,
        35,
        10751,
        12
    ],
    "release_date": "2022-06-29",
    "popularity": 21.616,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/5SfrlDY8SUiG1HSTGxHfAiVUhdy.jpg",
    "runtime": 87,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "L",
    "slug": "minions-2-a-origem-de-gru"
},

{
    "id": 205596,
    "title": "O Jogo da Imitação",
    "genre_ids": [
        36,
        18,
        53,
        10752
    ],
    "release_date": "2014-11-14",
    "popularity": 28.099,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bwWCFjhwrs5my4FUoeWdTa2GYlB.jpg",
    "runtime": 113,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "o-jogo-da-imitao"
},

{
    "id": 9532,
    "title": "Premonição",
    "genre_ids": [
        27
    ],
    "release_date": "2000-03-17",
    "popularity": 19.099,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/b5ERChzoI1aLzeYdmwWUtutwm8c.jpg",
    "runtime": 98,
    "networks": [
        1899
    ],
    "certification": "14",
    "slug": "premonio"
},

{
    "id": 9552,
    "title": "O Exorcista",
    "genre_ids": [
        27
    ],
    "release_date": "1973-12-26",
    "popularity": 21.018,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/bYTMDg3eGFuO7emXbQip02a8zvQ.jpg",
    "runtime": 132,
    "networks": [
        1899,
        1825
    ],
    "certification": "18",
    "slug": "o-exorcista"
},

{
    "id": 206563,
    "title": "Trash - A Esperança Vem do Lixo",
    "genre_ids": [
        12,
        80,
        18,
        53
    ],
    "release_date": "2014-10-09",
    "popularity": 17.572,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/kCesDnS7cvJHLQ12cgt87GMJAaa.jpg",
    "runtime": 114,
    "networks": [],
    "certification": "14",
    "slug": "trash-a-esperana-vem-do-lixo"
},

{
    "id": 1155089,
    "title": "Liga da Justiça: Crise nas Infinitas Terras - Parte Um",
    "genre_ids": [
        16,
        878,
        28
    ],
    "release_date": "2024-01-08",
    "popularity": 16.132,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/epdREWqn5CAvpBNtGS9jXb4Se3S.jpg",
    "runtime": 93,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "liga-da-justia-crise-nas-infinitas-terras-parte-um"
},

{
    "id": 480530,
    "title": "Creed II",
    "genre_ids": [
        18,
        28
    ],
    "release_date": "2018-11-21",
    "popularity": 16.397,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/4eVe0XEmkxNPNzLWNw7D7f0Q6pt.jpg",
    "runtime": 130,
    "networks": [
        701,
        2156
    ],
    "certification": "12",
    "slug": "creed-ii"
},

{
    "id": 1062644,
    "title": "La Promesse verte",
    "genre_ids": [
        18
    ],
    "release_date": "2024-03-27",
    "popularity": 22.814,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/6UbIE85b2mM7Vb7jxPvvjdnRLPv.jpg",
    "runtime": 120,
    "networks": [],
    "certification": "N/A",
    "slug": "la-promesse-verte"
},

{
    "id": 259693,
    "title": "Invocação do Mal 2",
    "genre_ids": [
        27
    ],
    "release_date": "2016-06-08",
    "popularity": 25.747,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/o94LZsIKt0priAca7hoN4yz7a1d.jpg",
    "runtime": 134,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "invocao-do-mal-2"
},

{
    "id": 263115,
    "title": "Logan",
    "genre_ids": [
        28,
        18,
        878
    ],
    "release_date": "2017-02-28",
    "popularity": 21.922,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/f0CtZbae9cXj8bkWdCHzUHx5lsR.jpg",
    "runtime": 135,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "logan"
},

{
    "id": 37165,
    "title": "O Show de Truman: O Show da Vida",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "1998-06-04",
    "popularity": 24.546,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/k1pwKQs2erSy6q4qhi0tTaXrSOf.jpg",
    "runtime": 103,
    "networks": [
        2156
    ],
    "certification": "L",
    "slug": "o-show-de-truman-o-show-da-vida"
},

{
    "id": 19913,
    "title": "(500) Dias com Ela",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2009-07-17",
    "popularity": 19.583,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/wkspryd5Ve93npEge3OFYCRgYwY.jpg",
    "runtime": 93,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "500-dias-com-ela"
},

{
    "id": 1402,
    "title": "À Procura da Felicidade",
    "genre_ids": [
        18
    ],
    "release_date": "2006-12-14",
    "popularity": 28.594,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/f79DB2IOlmEN2v7lTmfXlN0AUHB.jpg",
    "runtime": 117,
    "networks": [
        8,
        119,
        1899,
        1796,
        1860,
        1825,
        2156
    ],
    "certification": "L",
    "slug": "-procura-da-felicidade"
},

{
    "id": 112160,
    "title": "Crônicas Sexuais de uma Família Francesa",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2012-05-09",
    "popularity": 20.08,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/p9zRDTqKZpEdfti9jRmo5bqiYdd.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "crnicas-sexuais-de-uma-famlia-francesa"
},

{
    "id": 76492,
    "title": "Hotel Transilvânia",
    "genre_ids": [
        16,
        35,
        10751,
        14
    ],
    "release_date": "2012-09-20",
    "popularity": 17.963,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/i9kAWShk7qrqril2dLboP0hi8I2.jpg",
    "runtime": 91,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "L",
    "slug": "hotel-transilvnia"
},

{
    "id": 228326,
    "title": "Festa no Céu",
    "genre_ids": [
        16,
        12,
        35,
        10751,
        14
    ],
    "release_date": "2014-10-01",
    "popularity": 16.871,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/l6luVQ9F7t7wErnSOq6Vd0SgDxV.jpg",
    "runtime": 95,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "festa-no-cu"
},

{
    "id": 50620,
    "title": "A Saga Crepúsculo: Amanhecer - Parte 2",
    "genre_ids": [
        12,
        14,
        18,
        10749
    ],
    "release_date": "2012-11-13",
    "popularity": 23.032,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/2dx0665ocdDhzYp3zm3WaOzEV4N.jpg",
    "runtime": 115,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "12",
    "slug": "a-saga-crepsculo-amanhecer-parte-2"
},

{
    "id": 1235499,
    "title": "The Last Showgirl",
    "genre_ids": [
        18
    ],
    "release_date": "2024-12-13",
    "popularity": 23.844,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/o70dV2jjGd6TmYTMOY9b34OLzDK.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "the-last-showgirl"
},

{
    "id": 575265,
    "title": "Missão: Impossível - O Acerto Final",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2025-05-21",
    "popularity": 25.287,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/5izmRuuqPh9Uq1xJU1EizdUBi6b.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "16",
    "slug": "misso-impossvel-o-acerto-final"
},

{
    "id": 343611,
    "title": "Jack Reacher: Sem Retorno",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2016-10-19",
    "popularity": 15.719,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/w0OTH4SWK5MkNthXYw8Fqg1ETKy.jpg",
    "runtime": 118,
    "networks": [
        337,
        307,
        2156
    ],
    "certification": "14",
    "slug": "jack-reacher-sem-retorno"
},

{
    "id": 929563,
    "title": "Os Vizinhos Green: O Filme – Ferispaço",
    "genre_ids": [
        16,
        10751,
        35,
        10402,
        10770
    ],
    "release_date": "2024-06-06",
    "popularity": 20.672,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/Anymw1udcCIdBstKbxMp77cwFyy.jpg",
    "runtime": 82,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "os-vizinhos-green-o-filme-ferispao"
},

{
    "id": 383498,
    "title": "Deadpool 2",
    "genre_ids": [
        28,
        35,
        12
    ],
    "release_date": "2018-05-10",
    "popularity": 22.577,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/6CABdPx68rYoLdvXhIJkilOj6XZ.jpg",
    "runtime": 119,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "deadpool-2"
},

{
    "id": 4951,
    "title": "10 Coisas Que Eu Odeio em Você",
    "genre_ids": [
        35,
        10749,
        18
    ],
    "release_date": "1999-03-30",
    "popularity": 21.412,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/sSr6OheCylo2rlt4Ko9OWwcmu3n.jpg",
    "runtime": 97,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "10-coisas-que-eu-odeio-em-voc"
},

{
    "id": 58008,
    "title": "A Enfermeira da Noite",
    "genre_ids": [
        35
    ],
    "release_date": "1979-02-07",
    "popularity": 29.206,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/dNkOfr5it0ZZ3mYXvL6c8RtaZrP.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "a-enfermeira-da-noite"
},

{
    "id": 118249,
    "title": "Thriller Night",
    "genre_ids": [
        16,
        10402,
        27,
        35
    ],
    "release_date": "2011-09-13",
    "popularity": 15.927,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/mPQei2YUIY0Ljd3O5Wy7LDuvC8S.jpg",
    "runtime": 6,
    "networks": [],
    "certification": "N/A",
    "slug": "thriller-night"
},

{
    "id": 1359,
    "title": "Psicopata Americano",
    "genre_ids": [
        53,
        18,
        80
    ],
    "release_date": "2000-04-13",
    "popularity": 17.314,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/rxT7rVM4oLODCzdkkMPWGPMTSt3.jpg",
    "runtime": 102,
    "networks": [
        307,
        2142,
        2141,
        2156
    ],
    "certification": "18",
    "slug": "psicopata-americano"
},

{
    "id": 146451,
    "title": "91:an Karlsson",
    "genre_ids": [
        35
    ],
    "release_date": "1946-09-02",
    "popularity": 18.385,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/cuP2mGDkQKVVMhrow5jFKdvnQkO.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "91an-karlsson"
},

{
    "id": 635302,
    "title": "Demon Slayer: Mugen Train - O Filme",
    "genre_ids": [
        16,
        28,
        14,
        53
    ],
    "release_date": "2020-10-16",
    "popularity": 24.136,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/jlGL6yoyDTAZeVzqTfD9aU1tFnr.jpg",
    "runtime": 117,
    "networks": [
        283
    ],
    "certification": "14",
    "slug": "demon-slayer-mugen-train-o-filme"
},

{
    "id": 49519,
    "title": "Os Croods",
    "genre_ids": [
        16,
        12,
        10751,
        14,
        35,
        28
    ],
    "release_date": "2013-03-15",
    "popularity": 16.288,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/7k9w3RgKYoJ9MCwdBY0ZBxC323L.jpg",
    "runtime": 98,
    "networks": [
        119,
        307,
        484,
        2156
    ],
    "certification": "L",
    "slug": "os-croods"
},

{
    "id": 1106739,
    "title": "Jurado Nº2",
    "genre_ids": [
        80,
        18
    ],
    "release_date": "2024-10-30",
    "popularity": 22.288,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/8Enmby25murJWBYYKaPRgoXhW8U.jpg",
    "runtime": 114,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "jurado-n2"
},

{
    "id": 207,
    "title": "Sociedade dos Poetas Mortos",
    "genre_ids": [
        18
    ],
    "release_date": "1989-06-02",
    "popularity": 19.827,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/8LR4cLqPNfTx2eiTsd7xsNOG3Rf.jpg",
    "runtime": 128,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "sociedade-dos-poetas-mortos"
},

{
    "id": 745,
    "title": "O Sexto Sentido",
    "genre_ids": [
        9648,
        53,
        18
    ],
    "release_date": "1999-08-06",
    "popularity": 20.486,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ds7jw0WYCd6k7hBzMnzgFsTfg96.jpg",
    "runtime": 108,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "o-sexto-sentido"
},

{
    "id": 321612,
    "title": "A Bela e a Fera",
    "genre_ids": [
        10751,
        14,
        10749
    ],
    "release_date": "2017-03-16",
    "popularity": 30.196,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/sMw1k27BDUGpLjYiQ6f2Edx3Df5.jpg",
    "runtime": 129,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "a-bela-e-a-fera"
},

{
    "id": 755679,
    "title": "Velozes & Furiosos 10: Parte 2",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "N/A",
    "popularity": 27.013,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tPZcFDAaWYBdUtTbwRv7hJxWCRs.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "velozes-furiosos-10-parte-2"
},

{
    "id": 923667,
    "title": "Crepúsculo dos Guerreiros: Walled In",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2024-04-23",
    "popularity": 26.392,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/1vohhjba4gln3CqRggHNCBGr3SK.jpg",
    "runtime": 125,
    "networks": [],
    "certification": "N/A",
    "slug": "crepsculo-dos-guerreiros-walled-in"
},

{
    "id": 565770,
    "title": "Besouro Azul",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "2023-08-16",
    "popularity": 18.159,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/kedGlsobpMXsKKHXhogp7gPSqG7.jpg",
    "runtime": 127,
    "networks": [
        119,
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "besouro-azul"
},

{
    "id": 660982,
    "title": "American Pie Apresenta: Meninas ao Ataque",
    "genre_ids": [
        35
    ],
    "release_date": "2020-10-06",
    "popularity": 16.548,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/crsZiahK0iAUvofxdN3yvHAULtS.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "american-pie-apresenta-meninas-ao-ataque"
},

{
    "id": 1026999,
    "title": "A Academia do Sr. Kleks",
    "genre_ids": [
        14,
        12,
        10751
    ],
    "release_date": "2024-01-05",
    "popularity": 15.614,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ykZvwO1YvWCTV4XajuYBUXeubHA.jpg",
    "runtime": 129,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "a-academia-do-sr-kleks"
},

{
    "id": 10528,
    "title": "Sherlock Holmes",
    "genre_ids": [
        28,
        12,
        80,
        9648
    ],
    "release_date": "2009-12-23",
    "popularity": 15.811,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/19ZNLpF6ibwcFIynGb65X3Z1bnL.jpg",
    "runtime": 129,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "sherlock-holmes"
},

{
    "id": 577922,
    "title": "Tenet",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "2020-08-22",
    "popularity": 16.717,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/Ae0pbv4E6YfqfN3UjKWIfQSzP9v.jpg",
    "runtime": 152,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "tenet"
},

{
    "id": 10009,
    "title": "Irmão Urso",
    "genre_ids": [
        12,
        16,
        10751
    ],
    "release_date": "2003-10-23",
    "popularity": 17.808,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/bfP9NTGLwsbeL4zNwr8LPmJibZN.jpg",
    "runtime": 85,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "irmo-urso"
},

{
    "id": 166428,
    "title": "Como Treinar o Seu Dragão 3",
    "genre_ids": [
        16,
        10751,
        12
    ],
    "release_date": "2019-01-03",
    "popularity": 23.352,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/yn6f3dy0Rh2Y00YE8B52Pdm9IRp.jpg",
    "runtime": 105,
    "networks": [
        119
    ],
    "certification": "L",
    "slug": "como-treinar-o-seu-drago-3"
},

{
    "id": 373571,
    "title": "Godzilla II: Rei dos Monstros",
    "genre_ids": [
        878,
        28
    ],
    "release_date": "2019-05-29",
    "popularity": 18.671,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/k1yiFeJSWkYkqww59LFbWH9l3uv.jpg",
    "runtime": 132,
    "networks": [
        1899
    ],
    "certification": "12",
    "slug": "godzilla-ii-rei-dos-monstros"
},

{
    "id": 413846,
    "title": "1992",
    "genre_ids": [
        80,
        53,
        28
    ],
    "release_date": "2024-08-29",
    "popularity": 17.095,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/HV5hFJsqogckCfHiAwgKpP9R1j.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "16",
    "slug": "1992"
},

{
    "id": 975511,
    "title": "The Return",
    "genre_ids": [
        36,
        18,
        12
    ],
    "release_date": "2024-09-07",
    "popularity": 18.836,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/xSj6EbdwHs3MFT2tRj9L3I7TE5j.jpg",
    "runtime": 116,
    "networks": [],
    "certification": "N/A",
    "slug": "the-return"
},

{
    "id": 75780,
    "title": "Jack Reacher: O Último Tiro",
    "genre_ids": [
        80,
        18,
        53,
        28
    ],
    "release_date": "2012-12-20",
    "popularity": 19.323,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/14Wj4HZOdPmN2DXNbXXvJH2DwIf.jpg",
    "runtime": 130,
    "networks": [
        337,
        307,
        2156
    ],
    "certification": "14",
    "slug": "jack-reacher-o-ltimo-tiro"
},

{
    "id": 1174481,
    "title": "El 47",
    "genre_ids": [
        80,
        18
    ],
    "release_date": "2024-09-06",
    "popularity": 21.614,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/zpM2LH08KumIamu66GZWGNrZyA5.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "el-47"
},

{
    "id": 1214667,
    "title": "Round 6: O Desafio – Making Of",
    "genre_ids": [
        99
    ],
    "release_date": "2023-12-06",
    "popularity": 28.087,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/lzDnzJOCAVIj75lwFDcHeR7ig53.jpg",
    "runtime": 30,
    "networks": [
        1796
    ],
    "certification": "12",
    "slug": "round-6-o-desafio-making-of"
},

{
    "id": 1337309,
    "title": "Bangkok no Limite: Entre o Inferno e o Paraíso",
    "genre_ids": [
        28,
        80,
        18,
        53
    ],
    "release_date": "2024-09-26",
    "popularity": 19.085,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/dpcWDfyval6VfOUacRBFS0gNDVO.jpg",
    "runtime": 147,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "bangkok-no-limite-entre-o-inferno-e-o-paraso"
},

{
    "id": 799379,
    "title": "Projeto Caça ao Lobo",
    "genre_ids": [
        28,
        53,
        27,
        80
    ],
    "release_date": "2022-09-21",
    "popularity": 15.505,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/uM0wcqCNbKfVowUKko7fvzOSSdf.jpg",
    "runtime": 122,
    "networks": [],
    "certification": "N/A",
    "slug": "projeto-caa-ao-lobo"
},

{
    "id": 49046,
    "title": "Nada de Novo no Front",
    "genre_ids": [
        10752,
        36,
        18
    ],
    "release_date": "2022-10-07",
    "popularity": 17.57,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/9GOLUnuh6UnTXPxr1WDpVFoIdbX.jpg",
    "runtime": 147,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "nada-de-novo-no-front"
},

{
    "id": 744,
    "title": "Top Gun - Ases Indomáveis",
    "genre_ids": [
        28,
        18
    ],
    "release_date": "1986-05-16",
    "popularity": 21.014,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/dDrMtnVgtDeecIgNchb9F8JcO5w.jpg",
    "runtime": 109,
    "networks": [
        337,
        531,
        484,
        582,
        1853,
        2303
    ],
    "certification": "12",
    "slug": "top-gun-ases-indomveis"
},

{
    "id": 49521,
    "title": "O Homem de Aço",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2013-06-12",
    "popularity": 16.129,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/5O9Zu16XK3SQhKfUOyNDrFLnodg.jpg",
    "runtime": 143,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "o-homem-de-ao"
},

{
    "id": 134374,
    "title": "Sem Dor, Sem Ganho",
    "genre_ids": [
        28,
        80,
        35,
        18,
        9648
    ],
    "release_date": "2013-04-18",
    "popularity": 16.397,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/tGGDTWp6eF9evpK1FlZYhCYdTEK.jpg",
    "runtime": 130,
    "networks": [],
    "certification": "18",
    "slug": "sem-dor-sem-ganho"
},

{
    "id": 97697,
    "title": "Come Play with Me",
    "genre_ids": [
        35
    ],
    "release_date": "1977-04-28",
    "popularity": 22.809,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/noTS4wNV5jg3E8nJixhrcWxt38B.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "come-play-with-me"
},

{
    "id": 140607,
    "title": "Star Wars: O Despertar da Força",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2015-12-15",
    "popularity": 25.738,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/lqMDbo4rXnakFgc4C6LzPv6pG7F.jpg",
    "runtime": 136,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "star-wars-o-despertar-da-fora"
},

{
    "id": 1269732,
    "title": "神雕侠侣: 问世间",
    "genre_ids": [
        28,
        14,
        12
    ],
    "release_date": "2025-01-22",
    "popularity": 24.54,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/1eAbKRfH6RKTOxs9JAGGops7Q4j.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 920,
    "title": "Carros",
    "genre_ids": [
        16,
        12,
        35,
        10751
    ],
    "release_date": "2006-06-08",
    "popularity": 21.895,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/2nM2NRV8wt3n3ffoHQ3KdMkY3vR.jpg",
    "runtime": 117,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "carros"
},

{
    "id": 697843,
    "title": "Resgate 2",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2023-06-09",
    "popularity": 20.072,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/AfwqKLQwjgPu8bIL1mqhHTlnQv0.jpg",
    "runtime": 122,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "resgate-2"
},

{
    "id": 294254,
    "title": "Maze Runner: Prova de Fogo",
    "genre_ids": [
        878,
        28,
        53,
        12
    ],
    "release_date": "2015-09-09",
    "popularity": 16.869,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/vEtUCDIGBvUdLelHEBXKQetfF5a.jpg",
    "runtime": 131,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "maze-runner-prova-de-fogo"
},

{
    "id": 581528,
    "title": "O Gângster, o Policial e o Diabo",
    "genre_ids": [
        80,
        28,
        53
    ],
    "release_date": "2019-05-15",
    "popularity": 28.583,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/nLNKX18xxW6RpkARYrmxDZvuB8r.jpg",
    "runtime": 109,
    "networks": [
        119,
        464
    ],
    "certification": "N/A",
    "slug": "o-gngster-o-policial-e-o-diabo"
},

{
    "id": 3933,
    "title": "A Noiva Cadáver",
    "genre_ids": [
        10749,
        14,
        16
    ],
    "release_date": "2005-09-12",
    "popularity": 23.013,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/tms7ulCuyhXyvMHd9Gyg9J6MMph.jpg",
    "runtime": 77,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "a-noiva-cadver"
},

{
    "id": 934433,
    "title": "Pânico VI",
    "genre_ids": [
        27,
        80,
        53
    ],
    "release_date": "2023-03-08",
    "popularity": 17.957,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/dbd7DQCHZ57SF4tM2puHtwNxDQD.jpg",
    "runtime": 122,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "18",
    "slug": "pnico-vi"
},

{
    "id": 640146,
    "title": "Homem-Formiga e a Vespa: Quantumania",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2023-02-15",
    "popularity": 19.563,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/q7CfFjOvjLz9GZoh5RoCOSVniWm.jpg",
    "runtime": 125,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "homem-formiga-e-a-vespa-quantumania"
},

{
    "id": 950387,
    "title": "Um Filme Minecraft",
    "genre_ids": [
        12,
        14,
        10751,
        35
    ],
    "release_date": "2025-04-02",
    "popularity": 23.831,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zjdB4LxQfkAx5g2hcFbUXND3n2u.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "N/A",
    "slug": "um-filme-minecraft"
},

{
    "id": 68721,
    "title": "Homem de Ferro 3",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2013-04-18",
    "popularity": 25.284,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/yzL3IlELFTRnRLdGqRv33SecqtD.jpg",
    "runtime": 130,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "homem-de-ferro-3"
},

{
    "id": 214756,
    "title": "Ted 2",
    "genre_ids": [
        35,
        14
    ],
    "release_date": "2015-06-25",
    "popularity": 22.576,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/kblxjPVIXaIQ7iHo5b2LaBOEllD.jpg",
    "runtime": 115,
    "networks": [
        119,
        307
    ],
    "certification": "16",
    "slug": "ted-2"
},

{
    "id": 495764,
    "title": "Aves de Rapina: Arlequina e sua Emancipação Fantabulosa",
    "genre_ids": [
        28,
        80
    ],
    "release_date": "2020-02-05",
    "popularity": 15.716,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/pjM0QX6r2rrNyxeQQIJkH5JPuRx.jpg",
    "runtime": 109,
    "networks": [
        119,
        1899,
        484,
        1825
    ],
    "certification": "16",
    "slug": "aves-de-rapina-arlequina-e-sua-emancipao-fantabulosa"
},

{
    "id": 427641,
    "title": "Rampage: Destruição Total",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2018-04-11",
    "popularity": 15.368,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/iAagLHxCLB7AiACwdniXEdwwNAV.jpg",
    "runtime": 107,
    "networks": [
        119,
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "rampage-destruio-total"
},

{
    "id": 460458,
    "title": "Resident Evil: Bem-Vindo a Raccoon City",
    "genre_ids": [
        28,
        27,
        878
    ],
    "release_date": "2021-11-24",
    "popularity": 20.667,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tnKi8Vx9mRvOGrmzBOOh5wHEbQI.jpg",
    "runtime": 107,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "resident-evil-bem-vindo-a-raccoon-city"
},

{
    "id": 63193,
    "title": "Primeiro da Classe",
    "genre_ids": [
        18
    ],
    "release_date": "2008-12-07",
    "popularity": 15.922,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/knyYDWFu7v5rNr0A3Skn7A7WGET.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "primeiro-da-classe"
},

{
    "id": 826510,
    "title": "Harold e o Lápis Mágico",
    "genre_ids": [
        10751,
        12,
        14,
        35
    ],
    "release_date": "2024-07-31",
    "popularity": 21.384,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/8LV7FJmmuFXA6468yTBIUDsszBc.jpg",
    "runtime": 90,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "harold-e-o-lpis-mgico"
},

{
    "id": 891699,
    "title": "O Silêncio da Vingança",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2023-11-30",
    "popularity": 18.36,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/7W2fdpbWV2MiaCpjYakbudP3Ywx.jpg",
    "runtime": 104,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "o-silncio-da-vingana"
},

{
    "id": 184315,
    "title": "Hércules",
    "genre_ids": [
        28,
        12
    ],
    "release_date": "2014-07-23",
    "popularity": 17.306,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/op64HvQ8XyB4l2afElLqxuYEuPT.jpg",
    "runtime": 98,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "hrcules"
},

{
    "id": 359410,
    "title": "Matador de Aluguel",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-03-08",
    "popularity": 24.119,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/h2xDLj6CtzItwQEFyBjIXh5z3QD.jpg",
    "runtime": 121,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "matador-de-aluguel"
},

{
    "id": 74,
    "title": "Guerra dos Mundos",
    "genre_ids": [
        12,
        53,
        878
    ],
    "release_date": "2005-06-13",
    "popularity": 16.285,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/aU42RNFpLgXsg0Tsgo8g8RPji0N.jpg",
    "runtime": 117,
    "networks": [
        484
    ],
    "certification": "12",
    "slug": "guerra-dos-mundos"
},

{
    "id": 718930,
    "title": "Trem-Bala",
    "genre_ids": [
        28,
        35,
        53
    ],
    "release_date": "2022-08-03",
    "popularity": 19.825,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/cXMeF0FUFe9n3Om9GzMqwYMQCgw.jpg",
    "runtime": 126,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "trem-bala"
},

{
    "id": 840705,
    "title": "Pisque Duas Vezes",
    "genre_ids": [
        9648,
        53,
        27
    ],
    "release_date": "2024-08-21",
    "popularity": 22.279,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/vPCUg4CbQAVy2zikUJmtnM1hUy5.jpg",
    "runtime": 102,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "pisque-duas-vezes"
},

{
    "id": 28468,
    "title": "A Chave",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1983-10-19",
    "popularity": 20.447,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/rj8EOr3miAwYXBR3AVr3nYNa69o.jpg",
    "runtime": 111,
    "networks": [],
    "certification": "N/A",
    "slug": "a-chave"
},

{
    "id": 11836,
    "title": "Bob Esponja: O Filme",
    "genre_ids": [
        10751,
        16,
        35,
        14,
        12
    ],
    "release_date": "2004-11-19",
    "popularity": 15.6,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/91BYVYkCcl1l7eufPXbv33MqQnJ.jpg",
    "runtime": 82,
    "networks": [
        531,
        307,
        1853,
        2156,
        2303
    ],
    "certification": "L",
    "slug": "bob-esponja-o-filme"
},

{
    "id": 576784,
    "title": "John e o Potrinho Mágico",
    "genre_ids": [
        12,
        14
    ],
    "release_date": "2021-02-18",
    "popularity": 26.929,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/t66a8QPn7V8NzxoDEA7IANc4ixI.jpg",
    "runtime": 100,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "john-e-o-potrinho-mgico"
},

{
    "id": 1016848,
    "title": "A Sala da Frente",
    "genre_ids": [
        27,
        35,
        53
    ],
    "release_date": "2024-09-05",
    "popularity": 26.366,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/fYQCMsStDo8UkqNeY9S8aCMLRPI.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "a-sala-da-frente"
},

{
    "id": 181812,
    "title": "Star Wars: Episódio IX - A Ascensão Skywalker",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2019-12-18",
    "popularity": 18.152,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/uLlrDUtFG2tKtDcJN6kBznlqqsp.jpg",
    "runtime": 141,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "star-wars-episdio-ix-a-ascenso-skywalker"
},

{
    "id": 1108427,
    "title": "Moana",
    "genre_ids": [
        12,
        35,
        10751,
        14
    ],
    "release_date": "2026-07-09",
    "popularity": 16.544,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ys0jZr0quHERDUEoCboGQEKPvgQ.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "moana"
},

{
    "id": 521029,
    "title": "Annabelle 3: De Volta para Casa",
    "genre_ids": [
        27
    ],
    "release_date": "2019-06-26",
    "popularity": 15.805,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/m8h2gz4El6bvYpDjyQhb7R49rSp.jpg",
    "runtime": 120,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "annabelle-3-de-volta-para-casa"
},

{
    "id": 1186947,
    "title": "Bandida - A Número Um",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "2024-06-20",
    "popularity": 17.797,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/x1n3ZFBR7yuWrmts7GRZIcUtTVo.jpg",
    "runtime": 80,
    "networks": [
        8,
        1796
    ],
    "certification": "18",
    "slug": "bandida-a-nmero-um"
},

{
    "id": 1290218,
    "title": "പൈങ്കിളി",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2025-02-14",
    "popularity": 16.709,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/6AdzUAiMfUNxqqYXswrRz77HkZu.jpg",
    "runtime": 139,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 141052,
    "title": "Liga da Justiça",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2017-11-15",
    "popularity": 23.332,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/m5IpGz6M2QiH4MMWsVj4rfO6iyF.jpg",
    "runtime": 120,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "liga-da-justia"
},

{
    "id": 296099,
    "title": "Férias Frustradas",
    "genre_ids": [
        35
    ],
    "release_date": "2015-07-28",
    "popularity": 18.659,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/tnt6zhUzarBNgO49KJDodbeSkhl.jpg",
    "runtime": 99,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "frias-frustradas"
},

{
    "id": 37135,
    "title": "Tarzan",
    "genre_ids": [
        10751,
        12,
        16,
        18
    ],
    "release_date": "1999-06-18",
    "popularity": 17.062,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/ce4mU4yyubjP1uXcz48fMndCZni.jpg",
    "runtime": 88,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "tarzan"
},

{
    "id": 423,
    "title": "O Pianista",
    "genre_ids": [
        18,
        10752
    ],
    "release_date": "2002-09-17",
    "popularity": 18.835,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/zgtCY3VshbIv3UfNkdvVEShGmlE.jpg",
    "runtime": 150,
    "networks": [
        8,
        307,
        1796,
        2142,
        2141
    ],
    "certification": "14",
    "slug": "o-pianista"
},

{
    "id": 381284,
    "title": "Estrelas Além do Tempo",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2016-12-10",
    "popularity": 19.322,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/6A1Jn0tooQYgi2C8sNz5OaIW98C.jpg",
    "runtime": 127,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "estrelas-alm-do-tempo"
},

{
    "id": 820525,
    "title": "After: Para Sempre",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2023-09-13",
    "popularity": 21.599,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/jxb7NBx8jjqxiz3MIE3KMyqp45d.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "14",
    "slug": "after-para-sempre"
},

{
    "id": 564140,
    "title": "Suando Frio",
    "genre_ids": [
        35
    ],
    "release_date": "2018-11-21",
    "popularity": 28.061,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/s7b43BOco3vt9GJlCykdBhDxb2y.jpg",
    "runtime": 94,
    "networks": [
        47,
        683
    ],
    "certification": "N/A",
    "slug": "suando-frio"
},

{
    "id": 45233,
    "title": "Blade Violent - I violenti",
    "genre_ids": [
        28,
        80,
        27
    ],
    "release_date": "1983-05-06",
    "popularity": 19.036,
    "vote_average": 4.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/faRLXb0ADfLFfsbtn7sFqoTgmRV.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "blade-violent-i-violenti"
},

{
    "id": 50646,
    "title": "Amor a Toda Prova",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2011-07-29",
    "popularity": 15.505,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/d3d4REqdolpWsoMqhNfTiOwP9Hh.jpg",
    "runtime": 118,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "amor-a-toda-prova"
},

{
    "id": 1087388,
    "title": "Sting: Aranha Assassina",
    "genre_ids": [
        27,
        878,
        53
    ],
    "release_date": "2024-04-12",
    "popularity": 17.563,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/oynQQgTC6hcoHzI70Ko57JC34w9.jpg",
    "runtime": 92,
    "networks": [
        484
    ],
    "certification": "16",
    "slug": "sting-aranha-assassina"
},

{
    "id": 1239251,
    "title": "Megamente Vs. O Sindicato da Perdição",
    "genre_ids": [
        16,
        35,
        878
    ],
    "release_date": "2024-03-01",
    "popularity": 21.009,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/60x76Yb6nMPFwEZ3um5yhUwCga.jpg",
    "runtime": 83,
    "networks": [
        119,
        484
    ],
    "certification": "L",
    "slug": "megamente-vs-o-sindicato-da-perdio"
},

{
    "id": 9479,
    "title": "O Estranho Mundo de Jack",
    "genre_ids": [
        14,
        16,
        10751
    ],
    "release_date": "1993-10-09",
    "popularity": 16.397,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/pyMGhuAWC7nYyolKJlFbT7pp02K.jpg",
    "runtime": 76,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "o-estranho-mundo-de-jack"
},

{
    "id": 1425365,
    "title": "Paper Walls",
    "genre_ids": [
        27
    ],
    "release_date": "2025-02-22",
    "popularity": 22.808,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/apCspztJAs5ahphxiZNd1ER5gtc.jpg",
    "runtime": 16,
    "networks": [],
    "certification": "N/A",
    "slug": "paper-walls"
},

{
    "id": 1140648,
    "title": "Fique Acordado",
    "genre_ids": [
        878,
        27,
        53
    ],
    "release_date": "2024-02-09",
    "popularity": 16.118,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/izPVZlS3FcfVjiQ4kjQKppIwja0.jpg",
    "runtime": 90,
    "networks": [
        47,
        683
    ],
    "certification": "N/A",
    "slug": "fique-acordado"
},

{
    "id": 283995,
    "title": "Guardiões da Galáxia - Vol. 2",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2017-04-19",
    "popularity": 25.707,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/jGtBLu0JAKf5JxhWgmF68HROzCA.jpg",
    "runtime": 136,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "guardies-da-galxia-vol-2"
},

{
    "id": 1299314,
    "title": "후배부부와 교환섹스 2",
    "genre_ids": [
        18
    ],
    "release_date": "2020-02-07",
    "popularity": 21.88,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/4roZrvGt9cTjWroD8iquIvcBddJ.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "-2"
},

{
    "id": 670292,
    "title": "Resistência",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2023-09-27",
    "popularity": 24.53,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/voSZpfKrqdZ53oRw9kng74LPs1s.jpg",
    "runtime": 133,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "resistncia"
},

{
    "id": 1196942,
    "title": "मेरे हज़्बन्ड की बीवी",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2025-02-21",
    "popularity": 20.049,
    "vote_average": 10.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/fQMBYG4JOD6WN8QzViPYqxuIsru.jpg",
    "runtime": 142,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 1420948,
    "title": "Saints And Warriors",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-22",
    "popularity": 22.999,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/w67sri8tnfAl4oanmynlRH9EHXD.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "saints-and-warriors"
},

{
    "id": 1011477,
    "title": "Karatê Kid: Lendas",
    "genre_ids": [
        28,
        18,
        10751
    ],
    "release_date": "2025-05-28",
    "popularity": 19.562,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/p3gGJrWQ4UTf30iRHKjDJEP8T3G.jpg",
    "runtime": 118,
    "networks": [],
    "certification": "N/A",
    "slug": "karat-kid-lendas"
},

{
    "id": 614930,
    "title": "As Tartarugas Ninja: Caos Mutante",
    "genre_ids": [
        16,
        35,
        28,
        878
    ],
    "release_date": "2023-07-31",
    "popularity": 16.862,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/gwrFZLMPox82lsPT8MHpAYmFjw9.jpg",
    "runtime": 100,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "as-tartarugas-ninja-caos-mutante"
},

{
    "id": 103,
    "title": "Taxi Driver: Motorista de Táxi",
    "genre_ids": [
        80,
        18
    ],
    "release_date": "1976-02-09",
    "popularity": 17.953,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/hvJvOYRrF9xxvNzg2Jd9PYWu7c3.jpg",
    "runtime": 114,
    "networks": [
        8,
        119,
        47,
        1899,
        499,
        683,
        1796,
        1825,
        2156
    ],
    "certification": "14",
    "slug": "taxi-driver-motorista-de-txi"
},

{
    "id": 318846,
    "title": "A Grande Aposta",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2015-12-11",
    "popularity": 15.242,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/ef0fKJs8QdVF3Epxfa9EN33iD8Z.jpg",
    "runtime": 130,
    "networks": [
        531,
        484,
        582,
        2303
    ],
    "certification": "14",
    "slug": "a-grande-aposta"
},

{
    "id": 1142518,
    "title": "Livre: Encanto criminal",
    "genre_ids": [
        28,
        10749,
        18
    ],
    "release_date": "2024-11-01",
    "popularity": 23.793,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/cE7C87RQUMRVwAShtNeua49mHsy.jpg",
    "runtime": 110,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "livre-encanto-criminal"
},

{
    "id": 176,
    "title": "Jogos Mortais",
    "genre_ids": [
        27,
        9648,
        80
    ],
    "release_date": "2004-10-01",
    "popularity": 15.715,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/jByGeGsJtoghNFHF5TgVvcSJ4Oc.jpg",
    "runtime": 103,
    "networks": [
        119,
        307
    ],
    "certification": "16",
    "slug": "jogos-mortais"
},

{
    "id": 951491,
    "title": "Jogos Mortais X",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2023-09-27",
    "popularity": 25.268,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/l749SGWMIlVf9sXoc7Ib8QhDTgr.jpg",
    "runtime": 118,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "jogos-mortais-x"
},

{
    "id": 615457,
    "title": "Anônimo",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2021-03-18",
    "popularity": 15.363,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/8ooU1cMApznZmMps6UCRsuSQPg6.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "18",
    "slug": "annimo"
},

{
    "id": 4348,
    "title": "Orgulho e Preconceito",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2005-09-16",
    "popularity": 20.665,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/dmnY0Zs8uMSHkMiol7M3xOlvvkK.jpg",
    "runtime": 128,
    "networks": [
        167,
        307,
        484,
        2156
    ],
    "certification": "L",
    "slug": "orgulho-e-preconceito"
},

{
    "id": 882598,
    "title": "Sorria",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2022-09-23",
    "popularity": 22.563,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/uA1W98Qz9iRM2WJnnGGn2mZo6MT.jpg",
    "runtime": 115,
    "networks": [],
    "certification": "16",
    "slug": "sorria"
},

{
    "id": 624860,
    "title": "Matrix Resurrections",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2021-12-16",
    "popularity": 18.346,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/9DT4WVqZqBEI9Kub18gZ3m1D89m.jpg",
    "runtime": 147,
    "networks": [
        119,
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "matrix-resurrections"
},

{
    "id": 1125899,
    "title": "Cleaner",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2025-02-19",
    "popularity": 17.302,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/mwzDApMZAGeYCEVjhegKvCzDX0W.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "cleaner"
},

{
    "id": 398978,
    "title": "O Irlandês",
    "genre_ids": [
        80,
        18,
        36
    ],
    "release_date": "2019-11-01",
    "popularity": 15.912,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/3GPn2W2UdzUE1bp1KtCrYvXiZFt.jpg",
    "runtime": 209,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "o-irlands"
},

{
    "id": 197,
    "title": "Coração Valente",
    "genre_ids": [
        28,
        18,
        36,
        10752
    ],
    "release_date": "1995-05-24",
    "popularity": 21.376,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/tWBbNikf5ng7BuNGA55MkvhLrag.jpg",
    "runtime": 177,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "corao-valente"
},

{
    "id": 843,
    "title": "Amor à Flor da Pele",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2000-09-29",
    "popularity": 20.443,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/7Quda9rbWobhB0Qc01APlrg0A8T.jpg",
    "runtime": 99,
    "networks": [
        11,
        201
    ],
    "certification": "14",
    "slug": "amor-flor-da-pele"
},

{
    "id": 1280672,
    "title": "Um Dia Daqueles",
    "genre_ids": [
        35
    ],
    "release_date": "2025-01-16",
    "popularity": 24.108,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/z7JY5Sqx3c4tAXri672LtQRa3nK.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "um-dia-daqueles"
},

{
    "id": 55779,
    "title": "Premonição 5",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2011-08-12",
    "popularity": 16.279,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/eYowDfwv4pHP7cwFMvvmqwHdLvS.jpg",
    "runtime": 92,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "premonio-5"
},

{
    "id": 915935,
    "title": "Anatomia de uma Queda",
    "genre_ids": [
        53,
        9648,
        80
    ],
    "release_date": "2023-08-23",
    "popularity": 19.812,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/woXYl0DJTx6TsfYWPkSfNHTsoOx.jpg",
    "runtime": 151,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "anatomia-de-uma-queda"
},

{
    "id": 102382,
    "title": "O Espetacular Homem-Aranha 2: A Ameaça de Electro",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2014-04-16",
    "popularity": 26.274,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/6VyN2MXajYyAc0IkxS8KXltMsTj.jpg",
    "runtime": 141,
    "networks": [
        8,
        119,
        167,
        1899,
        1796,
        1825
    ],
    "certification": "12",
    "slug": "o-espetacular-homem-aranha-2-a-ameaa-de-electro"
},

{
    "id": 337404,
    "title": "Cruella",
    "genre_ids": [
        35,
        80,
        10751,
        12
    ],
    "release_date": "2021-05-26",
    "popularity": 22.271,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/rRYNGhcAZlTfIUS7iFoF4H9iDbc.jpg",
    "runtime": 134,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "cruella"
},

{
    "id": 38055,
    "title": "Megamente",
    "genre_ids": [
        16,
        28,
        35,
        10751,
        878
    ],
    "release_date": "2010-10-28",
    "popularity": 15.593,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/juB6OgnyYQa9lCPhaiTBlciibK6.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "L",
    "slug": "megamente"
},

{
    "id": 1400993,
    "title": "Dreadful Penny Dreadful",
    "genre_ids": [],
    "release_date": "2025-02-23",
    "popularity": 26.89,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/7ai3eqTclzLs2Kd9FTgltLf4GhS.jpg",
    "runtime": 160,
    "networks": [],
    "certification": "N/A",
    "slug": "dreadful-penny-dreadful"
},

{
    "id": 1094138,
    "title": "Jackpot: Loteria Mortal!",
    "genre_ids": [
        35,
        28
    ],
    "release_date": "2024-08-13",
    "popularity": 15.163,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/elzEsnRrrhvsPgY0xVbWzhF9mun.jpg",
    "runtime": 107,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "jackpot-loteria-mortal"
},

{
    "id": 1249532,
    "title": "Rippy",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2024-10-25",
    "popularity": 17.791,
    "vote_average": 4.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/cZ5U4Ae74g29E02JR5oR98RQhiR.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "N/A",
    "slug": "rippy"
},

{
    "id": 748167,
    "title": "Feios",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2024-09-12",
    "popularity": 18.14,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/m4er6cm6t7k8ViGSVV4ZX9CXfnx.jpg",
    "runtime": 102,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "feios"
},

{
    "id": 937278,
    "title": "O Pior Vizinho do Mundo",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2022-12-28",
    "popularity": 18.62,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/jN1IEK3G75XsyLJoxFpxX0x5VB9.jpg",
    "runtime": 126,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "o-pior-vizinho-do-mundo"
},

{
    "id": 936245,
    "title": "A Face",
    "genre_ids": [
        9648,
        53
    ],
    "release_date": "2024-11-20",
    "popularity": 16.703,
    "vote_average": 3.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/oGfLzqaZlOeMVc4mNKH1hm8CKYn.jpg",
    "runtime": 113,
    "networks": [],
    "certification": "N/A",
    "slug": "a-face"
},

{
    "id": 675445,
    "title": "Patrulha Canina: O Filme",
    "genre_ids": [
        16,
        10751,
        12,
        35
    ],
    "release_date": "2021-08-09",
    "popularity": 15.797,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/56V3xa8ymXzOQLFGsiU9T1sDmfI.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "L",
    "slug": "patrulha-canina-o-filme"
},

{
    "id": 508943,
    "title": "Luca",
    "genre_ids": [
        16,
        35,
        14,
        12,
        10751
    ],
    "release_date": "2021-06-17",
    "popularity": 23.324,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/m6Ockf2oYhxXoBIBaRLDwCOE410.jpg",
    "runtime": 101,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "luca"
},

{
    "id": 1417,
    "title": "O Labirinto do Fauno",
    "genre_ids": [
        14,
        18,
        10752
    ],
    "release_date": "2006-10-10",
    "popularity": 17.024,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/dOk9NOfmM3SpkExfbHyec7Puz47.jpg",
    "runtime": 118,
    "networks": [
        484
    ],
    "certification": "N/A",
    "slug": "o-labirinto-do-fauno"
},

{
    "id": 120467,
    "title": "O Grande Hotel Budapeste",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2014-02-26",
    "popularity": 19.319,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yabOguSrb8ffUXCkI6t8Rw7xtSh.jpg",
    "runtime": 100,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "o-grande-hotel-budapeste"
},

{
    "id": 924,
    "title": "Madrugada dos Mortos",
    "genre_ids": [
        28,
        27,
        878
    ],
    "release_date": "2004-03-19",
    "popularity": 16.517,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/1ZwFI4EA9xGo3aJV9Ulqx7Y37Rz.jpg",
    "runtime": 100,
    "networks": [
        307
    ],
    "certification": "18",
    "slug": "madrugada-dos-mortos"
},

{
    "id": 1062215,
    "title": "Diabólica",
    "genre_ids": [
        27,
        878,
        53
    ],
    "release_date": "2024-08-28",
    "popularity": 18.82,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/aYVhzSnAbAPswYJVdjBICheMKbd.jpg",
    "runtime": 84,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "diablica"
},

{
    "id": 346648,
    "title": "As Aventuras de Paddington 2",
    "genre_ids": [
        12,
        35,
        10751
    ],
    "release_date": "2017-11-09",
    "popularity": 21.592,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/bVAplALQBfKNRrAdOWol6T49Yw6.jpg",
    "runtime": 103,
    "networks": [
        119,
        2156
    ],
    "certification": "L",
    "slug": "as-aventuras-de-paddington-2"
},

{
    "id": 862557,
    "title": "Hill: Amor pelo Jogo",
    "genre_ids": [
        36,
        18
    ],
    "release_date": "2023-08-18",
    "popularity": 15.5,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/xsdFM9euJikNyRPtFVO43pDpIGh.jpg",
    "runtime": 121,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "hill-amor-pelo-jogo"
},

{
    "id": 346364,
    "title": "It: A Coisa",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2017-09-06",
    "popularity": 19.03,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/uYxz0lIiNgErrPhQbSjUdwYxtFc.jpg",
    "runtime": 134,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "it-a-coisa"
},

{
    "id": 871,
    "title": "O Planeta dos Macacos",
    "genre_ids": [
        878,
        12,
        18,
        28
    ],
    "release_date": "1968-02-07",
    "popularity": 16.392,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/AfFZBNsQDRGpKoXczB9NSZ0VUl1.jpg",
    "runtime": 108,
    "networks": [
        337,
        499
    ],
    "certification": "12",
    "slug": "o-planeta-dos-macacos"
},

{
    "id": 140300,
    "title": "Kung Fu Panda 3",
    "genre_ids": [
        28,
        12,
        16,
        35,
        10751
    ],
    "release_date": "2016-01-23",
    "popularity": 17.56,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/veg496jJXgEgdYV8avk3m6ZjOEg.jpg",
    "runtime": 95,
    "networks": [
        8,
        119,
        307,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "kung-fu-panda-3"
},

{
    "id": 546554,
    "title": "Entre Facas e Segredos",
    "genre_ids": [
        35,
        80,
        9648
    ],
    "release_date": "2019-11-27",
    "popularity": 21.871,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/eOyvpdTQr5RUb0GKd61lzgKU5uz.jpg",
    "runtime": 131,
    "networks": [
        2142,
        2141
    ],
    "certification": "14",
    "slug": "entre-facas-e-segredos"
},

{
    "id": 2109,
    "title": "A Hora do Rush",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "1998-09-18",
    "popularity": 21.002,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/sdzr7YU2fPoTwjfsO4gN7ri0S5e.jpg",
    "runtime": 97,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "a-hora-do-rush"
},

{
    "id": 522938,
    "title": "Rambo: Até o Fim",
    "genre_ids": [
        28,
        53,
        18
    ],
    "release_date": "2019-09-19",
    "popularity": 16.085,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/9gf35jSBJmvavQDRZlpjpLzax1b.jpg",
    "runtime": 101,
    "networks": [
        307,
        2106,
        2107,
        2156
    ],
    "certification": "18",
    "slug": "rambo-at-o-fim"
},

{
    "id": 1139566,
    "title": "Através da Minha Janela 3: Olhos nos Olhos",
    "genre_ids": [
        10749,
        18,
        35
    ],
    "release_date": "2024-02-23",
    "popularity": 25.67,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/73YnjztnaK2T1jsEHfVTRZMrZK8.jpg",
    "runtime": 105,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "atravs-da-minha-janela-3-olhos-nos-olhos"
},

{
    "id": 615173,
    "title": "A Bruxa - Parte 2: A Colisão",
    "genre_ids": [
        28,
        9648,
        53,
        878
    ],
    "release_date": "2022-06-15",
    "popularity": 24.509,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/cah6iIYQBctvCmBjsKGb1NCiygr.jpg",
    "runtime": 137,
    "networks": [],
    "certification": "N/A",
    "slug": "a-bruxa-parte-2-a-coliso"
},

{
    "id": 601,
    "title": "E.T.: O Extraterrestre",
    "genre_ids": [
        878,
        12,
        10751,
        14
    ],
    "release_date": "1982-06-11",
    "popularity": 15.041,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/8j5igb0iuV9TYudw9SuMV5GT9K9.jpg",
    "runtime": 115,
    "networks": [
        167,
        307,
        2156
    ],
    "certification": "L",
    "slug": "et-o-extraterrestre"
},

{
    "id": 1041317,
    "title": "Batalha na Linha de Frente",
    "genre_ids": [
        10752
    ],
    "release_date": "2022-10-06",
    "popularity": 22.798,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/oICQpXrmszXvw0t95isR559J6IL.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "batalha-na-linha-de-frente"
},

{
    "id": 75258,
    "title": "Tinker Bell: O Segredo das Fadas",
    "genre_ids": [
        16,
        10751,
        14,
        12
    ],
    "release_date": "2012-08-17",
    "popularity": 19.56,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/a4XtmRHjpcN8r4ZUn7g3kGEE3F4.jpg",
    "runtime": 75,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "tinker-bell-o-segredo-das-fadas"
},

{
    "id": 345887,
    "title": "O Protetor 2",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2018-07-19",
    "popularity": 20.044,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/q8BiYs0DjyCuqmcUYsembVbjwKT.jpg",
    "runtime": 121,
    "networks": [
        8,
        1796,
        2156
    ],
    "certification": "16",
    "slug": "o-protetor-2"
},

{
    "id": 640,
    "title": "Prenda-Me se For Capaz",
    "genre_ids": [
        18,
        80
    ],
    "release_date": "2002-12-16",
    "popularity": 22.993,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/9DxyEmo1c92OdwylnDVDe2V2bzO.jpg",
    "runtime": 141,
    "networks": [],
    "certification": "12",
    "slug": "prenda-me-se-for-capaz"
},

{
    "id": 1430493,
    "title": "drownpop!",
    "genre_ids": [],
    "release_date": "2025-02-24",
    "popularity": 15.711,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/r1iWvj1S86KZ8Ntszg0fDlF5kC5.jpg",
    "runtime": 1,
    "networks": [],
    "certification": "N/A",
    "slug": "drownpop"
},

{
    "id": 1252428,
    "title": "Anaconda",
    "genre_ids": [
        12,
        27
    ],
    "release_date": "2024-03-01",
    "popularity": 17.944,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/9a7URTaq1Eimlg2ZujPX9FdOeGK.jpg",
    "runtime": 84,
    "networks": [],
    "certification": "N/A",
    "slug": "anaconda"
},

{
    "id": 10096,
    "title": "De Repente 30",
    "genre_ids": [
        35,
        14,
        10749
    ],
    "release_date": "2004-04-13",
    "popularity": 15.242,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/3ZewXNdHKpRE0LrJhj07bWkwQm4.jpg",
    "runtime": 98,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "de-repente-30"
},

{
    "id": 257211,
    "title": "Um Senhor Estagiário",
    "genre_ids": [
        35
    ],
    "release_date": "2015-09-23",
    "popularity": 16.861,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/jjI2z9PvWm69DHzhyYIrsmD6Gj6.jpg",
    "runtime": 121,
    "networks": [
        1899,
        1825
    ],
    "certification": "10",
    "slug": "um-senhor-estagirio"
},

{
    "id": 634492,
    "title": "Madame Teia",
    "genre_ids": [
        28,
        14
    ],
    "release_date": "2024-02-14",
    "popularity": 25.229,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/oLo24iTLbvJAMGr3xcwosXGeCFG.jpg",
    "runtime": 117,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "madame-teia"
},

{
    "id": 341174,
    "title": "Cinquenta Tons Mais Escuros",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2017-02-08",
    "popularity": 22.551,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/9mVMPo0ZPxY4qOR8DR8i9N9YSqS.jpg",
    "runtime": 115,
    "networks": [
        8,
        307,
        484,
        1796
    ],
    "certification": "16",
    "slug": "cinquenta-tons-mais-escuros"
},

{
    "id": 1434301,
    "title": "Puppet Kitchen",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-23",
    "popularity": 20.664,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/u5TV9Qi1OnfpTblEN1g3qjivm8V.jpg",
    "runtime": 8,
    "networks": [],
    "certification": "N/A",
    "slug": "puppet-kitchen"
},

{
    "id": 791373,
    "title": "Liga da Justiça de Zack Snyder",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2021-03-18",
    "popularity": 23.77,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/lsZ5dmMuvZVNMBrkozvJedujbgU.jpg",
    "runtime": 242,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "liga-da-justia-de-zack-snyder"
},

{
    "id": 1026436,
    "title": "A Garota de Miller",
    "genre_ids": [
        53,
        35,
        18
    ],
    "release_date": "2024-01-18",
    "popularity": 15.361,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/aWEZ0c82BZJUf78QHM4YLuZ9SDj.jpg",
    "runtime": 93,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "a-garota-de-miller"
},

{
    "id": 1153291,
    "title": "Llamada privada",
    "genre_ids": [
        53,
        28
    ],
    "release_date": "2023-07-11",
    "popularity": 15.905,
    "vote_average": 9.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/tUjSG0q3NghJ1UT9KzDUq3EyjJk.jpg",
    "runtime": 79,
    "networks": [],
    "certification": "N/A",
    "slug": "llamada-privada"
},

{
    "id": 616037,
    "title": "Thor: Amor e Trovão",
    "genre_ids": [
        14,
        28,
        35
    ],
    "release_date": "2022-07-06",
    "popularity": 24.106,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/71XnRvkadkWZZowCGcuBi4XAKdJ.jpg",
    "runtime": 119,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "thor-amor-e-trovo"
},

{
    "id": 1278,
    "title": "Os Sonhadores",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2003-09-01",
    "popularity": 17.296,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/fYzuBDzgcBr9r2seFcps8orh4tx.jpg",
    "runtime": 116,
    "networks": [
        307,
        11
    ],
    "certification": "16",
    "slug": "os-sonhadores"
},

{
    "id": 1122504,
    "title": "O Anel Amaldiçoado",
    "genre_ids": [
        27
    ],
    "release_date": "2023-05-23",
    "popularity": 18.329,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/7HKgVo8jBISdqxtn4h9CnEgFrKh.jpg",
    "runtime": 88,
    "networks": [
        47,
        683
    ],
    "certification": "16",
    "slug": "o-anel-amaldioado"
},

{
    "id": 948,
    "title": "Halloween - A Noite do Terror",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "1978-10-24",
    "popularity": 14.881,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/mVQ8Lb7FhQXPqkQv0QCNbEwp9a6.jpg",
    "runtime": 91,
    "networks": [
        47,
        692,
        2156
    ],
    "certification": "18",
    "slug": "halloween-a-noite-do-terror"
},

{
    "id": 497698,
    "title": "Viúva Negra",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2021-07-07",
    "popularity": 21.374,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/1olJMMIUYkV6XwET1xRIROqYkxO.jpg",
    "runtime": 135,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "viva-negra"
},

{
    "id": 1429257,
    "title": "Posthumains",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-23",
    "popularity": 22.26,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/xiUR7dGnKCePF3GLq65wUH6ncwh.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "posthumains"
},

{
    "id": 73861,
    "title": "A Serbian Film - Terror sem Limites",
    "genre_ids": [
        80,
        27,
        53
    ],
    "release_date": "2010-06-16",
    "popularity": 20.44,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/r7MR0GmKe4pE0OX43LXMztNz8Z8.jpg",
    "runtime": 104,
    "networks": [],
    "certification": "N/A",
    "slug": "a-serbian-film-terror-sem-limites"
},

{
    "id": 527641,
    "title": "A Cinco Passos de Você",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2019-03-14",
    "popularity": 16.255,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/uwyySfv4kybDpVebZhyb0Bnk3dz.jpg",
    "runtime": 116,
    "networks": [
        307
    ],
    "certification": "12",
    "slug": "a-cinco-passos-de-voc"
},

{
    "id": 508442,
    "title": "Soul",
    "genre_ids": [
        16,
        10751,
        35,
        14
    ],
    "release_date": "2020-12-25",
    "popularity": 19.795,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg",
    "runtime": 100,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "soul"
},

{
    "id": 9340,
    "title": "Os Goonies",
    "genre_ids": [
        12,
        35,
        10751
    ],
    "release_date": "1985-06-07",
    "popularity": 15.162,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/6YGlQxEzEqQ5VYj64NvzbItXKPX.jpg",
    "runtime": 114,
    "networks": [
        119
    ],
    "certification": "L",
    "slug": "os-goonies"
},

{
    "id": 450465,
    "title": "Vidro",
    "genre_ids": [
        53,
        18,
        878
    ],
    "release_date": "2019-01-16",
    "popularity": 15.59,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/d8rvXqqZ3hzrWfFGS47jU7sCx69.jpg",
    "runtime": 129,
    "networks": [
        337,
        119
    ],
    "certification": "14",
    "slug": "vidro"
},

{
    "id": 390845,
    "title": "맛있는 비행",
    "genre_ids": [
        10749
    ],
    "release_date": "2015-11-01",
    "popularity": 17.786,
    "vote_average": 4.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/xLZQdhtdQasK2LwD86xhwe19pYG.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 297762,
    "title": "Mulher-Maravilha",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2017-05-30",
    "popularity": 16.695,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/ujQthWB6c0ojlARk28NSTmqidbF.jpg",
    "runtime": 141,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "mulher-maravilha"
},

{
    "id": 57214,
    "title": "Projeto X: Uma Festa Fora de Controle",
    "genre_ids": [
        35
    ],
    "release_date": "2012-03-01",
    "popularity": 17.023,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/zUjyYALoVdHMTscRv5ViN7WpqJ4.jpg",
    "runtime": 88,
    "networks": [
        1899,
        1825
    ],
    "certification": "18",
    "slug": "projeto-x-uma-festa-fora-de-controle"
},

{
    "id": 419430,
    "title": "Corra!",
    "genre_ids": [
        9648,
        53,
        27
    ],
    "release_date": "2017-02-24",
    "popularity": 18.135,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/7hmmKIWDHi7jzOiGzffZesXKKfp.jpg",
    "runtime": 104,
    "networks": [
        119,
        307
    ],
    "certification": "14",
    "slug": "corra"
},

{
    "id": 514847,
    "title": "A Caçada",
    "genre_ids": [
        28,
        53,
        27
    ],
    "release_date": "2020-03-11",
    "popularity": 15.796,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/mDt3GkephI5yrRsEgLfdo3MYxyj.jpg",
    "runtime": 90,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "a-caada"
},

{
    "id": 353081,
    "title": "Missão: Impossível - Efeito Fallout",
    "genre_ids": [
        28,
        12
    ],
    "release_date": "2018-07-13",
    "popularity": 23.308,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/dheywKL0VNkd0kmRvUlTxVaHul1.jpg",
    "runtime": 147,
    "networks": [
        337,
        531,
        1853,
        2156,
        2303
    ],
    "certification": "14",
    "slug": "misso-impossvel-efeito-fallout"
},

{
    "id": 560016,
    "title": "Fúria Primitiva",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-04-03",
    "popularity": 18.808,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/hYjfNfHW1bfZBCjRU62geQIb2Ud.jpg",
    "runtime": 122,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "fria-primitiva"
},

{
    "id": 1134424,
    "title": "Guerreiros Mágicos: A Lenda das Oito Luas",
    "genre_ids": [
        16,
        28,
        12,
        14,
        878
    ],
    "release_date": "2023-10-11",
    "popularity": 18.599,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/1NJHvzcoUXA6GGvlgr0usZhIPKK.jpg",
    "runtime": 90,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "guerreiros-mgicos-a-lenda-das-oito-luas"
},

{
    "id": 40348,
    "title": "Emanuelle nera",
    "genre_ids": [
        18,
        10749,
        12
    ],
    "release_date": "1975-11-27",
    "popularity": 16.481,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/3JryT3M8tYcMlKrgh3NYhDiwM7d.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "emanuelle-nera"
},

{
    "id": 335988,
    "title": "Transformers: O Último Cavaleiro",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2017-06-16",
    "popularity": 19.316,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/7ugUPQw8JjGazfd28MIPADvDaUT.jpg",
    "runtime": 149,
    "networks": [
        337,
        8,
        307,
        582,
        1796,
        2156
    ],
    "certification": "12",
    "slug": "transformers-o-ltimo-cavaleiro"
},

{
    "id": 38700,
    "title": "Bad Boys Para Sempre",
    "genre_ids": [
        53,
        28,
        80
    ],
    "release_date": "2020-01-15",
    "popularity": 21.586,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/u3S3p3j0vL8lHrxTsgGzRQMCdzh.jpg",
    "runtime": 113,
    "networks": [],
    "certification": "16",
    "slug": "bad-boys-para-sempre"
},

{
    "id": 1012201,
    "title": "HAIKYU!! The Dumpster Battle",
    "genre_ids": [
        16,
        35
    ],
    "release_date": "2024-02-16",
    "popularity": 15.482,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/pRfLrwbfUWmUj1Jh1NGLSQceHoT.jpg",
    "runtime": 85,
    "networks": [
        283,
        1968
    ],
    "certification": "12",
    "slug": "haikyu-the-dumpster-battle"
},

{
    "id": 901563,
    "title": "Close",
    "genre_ids": [
        18
    ],
    "release_date": "2022-11-01",
    "popularity": 14.749,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/nOIBXhexg235lL6RsVI6rp8rQj1.jpg",
    "runtime": 104,
    "networks": [
        8,
        11,
        484,
        1796,
        201
    ],
    "certification": "N/A",
    "slug": "close"
},

{
    "id": 1186532,
    "title": "A Forja – O Poder da Transformação",
    "genre_ids": [
        18,
        10751
    ],
    "release_date": "2024-08-22",
    "popularity": 19.02,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/zMXWRL4uhtpNTXVeMHsFHmXQRt0.jpg",
    "runtime": 123,
    "networks": [
        484
    ],
    "certification": "L",
    "slug": "a-forja-o-poder-da-transformao"
},

{
    "id": 101299,
    "title": "Jogos Vorazes: Em Chamas",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2013-11-15",
    "popularity": 17.554,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/sgVx1erL9zbwfomkFJG9ux8d1PM.jpg",
    "runtime": 146,
    "networks": [],
    "certification": "14",
    "slug": "jogos-vorazes-em-chamas"
},

{
    "id": 77338,
    "title": "Intocáveis",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2011-11-02",
    "popularity": 21.869,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/2tAzFC2xUAXEx96l5Xixb6WLAyO.jpg",
    "runtime": 112,
    "networks": [
        2156
    ],
    "certification": "14",
    "slug": "intocveis"
},

{
    "id": 13461,
    "title": "100 Escovadas Antes de Dormir",
    "genre_ids": [
        18
    ],
    "release_date": "2005-11-18",
    "popularity": 16.386,
    "vote_average": 4.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/eR0foDZSlDWt0Vy8STEEf0ioPph.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": "100-escovadas-antes-de-dormir"
},

{
    "id": 141,
    "title": "Donnie Darko",
    "genre_ids": [
        14,
        18,
        9648
    ],
    "release_date": "2001-01-19",
    "popularity": 15.041,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/6FKym4sm5LcqUC80HNpn2ejVoro.jpg",
    "runtime": 113,
    "networks": [
        119,
        11,
        201
    ],
    "certification": "14",
    "slug": "donnie-darko"
},

{
    "id": 372058,
    "title": "Your Name",
    "genre_ids": [
        16,
        10749,
        18
    ],
    "release_date": "2016-08-26",
    "popularity": 24.466,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/bMOKAjTU1TNUjRSF7icldbii06u.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "L",
    "slug": "your-name"
},

{
    "id": 972614,
    "title": "Pacto de Redenção",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2024-03-15",
    "popularity": 22.781,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/1jVlr869bV5ulcrJzqNlJs5KTMx.jpg",
    "runtime": 114,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "pacto-de-redeno"
},

{
    "id": 1340602,
    "title": "As Tias",
    "genre_ids": [
        27
    ],
    "release_date": "2024-08-28",
    "popularity": 16.067,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/sxO4XgLEfmzyiDVWDqVNJZJIWyw.jpg",
    "runtime": 88,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "as-tias"
},

{
    "id": 1267217,
    "title": "Sugar Baby",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-04-25",
    "popularity": 20.996,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/9xeklWZwfu91tNzbl4bcYnrXEEB.jpg",
    "runtime": 103,
    "networks": [],
    "certification": "N/A",
    "slug": "sugar-baby"
},

{
    "id": 646380,
    "title": "Não Olhe para Cima",
    "genre_ids": [
        35,
        878,
        18
    ],
    "release_date": "2021-12-08",
    "popularity": 17.943,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/6Sc7Tjt7aPsdghYK32mDMFeZkqJ.jpg",
    "runtime": 138,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "no-olhe-para-cima"
},

{
    "id": 1211483,
    "title": "Skal: Fight for Survival",
    "genre_ids": [
        28,
        27,
        35,
        53
    ],
    "release_date": "2023-11-24",
    "popularity": 14.625,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/1On8iF3AsFIbpyfZg1xiGWMAFBn.jpg",
    "runtime": 77,
    "networks": [],
    "certification": "N/A",
    "slug": "skal-fight-for-survival"
},

{
    "id": 157350,
    "title": "Divergente",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2014-03-14",
    "popularity": 22.982,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/gktEuhRYZrlinT3sLSt7Fvmqbe5.jpg",
    "runtime": 139,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "divergente"
},

{
    "id": 934632,
    "title": "Rebel Moon - Parte 2: A Marcadora de Cicatrizes",
    "genre_ids": [
        878,
        28
    ],
    "release_date": "2024-04-19",
    "popularity": 20.039,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/kkP50MUDBqt4JqDEwxk32wUHePk.jpg",
    "runtime": 123,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "rebel-moon-parte-2-a-marcadora-de-cicatrizes"
},

{
    "id": 10882,
    "title": "A Bela Adormecida",
    "genre_ids": [
        14,
        16,
        10749,
        10751
    ],
    "release_date": "1959-02-17",
    "popularity": 16.846,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/2MjuCYa6RkhNHmNDl4MqktxK8XH.jpg",
    "runtime": 75,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-bela-adormecida"
},

{
    "id": 772,
    "title": "Esqueceram de Mim 2: Perdido em Nova York",
    "genre_ids": [
        35,
        10751,
        12
    ],
    "release_date": "1992-11-15",
    "popularity": 22.259,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/6s8Xy1HMPa0FAZIFu2J4V4HUDeC.jpg",
    "runtime": 120,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "esqueceram-de-mim-2-perdido-em-nova-york"
},

{
    "id": 1388694,
    "title": "O Assassino do Calendário",
    "genre_ids": [
        80,
        53
    ],
    "release_date": "2024-06-17",
    "popularity": 23.769,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/aUZutzzSNvE7IDchtBRlHPCLvjB.jpg",
    "runtime": 95,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "o-assassino-do-calendrio"
},

{
    "id": 87101,
    "title": "O Exterminador do Futuro: Gênesis",
    "genre_ids": [
        878,
        28,
        53,
        12
    ],
    "release_date": "2015-06-23",
    "popularity": 22.546,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/iAvjgsPiNp0pvgOWaMTSk2HXJh0.jpg",
    "runtime": 126,
    "networks": [
        484
    ],
    "certification": "12",
    "slug": "o-exterminador-do-futuro-gnesis"
},

{
    "id": 412988,
    "title": "Crimes em Happytime",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2018-08-22",
    "popularity": 19.554,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/bFHDbjHMuDLVG2KaXGpPht77fGY.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "16",
    "slug": "crimes-em-happytime"
},

{
    "id": 1257400,
    "title": "Encontro com o Ditador",
    "genre_ids": [
        36,
        18
    ],
    "release_date": "2024-06-05",
    "popularity": 15.239,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/4x52sBptAvaowVGQ23OuNWtz5Ze.jpg",
    "runtime": 112,
    "networks": [],
    "certification": "N/A",
    "slug": "encontro-com-o-ditador"
},

{
    "id": 531428,
    "title": "Retrato de uma Jovem em Chamas",
    "genre_ids": [
        18,
        10749,
        36
    ],
    "release_date": "2019-09-18",
    "popularity": 15.71,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/c3OkDxs7PQuLB12qiwZUDg7ZMO6.jpg",
    "runtime": 122,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "N/A",
    "slug": "retrato-de-uma-jovem-em-chamas"
},

{
    "id": 40108,
    "title": "Η Μαύρη Εμμανουέλα",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "1980-02-01",
    "popularity": 24.077,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/wtI5BM4SOQiDX8FIscgeM1MZeaO.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 105,
    "title": "De Volta para o Futuro",
    "genre_ids": [
        12,
        35,
        878
    ],
    "release_date": "1985-07-03",
    "popularity": 21.328,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/egrTG3M5KhO5E6nfgGLtUYeuERn.jpg",
    "runtime": 115,
    "networks": [
        167,
        307,
        2156
    ],
    "certification": "L",
    "slug": "de-volta-para-o-futuro"
},

{
    "id": 254,
    "title": "King Kong",
    "genre_ids": [
        12,
        18,
        28
    ],
    "release_date": "2005-12-12",
    "popularity": 15.361,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/rdat3dqmakvhE2oRnUml9g5gZJg.jpg",
    "runtime": 187,
    "networks": [
        119,
        307
    ],
    "certification": "12",
    "slug": "king-kong"
},

{
    "id": 619264,
    "title": "O Poço",
    "genre_ids": [
        18,
        878,
        53
    ],
    "release_date": "2019-11-08",
    "popularity": 18.325,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/kY0ET33EoiJhjaPCzzvywCDqP6b.jpg",
    "runtime": 95,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "o-poo"
},

{
    "id": 28178,
    "title": "Sempre ao Seu Lado",
    "genre_ids": [
        18,
        10751
    ],
    "release_date": "2009-06-08",
    "popularity": 14.866,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/jVTFkYhlbW7P3YxoA2rsF10nx2T.jpg",
    "runtime": 93,
    "networks": [
        307,
        2156
    ],
    "certification": "N/A",
    "slug": "sempre-ao-seu-lado"
},

{
    "id": 1434295,
    "title": "St. Marie, Montana",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-23",
    "popularity": 20.664,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/sf713cQZLRSx9blb9ILF9LWN0Wk.jpg",
    "runtime": 17,
    "networks": [],
    "certification": "N/A",
    "slug": "st-marie-montana"
},

{
    "id": 1152624,
    "title": "3 Days in Malay",
    "genre_ids": [
        28,
        12,
        10752
    ],
    "release_date": "2023-08-11",
    "popularity": 15.898,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/hqnfqeCILvgKGWKOut5lVdxdeJh.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "3-days-in-malay"
},

{
    "id": 1422227,
    "title": "Aşk Sadece Bir An",
    "genre_ids": [
        10749
    ],
    "release_date": "2025-02-14",
    "popularity": 20.401,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/rwiMs8Lr6FAjvXEiQzTJyxLqZee.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "ak-sadece-bir-an"
},

{
    "id": 10555,
    "title": "O Espanta Tubarões",
    "genre_ids": [
        16,
        28,
        35,
        10751
    ],
    "release_date": "2004-09-20",
    "popularity": 17.287,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/7CPBvGiryIQkylibEm0YbLUvBEB.jpg",
    "runtime": 90,
    "networks": [
        307
    ],
    "certification": "N/A",
    "slug": "o-espanta-tubares"
},

{
    "id": 24,
    "title": "Kill Bill: Volume 1",
    "genre_ids": [
        28,
        80
    ],
    "release_date": "2003-10-10",
    "popularity": 19.785,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/moCulwjwEIWbtU5CG1BegZghP0s.jpg",
    "runtime": 111,
    "networks": [
        119,
        307,
        11,
        2142,
        2141
    ],
    "certification": "18",
    "slug": "kill-bill-volume-1"
},

{
    "id": 1130053,
    "title": "A Maldição de Cinderela",
    "genre_ids": [
        27,
        14
    ],
    "release_date": "2024-05-31",
    "popularity": 17.006,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/axJbIUtkoWsmyvGA4gBYUSlWtDM.jpg",
    "runtime": 82,
    "networks": [],
    "certification": "N/A",
    "slug": "a-maldio-de-cinderela"
},

{
    "id": 986056,
    "title": "Thunderbolts*",
    "genre_ids": [
        28,
        12
    ],
    "release_date": "2025-04-30",
    "popularity": 16.687,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/hQYEA4Ty1RlxsToWMYLE2RzSc0N.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "thunderbolts"
},

{
    "id": 1038392,
    "title": "Invocação do Mal 4",
    "genre_ids": [
        27
    ],
    "release_date": "2025-09-04",
    "popularity": 16.246,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ho9UW4eV2iNGgNmkkiClPp9VNhy.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "invocao-do-mal-4"
},

{
    "id": 27066,
    "title": "O Voyeur",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1994-01-27",
    "popularity": 15.59,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/nlEytmo8J2cAEPMX9O9yLF5TxAA.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "o-voyeur"
},

{
    "id": 604,
    "title": "Matrix Reloaded",
    "genre_ids": [
        12,
        28,
        53,
        878
    ],
    "release_date": "2003-05-15",
    "popularity": 23.304,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/e7DdXOXP6mH2y7Fv7ujrk5tlsh7.jpg",
    "runtime": 138,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "matrix-reloaded"
},

{
    "id": 1023922,
    "title": "MaXXXine",
    "genre_ids": [
        27,
        9648,
        80
    ],
    "release_date": "2024-07-04",
    "popularity": 17.78,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/dmi277uSdCavkSLTVNBUMlyDYy0.jpg",
    "runtime": 103,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "maxxxine"
},

{
    "id": 924482,
    "title": "Perseguição nas Alturas",
    "genre_ids": [
        53,
        12
    ],
    "release_date": "2022-02-18",
    "popularity": 15.794,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/yFjL4xFc6uxrfxBuZLei6L268SM.jpg",
    "runtime": 86,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "perseguio-nas-alturas"
},

{
    "id": 1433732,
    "title": "Lily's Big Adventure",
    "genre_ids": [
        35,
        53,
        12
    ],
    "release_date": "2025-02-24",
    "popularity": 15.151,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/nyNjfv6VhNtHVC1pAo8Xz20xch1.jpg",
    "runtime": 8,
    "networks": [],
    "certification": "N/A",
    "slug": "lilys-big-adventure"
},

{
    "id": 500,
    "title": "Cães de Aluguel",
    "genre_ids": [
        80,
        53
    ],
    "release_date": "1992-09-02",
    "popularity": 14.552,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/lUk6RpD6DIqbgjZVAFEWiDCkf8v.jpg",
    "runtime": 99,
    "networks": [
        47,
        307,
        11,
        683,
        2156,
        201
    ],
    "certification": "16",
    "slug": "ces-de-aluguel"
},

{
    "id": 1173558,
    "title": "O Lado Bom de Ser Traída",
    "genre_ids": [
        18,
        9648,
        10749
    ],
    "release_date": "2023-10-25",
    "popularity": 18.115,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/boPkFKrDSUeRxc9ltZRsuVSdRkz.jpg",
    "runtime": 98,
    "networks": [
        8,
        1796
    ],
    "certification": "18",
    "slug": "o-lado-bom-de-ser-trada"
},

{
    "id": 567811,
    "title": "Um Gato de Sorte",
    "genre_ids": [
        16,
        35,
        10751,
        14
    ],
    "release_date": "2024-04-18",
    "popularity": 21.575,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/nn7raMhfVvhyvLIUdYg2ObQgowX.jpg",
    "runtime": 87,
    "networks": [
        119
    ],
    "certification": "L",
    "slug": "um-gato-de-sorte"
},

{
    "id": 375794,
    "title": "Ninguém Merece, Frida",
    "genre_ids": [
        35
    ],
    "release_date": "2016-09-02",
    "popularity": 16.474,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/1HLhSPjTcqaJgfWOMflkJKHuwn.jpg",
    "runtime": 114,
    "networks": [
        8,
        1899,
        307,
        1796,
        1825
    ],
    "certification": "N/A",
    "slug": "ningum-merece-frida"
},

{
    "id": 845111,
    "title": "Os Três Mosqueteiros: Milady",
    "genre_ids": [
        12,
        28,
        18,
        36
    ],
    "release_date": "2023-12-13",
    "popularity": 15.477,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/A1oqO9fkhmK3u3CX1hoUmFPV6AA.jpg",
    "runtime": 115,
    "networks": [
        2156
    ],
    "certification": "N/A",
    "slug": "os-trs-mosqueteiros-milady"
},

{
    "id": 436270,
    "title": "Adão Negro",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2022-10-19",
    "popularity": 19.289,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/soHjr03YMSe5uUMaEQEe1lC145O.jpg",
    "runtime": 125,
    "networks": [
        119,
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "ado-negro"
},

{
    "id": 927107,
    "title": "Agente X: A Última Missão",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2023-12-14",
    "popularity": 17.551,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/aXbHAgNxlb8KfWDbpj1O4TNatkH.jpg",
    "runtime": 110,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "agente-x-a-ltima-misso"
},

{
    "id": 107257,
    "title": "A Perfect Ending",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2012-06-01",
    "popularity": 18.788,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/mjwWEwE1xdbtFGCOgeXi5jvQnOU.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "16",
    "slug": "a-perfect-ending"
},

{
    "id": 297,
    "title": "Encontro Marcado",
    "genre_ids": [
        14,
        18,
        10749
    ],
    "release_date": "1998-11-12",
    "popularity": 18.591,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/3xa4VLDaWdH44zxuUPikPBfTl9M.jpg",
    "runtime": 178,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "12",
    "slug": "encontro-marcado"
},

{
    "id": 2048,
    "title": "Eu, Robô",
    "genre_ids": [
        28,
        878
    ],
    "release_date": "2004-07-15",
    "popularity": 14.743,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/2I8b8SScgbVONX0LCURG8O184Dy.jpg",
    "runtime": 114,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "eu-rob"
},

{
    "id": 1101448,
    "title": "Imparável",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2024-12-06",
    "popularity": 19.003,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/dS7YrQ0nk5oYuYJDpEhYvBcdanl.jpg",
    "runtime": 123,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "imparvel"
},

{
    "id": 1416643,
    "title": "Piston Cup: Legacy",
    "genre_ids": [
        35,
        28
    ],
    "release_date": "2025-02-22",
    "popularity": 22.763,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/x7u2ZJwGejinLRMHUoVqMsONWRb.jpg",
    "runtime": 66,
    "networks": [],
    "certification": "N/A",
    "slug": "piston-cup-legacy"
},

{
    "id": 550988,
    "title": "Free Guy: Assumindo o Controle",
    "genre_ids": [
        35,
        12,
        878
    ],
    "release_date": "2021-08-11",
    "popularity": 21.855,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/jXlGeLOg2RKHmV9CinVaIB4ijKU.jpg",
    "runtime": 114,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "free-guy-assumindo-o-controle"
},

{
    "id": 519465,
    "title": "Rainha de Copas",
    "genre_ids": [
        18
    ],
    "release_date": "2019-03-27",
    "popularity": 16.366,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/gPMs9VSGr5VzPxfC150T9MmwEh.jpg",
    "runtime": 127,
    "networks": [
        47
    ],
    "certification": "N/A",
    "slug": "rainha-de-copas"
},

{
    "id": 618588,
    "title": "Uma Prova de Coragem",
    "genre_ids": [
        12,
        18
    ],
    "release_date": "2024-03-15",
    "popularity": 14.381,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/31092QuIGplIz0Tmds5LytzU0yY.jpg",
    "runtime": 107,
    "networks": [
        119
    ],
    "certification": "12",
    "slug": "uma-prova-de-coragem"
},

{
    "id": 72105,
    "title": "Ted",
    "genre_ids": [
        35,
        14
    ],
    "release_date": "2012-06-29",
    "popularity": 15.038,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/patvtN6QlClCRZlswIPxDSYJRzW.jpg",
    "runtime": 107,
    "networks": [
        119,
        307
    ],
    "certification": "16",
    "slug": "ted"
},

{
    "id": 170,
    "title": "Extermínio",
    "genre_ids": [
        27,
        53,
        878
    ],
    "release_date": "2002-10-31",
    "popularity": 20.987,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/yCvIASL9gEoYrwzP6xqiQrN6AeZ.jpg",
    "runtime": 112,
    "networks": [],
    "certification": "16",
    "slug": "extermnio"
},

{
    "id": 530915,
    "title": "1917",
    "genre_ids": [
        10752,
        36,
        53,
        18
    ],
    "release_date": "2019-12-25",
    "popularity": 16.061,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/m6VVgmwNdOWvLo8nlheLPQU5wr7.jpg",
    "runtime": 119,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "1917"
},

{
    "id": 601796,
    "title": "Alienoid",
    "genre_ids": [
        878,
        28,
        14,
        12
    ],
    "release_date": "2022-07-20",
    "popularity": 23.714,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/ynyN9hdxL5vq7GnSX8Fdz3TfoTE.jpg",
    "runtime": 143,
    "networks": [],
    "certification": "N/A",
    "slug": "alienoid"
},

{
    "id": 10144,
    "title": "A Pequena Sereia",
    "genre_ids": [
        16,
        10751,
        14
    ],
    "release_date": "1989-11-17",
    "popularity": 22.946,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/bl0XvEAEJ2mSUzNFuieyu1gvTXs.jpg",
    "runtime": 83,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-pequena-sereia"
},

{
    "id": 76338,
    "title": "Thor: O Mundo Sombrio",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2013-10-30",
    "popularity": 20.023,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/iiCJF71QoY0cU14wHusG9LMsSrC.jpg",
    "runtime": 112,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "thor-o-mundo-sombrio"
},

{
    "id": 1059128,
    "title": "Queer",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2024-11-27",
    "popularity": 22.197,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/xe4b2TMciLKA1C0JlhWxb4ENLln.jpg",
    "runtime": 135,
    "networks": [
        11,
        201
    ],
    "certification": "16",
    "slug": "queer"
},

{
    "id": 9919,
    "title": "Como Perder um Homem em 10 Dias",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2003-02-07",
    "popularity": 16.839,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/qxwgxjFUtZ3qf7vib9na6tdPfwT.jpg",
    "runtime": 116,
    "networks": [
        8,
        1796,
        2156
    ],
    "certification": "12",
    "slug": "como-perder-um-homem-em-10-dias"
},

{
    "id": 1414435,
    "title": "Blood Ties",
    "genre_ids": [
        53
    ],
    "release_date": "2025-02-22",
    "popularity": 22.522,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/rXGZaHXndC37rBJ26Jyks1KIcxB.jpg",
    "runtime": 9,
    "networks": [],
    "certification": "N/A",
    "slug": "blood-ties"
},

{
    "id": 10140,
    "title": "As Crônicas de Nárnia: A Viagem do Peregrino da Alvorada",
    "genre_ids": [
        12,
        10751,
        14
    ],
    "release_date": "2010-12-02",
    "popularity": 14.624,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/tNL5HfeHF0J9qocelOkgPV4JqXZ.jpg",
    "runtime": 113,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "as-crnicas-de-nrnia-a-viagem-do-peregrino-da-alvorada"
},

{
    "id": 665,
    "title": "Ben-Hur",
    "genre_ids": [
        36,
        18,
        12,
        28
    ],
    "release_date": "1959-11-18",
    "popularity": 15.236,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/m4WQ1dBIrEIHZNCoAjdpxwSKWyH.jpg",
    "runtime": 212,
    "networks": [
        1899,
        499,
        1825
    ],
    "certification": "N/A",
    "slug": "ben-hur"
},

{
    "id": 1265,
    "title": "Ponte para Terabítia",
    "genre_ids": [
        12,
        18,
        10751
    ],
    "release_date": "2007-02-15",
    "popularity": 15.701,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/nvwKMGIrn3NnC3ByierBzRKuVIR.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "L",
    "slug": "ponte-para-terabtia"
},

{
    "id": 3170,
    "title": "Bambi",
    "genre_ids": [
        16,
        18,
        10751
    ],
    "release_date": "1942-02-11",
    "popularity": 15.344,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/dpgRyhfvS2ieJbS50z7vDrHrTXb.jpg",
    "runtime": 70,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "bambi"
},

{
    "id": 44214,
    "title": "Cisne Negro",
    "genre_ids": [
        18,
        53,
        27
    ],
    "release_date": "2010-12-03",
    "popularity": 19.544,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/tqlmLBt2i5SHNpXEj2nqk10Crwa.jpg",
    "runtime": 109,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "cisne-negro"
},

{
    "id": 301528,
    "title": "Toy Story 4",
    "genre_ids": [
        10751,
        12,
        16,
        35,
        14
    ],
    "release_date": "2019-06-19",
    "popularity": 17.941,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/csiyO6q8rR74pfgJDjwINzhoick.jpg",
    "runtime": 100,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "toy-story-4"
},

{
    "id": 1018,
    "title": "Cidade dos Sonhos",
    "genre_ids": [
        53,
        18,
        9648
    ],
    "release_date": "2001-06-06",
    "popularity": 21.325,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/nLAE1zU4jLX3qxx4d87Nz7DsqQg.jpg",
    "runtime": 147,
    "networks": [
        11,
        201
    ],
    "certification": "16",
    "slug": "cidade-dos-sonhos"
},

{
    "id": 8961,
    "title": "Os Bad Boys II",
    "genre_ids": [
        28,
        80,
        35
    ],
    "release_date": "2003-07-18",
    "popularity": 14.849,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/43uHXNlX3Ip7HgLOvxMHOpCxYC0.jpg",
    "runtime": 147,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "os-bad-boys-ii"
},

{
    "id": 9693,
    "title": "Filhos da Esperança",
    "genre_ids": [
        18,
        28,
        53,
        878
    ],
    "release_date": "2006-09-22",
    "popularity": 18.315,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/BHTzFqP7hrjicDiSYf6wtS8Xb7.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "16",
    "slug": "filhos-da-esperana"
},

{
    "id": 700391,
    "title": "65: Ameaça Pré-Histórica",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2023-03-02",
    "popularity": 15.897,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/uwAUZ2yD6mgQl2lhuEkRDpl5lmR.jpg",
    "runtime": 92,
    "networks": [
        119
    ],
    "certification": "12",
    "slug": "65-ameaa-pr-histrica"
},

{
    "id": 1434162,
    "title": "First Ate",
    "genre_ids": [
        27
    ],
    "release_date": "2025-02-23",
    "popularity": 20.664,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/d4OqUruOjLUAhv7LAVBrjy0npYV.jpg",
    "runtime": 1,
    "networks": [],
    "certification": "N/A",
    "slug": "first-ate"
},

{
    "id": 4909,
    "title": "O Dia do Chacal",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "1973-05-16",
    "popularity": 20.39,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/gV2TBSkuNC8nKSgv2awbjaQSM1g.jpg",
    "runtime": 143,
    "networks": [
        47,
        683
    ],
    "certification": "N/A",
    "slug": "o-dia-do-chacal"
},

{
    "id": 807339,
    "title": "Apartamento 7A",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-09-20",
    "popularity": 14.282,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/oyZCDnH17nPtZxAomgLqPjMGqS2.jpg",
    "runtime": 106,
    "networks": [
        531,
        484,
        582,
        1853,
        2303
    ],
    "certification": "16",
    "slug": "apartamento-7a"
},

{
    "id": 308266,
    "title": "Cães de Guerra",
    "genre_ids": [
        35,
        80,
        18
    ],
    "release_date": "2016-08-18",
    "popularity": 16.246,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/uv9g0yF3z10tWWq24OQewQf6r5e.jpg",
    "runtime": 115,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "ces-de-guerra"
},

{
    "id": 36885,
    "title": "Schulmädchen-Report 3. Teil: Was Eltern nicht mal ahnen",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "1972-02-17",
    "popularity": 17.267,
    "vote_average": 4.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/s0oj7XisoeJ5wogMuZRw8eDzcn0.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "schulmdchen-report-3-teil-was-eltern-nicht-mal-ahnen"
},

{
    "id": 433808,
    "title": "O Ritual",
    "genre_ids": [
        27,
        53,
        9648
    ],
    "release_date": "2017-10-11",
    "popularity": 16.981,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/to3NxQoBCaqxbBDkJb3lPvhHpcN.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "14",
    "slug": "o-ritual"
},

{
    "id": 18239,
    "title": "A Saga Crepúsculo: Lua Nova",
    "genre_ids": [
        12,
        14,
        18,
        10749
    ],
    "release_date": "2009-11-18",
    "popularity": 19.784,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/gF0TjnaoKqsYaSni1YN1snQ8q4z.jpg",
    "runtime": 131,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "12",
    "slug": "a-saga-crepsculo-lua-nova"
},

{
    "id": 653,
    "title": "Nosferatu: Uma Sinfonia de Horror",
    "genre_ids": [
        27,
        14
    ],
    "release_date": "1922-02-16",
    "popularity": 16.673,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/dcSEYDXD4nwKSmRvTVUI8WuuNyf.jpg",
    "runtime": 94,
    "networks": [
        47,
        447,
        692,
        1973
    ],
    "certification": "N/A",
    "slug": "nosferatu-uma-sinfonia-de-horror"
},

{
    "id": 996154,
    "title": "Resgate em Amsterdã",
    "genre_ids": [
        28,
        80,
        9648,
        53
    ],
    "release_date": "2023-04-12",
    "popularity": 15.584,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/iw3zC4i0wA1k6qlMiYdM7AG92q5.jpg",
    "runtime": 93,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "resgate-em-amsterd"
},

{
    "id": 1366,
    "title": "Rocky: Um Lutador",
    "genre_ids": [
        18
    ],
    "release_date": "1976-11-20",
    "popularity": 15.784,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/b9B1DXcPNsJfTtc4x2LKA3bykoJ.jpg",
    "runtime": 119,
    "networks": [
        499,
        2142,
        2141
    ],
    "certification": "12",
    "slug": "rocky-um-lutador"
},

{
    "id": 1123278,
    "title": "O Último Refúgio",
    "genre_ids": [
        53
    ],
    "release_date": "2024-05-10",
    "popularity": 23.267,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/95pve5bSSHQ695P5bKivC8oe2QY.jpg",
    "runtime": 86,
    "networks": [
        484,
        2106,
        2107
    ],
    "certification": "N/A",
    "slug": "o-ltimo-refgio"
},

{
    "id": 1032823,
    "title": "Armadilha",
    "genre_ids": [
        80,
        53
    ],
    "release_date": "2024-07-31",
    "popularity": 17.776,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/ArVwz2CXHiY2SuCRYRsfRlG2Fac.jpg",
    "runtime": 105,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "armadilha"
},

{
    "id": 123338,
    "title": "玉蒲團III官人我要",
    "genre_ids": [
        35,
        10749,
        18
    ],
    "release_date": "1998-04-23",
    "popularity": 14.528,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/sfEu6qJhDJxs552GTkOa1Ulgmjr.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "iii"
},

{
    "id": 1061474,
    "title": "Superman",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2025-07-09",
    "popularity": 16.472,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/vFhGi3pupWwq50Odi47csD3SxTr.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "superman"
},

{
    "id": 1145028,
    "title": "Uma Casa Sem Saída",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2023-10-06",
    "popularity": 15.151,
    "vote_average": 4.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/lXp4JIHNHf1vO5qcV0ISfwd0pG0.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "14",
    "slug": "uma-casa-sem-sada"
},

{
    "id": 1041613,
    "title": "Imaculada",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2024-03-20",
    "popularity": 21.573,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/tsV19P8J4NMP54cC8QCg1IkLLks.jpg",
    "runtime": 89,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "imaculada"
},

{
    "id": 1579,
    "title": "Apocalypto",
    "genre_ids": [
        28,
        18,
        36
    ],
    "release_date": "2006-12-07",
    "popularity": 18.107,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/cRY25Q32kDNPFDkFkxAs6bgCq3L.jpg",
    "runtime": 139,
    "networks": [],
    "certification": "14",
    "slug": "apocalypto"
},

{
    "id": 310131,
    "title": "A Bruxa",
    "genre_ids": [
        27,
        14,
        18
    ],
    "release_date": "2016-02-19",
    "popularity": 19.276,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/qqOtwhj8DxOBIwI0u6ThooXEIBR.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "16",
    "slug": "a-bruxa"
},

{
    "id": 339846,
    "title": "Baywatch: S.O.S. Malibu",
    "genre_ids": [
        35,
        28,
        80
    ],
    "release_date": "2017-05-25",
    "popularity": 17.545,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/im8xzHCqMAS0RfVeld3cevqNYAc.jpg",
    "runtime": 116,
    "networks": [
        8,
        307,
        484,
        1796,
        2156
    ],
    "certification": "14",
    "slug": "baywatch-sos-malibu"
},

{
    "id": 1226406,
    "title": "Amor Bandido",
    "genre_ids": [
        28,
        35,
        10749
    ],
    "release_date": "2025-02-06",
    "popularity": 15.467,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/znIp6C8Cnr5RrTy6J65ygkWChin.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "16",
    "slug": "amor-bandido"
},

{
    "id": 36647,
    "title": "Blade: O Caçador de Vampiros",
    "genre_ids": [
        27,
        28
    ],
    "release_date": "1998-08-21",
    "popularity": 14.178,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/u6PrOGJwwQuvhoIaJL25INbS3Z8.jpg",
    "runtime": 120,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "blade-o-caador-de-vampiros"
},

{
    "id": 89,
    "title": "Indiana Jones e a Última Cruzada",
    "genre_ids": [
        12,
        28
    ],
    "release_date": "1989-05-24",
    "popularity": 18.575,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/9H79Cq97WwiY7FB51jPH65sX3hp.jpg",
    "runtime": 127,
    "networks": [
        531,
        307,
        484,
        582,
        1853,
        2156,
        2303
    ],
    "certification": "L",
    "slug": "indiana-jones-e-a-ltima-cruzada"
},

{
    "id": 1084440,
    "title": "Daniela Forever",
    "genre_ids": [
        878,
        10749
    ],
    "release_date": "2025-02-21",
    "popularity": 14.738,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tOduVNrRjEOH6GZNZE2S3ofM5sc.jpg",
    "runtime": 113,
    "networks": [],
    "certification": "N/A",
    "slug": "daniela-forever"
},

{
    "id": 109439,
    "title": "Se Beber, Não Case! - Parte III",
    "genre_ids": [
        35
    ],
    "release_date": "2013-05-23",
    "popularity": 18.778,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/hu9nqzPjw0ObviYi6iKFK3kvebB.jpg",
    "runtime": 100,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "se-beber-no-case-parte-iii"
},

{
    "id": 399579,
    "title": "Alita: Anjo de Combate",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "2019-01-31",
    "popularity": 18.987,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/xUOP8nSOcwymKeOS9L4iJbLXG74.jpg",
    "runtime": 122,
    "networks": [
        337,
        8,
        1796
    ],
    "certification": "14",
    "slug": "alita-anjo-de-combate"
},

{
    "id": 1230477,
    "title": "Given Movie: Hiiragi Mix",
    "genre_ids": [
        16,
        10749
    ],
    "release_date": "2024-01-27",
    "popularity": 21.842,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/uOvHjRDuJrRAgmJkUPcmnvaEqew.jpg",
    "runtime": 70,
    "networks": [
        1968
    ],
    "certification": "N/A",
    "slug": "given-movie-hiiragi-mix"
},

{
    "id": 338953,
    "title": "Animais Fantásticos: Os Segredos de Dumbledore",
    "genre_ids": [
        14,
        12
    ],
    "release_date": "2022-04-06",
    "popularity": 16.357,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/ha2sRkoBLO3VZuEUvzlKJi0hCF3.jpg",
    "runtime": 142,
    "networks": [
        119,
        1899,
        484,
        1825
    ],
    "certification": "10",
    "slug": "animais-fantsticos-os-segredos-de-dumbledore"
},

{
    "id": 283366,
    "title": "O Lar das Crianças Peculiares",
    "genre_ids": [
        14,
        12
    ],
    "release_date": "2016-09-27",
    "popularity": 15.026,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/hduPv3S40NElnwnBUB5g9GbkKYx.jpg",
    "runtime": 127,
    "networks": [
        337,
        8,
        1796
    ],
    "certification": "12",
    "slug": "o-lar-das-crianas-peculiares"
},

{
    "id": 553168,
    "title": "横須賀男狩り 少女・悦楽",
    "genre_ids": [
        18,
        53
    ],
    "release_date": "1977-05-21",
    "popularity": 14.372,
    "vote_average": 4.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/6mxVYlKY7B102lqwtTawwWlGOd9.jpg",
    "runtime": 77,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 916192,
    "title": "Natsu e no Tunnel, Sayonara no Deguchi",
    "genre_ids": [
        16,
        18,
        10749,
        14
    ],
    "release_date": "2022-09-09",
    "popularity": 20.986,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/psu1NvHQ4Ggwmy0arCiQc394Vqe.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "N/A",
    "slug": "natsu-e-no-tunnel-sayonara-no-deguchi"
},

{
    "id": 747,
    "title": "Todo Mundo Quase Morto",
    "genre_ids": [
        27,
        35
    ],
    "release_date": "2004-04-09",
    "popularity": 16.042,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/6ZcQxukKwAs6NBhQiw9csWmkO20.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "16",
    "slug": "todo-mundo-quase-morto"
},

{
    "id": 5174,
    "title": "A Hora do Rush 3",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2007-08-08",
    "popularity": 20.021,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/15tifAGNBdy4cLKDXKD2Iam8OkM.jpg",
    "runtime": 90,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "a-hora-do-rush-3"
},

{
    "id": 16869,
    "title": "Bastardos Inglórios",
    "genre_ids": [
        18,
        53,
        10752
    ],
    "release_date": "2009-08-02",
    "popularity": 22.48,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/n8fuS2uDDykO4P3RBPKLhWs0Ffj.jpg",
    "runtime": 152,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "bastardos-inglrios"
},

{
    "id": 324852,
    "title": "Meu Malvado Favorito 3",
    "genre_ids": [
        28,
        16,
        35,
        10751,
        12
    ],
    "release_date": "2017-06-15",
    "popularity": 14.035,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/nJcT21OKUiS3XDxBo2IWafkSIMk.jpg",
    "runtime": 90,
    "networks": [
        8,
        119,
        484,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "meu-malvado-favorito-3"
},

{
    "id": 1243051,
    "title": "Tarde demais, meu amor",
    "genre_ids": [
        53
    ],
    "release_date": "2025-02-23",
    "popularity": 22.193,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/oBi6CoqH3yYU7AHcwl2Qe5x9J53.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "tarde-demais-meu-amor"
},

{
    "id": 378462,
    "title": "鴨王2",
    "genre_ids": [
        18
    ],
    "release_date": "2016-01-14",
    "popularity": 15.234,
    "vote_average": 3.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/hwzSxSqdcCbsmXm4vBADcIhFboK.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "2"
},

{
    "id": 1207898,
    "title": "Jack: A Caixa Maldita 3 - A Ascensão",
    "genre_ids": [
        27
    ],
    "release_date": "2024-01-18",
    "popularity": 16.836,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/4NBsH4eaDYykvGMObg5r47K3lk0.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "jack-a-caixa-maldita-3-a-ascenso"
},

{
    "id": 1076487,
    "title": "Seals: Operação Resgate",
    "genre_ids": [
        28,
        10752,
        18
    ],
    "release_date": "2023-06-30",
    "popularity": 15.691,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/oIHgYhUsdUQV1KOw4n58F4aUhFt.jpg",
    "runtime": 125,
    "networks": [],
    "certification": "N/A",
    "slug": "seals-operao-resgate"
},

{
    "id": 663712,
    "title": "Terrifier 2",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2022-10-06",
    "popularity": 19.534,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/spkkTYZq38iyapjMy3CsxU5jK3s.jpg",
    "runtime": 138,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "terrifier-2"
},

{
    "id": 827931,
    "title": "Corte no Tempo",
    "genre_ids": [
        27,
        878,
        53
    ],
    "release_date": "2024-10-29",
    "popularity": 14.614,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/zzS5c2MoVRFnHLoDDCvkMKU7Rxc.jpg",
    "runtime": 91,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "corte-no-tempo"
},

{
    "id": 536554,
    "title": "M3GAN",
    "genre_ids": [
        878,
        27
    ],
    "release_date": "2022-12-28",
    "popularity": 15.322,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    "runtime": 102,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "m3gan"
},

{
    "id": 950,
    "title": "A Era do Gelo 2",
    "genre_ids": [
        16,
        10751,
        35,
        12
    ],
    "release_date": "2006-03-29",
    "popularity": 17.939,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/5BSEXwvi0xDC2CbMkZQ0LngaVOh.jpg",
    "runtime": 91,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "a-era-do-gelo-2"
},

{
    "id": 95,
    "title": "Armageddon",
    "genre_ids": [
        28,
        53,
        878,
        12
    ],
    "release_date": "1998-07-01",
    "popularity": 14.84,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/9bIPUG3k5HSv6HsJrwI4PjvXNPv.jpg",
    "runtime": 153,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "armageddon"
},

{
    "id": 1241748,
    "title": "Kalikot",
    "genre_ids": [
        18
    ],
    "release_date": "2024-03-12",
    "popularity": 21.322,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/wYRO8wt2S97Fyu7r38pa5JnvxhB.jpg",
    "runtime": 49,
    "networks": [],
    "certification": "N/A",
    "slug": "kalikot"
},

{
    "id": 280180,
    "title": "Um Tira da Pesada 4: Axel Foley",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2024-06-20",
    "popularity": 18.305,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/49zBBS5eSCqTj6r0T9kPoijib7E.jpg",
    "runtime": 118,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "um-tira-da-pesada-4-axel-foley"
},

{
    "id": 4232,
    "title": "Pânico",
    "genre_ids": [
        80,
        27,
        9648
    ],
    "release_date": "1996-12-20",
    "popularity": 15.897,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/cJj2gYzkPFSqYGGOhfLgeANlXkB.jpg",
    "runtime": 112,
    "networks": [
        8,
        531,
        307,
        582,
        1796,
        1853,
        2303
    ],
    "certification": "14",
    "slug": "pnico"
},

{
    "id": 985939,
    "title": "A Queda",
    "genre_ids": [
        53
    ],
    "release_date": "2022-08-11",
    "popularity": 20.386,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ey5j9PzI1S0jsMPuN8H9ldrGzuX.jpg",
    "runtime": 107,
    "networks": [
        119
    ],
    "certification": "12",
    "slug": "a-queda"
},

{
    "id": 82675,
    "title": "Busca Implacável 2",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2012-09-27",
    "popularity": 14.279,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/yVLPwrBJ5c4vL6xepoLysuy8pdT.jpg",
    "runtime": 91,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "busca-implacvel-2"
},

{
    "id": 23823,
    "title": "Pânico na Floresta 3",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2009-10-08",
    "popularity": 16.244,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/ablEp5NwXbfSL3HXPOkM9fW5DKP.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "18",
    "slug": "pnico-na-floresta-3"
},

{
    "id": 1422,
    "title": "Os Infiltrados",
    "genre_ids": [
        18,
        53,
        80
    ],
    "release_date": "2006-10-04",
    "popularity": 20.659,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/5ahf025FzL64EuqUOwM4PB598eb.jpg",
    "runtime": 151,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "os-infiltrados"
},

{
    "id": 8392,
    "title": "Meu Amigo Totoro",
    "genre_ids": [
        14,
        16,
        10751
    ],
    "release_date": "1988-04-16",
    "popularity": 19.757,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ub3oHcMlMgjNMdAeeJonMTZ8som.jpg",
    "runtime": 87,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "meu-amigo-totoro"
},

{
    "id": 1078600,
    "title": "Na Sua Pele - A Série Marked Men",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2025-01-22",
    "popularity": 17.265,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/1XaPBkYFr7OnPuD36Yer3ueFWrK.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "na-sua-pele-a-srie-marked-men"
},

{
    "id": 377,
    "title": "A Hora do Pesadelo",
    "genre_ids": [
        27
    ],
    "release_date": "1984-11-09",
    "popularity": 16.974,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/7RDDRv4A4wb85U4QEx2OsRWbCH1.jpg",
    "runtime": 91,
    "networks": [
        1899,
        499,
        1825
    ],
    "certification": "16",
    "slug": "a-hora-do-pesadelo"
},

{
    "id": 600,
    "title": "Nascido Para Matar",
    "genre_ids": [
        18,
        10752
    ],
    "release_date": "1987-06-26",
    "popularity": 15.784,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/qHm54HjL1F6CFVyYOz6Q2HAPTfS.jpg",
    "runtime": 117,
    "networks": [],
    "certification": "16",
    "slug": "nascido-para-matar"
},

{
    "id": 49530,
    "title": "O Preço do Amanhã",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "2011-10-27",
    "popularity": 17.767,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/xvGHZhGhvi5Myeh9dUKfrf81x4A.jpg",
    "runtime": 109,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "o-preo-do-amanh"
},

{
    "id": 320288,
    "title": "X-Men: Fênix Negra",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2019-06-05",
    "popularity": 16.669,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/w4mvEKtjawXdYaq1bORuodLX6ti.jpg",
    "runtime": 114,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "x-men-fnix-negra"
},

{
    "id": 940139,
    "title": "Aqui",
    "genre_ids": [
        18
    ],
    "release_date": "2024-10-30",
    "popularity": 15.581,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/rmqBc3qRXeSgzCcWY2H4l9M8eIT.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "14",
    "slug": "aqui"
},

{
    "id": 8835,
    "title": "Legalmente Loira",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2001-07-13",
    "popularity": 14.508,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/zlieYqoBgbcIhYT8CgSGu4QRXWw.jpg",
    "runtime": 96,
    "networks": [
        2142,
        2141,
        2156
    ],
    "certification": "N/A",
    "slug": "legalmente-loira"
},

{
    "id": 87827,
    "title": "As Aventuras de Pi",
    "genre_ids": [
        12,
        18
    ],
    "release_date": "2012-11-20",
    "popularity": 14.165,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/vknfMBq1ySoZ42exme9drkOQirP.jpg",
    "runtime": 127,
    "networks": [],
    "certification": "10",
    "slug": "as-aventuras-de-pi"
},

{
    "id": 194,
    "title": "O Fabuloso Destino de Amélie Poulain",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2001-04-25",
    "popularity": 15.14,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/4zMUKCBq1OqMXFnNSLMVT0MgHXz.jpg",
    "runtime": 122,
    "networks": [],
    "certification": "16",
    "slug": "o-fabuloso-destino-de-amlie-poulain"
},

{
    "id": 585511,
    "title": "Luck",
    "genre_ids": [
        16,
        12,
        35,
        14
    ],
    "release_date": "2022-08-05",
    "popularity": 16.463,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/aeJHkkrDvbXPB25NghNbv5kUBVi.jpg",
    "runtime": 97,
    "networks": [
        350
    ],
    "certification": "L",
    "slug": "luck"
},

{
    "id": 1008042,
    "title": "Fale Comigo",
    "genre_ids": [
        27
    ],
    "release_date": "2023-07-26",
    "popularity": 21.572,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/7U3lC4YnHD8zpeoxbY6Hsj9jyeu.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "16",
    "slug": "fale-comigo"
},

{
    "id": 1333100,
    "title": "Attack on Titan: O Último Ataque",
    "genre_ids": [
        16,
        28,
        12,
        14
    ],
    "release_date": "2024-11-08",
    "popularity": 17.534,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/9zMvAYswN9LWNQu8B5Wkr12NJcC.jpg",
    "runtime": 145,
    "networks": [],
    "certification": "18",
    "slug": "attack-on-titan-o-ltimo-ataque"
},

{
    "id": 39323,
    "title": "Dragon Ball Z: Bardock, O Pai de Goku",
    "genre_ids": [
        16,
        28,
        878,
        18,
        14
    ],
    "release_date": "1990-10-17",
    "popularity": 15.456,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/TQtQcckcXwkWxcij6JxJiyVXkG.jpg",
    "runtime": 47,
    "networks": [
        119
    ],
    "certification": "12",
    "slug": "dragon-ball-z-bardock-o-pai-de-goku"
},

{
    "id": 529203,
    "title": "Os Croods 2: Uma Nova Era",
    "genre_ids": [
        16,
        10751,
        12,
        14,
        35
    ],
    "release_date": "2020-11-25",
    "popularity": 18.555,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/f7BIa9xIerwviSMsa9BEY28sC3Y.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "L",
    "slug": "os-croods-2-uma-nova-era"
},

{
    "id": 441168,
    "title": "Aluna Exemplar e Estrela Pornô",
    "genre_ids": [
        18,
        10770
    ],
    "release_date": "2017-02-11",
    "popularity": 18.101,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/58BDtcDZG0ehZClEMwKampH4oX1.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "aluna-exemplar-e-estrela-porn"
},

{
    "id": 82690,
    "title": "Detona Ralph",
    "genre_ids": [
        10751,
        16,
        35,
        12
    ],
    "release_date": "2012-11-01",
    "popularity": 18.757,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/uPAPODCQ1NiEHYiHI8oSSAg6b4o.jpg",
    "runtime": 108,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "detona-ralph"
},

{
    "id": 81005,
    "title": "Jack: O Caçador de Gigantes",
    "genre_ids": [
        14,
        28,
        12,
        18
    ],
    "release_date": "2013-02-27",
    "popularity": 14.732,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/qCp3BLjQc1qZTbw9VrEzuON9NEG.jpg",
    "runtime": 114,
    "networks": [
        1899,
        1825
    ],
    "certification": "10",
    "slug": "jack-o-caador-de-gigantes"
},

{
    "id": 57224,
    "title": "バイオ・ハンター",
    "genre_ids": [
        27,
        16,
        28
    ],
    "release_date": "1995-12-08",
    "popularity": 19.27,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/tfjQGbYsHFq2TUrGGMJ4JU8snO9.jpg",
    "runtime": 58,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 882569,
    "title": "O Pacto",
    "genre_ids": [
        10752,
        28,
        53
    ],
    "release_date": "2023-04-19",
    "popularity": 21.839,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/pTQZT9R6YjKrweJ0llPtq57j1Z0.jpg",
    "runtime": 123,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "o-pacto"
},

{
    "id": 774825,
    "title": "A Era do Gelo: As Aventuras de Buck",
    "genre_ids": [
        16,
        35,
        10751,
        12
    ],
    "release_date": "2022-01-28",
    "popularity": 16.352,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/1iVjKCGHPVNj7IQVB1DdpL8U7Y8.jpg",
    "runtime": 81,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-era-do-gelo-as-aventuras-de-buck"
},

{
    "id": 1061699,
    "title": "Batalhão 6888",
    "genre_ids": [
        18,
        10752,
        36
    ],
    "release_date": "2024-12-06",
    "popularity": 18.97,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/hSIXnORYGY3mvmxeo1JMzSnX6Yz.jpg",
    "runtime": 127,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "batalho-6888"
},

{
    "id": 98566,
    "title": "As Tartarugas Ninja",
    "genre_ids": [
        878,
        28,
        12,
        35
    ],
    "release_date": "2014-08-07",
    "popularity": 20.982,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/udkk1VQY9wgarV7xZ9qcraa7Qsd.jpg",
    "runtime": 112,
    "networks": [
        8,
        531,
        307,
        582,
        1796,
        1853,
        2303
    ],
    "certification": "12",
    "slug": "as-tartarugas-ninja"
},

{
    "id": 268896,
    "title": "Círculo de Fogo: A Revolta",
    "genre_ids": [
        28,
        14,
        878,
        12
    ],
    "release_date": "2018-03-21",
    "popularity": 14.372,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/xGKTHLBwiZNzagJKpQA8a6aNiDv.jpg",
    "runtime": 111,
    "networks": [
        119,
        307
    ],
    "certification": "12",
    "slug": "crculo-de-fogo-a-revolta"
},

{
    "id": 1427,
    "title": "Perfume: A História de um Assassino",
    "genre_ids": [
        80,
        14,
        18
    ],
    "release_date": "2006-09-13",
    "popularity": 15.01,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/lDmIyNgu2n3lhwRXLCYSmbM8fdS.jpg",
    "runtime": 127,
    "networks": [],
    "certification": "16",
    "slug": "perfume-a-histria-de-um-assassino"
},

{
    "id": 758323,
    "title": "O Exorcista do Papa",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2023-04-05",
    "popularity": 16.039,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/hCoN0wXf3v6gKVNN5tLcc8k23XP.jpg",
    "runtime": 103,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "o-exorcista-do-papa"
},

{
    "id": 676,
    "title": "Pearl Harbor",
    "genre_ids": [
        10752,
        36,
        10749,
        18,
        28
    ],
    "release_date": "2001-05-21",
    "popularity": 14.033,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/giWL3kIA5E67VUTWY1PkfHgyZ1B.jpg",
    "runtime": 183,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "pearl-harbor"
},

{
    "id": 1319968,
    "title": "Millers in Marriage",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 22.183,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/z7UvGuQ8pSs0JJP3QYCAIsNzYXI.jpg",
    "runtime": 117,
    "networks": [],
    "certification": "N/A",
    "slug": "millers-in-marriage"
},

{
    "id": 324558,
    "title": "X-Rated: The Greatest Adult Movies of All Time",
    "genre_ids": [
        99
    ],
    "release_date": "2015-02-06",
    "popularity": 19.533,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/1UgdqTHgwNivULiZvNcJ0Mj3skl.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": "x-rated-the-greatest-adult-movies-of-all-time"
},

{
    "id": 884605,
    "title": "Que Horas Eu Te Pego?",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2023-06-15",
    "popularity": 15.319,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/Ab2IX5DuY1ZAyFNGXh1MeUOzIGB.jpg",
    "runtime": 103,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "que-horas-eu-te-pego"
},

{
    "id": 1222049,
    "title": "நிலவுக்கு என் மேல் என்னடி கோபம்",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 20.015,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/41KBhIX2VYXxAfgs9W23LhHP7AF.jpg",
    "runtime": 130,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 55685,
    "title": "Vinte Anos",
    "genre_ids": [
        35
    ],
    "release_date": "1978-07-14",
    "popularity": 17.938,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/p2eSiZg3Qv4Akm9StkyYa4JPzCb.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": "vinte-anos"
},

{
    "id": 931642,
    "title": "Nocaute",
    "genre_ids": [
        28
    ],
    "release_date": "2024-02-16",
    "popularity": 16.836,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/7x801yu8OjB16DRxIiEZS7W8yY.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "nocaute"
},

{
    "id": 1404380,
    "title": "Saptha Kandam",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2024-12-06",
    "popularity": 15.231,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/1i35IfvW8bdoOuBF7GWkXBDEFI4.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "saptha-kandam"
},

{
    "id": 554600,
    "title": "URI - Forças Especiais",
    "genre_ids": [
        28,
        18,
        10752
    ],
    "release_date": "2019-01-11",
    "popularity": 14.277,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yNySAgpAnWmPpYinim9E0tUzJWG.jpg",
    "runtime": 138,
    "networks": [
        47
    ],
    "certification": "N/A",
    "slug": "uri-foras-especiais"
},

{
    "id": 476669,
    "title": "King's Man: A Origem",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2021-12-22",
    "popularity": 15.893,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/bRegMnwf0s7cYjPrtFhNba5TXzc.jpg",
    "runtime": 130,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "kings-man-a-origem"
},

{
    "id": 1139817,
    "title": "O Agente Faixa-Preta",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2024-09-10",
    "popularity": 18.277,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/Amy9rY0rR5y6fHNYlLVXVmFEGUi.jpg",
    "runtime": 108,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "o-agente-faixa-preta"
},

{
    "id": 333371,
    "title": "Rua Cloverfield, 10",
    "genre_ids": [
        53,
        878,
        18,
        27
    ],
    "release_date": "2016-03-10",
    "popularity": 14.608,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/dWcbB4mx56lYudDYt3CRllNi5SZ.jpg",
    "runtime": 103,
    "networks": [],
    "certification": "14",
    "slug": "rua-cloverfield-10"
},

{
    "id": 4011,
    "title": "Os Fantasmas se Divertem",
    "genre_ids": [
        14,
        35
    ],
    "release_date": "1988-03-30",
    "popularity": 15.685,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/mLSJNejuGDegsMDiWWwIP7VDiyz.jpg",
    "runtime": 92,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "os-fantasmas-se-divertem"
},

{
    "id": 324786,
    "title": "Até o Último Homem",
    "genre_ids": [
        18,
        36,
        10752
    ],
    "release_date": "2016-10-07",
    "popularity": 21.311,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/7RCE90deykW0TKUpTZfv7TTP9MF.jpg",
    "runtime": 140,
    "networks": [
        1899,
        1860,
        1825
    ],
    "certification": "16",
    "slug": "at-o-ltimo-homem"
},

{
    "id": 77,
    "title": "Amnésia",
    "genre_ids": [
        9648,
        53
    ],
    "release_date": "2000-10-11",
    "popularity": 20.381,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/7leBWM27Q0TUnvmhw6WnFNgGn4G.jpg",
    "runtime": 113,
    "networks": [
        47,
        499,
        683,
        2142,
        2141
    ],
    "certification": "16",
    "slug": "amnsia"
},

{
    "id": 131634,
    "title": "Jogos Vorazes: A Esperança - O Final",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2015-11-18",
    "popularity": 14.838,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/3RhLwBs4IcYuAlVhmvnOJUAexYR.jpg",
    "runtime": 136,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "jogos-vorazes-a-esperana-o-final"
},

{
    "id": 1173900,
    "title": "我是哪吒2之英雄归来",
    "genre_ids": [
        18,
        14,
        16
    ],
    "release_date": "2023-09-29",
    "popularity": 16.238,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/vHf7HD3DU7Zz5ZiW5NfxagFHmfg.jpg",
    "runtime": 107,
    "networks": [],
    "certification": "N/A",
    "slug": "2"
},

{
    "id": 272,
    "title": "Batman Begins",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "2005-06-10",
    "popularity": 17.234,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/7kZTOqogz4Q8kXPsza9slUpcYMW.jpg",
    "runtime": 140,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "10",
    "slug": "batman-begins"
},

{
    "id": 246655,
    "title": "X-Men: Apocalipse",
    "genre_ids": [
        28,
        12,
        878,
        14
    ],
    "release_date": "2016-05-18",
    "popularity": 20.647,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/a6OjCxF8DW9huIdAPshWJpO0ldx.jpg",
    "runtime": 144,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "x-men-apocalipse"
},

{
    "id": 953,
    "title": "Madagascar",
    "genre_ids": [
        10751,
        16,
        12,
        35
    ],
    "release_date": "2005-05-25",
    "popularity": 16.969,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/A3xzOyFlWxoGFPG4aUGX8zMS4OA.jpg",
    "runtime": 86,
    "networks": [
        8,
        119,
        167,
        307,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "madagascar"
},

{
    "id": 93858,
    "title": "Tabu",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2012-04-05",
    "popularity": 14.504,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/y8UypeZK8Q3XvwRpv959553lsxX.jpg",
    "runtime": 119,
    "networks": [],
    "certification": "N/A",
    "slug": "tabu"
},

{
    "id": 184345,
    "title": "Inatividade Paranormal 2",
    "genre_ids": [
        35,
        27
    ],
    "release_date": "2014-04-17",
    "popularity": 19.721,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/oV7M00fPXy5P0nbdeMbSUjYv0vx.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "inatividade-paranormal-2"
},

{
    "id": 1355755,
    "title": "Uma História Quase de Natal",
    "genre_ids": [
        16,
        12,
        14,
        10751
    ],
    "release_date": "2024-10-14",
    "popularity": 17.752,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/yYXHQuW8tDKJmuEDYhJecIMnV1m.jpg",
    "runtime": 24,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "uma-histria-quase-de-natal"
},

{
    "id": 6844,
    "title": "Os Dez Mandamentos",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "1956-10-05",
    "popularity": 15.77,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/dJI5sg5IOVAlxTmxbtT6nYdyiTk.jpg",
    "runtime": 220,
    "networks": [
        2156
    ],
    "certification": "L",
    "slug": "os-dez-mandamentos"
},

{
    "id": 1339843,
    "title": "Elegía por un Mundo Perdido",
    "genre_ids": [
        10752,
        18
    ],
    "release_date": "2025-02-24",
    "popularity": 15.578,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/krfFW42Rz6ThVTuQ9gnKYw6f7Oz.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "elega-por-un-mundo-perdido"
},

{
    "id": 1232827,
    "title": "A Garota da Agulha",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2024-09-06",
    "popularity": 16.454,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/fbh4Xv4yr6gSRN0W5nwQ5X35hW7.jpg",
    "runtime": 123,
    "networks": [
        11,
        201
    ],
    "certification": "N/A",
    "slug": "a-garota-da-agulha"
},

{
    "id": 360776,
    "title": "くノ一忍法帖III 秘戯伝説の怪",
    "genre_ids": [
        28
    ],
    "release_date": "1993-05-21",
    "popularity": 16.665,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/uJDtI8RZPbV4gn5cEyxPyXF7QJo.jpg",
    "runtime": 73,
    "networks": [],
    "certification": "N/A",
    "slug": "iii-"
},

{
    "id": 1174618,
    "title": "Alice no País das Trevas",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2023-12-26",
    "popularity": 18.093,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/uVIMSSGdcBJZaaBbJaYuql9CH5x.jpg",
    "runtime": 77,
    "networks": [],
    "certification": "N/A",
    "slug": "alice-no-pas-das-trevas"
},

{
    "id": 312221,
    "title": "Creed: Nascido para Lutar",
    "genre_ids": [
        28,
        18
    ],
    "release_date": "2015-11-25",
    "popularity": 17.522,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/53VTzu0nhbNYmIbqdDbFqobsLHt.jpg",
    "runtime": 133,
    "networks": [
        2156
    ],
    "certification": "N/A",
    "slug": "creed-nascido-para-lutar"
},

{
    "id": 1118772,
    "title": "La guerra dei nonni",
    "genre_ids": [
        35
    ],
    "release_date": "2023-11-30",
    "popularity": 15.452,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/3b78WRaAyTOo8nVyf9rtzVFSepV.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "la-guerra-dei-nonni"
},

{
    "id": 87,
    "title": "Indiana Jones e o Templo da Perdição",
    "genre_ids": [
        12,
        28
    ],
    "release_date": "1984-05-23",
    "popularity": 15.14,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/cFoNXD2y49a1EUiK4SPqIUrfzYm.jpg",
    "runtime": 118,
    "networks": [
        531,
        307,
        582,
        1853,
        2156,
        2303
    ],
    "certification": "L",
    "slug": "indiana-jones-e-o-templo-da-perdio"
},

{
    "id": 83533,
    "title": "Avatar: Fogo e Cinzas",
    "genre_ids": [
        878,
        12,
        14
    ],
    "release_date": "2025-12-11",
    "popularity": 14.164,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/vDdFxksDMkUJjZXd00OKJfwXKre.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "avatar-fogo-e-cinzas"
},

{
    "id": 534643,
    "title": "Tabu",
    "genre_ids": [],
    "release_date": "2010-05-01",
    "popularity": 18.749,
    "vote_average": 2.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ekfLoHZdFO7YiEJNQbxPcfesOUX.jpg",
    "runtime": 25,
    "networks": [],
    "certification": "N/A",
    "slug": "tabu"
},

{
    "id": 670,
    "title": "Oldboy",
    "genre_ids": [
        18,
        53,
        9648,
        28
    ],
    "release_date": "2003-11-21",
    "popularity": 21.836,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/KGyCMfEfvUKavzyq6iTc2DBUKM.jpg",
    "runtime": 120,
    "networks": [
        11,
        447,
        484,
        201
    ],
    "certification": "18",
    "slug": "oldboy"
},

{
    "id": 663558,
    "title": "Nezha: O Renascer de um Deus",
    "genre_ids": [
        16,
        28,
        14
    ],
    "release_date": "2021-02-06",
    "popularity": 18.536,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/gvcFFHbxpJSaasHa8S4lx4WvbRW.jpg",
    "runtime": 116,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "nezha-o-renascer-de-um-deus"
},

{
    "id": 81774,
    "title": "A Iniciação",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "1986-11-04",
    "popularity": 14.725,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/jp8LYiQzEoUuMqu2lGSZZ1A4Nsf.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "a-iniciao"
},

{
    "id": 704239,
    "title": "A Liga",
    "genre_ids": [
        28,
        35
    ],
    "release_date": "2024-08-15",
    "popularity": 19.261,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/epzHc7RNjgpj9e2IVH88g7cr7DG.jpg",
    "runtime": 109,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "a-liga"
},

{
    "id": 62177,
    "title": "Valente",
    "genre_ids": [
        16,
        12,
        35,
        10751,
        28,
        14
    ],
    "release_date": "2012-06-21",
    "popularity": 18.943,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tr0yoWlFmRgKrkE2SvYokkN6PcA.jpg",
    "runtime": 93,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "valente"
},

{
    "id": 396422,
    "title": "Annabelle 2: A Criação do Mal",
    "genre_ids": [
        27
    ],
    "release_date": "2017-08-03",
    "popularity": 14.028,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/AtlcH0f8mEQGKVIBSgV4GgkTZMr.jpg",
    "runtime": 109,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "annabelle-2-a-criao-do-mal"
},

{
    "id": 1210794,
    "title": "Prisioneiro do Caos",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2024-10-02",
    "popularity": 17.933,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/69rCc2fJ0gqOZCKCnQLIRrClvpY.jpg",
    "runtime": 98,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "prisioneiro-do-caos"
},

{
    "id": 80321,
    "title": "Madagascar 3: Os Procurados",
    "genre_ids": [
        16,
        10751,
        35,
        12
    ],
    "release_date": "2012-06-06",
    "popularity": 15.3,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/zyN6YnhqkcHwTelwVhA3qLrA6Rq.jpg",
    "runtime": 95,
    "networks": [
        167,
        531,
        307,
        484,
        582,
        1853,
        2156,
        2303
    ],
    "certification": "L",
    "slug": "madagascar-3-os-procurados"
},

{
    "id": 1245601,
    "title": "Ludzie",
    "genre_ids": [
        18,
        10752
    ],
    "release_date": "2025-02-21",
    "popularity": 14.366,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/lVGKgJjfpZLSyhsovKGkzS7n8xK.jpg",
    "runtime": 116,
    "networks": [],
    "certification": "N/A",
    "slug": "ludzie"
},

{
    "id": 262500,
    "title": "A Série Divergente: Insurgente",
    "genre_ids": [
        28,
        878,
        53
    ],
    "release_date": "2015-03-18",
    "popularity": 19.995,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/l0i7VfG5HAQT49ZKZNcef2booIq.jpg",
    "runtime": 119,
    "networks": [
        8,
        119
    ],
    "certification": "14",
    "slug": "a-srie-divergente-insurgente"
},

{
    "id": 57800,
    "title": "A Era do Gelo 4",
    "genre_ids": [
        16,
        35,
        12,
        10751
    ],
    "release_date": "2012-06-27",
    "popularity": 20.98,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/dWiHLqARtyAAOy0nLvXIxRYkfNA.jpg",
    "runtime": 88,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-era-do-gelo-4"
},

{
    "id": 269509,
    "title": "The Canterville Ghost",
    "genre_ids": [
        16,
        35,
        10751,
        14
    ],
    "release_date": "2023-09-22",
    "popularity": 19.517,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/dFu8oHN805ZRzpQZNOjkiLzMbep.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "the-canterville-ghost"
},

{
    "id": 2501,
    "title": "A Identidade Bourne",
    "genre_ids": [
        28,
        18,
        9648,
        53
    ],
    "release_date": "2002-06-14",
    "popularity": 16.032,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/gouAazYfEzTclGTNk4eygyZSKVi.jpg",
    "runtime": 118,
    "networks": [
        307
    ],
    "certification": "14",
    "slug": "a-identidade-bourne"
},

{
    "id": 858017,
    "title": "Eu Vi o Brilho da TV",
    "genre_ids": [
        18,
        27
    ],
    "release_date": "2024-05-03",
    "popularity": 15.231,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/q01inF0310hkfGL9Z5T6yuneIQI.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": "eu-vi-o-brilho-da-tv"
},

{
    "id": 9072,
    "title": "O Pequenino",
    "genre_ids": [
        35,
        80
    ],
    "release_date": "2006-08-31",
    "popularity": 14.987,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/hhz8suBlc45xIyanIIAg7DmWHCB.jpg",
    "runtime": 98,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "o-pequenino"
},

{
    "id": 931944,
    "title": "O  Banho do Diabo",
    "genre_ids": [
        18,
        9648,
        36,
        27
    ],
    "release_date": "2024-03-08",
    "popularity": 16.826,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/mshU4e4kAmSxhZu1FVnaII6Xhhv.jpg",
    "runtime": 121,
    "networks": [],
    "certification": "N/A",
    "slug": "o-banho-do-diabo"
},

{
    "id": 1432108,
    "title": "The Love Club Moms: Harper",
    "genre_ids": [
        10770,
        35,
        10749
    ],
    "release_date": "2025-02-21",
    "popularity": 14.27,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/4NG7h0kiMTyGBo4F44B8DNTGo3n.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "the-love-club-moms-harper"
},

{
    "id": 554596,
    "title": "No Manches Frida 2: Paraíso Destruído",
    "genre_ids": [
        35
    ],
    "release_date": "2019-03-15",
    "popularity": 15.887,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/hKGX8vbL7iQWT1Lr4Vl7dxie9Mr.jpg",
    "runtime": 102,
    "networks": [],
    "certification": "N/A",
    "slug": "no-manches-frida-2-paraso-destrudo"
},

{
    "id": 487297,
    "title": "Do Que os Homens Gostam",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2019-02-08",
    "popularity": 14.605,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/6UDohjhxprSjsnZfqbbpuwxDPSS.jpg",
    "runtime": 117,
    "networks": [],
    "certification": "16",
    "slug": "do-que-os-homens-gostam"
},

{
    "id": 333167,
    "title": "Ascensão e Queda de um Império",
    "genre_ids": [
        10749,
        18,
        36
    ],
    "release_date": "2015-03-05",
    "popularity": 14.836,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/qXTqxE86dmpyOADRT6nzfHEtLp3.jpg",
    "runtime": 113,
    "networks": [
        307,
        2156
    ],
    "certification": "N/A",
    "slug": "ascenso-e-queda-de-um-imprio"
},

{
    "id": 466272,
    "title": "Era Uma Vez em… Hollywood",
    "genre_ids": [
        35,
        18,
        53
    ],
    "release_date": "2019-07-24",
    "popularity": 18.26,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/gMEKjlq4JcLR93oAVSD47MSeO9h.jpg",
    "runtime": 162,
    "networks": [],
    "certification": "16",
    "slug": "era-uma-vez-em-hollywood"
},

{
    "id": 232672,
    "title": "Juntos e Misturados",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2014-05-21",
    "popularity": 15.68,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/tD0UJtt237FAST3rD1htrGLBKAH.jpg",
    "runtime": 117,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "juntos-e-misturados"
},

{
    "id": 545609,
    "title": "Resgate",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2020-04-23",
    "popularity": 20.351,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/zxahunlqvMPWzUBd1XSRsGawdS9.jpg",
    "runtime": 116,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "resgate"
},

{
    "id": 1433592,
    "title": "Tramuntana",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-23",
    "popularity": 21.305,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/dyKcKmblDXYEUZMuyFV3T3t2XOq.jpg",
    "runtime": 18,
    "networks": [],
    "certification": "N/A",
    "slug": "tramuntana"
},

{
    "id": 605886,
    "title": "Sede Assassina",
    "genre_ids": [
        53,
        80,
        18
    ],
    "release_date": "2023-04-06",
    "popularity": 16.35,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/kVGrAqS2C0tEWyuZ7kf7sFLA3CQ.jpg",
    "runtime": 119,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "16",
    "slug": "sede-assassina"
},

{
    "id": 949,
    "title": "Fogo Contra Fogo",
    "genre_ids": [
        80,
        18,
        28
    ],
    "release_date": "1995-12-15",
    "popularity": 17.233,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/A9InJSiXQoECm7Hc6bttGBI9Dkk.jpg",
    "runtime": 170,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "fogo-contra-fogo"
},

{
    "id": 374720,
    "title": "Dunkirk",
    "genre_ids": [
        10752,
        28,
        18
    ],
    "release_date": "2017-07-19",
    "popularity": 16.224,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/kO6ewhlh7OIGRRbHwylDafEM1QG.jpg",
    "runtime": 106,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "dunkirk"
},

{
    "id": 636279,
    "title": "Bogotá: A Cidade dos Sonhos Perdidos",
    "genre_ids": [
        53,
        80,
        18
    ],
    "release_date": "2024-12-31",
    "popularity": 19.717,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ht9LiXOHBvDkvTQl9sAwllOsF81.jpg",
    "runtime": 109,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "bogot-a-cidade-dos-sonhos-perdidos"
},

{
    "id": 325358,
    "title": "Super Velozes, Mega Furiosos",
    "genre_ids": [
        35,
        28
    ],
    "release_date": "2015-03-05",
    "popularity": 14.5,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/mxu2bJQfTAylPVS4ufnZ5bv9wiH.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "super-velozes-mega-furiosos"
},

{
    "id": 959098,
    "title": "A Última Onça Negra",
    "genre_ids": [
        12,
        10751
    ],
    "release_date": "2024-02-01",
    "popularity": 16.964,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/i0DDkuvNDRgZeGYSUvWIEuG6Zid.jpg",
    "runtime": 100,
    "networks": [
        2156
    ],
    "certification": "N/A",
    "slug": "a-ltima-ona-negra"
},

{
    "id": 1050035,
    "title": "Monster",
    "genre_ids": [
        9648,
        53,
        18
    ],
    "release_date": "2023-06-02",
    "popularity": 15.578,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/NMOL3cADGwjh24YzP7C3Xbagcr.jpg",
    "runtime": 121,
    "networks": [
        484,
        2156,
        2157
    ],
    "certification": "N/A",
    "slug": "monster"
},

{
    "id": 939335,
    "title": "Farejando Vingança",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2023-09-29",
    "popularity": 15.769,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/dZ15pAnP1cp54S0HHcozjJKaH1D.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": "farejando-vingana"
},

{
    "id": 62835,
    "title": "Colombiana: Em Busca de Vingança",
    "genre_ids": [
        28,
        53,
        80,
        18
    ],
    "release_date": "2011-07-27",
    "popularity": 17.74,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/yfocdCwsdaJQNOpXacHet1S3QEN.jpg",
    "runtime": 108,
    "networks": [
        8,
        167,
        1796,
        2156
    ],
    "certification": "N/A",
    "slug": "colombiana-em-busca-de-vingana"
},

{
    "id": 345,
    "title": "De Olhos Bem Fechados",
    "genre_ids": [
        18,
        53,
        9648
    ],
    "release_date": "1999-07-16",
    "popularity": 17.514,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/pmU8WQ2fOdxLuYaNe1kHE2L8SlI.jpg",
    "runtime": 159,
    "networks": [],
    "certification": "18",
    "slug": "de-olhos-bem-fechados"
},

{
    "id": 704673,
    "title": "Alerta de Risco",
    "genre_ids": [
        28
    ],
    "release_date": "2024-06-20",
    "popularity": 14.162,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/cQLJT6hTXio0md94oBsSWADOECf.jpg",
    "runtime": 107,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "alerta-de-risco"
},

{
    "id": 253935,
    "title": "Emmanuelle au 7ème ciel",
    "genre_ids": [
        18,
        878
    ],
    "release_date": "1993-09-19",
    "popularity": 16.647,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/4RCXzlP2uM98nkgKUljijZh5zZ9.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "emmanuelle-au-7me-ciel"
},

{
    "id": 1412583,
    "title": "Online Selling",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-13",
    "popularity": 18.085,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/wGkZSwwKA2MBHNkFMpzNnSuqLCF.jpg",
    "runtime": 70,
    "networks": [],
    "certification": "N/A",
    "slug": "online-selling"
},

{
    "id": 110415,
    "title": "Expresso do Amanhã",
    "genre_ids": [
        28,
        878,
        18
    ],
    "release_date": "2013-08-01",
    "popularity": 18.735,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/hxtMH6qmnUgY9TQQZCWFS8Q1m0X.jpg",
    "runtime": 125,
    "networks": [],
    "certification": "16",
    "slug": "expresso-do-amanh"
},

{
    "id": 1433371,
    "title": "The Pursuit of Lust 3",
    "genre_ids": [
        53
    ],
    "release_date": "2025-02-21",
    "popularity": 15.448,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/Fh1HZykBmn5DslDSfSpBcpBKIg.jpg",
    "runtime": 36,
    "networks": [],
    "certification": "N/A",
    "slug": "the-pursuit-of-lust-3"
},

{
    "id": 402,
    "title": "Instinto Selvagem",
    "genre_ids": [
        53,
        9648
    ],
    "release_date": "1992-03-20",
    "popularity": 14.714,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/gC1QF3vCkbcqKJjzYfQcz01zEC4.jpg",
    "runtime": 128,
    "networks": [
        11
    ],
    "certification": "18",
    "slug": "instinto-selvagem"
},

{
    "id": 1255208,
    "title": "Ritual das Trevas",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-03-29",
    "popularity": 18.942,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/8CXnlqNXoZqYLWRLXCmwM67fCvY.jpg",
    "runtime": 96,
    "networks": [
        47,
        683
    ],
    "certification": "N/A",
    "slug": "ritual-das-trevas"
},

{
    "id": 10591,
    "title": "Show de Vizinha",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2004-04-09",
    "popularity": 18.536,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/7EszmSy33fqR2ULeGkDoHPwzlA2.jpg",
    "runtime": 109,
    "networks": [
        337,
        8,
        1796
    ],
    "certification": "14",
    "slug": "show-de-vizinha"
},

{
    "id": 300671,
    "title": "13 Horas: Os Soldados Secretos de Benghazi",
    "genre_ids": [
        10752,
        28,
        36,
        18,
        53
    ],
    "release_date": "2016-01-14",
    "popularity": 19.252,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/6JgLlqmVcbz139YRSTcuHn80xwn.jpg",
    "runtime": 144,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "13-horas-os-soldados-secretos-de-benghazi"
},

{
    "id": 1250,
    "title": "Motoqueiro Fantasma",
    "genre_ids": [
        53,
        28,
        14
    ],
    "release_date": "2007-01-15",
    "popularity": 15.133,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/vVGVlwRrvVgLPE98rwo8jo3QC2b.jpg",
    "runtime": 123,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "motoqueiro-fantasma"
},

{
    "id": 619979,
    "title": "Águas Profundas",
    "genre_ids": [
        18,
        9648,
        53
    ],
    "release_date": "2022-03-18",
    "popularity": 15.29,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/oGhSy2ao59xJDbCXyABofNhsV3o.jpg",
    "runtime": 116,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "guas-profundas"
},

{
    "id": 10543,
    "title": "Medo",
    "genre_ids": [
        53
    ],
    "release_date": "1996-04-12",
    "popularity": 14.365,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/em472HyVQcSxKTgxeHOAf3BYgLi.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "medo"
},

{
    "id": 37169,
    "title": "A Centopéia Humana",
    "genre_ids": [
        27
    ],
    "release_date": "2009-10-31",
    "popularity": 14.023,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/f969yH5iuSAh2IuKLik9c2iFdHp.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "a-centopia-humana"
},

{
    "id": 944117,
    "title": "L'Abbé Pierre : Une vie de combats",
    "genre_ids": [
        36
    ],
    "release_date": "2023-11-08",
    "popularity": 14.269,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/yP2WZQkl107fhlvIXXT1LQol5xq.jpg",
    "runtime": 138,
    "networks": [],
    "certification": "N/A",
    "slug": "labb-pierre-une-vie-de-combats"
},

{
    "id": 13683,
    "title": "Tarzan e Jane",
    "genre_ids": [
        16,
        10751
    ],
    "release_date": "2002-06-24",
    "popularity": 17.918,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/dZTg8Z2DuVx7SgEKD1nHYZBQMm6.jpg",
    "runtime": 75,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "tarzan-e-jane"
},

{
    "id": 9880,
    "title": "O Diário da Princesa",
    "genre_ids": [
        35,
        10751,
        10749
    ],
    "release_date": "2001-08-03",
    "popularity": 14.974,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/7oYNvPAPSFBDh4o7NdRc58ICzUR.jpg",
    "runtime": 115,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "o-dirio-da-princesa"
},

{
    "id": 118340,
    "title": "Guardiões da Galáxia",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "2014-07-30",
    "popularity": 16.448,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/xaY92XMToaSnBuvCui3LHzNGqZB.jpg",
    "runtime": 121,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "guardies-da-galxia"
},

{
    "id": 13186,
    "title": "Pânico na Floresta 2",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2007-08-25",
    "popularity": 16.801,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/qnJ9yocwpxl0Cvi5kgZZjWIl3NF.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "18",
    "slug": "pnico-na-floresta-2"
},

{
    "id": 33273,
    "title": "Cela 211",
    "genre_ids": [
        28,
        53,
        18
    ],
    "release_date": "2009-11-06",
    "popularity": 16.031,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/kJ3vywEavJJsPLayOR6YVtmtbQI.jpg",
    "runtime": 110,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "cela-211"
},

{
    "id": 1949,
    "title": "Zodíaco",
    "genre_ids": [
        80,
        18,
        9648,
        53
    ],
    "release_date": "2007-03-02",
    "popularity": 19.501,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/jFmlV5vUzOt1PgJ82efOhNsWcWX.jpg",
    "runtime": 157,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "zodaco"
},

{
    "id": 39108,
    "title": "Dragon Ball Z: O Ataque do Dragão",
    "genre_ids": [
        16,
        28,
        878
    ],
    "release_date": "1995-07-15",
    "popularity": 14.605,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/3HKCZmoTK3gwYJAFBTvJETaaDFt.jpg",
    "runtime": 51,
    "networks": [
        119,
        283,
        1968
    ],
    "certification": "10",
    "slug": "dragon-ball-z-o-ataque-do-drago"
},

{
    "id": 1094556,
    "title": "O Retorno dos Thundermans",
    "genre_ids": [
        10751,
        878,
        28,
        35
    ],
    "release_date": "2024-03-07",
    "popularity": 15.23,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/wEquopFw43QCKsBp1fpIabmGlYc.jpg",
    "runtime": 70,
    "networks": [
        531,
        484,
        582,
        1853,
        2303
    ],
    "certification": "N/A",
    "slug": "o-retorno-dos-thundermans"
},

{
    "id": 1495,
    "title": "Cruzada",
    "genre_ids": [
        18,
        28,
        12,
        36,
        10752
    ],
    "release_date": "2005-05-03",
    "popularity": 19.993,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/2VXjb6myxAppgfu6YRF4YsVmjZo.jpg",
    "runtime": 144,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "cruzada"
},

{
    "id": 293167,
    "title": "Kong: A Ilha da Caveira",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2017-03-08",
    "popularity": 14.836,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/vhSXxrwfkFDiFRR8S6BSBQuCeQT.jpg",
    "runtime": 118,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "kong-a-ilha-da-caveira"
},

{
    "id": 838209,
    "title": "Exhuma",
    "genre_ids": [
        9648,
        27,
        53
    ],
    "release_date": "2024-02-22",
    "popularity": 15.873,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/tw0i3kkmOTjDjGFZTLHKhoeXVvA.jpg",
    "runtime": 133,
    "networks": [],
    "certification": "N/A",
    "slug": "exhuma"
},

{
    "id": 11362,
    "title": "O Conde de Monte Cristo",
    "genre_ids": [
        12,
        18,
        36
    ],
    "release_date": "2002-01-23",
    "popularity": 15.679,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/pjoMyKnMh0EY6o2IxT1aiM1xqpk.jpg",
    "runtime": 131,
    "networks": [],
    "certification": "12",
    "slug": "o-conde-de-monte-cristo"
},

{
    "id": 744276,
    "title": "After: Depois da Promessa",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2022-08-24",
    "popularity": 20.348,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/iF5Hq9evr77NJUiPV3U25mZXmTj.jpg",
    "runtime": 95,
    "networks": [
        119,
        701
    ],
    "certification": "14",
    "slug": "after-depois-da-promessa"
},

{
    "id": 335797,
    "title": "Sing - Quem Canta Seus Males Espanta",
    "genre_ids": [
        16,
        35,
        10751,
        10402
    ],
    "release_date": "2016-11-23",
    "popularity": 18.258,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/vMWimvNGXKggoeEHtSAQDTkBikd.jpg",
    "runtime": 108,
    "networks": [
        8,
        119,
        167,
        307,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "sing-quem-canta-seus-males-espanta"
},

{
    "id": 1024127,
    "title": "O Rei dos Assassinos",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2023-09-01",
    "popularity": 14.489,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/tHA2wltMBWuaTzOzSf7P2bzhmIy.jpg",
    "runtime": 92,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "o-rei-dos-assassinos"
},

{
    "id": 28,
    "title": "Apocalypse Now",
    "genre_ids": [
        18,
        10752
    ],
    "release_date": "1979-05-19",
    "popularity": 16.96,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/awYf0r6iuTXDAYQEGLdsvzz3Sa5.jpg",
    "runtime": 196,
    "networks": [],
    "certification": "16",
    "slug": "apocalypse-now"
},

{
    "id": 1261501,
    "title": "Ad Vitam",
    "genre_ids": [
        53,
        18,
        80,
        28
    ],
    "release_date": "2025-01-09",
    "popularity": 16.346,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/dOpSxmD3FWfl6SK8SLXw9uwcO05.jpg",
    "runtime": 98,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "ad-vitam"
},

{
    "id": 630586,
    "title": "Pânico na Floresta: A Fundação",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2021-01-26",
    "popularity": 17.229,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/x4GWEuGTK1XFhVSE76y9ctsg58T.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "18",
    "slug": "pnico-na-floresta-a-fundao"
},

{
    "id": 856289,
    "title": "Criação dos Deuses I: Reino das Tempestades",
    "genre_ids": [
        28,
        14,
        10752
    ],
    "release_date": "2023-07-15",
    "popularity": 19.709,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/9hR5NPTT1gpTwcRO3wdgxhjEMyf.jpg",
    "runtime": 148,
    "networks": [],
    "certification": "N/A",
    "slug": "criao-dos-deuses-i-reino-das-tempestades"
},

{
    "id": 1093995,
    "title": "Missão Suicida",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-05-02",
    "popularity": 16.21,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/w05T2c3jLhLCHa0lFMuxH4kDwua.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "misso-suicida"
},

{
    "id": 290859,
    "title": "O Exterminador do Futuro: Destino Sombrio",
    "genre_ids": [
        878,
        28,
        12,
        53
    ],
    "release_date": "2019-10-23",
    "popularity": 15.565,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/5JYfI1yehkr2ZEXf1Pnm8OTuT24.jpg",
    "runtime": 128,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "o-exterminador-do-futuro-destino-sombrio"
},

{
    "id": 36557,
    "title": "007 Cassino Royale",
    "genre_ids": [
        12,
        28,
        53
    ],
    "release_date": "2006-11-14",
    "popularity": 15.769,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/7b3qmLlvm2lvJ2gxsKQ42S3RTKR.jpg",
    "runtime": 144,
    "networks": [],
    "certification": "14",
    "slug": "007-cassino-royale"
},

{
    "id": 1075676,
    "title": "Guerra e Revolta",
    "genre_ids": [
        28,
        18,
        36
    ],
    "release_date": "2024-10-02",
    "popularity": 17.71,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/gon3hWutfHTz7jCuG7i3kBRzS0R.jpg",
    "runtime": 128,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "guerra-e-revolta"
},

{
    "id": 50014,
    "title": "Histórias Cruzadas",
    "genre_ids": [
        18
    ],
    "release_date": "2011-08-09",
    "popularity": 18.078,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/7iWfEm9VOeX8AAnC7F1ApxRDTfw.jpg",
    "runtime": 146,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "histrias-cruzadas"
},

{
    "id": 251,
    "title": "Ghost: Do Outro Lado da Vida",
    "genre_ids": [
        14,
        18,
        53,
        9648,
        10749
    ],
    "release_date": "1990-07-13",
    "popularity": 14.15,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/nGSeOwr3XRP2M7bBjcOol8vi2jT.jpg",
    "runtime": 129,
    "networks": [
        2156
    ],
    "certification": "14",
    "slug": "ghost-do-outro-lado-da-vida"
},

{
    "id": 607,
    "title": "MIB - Homens de Preto",
    "genre_ids": [
        28,
        12,
        35,
        878
    ],
    "release_date": "1997-07-02",
    "popularity": 16.643,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/rSqw9baXpKyrBgC5oY0dnt0Pg7K.jpg",
    "runtime": 98,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "mib-homens-de-preto"
},

{
    "id": 273477,
    "title": "Como Sobreviver a um Ataque Zumbi",
    "genre_ids": [
        35,
        27
    ],
    "release_date": "2015-10-23",
    "popularity": 17.479,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/wT88c7CdVYaNTMtDVLw0xrHumfu.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "16",
    "slug": "como-sobreviver-a-um-ataque-zumbi"
},

{
    "id": 35,
    "title": "Os Simpsons: O Filme",
    "genre_ids": [
        16,
        35,
        10751
    ],
    "release_date": "2007-07-25",
    "popularity": 18.734,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/sMcsZ7BlOf2LDhTlfPlWb3w6lJM.jpg",
    "runtime": 87,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "os-simpsons-o-filme"
},

{
    "id": 895959,
    "title": "Flutuar",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-02-09",
    "popularity": 14.699,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/htcFpvCQycruzW2PV2ceihMRQyY.jpg",
    "runtime": 100,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "flutuar"
},

{
    "id": 966220,
    "title": "Corvo Branco",
    "genre_ids": [
        10752,
        28,
        18
    ],
    "release_date": "2022-05-03",
    "popularity": 15.446,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/1zNcJWXQYgMDAF3pNoqxU47FHfc.jpg",
    "runtime": 111,
    "networks": [
        47,
        683
    ],
    "certification": "N/A",
    "slug": "corvo-branco"
},

{
    "id": 177677,
    "title": "Missão: Impossível - Nação Secreta",
    "genre_ids": [
        28,
        12
    ],
    "release_date": "2015-07-23",
    "popularity": 19.25,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/fxL6ktSUDejDq9Ni6UsoY73DC2I.jpg",
    "runtime": 131,
    "networks": [
        337,
        531,
        307,
        1853,
        2156,
        2303
    ],
    "certification": "14",
    "slug": "misso-impossvel-nao-secreta"
},

{
    "id": 613504,
    "title": "After: Depois da Verdade",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2020-09-02",
    "popularity": 18.94,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/aduKXG7H0z0osY8KNQjcLB3cWO5.jpg",
    "runtime": 105,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "after-depois-da-verdade"
},

{
    "id": 420817,
    "title": "Aladdin",
    "genre_ids": [
        12,
        14,
        10749,
        10751
    ],
    "release_date": "2019-05-22",
    "popularity": 18.509,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/1d8HShFOmSWDwvqtvPEZqzlZbYl.jpg",
    "runtime": 129,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "aladdin"
},

{
    "id": 14161,
    "title": "2012",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2009-10-10",
    "popularity": 15.29,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/6ZwQWTKeLfmGyaCxKWEqEM7Ewtq.jpg",
    "runtime": 158,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "2012"
},

{
    "id": 715287,
    "title": "새엄마의 욕망",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2020-05-29",
    "popularity": 14.361,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/rYC6UyML4CU4zYiZVbDMrwnGyWW.jpg",
    "runtime": 78,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 4247,
    "title": "Todo Mundo em Pânico",
    "genre_ids": [
        35
    ],
    "release_date": "2000-07-07",
    "popularity": 17.885,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/daorfyZdHkI44vuf3DVDbmJkYQI.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "16",
    "slug": "todo-mundo-em-pnico"
},

{
    "id": 13475,
    "title": "Star Trek",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2009-05-06",
    "popularity": 14.016,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/qZ9VC2XGEqdPWOO8yA5BSBU5vDd.jpg",
    "runtime": 127,
    "networks": [
        8,
        531,
        1796,
        1853,
        2303
    ],
    "certification": "12",
    "slug": "star-trek"
},

{
    "id": 288985,
    "title": "Le Porno Killers",
    "genre_ids": [
        80,
        28
    ],
    "release_date": "1980-04-20",
    "popularity": 14.969,
    "vote_average": 4.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/o6vDV0RjXW1XL1Huy8yY69YrI9l.jpg",
    "runtime": 82,
    "networks": [],
    "certification": "N/A",
    "slug": "le-porno-killers"
},

{
    "id": 783110,
    "title": "Smugglers",
    "genre_ids": [
        80,
        28
    ],
    "release_date": "2023-07-26",
    "popularity": 15.131,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/ayLXqPZCu3uaLLhXiqvw5NBb7Lw.jpg",
    "runtime": 129,
    "networks": [],
    "certification": "N/A",
    "slug": "smugglers"
},

{
    "id": 474350,
    "title": "IT: Capítulo Dois",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2019-09-04",
    "popularity": 19.499,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/yVksBmUf2uwEruDttP3XtHamS8q.jpg",
    "runtime": 170,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "it-captulo-dois"
},

{
    "id": 49444,
    "title": "Kung Fu Panda 2",
    "genre_ids": [
        16,
        10751,
        35
    ],
    "release_date": "2011-05-25",
    "popularity": 19.973,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/mgypa5hjjr2QXiaa5MwPlQuh3oe.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "L",
    "slug": "kung-fu-panda-2"
},

{
    "id": 13194,
    "title": "Highlander: The Search for Vengeance",
    "genre_ids": [
        28,
        16,
        14,
        878
    ],
    "release_date": "2007-06-05",
    "popularity": 14.269,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/f4htbMf2LORgMjKn0litcUFWuWY.jpg",
    "runtime": 86,
    "networks": [],
    "certification": "N/A",
    "slug": "highlander-the-search-for-vengeance"
},

{
    "id": 949423,
    "title": "Pearl: Uma História de Origem 'X'",
    "genre_ids": [
        27
    ],
    "release_date": "2022-09-16",
    "popularity": 16.029,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/cTgLkhIMmzwH1NAaq7NDbFN20zi.jpg",
    "runtime": 103,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "pearl-uma-histria-de-origem-x"
},

{
    "id": 8275,
    "title": "American Pie: O Último Stifler Virgem",
    "genre_ids": [
        35
    ],
    "release_date": "2006-12-01",
    "popularity": 14.6,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/tW8I7JqwDIACpS3Wo7aJnYnyFup.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "american-pie-o-ltimo-stifler-virgem"
},

{
    "id": 61108,
    "title": "Emmanuelle 6: Paraíso Selvagem",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1988-07-06",
    "popularity": 16.787,
    "vote_average": 4.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/jruWHru3JLaSDL6oOPK1UnIRTZ2.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "emmanuelle-6-paraso-selvagem"
},

{
    "id": 394723,
    "title": "A Linha Vermelha do Destino",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2016-05-19",
    "popularity": 15.214,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/m8DX0ecT6Bw8k9C26uw9lcTEjew.jpg",
    "runtime": 100,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "a-linha-vermelha-do-destino"
},

{
    "id": 161,
    "title": "Onze Homens e um Segredo",
    "genre_ids": [
        53,
        80
    ],
    "release_date": "2001-12-07",
    "popularity": 16.447,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/8NbSiE9xnymrcMEfiUbSM9it7hq.jpg",
    "runtime": 117,
    "networks": [
        1825
    ],
    "certification": "12",
    "slug": "onze-homens-e-um-segredo"
},

{
    "id": 63311,
    "title": "A Pele Que Habito",
    "genre_ids": [
        18,
        27,
        9648,
        53
    ],
    "release_date": "2011-08-17",
    "popularity": 14.833,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/90hbSeBsev4hezgzkyW8tkio2dp.jpg",
    "runtime": 120,
    "networks": [],
    "certification": "N/A",
    "slug": "a-pele-que-habito"
},

{
    "id": 10830,
    "title": "Matilda",
    "genre_ids": [
        35,
        10751,
        14
    ],
    "release_date": "1996-08-02",
    "popularity": 15.866,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/anKGylXCQ8NUv41TusuxIxbA06i.jpg",
    "runtime": 98,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "L",
    "slug": "matilda"
},

{
    "id": 1059372,
    "title": "Querido David",
    "genre_ids": [
        18,
        10749,
        14
    ],
    "release_date": "2023-02-09",
    "popularity": 15.677,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/f3HkD0GxSuOZehm370aSAdgpGet.jpg",
    "runtime": 118,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "querido-david"
},

{
    "id": 336843,
    "title": "Maze Runner: A Cura Mortal",
    "genre_ids": [
        878,
        28,
        12,
        53
    ],
    "release_date": "2018-01-10",
    "popularity": 18.254,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/uBEpWurzTOiz520d1tRNhBXN7h9.jpg",
    "runtime": 142,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "maze-runner-a-cura-mortal"
},

{
    "id": 397243,
    "title": "A Autópsia",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2016-12-21",
    "popularity": 17.228,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/9hY2AVLqdklon41dr9PSQ4KdW8K.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "14",
    "slug": "a-autpsia"
},

{
    "id": 801688,
    "title": "Kalki 2898 A.D. (Hindi)",
    "genre_ids": [
        18,
        28,
        14,
        878
    ],
    "release_date": "2024-06-26",
    "popularity": 16.331,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg",
    "runtime": 176,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "kalki-2898-ad-hindi"
},

{
    "id": 400155,
    "title": "Hotel Transilvânia 3: Férias Monstruosas",
    "genre_ids": [
        16,
        35,
        10751,
        14
    ],
    "release_date": "2018-06-28",
    "popularity": 16.959,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/yyDm9V7xSyxpgu7MfcMatyZcR03.jpg",
    "runtime": 97,
    "networks": [
        8,
        167,
        307,
        484,
        1796,
        2156
    ],
    "certification": "L",
    "slug": "hotel-transilvnia-3-frias-monstruosas"
},

{
    "id": 363088,
    "title": "Homem-Formiga e a Vespa",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2018-07-04",
    "popularity": 14.483,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/smRrzh8W4PfIYiqAEqc6U1D6Ekl.jpg",
    "runtime": 118,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "homem-formiga-e-a-vespa"
},

{
    "id": 796,
    "title": "Segundas Intenções",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1999-03-05",
    "popularity": 16.21,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/uG1CczBQtAFxBvRIAT7R4oSaIaz.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "14",
    "slug": "segundas-intenes"
},

{
    "id": 1311550,
    "title": "Casa de Ga'a",
    "genre_ids": [
        28,
        36
    ],
    "release_date": "2024-07-26",
    "popularity": 19.691,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/jtDAIoVst9Bj1VRcQKY2fj52VYe.jpg",
    "runtime": 120,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "casa-de-gaa"
},

{
    "id": 770,
    "title": "...E o Vento Levou",
    "genre_ids": [
        18,
        10752,
        10749
    ],
    "release_date": "1939-12-15",
    "popularity": 15.762,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/lY3jrnJAx7msVcnvWF4Jk3AOl4R.jpg",
    "runtime": 238,
    "networks": [
        1899,
        499,
        1825
    ],
    "certification": "N/A",
    "slug": "e-o-vento-levou"
},

{
    "id": 11360,
    "title": "Dumbo",
    "genre_ids": [
        16,
        10751
    ],
    "release_date": "1941-10-31",
    "popularity": 15.565,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/hKDdllslMtsU9JixAv5HR9biXlp.jpg",
    "runtime": 63,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "dumbo"
},

{
    "id": 51608,
    "title": "O Homem de Lugar Nenhum",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2010-08-04",
    "popularity": 14.144,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/1U3NyflIykiY7ClMcEncCt6sYeC.jpg",
    "runtime": 119,
    "networks": [
        464
    ],
    "certification": "16",
    "slug": "o-homem-de-lugar-nenhum"
},

{
    "id": 158852,
    "title": "Tomorrowland: Um Lugar Onde Nada É Impossível",
    "genre_ids": [
        12,
        10751,
        9648,
        878
    ],
    "release_date": "2015-05-19",
    "popularity": 17.705,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/i7vf2ByJw8V7FLQNc2HYxHTNned.jpg",
    "runtime": 130,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "tomorrowland-um-lugar-onde-nada-impossvel"
},

{
    "id": 914215,
    "title": "Humane",
    "genre_ids": [
        53,
        27,
        878
    ],
    "release_date": "2024-04-26",
    "popularity": 18.067,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/ecOvKaoM1hwQbp0uTnULGrSV32e.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "humane"
},

{
    "id": 2493,
    "title": "A Princesa Prometida",
    "genre_ids": [
        12,
        10751,
        14,
        35,
        10749
    ],
    "release_date": "1987-09-25",
    "popularity": 15.437,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/9tXM8AR7BZ8cu6JkI9FlBl98Vao.jpg",
    "runtime": 98,
    "networks": [
        307,
        2156
    ],
    "certification": "N/A",
    "slug": "a-princesa-prometida"
},

{
    "id": 65496,
    "title": "Meus Caros Estudos",
    "genre_ids": [
        18
    ],
    "release_date": "2010-01-18",
    "popularity": 14.698,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/o7f1htyhi8F4U4dUhTEsp00prNP.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "N/A",
    "slug": "meus-caros-estudos"
},

{
    "id": 1273049,
    "title": "டிராகன்",
    "genre_ids": [
        10749,
        35,
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 17.478,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/sKO0EFi0aSdKZXZxqjTunLlNdjU.jpg",
    "runtime": 157,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 673593,
    "title": "Meninas Malvadas",
    "genre_ids": [
        35
    ],
    "release_date": "2024-01-10",
    "popularity": 16.631,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/vZx6gIkqiZ559w1S8wFHIeKmp7C.jpg",
    "runtime": 113,
    "networks": [
        8,
        1796,
        1853
    ],
    "certification": "12",
    "slug": "meninas-malvadas"
},

{
    "id": 345940,
    "title": "Megatubarão",
    "genre_ids": [
        28,
        878,
        27
    ],
    "release_date": "2018-08-09",
    "popularity": 19.214,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/93I5nbYx3If3pFZZV5x5NJ68fTs.jpg",
    "runtime": 113,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "megatubaro"
},

{
    "id": 207703,
    "title": "Kingsman: Serviço Secreto",
    "genre_ids": [
        80,
        35,
        28,
        12
    ],
    "release_date": "2015-01-24",
    "popularity": 18.728,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/okY7RGWpcIKAMzwhN4EgKMrmZQU.jpg",
    "runtime": 129,
    "networks": [
        337,
        8
    ],
    "certification": "16",
    "slug": "kingsman-servio-secreto"
},

{
    "id": 854,
    "title": "O Máskara",
    "genre_ids": [
        10749,
        35,
        80,
        14
    ],
    "release_date": "1994-07-29",
    "popularity": 18.932,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/q9O7aYk2unOdKXt6HCCalF9Jup8.jpg",
    "runtime": 101,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "o-mskara"
},

{
    "id": 46195,
    "title": "Rio",
    "genre_ids": [
        16,
        12,
        35,
        10751
    ],
    "release_date": "2011-04-03",
    "popularity": 18.503,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/pPvCSyQCY6Xtl78Qo9o0YStUj6o.jpg",
    "runtime": 96,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "rio"
},

{
    "id": 9902,
    "title": "Pânico na Floresta",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2003-05-30",
    "popularity": 15.289,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/mQVIIUXHo3Qpd6nu0api7UyMpas.jpg",
    "runtime": 84,
    "networks": [
        307
    ],
    "certification": "14",
    "slug": "pnico-na-floresta"
},

{
    "id": 684501,
    "title": "관전남",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2019-07-25",
    "popularity": 17.877,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/9BvrsCMgBtfd8kL7m3inaw3mfnX.jpg",
    "runtime": 71,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 4523,
    "title": "Encantada",
    "genre_ids": [
        35,
        10751,
        14,
        10749
    ],
    "release_date": "2007-11-20",
    "popularity": 14.013,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/dv3I9Zhn6Y1CGDyyrNEX9KFFdXR.jpg",
    "runtime": 107,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "encantada"
},

{
    "id": 1225377,
    "title": "Mouse Trap: A Diversão Agora é Outra",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-08-23",
    "popularity": 15.113,
    "vote_average": 4.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/nJqQ9gRtjnU1pstn660YCEmbAwL.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "16",
    "slug": "mouse-trap-a-diverso-agora-outra"
},

{
    "id": 1607,
    "title": "Desafio no Bronx",
    "genre_ids": [
        18,
        80
    ],
    "release_date": "1993-10-01",
    "popularity": 14.347,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/aqo0G243ukYfVJNgncKGhqgmHfc.jpg",
    "runtime": 111,
    "networks": [],
    "certification": "N/A",
    "slug": "desafio-no-bronx"
},

{
    "id": 9495,
    "title": "O Corvo",
    "genre_ids": [
        14,
        28,
        53
    ],
    "release_date": "1994-05-11",
    "popularity": 14.266,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/ohPkFlIDvxQajr0eKyVCCAVVlj6.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "16",
    "slug": "o-corvo"
},

{
    "id": 14574,
    "title": "O Menino do Pijama Listrado",
    "genre_ids": [
        18,
        10752,
        36
    ],
    "release_date": "2008-05-07",
    "popularity": 19.448,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/wvl21Y8q45A7jGxKTfiX2z9awAu.jpg",
    "runtime": 94,
    "networks": [
        8,
        307
    ],
    "certification": "N/A",
    "slug": "o-menino-do-pijama-listrado"
},

{
    "id": 76757,
    "title": "O Destino de Júpiter",
    "genre_ids": [
        878,
        14,
        28
    ],
    "release_date": "2015-02-04",
    "popularity": 16.027,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/u1p4Fw1nqYOQcRgD63sJmX3ZjgU.jpg",
    "runtime": 124,
    "networks": [],
    "certification": "12",
    "slug": "o-destino-de-jpiter"
},

{
    "id": 137,
    "title": "Feitiço do Tempo",
    "genre_ids": [
        10749,
        14,
        18,
        35
    ],
    "release_date": "1993-02-11",
    "popularity": 14.964,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/9KHidOg4OtcZQHXuBdJRA5yi6GC.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "12",
    "slug": "feitio-do-tempo"
},

{
    "id": 605,
    "title": "Matrix Revolutions",
    "genre_ids": [
        12,
        28,
        53,
        878
    ],
    "release_date": "2003-11-05",
    "popularity": 14.597,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/92oJ810bYqijBQ8tqYL74mSpPtV.jpg",
    "runtime": 129,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "matrix-revolutions"
},

{
    "id": 50546,
    "title": "Esposa de Mentirinha",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2011-02-10",
    "popularity": 16.772,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/v8ct2LskBXLcPHrW3uvtpyTcwfl.jpg",
    "runtime": 117,
    "networks": [
        8,
        1899,
        484,
        582,
        1796,
        1825
    ],
    "certification": "12",
    "slug": "esposa-de-mentirinha"
},

{
    "id": 9738,
    "title": "Quarteto Fantástico",
    "genre_ids": [
        28,
        14,
        878
    ],
    "release_date": "2005-06-29",
    "popularity": 14.825,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/jdUEq9Wt5Yo3ddDwIbJoeiny2Lm.jpg",
    "runtime": 106,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "quarteto-fantstico"
},

{
    "id": 337401,
    "title": "Mulan",
    "genre_ids": [
        12,
        14,
        28,
        10751
    ],
    "release_date": "2020-09-04",
    "popularity": 15.212,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/72I82eKXCadZWEYygV9GkJOQNEq.jpg",
    "runtime": 115,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "mulan"
},

{
    "id": 9358,
    "title": "Premonição 2",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2003-01-31",
    "popularity": 15.862,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/zaKJ8n8zk59XEfUAGcPO0R7l0Dp.jpg",
    "runtime": 91,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "premonio-2"
},

{
    "id": 11430,
    "title": "O Rei Leão 3: Hakuna Matata",
    "genre_ids": [
        10751,
        16,
        35,
        28
    ],
    "release_date": "2004-02-06",
    "popularity": 15.677,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/vtX3wirmv2VkQi1u4C9cSdHTXQn.jpg",
    "runtime": 77,
    "networks": [
        337
    ],
    "certification": "A",
    "slug": "o-rei-leo-3-hakuna-matata"
},

{
    "id": 27098,
    "title": "Lust och fägring stor",
    "genre_ids": [
        18,
        10749,
        10752
    ],
    "release_date": "1995-03-08",
    "popularity": 16.444,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/o7cBIxxNvgNhV85WcXrvJm9t2AJ.jpg",
    "runtime": 125,
    "networks": [],
    "certification": "N/A",
    "slug": "lust-och-fgring-stor"
},

{
    "id": 242582,
    "title": "O Abutre",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "2014-10-23",
    "popularity": 18.244,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/4dJp8HOCyr7gwiBijhBG46qf7vU.jpg",
    "runtime": 118,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "o-abutre"
},

{
    "id": 299537,
    "title": "Capitã Marvel",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2019-03-06",
    "popularity": 17.224,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/n3BisLdTMceUWcdP1ooP5VwN9JF.jpg",
    "runtime": 124,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "capit-marvel"
},

{
    "id": 1231818,
    "title": "과외의 목적",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2023-12-07",
    "popularity": 16.327,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/uBTGyxIUyQeKJVY17QBYurqIJ1V.jpg",
    "runtime": 71,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 912908,
    "title": "Ruim pra Cachorro",
    "genre_ids": [
        35,
        12
    ],
    "release_date": "2023-08-17",
    "popularity": 16.958,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/hfSkDDJiCf6cJpd4R9O9lM1T6hz.jpg",
    "runtime": 93,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "ruim-pra-cachorro"
},

{
    "id": 1428063,
    "title": "Por la ventana",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-24",
    "popularity": 16.204,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ic84P0rmaFOPU1PIxnMGuWqx7wh.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "por-la-ventana"
},

{
    "id": 626412,
    "title": "외계+인 2부",
    "genre_ids": [
        28,
        14,
        12
    ],
    "release_date": "2024-01-10",
    "popularity": 15.558,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/3l04H9ljNegDGG9gnKDhLExJvpz.jpg",
    "runtime": 122,
    "networks": [],
    "certification": "N/A",
    "slug": "-2"
},

{
    "id": 787,
    "title": "Sr. & Sra. Smith",
    "genre_ids": [
        28,
        35,
        18,
        53
    ],
    "release_date": "2005-06-07",
    "popularity": 17.692,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/xpBYICwTOy67ne4fT3rHvtVBtCe.jpg",
    "runtime": 119,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "sr-sra-smith"
},

{
    "id": 1273472,
    "title": "“骗骗”喜欢你",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2024-12-20",
    "popularity": 14.478,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/2F9utr2zj9YfLACInC1OV9Sa35b.jpg",
    "runtime": 115,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 6477,
    "title": "Alvin e os Esquilos",
    "genre_ids": [
        35,
        10751,
        14
    ],
    "release_date": "2007-12-13",
    "popularity": 15.75,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/o2WoeYJv9ISS9bw0kKD2cvmg9xN.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "L",
    "slug": "alvin-e-os-esquilos"
},

{
    "id": 459003,
    "title": "Mavka: Aventura na Floresta",
    "genre_ids": [
        16,
        12,
        10751,
        14
    ],
    "release_date": "2023-03-02",
    "popularity": 14.141,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/adyriBXnBuhdRgAllYAurnDQtQb.jpg",
    "runtime": 85,
    "networks": [
        307,
        2156
    ],
    "certification": "L",
    "slug": "mavka-aventura-na-floresta"
},

{
    "id": 370172,
    "title": "007: Sem Tempo para Morrer",
    "genre_ids": [
        28,
        53,
        12
    ],
    "release_date": "2021-09-29",
    "popularity": 18.066,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/luE0KG1rWfUptbgNtlNtL5sihyd.jpg",
    "runtime": 163,
    "networks": [],
    "certification": "14",
    "slug": "007-sem-tempo-para-morrer"
},

{
    "id": 863873,
    "title": "Os Horrores do Caddo Lake",
    "genre_ids": [
        53,
        9648,
        18,
        878
    ],
    "release_date": "2024-11-28",
    "popularity": 15.434,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/41ywUbgGvxKsoWBm4dS8Bbb2Af5.jpg",
    "runtime": 103,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "os-horrores-do-caddo-lake"
},

{
    "id": 1182047,
    "title": "O Aprendiz",
    "genre_ids": [
        36,
        18
    ],
    "release_date": "2024-10-09",
    "popularity": 18.924,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/kSXqBw3QzKqSx8ZAeWL9ms1zw2n.jpg",
    "runtime": 122,
    "networks": [
        484
    ],
    "certification": "14",
    "slug": "o-aprendiz"
},

{
    "id": 860623,
    "title": "Pandemia: A Guerra Final",
    "genre_ids": [
        28,
        53,
        9648
    ],
    "release_date": "2021-03-30",
    "popularity": 14.689,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/zBQFWjOIE3hoYCG67Y3VVaSnLyc.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "16",
    "slug": "pandemia-a-guerra-final"
},

{
    "id": 1377900,
    "title": "Knightfall",
    "genre_ids": [
        28
    ],
    "release_date": "2025-02-24",
    "popularity": 17.469,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/9w45H0HHFY99K4t71AKe4XYG3uB.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "knightfall"
},

{
    "id": 64682,
    "title": "O Grande Gatsby",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2013-05-09",
    "popularity": 16.621,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/1Rwd19kXCzB48bwPJNfu38bVS3X.jpg",
    "runtime": 143,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "o-grande-gatsby"
},

{
    "id": 2105,
    "title": "American Pie: A Primeira Vez é Inesquecível",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "1999-07-09",
    "popularity": 18.728,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/4GxuPJxUcArRpfBGJL6BG3B4Cb9.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "16",
    "slug": "american-pie-a-primeira-vez-inesquecvel"
},

{
    "id": 186622,
    "title": "Ainsi soient-elles",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "1995-01-25",
    "popularity": 19.214,
    "vote_average": 4.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ud7IhFWeyj1QB8QLljp2K73mNBL.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "N/A",
    "slug": "ainsi-soient-elles"
},

{
    "id": 273481,
    "title": "Sicario: Terra de Ninguém",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2015-09-17",
    "popularity": 18.493,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/iz8j7Cii58IzvYq4YQeMNXiwE7B.jpg",
    "runtime": 121,
    "networks": [],
    "certification": "16",
    "slug": "sicario-terra-de-ningum"
},

{
    "id": 176241,
    "title": "Prison Break: O Resgate Final",
    "genre_ids": [
        28,
        18,
        53
    ],
    "release_date": "2009-09-10",
    "popularity": 15.279,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/9z9NfKOzvNnztwDfZd76CTo5D7g.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "prison-break-o-resgate-final"
},

{
    "id": 842675,
    "title": "Terra à Deriva 2",
    "genre_ids": [
        878
    ],
    "release_date": "2023-01-22",
    "popularity": 15.108,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/2zqINC35WUFoS6ThsnoSGi03usE.jpg",
    "runtime": 173,
    "networks": [],
    "certification": "N/A",
    "slug": "terra-deriva-2"
},

{
    "id": 1413163,
    "title": "The Billionaire Escort's Secret",
    "genre_ids": [
        10749
    ],
    "release_date": "2024-12-26",
    "popularity": 17.872,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/6idMMAVk1vclW6EneEh8wtwdGx.jpg",
    "runtime": 104,
    "networks": [],
    "certification": "N/A",
    "slug": "the-billionaire-escorts-secret"
},

{
    "id": 287649,
    "title": "Scarlet Innocence",
    "genre_ids": [
        53,
        18,
        10749
    ],
    "release_date": "2014-10-02",
    "popularity": 14.011,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/4s3Qlq3q3xbLb84Kxt7mBC5xfBa.jpg",
    "runtime": 111,
    "networks": [],
    "certification": "N/A",
    "slug": "scarlet-innocence"
},

{
    "id": 617126,
    "title": "Quarteto Fantástico: Primeiros Passos",
    "genre_ids": [
        878,
        12
    ],
    "release_date": "2025-07-23",
    "popularity": 14.263,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/qnqHQMfvBy916X3tTV5lQMkbGxH.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "quarteto-fantstico-primeiros-passos"
},

{
    "id": 10895,
    "title": "Pinóquio",
    "genre_ids": [
        16,
        10751,
        14
    ],
    "release_date": "1940-02-23",
    "popularity": 14.34,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/rJTpz9LJFmDflvibkY2Y7IFOGua.jpg",
    "runtime": 88,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "pinquio"
},

{
    "id": 522627,
    "title": "Magnatas do Crime",
    "genre_ids": [
        28,
        80,
        35
    ],
    "release_date": "2020-01-01",
    "popularity": 14.959,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/vaeQ0Xersj2y5t1Hkqljb9i8RaU.jpg",
    "runtime": 113,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "16",
    "slug": "magnatas-do-crime"
},

{
    "id": 117263,
    "title": "Invasão à Casa Branca",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2013-03-20",
    "popularity": 16.004,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/tBoRmqFbbWhNn0ySe7W4RbiIZ54.jpg",
    "runtime": 119,
    "networks": [],
    "certification": "16",
    "slug": "invaso-casa-branca"
},

{
    "id": 147441,
    "title": "Êxodo: Deuses e Reis",
    "genre_ids": [
        12,
        18,
        28
    ],
    "release_date": "2014-12-03",
    "popularity": 14.824,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/sNcYlxw4zOOgIQebsFegw3gQixB.jpg",
    "runtime": 151,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "xodo-deuses-e-reis"
},

{
    "id": 848326,
    "title": "Rebel Moon - Parte 1: A Menina do Fogo",
    "genre_ids": [
        878,
        18,
        28,
        10752
    ],
    "release_date": "2023-12-15",
    "popularity": 16.771,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/sPmGw8DOpH856QjhCfetSK9yzI5.jpg",
    "runtime": 136,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "rebel-moon-parte-1-a-menina-do-fogo"
},

{
    "id": 906126,
    "title": "A Sociedade da Neve",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2023-12-15",
    "popularity": 15.857,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/7fQTmvKgVGxifieVryqqlxohkoW.jpg",
    "runtime": 144,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "a-sociedade-da-neve"
},

{
    "id": 756999,
    "title": "O Telefone Preto",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2022-06-17",
    "popularity": 15.206,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/yw6H4C64tjBWlyKFG1pzmq5zOQh.jpg",
    "runtime": 103,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "16",
    "slug": "o-telefone-preto"
},

{
    "id": 1425906,
    "title": "Enlightenment",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-24",
    "popularity": 15.655,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bVD9olvZN4odwLSObYekhrO81C8.jpg",
    "runtime": 72,
    "networks": [],
    "certification": "N/A",
    "slug": "enlightenment"
},

{
    "id": 86331,
    "title": "Q Sexual Desire",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2011-10-06",
    "popularity": 14.595,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/yBTElYnRkwySYzMunE6urPT9LvT.jpg",
    "runtime": 103,
    "networks": [],
    "certification": "N/A",
    "slug": "q-sexual-desire"
},

{
    "id": 677179,
    "title": "Creed III",
    "genre_ids": [
        18,
        28
    ],
    "release_date": "2023-03-01",
    "popularity": 16.442,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/kLgmZVrRVY41FWCCidi9IqmM473.jpg",
    "runtime": 116,
    "networks": [
        2156
    ],
    "certification": "12",
    "slug": "creed-iii"
},

{
    "id": 105814,
    "title": "孽欲追击档案之邪杀",
    "genre_ids": [
        27
    ],
    "release_date": "1996-06-22",
    "popularity": 18.244,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/9eqRRc4bNiLk9JFZ5xbioGBGHHR.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 459151,
    "title": "O Poderoso Chefinho 2: Negócios da Família",
    "genre_ids": [
        16,
        35,
        12,
        10751
    ],
    "release_date": "2021-07-01",
    "popularity": 17.2,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/2wBy31OCllFS1pSHkTnInxoHXOX.jpg",
    "runtime": 107,
    "networks": [],
    "certification": "L",
    "slug": "o-poderoso-chefinho-2-negcios-da-famlia"
},

{
    "id": 318256,
    "title": "Hot Girls Wanted",
    "genre_ids": [
        99
    ],
    "release_date": "2015-05-29",
    "popularity": 16.324,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/75ot83QOkc02vujyzmIbumQCU6Y.jpg",
    "runtime": 82,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "hot-girls-wanted"
},

{
    "id": 753342,
    "title": "Napoleão",
    "genre_ids": [
        36,
        10752,
        10749
    ],
    "release_date": "2023-11-22",
    "popularity": 16.952,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/oaUS0YJN3cHpvin1BMNmmnv0gRX.jpg",
    "runtime": 158,
    "networks": [
        350
    ],
    "certification": "16",
    "slug": "napoleo"
},

{
    "id": 4478,
    "title": "Proposta Indecente",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "1993-04-07",
    "popularity": 16.193,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/lprpE4mfo0Fek6Gk88NQ5LSIhqT.jpg",
    "runtime": 117,
    "networks": [],
    "certification": "12",
    "slug": "proposta-indecente"
},

{
    "id": 937249,
    "title": "57 Segundos",
    "genre_ids": [
        53,
        878,
        28
    ],
    "release_date": "2023-09-29",
    "popularity": 15.746,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/kRLNtJ0dWUHhNt20NijeWhnLJ5E.jpg",
    "runtime": 99,
    "networks": [
        307,
        2106,
        2107,
        2156
    ],
    "certification": "14",
    "slug": "57-segundos"
},

{
    "id": 159824,
    "title": "Hotel Transilvânia 2",
    "genre_ids": [
        16,
        35,
        10751,
        14
    ],
    "release_date": "2015-09-21",
    "popularity": 15.55,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/prBkRebn3rgLVboyxmEpjKaDJ1x.jpg",
    "runtime": 89,
    "networks": [
        1899,
        307,
        1825
    ],
    "certification": "L",
    "slug": "hotel-transilvnia-2"
},

{
    "id": 930564,
    "title": "Saltburn",
    "genre_ids": [
        18,
        35,
        53
    ],
    "release_date": "2023-11-16",
    "popularity": 17.682,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zGTfMwG112BC66mpaveVxoWPOaB.jpg",
    "runtime": 127,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "saltburn"
},

{
    "id": 435,
    "title": "O Dia Depois de Amanhã",
    "genre_ids": [
        28,
        12,
        878,
        53
    ],
    "release_date": "2004-05-26",
    "popularity": 14.474,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/dsI5ezLUYTWjJ56J3iNWmVSC9fK.jpg",
    "runtime": 124,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "o-dia-depois-de-amanh"
},

{
    "id": 1420964,
    "title": "Fruit Salad",
    "genre_ids": [
        35,
        99,
        878,
        10749,
        9648,
        10402
    ],
    "release_date": "2025-02-21",
    "popularity": 14.136,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/iSTmMiIO34onA97tZ5mp8ncdL9R.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "fruit-salad"
},

{
    "id": 9487,
    "title": "Vida de Inseto",
    "genre_ids": [
        10751,
        16,
        12,
        35
    ],
    "release_date": "1998-11-25",
    "popularity": 17.448,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/dKTJe3KGA2BHdHl9USjjCWZ3U5a.jpg",
    "runtime": 95,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "vida-de-inseto"
},

{
    "id": 378064,
    "title": "A Voz do Silêncio",
    "genre_ids": [
        16,
        18,
        10749
    ],
    "release_date": "2016-09-17",
    "popularity": 14.681,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/haMUCn5bNgeKb2EkILvhYGoHXZX.jpg",
    "runtime": 130,
    "networks": [],
    "certification": "14",
    "slug": "a-voz-do-silncio"
},

{
    "id": 984324,
    "title": "O Salário do Medo",
    "genre_ids": [
        28
    ],
    "release_date": "2024-03-28",
    "popularity": 18.719,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/wQpmQV4asLYTAmw4BwgmtfGx0Os.jpg",
    "runtime": 105,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "o-salrio-do-medo"
},

{
    "id": 297270,
    "title": "Tinker Bell e o Monstro da Terra do Nunca",
    "genre_ids": [
        12,
        16,
        10751
    ],
    "release_date": "2014-12-12",
    "popularity": 16.618,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/rWC9LUDVrGNRZvzFEqrSt9mJcBA.jpg",
    "runtime": 76,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "tinker-bell-e-o-monstro-da-terra-do-nunca"
},

{
    "id": 1369,
    "title": "Rambo II - A Missão",
    "genre_ids": [
        28,
        12,
        53,
        10752
    ],
    "release_date": "1985-05-21",
    "popularity": 15.432,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/442nYP16rpQ2bXduWponkvTXJRa.jpg",
    "runtime": 96,
    "networks": [
        8,
        119,
        1796,
        2156
    ],
    "certification": "14",
    "slug": "rambo-ii-a-misso"
},

{
    "id": 976893,
    "title": "Dias Perfeitos",
    "genre_ids": [
        18
    ],
    "release_date": "2023-11-10",
    "popularity": 18.062,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/p4oCDJgtYPg8lWqmeNIsqPwzZ7X.jpg",
    "runtime": 124,
    "networks": [
        11,
        201
    ],
    "certification": "N/A",
    "slug": "dias-perfeitos"
},

{
    "id": 126889,
    "title": "Alien: Covenant",
    "genre_ids": [
        878,
        27,
        53
    ],
    "release_date": "2017-05-09",
    "popularity": 18.478,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/dNJqsL3ekBPUXsSDu6oABGZkJMM.jpg",
    "runtime": 122,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "alien-covenant"
},

{
    "id": 124905,
    "title": "Godzilla",
    "genre_ids": [
        28,
        18,
        878
    ],
    "release_date": "2014-05-14",
    "popularity": 15.275,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/9dyFXQwmFHI1gMn2JEczgKD1hwO.jpg",
    "runtime": 123,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "godzilla"
},

{
    "id": 1362569,
    "title": "仮面ライダーガッチャード GRADUATIONS",
    "genre_ids": [
        28,
        878
    ],
    "release_date": "2025-02-21",
    "popularity": 13.988,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/uBRt1NkCsY8WSUDN3QJchxBFgXP.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "-graduations"
},

{
    "id": 268,
    "title": "Batman",
    "genre_ids": [
        14,
        28,
        80
    ],
    "release_date": "1989-06-21",
    "popularity": 15.103,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/1aadn0aD7h1VKq4yap2uKl7cTSL.jpg",
    "runtime": 126,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "batman"
},

{
    "id": 646,
    "title": "007 Contra o Satânico Dr. No",
    "genre_ids": [
        12,
        28,
        53
    ],
    "release_date": "1962-10-07",
    "popularity": 14.337,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zJPZPtBqPSN73m6UmpS7uTTOZSo.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "12",
    "slug": "007-contra-o-satnico-dr-no"
},

{
    "id": 49529,
    "title": "John Carter: Entre Dois Mundos",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2012-03-07",
    "popularity": 14.254,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/uv6RHSX6cvlCOUDgqcscxChyofj.jpg",
    "runtime": 132,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "john-carter-entre-dois-mundos"
},

{
    "id": 949716,
    "title": "விடாமுயற்சி",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2025-02-06",
    "popularity": 15.999,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/8IpYHDS3yIM2hy2frNZOzfvSqSE.jpg",
    "runtime": 158,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1895,
    "title": "Star Wars: Episódio III - A Vingança dos Sith",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2005-05-17",
    "popularity": 14.954,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/m8PpvsZqTb2RYYnPIF7DZii1DuA.jpg",
    "runtime": 140,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "star-wars-episdio-iii-a-vingana-dos-sith"
},

{
    "id": 297608,
    "title": "A Possessão de Deborah Logan",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2014-10-21",
    "popularity": 16.766,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/77i7EBUyQKOUiZeYQ5tWDGQb0AI.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "a-possesso-de-deborah-logan"
},

{
    "id": 388,
    "title": "O Plano Perfeito",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "2006-03-17",
    "popularity": 15.2,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/76z8q24vMul7IPguc0QUODF3THk.jpg",
    "runtime": 129,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "14",
    "slug": "o-plano-perfeito"
},

{
    "id": 516806,
    "title": "Último Sentinela",
    "genre_ids": [
        878,
        53
    ],
    "release_date": "2023-03-17",
    "popularity": 17.861,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/pD1o9B0ibENdNroYrBCQemG2jnr.jpg",
    "runtime": 112,
    "networks": [],
    "certification": "N/A",
    "slug": "ltimo-sentinela"
},

{
    "id": 181533,
    "title": "Uma Noite no Museu 3: O Segredo da Tumba",
    "genre_ids": [
        12,
        35,
        14,
        10751
    ],
    "release_date": "2014-12-17",
    "popularity": 15.852,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/cfrWSuTUhu6nEhzU4ysnlaLm0fQ.jpg",
    "runtime": 97,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "uma-noite-no-museu-3-o-segredo-da-tumba"
},

{
    "id": 1933,
    "title": "Os Outros",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2001-08-02",
    "popularity": 14.591,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/oPKffdRjZ5VOe0IcaxdVqG2BIsr.jpg",
    "runtime": 101,
    "networks": [
        119,
        2142,
        2141
    ],
    "certification": "N/A",
    "slug": "os-outros"
},

{
    "id": 128,
    "title": "Princesa Mononoke",
    "genre_ids": [
        12,
        14,
        16
    ],
    "release_date": "1997-07-12",
    "popularity": 15.654,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/7EadOwHmyQgOnlghRiWBygNtnjl.jpg",
    "runtime": 134,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "princesa-mononoke"
},

{
    "id": 1064375,
    "title": "Efeito Paradoxo",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-06-27",
    "popularity": 14.823,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/crLhazkOSDIcT5m0jZ9wQkud6U1.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "efeito-paradoxo"
},

{
    "id": 989662,
    "title": "Um Homem Diferente",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2024-08-24",
    "popularity": 16.435,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/6hhLlgqGTa7La186TEaK7vhpgAA.jpg",
    "runtime": 112,
    "networks": [
        484
    ],
    "certification": "16",
    "slug": "um-homem-diferente"
},

{
    "id": 293863,
    "title": "A Incrível História de Adaline",
    "genre_ids": [
        10749,
        14,
        18
    ],
    "release_date": "2015-04-16",
    "popularity": 18.242,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/gU84OUm9c4R44Zx8U1YPbCzKqIo.jpg",
    "runtime": 112,
    "networks": [],
    "certification": "14",
    "slug": "a-incrvel-histria-de-adaline"
},

{
    "id": 570670,
    "title": "O Homem Invisível",
    "genre_ids": [
        53,
        878,
        27
    ],
    "release_date": "2020-02-26",
    "popularity": 17.198,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/aQhkamz4n7UHlDOJJ8paDijEf4E.jpg",
    "runtime": 124,
    "networks": [],
    "certification": "14",
    "slug": "o-homem-invisvel"
},

{
    "id": 245891,
    "title": "John Wick - De Volta ao Jogo",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2014-10-22",
    "popularity": 15.543,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/4A9KmccvMqJA8MQzIes0G9Uobh5.jpg",
    "runtime": 101,
    "networks": [
        8,
        119,
        1899,
        307,
        484,
        1796,
        1825,
        2156
    ],
    "certification": "16",
    "slug": "john-wick-de-volta-ao-jogo"
},

{
    "id": 7131,
    "title": "Van Helsing: O Caçador de Monstros",
    "genre_ids": [
        27,
        12,
        28
    ],
    "release_date": "2004-05-03",
    "popularity": 17.674,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/s8fhGCLWbFDbBAOitRzVlMPk5pd.jpg",
    "runtime": 132,
    "networks": [
        119,
        307
    ],
    "certification": "14",
    "slug": "van-helsing-o-caador-de-monstros"
},

{
    "id": 335,
    "title": "Era uma Vez no Oeste",
    "genre_ids": [
        18,
        37
    ],
    "release_date": "1968-12-21",
    "popularity": 16.945,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/zaCMbBMT9v3lGBXT4RAOkWqpb4h.jpg",
    "runtime": 166,
    "networks": [
        8,
        47,
        1796,
        2156
    ],
    "certification": "14",
    "slug": "era-uma-vez-no-oeste"
},

{
    "id": 220289,
    "title": "Coherence",
    "genre_ids": [
        53,
        878
    ],
    "release_date": "2013-09-19",
    "popularity": 16.318,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/d1dGzDYQbLU9BoUb9OAmAgUX59Y.jpg",
    "runtime": 89,
    "networks": [
        119,
        484
    ],
    "certification": "14",
    "slug": "coherence"
},

{
    "id": 10184,
    "title": "Ele Não Está Tão a Fim de Você",
    "genre_ids": [
        35,
        10749,
        18
    ],
    "release_date": "2009-02-06",
    "popularity": 15.744,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/nUNvLGc3QeywVlRU5LSDj8mAn43.jpg",
    "runtime": 129,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "ele-no-est-to-a-fim-de-voc"
},

{
    "id": 1979,
    "title": "Quarteto Fantástico e o Surfista Prateado",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2007-06-13",
    "popularity": 16.185,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/kIVHHCApeOrrHfbuBTahHGsMt8m.jpg",
    "runtime": 92,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "quarteto-fantstico-e-o-surfista-prateado"
},

{
    "id": 167830,
    "title": "Incontri proibiti",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "1998-09-24",
    "popularity": 14.126,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/vKdd2hBtFbII7LFg6rF3r48Fh4W.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "incontri-proibiti"
},

{
    "id": 20982,
    "title": "Naruto Shippuden: O Filme",
    "genre_ids": [
        16,
        28,
        14
    ],
    "release_date": "2007-08-04",
    "popularity": 17.409,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/x2CL0VzHq8DwD1UDG9Jck7VZH1L.jpg",
    "runtime": 94,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "N/A",
    "slug": "naruto-shippuden-o-filme"
},

{
    "id": 241259,
    "title": "Alice Através do Espelho",
    "genre_ids": [
        12,
        10751,
        14
    ],
    "release_date": "2016-05-25",
    "popularity": 14.471,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/xHANJfW7hk2weM532IpUthgAQfo.jpg",
    "runtime": 113,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "alice-atravs-do-espelho"
},

{
    "id": 1233199,
    "title": "퇴마록",
    "genre_ids": [
        16,
        14,
        27
    ],
    "release_date": "2025-02-21",
    "popularity": 18.06,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/Aa3O79AfrswC6AZcQnWgdGPElyI.jpg",
    "runtime": 86,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1284004,
    "title": "Que a Força Materna Esteja com Você",
    "genre_ids": [
        16,
        35
    ],
    "release_date": "2024-05-09",
    "popularity": 16.606,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/9pEPOaZCXqQNjCoRiMnMLqm4nnE.jpg",
    "runtime": 6,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "que-a-fora-materna-esteja-com-voc"
},

{
    "id": 501929,
    "title": "A Família Mitchell e a Revolta das Máquinas",
    "genre_ids": [
        16,
        12,
        35
    ],
    "release_date": "2021-04-22",
    "popularity": 15.431,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/k1p10mLm1uM1jqR7RlzB0SalD00.jpg",
    "runtime": 90,
    "networks": [
        8,
        484,
        1796
    ],
    "certification": "L",
    "slug": "a-famlia-mitchell-e-a-revolta-das-mquinas"
},

{
    "id": 55580,
    "title": "Fermo posta Tinto Brass",
    "genre_ids": [
        35
    ],
    "release_date": "1995-08-30",
    "popularity": 14.675,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/oVF9vgMY5W7aMC1HJStlIm95FQt.jpg",
    "runtime": 81,
    "networks": [
        692
    ],
    "certification": "N/A",
    "slug": "fermo-posta-tinto-brass"
},

{
    "id": 392044,
    "title": "Assassinato no Expresso do Oriente",
    "genre_ids": [
        9648,
        18,
        80
    ],
    "release_date": "2017-11-03",
    "popularity": 13.988,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/1MyK6EuOQGCAZQdH9nWwqpZ8y6h.jpg",
    "runtime": 114,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "assassinato-no-expresso-do-oriente"
},

{
    "id": 1280655,
    "title": "VIRGO",
    "genre_ids": [
        12,
        10402
    ],
    "release_date": "2021-04-14",
    "popularity": 15.095,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/woUv6BNxjxXQZmL91C8m6Qk8JKg.jpg",
    "runtime": 6,
    "networks": [],
    "certification": "N/A",
    "slug": "virgo"
},

{
    "id": 5879,
    "title": "O Império dos Sentidos",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1976-09-15",
    "popularity": 14.336,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/28XPd5gYMQ418PxfLybfAxw5zYI.jpg",
    "runtime": 101,
    "networks": [
        307,
        11,
        1920,
        2157
    ],
    "certification": "N/A",
    "slug": "o-imprio-dos-sentidos"
},

{
    "id": 694943,
    "title": "배달노출: 알몸으로 유혹하기",
    "genre_ids": [
        10749
    ],
    "release_date": "2020-04-10",
    "popularity": 15.987,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/km7xKnZoHUXqiozCGzauunMp9OF.jpg",
    "runtime": 68,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 1049574,
    "title": "Colateral",
    "genre_ids": [
        28
    ],
    "release_date": "2024-05-07",
    "popularity": 15.269,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/fbtkwCWA0hk2zTZLuj6Jf99yvVE.jpg",
    "runtime": 109,
    "networks": [
        484,
        2106,
        2107
    ],
    "certification": "N/A",
    "slug": "colateral"
},

{
    "id": 424694,
    "title": "Bohemian Rhapsody",
    "genre_ids": [
        10402,
        18
    ],
    "release_date": "2018-10-24",
    "popularity": 14.243,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/qxgdqcxI216kEoypGbA9BemB7mW.jpg",
    "runtime": 135,
    "networks": [
        337,
        8,
        1796
    ],
    "certification": "14",
    "slug": "bohemian-rhapsody"
},

{
    "id": 976830,
    "title": "The Deep Dark",
    "genre_ids": [
        12,
        27,
        18
    ],
    "release_date": "2023-11-15",
    "popularity": 14.952,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/pDgktOulrpmg8HZlDVBAVaJ9Dih.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "the-deep-dark"
},

{
    "id": 10229,
    "title": "Um Amor para Recordar",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2002-01-25",
    "popularity": 17.861,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/s2UxmxiIOupjHmjs1Jl7TdWDVFc.jpg",
    "runtime": 101,
    "networks": [
        307,
        2156
    ],
    "certification": "L",
    "slug": "um-amor-para-recordar"
},

{
    "id": 18,
    "title": "O Quinto Elemento",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "1997-05-02",
    "popularity": 16.765,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/yDTfuFwJUl3JRBGEEb5jS6QhCW3.jpg",
    "runtime": 125,
    "networks": [],
    "certification": "12",
    "slug": "o-quinto-elemento"
},

{
    "id": 598,
    "title": "Cidade de Deus",
    "genre_ids": [
        18,
        80
    ],
    "release_date": "2002-08-30",
    "popularity": 15.848,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/gfnXixcGC060QcG6JPxN6AMdVsq.jpg",
    "runtime": 130,
    "networks": [
        8,
        1899,
        307,
        1796,
        1825,
        2156
    ],
    "certification": "16",
    "slug": "cidade-de-deus"
},

{
    "id": 1047041,
    "title": "名探偵コナン 黒鉄の魚影（サブマリン）",
    "genre_ids": [
        16,
        28,
        80,
        9648
    ],
    "release_date": "2023-04-14",
    "popularity": 15.64,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/688nvrDbpYsQOXik3KB6t5eVWjO.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 175112,
    "title": "Tinker Bell: Fadas e Piratas",
    "genre_ids": [
        16,
        10751
    ],
    "release_date": "2014-02-13",
    "popularity": 15.541,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/e9OYTVqqQRWWeTur8MExfFvtIkq.jpg",
    "runtime": 78,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "tinker-bell-fadas-e-piratas"
},

{
    "id": 1358280,
    "title": "Taboo: Family Secrets",
    "genre_ids": [
        10749,
        18,
        53
    ],
    "release_date": "2024-10-22",
    "popularity": 14.59,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/xatpxQfUVblKveWHXNOidaNg4ju.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "taboo-family-secrets"
},

{
    "id": 65754,
    "title": "Millennium: Os Homens Que Não Amavam as Mulheres",
    "genre_ids": [
        53,
        80,
        9648
    ],
    "release_date": "2011-12-14",
    "popularity": 16.433,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/iwaFFPTJFD5cH8DvKlsjy8Thtg3.jpg",
    "runtime": 158,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "millennium-os-homens-que-no-amavam-as-mulheres"
},

{
    "id": 408349,
    "title": "내 이웃의 아내",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2016-07-28",
    "popularity": 15.196,
    "vote_average": 3.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/qpW0myP5nCSZbSmOS0IhMJYXVkF.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 4922,
    "title": "O Curioso Caso de Benjamin Button",
    "genre_ids": [
        18,
        14,
        10749
    ],
    "release_date": "2008-12-25",
    "popularity": 17.174,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/84YkduLeFcYgqDBGcJ012fxdYqF.jpg",
    "runtime": 166,
    "networks": [],
    "certification": "12",
    "slug": "o-curioso-caso-de-benjamin-button"
},

{
    "id": 2454,
    "title": "As Crônicas de Nárnia: Príncipe Caspian",
    "genre_ids": [
        12,
        10751,
        14
    ],
    "release_date": "2008-05-15",
    "popularity": 17.669,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/dnu0dlICiFTR2cnySBkpaVOjp3z.jpg",
    "runtime": 150,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "as-crnicas-de-nrnia-prncipe-caspian"
},

{
    "id": 937746,
    "title": "Eu, Capitão",
    "genre_ids": [
        12,
        18
    ],
    "release_date": "2023-09-07",
    "popularity": 14.812,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/y6y3E3RWB4z6Pdf4OM0XmtqMqsX.jpg",
    "runtime": 121,
    "networks": [],
    "certification": "16",
    "slug": "eu-capito"
},

{
    "id": 1048241,
    "title": "Aprendiz de Espiã: Na Cidade Eterna",
    "genre_ids": [
        28,
        35
    ],
    "release_date": "2024-07-18",
    "popularity": 16.914,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/CaJcAlbA4a2jzwWcWl4M8ojgit.jpg",
    "runtime": 112,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "aprendiz-de-espi-na-cidade-eterna"
},

{
    "id": 1358752,
    "title": "Skinford 2: The Curse",
    "genre_ids": [
        53,
        28
    ],
    "release_date": "2024-05-20",
    "popularity": 15.736,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/auWtuSMLyiViVefPsj9JZA84n9I.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "skinford-2-the-curse"
},

{
    "id": 1924,
    "title": "Superman: O Filme",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "1978-12-14",
    "popularity": 16.183,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/sm6BLvYCSe4pUpW2UrCKSsS1o0B.jpg",
    "runtime": 143,
    "networks": [
        47,
        1899
    ],
    "certification": "L",
    "slug": "superman-o-filme"
},

{
    "id": 64688,
    "title": "Anjos da Lei",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2012-03-14",
    "popularity": 16.316,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/rVQmXioizm9bJJlYT03wEHU24h6.jpg",
    "runtime": 109,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "anjos-da-lei"
},

{
    "id": 1309057,
    "title": "ゆきてかへらぬ",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 14.452,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/c8FKMHAIt4eBmdeYuFEamEvFuEv.jpg",
    "runtime": 128,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 8689,
    "title": "Holocausto Canibal",
    "genre_ids": [
        27
    ],
    "release_date": "1980-02-07",
    "popularity": 17.363,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/4YsM5gu4feg60xlb3YB8LGmVZDY.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "18",
    "slug": "holocausto-canibal"
},

{
    "id": 1422308,
    "title": "Chris Distefano: Foi Sem Querer",
    "genre_ids": [
        35
    ],
    "release_date": "2025-02-21",
    "popularity": 15.424,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/mh822r1lxUnEFXTUg0oVshKy8wH.jpg",
    "runtime": 52,
    "networks": [],
    "certification": "16",
    "slug": "chris-distefano-foi-sem-querer"
},

{
    "id": 8871,
    "title": "O Grinch",
    "genre_ids": [
        10751,
        35,
        14
    ],
    "release_date": "2000-11-17",
    "popularity": 15.086,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/vDtJA6DdwLpwoV60rKLWOCt63gK.jpg",
    "runtime": 105,
    "networks": [
        8,
        119,
        167,
        307,
        484,
        1796
    ],
    "certification": "L",
    "slug": "o-grinch"
},

{
    "id": 102899,
    "title": "Homem-Formiga",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2015-07-14",
    "popularity": 16.59,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/yiLqv1gwBENjbqTAdPxW4LhX6aA.jpg",
    "runtime": 115,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "homem-formiga"
},

{
    "id": 1322985,
    "title": "哪吒·魔童归来",
    "genre_ids": [
        28,
        14
    ],
    "release_date": "2024-07-30",
    "popularity": 14.674,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/7V29MDzEIEzLbO98pI45YOy4DUM.jpg",
    "runtime": 79,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 324544,
    "title": "Nas Terras Perdidas",
    "genre_ids": [
        14,
        12,
        28
    ],
    "release_date": "2025-02-27",
    "popularity": 15.269,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/hSljn1jfCClIbHNdlz6cWQEjncV.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "N/A",
    "slug": "nas-terras-perdidas"
},

{
    "id": 20526,
    "title": "Tron: O Legado",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2010-12-14",
    "popularity": 14.126,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/wlHzvzXE9AvMgrVsKHg2PweC3aC.jpg",
    "runtime": 126,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "tron-o-legado"
},

{
    "id": 568620,
    "title": "G.I. Joe Origens: Snake Eyes",
    "genre_ids": [
        28,
        12
    ],
    "release_date": "2021-07-22",
    "popularity": 14.951,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/uVwQxrSp9TVuNzrsh63U0reYX7O.jpg",
    "runtime": 121,
    "networks": [],
    "certification": "14",
    "slug": "gi-joe-origens-snake-eyes"
},

{
    "id": 666277,
    "title": "Vidas Passadas",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2023-06-02",
    "popularity": 13.982,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/toSI71gFF11VnLfz2uiNx6jjNUF.jpg",
    "runtime": 106,
    "networks": [
        307,
        2156
    ],
    "certification": "N/A",
    "slug": "vidas-passadas"
},

{
    "id": 71552,
    "title": "American Pie: O Reencontro",
    "genre_ids": [
        35
    ],
    "release_date": "2012-04-04",
    "popularity": 14.24,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/8mxG1SPWilznur6Q4vKjHG7boyG.jpg",
    "runtime": 113,
    "networks": [
        307
    ],
    "certification": "16",
    "slug": "american-pie-o-reencontro"
},

{
    "id": 1209217,
    "title": "名探偵コナン 100万ドルの五稜星（みちしるべ）",
    "genre_ids": [
        16,
        80,
        9648,
        28
    ],
    "release_date": "2024-04-12",
    "popularity": 15.193,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/1j83eXizAMLd9NAKtJ26PaVK1dh.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "-100"
},

{
    "id": 385128,
    "title": "Velozes & Furiosos 9",
    "genre_ids": [
        28,
        12,
        80
    ],
    "release_date": "2021-05-19",
    "popularity": 15.981,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/6TuEPZ3ItlBO8WmH8BmY2aGLhes.jpg",
    "runtime": 145,
    "networks": [],
    "certification": "14",
    "slug": "velozes-furiosos-9"
},

{
    "id": 1025596,
    "title": "Caminhos de Sangue",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2024-04-19",
    "popularity": 16.76,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/eiNweqQOYbspQYCF7hhjPQvd7Fg.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "caminhos-de-sangue"
},

{
    "id": 619803,
    "title": "Força Bruta: Sem Saída",
    "genre_ids": [
        28,
        80,
        53,
        12
    ],
    "release_date": "2022-05-18",
    "popularity": 15.843,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/1GGqZZVFYzKn6WTQgR5bQFqMpIR.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "N/A",
    "slug": "fora-bruta-sem-sada"
},

{
    "id": 1199722,
    "title": "ഗെറ്റ്-സെറ്റ് ബേബി",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 14.332,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/uy4GiBEpilDCaAGPeF27HBImTOs.jpg",
    "runtime": 139,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 4248,
    "title": "Todo Mundo em Pânico 2",
    "genre_ids": [
        35
    ],
    "release_date": "2001-07-04",
    "popularity": 14.59,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/549UoU38uoikbqgXG09rkkfIEWf.jpg",
    "runtime": 82,
    "networks": [],
    "certification": "16",
    "slug": "todo-mundo-em-pnico-2"
},

{
    "id": 943344,
    "title": "地底怪物",
    "genre_ids": [
        14,
        12
    ],
    "release_date": "2023-04-27",
    "popularity": 15.64,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/rzQMvvS8StqQsNBzuzPk4eCjvjn.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 9737,
    "title": "Os Bad Boys",
    "genre_ids": [
        28,
        35,
        80,
        53
    ],
    "release_date": "1995-04-07",
    "popularity": 17.17,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/8fkDLt6Fbr2yyBqt3MEwiumnsar.jpg",
    "runtime": 119,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "os-bad-boys"
},

{
    "id": 400928,
    "title": "Um Laço de Amor",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2017-04-07",
    "popularity": 15.537,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/21uwPrntyCV9Z0LW7pZcVfbrqWo.jpg",
    "runtime": 101,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "um-lao-de-amor"
},

{
    "id": 346910,
    "title": "O Predador",
    "genre_ids": [
        878,
        28,
        12
    ],
    "release_date": "2018-09-05",
    "popularity": 14.806,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/ueV3nwRirpfKbclCThgaZUcVAbo.jpg",
    "runtime": 107,
    "networks": [
        337,
        8,
        1796
    ],
    "certification": "18",
    "slug": "o-predador"
},

{
    "id": 500664,
    "title": "Upgrade: Atualização",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "2018-05-31",
    "popularity": 16.43,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/swoOF70ML410UJswoQcWWp0waxb.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "16",
    "slug": "upgrade-atualizao"
},

{
    "id": 105864,
    "title": "O Bom Dinossauro",
    "genre_ids": [
        12,
        16,
        10751
    ],
    "release_date": "2015-11-14",
    "popularity": 15.728,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/mKGYOFSf9WvhNjWcmQXAQe5VuiE.jpg",
    "runtime": 93,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "o-bom-dinossauro"
},

{
    "id": 762975,
    "title": "Continência ao Amor",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2022-07-29",
    "popularity": 16.912,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ncBNV5G7EBLPK2X6cO55krYrPRw.jpg",
    "runtime": 122,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "continncia-ao-amor"
},

{
    "id": 770906,
    "title": "Salaar: Part 1 - Ceasefir",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "2023-12-21",
    "popularity": 16.313,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/nlu9WbcetNFRGXXPWITr30ob7W6.jpg",
    "runtime": 175,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "salaar-part-1-ceasefir"
},

{
    "id": 1431800,
    "title": "The last spit",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-24",
    "popularity": 16.155,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ijycIiasSdc2vJ5DlfWNcAa0bJ4.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "the-last-spit"
},

{
    "id": 602,
    "title": "Independence Day",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "1996-06-25",
    "popularity": 14.449,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/n1LVwlMRU49i88u5NnI4haKCemZ.jpg",
    "runtime": 153,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "independence-day"
},

{
    "id": 49018,
    "title": "Sobrenatural",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2011-03-31",
    "popularity": 16.59,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/2L8fErMpGD4s81VtWwspeyHYdiI.jpg",
    "runtime": 103,
    "networks": [
        484
    ],
    "certification": "14",
    "slug": "sobrenatural"
},

{
    "id": 12429,
    "title": "Ponyo - Uma Amizade que Veio do Mar",
    "genre_ids": [
        16,
        14,
        10751
    ],
    "release_date": "2008-07-19",
    "popularity": 14.674,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/cvpsmNWc8nyePJMbyMc9X5lLN6L.jpg",
    "runtime": 100,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "ponyo-uma-amizade-que-veio-do-mar"
},

{
    "id": 1368,
    "title": "Rambo: Programado Para Matar",
    "genre_ids": [
        28,
        12,
        53,
        10752
    ],
    "release_date": "1982-10-22",
    "popularity": 15.072,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/dDJ4YOz7baCHH6ZJPut9NcCgNl1.jpg",
    "runtime": 94,
    "networks": [
        8,
        119,
        307,
        499,
        484,
        2142,
        2141,
        2156
    ],
    "certification": "14",
    "slug": "rambo-programado-para-matar"
},

{
    "id": 141213,
    "title": "Prigione di donne",
    "genre_ids": [
        18
    ],
    "release_date": "1974-08-13",
    "popularity": 14.921,
    "vote_average": 4.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/bgcrR7BeC06ihGHMQCQT9HReGGg.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "prigione-di-donne"
},

{
    "id": 9604,
    "title": "Inferno Vermelho",
    "genre_ids": [
        28,
        80
    ],
    "release_date": "1988-06-17",
    "popularity": 14.235,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/6cDFRPabBNYZBYx1BQKyuj38aMS.jpg",
    "runtime": 106,
    "networks": [
        499
    ],
    "certification": "N/A",
    "slug": "inferno-vermelho"
},

{
    "id": 1369332,
    "title": "Art Spiegelman: Disaster Is My Muse",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-21",
    "popularity": 13.978,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yV9fSvt3C78JrPXrVkUKXyHXfIq.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "art-spiegelman-disaster-is-my-muse"
},

{
    "id": 451048,
    "title": "Jungle Cruise",
    "genre_ids": [
        14,
        12
    ],
    "release_date": "2021-07-28",
    "popularity": 14.123,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/9E76j2DcQv8LdbX1Wa9jpbDBfw1.jpg",
    "runtime": 127,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "jungle-cruise"
},

{
    "id": 45933,
    "title": "João Broncas - Ao Ombro...Saias",
    "genre_ids": [
        35
    ],
    "release_date": "1977-09-02",
    "popularity": 15.191,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/zvLqUjxh9RId7YzK8Xchu8fQaHk.jpg",
    "runtime": 84,
    "networks": [],
    "certification": "N/A",
    "slug": "joo-broncas-ao-ombrosaias"
},

{
    "id": 1236471,
    "title": "Everyone is Going to Die",
    "genre_ids": [
        27,
        53,
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 15.266,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/igBsMZxz57mRPtbYb8DnSVGI93a.jpg",
    "runtime": 82,
    "networks": [],
    "certification": "N/A",
    "slug": "everyone-is-going-to-die"
},

{
    "id": 290250,
    "title": "Dois Caras Legais",
    "genre_ids": [
        35,
        80,
        28
    ],
    "release_date": "2016-05-15",
    "popularity": 15.836,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/o2tXXF3zdhpMGJDctAeaXtkhMkd.jpg",
    "runtime": 116,
    "networks": [],
    "certification": "14",
    "slug": "dois-caras-legais"
},

{
    "id": 877703,
    "title": "Teen Wolf: O Filme",
    "genre_ids": [
        28,
        14,
        10770
    ],
    "release_date": "2023-01-18",
    "popularity": 14.326,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/e4M1YCKc07PeBoUs7ST2QgCiZFB.jpg",
    "runtime": 140,
    "networks": [
        531,
        484,
        582,
        1853,
        2303
    ],
    "certification": "16",
    "slug": "teen-wolf-o-filme"
},

{
    "id": 34851,
    "title": "Predadores",
    "genre_ids": [
        878,
        28,
        53
    ],
    "release_date": "2010-07-03",
    "popularity": 15.972,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/46pJsCB2y8pfmKTNRplcBX03Fqx.jpg",
    "runtime": 107,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "predadores"
},

{
    "id": 1244492,
    "title": "Look Back",
    "genre_ids": [
        16,
        18
    ],
    "release_date": "2024-06-28",
    "popularity": 16.75,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/uawgC9JOtbBGXwWygb3lon8SaEL.jpg",
    "runtime": 62,
    "networks": [
        119
    ],
    "certification": "12",
    "slug": "look-back"
},

{
    "id": 1140535,
    "title": "Presença",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2025-01-16",
    "popularity": 15.405,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/xZIGHoHj0DF0zdibwa66cRWHdHO.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "presena"
},

{
    "id": 810693,
    "title": "Jujutsu Kaisen 0: O Filme",
    "genre_ids": [
        16,
        28,
        14
    ],
    "release_date": "2021-12-24",
    "popularity": 15.634,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/2ndvx03fmREMxEgaZ1vWt756TOQ.jpg",
    "runtime": 105,
    "networks": [
        8,
        283,
        1796,
        1968
    ],
    "certification": "14",
    "slug": "jujutsu-kaisen-0-o-filme"
},

{
    "id": 745881,
    "title": "A Médium",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2021-07-14",
    "popularity": 14.578,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/oCPAJFtmdjlMuye8hVI7LAjymgO.jpg",
    "runtime": 131,
    "networks": [],
    "certification": "16",
    "slug": "a-mdium"
},

{
    "id": 406759,
    "title": "Moonfall: Ameaça Lunar",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2022-02-03",
    "popularity": 16.424,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/ACl5NQBHeEvypdVlaaE868bwFs.jpg",
    "runtime": 122,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "moonfall-ameaa-lunar"
},

{
    "id": 583083,
    "title": "A Barraca do Beijo 2",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2020-07-24",
    "popularity": 14.805,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/oUafkafJiFKkXuzROaAY8N9gGq.jpg",
    "runtime": 132,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "a-barraca-do-beijo-2"
},

{
    "id": 637,
    "title": "A Vida é Bela",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "1997-12-20",
    "popularity": 15.522,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/mdqU2CHabmbdkWKs1IvCfksbtNM.jpg",
    "runtime": 116,
    "networks": [
        8,
        499,
        1796
    ],
    "certification": "12",
    "slug": "a-vida-bela"
},

{
    "id": 205584,
    "title": "Deuses do Egito",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2016-02-25",
    "popularity": 16.15,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/4xJb2Nll3vHKztHVasHwf6603MB.jpg",
    "runtime": 127,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "12",
    "slug": "deuses-do-egito"
},

{
    "id": 820530,
    "title": "劇場版 抱かれたい男1位に脅されています。～スペイン編～",
    "genre_ids": [
        16,
        18,
        35,
        10749
    ],
    "release_date": "2021-10-09",
    "popularity": 16.575,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/2i4pJnGqpJqxmWTZbUcDWfKw7zB.jpg",
    "runtime": 78,
    "networks": [
        1968
    ],
    "certification": "N/A",
    "slug": "-1"
},

{
    "id": 509,
    "title": "Um Lugar Chamado Notting Hill",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "1999-05-21",
    "popularity": 15.724,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/9yFgNvFK870icK6SvTdeVyEjXN4.jpg",
    "runtime": 124,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "L",
    "slug": "um-lugar-chamado-notting-hill"
},

{
    "id": 945729,
    "title": "A Noite das Bruxas",
    "genre_ids": [
        9648,
        53,
        80
    ],
    "release_date": "2023-09-13",
    "popularity": 16.31,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/9UAc4DF4oEObQk4sz4sNeHI4waY.jpg",
    "runtime": 104,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "a-noite-das-bruxas"
},

{
    "id": 1266839,
    "title": "Thunderbolt Fantasy 東離劍遊紀 最終章",
    "genre_ids": [
        16,
        28,
        14
    ],
    "release_date": "2025-02-21",
    "popularity": 14.429,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yzYlHkIrJ6n2uY8hDrJQDfvIxd9.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "thunderbolt-fantasy-"
},

{
    "id": 206487,
    "title": "O Predestinado",
    "genre_ids": [
        878,
        53
    ],
    "release_date": "2014-08-28",
    "popularity": 14.233,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/iESH7eRSIaZsmjnRyQCMpEg0bJU.jpg",
    "runtime": 98,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "16",
    "slug": "o-predestinado"
},

{
    "id": 400160,
    "title": "Bob Esponja: O Incrível Resgate",
    "genre_ids": [
        10751,
        16,
        14,
        12,
        35
    ],
    "release_date": "2020-08-14",
    "popularity": 14.119,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/744ZoymAp95NN9ZGXdXgmpxTd7H.jpg",
    "runtime": 91,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "bob-esponja-o-incrvel-resgate"
},

{
    "id": 702936,
    "title": "O Atirador: O Fim de um Assassino",
    "genre_ids": [
        28
    ],
    "release_date": "2020-06-15",
    "popularity": 14.659,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/v6joFIShgkQ40Tti3DagEbdvHwp.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "o-atirador-o-fim-de-um-assassino"
},

{
    "id": 539,
    "title": "Psicose",
    "genre_ids": [
        27,
        53,
        9648
    ],
    "release_date": "1960-06-22",
    "popularity": 15.065,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/oC2iYT2on8c2iZnehah1l6AWqGu.jpg",
    "runtime": 109,
    "networks": [
        167,
        307,
        499,
        484,
        2156
    ],
    "certification": "14",
    "slug": "psicose"
},

{
    "id": 13179,
    "title": "Tinker Bell: Uma Aventura no Mundo das Fadas",
    "genre_ids": [
        16,
        10751,
        12,
        14
    ],
    "release_date": "2008-09-11",
    "popularity": 13.975,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/x3jDIWe2Tu68BgH6LE20q1cFCVU.jpg",
    "runtime": 78,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "tinker-bell-uma-aventura-no-mundo-das-fadas"
},

{
    "id": 217,
    "title": "Indiana Jones e o Reino da Caveira de Cristal",
    "genre_ids": [
        12,
        28
    ],
    "release_date": "2008-05-21",
    "popularity": 15.262,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/eZpDX7wTxllhVxhc9Qy9xN4G2Nw.jpg",
    "runtime": 122,
    "networks": [
        531,
        307,
        484,
        582,
        1853,
        2156,
        2303
    ],
    "certification": "12",
    "slug": "indiana-jones-e-o-reino-da-caveira-de-cristal"
},

{
    "id": 585534,
    "title": "モーニング・ムーンは粗雑に",
    "genre_ids": [
        18
    ],
    "release_date": "1981-06-21",
    "popularity": 15.188,
    "vote_average": 3.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ogRSqsyiiQOxPXQR6y2WUMwcMb8.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 116745,
    "title": "A Vida Secreta de Walter Mitty",
    "genre_ids": [
        12,
        35,
        18,
        14
    ],
    "release_date": "2013-12-18",
    "popularity": 14.916,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/73lIe9OZjKvF5Cn78RPeiIot8q7.jpg",
    "runtime": 115,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "a-vida-secreta-de-walter-mitty"
},

{
    "id": 118406,
    "title": "Naruto Shippuden o Filme: Caminho do Ninja",
    "genre_ids": [
        16,
        14,
        28
    ],
    "release_date": "2012-07-28",
    "popularity": 14.314,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/hyv75xNqvpPqoIBQFyBCoLOJmvh.jpg",
    "runtime": 109,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "12",
    "slug": "naruto-shippuden-o-filme-caminho-do-ninja"
},

{
    "id": 503919,
    "title": "O Farol",
    "genre_ids": [
        18,
        14,
        53
    ],
    "release_date": "2019-10-18",
    "popularity": 15.968,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/zdowK9GrOxK0YddhXuMPyxnTA02.jpg",
    "runtime": 110,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "o-farol"
},

{
    "id": 698508,
    "title": "Amor de Redenção",
    "genre_ids": [
        10749,
        18,
        37
    ],
    "release_date": "2022-01-21",
    "popularity": 15.833,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/o5qpPwlaAbOH2teRowl9ThzEF2r.jpg",
    "runtime": 134,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "16",
    "slug": "amor-de-redeno"
},

{
    "id": 65,
    "title": "8 Mile: Rua das Ilusões",
    "genre_ids": [
        18,
        10402
    ],
    "release_date": "2002-11-08",
    "popularity": 14.573,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/86CyysIw6WvboRPN8qrjCP0M0nS.jpg",
    "runtime": 111,
    "networks": [],
    "certification": "16",
    "slug": "8-mile-rua-das-iluses"
},

{
    "id": 10386,
    "title": "O Gigante de Ferro",
    "genre_ids": [
        10751,
        16,
        878,
        12
    ],
    "release_date": "1999-08-06",
    "popularity": 15.619,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/a8StQ8dmVQ94THFTrMVHuMp5QKw.jpg",
    "runtime": 90,
    "networks": [
        484
    ],
    "certification": "L",
    "slug": "o-gigante-de-ferro"
},

{
    "id": 404368,
    "title": "WiFi Ralph: Quebrando a Internet",
    "genre_ids": [
        10751,
        16,
        35,
        12
    ],
    "release_date": "2018-11-20",
    "popularity": 14.79,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/8aaXBBT5Hwo7Oab8wyNyoN7z7mg.jpg",
    "runtime": 112,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "wifi-ralph-quebrando-a-internet"
},

{
    "id": 616,
    "title": "O Último Samurai",
    "genre_ids": [
        18,
        28,
        10752
    ],
    "release_date": "2003-12-05",
    "popularity": 15.4,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/2wSZwfxLaK3ub63CsaNflJonuir.jpg",
    "runtime": 154,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "o-ltimo-samurai"
},

{
    "id": 18240,
    "title": "A Proposta",
    "genre_ids": [
        35,
        10749,
        18
    ],
    "release_date": "2009-06-02",
    "popularity": 16.414,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/uIhags0jXoe78JJjCDZbByciesQ.jpg",
    "runtime": 108,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "a-proposta"
},

{
    "id": 1028703,
    "title": "The OctoGames",
    "genre_ids": [
        53,
        28,
        27
    ],
    "release_date": "2022-10-07",
    "popularity": 15.52,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/qGz5rffXhegQH5PGUDiObqoOt06.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "the-octogames"
},

{
    "id": 594767,
    "title": "Shazam! Fúria dos Deuses",
    "genre_ids": [
        35,
        28,
        14
    ],
    "release_date": "2023-03-15",
    "popularity": 16.303,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/mTXxYgJ8UE7N6XIxIaesAqvMG4S.jpg",
    "runtime": 130,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "L",
    "slug": "shazam-fria-dos-deuses"
},

{
    "id": 914206,
    "title": "A Besta",
    "genre_ids": [
        18,
        878,
        10749
    ],
    "release_date": "2024-02-07",
    "popularity": 14.428,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/epZeoQT10JNlAG422H2uC6KKxXp.jpg",
    "runtime": 146,
    "networks": [
        11,
        201
    ],
    "certification": "N/A",
    "slug": "a-besta"
},

{
    "id": 406997,
    "title": "Extraordinário",
    "genre_ids": [
        18,
        10751
    ],
    "release_date": "2017-11-13",
    "popularity": 14.113,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/2oCqYAm00tMOPNgYPYfYAwMhcPn.jpg",
    "runtime": 113,
    "networks": [
        8,
        119,
        307,
        1796,
        2156
    ],
    "certification": "10",
    "slug": "extraordinrio"
},

{
    "id": 416477,
    "title": "Doentes de Amor",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2017-03-30",
    "popularity": 15.06,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/1asrCZytMbbeTm6AIWlpMTKpsTz.jpg",
    "runtime": 120,
    "networks": [],
    "certification": "12",
    "slug": "doentes-de-amor"
},

{
    "id": 37724,
    "title": "007 Operação Skyfall",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2012-10-24",
    "popularity": 14.659,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/dMquqnvnvwuugB5z8zP7uyyNYUl.jpg",
    "runtime": 143,
    "networks": [],
    "certification": "14",
    "slug": "007-operao-skyfall"
},

{
    "id": 1157407,
    "title": "Dwie siostry",
    "genre_ids": [
        18,
        10752
    ],
    "release_date": "2025-02-21",
    "popularity": 13.974,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/rfvXl6mwWlj5jmzhW74OfFW0oVn.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "dwie-siostry"
},

{
    "id": 68735,
    "title": "Warcraft - O Primeiro Encontro de Dois Mundos",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2016-05-25",
    "popularity": 14.232,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/2cPJhbIwsmMXsV9vihoPEFBFFHm.jpg",
    "runtime": 123,
    "networks": [
        119,
        307
    ],
    "certification": "12",
    "slug": "warcraft-o-primeiro-encontro-de-dois-mundos"
},

{
    "id": 1076364,
    "title": "O Encontro de Carl",
    "genre_ids": [
        16,
        12,
        10751,
        35
    ],
    "release_date": "2023-06-15",
    "popularity": 15.965,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/81Uq4CEUPRpbLrSPOREpQJFdFFr.jpg",
    "runtime": 9,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "o-encontro-de-carl"
},

{
    "id": 14863,
    "title": "Anaconda 3",
    "genre_ids": [
        12,
        27
    ],
    "release_date": "2008-07-26",
    "popularity": 14.312,
    "vote_average": 4.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/a5j78QYzjr81HIcYvCuhx105eXP.jpg",
    "runtime": 91,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "anaconda-3"
},

{
    "id": 1128941,
    "title": "A Desordem Demoníaca",
    "genre_ids": [
        27
    ],
    "release_date": "2024-08-16",
    "popularity": 15.26,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/Oqlmo1bhDQWWBPrMxMauuHL7y7.jpg",
    "runtime": 86,
    "networks": [],
    "certification": "N/A",
    "slug": "a-desordem-demonaca"
},

{
    "id": 9325,
    "title": "Mogli: O Menino Lobo",
    "genre_ids": [
        10751,
        16,
        12
    ],
    "release_date": "1967-10-18",
    "popularity": 14.914,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/3eF3bFO9lxnIb31KIItJcEcgEWA.jpg",
    "runtime": 78,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "mogli-o-menino-lobo"
},

{
    "id": 87502,
    "title": "O Voo",
    "genre_ids": [
        18
    ],
    "release_date": "2012-11-02",
    "popularity": 15.186,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/vlWHFsqzRUWHk1G9T4wyfCVYLFI.jpg",
    "runtime": 138,
    "networks": [
        307,
        2156
    ],
    "certification": "14",
    "slug": "o-voo"
},

{
    "id": 621,
    "title": "Grease: Nos Tempos da Brilhantina",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "1978-07-07",
    "popularity": 14.79,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/d2ESTux6n1Fd5L4AJDuxMCTsKXT.jpg",
    "runtime": 110,
    "networks": [
        8,
        307,
        499,
        1796,
        2156
    ],
    "certification": "N/A",
    "slug": "grease-nos-tempos-da-brilhantina"
},

{
    "id": 277217,
    "title": "Descendentes",
    "genre_ids": [
        10751,
        12,
        14,
        10770
    ],
    "release_date": "2015-07-31",
    "popularity": 15.398,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/i36xiPRiRgy8x261fk80CyVcaYF.jpg",
    "runtime": 112,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "descendentes"
},

{
    "id": 1185719,
    "title": "Farol da Ilusão",
    "genre_ids": [
        53,
        9648,
        18,
        14
    ],
    "release_date": "2024-12-07",
    "popularity": 15.616,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/6ZPlnGO4jWvBtIoG9hRlqyfg8g8.jpg",
    "runtime": 98,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "farol-da-iluso"
},

{
    "id": 614479,
    "title": "Sobrenatural: A Porta Vermelha",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2023-07-05",
    "popularity": 14.57,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/6lp4uDxLqLEw1CzW1SUOYJ3zdKD.jpg",
    "runtime": 107,
    "networks": [
        119
    ],
    "certification": "12",
    "slug": "sobrenatural-a-porta-vermelha"
},

{
    "id": 173129,
    "title": "金瓶風月",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1991-05-09",
    "popularity": 15.513,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/nA1WbYl6Sllm71g8koNXhjWbMOc.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 506574,
    "title": "Descendentes 3",
    "genre_ids": [
        10751,
        10770,
        12,
        14
    ],
    "release_date": "2019-08-02",
    "popularity": 14.426,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/moyDQs4U4D4b0kG7vfqt8DKskkI.jpg",
    "runtime": 106,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "descendentes-3"
},

{
    "id": 1378098,
    "title": "死に損なった男",
    "genre_ids": [],
    "release_date": "2025-02-21",
    "popularity": 14.112,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/l8daRFrOWtpp584veQNuhRQ3VjU.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 122126,
    "title": "후궁: 제왕의 첩",
    "genre_ids": [
        18
    ],
    "release_date": "2012-06-06",
    "popularity": 14.653,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/k5Ss8UVOhqgJFUXmeoBv9HwCqZA.jpg",
    "runtime": 122,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 10340,
    "title": "A Dama e o Vagabundo",
    "genre_ids": [
        10751,
        16,
        10749
    ],
    "release_date": "1955-06-22",
    "popularity": 14.227,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/qKBA03V9LvfpvcNfUgAwdydRSA1.jpg",
    "runtime": 77,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-dama-e-o-vagabundo"
},

{
    "id": 762430,
    "title": "A Chamada",
    "genre_ids": [
        53,
        28,
        12
    ],
    "release_date": "2023-08-23",
    "popularity": 15.058,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/rcI59bqVogb5pM1cn0RZhSYUaOE.jpg",
    "runtime": 91,
    "networks": [
        307,
        2156
    ],
    "certification": "N/A",
    "slug": "a-chamada"
},

{
    "id": 43949,
    "title": "O Primeiro Amor",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2010-08-06",
    "popularity": 14.302,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/uURMTc8sSswigTHpV42TV6xhRkh.jpg",
    "runtime": 89,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "o-primeiro-amor"
},

{
    "id": 1371557,
    "title": "I Am Martin Parr",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-21",
    "popularity": 13.968,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/4OMPZWsxoODwmQU8UmiBb5pGEGB.jpg",
    "runtime": 68,
    "networks": [],
    "certification": "N/A",
    "slug": "i-am-martin-parr"
},

{
    "id": 22803,
    "title": "Código de Conduta",
    "genre_ids": [
        18,
        80,
        53
    ],
    "release_date": "2009-10-15",
    "popularity": 15.249,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/o6QL0gaDeFub0sbG7sUwmfCCFux.jpg",
    "runtime": 108,
    "networks": [
        8,
        1899,
        1796,
        1825
    ],
    "certification": "16",
    "slug": "cdigo-de-conduta"
},

{
    "id": 666035,
    "title": "Wanted Man: Marcado Para Morrer",
    "genre_ids": [
        28
    ],
    "release_date": "2024-04-01",
    "popularity": 14.911,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/nqmm4YvxB2v5mnqeq7K8xN5VLYP.jpg",
    "runtime": 85,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "wanted-man-marcado-para-morrer"
},

{
    "id": 1276011,
    "title": "The Thinking Game",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-21",
    "popularity": 15.176,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/jNMzCuUIt5tfHYJEpCIef7oqkfI.jpg",
    "runtime": 84,
    "networks": [],
    "certification": "N/A",
    "slug": "the-thinking-game"
},

{
    "id": 8920,
    "title": "Garfield - O Filme",
    "genre_ids": [
        35,
        10751
    ],
    "release_date": "2004-06-10",
    "popularity": 15.508,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/sFkRpWVC9PDop5IGvcHF1ZeGqIQ.jpg",
    "runtime": 80,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "garfield-o-filme"
},

{
    "id": 17654,
    "title": "Distrito 9",
    "genre_ids": [
        878
    ],
    "release_date": "2009-08-05",
    "popularity": 15.391,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/ngDzpIMeVlwv0B3JNWqNVTRNfcU.jpg",
    "runtime": 112,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "N/A",
    "slug": "distrito-9"
},

{
    "id": 165,
    "title": "De Volta para o Futuro II",
    "genre_ids": [
        12,
        35,
        878
    ],
    "release_date": "1989-11-22",
    "popularity": 14.57,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/CZjdqLtH1qsuzt8ouCFUJv88hT.jpg",
    "runtime": 108,
    "networks": [
        167,
        307,
        2156
    ],
    "certification": "L",
    "slug": "de-volta-para-o-futuro-ii"
},

{
    "id": 820609,
    "title": "Ninguém Vai te Salvar",
    "genre_ids": [
        27,
        878,
        53,
        9648
    ],
    "release_date": "2023-09-22",
    "popularity": 14.777,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/hkIwPpdmGI1BaZeR2yrPSnNcv4v.jpg",
    "runtime": 93,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "ningum-vai-te-salvar"
},

{
    "id": 899445,
    "title": "Terror nas Profundezas",
    "genre_ids": [
        27,
        53,
        28,
        9648
    ],
    "release_date": "2023-10-18",
    "popularity": 14.419,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/1ZZFTMqbQaP59yGTqKOcfqVE7NC.jpg",
    "runtime": 85,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "terror-nas-profundezas"
},

{
    "id": 303857,
    "title": "Dragon Ball Z: O Renascimento de Freeza",
    "genre_ids": [
        28,
        16,
        878
    ],
    "release_date": "2015-04-18",
    "popularity": 14.095,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/oth0VBziwe25mDzkJ6XzwmUCCDC.jpg",
    "runtime": 120,
    "networks": [],
    "certification": "10",
    "slug": "dragon-ball-z-o-renascimento-de-freeza"
},

{
    "id": 20760,
    "title": "Lilo & Stitch 2: Stitch Deu Defeito",
    "genre_ids": [
        16,
        10751,
        35,
        878
    ],
    "release_date": "2005-01-22",
    "popularity": 14.653,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/7XH0o8IJp0YKubgEee2vuPrJ1wk.jpg",
    "runtime": 68,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "lilo-stitch-2-stitch-deu-defeito"
},

{
    "id": 991610,
    "title": "Invasie",
    "genre_ids": [
        28,
        18,
        53
    ],
    "release_date": "2024-04-11",
    "popularity": 14.209,
    "vote_average": 4.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/wgg7V0xYmkKZjLQtYkToz4jDg1F.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "invasie"
},

{
    "id": 1285168,
    "title": "Laut Tengah",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2024-10-03",
    "popularity": 15.054,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/vsyWdZNOxCmOhaF3yGY1fNMXbCt.jpg",
    "runtime": 108,
    "networks": [],
    "certification": "N/A",
    "slug": "laut-tengah"
},

{
    "id": 400535,
    "title": "Sicário: Dia do Soldado",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2018-06-27",
    "popularity": 15.245,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/3xqVzb9L8XS5bLPPC8VHwZo7ymS.jpg",
    "runtime": 122,
    "networks": [],
    "certification": "16",
    "slug": "sicrio-dia-do-soldado"
},

{
    "id": 610363,
    "title": "Одна",
    "genre_ids": [
        12,
        53,
        18
    ],
    "release_date": "2022-06-09",
    "popularity": 14.902,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/10kQXhEvee1fYoWbuXdX7b3nGTj.jpg",
    "runtime": 108,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 512195,
    "title": "Alerta Vermelho",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2021-11-04",
    "popularity": 14.298,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/pe17f8VDfzbvbHSAKAlcORtBHmW.jpg",
    "runtime": 117,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "alerta-vermelho"
},

{
    "id": 792,
    "title": "Platoon",
    "genre_ids": [
        18,
        10752,
        28
    ],
    "release_date": "1986-12-19",
    "popularity": 15.172,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/ppzDmaYdw0WQg9Qy29SYCh9Dvog.jpg",
    "runtime": 120,
    "networks": [],
    "certification": "14",
    "slug": "platoon"
},

{
    "id": 1357305,
    "title": "唐探1900",
    "genre_ids": [
        35,
        9648,
        28
    ],
    "release_date": "2025-01-29",
    "popularity": 14.772,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/ql8B1EOLsDm7rcd9XrVi0lz1215.jpg",
    "runtime": 135,
    "networks": [],
    "certification": "N/A",
    "slug": "1900"
},

{
    "id": 581726,
    "title": "Infinito",
    "genre_ids": [
        878,
        28,
        12,
        53
    ],
    "release_date": "2021-09-09",
    "popularity": 13.967,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/q3yAegenSHZgkMceNAzXTlBJYPg.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "14",
    "slug": "infinito"
},

{
    "id": 725201,
    "title": "Agente Oculto",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2022-07-13",
    "popularity": 14.566,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/1f10KUKW7KyNt8bF8NHmwbBQ9fs.jpg",
    "runtime": 129,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "agente-oculto"
},

{
    "id": 1186350,
    "title": "മാർക്കോ",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2024-12-20",
    "popularity": 14.416,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/il3ao5gcF6fZNqo1o9o7lusmEyU.jpg",
    "runtime": 145,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 639933,
    "title": "O Homem do Norte",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2022-04-07",
    "popularity": 15.368,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/vJfLNvOMK1Ek7OvpKgBDSqH2kN1.jpg",
    "runtime": 137,
    "networks": [],
    "certification": "18",
    "slug": "o-homem-do-norte"
},

{
    "id": 1227852,
    "title": "Las Tres Sisters",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 14.649,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/cOuwEupfObFw7FZSQrssFehG3F0.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "las-tres-sisters"
},

{
    "id": 11969,
    "title": "Tombstone: A Justiça Está Chegando",
    "genre_ids": [
        37,
        28
    ],
    "release_date": "1993-12-25",
    "popularity": 14.095,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/3DQe3q5SqapTPhIMWaZvOJHDhcY.jpg",
    "runtime": 128,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "tombstone-a-justia-est-chegando"
},

{
    "id": 171424,
    "title": "Canibais",
    "genre_ids": [
        12,
        27
    ],
    "release_date": "2013-09-08",
    "popularity": 14.206,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/cPF6HXv3oRTa3THyRJiibYyxvfM.jpg",
    "runtime": 100,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "canibais"
},

{
    "id": 1893,
    "title": "Star Wars: Episódio I - A Ameaça Fantasma",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "1999-05-19",
    "popularity": 15.051,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/pfC6UU9Dik01e80aUPCHI9idDZ.jpg",
    "runtime": 136,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "star-wars-episdio-i-a-ameaa-fantasma"
},

{
    "id": 38321,
    "title": "Padre",
    "genre_ids": [
        28,
        14,
        27,
        53
    ],
    "release_date": "2011-05-05",
    "popularity": 14.9,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/g3Wep903D1LJ9Ahl8kLQdoypM9H.jpg",
    "runtime": 87,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "padre"
},

{
    "id": 1049948,
    "title": "Vikings: Battle of Heirs",
    "genre_ids": [
        28
    ],
    "release_date": "2023-04-28",
    "popularity": 14.294,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/87goLbbqrJqAxqDS5cBsik1zKT.jpg",
    "runtime": 82,
    "networks": [],
    "certification": "N/A",
    "slug": "vikings-battle-of-heirs"
},

{
    "id": 1542,
    "title": "Como Enlouquecer Seu Chefe",
    "genre_ids": [
        35
    ],
    "release_date": "1999-02-19",
    "popularity": 15.17,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/72Fzujf9o63Vkj3qaszG3JKkh5e.jpg",
    "runtime": 89,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "como-enlouquecer-seu-chefe"
},

{
    "id": 729165,
    "title": "De Volta ao Crime",
    "genre_ids": [
        53,
        18,
        28,
        80
    ],
    "release_date": "2023-01-20",
    "popularity": 14.755,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/jbwGX0S31kJ0y42SojjoD2pN6D7.jpg",
    "runtime": 107,
    "networks": [
        47,
        683
    ],
    "certification": "16",
    "slug": "de-volta-ao-crime"
},

{
    "id": 1014590,
    "title": "Upgrade: As Cores do Amor",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2024-02-07",
    "popularity": 13.961,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/rqfqLTNpueBtdtMO0QZ8XzQaDi1.jpg",
    "runtime": 105,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "upgrade-as-cores-do-amor"
},

{
    "id": 53182,
    "title": "300: A Ascensão do Império",
    "genre_ids": [
        28,
        18,
        10752
    ],
    "release_date": "2014-03-05",
    "popularity": 14.565,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/tyj9WFOBiUFsAIjAOpU7xOBddmr.jpg",
    "runtime": 102,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "16",
    "slug": "300-a-ascenso-do-imprio"
},

{
    "id": 105825,
    "title": "聊齋三集之燈草和尚",
    "genre_ids": [
        27,
        18,
        14
    ],
    "release_date": "1992-03-05",
    "popularity": 14.41,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/1VLGHPr3DJMjlCP5F6BPgGghfTX.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 273248,
    "title": "Os Oito Odiados",
    "genre_ids": [
        18,
        9648,
        37
    ],
    "release_date": "2015-12-25",
    "popularity": 14.093,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/jfTo9U9OgOXODEEspNnYFuZdR1q.jpg",
    "runtime": 167,
    "networks": [],
    "certification": "18",
    "slug": "os-oito-odiados"
},

{
    "id": 987686,
    "title": "Tudo em Família",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2024-06-27",
    "popularity": 14.899,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/fU7caVYjSHYEgZQrrFDr3rAJx8o.jpg",
    "runtime": 114,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "tudo-em-famlia"
},

{
    "id": 9603,
    "title": "As Patricinhas de Beverly Hills",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "1995-07-19",
    "popularity": 14.641,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/sfgpINIXoGEUkA3n6k7of89bP9x.jpg",
    "runtime": 110,
    "networks": [
        307,
        2156
    ],
    "certification": "N/A",
    "slug": "as-patricinhas-de-beverly-hills"
},

{
    "id": 249397,
    "title": "Ninfomaniaca: Volume 2",
    "genre_ids": [
        18,
        9648
    ],
    "release_date": "2013-12-25",
    "popularity": 14.187,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/nbMhSVpyk5pNLqCSLadfzCPy77U.jpg",
    "runtime": 124,
    "networks": [],
    "certification": "N/A",
    "slug": "ninfomaniaca-volume-2"
},

{
    "id": 399055,
    "title": "A Forma da Água",
    "genre_ids": [
        18,
        14,
        10749
    ],
    "release_date": "2017-12-01",
    "popularity": 14.291,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/4ezwRuc1iKlaWTi16qrr44Nzinr.jpg",
    "runtime": 123,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "a-forma-da-gua"
},

{
    "id": 384527,
    "title": "Dolce... calda Lisa",
    "genre_ids": [
        18
    ],
    "release_date": "1980-03-28",
    "popularity": 13.96,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/taoUcLRMSijDDySXv9AT2oX9BmO.jpg",
    "runtime": 84,
    "networks": [],
    "certification": "N/A",
    "slug": "dolce-calda-lisa"
},

{
    "id": 127748,
    "title": "O Médico do Distrito Militar",
    "genre_ids": [
        35
    ],
    "release_date": "1976-01-01",
    "popularity": 14.75,
    "vote_average": 4.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/xmPaCxAvfT3fmS2K812bslUjxUB.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "N/A",
    "slug": "o-mdico-do-distrito-militar"
},

{
    "id": 15165,
    "title": "Barbie em A Princesa e a Plebéia",
    "genre_ids": [
        16,
        10751,
        35
    ],
    "release_date": "2004-09-28",
    "popularity": 14.564,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/3ExQnuwf6HaA1rLk0xpL9FGbEWK.jpg",
    "runtime": 86,
    "networks": [
        1899,
        307,
        1825
    ],
    "certification": "N/A",
    "slug": "barbie-em-a-princesa-e-a-plebia"
},

{
    "id": 1180634,
    "title": "O Trem Italiano da Felicidade",
    "genre_ids": [
        18
    ],
    "release_date": "2024-10-21",
    "popularity": 14.398,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/syUbbP6yzAmDwhtHPtHRD1cAauD.jpg",
    "runtime": 106,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "o-trem-italiano-da-felicidade"
},

{
    "id": 339331,
    "title": "Miele di donna",
    "genre_ids": [
        18
    ],
    "release_date": "1981-05-08",
    "popularity": 14.092,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/sO6cnx1z85ISTVugyjhrAH4o7fb.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "miele-di-donna"
},

{
    "id": 1172267,
    "title": "Por donde pasa el silencio",
    "genre_ids": [
        18
    ],
    "release_date": "2024-09-25",
    "popularity": 14.18,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/pQcSb9IhO16v87Zqb18nEm03ph7.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "por-donde-pasa-el-silencio"
},

{
    "id": 345938,
    "title": "A Cabana",
    "genre_ids": [
        18,
        14
    ],
    "release_date": "2017-03-03",
    "popularity": 14.29,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/yf2WNfO1b0E1IcJDLUiGj7ccKRm.jpg",
    "runtime": 132,
    "networks": [
        8,
        307,
        1796,
        2156
    ],
    "certification": "12",
    "slug": "a-cabana"
},

{
    "id": 845659,
    "title": "Vício Perfeito",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2023-02-16",
    "popularity": 14.631,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/1bFE8TlLU7r3IwwGHN7au8xPIds.jpg",
    "runtime": 97,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "vcio-perfeito"
},

{
    "id": 1392079,
    "title": "ウルトラマンアークTHE MOVIE 超次元大決戦！光と闇のアーク",
    "genre_ids": [
        878,
        28,
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 14.555,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/2u7FihanLcvXIGqbbci32qfiL91.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "the-movie-"
},

{
    "id": 1025402,
    "title": "Nosotros",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2025-02-21",
    "popularity": 13.954,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/vhlzkgloIwnzLdEWxn1DoFt1qJh.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": "nosotros"
},

{
    "id": 1311031,
    "title": "Demon Slayer: Kimetsu no Yaiba - Castelo Infinito",
    "genre_ids": [
        16,
        28,
        14,
        53
    ],
    "release_date": "N/A",
    "popularity": 14.393,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/m5msKKTMZ9VSghE0J0M36FpjK27.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "demon-slayer-kimetsu-no-yaiba-castelo-infinito"
},

{
    "id": 71676,
    "title": "Motoqueiro Fantasma: Espírito de Vingança",
    "genre_ids": [
        28,
        14,
        53
    ],
    "release_date": "2011-12-10",
    "popularity": 14.06,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/qL3fnJ3JC4mW05z9VB6IM3hA0Ld.jpg",
    "runtime": 96,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "motoqueiro-fantasma-esprito-de-vingana"
},

{
    "id": 22970,
    "title": "O Segredo da Cabana",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2012-04-12",
    "popularity": 14.18,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/raOYAZFVpWyL9teEzLDEwtP8lm9.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "16",
    "slug": "o-segredo-da-cabana"
},

{
    "id": 9837,
    "title": "O Príncipe do Egito",
    "genre_ids": [
        12,
        16,
        18,
        10751
    ],
    "release_date": "1998-12-16",
    "popularity": 14.284,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/5jco6VjKwjAyN8HElg4F3dXGfT8.jpg",
    "runtime": 99,
    "networks": [
        119,
        307,
        1860,
        2156
    ],
    "certification": "L",
    "slug": "o-prncipe-do-egito"
},

{
    "id": 115290,
    "title": "Lagoa Azul: O Despertar",
    "genre_ids": [
        18,
        12,
        10749,
        10770
    ],
    "release_date": "2012-06-16",
    "popularity": 13.951,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/3lEWhh95w3x1J2XYn869sine6kc.jpg",
    "runtime": 85,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "lagoa-azul-o-despertar"
},

{
    "id": 1009640,
    "title": "Valiant One",
    "genre_ids": [
        10752,
        53
    ],
    "release_date": "2025-01-30",
    "popularity": 14.048,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/sT8Z14RDCAd6szzxzWFAU4xcMwg.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "valiant-one"
},

{
    "id": 8467,
    "title": "Debi & Lóide: Dois Idiotas em Apuros",
    "genre_ids": [
        35
    ],
    "release_date": "1994-12-16",
    "popularity": 13.947,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/1MbzwxjT5C32oc7U5AmVBTTMv7C.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "12",
    "slug": "debi-lide-dois-idiotas-em-apuros"
},

{
    "id": 1336934,
    "title": "Marquer les fins",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-22",
    "popularity": 13.945,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/y64lCTe1az3IDCFRBSTCDqKqLiq.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "marquer-les-fins"
},

{
    "id": 1040148,
    "title": "Ruby Marinho - Monstro Adolescente",
    "genre_ids": [
        16,
        10751,
        14,
        35
    ],
    "release_date": "2023-06-28",
    "popularity": 13.846,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/nNcxpjCtcawf8wQmTwnA0u1jukC.jpg",
    "runtime": 91,
    "networks": [
        119
    ],
    "certification": "L",
    "slug": "ruby-marinho-monstro-adolescente"
},

{
    "id": 67395,
    "title": "Regresso à Praia Selvagem",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "1998-01-27",
    "popularity": 13.935,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/9z3hdYnDdfWGKD55kdDmshDojeP.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "regresso-praia-selvagem"
},

{
    "id": 1359309,
    "title": "Remotely Famous",
    "genre_ids": [
        53
    ],
    "release_date": "2025-02-21",
    "popularity": 13.844,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/cIg8tKDl1V1g8HJCbSWusJnKNgN.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "remotely-famous"
},

{
    "id": 19912,
    "title": "Premonição 4",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2009-08-26",
    "popularity": 13.933,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/epP7gaBC45Qi4MyKYyhYNOJKOF9.jpg",
    "runtime": 82,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "premonio-4"
},

{
    "id": 1417402,
    "title": "洗",
    "genre_ids": [
        18,
        14
    ],
    "release_date": "2025-02-21",
    "popularity": 13.661,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/5CmL4ARue2gWxM8YKpAyi2aCPYc.jpg",
    "runtime": 13,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1290275,
    "title": "Fidil Ghorm",
    "genre_ids": [
        18,
        10402,
        10751
    ],
    "release_date": "2025-02-21",
    "popularity": 13.764,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/2E10M9Y333FWFebIE1egnIhdiWC.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "fidil-ghorm"
},

{
    "id": 343668,
    "title": "Kingsman: O Círculo Dourado",
    "genre_ids": [
        28,
        12,
        35
    ],
    "release_date": "2017-09-20",
    "popularity": 13.602,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/qo7MKvaaow436wqwYlPbq5zNhqM.jpg",
    "runtime": 141,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "kingsman-o-crculo-dourado"
},

{
    "id": 1396079,
    "title": "Nhà Gia Tiên",
    "genre_ids": [
        35,
        10751
    ],
    "release_date": "2025-02-21",
    "popularity": 13.835,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yHdDgzEnFslwfwz2Hzc498lIhFx.jpg",
    "runtime": 117,
    "networks": [],
    "certification": "N/A",
    "slug": "nh-gia-tin"
},

{
    "id": 552524,
    "title": "Lilo & Stitch",
    "genre_ids": [
        10751,
        878,
        35
    ],
    "release_date": "2025-05-21",
    "popularity": 13.661,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/etRDHyD3FszWdMGHVJA5bMXvoem.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "lilo-stitch"
},

{
    "id": 562,
    "title": "Duro de Matar",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "1988-07-15",
    "popularity": 13.919,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/jcAU1PXB4Dg0NP3uY2XEwO9rNsi.jpg",
    "runtime": 132,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "duro-de-matar"
},

{
    "id": 347201,
    "title": "Boruto: Naruto O Filme",
    "genre_ids": [
        12,
        28,
        16,
        35,
        14
    ],
    "release_date": "2015-08-07",
    "popularity": 13.499,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/sDiq2Y8wQNC5HsIAAamk27kxQiv.jpg",
    "runtime": 95,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "boruto-naruto-o-filme"
},

{
    "id": 1404333,
    "title": "僕らは人生で一回だけ魔法が使える",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 13.747,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/52KjtPbxAxNIUD2Z1br1blGkyZ7.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 277216,
    "title": "Straight Outta Compton: A História do N.W.A.",
    "genre_ids": [
        18,
        10402,
        36
    ],
    "release_date": "2015-08-11",
    "popularity": 13.588,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/aTQ6reig71j3gt351d04TOi8mtL.jpg",
    "runtime": 147,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "straight-outta-compton-a-histria-do-nwa"
},

{
    "id": 1100775,
    "title": "UnBroken",
    "genre_ids": [
        18,
        99,
        36
    ],
    "release_date": "2025-02-21",
    "popularity": 13.914,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/y4NN0tnhWXPiRynnsqFcp9efyBk.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "unbroken"
},

{
    "id": 1016346,
    "title": "MR-9: Missão Mortal",
    "genre_ids": [
        28,
        18,
        53
    ],
    "release_date": "2023-08-25",
    "popularity": 13.821,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/8Js658DZ6zaY135wpRnINGuTPOL.jpg",
    "runtime": 107,
    "networks": [
        2156
    ],
    "certification": "N/A",
    "slug": "mr-9-misso-mortal"
},

{
    "id": 11237,
    "title": "Anaconda 2: A Caçada pela Orquídea Sangrenta",
    "genre_ids": [
        28,
        12,
        27
    ],
    "release_date": "2004-08-25",
    "popularity": 13.408,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/yi3KRmJlEtRV090wgeEPiFQ6cxm.jpg",
    "runtime": 96,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "anaconda-2-a-caada-pela-orqudea-sangrenta"
},

{
    "id": 1267,
    "title": "A Família do Futuro",
    "genre_ids": [
        16,
        35,
        10751
    ],
    "release_date": "2007-03-23",
    "popularity": 13.658,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/uR9rV69x4saB2vh9yfgQ5PA5E0r.jpg",
    "runtime": 95,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-famlia-do-futuro"
},

{
    "id": 302699,
    "title": "Um Espião e Meio",
    "genre_ids": [
        28,
        35
    ],
    "release_date": "2016-06-16",
    "popularity": 13.495,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/j24zrqp8RdDKsuvNDqrAkbBjCxC.jpg",
    "runtime": 107,
    "networks": [
        8,
        119,
        307,
        1796,
        2156
    ],
    "certification": "14",
    "slug": "um-espio-e-meio"
},

{
    "id": 5559,
    "title": "Bee Movie: A História de uma Abelha",
    "genre_ids": [
        10751,
        16,
        12,
        35
    ],
    "release_date": "2007-10-28",
    "popularity": 13.739,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/dC0f3uld9Ea51QzlLleSFxWy2Hw.jpg",
    "runtime": 90,
    "networks": [
        307,
        2156
    ],
    "certification": "L",
    "slug": "bee-movie-a-histria-de-uma-abelha"
},

{
    "id": 2322,
    "title": "Quebra de Sigilo",
    "genre_ids": [
        35,
        80,
        18
    ],
    "release_date": "1992-09-09",
    "popularity": 13.582,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/2RpSetMUU7SyknvNfOzlo76mizg.jpg",
    "runtime": 126,
    "networks": [],
    "certification": "N/A",
    "slug": "quebra-de-sigilo"
},

{
    "id": 14411,
    "title": "Sinbad - A Lenda dos Sete Mares",
    "genre_ids": [
        10751,
        16,
        12,
        35,
        14,
        28
    ],
    "release_date": "2003-07-02",
    "popularity": 13.337,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/xuIZnkO5q1gonbIlGb8w3uBsanM.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "L",
    "slug": "sinbad-a-lenda-dos-sete-mares"
},

{
    "id": 117251,
    "title": "O Ataque",
    "genre_ids": [
        28,
        18,
        53
    ],
    "release_date": "2013-06-27",
    "popularity": 13.91,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/kNAF5z4W5NqV8hfkX5CfgPCX2Ur.jpg",
    "runtime": 132,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "o-ataque"
},

{
    "id": 1433114,
    "title": "Tarot Curse",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2025-02-21",
    "popularity": 13.649,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/rTmS1fk3K2hj0HrSuW7nxCz8xku.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "tarot-curse"
},

{
    "id": 933131,
    "title": "Em Ruínas",
    "genre_ids": [
        878,
        28
    ],
    "release_date": "2024-01-25",
    "popularity": 13.406,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/vT3xahepzP796ei0NiZIZ6t8vsl.jpg",
    "runtime": 108,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "em-runas"
},

{
    "id": 1003598,
    "title": "Vingadores: Guerras Secretas",
    "genre_ids": [
        878
    ],
    "release_date": "2027-05-05",
    "popularity": 13.821,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/f0YBuh4hyiAheXhh4JnJWoKi9g5.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "vingadores-guerras-secretas"
},

{
    "id": 779782,
    "title": "A Escola do Bem e do Mal",
    "genre_ids": [
        14,
        35,
        12,
        18
    ],
    "release_date": "2022-10-19",
    "popularity": 13.494,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/fbo6sHohCSQDOY6RYPQX3zO886y.jpg",
    "runtime": 149,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "a-escola-do-bem-e-do-mal"
},

{
    "id": 795774,
    "title": "Alguém Vai Amar Alguém",
    "genre_ids": [
        18
    ],
    "release_date": "2022-06-08",
    "popularity": 13.225,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/gnLjcgNrXWtCO4qCxAdoI9RoHlU.jpg",
    "runtime": 88,
    "networks": [
        447
    ],
    "certification": "N/A",
    "slug": "algum-vai-amar-algum"
},

{
    "id": 228165,
    "title": "Bob Esponja: Um Herói Fora D'Água",
    "genre_ids": [
        10751,
        12,
        35,
        14,
        16
    ],
    "release_date": "2015-01-28",
    "popularity": 13.738,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/4xpJyqKVz2RDegkXplyRweJM7ZR.jpg",
    "runtime": 93,
    "networks": [
        531,
        307,
        1853,
        2303
    ],
    "certification": "L",
    "slug": "bob-esponja-um-heri-fora-dgua"
},

{
    "id": 417859,
    "title": "Gato de Botas",
    "genre_ids": [
        16,
        10751,
        14,
        12,
        35
    ],
    "release_date": "2011-10-27",
    "popularity": 13.571,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/rFs9zpddiT45Sx3FsUshdVZJEFl.jpg",
    "runtime": 90,
    "networks": [
        167
    ],
    "certification": "L",
    "slug": "gato-de-botas"
},

{
    "id": 188927,
    "title": "Star Trek: Sem Fronteiras",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2016-07-07",
    "popularity": 13.334,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/z8Bs4x1IpYCY2RqMxviZKDOdzDa.jpg",
    "runtime": 122,
    "networks": [
        8,
        531,
        484,
        1796,
        1853,
        2303
    ],
    "certification": "12",
    "slug": "star-trek-sem-fronteiras"
},

{
    "id": 1171462,
    "title": "Golden Kamuy",
    "genre_ids": [
        28,
        12,
        35
    ],
    "release_date": "2024-01-19",
    "popularity": 13.909,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/kbW1DV9gPNeXvhwqvJtcRVSPk5C.jpg",
    "runtime": 127,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "golden-kamuy"
},

{
    "id": 76726,
    "title": "Poder Sem Limites",
    "genre_ids": [
        878,
        18,
        53
    ],
    "release_date": "2012-02-01",
    "popularity": 13.646,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/6B5RG12qgv8ckIdVoKGuhE4zkrW.jpg",
    "runtime": 84,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "poder-sem-limites"
},

{
    "id": 9769,
    "title": "Lolita",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1997-09-27",
    "popularity": 13.141,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/1w8sWa3aKrQFqzD6cXdh6kNhk4e.jpg",
    "runtime": 137,
    "networks": [
        47,
        683
    ],
    "certification": "16",
    "slug": "lolita"
},

{
    "id": 1308821,
    "title": "Unang Tikim",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-07-07",
    "popularity": 13.81,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/oDWZS6LznvdH7mZOYfCro0ISJCM.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "unang-tikim"
},

{
    "id": 620,
    "title": "Os Caça-Fantasmas",
    "genre_ids": [
        35,
        14
    ],
    "release_date": "1984-06-08",
    "popularity": 13.396,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/6RjSQGuqwY2kqpNN7ibono0e1Cc.jpg",
    "runtime": 107,
    "networks": [
        119
    ],
    "certification": "L",
    "slug": "os-caa-fantasmas"
},

{
    "id": 491480,
    "title": "O Menino que Descobriu o Vento",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2019-02-14",
    "popularity": 13.494,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/jZofpz4gmiH7MQAYWrgvTtdIq3l.jpg",
    "runtime": 113,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "o-menino-que-descobriu-o-vento"
},

{
    "id": 412092,
    "title": "엄마친구 2",
    "genre_ids": [
        10749
    ],
    "release_date": "2016-09-01",
    "popularity": 13.225,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/mLlke4cd9R65FYqtMVUZ3h3Z2z9.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "-2"
},

{
    "id": 1359227,
    "title": "LEGO Marvel Vingadores: Missão Demolição",
    "genre_ids": [
        16,
        35,
        878
    ],
    "release_date": "2024-10-17",
    "popularity": 13.731,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/nylT8v3H6Amnc7UakIp8ZhIAZXj.jpg",
    "runtime": 44,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "lego-marvel-vingadores-misso-demolio"
},

{
    "id": 267860,
    "title": "Invasão a Londres",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2016-03-02",
    "popularity": 13.313,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/zR1JAiCplsizue3WqDn8hw7P8Bj.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "16",
    "slug": "invaso-a-londres"
},

{
    "id": 4977,
    "title": "Paprika",
    "genre_ids": [
        16,
        878,
        53
    ],
    "release_date": "2006-10-01",
    "popularity": 12.98,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/aD0uIqGX3xdmUF2Ol2nvhJsfL5C.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "paprika"
},

{
    "id": 680531,
    "title": "O Baile das Loucas",
    "genre_ids": [
        53,
        18,
        36
    ],
    "release_date": "2021-09-12",
    "popularity": 13.568,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/a2PmxoTMHlqiSzqmKFef69htswW.jpg",
    "runtime": 121,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "o-baile-das-loucas"
},

{
    "id": 9323,
    "title": "Ghost in the Shell: O Fantasma do Futuro",
    "genre_ids": [
        28,
        16,
        878
    ],
    "release_date": "1995-11-18",
    "popularity": 13.906,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/4YgDy47HKxcSwUPQWrg0J39lEZA.jpg",
    "runtime": 82,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "ghost-in-the-shell-o-fantasma-do-futuro"
},

{
    "id": 22683,
    "title": "Mãos Talentosas: A História de Ben Carson",
    "genre_ids": [
        18
    ],
    "release_date": "2009-02-07",
    "popularity": 13.642,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/yB5uqHCLCDASMOO2YIWXJVqt4o0.jpg",
    "runtime": 86,
    "networks": [
        1860
    ],
    "certification": "12",
    "slug": "mos-talentosas-a-histria-de-ben-carson"
},

{
    "id": 45610,
    "title": "Redenção",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2011-09-23",
    "popularity": 13.126,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/2Fksv8RJwVMoCsVcNxnElbVIKbS.jpg",
    "runtime": 129,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "redeno"
},

{
    "id": 72545,
    "title": "Viagem 2: A Ilha Misteriosa",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2012-01-19",
    "popularity": 13.807,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/9AT3gvEm4WASieNjgSlai4YXo27.jpg",
    "runtime": 94,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "L",
    "slug": "viagem-2-a-ilha-misteriosa"
},

{
    "id": 1407861,
    "title": "The Bayou",
    "genre_ids": [
        53,
        27,
        28
    ],
    "release_date": "2025-01-31",
    "popularity": 12.924,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/sf6j1SbgDf7VTjL1MRq5MAQSOyE.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "the-bayou"
},

{
    "id": 359724,
    "title": "Ford vs Ferrari",
    "genre_ids": [
        18,
        28,
        36
    ],
    "release_date": "2019-11-13",
    "popularity": 13.494,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/t8L9dqNMclXJHP0TesPsPS2RvB1.jpg",
    "runtime": 153,
    "networks": [
        337,
        119
    ],
    "certification": "12",
    "slug": "ford-vs-ferrari"
},

{
    "id": 9645,
    "title": "Navio Fantasma",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2002-10-25",
    "popularity": 13.222,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/urUo9sIRlFk8WfGkREZs9AEq3C3.jpg",
    "runtime": 88,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "navio-fantasma"
},

{
    "id": 624091,
    "title": "Sri Asih",
    "genre_ids": [
        28,
        12,
        878,
        14,
        18
    ],
    "release_date": "2022-11-17",
    "popularity": 13.393,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/jQSvpSCag0IIvPVtlgLZhJJe4LX.jpg",
    "runtime": 134,
    "networks": [
        47,
        683
    ],
    "certification": "N/A",
    "slug": "sri-asih"
},

{
    "id": 1120911,
    "title": "Saturday Night: A Noite que Mudou a Comédia",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2024-09-27",
    "popularity": 13.306,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/oCf5O6uxooTvRwKVnLHwGqZUifq.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "N/A",
    "slug": "saturday-night-a-noite-que-mudou-a-comdia"
},

{
    "id": 313893,
    "title": "E N V O Y",
    "genre_ids": [
        878
    ],
    "release_date": "2014-09-22",
    "popularity": 13.729,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/aFwXw3rGizINp77yKe9hAzftVzz.jpg",
    "runtime": 9,
    "networks": [],
    "certification": "N/A",
    "slug": "e-n-v-o-y"
},

{
    "id": 1063879,
    "title": "Infestação",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2023-12-27",
    "popularity": 12.976,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/d9m0t6ffEwERhWfwKHKMojMtTsv.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "14",
    "slug": "infestao"
},

{
    "id": 109689,
    "title": "Sou Louco Por Você",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2012-06-22",
    "popularity": 12.786,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/l9rWQkr58PNOjYjhgZ6VoXT9tQt.jpg",
    "runtime": 118,
    "networks": [],
    "certification": "N/A",
    "slug": "sou-louco-por-voc"
},

{
    "id": 1209288,
    "title": "Liga da Justiça: Crise nas Infinitas Terras - Parte Dois",
    "genre_ids": [
        16,
        878,
        28
    ],
    "release_date": "2024-04-22",
    "popularity": 13.902,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/oQJWjO5aw5N4uCoh6CYrxf1LePv.jpg",
    "runtime": 94,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "liga-da-justia-crise-nas-infinitas-terras-parte-dois"
},

{
    "id": 629542,
    "title": "Os Caras Malvados",
    "genre_ids": [
        10751,
        16,
        12,
        35,
        80
    ],
    "release_date": "2022-03-17",
    "popularity": 13.639,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/syKg3OmdtSYmkA7nNdtPUYdSFGL.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "L",
    "slug": "os-caras-malvados"
},

{
    "id": 1091267,
    "title": "O Poço",
    "genre_ids": [
        27
    ],
    "release_date": "2024-08-01",
    "popularity": 13.117,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/eHqdPcnYB6L2dX5xDE3ucZhvFua.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "o-poo"
},

{
    "id": 9802,
    "title": "A Rocha",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "1996-06-07",
    "popularity": 13.567,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/juqEMUcEZDNMo5AowLr0r4NwSSN.jpg",
    "runtime": 137,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "a-rocha"
},

{
    "id": 200727,
    "title": "Simplesmente Acontece",
    "genre_ids": [
        10749,
        18,
        35
    ],
    "release_date": "2014-10-16",
    "popularity": 12.915,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/azlKLU8YN1dY5bknWVWprIdjc7X.jpg",
    "runtime": 102,
    "networks": [
        119,
        307
    ],
    "certification": "14",
    "slug": "simplesmente-acontece"
},

{
    "id": 9792,
    "title": "Viagem Maldita",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2006-03-10",
    "popularity": 13.807,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/m7rGCY9MafDX3N3Z9jSzHSWGqtg.jpg",
    "runtime": 107,
    "networks": [],
    "certification": "18",
    "slug": "viagem-maldita"
},

{
    "id": 315837,
    "title": "A Vigilante do Amanhã: Ghost in the Shell",
    "genre_ids": [
        878,
        18,
        28
    ],
    "release_date": "2017-03-29",
    "popularity": 13.494,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/rDVB5QXh4RoYPMUCelxJEtprgy6.jpg",
    "runtime": 107,
    "networks": [
        8
    ],
    "certification": "14",
    "slug": "a-vigilante-do-amanh-ghost-in-the-shell"
},

{
    "id": 393,
    "title": "Kill Bill: Volume 2",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2004-04-16",
    "popularity": 13.213,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/e4yFdkNBjVX0D09UksbDEBdmynl.jpg",
    "runtime": 138,
    "networks": [
        119,
        307,
        11,
        2142,
        2141,
        201
    ],
    "certification": "16",
    "slug": "kill-bill-volume-2"
},

{
    "id": 332562,
    "title": "Nasce uma Estrela",
    "genre_ids": [
        10402,
        18,
        10749
    ],
    "release_date": "2018-10-03",
    "popularity": 12.673,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/c64MNyCzQdOCZpV1bHDZdH9I5SR.jpg",
    "runtime": 136,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "16",
    "slug": "nasce-uma-estrela"
},

{
    "id": 412656,
    "title": "Mundo em Caos",
    "genre_ids": [
        14,
        878,
        12
    ],
    "release_date": "2021-02-24",
    "popularity": 13.393,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/oMSumadgRiygK1DUtBurdnZb9Jz.jpg",
    "runtime": 109,
    "networks": [
        307
    ],
    "certification": "14",
    "slug": "mundo-em-caos"
},

{
    "id": 956842,
    "title": "Como Vender a Lua",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2024-07-10",
    "popularity": 13.295,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/9Hw7uOjq7zHEixF0JBJw8E3XB4e.jpg",
    "runtime": 132,
    "networks": [
        350
    ],
    "certification": "12",
    "slug": "como-vender-a-lua"
},

{
    "id": 36643,
    "title": "007 O Mundo Não é o Bastante",
    "genre_ids": [
        12,
        28,
        53
    ],
    "release_date": "1999-11-17",
    "popularity": 12.786,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/hhdLmdw0o2weP64g8w4LvPNs3G0.jpg",
    "runtime": 128,
    "networks": [],
    "certification": "12",
    "slug": "007-o-mundo-no-o-bastante"
},

{
    "id": 800378,
    "title": "痴漢電車 ＯＬ感度くらべ",
    "genre_ids": [],
    "release_date": "1991-06-21",
    "popularity": 12.975,
    "vote_average": 4.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/gkKhowzgw3vAXEdtDjh9VDfAz4s.jpg",
    "runtime": 60,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 14347,
    "title": "Feitiço do Rio",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "1984-02-17",
    "popularity": 13.639,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/yzNtmqL6HUFC7FZl9DnGmhnCQUL.jpg",
    "runtime": 100,
    "networks": [
        2142,
        2141
    ],
    "certification": "N/A",
    "slug": "feitio-do-rio"
},

{
    "id": 27578,
    "title": "Os Mercenários",
    "genre_ids": [
        53,
        12,
        28
    ],
    "release_date": "2010-08-03",
    "popularity": 13.729,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/67xVbBwIO6Pq4p9KS22sZ4k3bmQ.jpg",
    "runtime": 103,
    "networks": [
        307,
        2106,
        2107,
        2156
    ],
    "certification": "16",
    "slug": "os-mercenrios"
},

{
    "id": 10527,
    "title": "Madagascar 2: A Grande Escapada",
    "genre_ids": [
        10751,
        12,
        16,
        35
    ],
    "release_date": "2008-10-30",
    "popularity": 13.895,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/j4If0LljCT2v6CZc86ah3kTshDw.jpg",
    "runtime": 89,
    "networks": [
        8,
        119,
        167,
        531,
        307,
        582,
        1796,
        1853,
        2156,
        2303
    ],
    "certification": "L",
    "slug": "madagascar-2-a-grande-escapada"
},

{
    "id": 9509,
    "title": "Chamas da Vingança",
    "genre_ids": [
        28,
        18,
        53
    ],
    "release_date": "2004-04-23",
    "popularity": 13.566,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/w9BZFaK8MEwKjLtyFUS5zoPIYo1.jpg",
    "runtime": 146,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "chamas-da-vingana"
},

{
    "id": 807172,
    "title": "O Exorcista: O Devoto",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2023-10-04",
    "popularity": 13.805,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/m2Ubk7aBWywqtHhYHbmlS4ylBOU.jpg",
    "runtime": 111,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "o-exorcista-o-devoto"
},

{
    "id": 395834,
    "title": "Terra Selvagem",
    "genre_ids": [
        80,
        9648,
        53
    ],
    "release_date": "2017-08-03",
    "popularity": 12.911,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/qzwVKPWfPN4LR9Ex6Ux25N18ntW.jpg",
    "runtime": 110,
    "networks": [
        8,
        1796,
        2106,
        2107
    ],
    "certification": "16",
    "slug": "terra-selvagem"
},

{
    "id": 94329,
    "title": "Operação Invasão",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2012-03-22",
    "popularity": 12.574,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/5dDHkDbzj8rYOCYqlFIna3sV8tg.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "N/A",
    "slug": "operao-invaso"
},

{
    "id": 9836,
    "title": "Happy Feet: O Pinguim",
    "genre_ids": [
        16,
        35,
        10751
    ],
    "release_date": "2006-11-16",
    "popularity": 13.117,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/vd5OoU5rhfKblLoLwaCK5QU0yJS.jpg",
    "runtime": 108,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "happy-feet-o-pinguim"
},

{
    "id": 956,
    "title": "Missão: Impossível 3",
    "genre_ids": [
        12,
        28,
        53
    ],
    "release_date": "2006-04-25",
    "popularity": 13.488,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/ui7TCk3IzsjLcDRkZi08nLFvwRO.jpg",
    "runtime": 126,
    "networks": [
        337,
        1853,
        2156,
        2303
    ],
    "certification": "12",
    "slug": "misso-impossvel-3"
},

{
    "id": 664,
    "title": "Twister",
    "genre_ids": [
        28,
        12,
        18
    ],
    "release_date": "1996-05-10",
    "popularity": 13.211,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/7QXT40RNaD0vac198G3O0U45m3y.jpg",
    "runtime": 113,
    "networks": [
        167,
        307
    ],
    "certification": "L",
    "slug": "twister"
},

{
    "id": 43347,
    "title": "Amor e Outras Drogas",
    "genre_ids": [
        18,
        35,
        10749
    ],
    "release_date": "2010-11-04",
    "popularity": 13.379,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/g0CV1USGZgp1m5kS0WNu7nZFcR3.jpg",
    "runtime": 112,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "amor-e-outras-drogas"
},

{
    "id": 947,
    "title": "Lawrence da Arábia",
    "genre_ids": [
        12,
        36,
        10752
    ],
    "release_date": "1962-12-11",
    "popularity": 12.668,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/r0xZR5ENEc8Pp2ULhkP4lgUWk8Y.jpg",
    "runtime": 216,
    "networks": [],
    "certification": "14",
    "slug": "lawrence-da-arbia"
},

{
    "id": 423204,
    "title": "Invasão ao Serviço Secreto",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2019-08-21",
    "popularity": 12.781,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/8LfvpWS7bLUtyOzs3KsdxRflHSu.jpg",
    "runtime": 122,
    "networks": [
        8,
        307,
        1796,
        2106,
        2107,
        2156
    ],
    "certification": "14",
    "slug": "invaso-ao-servio-secreto"
},

{
    "id": 9286,
    "title": "Premonição 3",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2006-02-09",
    "popularity": 12.502,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/g4Afv3CR6ofDtKdlfFOOPYvHzvC.jpg",
    "runtime": 93,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "premonio-3"
},

{
    "id": 645710,
    "title": "Observadores",
    "genre_ids": [
        53
    ],
    "release_date": "2021-08-25",
    "popularity": 13.294,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/bOFs0xHCOSTvIUYL0LDd5qcuuDB.jpg",
    "runtime": 117,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "observadores"
},

{
    "id": 838240,
    "title": "Meu Amigo Robô",
    "genre_ids": [
        16,
        18,
        35,
        878
    ],
    "release_date": "2023-12-06",
    "popularity": 12.974,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zmgx7H51Tq9wgpW0DZxSGzXURZy.jpg",
    "runtime": 102,
    "networks": [
        11,
        484,
        201
    ],
    "certification": "10",
    "slug": "meu-amigo-rob"
},

{
    "id": 9539,
    "title": "Mártires",
    "genre_ids": [
        27,
        18,
        53
    ],
    "release_date": "2008-06-12",
    "popularity": 13.634,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/bhq0r5zoXJQcHJ4UaMMVz4n3o86.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "mrtires"
},

{
    "id": 250546,
    "title": "Annabelle",
    "genre_ids": [
        27
    ],
    "release_date": "2014-10-02",
    "popularity": 13.727,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/jnvQCi7cO3f5oAceTrodDjVvQmB.jpg",
    "runtime": 99,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "annabelle"
},

{
    "id": 9411,
    "title": "Possuídos",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "1998-01-16",
    "popularity": 12.388,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/7xYrZ3BzABH32vKLNTNDk8n8oEB.jpg",
    "runtime": 120,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "possudos"
},

{
    "id": 1585,
    "title": "A Felicidade Não Se Compra",
    "genre_ids": [
        18,
        10751,
        14
    ],
    "release_date": "1946-12-20",
    "popularity": 13.566,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/u9oQTcUTcWxJwv60JkGVjIBzfuB.jpg",
    "runtime": 130,
    "networks": [
        47,
        447,
        499,
        683
    ],
    "certification": "L",
    "slug": "a-felicidade-no-se-compra"
},

{
    "id": 340102,
    "title": "Os Novos Mutantes",
    "genre_ids": [
        878,
        27,
        28
    ],
    "release_date": "2020-04-02",
    "popularity": 13.889,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/cZ4RWlK7bZNfEubl1dKanoJWK7G.jpg",
    "runtime": 90,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "os-novos-mutantes"
},

{
    "id": 1430452,
    "title": "We The North: From Prehistoric to Historic",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-21",
    "popularity": 13.478,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/2aWCjeP9OELtDNOmXXetz33T0Kv.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "we-the-north-from-prehistoric-to-historic"
},

{
    "id": 680028,
    "title": "Pânico Abaixo de Zero",
    "genre_ids": [
        53
    ],
    "release_date": "2020-08-28",
    "popularity": 13.207,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/pQE8syV18hLH61dAYafuLyUF8jU.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "pnico-abaixo-de-zero"
},

{
    "id": 1383508,
    "title": "飛べない天使",
    "genre_ids": [],
    "release_date": "2025-02-21",
    "popularity": 13.797,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/mUOWWCQhUJUyoXKTkE1wqB05Cfb.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 2770,
    "title": "American Pie 2: A Segunda Vez é Ainda Melhor",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2001-08-10",
    "popularity": 13.106,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/kjeavq1VD0ZRBmt2QVFfZlS6ZaG.jpg",
    "runtime": 108,
    "networks": [
        307
    ],
    "certification": "14",
    "slug": "american-pie-2-a-segunda-vez-ainda-melhor"
},

{
    "id": 752,
    "title": "V de Vingança",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "2006-02-23",
    "popularity": 12.574,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/rvrFkBKTrVCT1nVRuCaemQFRn0.jpg",
    "runtime": 130,
    "networks": [],
    "certification": "16",
    "slug": "v-de-vingana"
},

{
    "id": 1089123,
    "title": "Daddy's Head",
    "genre_ids": [
        27
    ],
    "release_date": "2024-10-10",
    "popularity": 13.375,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/nEWbEBs8BalwasA4Un8rll3kauT.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "daddys-head"
},

{
    "id": 657654,
    "title": "선배부부와 교환섹스",
    "genre_ids": [
        10749
    ],
    "release_date": "2019-12-23",
    "popularity": 12.907,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/7Dxc4qV8p2whHmlyCSWtIsLYerA.jpg",
    "runtime": 86,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 964960,
    "title": "O Sabor da Vida",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2023-11-08",
    "popularity": 12.666,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ACNj3KTzNnhtUGMBy1IeCgrEhS.jpg",
    "runtime": 135,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "o-sabor-da-vida"
},

{
    "id": 900379,
    "title": "Afire",
    "genre_ids": [
        18,
        10749,
        35
    ],
    "release_date": "2023-04-20",
    "popularity": 12.305,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/raV3odGc70MWPRs63Papl83oNQU.jpg",
    "runtime": 103,
    "networks": [
        1920,
        2157
    ],
    "certification": "14",
    "slug": "afire"
},

{
    "id": 15512,
    "title": "Monstros vs Alienígenas",
    "genre_ids": [
        16,
        10751,
        12,
        878
    ],
    "release_date": "2009-03-19",
    "popularity": 13.283,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/rkV9oqoxun8h0aMQAhUR1rY60a1.jpg",
    "runtime": 102,
    "networks": [
        307,
        484
    ],
    "certification": "L",
    "slug": "monstros-vs-aliengenas"
},

{
    "id": 342470,
    "title": "Por Lugares Incríveis",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2020-02-28",
    "popularity": 12.778,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/xhQ3s1kdq1rVzq3xQNcOzvhwzTG.jpg",
    "runtime": 108,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "por-lugares-incrveis"
},

{
    "id": 13700,
    "title": "Nem Que a Vaca Tussa",
    "genre_ids": [
        16,
        10751
    ],
    "release_date": "2004-04-02",
    "popularity": 12.493,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/merEoWh2Ju8AoYedYCW0faW9e9O.jpg",
    "runtime": 77,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "nem-que-a-vaca-tussa"
},

{
    "id": 1083862,
    "title": "Resident Evil: Ilha da Morte",
    "genre_ids": [
        16,
        28,
        27
    ],
    "release_date": "2023-06-22",
    "popularity": 12.973,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/bDqY2AYYdZQykEhmDr87i8RKKTT.jpg",
    "runtime": 90,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "resident-evil-ilha-da-morte"
},

{
    "id": 591,
    "title": "O Código Da Vinci",
    "genre_ids": [
        53,
        9648
    ],
    "release_date": "2006-05-17",
    "popularity": 12.384,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/feyfwGwJOdUAAqjTP3vXJmSesAt.jpg",
    "runtime": 174,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "o-cdigo-da-vinci"
},

{
    "id": 1401503,
    "title": "Alice-Heart",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2025-02-21",
    "popularity": 13.625,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tWMtQHNGXVCE0N2P4TKSWoXx0sJ.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "alice-heart"
},

{
    "id": 1091181,
    "title": "Lobisomens",
    "genre_ids": [
        12,
        35,
        14,
        28
    ],
    "release_date": "2024-10-22",
    "popularity": 13.887,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/jt99DRVbB7DKHNEWsZd1Xgi2M4o.jpg",
    "runtime": 95,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "lobisomens"
},

{
    "id": 1411805,
    "title": "The Helsinki Effect",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-21",
    "popularity": 13.565,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yQULK59R8e2nsUpcW5NtBRS0Tpi.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "the-helsinki-effect"
},

{
    "id": 1412811,
    "title": "Hypnosis Mic: Division Rap Battle Movie",
    "genre_ids": [
        16
    ],
    "release_date": "2025-02-21",
    "popularity": 13.726,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bn8aF2eYFxX73bI3Sx6nkyIy3uI.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "hypnosis-mic-division-rap-battle-movie"
},

{
    "id": 38157,
    "title": "O Mestre dos Desejos 4: A Profecia Finalmente se Cumpriu",
    "genre_ids": [
        27,
        14
    ],
    "release_date": "2002-06-10",
    "popularity": 13.102,
    "vote_average": 4.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/wGoAHh7MLpwso4XhdCY3N2h3P7i.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "o-mestre-dos-desejos-4-a-profecia-finalmente-se-cumpriu"
},

{
    "id": 1312157,
    "title": "FolleMente",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2025-02-20",
    "popularity": 13.478,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/sPps037qCts9XDwCaS6j7JsNuEd.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "follemente"
},

{
    "id": 626735,
    "title": "Dog - A Aventura de Uma Vida",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2022-02-17",
    "popularity": 12.238,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/gln0b5rezteLuyv9kO1q0h0vqnA.jpg",
    "runtime": 101,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "dog-a-aventura-de-uma-vida"
},

{
    "id": 1281091,
    "title": "ഡ്യൂട്ടിയിലുള്ള ഓഫീസർ",
    "genre_ids": [
        80,
        53
    ],
    "release_date": "2025-02-20",
    "popularity": 12.571,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ucwirgaK4v9ylQyDkwoXJtDIlf7.jpg",
    "runtime": 137,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 1411690,
    "title": "Crise d'ado",
    "genre_ids": [
        35,
        10751
    ],
    "release_date": "2025-02-21",
    "popularity": 13.795,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/q3MxzeMA2tlsvRv7tYXaUTr8Rqb.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "crise-dado"
},

{
    "id": 127380,
    "title": "Procurando Dory",
    "genre_ids": [
        12,
        16,
        35,
        10751
    ],
    "release_date": "2016-06-16",
    "popularity": 12.664,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/iq0bBYiDe7ttTNBtTwMBqBLPCXJ.jpg",
    "runtime": 97,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "procurando-dory"
},

{
    "id": 28635,
    "title": "O Mestre dos Desejos 3: Além da Porta do Inferno",
    "genre_ids": [
        53,
        27,
        14
    ],
    "release_date": "2001-10-23",
    "popularity": 13.375,
    "vote_average": 4.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/qMH0hM7lpv6Y85FhiBIp36jZdBa.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "o-mestre-dos-desejos-3-alm-da-porta-do-inferno"
},

{
    "id": 930600,
    "title": "A Libertação",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-08-16",
    "popularity": 13.192,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/4TdwOqwIPdG0BMuCDZdmQz92zjT.jpg",
    "runtime": 112,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "a-libertao"
},

{
    "id": 11453,
    "title": "Gigolô Europeu por Acidente",
    "genre_ids": [
        35
    ],
    "release_date": "2005-08-12",
    "popularity": 12.886,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/uJMMXK7Jqfrce8hPxr30XOvXjXQ.jpg",
    "runtime": 83,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "gigol-europeu-por-acidente"
},

{
    "id": 628900,
    "title": "Contrato Perigoso",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2022-03-10",
    "popularity": 12.302,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/dq9r4v9yWkSmMvffTMiNy3heTZ6.jpg",
    "runtime": 103,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "16",
    "slug": "contrato-perigoso"
},

{
    "id": 57165,
    "title": "Fúria de Titãs 2",
    "genre_ids": [
        14,
        12,
        28
    ],
    "release_date": "2012-03-28",
    "popularity": 12.161,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/9yyAOtBlWlMBOAUp2lWTRytVgOG.jpg",
    "runtime": 100,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "fria-de-tits-2"
},

{
    "id": 650036,
    "title": "Бешенство",
    "genre_ids": [
        53,
        18
    ],
    "release_date": "2023-04-24",
    "popularity": 13.279,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/vA8UL1zeHqQqQTzTlxZw9A9IpgU.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 222517,
    "title": "Biancaneve & Co...",
    "genre_ids": [
        35
    ],
    "release_date": "1982-04-03",
    "popularity": 12.485,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/yMiM9Zg9JuNy9k1Q7wsyEpwTSQR.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "biancaneve-co"
},

{
    "id": 581392,
    "title": "Invasão Zumbi 2: Península",
    "genre_ids": [
        27,
        28,
        53,
        12
    ],
    "release_date": "2020-07-15",
    "popularity": 12.769,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/wftS9sRgmzZnHS4JrbRchaHqnju.jpg",
    "runtime": 116,
    "networks": [
        307,
        2156
    ],
    "certification": "14",
    "slug": "invaso-zumbi-2-pennsula"
},

{
    "id": 9373,
    "title": "O Massacre da Serra Elétrica",
    "genre_ids": [
        27
    ],
    "release_date": "2003-05-21",
    "popularity": 12.964,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/peL5G7S7KER4y5fUAGgtGxRccbv.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "18",
    "slug": "o-massacre-da-serra-eltrica"
},

{
    "id": 1593,
    "title": "Uma Noite no Museu",
    "genre_ids": [
        28,
        12,
        35,
        10751,
        14
    ],
    "release_date": "2006-12-20",
    "popularity": 12.383,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/Pca1hVNgPAUcp6zVHldlboh80R.jpg",
    "runtime": 108,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "uma-noite-no-museu"
},

{
    "id": 346672,
    "title": "Anjos da Noite: Guerras de Sangue",
    "genre_ids": [
        14,
        28,
        53
    ],
    "release_date": "2016-11-24",
    "popularity": 13.081,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/mM2D6fQFz3BjQaIHwqSniglD4iX.jpg",
    "runtime": 91,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "14",
    "slug": "anjos-da-noite-guerras-de-sangue"
},

{
    "id": 9793,
    "title": "Viagem Maldita 2: O Retorno dos Malditos",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2007-03-22",
    "popularity": 12.23,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/tFLQiq2nOZoRYyZUnmRdRToTpfM.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "viagem-maldita-2-o-retorno-dos-malditos"
},

{
    "id": 870404,
    "title": "Meteoro: A Fuga",
    "genre_ids": [
        878,
        53
    ],
    "release_date": "2021-09-01",
    "popularity": 13.723,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/rwzvwEELD5uWJdJBmbS7h7xc0Wz.jpg",
    "runtime": 84,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "meteoro-a-fuga"
},

{
    "id": 308531,
    "title": "As Tartarugas Ninja: Fora das Sombras",
    "genre_ids": [
        28,
        12,
        35,
        10751,
        878
    ],
    "release_date": "2016-06-01",
    "popularity": 13.624,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/28CV4RE4BayVZnbw7FdXbcvzSQb.jpg",
    "runtime": 112,
    "networks": [
        8,
        531,
        307,
        1796,
        1853,
        2303
    ],
    "certification": "10",
    "slug": "as-tartarugas-ninja-fora-das-sombras"
},

{
    "id": 149,
    "title": "Akira",
    "genre_ids": [
        16,
        878,
        28
    ],
    "release_date": "1988-06-10",
    "popularity": 13.883,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/tbwwTQ3EqSdotbQ3ZcIl6vKBv7q.jpg",
    "runtime": 124,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "akira"
},

{
    "id": 76617,
    "title": "O Massacre da Serra Elétrica 3D: A Lenda Continua",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2013-01-03",
    "popularity": 13.553,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/34y53bP3bWX4DTAr8cishqcyP4f.jpg",
    "runtime": 92,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "o-massacre-da-serra-eltrica-3d-a-lenda-continua"
},

{
    "id": 364689,
    "title": "O Touro Ferdinando",
    "genre_ids": [
        16,
        10751,
        12,
        35
    ],
    "release_date": "2017-12-09",
    "popularity": 13.474,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/rnoYZvoSbS6uogrESSbKOpwg0sB.jpg",
    "runtime": 97,
    "networks": [
        337,
        8
    ],
    "certification": "L",
    "slug": "o-touro-ferdinando"
},

{
    "id": 63,
    "title": "Os 12 Macacos",
    "genre_ids": [
        878,
        53,
        9648
    ],
    "release_date": "1995-12-29",
    "popularity": 12.561,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/VN4I4PphQCg3MkGwnqHGX65WY0.jpg",
    "runtime": 130,
    "networks": [],
    "certification": "14",
    "slug": "os-12-macacos"
},

{
    "id": 764,
    "title": "Uma Noite Alucinante: A Morte do Demônio",
    "genre_ids": [
        27
    ],
    "release_date": "1981-09-10",
    "popularity": 12.664,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/dCdXagFYR7WwaHuVmZgzw4F0KpP.jpg",
    "runtime": 85,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "uma-noite-alucinante-a-morte-do-demnio"
},

{
    "id": 1428529,
    "title": "Northlore",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-21",
    "popularity": 13.373,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/oJsNHDmmp9UBhsJZT4qnfTcLh12.jpg",
    "runtime": 54,
    "networks": [],
    "certification": "N/A",
    "slug": "northlore"
},

{
    "id": 464052,
    "title": "Mulher-Maravilha 1984",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2020-12-16",
    "popularity": 13.794,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/AweDlIiohqw4sjC7gCsPVd1zo77.jpg",
    "runtime": 151,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "12",
    "slug": "mulher-maravilha-1984"
},

{
    "id": 955971,
    "title": "Lua de Mel com a Minha Mãe",
    "genre_ids": [
        35
    ],
    "release_date": "2022-04-29",
    "popularity": 13.19,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/j2uwa64qm3hSOBAd5XAgIWodhHD.jpg",
    "runtime": 110,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "lua-de-mel-com-a-minha-me"
},

{
    "id": 5925,
    "title": "Fugindo do Inferno",
    "genre_ids": [
        12,
        18,
        10752
    ],
    "release_date": "1963-07-03",
    "popularity": 12.093,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/iTh8thzuxiM5FwCaxsSTpaix27L.jpg",
    "runtime": 172,
    "networks": [
        447,
        484,
        2142,
        2141
    ],
    "certification": "12",
    "slug": "fugindo-do-inferno"
},

{
    "id": 1139829,
    "title": "Orion e o Escuro",
    "genre_ids": [
        16,
        10751,
        35,
        14,
        9648
    ],
    "release_date": "2024-02-01",
    "popularity": 12.88,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/ulUmkLFtT1Y0YGtmO6lBkMwLsBR.jpg",
    "runtime": 92,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "orion-e-o-escuro"
},

{
    "id": 567189,
    "title": "Sem Remorso",
    "genre_ids": [
        28,
        53,
        10752
    ],
    "release_date": "2021-04-29",
    "popularity": 12.302,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg",
    "runtime": 110,
    "networks": [
        119,
        2156
    ],
    "certification": "16",
    "slug": "sem-remorso"
},

{
    "id": 505026,
    "title": "Morte no Nilo",
    "genre_ids": [
        9648,
        80,
        53
    ],
    "release_date": "2022-02-09",
    "popularity": 13.271,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/dRMuS6S0NSqvkDxBbNqCjon95iY.jpg",
    "runtime": 120,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "morte-no-nilo"
},

{
    "id": 8277,
    "title": "American Pie: Caindo em Tentação",
    "genre_ids": [
        35
    ],
    "release_date": "2007-12-26",
    "popularity": 12.149,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/w3COJsjYRfrhWMLrnAbldPtisBV.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "american-pie-caindo-em-tentao"
},

{
    "id": 893712,
    "title": "Sword Art Online Progressive: Scherzo do Crepúsculo Sombrio",
    "genre_ids": [
        16,
        28,
        14,
        878
    ],
    "release_date": "2022-10-22",
    "popularity": 12.028,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/8ICEmvxffvDoI8CSPtJYlBXrNce.jpg",
    "runtime": 100,
    "networks": [
        283,
        1968
    ],
    "certification": "12",
    "slug": "sword-art-online-progressive-scherzo-do-crepsculo-sombrio"
},

{
    "id": 1309923,
    "title": "Nem Tudo é Negociável",
    "genre_ids": [
        28,
        53,
        35,
        18
    ],
    "release_date": "2024-07-25",
    "popularity": 12.763,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/vF6avV3yzZlLhCFBB1xbIG94fdC.jpg",
    "runtime": 86,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "nem-tudo-negocivel"
},

{
    "id": 419743,
    "title": "Desobediência",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2018-04-24",
    "popularity": 12.478,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/jxTaF3jMaZ5Bui7Qva2vCaD3Dix.jpg",
    "runtime": 114,
    "networks": [],
    "certification": "N/A",
    "slug": "desobedincia"
},

{
    "id": 258947,
    "title": "Deadly Virtues: Love. Honour. Obey.",
    "genre_ids": [
        53,
        18
    ],
    "release_date": "2014-12-06",
    "popularity": 12.959,
    "vote_average": 4.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/5uCkeMxYv7WNqko2oMWt7IuvV5G.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "deadly-virtues-love-honour-obey"
},

{
    "id": 30497,
    "title": "O Massacre da Serra Elétrica",
    "genre_ids": [
        27
    ],
    "release_date": "1974-10-11",
    "popularity": 13.723,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/p4ASEhC23kteI4pabD3cvFccCgO.jpg",
    "runtime": 83,
    "networks": [
        11,
        201,
        2356
    ],
    "certification": "18",
    "slug": "o-massacre-da-serra-eltrica"
},

{
    "id": 629176,
    "title": "Samaritano",
    "genre_ids": [
        878,
        80,
        28
    ],
    "release_date": "2022-08-25",
    "popularity": 13.618,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/7xP0NhjE6AOJ1RTx5vh3Jw1aNCe.jpg",
    "runtime": 99,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "samaritano"
},

{
    "id": 14258,
    "title": "Céu Azul",
    "genre_ids": [
        16,
        878
    ],
    "release_date": "2003-07-17",
    "popularity": 12.223,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/5l5D3uBDEihYUpKFrNSBEherrgb.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "cu-azul"
},

{
    "id": 43074,
    "title": "Caça-Fantasmas",
    "genre_ids": [
        28,
        14,
        35
    ],
    "release_date": "2016-07-14",
    "popularity": 11.949,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/qcpfGdYahW1NkqPAz2MHLPHas8O.jpg",
    "runtime": 116,
    "networks": [
        119,
        484
    ],
    "certification": "10",
    "slug": "caa-fantasmas"
},

{
    "id": 2251,
    "title": "Infidelidade",
    "genre_ids": [
        53,
        18,
        10749
    ],
    "release_date": "2002-05-10",
    "popularity": 13.074,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/ina8zdMp5CHRd59cupyRbMFCTAz.jpg",
    "runtime": 124,
    "networks": [
        337,
        8,
        1796
    ],
    "certification": "16",
    "slug": "infidelidade"
},

{
    "id": 387822,
    "title": "썰만화",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2016-02-25",
    "popularity": 12.557,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/6ES1W5Fraao5qEoqIx9RUPPqhFz.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 517093,
    "title": "Heróis de Guerra",
    "genre_ids": [
        18,
        28,
        10752
    ],
    "release_date": "2019-03-21",
    "popularity": 12.382,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/AttAWFTg1K4Qxjo12nMhu8NQIFR.jpg",
    "runtime": 130,
    "networks": [
        47,
        683
    ],
    "certification": "16",
    "slug": "heris-de-guerra"
},

{
    "id": 4824,
    "title": "O Chacal",
    "genre_ids": [
        28,
        53,
        12,
        80
    ],
    "release_date": "1997-11-14",
    "popularity": 13.882,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/jGUyE606Q4mEbpOe6tGwXx2ysFb.jpg",
    "runtime": 124,
    "networks": [],
    "certification": "14",
    "slug": "o-chacal"
},

{
    "id": 399361,
    "title": "Operação Fronteira",
    "genre_ids": [
        28,
        53,
        80,
        12
    ],
    "release_date": "2019-03-06",
    "popularity": 13.19,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/smz1j5GJtFm9PuBUYvQszVoGR4.jpg",
    "runtime": 125,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "operao-fronteira"
},

{
    "id": 796499,
    "title": "Exército de Ladrões: Invasão da Europa",
    "genre_ids": [
        28,
        80,
        35
    ],
    "release_date": "2021-10-29",
    "popularity": 12.662,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/lxPZYziABs5MUmyV6tUOO5mTK2z.jpg",
    "runtime": 127,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "exrcito-de-ladres-invaso-da-europa"
},

{
    "id": 7345,
    "title": "Sangue Negro",
    "genre_ids": [
        18
    ],
    "release_date": "2007-12-26",
    "popularity": 13.445,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/lujxfSA3xVjcfBne0gYueg7VPFa.jpg",
    "runtime": 158,
    "networks": [],
    "certification": "14",
    "slug": "sangue-negro"
},

{
    "id": 848187,
    "title": "O Jogo do Disfarce",
    "genre_ids": [
        28,
        35,
        10749
    ],
    "release_date": "2023-12-14",
    "popularity": 13.547,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/d9O2dIxU1X8Qc8s8kf9RFiiDMMB.jpg",
    "runtime": 101,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "o-jogo-do-disfarce"
},

{
    "id": 44833,
    "title": "Battleship: A Batalha dos Mares",
    "genre_ids": [
        53,
        28,
        12,
        878
    ],
    "release_date": "2012-04-11",
    "popularity": 13.787,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/a33ODXEpYK6hBUhajrCGphxscWk.jpg",
    "runtime": 131,
    "networks": [],
    "certification": "14",
    "slug": "battleship-a-batalha-dos-mares"
},

{
    "id": 1195430,
    "title": "देवा",
    "genre_ids": [
        28,
        53,
        9648,
        80
    ],
    "release_date": "2025-01-31",
    "popularity": 12.079,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/4wKpglgZYMYpISMdThgdqS1TSQc.jpg",
    "runtime": 153,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 26877,
    "title": "赤裸羔羊",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "1992-12-03",
    "popularity": 12.878,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/24JUeiPWLMZIfFxHLahOzSP5IsL.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1212073,
    "title": "60 Minutos",
    "genre_ids": [
        28,
        12,
        80,
        18
    ],
    "release_date": "2024-01-19",
    "popularity": 13.373,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/n5wjsuYh954HLagCnqrLpPT8xi7.jpg",
    "runtime": 89,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "60-minutos"
},

{
    "id": 76203,
    "title": "12 Anos de Escravidão",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2013-10-18",
    "popularity": 12.147,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/6RUTPOAB4rRlrRYFMGjvK6bm1x8.jpg",
    "runtime": 134,
    "networks": [
        119,
        2156
    ],
    "certification": "14",
    "slug": "12-anos-de-escravido"
},

{
    "id": 206647,
    "title": "007 Contra Spectre",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2015-10-26",
    "popularity": 11.852,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/7qUy7podv41jcj0tOvJNwh6700A.jpg",
    "runtime": 148,
    "networks": [],
    "certification": "14",
    "slug": "007-contra-spectre"
},

{
    "id": 841,
    "title": "Duna",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "1984-12-14",
    "popularity": 12.028,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/hYhW2wag6lt6lmczbY1n12CvbK8.jpg",
    "runtime": 136,
    "networks": [
        47,
        499,
        683
    ],
    "certification": "14",
    "slug": "duna"
},

{
    "id": 187017,
    "title": "Anjos da Lei 2",
    "genre_ids": [
        80,
        35,
        28
    ],
    "release_date": "2014-06-05",
    "popularity": 12.301,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/x6WSL1FmxCswB08Vkz19yoXs56l.jpg",
    "runtime": 112,
    "networks": [
        484,
        701
    ],
    "certification": "14",
    "slug": "anjos-da-lei-2"
},

{
    "id": 812225,
    "title": "Black Clover: A Espada do Rei Mago",
    "genre_ids": [
        16,
        14,
        28,
        12
    ],
    "release_date": "2023-06-16",
    "popularity": 13.27,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/5KK0FJGdZI7jMhfwyJTg1LGR2z8.jpg",
    "runtime": 113,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "black-clover-a-espada-do-rei-mago"
},

{
    "id": 18823,
    "title": "Fúria de Titãs",
    "genre_ids": [
        12,
        14,
        28
    ],
    "release_date": "2010-03-26",
    "popularity": 12.745,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/R21t8SVfr6sQQ5mzjkecEU02YW.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "12",
    "slug": "fria-de-tits"
},

{
    "id": 82507,
    "title": "A Entidade",
    "genre_ids": [
        27,
        53,
        9648
    ],
    "release_date": "2012-03-29",
    "popularity": 12.472,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/uTaCFSTQ29LKqLXJU75owdir04h.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "14",
    "slug": "a-entidade"
},

{
    "id": 10112,
    "title": "Aristogatas",
    "genre_ids": [
        16,
        35,
        10751,
        12
    ],
    "release_date": "1970-12-24",
    "popularity": 12.959,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/iqp5afP5Wc18iu16FXxBrsh9dnd.jpg",
    "runtime": 78,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "aristogatas"
},

{
    "id": 324668,
    "title": "Jason Bourne",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2016-07-27",
    "popularity": 13.616,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/9wcchetvkyCRi1UYPIinrzXBdsN.jpg",
    "runtime": 123,
    "networks": [
        119,
        307,
        484
    ],
    "certification": "14",
    "slug": "jason-bourne"
},

{
    "id": 520758,
    "title": "A Fuga das Galinhas: A Ameaça dos Nuggets",
    "genre_ids": [
        10751,
        16,
        12,
        35
    ],
    "release_date": "2023-12-08",
    "popularity": 12.376,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/8O7qM2ue5VHPsu1FFbZSRMpCqwY.jpg",
    "runtime": 101,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "a-fuga-das-galinhas-a-ameaa-dos-nuggets"
},

{
    "id": 71672,
    "title": "Pânico na Floresta 4: Origens Sangrentas",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2011-10-17",
    "popularity": 13.88,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/aMBWDYLYFOHYp98HkHyqCOhzGQ9.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "18",
    "slug": "pnico-na-floresta-4-origens-sangrentas"
},

{
    "id": 87825,
    "title": "Curvas da Vida",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2012-09-21",
    "popularity": 12.214,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/3T0yuq3lH2xbnA1Ur8DIcXYuduf.jpg",
    "runtime": 111,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "curvas-da-vida"
},

{
    "id": 1315988,
    "title": "Mikaela",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2025-01-31",
    "popularity": 13.064,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/wnTNpOoqjqOLj2oIoGE9MnPFa4o.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "mikaela"
},

{
    "id": 1010600,
    "title": "Os Estranhos: Capítulo 1",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-05-15",
    "popularity": 12.64,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/vjyZvt5qMJ5xQAzQ8JvT0arlpkK.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "16",
    "slug": "os-estranhos-captulo-1"
},

{
    "id": 109520,
    "title": "Depois que o Pornô Acaba",
    "genre_ids": [
        99
    ],
    "release_date": "2012-05-21",
    "popularity": 11.774,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/aPerSjt4viv7Ik8OEHL83AbrH6R.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "depois-que-o-porn-acaba"
},

{
    "id": 278154,
    "title": "A Era do Gelo: O Big Bang",
    "genre_ids": [
        12,
        16,
        10751,
        35,
        878
    ],
    "release_date": "2016-06-23",
    "popularity": 13.439,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/k3lmQw2wePJAoK8C9UxwXLIDoOG.jpg",
    "runtime": 95,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-era-do-gelo-o-big-bang"
},

{
    "id": 322,
    "title": "Sobre Meninos e Lobos",
    "genre_ids": [
        53,
        80,
        18,
        9648
    ],
    "release_date": "2003-10-07",
    "popularity": 11.948,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/sKALnVXQpq4wQWCSB6QPjQXZCfH.jpg",
    "runtime": 138,
    "networks": [],
    "certification": "16",
    "slug": "sobre-meninos-e-lobos"
},

{
    "id": 559969,
    "title": "El Camino: A Breaking Bad Film",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "2019-10-11",
    "popularity": 12.553,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/5RjDlj17jz31kBIRYRk6iEB3YnJ.jpg",
    "runtime": 122,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "el-camino-a-breaking-bad-film"
},

{
    "id": 1387866,
    "title": "Um Fiasco de Férias",
    "genre_ids": [
        35,
        10751
    ],
    "release_date": "2024-12-12",
    "popularity": 13.189,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/z04mF3GTUTc2cXuiyooNQvfmfcM.jpg",
    "runtime": 93,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "um-fiasco-de-frias"
},

{
    "id": 1371,
    "title": "Rocky III: O Desafio Supremo",
    "genre_ids": [
        18
    ],
    "release_date": "1982-05-28",
    "popularity": 12.077,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/yBNk3DDAEqPXEdDl6XlLEE3U4RR.jpg",
    "runtime": 99,
    "networks": [
        2142,
        2141
    ],
    "certification": "12",
    "slug": "rocky-iii-o-desafio-supremo"
},

{
    "id": 950526,
    "title": "O Mestre da Fumaça",
    "genre_ids": [
        28,
        35,
        14
    ],
    "release_date": "2023-05-18",
    "popularity": 13.783,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/tYKoNjCOQ9dbXaQnHRiJ3bQ6Fjk.jpg",
    "runtime": 104,
    "networks": [
        8,
        1796
    ],
    "certification": "18",
    "slug": "o-mestre-da-fumaa"
},

{
    "id": 12230,
    "title": "101 Dálmatas",
    "genre_ids": [
        12,
        16,
        35,
        10751
    ],
    "release_date": "1961-01-25",
    "popularity": 13.369,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/117iq8a3s1umK391ZribC7JqNTt.jpg",
    "runtime": 79,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "101-dlmatas"
},

{
    "id": 331482,
    "title": "Adoráveis Mulheres",
    "genre_ids": [
        18,
        10749,
        36
    ],
    "release_date": "2019-12-25",
    "popularity": 13.544,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/1dwhsiuvNyQmA9ytp3T40uz4MOv.jpg",
    "runtime": 134,
    "networks": [],
    "certification": "10",
    "slug": "adorveis-mulheres"
},

{
    "id": 460465,
    "title": "Mortal Kombat",
    "genre_ids": [
        28,
        14,
        12
    ],
    "release_date": "2021-04-07",
    "popularity": 13.719,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/44aCR6cjH0FbzW6PMw3Ega178iW.jpg",
    "runtime": 110,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "16",
    "slug": "mortal-kombat"
},

{
    "id": 1262299,
    "title": "El Apocalipsis de san Juan",
    "genre_ids": [
        99,
        36
    ],
    "release_date": "2024-10-07",
    "popularity": 12.026,
    "vote_average": 10.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zzXU586n4uDBgMtVMPPQW7UJwu8.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "N/A",
    "slug": "el-apocalipsis-de-san-juan"
},

{
    "id": 8643,
    "title": "O Exorcismo de Emily Rose",
    "genre_ids": [
        80,
        18,
        27,
        53
    ],
    "release_date": "2005-09-09",
    "popularity": 12.147,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/3tE6r2IaABY08EcIKF51qACri8H.jpg",
    "runtime": 121,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "o-exorcismo-de-emily-rose"
},

{
    "id": 628,
    "title": "Entrevista com o Vampiro",
    "genre_ids": [
        27,
        18,
        14
    ],
    "release_date": "1994-11-11",
    "popularity": 12.868,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/oKqRTSEeOaO6x4pqc5y36qnnHsq.jpg",
    "runtime": 123,
    "networks": [
        1899
    ],
    "certification": "14",
    "slug": "entrevista-com-o-vampiro"
},

{
    "id": 189,
    "title": "Sin City: A Dama Fatal",
    "genre_ids": [
        80,
        28,
        53
    ],
    "release_date": "2014-08-20",
    "popularity": 11.852,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/b8V2qtG58vjX1S0AT6uP9M2BDqY.jpg",
    "runtime": 102,
    "networks": [
        2142,
        2141
    ],
    "certification": "18",
    "slug": "sin-city-a-dama-fatal"
},

{
    "id": 59440,
    "title": "Guerreiro",
    "genre_ids": [
        18,
        28
    ],
    "release_date": "2011-09-09",
    "popularity": 11.696,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/tq6u6KhMnHOXWCreNLOfWQoGJdV.jpg",
    "runtime": 140,
    "networks": [
        8,
        1899,
        1796,
        1825
    ],
    "certification": "12",
    "slug": "guerreiro"
},

{
    "id": 845783,
    "title": "A Bruxa dos Mortos: Baghead",
    "genre_ids": [
        27
    ],
    "release_date": "2023-12-28",
    "popularity": 12.463,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/hV1duOiPt8o4JxUltlSbYXMJehf.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "14",
    "slug": "a-bruxa-dos-mortos-baghead"
},

{
    "id": 9471,
    "title": "As Panteras: Detonando",
    "genre_ids": [
        28,
        12,
        35
    ],
    "release_date": "2003-06-25",
    "popularity": 13.269,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/4GZLHlKuvQCqNnKfT3GNZYnlFFc.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "12",
    "slug": "as-panteras-detonando"
},

{
    "id": 11619,
    "title": "Por Água Abaixo",
    "genre_ids": [
        12,
        16,
        35,
        10751
    ],
    "release_date": "2006-10-22",
    "popularity": 12.734,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/qzyUeoCg6fh8nSQD1LFiUiiOs8P.jpg",
    "runtime": 86,
    "networks": [
        119
    ],
    "certification": "L",
    "slug": "por-gua-abaixo"
},

{
    "id": 617653,
    "title": "O Último Duelo",
    "genre_ids": [
        36,
        18,
        28
    ],
    "release_date": "2021-10-13",
    "popularity": 12.958,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/mhrzzNauB1PKrwnqVbLQODNNTJN.jpg",
    "runtime": 153,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "o-ltimo-duelo"
},

{
    "id": 4256,
    "title": "Todo Mundo em Pânico 3",
    "genre_ids": [
        35
    ],
    "release_date": "2003-10-24",
    "popularity": 12.3,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/y14q7jWS0vH8ZuWPS1v8t8qCmBO.jpg",
    "runtime": 84,
    "networks": [
        307,
        2156
    ],
    "certification": "16",
    "slug": "todo-mundo-em-pnico-3"
},

{
    "id": 1637,
    "title": "Velocidade Máxima",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "1994-06-09",
    "popularity": 11.638,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/d30AWcDezR0qM6OgXovulfA4z8N.jpg",
    "runtime": 116,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "velocidade-mxima"
},

{
    "id": 311,
    "title": "Era Uma Vez na América",
    "genre_ids": [
        18,
        80
    ],
    "release_date": "1984-05-23",
    "popularity": 13.612,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/ojfEiNOBX7eqh4fDhRhNDTwb38R.jpg",
    "runtime": 229,
    "networks": [
        337
    ],
    "certification": "18",
    "slug": "era-uma-vez-na-amrica"
},

{
    "id": 71134,
    "title": "Mentiras Inocentes",
    "genre_ids": [
        18,
        53,
        9648
    ],
    "release_date": "1995-06-30",
    "popularity": 12.375,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/3zCmSYYlf4uPqaYIn1JR9UnNA74.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "mentiras-inocentes"
},

{
    "id": 4564,
    "title": "Sex and the City: O Filme",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "2008-05-12",
    "popularity": 13.064,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/tlyiCl8yHZdHdRSDjmDFDkH6AIk.jpg",
    "runtime": 148,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "sex-and-the-city-o-filme"
},

{
    "id": 818397,
    "title": "Assassino Sem Rastro",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2022-04-28",
    "popularity": 13.877,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/reugPYZl9HFJbPVlOPLdmUxoGIn.jpg",
    "runtime": 114,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "16",
    "slug": "assassino-sem-rastro"
},

{
    "id": 1255616,
    "title": "La Hierba del Diablo",
    "genre_ids": [
        27
    ],
    "release_date": "2024-03-14",
    "popularity": 11.767,
    "vote_average": 4.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/3VWB8odtO2KcXCXrFDFVNWGKmq8.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "la-hierba-del-diablo"
},

{
    "id": 58574,
    "title": "Sherlock Holmes: O Jogo de Sombras",
    "genre_ids": [
        12,
        28,
        80,
        9648
    ],
    "release_date": "2011-11-22",
    "popularity": 12.639,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/g5GC3zmpzY25Gsx0yDaq6fRwwqz.jpg",
    "runtime": 129,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "sherlock-holmes-o-jogo-de-sombras"
},

{
    "id": 1562,
    "title": "Extermínio 2",
    "genre_ids": [
        27,
        53,
        878
    ],
    "release_date": "2007-04-26",
    "popularity": 12.214,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/aaI74oimFVIUEgq4i188mG8p7KE.jpg",
    "runtime": 100,
    "networks": [
        337
    ],
    "certification": "18",
    "slug": "extermnio-2"
},

{
    "id": 832964,
    "title": "Lee",
    "genre_ids": [
        36,
        18,
        10752
    ],
    "release_date": "2024-09-12",
    "popularity": 12.074,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ffw51hmecHHdTWihncJZgmp9XH2.jpg",
    "runtime": 117,
    "networks": [],
    "certification": "N/A",
    "slug": "lee"
},

{
    "id": 899082,
    "title": "Comemoração de 20 anos de Harry Potter: De Volta a Hogwarts",
    "genre_ids": [
        99
    ],
    "release_date": "2022-01-01",
    "popularity": 12.544,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/bhY813zHKJStgUwl9kfBA3WDDPS.jpg",
    "runtime": 103,
    "networks": [
        1899,
        1825
    ],
    "certification": "10",
    "slug": "comemorao-de-20-anos-de-harry-potter-de-volta-a-hogwarts"
},

{
    "id": 13313,
    "title": "A Bela e a Fera: O Natal Encantado",
    "genre_ids": [
        16,
        10751,
        14
    ],
    "release_date": "1997-11-11",
    "popularity": 13.439,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/AhRxJQMx24cKuG1zvOhucXqIzD8.jpg",
    "runtime": 72,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-bela-e-a-fera-o-natal-encantado"
},

{
    "id": 391757,
    "title": "Quebrando Regras 3: Não Se Rendam",
    "genre_ids": [
        18,
        28
    ],
    "release_date": "2016-06-07",
    "popularity": 11.945,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zxASjkP5seyJ261mNqbGPajHjQf.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "16",
    "slug": "quebrando-regras-3-no-se-rendam"
},

{
    "id": 124459,
    "title": "O Incrível Mágico Burt Wonderstone",
    "genre_ids": [
        35
    ],
    "release_date": "2013-03-14",
    "popularity": 13.367,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/s9YtHivf0wdl8UgifsgecuV7oPZ.jpg",
    "runtime": 100,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "o-incrvel-mgico-burt-wonderstone"
},

{
    "id": 10483,
    "title": "Corrida Mortal",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "2008-08-22",
    "popularity": 13.186,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/oUOKLTn9uVjk7R4rUxSJGLDLTmv.jpg",
    "runtime": 111,
    "networks": [
        307
    ],
    "certification": "N/A",
    "slug": "corrida-mortal"
},

{
    "id": 508,
    "title": "Simplesmente Amor",
    "genre_ids": [
        35,
        10749,
        18
    ],
    "release_date": "2003-09-07",
    "popularity": 13.544,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/zoZvqAlIt6U8XWyo2ROU2SpTVAc.jpg",
    "runtime": 135,
    "networks": [
        484
    ],
    "certification": "16",
    "slug": "simplesmente-amor"
},

{
    "id": 37136,
    "title": "Corra que a Polícia Vem Aí!",
    "genre_ids": [
        35,
        80
    ],
    "release_date": "1988-12-02",
    "popularity": 13.783,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/iYCWSKbC4fwzaKEJ9QFx8MsH7bJ.jpg",
    "runtime": 86,
    "networks": [
        531,
        484,
        582,
        1853,
        2303
    ],
    "certification": "L",
    "slug": "corra-que-a-polcia-vem-a"
},

{
    "id": 574982,
    "title": "Blackout: A Batalha Final",
    "genre_ids": [
        53,
        878,
        28
    ],
    "release_date": "2019-11-21",
    "popularity": 11.554,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/ntKsMxLTgSrvRoZA6vezQ6dOQj2.jpg",
    "runtime": 127,
    "networks": [
        307
    ],
    "certification": "16",
    "slug": "blackout-a-batalha-final"
},

{
    "id": 1701,
    "title": "Con Air: A Rota da Fuga",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "1997-06-05",
    "popularity": 12.018,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/wlY0uq0EkxqBhjUQK50VEylGtSM.jpg",
    "runtime": 116,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "con-air-a-rota-da-fuga"
},

{
    "id": 1061990,
    "title": "City Hunter",
    "genre_ids": [
        28
    ],
    "release_date": "2024-04-24",
    "popularity": 13.71,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/rKqlOqoJVUh29K9V7wSFlRVumAW.jpg",
    "runtime": 105,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "city-hunter"
},

{
    "id": 8909,
    "title": "O Procurado",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2008-06-19",
    "popularity": 12.866,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/yPID9fe5zoruCIWq49lgcAaLjWa.jpg",
    "runtime": 110,
    "networks": [
        307
    ],
    "certification": "16",
    "slug": "o-procurado"
},

{
    "id": 8358,
    "title": "Náufrago",
    "genre_ids": [
        12,
        18
    ],
    "release_date": "2000-12-22",
    "popularity": 12.147,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/3w1YazNuAVFf4NF2XWxmOEPBwIZ.jpg",
    "runtime": 143,
    "networks": [
        484,
        2156
    ],
    "certification": "12",
    "slug": "nufrago"
},

{
    "id": 297802,
    "title": "Aquaman",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2018-12-07",
    "popularity": 11.851,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/4CKtfsbNqAf0uDfpLfKQyig6SDu.jpg",
    "runtime": 143,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "aquaman"
},

{
    "id": 364,
    "title": "Batman: O Retorno",
    "genre_ids": [
        28,
        14
    ],
    "release_date": "1992-06-19",
    "popularity": 12.462,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/trmToqPh8XYS6tzI2Nmv5ctfuSI.jpg",
    "runtime": 127,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "batman-o-retorno"
},

{
    "id": 8055,
    "title": "O Leitor",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2008-12-10",
    "popularity": 11.695,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/4diwcF5X2ruYdNKOne0qtuaFKml.jpg",
    "runtime": 124,
    "networks": [],
    "certification": "16",
    "slug": "o-leitor"
},

{
    "id": 785542,
    "title": "De Volta ao Mar",
    "genre_ids": [
        18
    ],
    "release_date": "2024-09-27",
    "popularity": 13.264,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/a1PVrIfWecgmzv5x799NVMssUAp.jpg",
    "runtime": 118,
    "networks": [],
    "certification": "N/A",
    "slug": "de-volta-ao-mar"
},

{
    "id": 346,
    "title": "Os Sete Samurais",
    "genre_ids": [
        28,
        18
    ],
    "release_date": "1954-04-26",
    "popularity": 12.727,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/telXEMxGtJvffm5JDsx1rQzwWlf.jpg",
    "runtime": 207,
    "networks": [],
    "certification": "10",
    "slug": "os-sete-samurais"
},

{
    "id": 615677,
    "title": "Pequenos Grandes Heróis",
    "genre_ids": [
        10751,
        28,
        14,
        35
    ],
    "release_date": "2020-12-25",
    "popularity": 12.957,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/qz8V4opEXdcY7qeU5djTdrfmuhX.jpg",
    "runtime": 97,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "pequenos-grandes-heris"
},

{
    "id": 945675,
    "title": "一周的朋友",
    "genre_ids": [
        18
    ],
    "release_date": "2022-06-18",
    "popularity": 11.501,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/9Adt7lE79voOqRzYhe4mNnHqUoo.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 41513,
    "title": "Os Smurfs",
    "genre_ids": [
        16,
        10751,
        12,
        35,
        14
    ],
    "release_date": "2011-07-29",
    "popularity": 12.372,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/4xGhRkBo791KeITsAKbWtrforxi.jpg",
    "runtime": 103,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "os-smurfs"
},

{
    "id": 1430955,
    "title": "Reflections in a Raindrop: A Student Film",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-21",
    "popularity": 13.61,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/r5Ns9LUT07dYzOamF7sWoMHyCvO.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "reflections-in-a-raindrop-a-student-film"
},

{
    "id": 646389,
    "title": "Alerta Máximo",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2023-01-12",
    "popularity": 11.637,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/6yuyOVARnEHZPBmaY1mDvF4woel.jpg",
    "runtime": 107,
    "networks": [
        2156
    ],
    "certification": "14",
    "slug": "alerta-mximo"
},

{
    "id": 10330,
    "title": "Sexta-Feira Muito Louca",
    "genre_ids": [
        35,
        10751,
        14
    ],
    "release_date": "2003-08-05",
    "popularity": 13.057,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/zcCZ7LaN6Ly20Tu6Hdw44RRiBEI.jpg",
    "runtime": 97,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "sexta-feira-muito-louca"
},

{
    "id": 1052280,
    "title": "Identidades em Jogo",
    "genre_ids": [
        35,
        9648,
        878
    ],
    "release_date": "2024-01-19",
    "popularity": 13.856,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/307q3Fe0pOeXUjw6PfNM28FG4Dv.jpg",
    "runtime": 104,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "identidades-em-jogo"
},

{
    "id": 75624,
    "title": "Naruto Shippuden o Filme: Prisão de Sangue",
    "genre_ids": [
        53,
        16,
        28,
        35,
        27,
        9648
    ],
    "release_date": "2011-07-30",
    "popularity": 12.295,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/gTQjUgNPv8uJATb8PNZNowxfehF.jpg",
    "runtime": 102,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "N/A",
    "slug": "naruto-shippuden-o-filme-priso-de-sangue"
},

{
    "id": 50544,
    "title": "Amizade Colorida",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2011-07-21",
    "popularity": 11.767,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/SMQJit9clFpQJJHFp41LYJjBMq.jpg",
    "runtime": 109,
    "networks": [
        8,
        167,
        1899,
        484,
        1796,
        1825
    ],
    "certification": "14",
    "slug": "amizade-colorida"
},

{
    "id": 1190868,
    "title": "V/H/S/Beyond",
    "genre_ids": [
        27,
        878,
        53
    ],
    "release_date": "2024-09-20",
    "popularity": 12.635,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/wXaf6VGNHIGU7qivapGOF7o4o4N.jpg",
    "runtime": 114,
    "networks": [],
    "certification": "N/A",
    "slug": "vhsbeyond"
},

{
    "id": 9602,
    "title": "Um Príncipe em Nova York",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "1988-06-29",
    "popularity": 12.21,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/i4PD8EddMJK23gQbANYdCwQeJaE.jpg",
    "runtime": 116,
    "networks": [
        8,
        1796,
        2156
    ],
    "certification": "N/A",
    "slug": "um-prncipe-em-nova-york"
},

{
    "id": 1386978,
    "title": "奇麗な、悪",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 13.438,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/5FVeykCT1pRTKiOPSdy8FZYXv6P.jpg",
    "runtime": 76,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 14128,
    "title": "Cinderela II: Os Sonhos Se Realizam",
    "genre_ids": [
        10751,
        16,
        10749,
        14
    ],
    "release_date": "2002-02-23",
    "popularity": 12.541,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/bDYXOB4JMnVI6Rx3HGuJmTluQyN.jpg",
    "runtime": 73,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "cinderela-ii-os-sonhos-se-realizam"
},

{
    "id": 530254,
    "title": "Garota em Chamas: Rebelião",
    "genre_ids": [
        28,
        9648,
        878
    ],
    "release_date": "2018-06-27",
    "popularity": 13.78,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/7RCLciIv2T9cXhliA0dHyi5EJsT.jpg",
    "runtime": 125,
    "networks": [
        119,
        464,
        2356
    ],
    "certification": "N/A",
    "slug": "garota-em-chamas-rebelio"
},

{
    "id": 12244,
    "title": "9: A Salvação",
    "genre_ids": [
        28,
        12,
        16,
        878,
        53
    ],
    "release_date": "2009-08-19",
    "popularity": 11.932,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/6fe0PbMkDSaGEM6kj5RM5ToMuAL.jpg",
    "runtime": 79,
    "networks": [],
    "certification": "12",
    "slug": "9-a-salvao"
},

{
    "id": 1631,
    "title": "Uma Adolescente de Verdade",
    "genre_ids": [
        18
    ],
    "release_date": "1976-01-01",
    "popularity": 11.419,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/sYLZxnRBoNekrbcLaEzBJSmRRh8.jpg",
    "runtime": 90,
    "networks": [
        1973
    ],
    "certification": "N/A",
    "slug": "uma-adolescente-de-verdade"
},

{
    "id": 943542,
    "title": "Stealing Lust",
    "genre_ids": [
        10749
    ],
    "release_date": "2021-10-07",
    "popularity": 12.071,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bhFR7ZMH96Q4LU5KKlHQHvErnS6.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "stealing-lust"
},

{
    "id": 635910,
    "title": "Drácula: A Última Viagem do Deméter",
    "genre_ids": [
        14,
        27,
        53
    ],
    "release_date": "2023-08-09",
    "popularity": 12.017,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/bojgIXdqn5VbvO8EtQVsLXrepSb.jpg",
    "runtime": 119,
    "networks": [
        119,
        307
    ],
    "certification": "16",
    "slug": "drcula-a-ltima-viagem-do-demter"
},

{
    "id": 744857,
    "title": "O Mal que Nos Habita",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2023-10-05",
    "popularity": 11.552,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/t6cWfm0o5TzCa3nHtHhXpzjBc8V.jpg",
    "runtime": 99,
    "networks": [
        8,
        1796
    ],
    "certification": "18",
    "slug": "o-mal-que-nos-habita"
},

{
    "id": 52629,
    "title": "O Inferno",
    "genre_ids": [
        28,
        80,
        37,
        35,
        18
    ],
    "release_date": "2010-09-03",
    "popularity": 13.363,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/vry7NyLM6I0fL53H2KxCX4uAz5H.jpg",
    "runtime": 148,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "o-inferno"
},

{
    "id": 453,
    "title": "Uma Mente Brilhante",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2001-12-14",
    "popularity": 13.184,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/8K5W9QnNT7r1V9GuJ5z5KlrROkd.jpg",
    "runtime": 135,
    "networks": [],
    "certification": "12",
    "slug": "uma-mente-brilhante"
},

{
    "id": 333484,
    "title": "Sete Homens e Um Destino",
    "genre_ids": [
        12,
        28,
        37
    ],
    "release_date": "2016-09-14",
    "popularity": 11.692,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/vz0XUPOYLsGAOnvuRbcRTFDTY7a.jpg",
    "runtime": 133,
    "networks": [
        2142,
        2141,
        2156
    ],
    "certification": "14",
    "slug": "sete-homens-e-um-destino"
},

{
    "id": 93685,
    "title": "Swingers",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2002-10-01",
    "popularity": 12.863,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/vsctdCbDHApN003Fs3QzJB8Nl9B.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "swingers"
},

{
    "id": 1372,
    "title": "Diamante de Sangue",
    "genre_ids": [
        18,
        53,
        28
    ],
    "release_date": "2006-12-08",
    "popularity": 13.708,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/hPxJvcZJiuDdYCUzwCbOCzsKAOf.jpg",
    "runtime": 143,
    "networks": [
        1899
    ],
    "certification": "16",
    "slug": "diamante-de-sangue"
},

{
    "id": 36955,
    "title": "True Lies",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "1994-07-15",
    "popularity": 12.455,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ngngzauEqI8ffo5YUSSNKaEGZ0R.jpg",
    "runtime": 141,
    "networks": [],
    "certification": "14",
    "slug": "true-lies"
},

{
    "id": 1432233,
    "title": "Bhava Theera Yana",
    "genre_ids": [],
    "release_date": "2025-02-21",
    "popularity": 13.535,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/iHlV6VSEl4Jhwz3GJQYWgbDdaqq.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "bhava-theera-yana"
},

{
    "id": 59068,
    "title": "Irmã Emanuelle",
    "genre_ids": [
        18,
        80,
        27
    ],
    "release_date": "1977-08-10",
    "popularity": 12.142,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/khP2SeMNSCBhZebQnmXG7SIUP72.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "irm-emanuelle"
},

{
    "id": 75612,
    "title": "Oblivion",
    "genre_ids": [
        28,
        878,
        12,
        9648
    ],
    "release_date": "2013-04-10",
    "popularity": 11.846,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/qL1qC0BCIgOvCLKyVj8bIeijMY9.jpg",
    "runtime": 124,
    "networks": [
        119,
        307
    ],
    "certification": "12",
    "slug": "oblivion"
},

{
    "id": 942411,
    "title": "मिसिज़",
    "genre_ids": [
        18
    ],
    "release_date": "2023-11-17",
    "popularity": 12.725,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/e2coys6g8PRqiP0sHEA2T6uLkEf.jpg",
    "runtime": 111,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 28209,
    "title": "Emmanuelle 2 - Antivirgem",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1975-12-15",
    "popularity": 13.256,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/tFFmKV9jnzzTseJ8kH4I4zXTWKU.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "emmanuelle-2-antivirgem"
},

{
    "id": 1830,
    "title": "O Senhor das Armas",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "2005-09-16",
    "popularity": 11.353,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/yLxbDZ1h7wbHo7mkyX5AR9hjODe.jpg",
    "runtime": 122,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "o-senhor-das-armas"
},

{
    "id": 107846,
    "title": "Rota de Fuga",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2013-10-09",
    "popularity": 12.955,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/indS2SQtlzoIyfF4BKw1Azuw09Q.jpg",
    "runtime": 116,
    "networks": [
        8,
        1796,
        2156
    ],
    "certification": "14",
    "slug": "rota-de-fuga"
},

{
    "id": 14001,
    "title": "Gritos Mortais",
    "genre_ids": [
        27
    ],
    "release_date": "2007-03-16",
    "popularity": 11.5,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/v6XHNF5S5wZyNnmV9tFRy4rYZh4.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "16",
    "slug": "gritos-mortais"
},

{
    "id": 1207830,
    "title": "Pets em Ação!",
    "genre_ids": [
        16,
        12,
        35,
        10751
    ],
    "release_date": "2024-05-01",
    "popularity": 13.049,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/15qZcDm6v9QB8Wcx8su3KNOPKH2.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "L",
    "slug": "pets-em-ao"
},

{
    "id": 7518,
    "title": "Os Sem-Floresta",
    "genre_ids": [
        10751,
        35,
        16
    ],
    "release_date": "2006-05-17",
    "popularity": 12.371,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/brRa33QT2jMwMHyjqh4N3EPq1zO.jpg",
    "runtime": 83,
    "networks": [
        119,
        307,
        2156
    ],
    "certification": "N/A",
    "slug": "os-sem-floresta"
},

{
    "id": 558,
    "title": "Homem-Aranha 2",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2004-06-25",
    "popularity": 12.29,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/y06FivvCfqapHB3iETOtbAqWdkD.jpg",
    "runtime": 127,
    "networks": [
        119,
        167,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "homem-aranha-2"
},

{
    "id": 1281826,
    "title": "Manobra Arriscada",
    "genre_ids": [
        28,
        18,
        10749
    ],
    "release_date": "2024-08-07",
    "popularity": 13.607,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/7oxk7Qic7F6iISvNG5rt8DGbrWV.jpg",
    "runtime": 109,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "manobra-arriscada"
},

{
    "id": 1131038,
    "title": "ஈடாட்டம்",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 11.623,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/2vR7ncR0LrYgeYXIKgJ9r2UmV9u.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1214509,
    "title": "Natureza Violenta",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-05-31",
    "popularity": 12.634,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/7YYUlCEY97nv5g5EfH7WoxZeXAF.jpg",
    "runtime": 94,
    "networks": [
        2156
    ],
    "certification": "N/A",
    "slug": "natureza-violenta"
},

{
    "id": 27581,
    "title": "Os Outros Caras",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2010-08-06",
    "popularity": 11.763,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/gHzt2VR585107h4E1f8yva0s2P0.jpg",
    "runtime": 107,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "12",
    "slug": "os-outros-caras"
},

{
    "id": 662402,
    "title": "Black Tea - O Aroma do Amor",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-02-28",
    "popularity": 11.928,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/wcPkmO4T3VioO0SjDFiVttaDp2u.jpg",
    "runtime": 110,
    "networks": [
        2157
    ],
    "certification": "N/A",
    "slug": "black-tea-o-aroma-do-amor"
},

{
    "id": 1057491,
    "title": "Atrevida: A Paixão Não Tem Regras",
    "genre_ids": [
        18
    ],
    "release_date": "2023-02-14",
    "popularity": 12.538,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/8SS2egXayE9MuarPqzrbpj87ac4.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "18",
    "slug": "atrevida-a-paixo-no-tem-regras"
},

{
    "id": 748230,
    "title": "A Hora do Vampiro",
    "genre_ids": [
        27
    ],
    "release_date": "2024-10-03",
    "popularity": 13.437,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/ybGTVT8kDF4vUi2iew9e2RPvJWm.jpg",
    "runtime": 113,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "16",
    "slug": "a-hora-do-vampiro"
},

{
    "id": 10530,
    "title": "Pocahontas",
    "genre_ids": [
        12,
        16,
        10751,
        10749
    ],
    "release_date": "1995-06-14",
    "popularity": 12.016,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/q5MYFXVy8UQ1ds76fdJs6AJbMzv.jpg",
    "runtime": 81,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "pocahontas"
},

{
    "id": 411088,
    "title": "Um Contratempo",
    "genre_ids": [
        18,
        9648,
        53
    ],
    "release_date": "2017-01-06",
    "popularity": 13.78,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/pOnbhr6DbPgKjvcNexbRdmR37De.jpg",
    "runtime": 107,
    "networks": [],
    "certification": "14",
    "slug": "um-contratempo"
},

{
    "id": 429415,
    "title": "Extinção",
    "genre_ids": [
        28,
        18,
        878,
        53
    ],
    "release_date": "2018-07-15",
    "popularity": 11.285,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/9nPnDDPrSgMw7TUrYShiZ3Ud07.jpg",
    "runtime": 95,
    "networks": [
        8
    ],
    "certification": "16",
    "slug": "extino"
},

{
    "id": 766836,
    "title": "아들의 여친 아빠의 여친",
    "genre_ids": [
        10749
    ],
    "release_date": "2020-11-13",
    "popularity": 12.07,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/sDAiTv1YkOm6sLtUIhOTAPPQiQZ.jpg",
    "runtime": 75,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 50124,
    "title": "Monella, a Travessa",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "1998-06-01",
    "popularity": 11.414,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/odF7LueIXfAWrEngNESShkvnbbx.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "N/A",
    "slug": "monella-a-travessa"
},

{
    "id": 1129610,
    "title": "劇場総集編ぼっち・ざ・ろっく！Re:",
    "genre_ids": [
        16,
        35,
        10402
    ],
    "release_date": "2024-06-07",
    "popularity": 12.204,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/eO7TatOvFQbRvdKbAEjKu7Tl7M4.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "re"
},

{
    "id": 59053,
    "title": "La Riffa",
    "genre_ids": [
        18
    ],
    "release_date": "1991-11-15",
    "popularity": 11.692,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/fGhb9nNv91xr9tev8kaEZ7hZD6G.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "N/A",
    "slug": "la-riffa"
},

{
    "id": 390043,
    "title": "Dupla Explosiva",
    "genre_ids": [
        28,
        35,
        80,
        53
    ],
    "release_date": "2017-08-16",
    "popularity": 13.179,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/x4VSZIJq9vCzcubz1PYOap5Zp15.jpg",
    "runtime": 118,
    "networks": [
        8,
        307,
        1796,
        2156
    ],
    "certification": "14",
    "slug": "dupla-explosiva"
},

{
    "id": 338970,
    "title": "Tomb Raider: A Origem",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2018-03-05",
    "popularity": 12.454,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/wa0GU7H38ZBXHnzpInqkEHpJm84.jpg",
    "runtime": 122,
    "networks": [],
    "certification": "14",
    "slug": "tomb-raider-a-origem"
},

{
    "id": 945937,
    "title": "Charlie em Ação",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "2023-12-08",
    "popularity": 12.855,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/5ZVU2LwkJ46weQwke71jGcky6Rt.jpg",
    "runtime": 90,
    "networks": [
        484,
        2106,
        2107
    ],
    "certification": "16",
    "slug": "charlie-em-ao"
},

{
    "id": 531219,
    "title": "Convenção das Bruxas",
    "genre_ids": [
        10751,
        35,
        14
    ],
    "release_date": "2020-10-26",
    "popularity": 13.705,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/orrJiQs30G6zSkT8is4QOAtRpFM.jpg",
    "runtime": 104,
    "networks": [
        484
    ],
    "certification": "10",
    "slug": "conveno-das-bruxas"
},

{
    "id": 109428,
    "title": "A Morte do Demônio",
    "genre_ids": [
        27
    ],
    "release_date": "2013-04-05",
    "popularity": 13.352,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/7b2oD1oxUxdDft486Q7oPNPzMlf.jpg",
    "runtime": 91,
    "networks": [
        1899,
        1825
    ],
    "certification": "18",
    "slug": "a-morte-do-demnio"
},

{
    "id": 27576,
    "title": "Salt",
    "genre_ids": [
        28,
        9648,
        53
    ],
    "release_date": "2010-07-21",
    "popularity": 12.137,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/vJMUB623nnYKDF9IFaetzigGqxm.jpg",
    "runtime": 100,
    "networks": [
        8,
        1899,
        1796,
        1825
    ],
    "certification": "14",
    "slug": "salt"
},

{
    "id": 760873,
    "title": "Refúgio",
    "genre_ids": [
        878,
        53
    ],
    "release_date": "2021-08-26",
    "popularity": 13.534,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/vVTvlITAqPvH3fU0opjz08vakyc.jpg",
    "runtime": 104,
    "networks": [],
    "certification": "16",
    "slug": "refgio"
},

{
    "id": 11008,
    "title": "Pelotão em Apuros",
    "genre_ids": [
        12,
        35,
        10751
    ],
    "release_date": "1995-03-24",
    "popularity": 13.853,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/uycZHrly1ICGjR2ESI3BSghMlAy.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "peloto-em-apuros"
},

{
    "id": 1001835,
    "title": "Mulher?",
    "genre_ids": [
        878,
        9648,
        53
    ],
    "release_date": "2022-08-12",
    "popularity": 11.549,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/951oQ2gBIK3jjp02Dqq3fxm4qYs.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "N/A",
    "slug": "mulher"
},

{
    "id": 44683,
    "title": "Tinker Bell e o Resgate da Fada",
    "genre_ids": [
        16,
        12,
        10751,
        14
    ],
    "release_date": "2010-07-29",
    "popularity": 11.843,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/yY69Kxm9QP9mHL9Awswxgqr3q1C.jpg",
    "runtime": 76,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "tinker-bell-e-o-resgate-da-fada"
},

{
    "id": 339964,
    "title": "Valerian e a Cidade dos Mil Planetas",
    "genre_ids": [
        12,
        878,
        28
    ],
    "release_date": "2017-07-20",
    "popularity": 12.953,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/x69DC2NnchOhNykhbkjgpuqC2SD.jpg",
    "runtime": 137,
    "networks": [
        119
    ],
    "certification": "12",
    "slug": "valerian-e-a-cidade-dos-mil-planetas"
},

{
    "id": 610150,
    "title": "Dragon Ball Super: Super Hero",
    "genre_ids": [
        16,
        878,
        28
    ],
    "release_date": "2022-06-11",
    "popularity": 13.253,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/FiqBRypTDyHzqcxdbpPb3ddFep.jpg",
    "runtime": 100,
    "networks": [
        119,
        283,
        1968
    ],
    "certification": "12",
    "slug": "dragon-ball-super-super-hero"
},

{
    "id": 603661,
    "title": "O Jogo de Amor – \"Odio\"",
    "genre_ids": [
        18,
        35,
        10749
    ],
    "release_date": "2021-12-09",
    "popularity": 12.717,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/nWTeXUGWsSDoDLC4UucMeM07gA5.jpg",
    "runtime": 102,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "o-jogo-de-amor-odio"
},

{
    "id": 2123,
    "title": "Eu, Eu Mesmo & Irene",
    "genre_ids": [
        35
    ],
    "release_date": "2000-06-22",
    "popularity": 11.212,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/gzoeXKICGubWgdQ0EYRNZceVpPs.jpg",
    "runtime": 117,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "eu-eu-mesmo-irene"
},

{
    "id": 295830,
    "title": "Ataque dos Titãs",
    "genre_ids": [
        27,
        28,
        878
    ],
    "release_date": "2015-08-01",
    "popularity": 11.352,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/hQdsjMnSjB5IY1uMViG8B6HdiKn.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "ataque-dos-tits"
},

{
    "id": 126963,
    "title": "Dragon Ball Z: A Batalha dos Deuses",
    "genre_ids": [
        16,
        28,
        878
    ],
    "release_date": "2013-03-30",
    "popularity": 13.043,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/sF8ZL7ALPQWqvlg0FPE2fgdXOkR.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "10",
    "slug": "dragon-ball-z-a-batalha-dos-deuses"
},

{
    "id": 26466,
    "title": "Triângulo do Medo",
    "genre_ids": [
        27
    ],
    "release_date": "2009-10-16",
    "popularity": 12.287,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/rH2VuwTwhISorOVllsDaMCGR7N0.jpg",
    "runtime": 99,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "tringulo-do-medo"
},

{
    "id": 102783,
    "title": "La Fille de 15 ans",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1989-09-13",
    "popularity": 12.631,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/n9LXtifW96b12HVfW1WbQVhas0e.jpg",
    "runtime": 86,
    "networks": [],
    "certification": "N/A",
    "slug": "la-fille-de-15-ans"
},

{
    "id": 479455,
    "title": "MIB Homens de Preto: Internacional",
    "genre_ids": [
        35,
        878,
        28
    ],
    "release_date": "2019-06-12",
    "popularity": 11.622,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/mxopI5VyShCeAlJf3X4Q1T40Bub.jpg",
    "runtime": 115,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "mib-homens-de-preto-internacional"
},

{
    "id": 115,
    "title": "O Grande Lebowski",
    "genre_ids": [
        35,
        80
    ],
    "release_date": "1998-03-06",
    "popularity": 11.498,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/hR3VJEf7t8WdFD4gLIzpMozfG4T.jpg",
    "runtime": 117,
    "networks": [],
    "certification": "14",
    "slug": "o-grande-lebowski"
},

{
    "id": 423502,
    "title": "내 친구의 엄마",
    "genre_ids": [
        10749
    ],
    "release_date": "2016-10-12",
    "popularity": 13.607,
    "vote_average": 3.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/19ly5EebC8LlejpbWWSBEMqtJz1.jpg",
    "runtime": 78,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 339692,
    "title": "Sem Perdão",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "2017-07-13",
    "popularity": 12.368,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/pxsM4bO0947S9o0s9YGPtc4cRVl.jpg",
    "runtime": 121,
    "networks": [
        47,
        2106,
        2107
    ],
    "certification": "16",
    "slug": "sem-perdo"
},

{
    "id": 239571,
    "title": "O Melhor de Mim",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2014-10-15",
    "popularity": 11.759,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/5Jdy0LnPZsdUTGnvCqpkvQwydud.jpg",
    "runtime": 118,
    "networks": [],
    "certification": "14",
    "slug": "o-melhor-de-mim"
},

{
    "id": 2502,
    "title": "A Supremacia Bourne",
    "genre_ids": [
        28,
        18,
        53
    ],
    "release_date": "2004-07-23",
    "popularity": 11.283,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/h8Rr4ZMeSTNbCpgK5CNV3SZmFjA.jpg",
    "runtime": 108,
    "networks": [
        307
    ],
    "certification": "14",
    "slug": "a-supremacia-bourne"
},

{
    "id": 13053,
    "title": "Bolt: Supercão",
    "genre_ids": [
        16,
        10751,
        12,
        35
    ],
    "release_date": "2008-11-21",
    "popularity": 13.434,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/puAIiFICbqLehrE8X884ZbNxI8N.jpg",
    "runtime": 96,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "bolt-superco"
},

{
    "id": 9982,
    "title": "O Galinho Chicken Little",
    "genre_ids": [
        16,
        10751,
        35
    ],
    "release_date": "2005-11-04",
    "popularity": 12.536,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/fUCBkuNWpAIfH6yhuRzujy5Zjv0.jpg",
    "runtime": 81,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "o-galinho-chicken-little"
},

{
    "id": 45139,
    "title": "Jesus - Segundo o Evangelho de Lucas",
    "genre_ids": [
        18,
        14
    ],
    "release_date": "1979-10-19",
    "popularity": 11.145,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/lKveT74WCfqz8Bo56qFw8H6Dujz.jpg",
    "runtime": 117,
    "networks": [],
    "certification": "N/A",
    "slug": "jesus-segundo-o-evangelho-de-lucas"
},

{
    "id": 289,
    "title": "Casablanca",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1943-01-15",
    "popularity": 12.428,
    "vote_average": 8.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
    "runtime": 102,
    "networks": [
        1899,
        499,
        1825
    ],
    "certification": "12",
    "slug": "casablanca"
},

{
    "id": 60304,
    "title": "João e Maria: Caçadores de Bruxas",
    "genre_ids": [
        14,
        27,
        28
    ],
    "release_date": "2013-01-17",
    "popularity": 12.07,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/pNAOG8mvstBhUE1jhbGkB87G2VV.jpg",
    "runtime": 88,
    "networks": [
        307,
        2142,
        2141,
        2156
    ],
    "certification": "14",
    "slug": "joo-e-maria-caadores-de-bruxas"
},

{
    "id": 25475,
    "title": "Tinker Bell e o Tesouro Perdido",
    "genre_ids": [
        16,
        10751,
        12,
        14
    ],
    "release_date": "2009-09-03",
    "popularity": 11.687,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/bKTfGR1ksZGusE1fsqr7WqzUGuw.jpg",
    "runtime": 81,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "tinker-bell-e-o-tesouro-perdido"
},

{
    "id": 4638,
    "title": "Chumbo Grosso",
    "genre_ids": [
        80,
        28,
        35
    ],
    "release_date": "2007-02-14",
    "popularity": 11.928,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/wivXixTuRcXuW6FgmcB5yIeF3S2.jpg",
    "runtime": 121,
    "networks": [],
    "certification": "16",
    "slug": "chumbo-grosso"
},

{
    "id": 274857,
    "title": "Rei Arthur: A Lenda da Espada",
    "genre_ids": [
        28,
        18,
        14
    ],
    "release_date": "2017-05-10",
    "popularity": 12.01,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/vVvc4XRnUMGBMAhtWVzHdySIJzm.jpg",
    "runtime": 126,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "rei-arthur-a-lenda-da-espada"
},

{
    "id": 20453,
    "title": "3 Idiotas",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2009-12-23",
    "popularity": 13.78,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/gmSRHU1Wtiatj8KoyVt8rT9ockx.jpg",
    "runtime": 164,
    "networks": [],
    "certification": "12",
    "slug": "3-idiotas"
},

{
    "id": 5915,
    "title": "Na Natureza Selvagem",
    "genre_ids": [
        12,
        18
    ],
    "release_date": "2007-09-21",
    "popularity": 12.137,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/bv2od9QMVaojT9lI02Uk47Z40Ue.jpg",
    "runtime": 148,
    "networks": [],
    "certification": "N/A",
    "slug": "na-natureza-selvagem"
},

{
    "id": 1317218,
    "title": "Sr. Crocket",
    "genre_ids": [
        27
    ],
    "release_date": "2024-09-26",
    "popularity": 13.525,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/t5TV6Y8yKZXTtg8Abf4uBGVH9mD.jpg",
    "runtime": 88,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "sr-crocket"
},

{
    "id": 978592,
    "title": "A Teia",
    "genre_ids": [
        9648,
        53,
        80,
        18
    ],
    "release_date": "2024-03-21",
    "popularity": 11.411,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/f4pxgFHotbm8rzIPxW1zVvugYOb.jpg",
    "runtime": 112,
    "networks": [],
    "certification": "16",
    "slug": "a-teia"
},

{
    "id": 1217585,
    "title": "Outbreak",
    "genre_ids": [
        27,
        9648,
        53
    ],
    "release_date": "2025-02-20",
    "popularity": 12.833,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/86veNrARvGRyBRiGT94Lxpy5Z4S.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "outbreak"
},

{
    "id": 9291,
    "title": "Golpe Baixo",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2005-05-27",
    "popularity": 13.176,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/eS83NmaqzbPRICako4P8p3u70eg.jpg",
    "runtime": 113,
    "networks": [
        167,
        484
    ],
    "certification": "14",
    "slug": "golpe-baixo"
},

{
    "id": 565426,
    "title": "Para Todos os Garotos: P.S. Ainda Amo Você",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "2020-02-03",
    "popularity": 11.063,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/tpdtbzeEImp5eT5wmwhVHhbklAk.jpg",
    "runtime": 102,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "para-todos-os-garotos-ps-ainda-amo-voc"
},

{
    "id": 1005076,
    "title": "Duchess",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2024-08-01",
    "popularity": 13.85,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/ktQeAXWnTTL8tXdqSYHiRyvzLrw.jpg",
    "runtime": 113,
    "networks": [],
    "certification": "N/A",
    "slug": "duchess"
},

{
    "id": 522444,
    "title": "Crocodilos: A Morte Te Espera",
    "genre_ids": [
        27,
        28,
        12
    ],
    "release_date": "2020-07-09",
    "popularity": 12.204,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/9I2ATBaOfwXo23vSBfEAQ3uZhGV.jpg",
    "runtime": 98,
    "networks": [
        582
    ],
    "certification": "14",
    "slug": "crocodilos-a-morte-te-espera"
},

{
    "id": 49047,
    "title": "Gravidade",
    "genre_ids": [
        878,
        53,
        18
    ],
    "release_date": "2013-10-03",
    "popularity": 13.351,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/eHLufJ1bHy4PtEBJdPSTu4jIhZ0.jpg",
    "runtime": 91,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "gravidade"
},

{
    "id": 1376845,
    "title": "To Thy Rest",
    "genre_ids": [
        9648,
        53,
        27
    ],
    "release_date": "2025-02-21",
    "popularity": 13.699,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tr6vfUx6xNNtFzfti5cWJXyUeOH.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "to-thy-rest"
},

{
    "id": 1146167,
    "title": "Istri Majikan",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "N/A",
    "popularity": 11.834,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/8ukXmXH3FTH4ErXQafQrZVKiCJc.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "istri-majikan"
},

{
    "id": 5175,
    "title": "A Hora do Rush 2",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2001-08-03",
    "popularity": 13.253,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/q8tqJRz8MQ5CS0gtlVB1CH12Wvv.jpg",
    "runtime": 90,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "a-hora-do-rush-2"
},

{
    "id": 22894,
    "title": "Legião",
    "genre_ids": [
        27,
        28,
        14
    ],
    "release_date": "2010-01-21",
    "popularity": 11.548,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/4w83G68shLcuFcHaWfdPxPu1pUA.jpg",
    "runtime": 100,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "legio"
},

{
    "id": 660360,
    "title": "Noryang: Deadly Sea",
    "genre_ids": [
        28,
        36,
        18,
        10752
    ],
    "release_date": "2023-12-20",
    "popularity": 11.21,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/WqgLrAbPnEfgn7WP7J2IvL1Z9V.jpg",
    "runtime": 153,
    "networks": [],
    "certification": "N/A",
    "slug": "noryang-deadly-sea"
},

{
    "id": 1209770,
    "title": "Bedspacer",
    "genre_ids": [
        53,
        18
    ],
    "release_date": "2024-01-05",
    "popularity": 12.949,
    "vote_average": 4.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/isYR72nLhh2zyBbOHi2gea7u4O6.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "N/A",
    "slug": "bedspacer"
},

{
    "id": 158015,
    "title": "Uma Noite de Crime",
    "genre_ids": [
        878,
        27,
        53
    ],
    "release_date": "2013-05-31",
    "popularity": 12.716,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/s2S7u7tSyqavp1d81dZkzIEjIwD.jpg",
    "runtime": 85,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "14",
    "slug": "uma-noite-de-crime"
},

{
    "id": 8456,
    "title": "Quebrando Regras",
    "genre_ids": [
        18,
        28
    ],
    "release_date": "2008-03-04",
    "popularity": 12.628,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/4xKCipkzg3xnGbkOUxU3xByRZAv.jpg",
    "runtime": 115,
    "networks": [
        307,
        2156
    ],
    "certification": "14",
    "slug": "quebrando-regras"
},

{
    "id": 483906,
    "title": "Polar",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "2019-01-25",
    "popularity": 13.03,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/2btxGF270fxOeNJInRNnFtZGkAA.jpg",
    "runtime": 118,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "polar"
},

{
    "id": 923,
    "title": "Despertar dos Mortos",
    "genre_ids": [
        27
    ],
    "release_date": "1978-09-02",
    "popularity": 11.001,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/d2NRnhmydJopoYpiDvfrujYrBMk.jpg",
    "runtime": 139,
    "networks": [
        499
    ],
    "certification": "18",
    "slug": "despertar-dos-mortos"
},

{
    "id": 340382,
    "title": "Ataque dos Titãs 2: O Fim do Mundo",
    "genre_ids": [
        27,
        878,
        28
    ],
    "release_date": "2015-09-01",
    "popularity": 11.351,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/43UbSfOZUV2MeR2QtJPEuG5O2L5.jpg",
    "runtime": 87,
    "networks": [],
    "certification": "N/A",
    "slug": "ataque-dos-tits-2-o-fim-do-mundo"
},

{
    "id": 191295,
    "title": "少女潘金蓮",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "1994-06-22",
    "popularity": 11.611,
    "vote_average": 4.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/7dwj4yeUd95ZLjavBmuiMuQLGvX.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1891,
    "title": "Guerra nas Estrelas: O Império Contra-Ataca",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "1980-05-20",
    "popularity": 12.278,
    "vote_average": 8.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/dLGT8b4Ut10z44uYLaip4QiwKta.jpg",
    "runtime": 124,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "guerra-nas-estrelas-o-imprio-contra-ataca"
},

{
    "id": 276907,
    "title": "Lendas do Crime",
    "genre_ids": [
        80,
        53
    ],
    "release_date": "2015-09-09",
    "popularity": 11.469,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/bIlkCztaqGtGOBSrFHnHG0qCZmU.jpg",
    "runtime": 131,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "lendas-do-crime"
},

{
    "id": 19994,
    "title": "Garota Infernal",
    "genre_ids": [
        27,
        35
    ],
    "release_date": "2009-09-18",
    "popularity": 12.368,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/6UQm6Kym7dzHl22eGJI5zlvP9s2.jpg",
    "runtime": 107,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "garota-infernal"
},

{
    "id": 440,
    "title": "Alien vs. Predador 2",
    "genre_ids": [
        28,
        878,
        53,
        27
    ],
    "release_date": "2007-12-25",
    "popularity": 13.603,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/gEvWA6QLo7qPmr0eR06QNNLsbok.jpg",
    "runtime": 94,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "alien-vs-predador-2"
},

{
    "id": 1308757,
    "title": "Armadilha em Alto Mar",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-07-26",
    "popularity": 13.426,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/ex7BjWQvSEnubQzCyxElw2qi1Zx.jpg",
    "runtime": 88,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "armadilha-em-alto-mar"
},

{
    "id": 9655,
    "title": "Ela é o Cara",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2006-03-17",
    "popularity": 11.753,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/ooZWyBiibhT8il0MGjOYQYYJcsT.jpg",
    "runtime": 112,
    "networks": [
        119
    ],
    "certification": "12",
    "slug": "ela-o-cara"
},

{
    "id": 8095,
    "title": "Cleópatra",
    "genre_ids": [
        18,
        36,
        10749
    ],
    "release_date": "1963-06-12",
    "popularity": 11.269,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zGz6N0Gj9LWvrRrUTgkGqmxqr5s.jpg",
    "runtime": 248,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "clepatra"
},

{
    "id": 238636,
    "title": "Uma Noite de Crime: Anarquia",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2014-07-17",
    "popularity": 12.533,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/ht1MWx0ZMgqKzvAUBp1WhsOQLWN.jpg",
    "runtime": 103,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "uma-noite-de-crime-anarquia"
},

{
    "id": 10501,
    "title": "O Caminho para El Dorado",
    "genre_ids": [
        10751,
        12,
        16,
        35,
        14
    ],
    "release_date": "2000-03-31",
    "popularity": 11.686,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/oaj2kKqOyFEo4Mj2Y12rwbjgv8u.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "L",
    "slug": "o-caminho-para-el-dorado"
},

{
    "id": 7446,
    "title": "Trovão Tropical",
    "genre_ids": [
        28,
        35,
        12,
        10752
    ],
    "release_date": "2008-08-09",
    "popularity": 12.008,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/wy7GVLCGTmOgbGvIMChVMNOMNao.jpg",
    "runtime": 107,
    "networks": [],
    "certification": "16",
    "slug": "trovo-tropical"
},

{
    "id": 1429995,
    "title": "Tokyo Nights",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2025-02-14",
    "popularity": 11.143,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/ceKHUMOODyFDdpvrvHE4avfxrZV.jpg",
    "runtime": 70,
    "networks": [],
    "certification": "N/A",
    "slug": "tokyo-nights"
},

{
    "id": 669444,
    "title": "Les chevaliers du fiel dynamitent 2019",
    "genre_ids": [],
    "release_date": "2020-03-01",
    "popularity": 11.404,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/3S8K8GJ9w67z845XkVPy9pniVu7.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "les-chevaliers-du-fiel-dynamitent-2019"
},

{
    "id": 225886,
    "title": "Sex Tape: Perdido na Nuvem",
    "genre_ids": [
        35
    ],
    "release_date": "2014-07-17",
    "popularity": 12.418,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/p7OIKWMWJWziaaX5PIWKDVeA6Of.jpg",
    "runtime": 94,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "sex-tape-perdido-na-nuvem"
},

{
    "id": 13448,
    "title": "Anjos e Demônios",
    "genre_ids": [
        53,
        9648
    ],
    "release_date": "2009-04-23",
    "popularity": 12.07,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/v9LR609qNP3ks7BvrUEO2hOyTQ6.jpg",
    "runtime": 138,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "anjos-e-demnios"
},

{
    "id": 467938,
    "title": "Vingança",
    "genre_ids": [
        28,
        53,
        27
    ],
    "release_date": "2018-02-07",
    "popularity": 11.924,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/tUMY2i0e0KUfslvjBBnRYGBxhL4.jpg",
    "runtime": 109,
    "networks": [
        11,
        201
    ],
    "certification": "18",
    "slug": "vingana"
},

{
    "id": 788,
    "title": "Uma Babá Quase Perfeita",
    "genre_ids": [
        35,
        18,
        10751
    ],
    "release_date": "1993-11-24",
    "popularity": 12.13,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/cWEJU79e9ijwAUNhO4Ud8vRoWi0.jpg",
    "runtime": 125,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "uma-bab-quase-perfeita"
},

{
    "id": 935271,
    "title": "Depois do Fim do Mundo",
    "genre_ids": [
        878,
        28
    ],
    "release_date": "2022-03-01",
    "popularity": 13.778,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/wPOwalo1J7F6PxM8WsiVssKqKqh.jpg",
    "runtime": 84,
    "networks": [
        47,
        683
    ],
    "certification": "14",
    "slug": "depois-do-fim-do-mundo"
},

{
    "id": 22538,
    "title": "Scott Pilgrim Contra o Mundo",
    "genre_ids": [
        28,
        35,
        10749
    ],
    "release_date": "2010-08-12",
    "popularity": 12.832,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/l7EGWWmBiXsL7L2yBV69shGUclH.jpg",
    "runtime": 113,
    "networks": [],
    "certification": "12",
    "slug": "scott-pilgrim-contra-o-mundo"
},

{
    "id": 282035,
    "title": "A Múmia",
    "genre_ids": [
        14,
        53,
        28,
        12,
        27
    ],
    "release_date": "2017-06-06",
    "popularity": 11.056,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/vH9Hd7njePEe6xnRrYYaDmF2yqX.jpg",
    "runtime": 107,
    "networks": [
        8,
        119,
        307,
        1796
    ],
    "certification": "12",
    "slug": "a-mmia"
},

{
    "id": 279,
    "title": "Amadeus",
    "genre_ids": [
        36,
        10402,
        18
    ],
    "release_date": "1984-09-19",
    "popularity": 13.175,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/1n5VUlCqgmVax1adxGZm8oCFaKc.jpg",
    "runtime": 180,
    "networks": [],
    "certification": "14",
    "slug": "amadeus"
},

{
    "id": 533,
    "title": "Wallace & Gromit: A Batalha dos Vegetais",
    "genre_ids": [
        12,
        16,
        35,
        10751
    ],
    "release_date": "2005-09-15",
    "popularity": 13.35,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/o06EMgTpbObtQabzKCHwU1QS0Y6.jpg",
    "runtime": 81,
    "networks": [],
    "certification": "L",
    "slug": "wallace-gromit-a-batalha-dos-vegetais"
},

{
    "id": 928833,
    "title": "O Início do Mundo de Greg: Um Filme Original",
    "genre_ids": [
        16,
        10751,
        10770,
        12,
        35,
        14
    ],
    "release_date": "2023-12-11",
    "popularity": 13.69,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/y59jpk9FtEJTmNHTvToR7hd17Wo.jpg",
    "runtime": 88,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "o-incio-do-mundo-de-greg-um-filme-original"
},

{
    "id": 34433,
    "title": "Dragon Ball Z: O Poder Invencível",
    "genre_ids": [
        16,
        878,
        28
    ],
    "release_date": "1993-03-06",
    "popularity": 12.2,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/qwgp3aihvSPONoQh0gqWU4LrPDb.jpg",
    "runtime": 76,
    "networks": [
        119,
        283,
        1968
    ],
    "certification": "N/A",
    "slug": "dragon-ball-z-o-poder-invencvel"
},

{
    "id": 60898,
    "title": "Uma História Erótica de Fantasmas",
    "genre_ids": [
        14,
        18,
        27
    ],
    "release_date": "1990-05-19",
    "popularity": 10.939,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/55awX4fDJA2YMoavpAguEnk0pxw.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "uma-histria-ertica-de-fantasmas"
},

{
    "id": 700411,
    "title": "ハイパープロジェクション演劇えんげき「ハイキュー!!」\"最強さいきょうの場所",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 13.52,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/akVwRhNWsAvrLd1HLGnQC2lQbwD.jpg",
    "runtime": 140,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 869,
    "title": "Planeta dos Macacos",
    "genre_ids": [
        53,
        878,
        28,
        12
    ],
    "release_date": "2001-07-25",
    "popularity": 11.828,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/qmv5Q5rjbO2wMveB1UC31prOCKH.jpg",
    "runtime": 119,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "planeta-dos-macacos"
},

{
    "id": 204082,
    "title": "Linha de Frente",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2013-11-12",
    "popularity": 11.209,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/3o0rqlEtF04y4atsc9VaH7DDvCq.jpg",
    "runtime": 100,
    "networks": [
        701,
        2106,
        2107
    ],
    "certification": "16",
    "slug": "linha-de-frente"
},

{
    "id": 27,
    "title": "Nove Canções",
    "genre_ids": [
        18,
        10402,
        10749
    ],
    "release_date": "2004-07-16",
    "popularity": 13.244,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/91O7z0vo7MiNWd5xD2BoivwbQsb.jpg",
    "runtime": 71,
    "networks": [],
    "certification": "N/A",
    "slug": "nove-canes"
},

{
    "id": 1372712,
    "title": "Tacocunr",
    "genre_ids": [
        35
    ],
    "release_date": "2025-02-25",
    "popularity": 11.544,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/95z9ex1bjCcFnNmU6mQz3yKoaTt.jpg",
    "runtime": 1,
    "networks": [],
    "certification": "N/A",
    "slug": "tacocunr"
},

{
    "id": 830784,
    "title": "Lilo, Lilo, Crocodilo",
    "genre_ids": [
        35,
        10751,
        10402
    ],
    "release_date": "2022-10-07",
    "popularity": 12.941,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/v4cqxZz2mHS0iyXvladOVltjJLQ.jpg",
    "runtime": 106,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "lilo-lilo-crocodilo"
},

{
    "id": 11451,
    "title": "Herbie: Meu Fusca Turbinado",
    "genre_ids": [
        35,
        10751,
        12,
        14,
        10749
    ],
    "release_date": "2005-06-22",
    "popularity": 12.625,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/z3dDSU387L19TNEJkYhYAMjU4Sr.jpg",
    "runtime": 101,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "herbie-meu-fusca-turbinado"
},

{
    "id": 10867,
    "title": "Malèna",
    "genre_ids": [
        18
    ],
    "release_date": "2000-03-16",
    "popularity": 12.272,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/aGK0x9RblIUqkLp6xKYMSttlqMn.jpg",
    "runtime": 109,
    "networks": [
        499
    ],
    "certification": "14",
    "slug": "malna"
},

{
    "id": 142093,
    "title": "애인",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2005-12-08",
    "popularity": 12.705,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/A749kswXIJLXf3tlLaC4nUy5A1I.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 254470,
    "title": "A Escolha Perfeita 2",
    "genre_ids": [
        35,
        10402
    ],
    "release_date": "2015-05-07",
    "popularity": 13.028,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/qHPcO7Ybp7s2Gg359UMdASGGUir.jpg",
    "runtime": 115,
    "networks": [
        307,
        2156
    ],
    "certification": "12",
    "slug": "a-escolha-perfeita-2"
},

{
    "id": 1401047,
    "title": "Group Study",
    "genre_ids": [
        27,
        18
    ],
    "release_date": "2025-02-25",
    "popularity": 11.608,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/gp0R6WFOzBAPBSY1V1ddSXvAvlw.jpg",
    "runtime": 10,
    "networks": [],
    "certification": "N/A",
    "slug": "group-study"
},

{
    "id": 52520,
    "title": "Anjos da Noite: O Despertar",
    "genre_ids": [
        14,
        28,
        27
    ],
    "release_date": "2012-01-19",
    "popularity": 10.879,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/f9XgpnQv2eKuekmEGNzfJUSbJKM.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "14",
    "slug": "anjos-da-noite-o-despertar"
},

{
    "id": 698818,
    "title": "음란 주택: 노예가 된 아내",
    "genre_ids": [
        10749
    ],
    "release_date": "2020-02-06",
    "popularity": 10.999,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/1VfuzK2Qx1tIGE1nhn2G2ilF7RN.jpg",
    "runtime": 72,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 1373893,
    "title": "Joni pata de conejo",
    "genre_ids": [
        28
    ],
    "release_date": "2024-10-11",
    "popularity": 11.749,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/a3nKPtKs7SRB6bdlaxPbD7f7eKJ.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "joni-pata-de-conejo"
},

{
    "id": 843380,
    "title": "Caçadores de Recompensas",
    "genre_ids": [
        37,
        53,
        28,
        18
    ],
    "release_date": "2022-09-30",
    "popularity": 11.342,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/Ad3JHINn6GYUR2UkadJTHvaK71q.jpg",
    "runtime": 106,
    "networks": [
        307
    ],
    "certification": "N/A",
    "slug": "caadores-de-recompensas"
},

{
    "id": 638507,
    "title": "Como Treinar o Seu Dragão: Volta ao Lar",
    "genre_ids": [
        16,
        14,
        12,
        28,
        10751
    ],
    "release_date": "2019-12-03",
    "popularity": 12.53,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/xZbfgH0pXsv0I3LWYlEc8LSrNcd.jpg",
    "runtime": 22,
    "networks": [],
    "certification": "L",
    "slug": "como-treinar-o-seu-drago-volta-ao-lar"
},

{
    "id": 567609,
    "title": "Casamento Sangrento",
    "genre_ids": [
        27,
        35
    ],
    "release_date": "2019-08-21",
    "popularity": 12.416,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/vWMXRFvpxxs5p0IKZdqWph10jIn.jpg",
    "runtime": 95,
    "networks": [
        337,
        8,
        1796
    ],
    "certification": "16",
    "slug": "casamento-sangrento"
},

{
    "id": 1430460,
    "title": "Inbound",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-21",
    "popularity": 13.417,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/haSJsah4mxl0dAkbYIZx93VdVDD.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "inbound"
},

{
    "id": 11774,
    "title": "Desventuras em Série",
    "genre_ids": [
        12,
        35,
        10751
    ],
    "release_date": "2004-12-16",
    "popularity": 11.467,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/uwyMKPAG56T8SkiwMrmkkB6Gqmc.jpg",
    "runtime": 108,
    "networks": [],
    "certification": "L",
    "slug": "desventuras-em-srie"
},

{
    "id": 799155,
    "title": "Missão Ataque",
    "genre_ids": [
        28,
        878,
        53
    ],
    "release_date": "2022-04-01",
    "popularity": 11.143,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/1jutkqkWfuds2mem3ku9rCXRqUR.jpg",
    "runtime": 123,
    "networks": [
        47,
        683
    ],
    "certification": "N/A",
    "slug": "misso-ataque"
},

{
    "id": 7443,
    "title": "A Fuga das Galinhas",
    "genre_ids": [
        16,
        35,
        10751
    ],
    "release_date": "2000-06-23",
    "popularity": 11.261,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/hp5shw8xyuYId322rT9am3HrKCQ.jpg",
    "runtime": 84,
    "networks": [
        307,
        484
    ],
    "certification": "L",
    "slug": "a-fuga-das-galinhas"
},

{
    "id": 1894,
    "title": "Star Wars: Episódio II - Ataque dos Clones",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "2002-05-15",
    "popularity": 10.832,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/ri3Gu1dYMxDcT0t4sUi0Aqf7MRS.jpg",
    "runtime": 142,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "star-wars-episdio-ii-ataque-dos-clones"
},

{
    "id": 1115623,
    "title": "The Last Kumite",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-05-09",
    "popularity": 11.4,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/zDkaJgsPoSqa2cMe2hW2HAfyWwO.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "N/A",
    "slug": "the-last-kumite"
},

{
    "id": 263472,
    "title": "Bata Antes de Entrar",
    "genre_ids": [
        27,
        53,
        80
    ],
    "release_date": "2015-06-26",
    "popularity": 11.681,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/3XOVtqDFRVtR2y8gUh2e6EKkQYR.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "16",
    "slug": "bata-antes-de-entrar"
},

{
    "id": 9453,
    "title": "Calígula",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "1979-08-14",
    "popularity": 13.765,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/sW1rdwrQRt8xNdO2Q7Opp0TIsw3.jpg",
    "runtime": 156,
    "networks": [],
    "certification": "18",
    "slug": "calgula"
},

{
    "id": 116776,
    "title": "Dragon Ball: Uma Aventura Mística",
    "genre_ids": [
        28,
        16
    ],
    "release_date": "1988-07-09",
    "popularity": 12.128,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/aG5Vq24AD4TEFvQjPWOQyQKZTri.jpg",
    "runtime": 45,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "dragon-ball-uma-aventura-mstica"
},

{
    "id": 762504,
    "title": "Não! Não Olhe!",
    "genre_ids": [
        27,
        9648,
        878
    ],
    "release_date": "2022-07-20",
    "popularity": 12.195,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/eyOw2kAOad2MNVsjMFmfzavB51h.jpg",
    "runtime": 131,
    "networks": [
        8,
        307,
        1796
    ],
    "certification": "14",
    "slug": "no-no-olhe"
},

{
    "id": 1205025,
    "title": "Foursome",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2023-12-22",
    "popularity": 11.996,
    "vote_average": 4.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/2a5eQej7Lvssp4dOnRrWpuXXvUj.jpg",
    "runtime": 108,
    "networks": [],
    "certification": "N/A",
    "slug": "foursome"
},

{
    "id": 75656,
    "title": "Truque de Mestre",
    "genre_ids": [
        53,
        80
    ],
    "release_date": "2013-05-29",
    "popularity": 12.83,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/sUi3a3BTTku0vyLjJQgKtiWCok7.jpg",
    "runtime": 116,
    "networks": [
        119,
        307
    ],
    "certification": "12",
    "slug": "truque-de-mestre"
},

{
    "id": 16859,
    "title": "O Serviço de Entregas da Kiki",
    "genre_ids": [
        16,
        10751,
        14
    ],
    "release_date": "1989-07-29",
    "popularity": 12.068,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/h2zP9prETqeB8kSQDy46Z6UHzFE.jpg",
    "runtime": 103,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "o-servio-de-entregas-da-kiki"
},

{
    "id": 835113,
    "title": "A Garota da Vez",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "2024-10-03",
    "popularity": 11.055,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/9q7hoPbWxx15Q5h55r9ftwJSzOz.jpg",
    "runtime": 89,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "a-garota-da-vez"
},

{
    "id": 565,
    "title": "O Chamado",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2002-10-18",
    "popularity": 12.363,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/4skN151KEKtJQSLJ7zkWSDGE0DJ.jpg",
    "runtime": 115,
    "networks": [],
    "certification": "14",
    "slug": "o-chamado"
},

{
    "id": 11013,
    "title": "Secretária",
    "genre_ids": [
        10749,
        18,
        35
    ],
    "release_date": "2002-09-20",
    "popularity": 11.207,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/w7nyLw8qvgsda94Mn1YTXy4Gq2n.jpg",
    "runtime": 107,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "secretria"
},

{
    "id": 1297860,
    "title": "Inheritance",
    "genre_ids": [
        53
    ],
    "release_date": "2025-01-24",
    "popularity": 11.923,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/aZGpn6GTtLFkkJ0LmeHtifL1Jw8.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "N/A",
    "slug": "inheritance"
},

{
    "id": 720321,
    "title": "Respire",
    "genre_ids": [
        28,
        878,
        9648,
        53
    ],
    "release_date": "2024-04-04",
    "popularity": 13.346,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/e7sPoVq19QGGLwe5O10RupMHQc1.jpg",
    "runtime": 93,
    "networks": [],
    "certification": "14",
    "slug": "respire"
},

{
    "id": 455980,
    "title": "Te Peguei!",
    "genre_ids": [
        35,
        28
    ],
    "release_date": "2018-05-30",
    "popularity": 13.235,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/gI6zwlVk1Bu3FnkcDkCYYHsBhTz.jpg",
    "runtime": 100,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "te-peguei"
},

{
    "id": 194662,
    "title": "Birdman ou (A Inesperada Virtude da Ignorância)",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2014-10-17",
    "popularity": 12.612,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/7gwtDnEJ39QarOyzt9bSxEj3SkD.jpg",
    "runtime": 119,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "birdman-ou-a-inesperada-virtude-da-ignorncia"
},

{
    "id": 11397,
    "title": "Não é Mais um Besteirol Americano",
    "genre_ids": [
        35
    ],
    "release_date": "2001-12-07",
    "popularity": 10.937,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/9pZVYcqNeQKxUXWf043spSHxgZH.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "no-mais-um-besteirol-americano"
},

{
    "id": 724495,
    "title": "A Mulher Rei",
    "genre_ids": [
        28,
        18,
        36
    ],
    "release_date": "2022-09-16",
    "popularity": 13.022,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/4MjnLp48IUK0O9EtWS4TvjMtLq3.jpg",
    "runtime": 135,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "a-mulher-rei"
},

{
    "id": 932420,
    "title": "Code 8: Renegados - Parte II",
    "genre_ids": [
        878,
        28,
        80
    ],
    "release_date": "2024-02-27",
    "popularity": 11.827,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/jwkzUuoTd4ISBNBMWPSp1qrVGNy.jpg",
    "runtime": 100,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "code-8-renegados-parte-ii"
},

{
    "id": 1016147,
    "title": "동거인의 아내",
    "genre_ids": [
        10749
    ],
    "release_date": "2021-08-13",
    "popularity": 13.679,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/M0iw0YfGsmUtlfyawS9e3cAKBe.jpg",
    "runtime": 75,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 76493,
    "title": "O Ditador",
    "genre_ids": [
        35
    ],
    "release_date": "2012-05-15",
    "popularity": 13.508,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/g1dteMYVbust5inabAxNkYft2Ym.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "14",
    "slug": "o-ditador"
},

{
    "id": 49797,
    "title": "Eu Vi o Diabo",
    "genre_ids": [
        53,
        27
    ],
    "release_date": "2010-08-12",
    "popularity": 11.747,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/ebODPzkfekZ9aXH6TMlXg7YzJM2.jpg",
    "runtime": 144,
    "networks": [],
    "certification": "18",
    "slug": "eu-vi-o-diabo"
},

{
    "id": 22832,
    "title": "Ninja Assassino",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2009-09-29",
    "popularity": 13.172,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/h9brQOUyWROaa10HfG7wG2dDSB7.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "ninja-assassino"
},

{
    "id": 526896,
    "title": "Morbius",
    "genre_ids": [
        28,
        878,
        14
    ],
    "release_date": "2022-03-30",
    "popularity": 12.936,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "14",
    "slug": "morbius"
},

{
    "id": 1620,
    "title": "Hitman: Assassino 47",
    "genre_ids": [
        28,
        53,
        18
    ],
    "release_date": "2007-11-21",
    "popularity": 11.543,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/3LsQzd1CAHuZIYbePt1k84w2mE7.jpg",
    "runtime": 94,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "hitman-assassino-47"
},

{
    "id": 784941,
    "title": "처제 길들이기",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2020-12-11",
    "popularity": 10.875,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/dF5SiTe94NkkGJNinB6Mz2izKy0.jpg",
    "runtime": 111,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 11824,
    "title": "O Garoto do Futuro",
    "genre_ids": [
        35,
        14,
        10749
    ],
    "release_date": "1985-08-23",
    "popularity": 10.786,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/3XByXLTKeS9d26mzoMpGujIXbch.jpg",
    "runtime": 92,
    "networks": [
        2142,
        2141
    ],
    "certification": "N/A",
    "slug": "o-garoto-do-futuro"
},

{
    "id": 9659,
    "title": "Mad Max",
    "genre_ids": [
        12,
        28,
        53,
        878
    ],
    "release_date": "1979-04-12",
    "popularity": 12.704,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/trfvD67gEdiuju2avJsC4ikJWgt.jpg",
    "runtime": 93,
    "networks": [
        1899,
        499,
        1825
    ],
    "certification": "16",
    "slug": "mad-max"
},

{
    "id": 213646,
    "title": "擋不住的瘋情",
    "genre_ids": [
        53,
        80
    ],
    "release_date": "1993-04-28",
    "popularity": 11.606,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/x68W8y1OQd6qOx9KkdXB5wbN0dl.jpg",
    "runtime": 83,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 560057,
    "title": "A Fera do Mar",
    "genre_ids": [
        16,
        12,
        28,
        10751,
        14
    ],
    "release_date": "2022-06-24",
    "popularity": 10.999,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/5KBOy36wOAkAorpvHwvzEwQdJeR.jpg",
    "runtime": 115,
    "networks": [
        8,
        1796
    ],
    "certification": "10",
    "slug": "a-fera-do-mar"
},

{
    "id": 454640,
    "title": "Angry Birds 2: O Filme",
    "genre_ids": [
        16,
        28,
        14,
        12,
        35,
        10751
    ],
    "release_date": "2019-08-02",
    "popularity": 11.342,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/pMqAjEyj234escPleCthcmh84ka.jpg",
    "runtime": 97,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "angry-birds-2-o-filme"
},

{
    "id": 9637,
    "title": "Scooby-Doo: O Filme",
    "genre_ids": [
        9648,
        12,
        35
    ],
    "release_date": "2002-06-14",
    "popularity": 12.272,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/Nu9v0wUacgq73ggOAKsz4ZtZ2K.jpg",
    "runtime": 87,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "scooby-doo-o-filme"
},

{
    "id": 861,
    "title": "O Vingador do Futuro",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "1990-06-01",
    "popularity": 12.406,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/6gKfyI8oPycrncaeqTwqqv2AB4R.jpg",
    "runtime": 113,
    "networks": [
        307,
        2142,
        2141
    ],
    "certification": "16",
    "slug": "o-vingador-do-futuro"
},

{
    "id": 661374,
    "title": "Glass Onion: Um Mistério Knives Out",
    "genre_ids": [
        35,
        80,
        9648
    ],
    "release_date": "2022-11-23",
    "popularity": 13.408,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zQJcENHbZUpLQ8RKYt9wTzcXCwv.jpg",
    "runtime": 140,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "glass-onion-um-mistrio-knives-out"
},

{
    "id": 40132,
    "title": "La via della prostituzione",
    "genre_ids": [
        18,
        27,
        53
    ],
    "release_date": "1978-04-20",
    "popularity": 11.465,
    "vote_average": 4.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/cDRTWvgStBC9K1AFyzqiPXQKA3o.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "la-via-della-prostituzione"
},

{
    "id": 1434243,
    "title": "The Wrong Obsession",
    "genre_ids": [],
    "release_date": "2025-02-21",
    "popularity": 12.529,
    "vote_average": 10.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/9PK7EAv8W44rUM0qc1u7SdoC4Yl.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "the-wrong-obsession"
},

{
    "id": 109451,
    "title": "Tá Chovendo Hambúrguer 2",
    "genre_ids": [
        16,
        10751,
        35
    ],
    "release_date": "2013-09-26",
    "popularity": 11.677,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/f2prUcInmfAEdjfLUIY8RIQ1fih.jpg",
    "runtime": 95,
    "networks": [
        8,
        1899,
        1796,
        1825
    ],
    "certification": "L",
    "slug": "t-chovendo-hambrguer-2"
},

{
    "id": 429351,
    "title": "12 Heróis",
    "genre_ids": [
        10752,
        18,
        28,
        36
    ],
    "release_date": "2018-01-18",
    "popularity": 12.125,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/mBgAJeIx1d5kxU8nR748o9qnAUK.jpg",
    "runtime": 130,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "14",
    "slug": "12-heris"
},

{
    "id": 7191,
    "title": "Cloverfield: Monstro",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "2008-01-15",
    "popularity": 10.831,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/1KpWSQIZThETSTgpmHBtpkMXNk8.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "14",
    "slug": "cloverfield-monstro"
},

{
    "id": 9480,
    "title": "Demolidor: O Homem Sem Medo",
    "genre_ids": [
        14,
        28
    ],
    "release_date": "2003-02-14",
    "popularity": 11.257,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/radMhBHs7xicEcsTLfRzbWBdGC9.jpg",
    "runtime": 103,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "demolidor-o-homem-sem-medo"
},

{
    "id": 1045770,
    "title": "Daaaaaalí !",
    "genre_ids": [
        35,
        14
    ],
    "release_date": "2024-02-07",
    "popularity": 11.14,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/9jlGTo6GiHeri1lx2czChvLzTO3.jpg",
    "runtime": 77,
    "networks": [],
    "certification": "N/A",
    "slug": "daaaaaal-"
},

{
    "id": 1094473,
    "title": "Bambi: Uma aventura na floresta",
    "genre_ids": [
        12,
        10751
    ],
    "release_date": "2024-10-16",
    "popularity": 10.709,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/vwoQdYID6WSNoP8vSKqXKXPWCgT.jpg",
    "runtime": 77,
    "networks": [],
    "certification": "N/A",
    "slug": "bambi-uma-aventura-na-floresta"
},

{
    "id": 406563,
    "title": "Sobrenatural: A Última Chave",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2018-01-03",
    "popularity": 12.178,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/v3RYZGwImjBUF18RV57J5QuOa31.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "14",
    "slug": "sobrenatural-a-ltima-chave"
},

{
    "id": 19404,
    "title": "Dilwale vai levar a noiva",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "1995-10-20",
    "popularity": 11.396,
    "vote_average": 8.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    "runtime": 190,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "dilwale-vai-levar-a-noiva"
},

{
    "id": 75174,
    "title": "A Perseguição",
    "genre_ids": [
        18,
        53,
        28,
        12
    ],
    "release_date": "2012-01-26",
    "popularity": 11.054,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/lkQ20CkCnJTIXQFYK10cuFZ3gO7.jpg",
    "runtime": 117,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "a-perseguio"
},

{
    "id": 1363381,
    "title": "Petaka Gunung Gede",
    "genre_ids": [
        12,
        27,
        18
    ],
    "release_date": "2025-02-06",
    "popularity": 12.064,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/rmh9oNW0eaUwhQyW22mgzur0NpE.jpg",
    "runtime": 98,
    "networks": [],
    "certification": "N/A",
    "slug": "petaka-gunung-gede"
},

{
    "id": 1115396,
    "title": "Hunting Games",
    "genre_ids": [
        28,
        53,
        10770
    ],
    "release_date": "2023-05-12",
    "popularity": 12.35,
    "vote_average": 4.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/xVbEJzdMxIQqpuLgla0hU8qr9mt.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": "hunting-games"
},

{
    "id": 717930,
    "title": "Missão de Sobrevivência",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2023-05-25",
    "popularity": 12.809,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/xsmNNU5UbnurOnCOdUHbpv2XyFI.jpg",
    "runtime": 119,
    "networks": [],
    "certification": "16",
    "slug": "misso-de-sobrevivncia"
},

{
    "id": 1088563,
    "title": "Lassie - Ein neues Abenteuer",
    "genre_ids": [
        12,
        10751
    ],
    "release_date": "2023-07-27",
    "popularity": 11.906,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/jh6iI8BP2b4A1ZP44YERvIR6R6Q.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "N/A",
    "slug": "lassie-ein-neues-abenteuer"
},

{
    "id": 51828,
    "title": "Um Dia",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2011-03-02",
    "popularity": 10.664,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/jgEZqFqQgM81nVyHKtXDV0UxKGa.jpg",
    "runtime": 107,
    "networks": [
        119
    ],
    "certification": "12",
    "slug": "um-dia"
},

{
    "id": 1118028,
    "title": "A Virgem Vermelha",
    "genre_ids": [
        18,
        36,
        53
    ],
    "release_date": "2024-09-27",
    "popularity": 11.203,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/5oXFlJ6UdTbHihthSHW272CBP7F.jpg",
    "runtime": 114,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "a-virgem-vermelha"
},

{
    "id": 1331344,
    "title": "No Voltees",
    "genre_ids": [
        27
    ],
    "release_date": "2024-09-20",
    "popularity": 11.978,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/g3ZeqO6cNvr6cbfUn2FYZ7wAZ6f.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "no-voltees"
},

{
    "id": 678512,
    "title": "Som da Liberdade",
    "genre_ids": [
        28,
        18
    ],
    "release_date": "2023-07-03",
    "popularity": 13.339,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/hwOHbymoAhjrMx7v5ShHCNIP4NI.jpg",
    "runtime": 131,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "som-da-liberdade"
},

{
    "id": 193756,
    "title": "O Grande Herói",
    "genre_ids": [
        10752,
        28,
        18
    ],
    "release_date": "2013-12-24",
    "popularity": 13.234,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/9Xcir0rOyYydPhGRYgG0Ctt1sqf.jpg",
    "runtime": 121,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "o-grande-heri"
},

{
    "id": 480414,
    "title": "A Maldição da Chorona",
    "genre_ids": [
        27
    ],
    "release_date": "2019-04-17",
    "popularity": 12.611,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/2D8MtUYt9ojKmKvyeXpsfZtDDgw.jpg",
    "runtime": 93,
    "networks": [
        1899,
        484,
        1825
    ],
    "certification": "14",
    "slug": "a-maldio-da-chorona"
},

{
    "id": 287947,
    "title": "Shazam!",
    "genre_ids": [
        28,
        35,
        14
    ],
    "release_date": "2019-03-29",
    "popularity": 13.022,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/rwkriXzzP9FoiIF5nTdxBsUcds4.jpg",
    "runtime": 131,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "shazam"
},

{
    "id": 455476,
    "title": "Os Cavaleiros do Zodíaco - Saint Seiya: O Começo",
    "genre_ids": [
        14,
        28,
        12
    ],
    "release_date": "2023-04-27",
    "popularity": 13.504,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/1qos0X6EIi4KT9RmJiVGZB9Kw6l.jpg",
    "runtime": 113,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "os-cavaleiros-do-zodaco-saint-seiya-o-comeo"
},

{
    "id": 1416244,
    "title": "The Wash",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-21",
    "popularity": 13.664,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/y23LqsxO7N0iqgCzoqChPpLNRSY.jpg",
    "runtime": 15,
    "networks": [],
    "certification": "N/A",
    "slug": "the-wash"
},

{
    "id": 628704,
    "title": "Fuga da Meia-Noite",
    "genre_ids": [
        53,
        80
    ],
    "release_date": "2021-06-30",
    "popularity": 11.825,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/3ze2g40UT00kR0mvGWdzUNkTjsz.jpg",
    "runtime": 103,
    "networks": [],
    "certification": "14",
    "slug": "fuga-da-meia-noite"
},

{
    "id": 153,
    "title": "Encontros e Desencontros",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2003-09-18",
    "popularity": 10.936,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/l2IEdDTtdVHfFKa2Uv45AbqySDT.jpg",
    "runtime": 102,
    "networks": [
        119,
        307
    ],
    "certification": "14",
    "slug": "encontros-e-desencontros"
},

{
    "id": 274855,
    "title": "Tempestade: Planeta em Fúria",
    "genre_ids": [
        28,
        878,
        53
    ],
    "release_date": "2017-10-12",
    "popularity": 11.742,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/eHg6a64rTJHBZ0N0vEu17HGOsnJ.jpg",
    "runtime": 109,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "12",
    "slug": "tempestade-planeta-em-fria"
},

{
    "id": 1289088,
    "title": "สวัสดีวันจันทร์(ส)",
    "genre_ids": [
        35,
        10749,
        14,
        18
    ],
    "release_date": "2025-02-20",
    "popularity": 10.601,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/sebvxBC0ijLKc9fwrDcED2lxfku.jpg",
    "runtime": 130,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1235922,
    "title": "Soy Nevenka",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2024-09-27",
    "popularity": 13.169,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/ax7yyYIfRQtKCPo39yibUJFsmAG.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": "soy-nevenka"
},

{
    "id": 46738,
    "title": "Incêndios",
    "genre_ids": [
        18,
        10752,
        9648
    ],
    "release_date": "2010-09-17",
    "popularity": 12.935,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/uCS7IEfBLoBBLpOdCkfpVA7xhed.jpg",
    "runtime": 131,
    "networks": [
        1920,
        2157
    ],
    "certification": "14",
    "slug": "incndios"
},

{
    "id": 1404312,
    "title": "Rahasia Rasa",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2025-02-20",
    "popularity": 11.541,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/4WzfLOftQxV9XmkIGEH2teQLxlB.jpg",
    "runtime": 121,
    "networks": [],
    "certification": "N/A",
    "slug": "rahasia-rasa"
},

{
    "id": 180299,
    "title": "Operação Invasão 2",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2014-03-27",
    "popularity": 10.874,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/7wubJeBNod3z4UTG30XvEhXA7Xr.jpg",
    "runtime": 150,
    "networks": [
        1899,
        1825
    ],
    "certification": "18 anos",
    "slug": "operao-invaso-2"
},

{
    "id": 916728,
    "title": "Slingshot",
    "genre_ids": [
        878,
        53
    ],
    "release_date": "2024-08-30",
    "popularity": 10.78,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/e6cCBe7DQOn9OFdFJ0eyVwSC8hR.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "N/A",
    "slug": "slingshot"
},

{
    "id": 804616,
    "title": "Isca",
    "genre_ids": [
        53,
        27
    ],
    "release_date": "2024-03-22",
    "popularity": 11.598,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/lpDbjUc6RawYC4UJj1YAn9OW802.jpg",
    "runtime": 86,
    "networks": [
        119
    ],
    "certification": "N/A",
    "slug": "isca"
},

{
    "id": 7512,
    "title": "Idiocracia",
    "genre_ids": [
        35,
        878,
        12,
        53
    ],
    "release_date": "2006-09-01",
    "popularity": 12.703,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/cirl5ksNn90QaC1O8YRcgJFraUd.jpg",
    "runtime": 84,
    "networks": [],
    "certification": "14",
    "slug": "idiocracia"
},

{
    "id": 277,
    "title": "Anjos da Noite: Underworld",
    "genre_ids": [
        14,
        28,
        53
    ],
    "release_date": "2003-09-19",
    "popularity": 12.26,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/sE19OYWcnAigvk8VTdLVfeirwif.jpg",
    "runtime": 122,
    "networks": [
        119,
        1899,
        1825
    ],
    "certification": "16",
    "slug": "anjos-da-noite-underworld"
},

{
    "id": 376867,
    "title": "Moonlight: Sob a Luz do Luar",
    "genre_ids": [
        18
    ],
    "release_date": "2016-10-21",
    "popularity": 11.341,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/AekOkoT88EhDHikUQXQcKri2q4B.jpg",
    "runtime": 111,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "moonlight-sob-a-luz-do-luar"
},

{
    "id": 238713,
    "title": "A Espiã Que Sabia de Menos",
    "genre_ids": [
        28,
        35,
        80
    ],
    "release_date": "2015-05-06",
    "popularity": 10.999,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/bft6EuB96z0ureK832edqwAplDS.jpg",
    "runtime": 119,
    "networks": [
        337
    ],
    "certification": "14",
    "slug": "a-espi-que-sabia-de-menos"
},

{
    "id": 1923,
    "title": "Twin Peaks: Os Últimos Dias de Laura Palmer",
    "genre_ids": [
        18,
        9648,
        27
    ],
    "release_date": "1992-06-03",
    "popularity": 12.403,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/4AX48Eoun0i2U2DExZkp9Y4hCKc.jpg",
    "runtime": 135,
    "networks": [
        307,
        11,
        2156,
        2157
    ],
    "certification": "N/A",
    "slug": "twin-peaks-os-ltimos-dias-de-laura-palmer"
},

{
    "id": 88,
    "title": "Dirty Dancing: Ritmo Quente",
    "genre_ids": [
        18,
        10402,
        10749
    ],
    "release_date": "1987-08-21",
    "popularity": 12.521,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/mUVIRUpqKQa8uKDgyYrQHs6rlbz.jpg",
    "runtime": 100,
    "networks": [
        499
    ],
    "certification": "12",
    "slug": "dirty-dancing-ritmo-quente"
},

{
    "id": 15,
    "title": "Cidadão Kane",
    "genre_ids": [
        9648,
        18
    ],
    "release_date": "1941-04-17",
    "popularity": 11.465,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/7RdvqkBX2gi6kiZ2yySeRqeClur.jpg",
    "runtime": 119,
    "networks": [
        447,
        499
    ],
    "certification": "12",
    "slug": "cidado-kane"
},

{
    "id": 865463,
    "title": "24살윤율의섹시한젖가슴",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2021-03-01",
    "popularity": 11.675,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/qvGkjlLjTy1nxClxpw2BiUS6jHB.jpg",
    "runtime": 70,
    "networks": [],
    "certification": "N/A",
    "slug": "24"
},

{
    "id": 316727,
    "title": "12 Horas para Sobreviver: O Ano da Eleição",
    "genre_ids": [
        28,
        27,
        53
    ],
    "release_date": "2016-06-29",
    "popularity": 11.393,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/41NT5TCXWnlg2vxtVZz8uFlhHca.jpg",
    "runtime": 109,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "12-horas-para-sobreviver-o-ano-da-eleio"
},

{
    "id": 428399,
    "title": "A Pele Fria",
    "genre_ids": [
        27,
        14,
        18
    ],
    "release_date": "2017-10-20",
    "popularity": 12.125,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/xp1TsrJ2mvnv10ooUL0IsFeJXp9.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "16",
    "slug": "a-pele-fria"
},

{
    "id": 1159518,
    "title": "Black Noise",
    "genre_ids": [
        28,
        878,
        27,
        53
    ],
    "release_date": "2023-11-03",
    "popularity": 10.829,
    "vote_average": 4.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/snKpXexv5dtWqEKEmXrJtp8QGQC.jpg",
    "runtime": 86,
    "networks": [],
    "certification": "N/A",
    "slug": "black-noise"
},

{
    "id": 10634,
    "title": "Sexta-feira em Apuros",
    "genre_ids": [
        35
    ],
    "release_date": "1995-04-26",
    "popularity": 11.251,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/oM6hiQYs8ERJMo36u3pIZNwLhQN.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "18",
    "slug": "sexta-feira-em-apuros"
},

{
    "id": 36728,
    "title": "Naruto Shippuden o Filme: Herdeiros da Vontade do Fogo",
    "genre_ids": [
        28,
        12,
        35,
        18,
        14,
        16
    ],
    "release_date": "2009-08-01",
    "popularity": 11.14,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/7TQFZZQhai2MY0FoWsWAMMtYANb.jpg",
    "runtime": 95,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "N/A",
    "slug": "naruto-shippuden-o-filme-herdeiros-da-vontade-do-fogo"
},

{
    "id": 614934,
    "title": "Elvis",
    "genre_ids": [
        18,
        10402,
        36
    ],
    "release_date": "2022-06-22",
    "popularity": 10.707,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg",
    "runtime": 159,
    "networks": [
        119,
        1899,
        484
    ],
    "certification": "14",
    "slug": "elvis"
},

{
    "id": 10545,
    "title": "O Corcunda de Notre Dame",
    "genre_ids": [
        18,
        16,
        10751
    ],
    "release_date": "1996-06-21",
    "popularity": 12.178,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/mvdPI1neAfdMKvetXEBj4hpPQoI.jpg",
    "runtime": 91,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "o-corcunda-de-notre-dame"
},

{
    "id": 1211726,
    "title": "Красный шелк",
    "genre_ids": [
        28,
        12,
        9648
    ],
    "release_date": "2025-02-20",
    "popularity": 10.662,
    "vote_average": 10.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/AlFzDy8Bpe0HIxcpgGMU61fMHvT.jpg",
    "runtime": 146,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 1435018,
    "title": "War Bride",
    "genre_ids": [
        27,
        36,
        53,
        10749
    ],
    "release_date": "2025-02-24",
    "popularity": 10.543,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/FIZV5eW5EVPmVxoO3ZmX8AfOR2.jpg",
    "runtime": 16,
    "networks": [],
    "certification": "N/A",
    "slug": "war-bride"
},

{
    "id": 980083,
    "title": "Top Gunner: Zona de Perigo",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2022-05-20",
    "popularity": 11.048,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/2xcV2egehqvKTHFEtvG5k8PMbeB.jpg",
    "runtime": 86,
    "networks": [
        47,
        683
    ],
    "certification": "N/A",
    "slug": "top-gunner-zona-de-perigo"
},

{
    "id": 1892,
    "title": "Guerra nas Estrelas: O Retorno de Jedi",
    "genre_ids": [
        12,
        28,
        878
    ],
    "release_date": "1983-05-25",
    "popularity": 12.063,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/a4jlKpK1IzTtOtTdAzrgWm8jvmS.jpg",
    "runtime": 135,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "guerra-nas-estrelas-o-retorno-de-jedi"
},

{
    "id": 1224666,
    "title": "Polvo serán",
    "genre_ids": [
        18,
        10402,
        35
    ],
    "release_date": "2024-11-15",
    "popularity": 11.904,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/UR3cOvqPJSMsAiaebAIZUd6jGR.jpg",
    "runtime": 106,
    "networks": [],
    "certification": "N/A",
    "slug": "polvo-sern"
},

{
    "id": 14869,
    "title": "G.I. Joe: A Origem de Cobra",
    "genre_ids": [
        12,
        28,
        53,
        878
    ],
    "release_date": "2009-08-03",
    "popularity": 12.347,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/gS2bNL3LTUVCLmTNhyIamBQa0eS.jpg",
    "runtime": 113,
    "networks": [
        484
    ],
    "certification": "14",
    "slug": "gi-joe-a-origem-de-cobra"
},

{
    "id": 1374,
    "title": "Rocky IV",
    "genre_ids": [
        18
    ],
    "release_date": "1985-11-21",
    "popularity": 12.806,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/wcjJ4SBzdDQcWRPkqkEyYU0Ic1k.jpg",
    "runtime": 91,
    "networks": [
        2142,
        2141
    ],
    "certification": "14",
    "slug": "rocky-iv"
},

{
    "id": 920342,
    "title": "异兽战场",
    "genre_ids": [
        878,
        28,
        27
    ],
    "release_date": "2021-12-27",
    "popularity": 11.974,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/nBVYp2xxx2R02n21EGlDky8CgWR.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 567,
    "title": "Janela Indiscreta",
    "genre_ids": [
        53,
        9648
    ],
    "release_date": "1954-08-01",
    "popularity": 11.202,
    "vote_average": 8.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/jI2eOA4HQwD77yRv075I3G0ahJL.jpg",
    "runtime": 112,
    "networks": [
        307,
        447,
        499
    ],
    "certification": "12",
    "slug": "janela-indiscreta"
},

{
    "id": 23398,
    "title": "Alvin e os Esquilos 2",
    "genre_ids": [
        35,
        10751,
        16,
        14,
        10402
    ],
    "release_date": "2009-12-21",
    "popularity": 13.228,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/9L9Cgl6VUlHrnjcJCBj0S338Kuo.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "L",
    "slug": "alvin-e-os-esquilos-2"
},

{
    "id": 1137205,
    "title": "Last Straw",
    "genre_ids": [
        18,
        27,
        53
    ],
    "release_date": "2024-09-20",
    "popularity": 11.824,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/hgpUvybRQzRK6UagoHNQRrO8sUg.jpg",
    "runtime": 81,
    "networks": [],
    "certification": "N/A",
    "slug": "last-straw"
},

{
    "id": 1179051,
    "title": "Missão Porto Seguro",
    "genre_ids": [
        35,
        28
    ],
    "release_date": "2025-01-17",
    "popularity": 12.602,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/dcoc4C57lCpAzBr2qojFjRCKO9E.jpg",
    "runtime": 86,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "misso-porto-seguro"
},

{
    "id": 8204,
    "title": "As Crônicas de Spiderwick",
    "genre_ids": [
        10751,
        12,
        14,
        18
    ],
    "release_date": "2008-02-14",
    "popularity": 13.339,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/7YABWxerZXH705J34qaUbvJLXVz.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "as-crnicas-de-spiderwick"
},

{
    "id": 9543,
    "title": "Príncipe da Pérsia: As Areias do Tempo",
    "genre_ids": [
        12,
        14,
        28
    ],
    "release_date": "2010-05-19",
    "popularity": 10.599,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/nJxserrGJEJSBzLRs4YMMN0OakZ.jpg",
    "runtime": 116,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "prncipe-da-prsia-as-areias-do-tempo"
},

{
    "id": 9353,
    "title": "Super Nacho",
    "genre_ids": [
        35,
        10751,
        18
    ],
    "release_date": "2006-06-16",
    "popularity": 13.012,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/hTOfjp1vXzv5cJvIJDZtpuDX1wx.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "super-nacho"
},

{
    "id": 64686,
    "title": "47 Ronins",
    "genre_ids": [
        18,
        28,
        14
    ],
    "release_date": "2013-12-06",
    "popularity": 10.483,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/pKM4v6dZ1LSKzRQxN0YEbmCKGAH.jpg",
    "runtime": 119,
    "networks": [
        119,
        307
    ],
    "certification": "14",
    "slug": "47-ronins"
},

{
    "id": 22881,
    "title": "Um Sonho Possível",
    "genre_ids": [
        18
    ],
    "release_date": "2009-11-20",
    "popularity": 13.663,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/an63NUD0TUMreFNo4z60Ec8poF9.jpg",
    "runtime": 129,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "um-sonho-possvel"
},

{
    "id": 1735,
    "title": "A Múmia - Tumba do Imperador Dragão",
    "genre_ids": [
        12,
        28,
        14
    ],
    "release_date": "2008-07-01",
    "popularity": 13.159,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/jP3Dj0tQ7E4U8fqmtoWs4tg6R01.jpg",
    "runtime": 112,
    "networks": [
        119,
        2156
    ],
    "certification": "12",
    "slug": "a-mmia-tumba-do-imperador-drago"
},

{
    "id": 1029955,
    "title": "Tipos de Gentileza",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "2024-05-30",
    "popularity": 10.932,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/4WcXSrWVdqdHTQM25xzffUYipcS.jpg",
    "runtime": 164,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "tipos-de-gentileza"
},

{
    "id": 879,
    "title": "Hook: A Volta do Capitão Gancho",
    "genre_ids": [
        12,
        14,
        35,
        10751
    ],
    "release_date": "1991-04-10",
    "popularity": 10.868,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/3xvJUSXz9wo97kvgABUDgBCsUNp.jpg",
    "runtime": 144,
    "networks": [],
    "certification": "L",
    "slug": "hook-a-volta-do-capito-gancho"
},

{
    "id": 8273,
    "title": "American Pie: O Casamento",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2003-08-01",
    "popularity": 12.933,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/uG1eEKdLIq8Lxlq9AQMtdYQ4rk0.jpg",
    "runtime": 103,
    "networks": [
        307
    ],
    "certification": "14",
    "slug": "american-pie-o-casamento"
},

{
    "id": 711978,
    "title": "가슴 큰 울 엄마 2",
    "genre_ids": [
        10749
    ],
    "release_date": "2020-05-27",
    "popularity": 11.537,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/3qotZafIXzrgq7SUmHsBY6onRcU.jpg",
    "runtime": 69,
    "networks": [],
    "certification": "N/A",
    "slug": "-2"
},

{
    "id": 1029330,
    "title": "Outra Chance para o Amor",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "2024-04-02",
    "popularity": 10.774,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/f2BbDq9s86WkCo6QuiuEyprbiGl.jpg",
    "runtime": 118,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "outra-chance-para-o-amor"
},

{
    "id": 2108,
    "title": "Clube dos Cinco",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "1985-02-15",
    "popularity": 12.7,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/atLx4aW8dgIuy3Bxo5WWRTyWdEh.jpg",
    "runtime": 97,
    "networks": [
        167
    ],
    "certification": "14",
    "slug": "clube-dos-cinco"
},

{
    "id": 228967,
    "title": "A Entrevista",
    "genre_ids": [
        28,
        35
    ],
    "release_date": "2014-12-25",
    "popularity": 11.674,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/mkzPvLlMk27gIkNRNWyXuX06PEH.jpg",
    "runtime": 112,
    "networks": [
        1899
    ],
    "certification": "16",
    "slug": "a-entrevista"
},

{
    "id": 37265,
    "title": "Todas as Mulheres Fazem",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "1992-02-21",
    "popularity": 12.4,
    "vote_average": 5.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/w4ocNo0oqiIWbaMEuxyynJODZXt.jpg",
    "runtime": 93,
    "networks": [
        692
    ],
    "certification": "N/A",
    "slug": "todas-as-mulheres-fazem"
},

{
    "id": 275,
    "title": "Fargo: Uma Comédia de Erros",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "1996-03-08",
    "popularity": 11.337,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/JrnxuijI6XCKyZaiPPrJ3TbZi.jpg",
    "runtime": 98,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "fargo-uma-comdia-de-erros"
},

{
    "id": 487616,
    "title": "Curiosa",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2019-04-03",
    "popularity": 10.995,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/eyJgh0oh73YZ63nJHOJxHkLatgb.jpg",
    "runtime": 107,
    "networks": [
        307,
        2356
    ],
    "certification": "16",
    "slug": "curiosa"
},

{
    "id": 916224,
    "title": "Suzume",
    "genre_ids": [
        16,
        18,
        12,
        14
    ],
    "release_date": "2022-11-11",
    "popularity": 12.256,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/QcS3MhdUiOEUOjY451FOFInZXF.jpg",
    "runtime": 121,
    "networks": [
        8,
        283,
        1796,
        1968
    ],
    "certification": "N/A",
    "slug": "suzume"
},

{
    "id": 541671,
    "title": "Bailarina - Do Universo de John Wick",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2025-06-04",
    "popularity": 11.464,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bN9431goQjR5Lu0VziD7iKW0Hfd.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "N/A",
    "slug": "bailarina-do-universo-de-john-wick"
},

{
    "id": 299687,
    "title": "A 5ª Onda",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2016-01-14",
    "popularity": 11.595,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/asPv5M6bUn270EcUXUnEnC8CkB7.jpg",
    "runtime": 112,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "a-5-onda"
},

{
    "id": 9362,
    "title": "O Ataque dos Vermes Malditos",
    "genre_ids": [
        27,
        28,
        878,
        35
    ],
    "release_date": "1990-01-19",
    "popularity": 12.125,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/yZP86gshxviJ6Shfi3w0Tt4LWrq.jpg",
    "runtime": 96,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "o-ataque-dos-vermes-malditos"
},

{
    "id": 587807,
    "title": "Tom & Jerry: O Filme",
    "genre_ids": [
        35,
        10751,
        16
    ],
    "release_date": "2021-02-10",
    "popularity": 11.138,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/9NvYyM8H6d5KAVGqpyFV9YPO5cU.jpg",
    "runtime": 101,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "tom-jerry-o-filme"
},

{
    "id": 310307,
    "title": "Fome de Poder",
    "genre_ids": [
        18,
        36
    ],
    "release_date": "2016-11-24",
    "popularity": 12.52,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/1YpHj6aV1yKWP20hKj1KUiLaIbi.jpg",
    "runtime": 115,
    "networks": [],
    "certification": "10",
    "slug": "fome-de-poder"
},

{
    "id": 709631,
    "title": "TOC TOC TOC - Ecos do Além",
    "genre_ids": [
        27
    ],
    "release_date": "2023-07-19",
    "popularity": 11.392,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/lI1sqGtJM3PRGVuXvCUPbqeKJGQ.jpg",
    "runtime": 88,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "toc-toc-toc-ecos-do-alm"
},

{
    "id": 1017066,
    "title": "Desejo Proibido",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2023-02-10",
    "popularity": 12.173,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/xa0xWdFSGuFVVK5GMt8GSurfFjl.jpg",
    "runtime": 119,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "desejo-proibido"
},

{
    "id": 17581,
    "title": "Naruto Shippuden o Filme: Laços",
    "genre_ids": [
        14,
        16,
        28
    ],
    "release_date": "2008-08-02",
    "popularity": 10.657,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/mVxwJGCJmbeL9d6C85IhNbAq4TT.jpg",
    "runtime": 92,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "N/A",
    "slug": "naruto-shippuden-o-filme-laos"
},

{
    "id": 274167,
    "title": "Pai em Dose Dupla",
    "genre_ids": [
        35
    ],
    "release_date": "2015-12-25",
    "popularity": 11.246,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/8sQJGH4pKEsv5DrRPPaULMgWZMm.jpg",
    "runtime": 96,
    "networks": [
        337,
        8,
        307,
        1796
    ],
    "certification": "12",
    "slug": "pai-em-dose-dupla"
},

{
    "id": 5689,
    "title": "A Lagoa Azul",
    "genre_ids": [
        10749,
        12
    ],
    "release_date": "1980-07-05",
    "popularity": 10.828,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/44NpOB3zKwSKzu6mEDQY235rRxP.jpg",
    "runtime": 105,
    "networks": [
        8,
        1796,
        2156
    ],
    "certification": "N/A",
    "slug": "a-lagoa-azul"
},

{
    "id": 11622,
    "title": "De Volta para o Presente",
    "genre_ids": [
        18,
        10749,
        35
    ],
    "release_date": "1999-02-12",
    "popularity": 12.347,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/uagAZJ5Uo0UUqk2nn8Geom42Mdh.jpg",
    "runtime": 112,
    "networks": [],
    "certification": "N/A",
    "slug": "de-volta-para-o-presente"
},

{
    "id": 114150,
    "title": "A Escolha Perfeita",
    "genre_ids": [
        35,
        10402,
        10749
    ],
    "release_date": "2012-09-28",
    "popularity": 10.704,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/1pcXYNwR1RYjbQUDNEdGAEfxABq.jpg",
    "runtime": 112,
    "networks": [
        2156
    ],
    "certification": "12",
    "slug": "a-escolha-perfeita"
},

{
    "id": 882059,
    "title": "Contra o Mundo",
    "genre_ids": [
        80,
        53,
        28
    ],
    "release_date": "2024-04-24",
    "popularity": 12.061,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/eBfLxyzwCCACTieZ2NH41m0jilk.jpg",
    "runtime": 111,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "contra-o-mundo"
},

{
    "id": 1221451,
    "title": "Salawahan",
    "genre_ids": [
        18,
        53
    ],
    "release_date": "2024-02-02",
    "popularity": 11.047,
    "vote_average": 1.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/c6PovJ1flBiZeOkHpQIo8Ho8lrw.jpg",
    "runtime": 114,
    "networks": [],
    "certification": "N/A",
    "slug": "salawahan"
},

{
    "id": 3563,
    "title": "Eu os Declaro Marido... e Larry",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2007-07-12",
    "popularity": 11.74,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/aIlsFdoLkSixeqwqcSKi19xAT2w.jpg",
    "runtime": 115,
    "networks": [
        337,
        307
    ],
    "certification": "12",
    "slug": "eu-os-declaro-marido-e-larry"
},

{
    "id": 1228246,
    "title": "Five Nights at Freddy's 2",
    "genre_ids": [
        9648,
        27,
        53
    ],
    "release_date": "2025-12-03",
    "popularity": 10.541,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/brJkq22WjpLnCuYEEId89FC3NXZ.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "five-nights-at-freddys-2"
},

{
    "id": 1573,
    "title": "Duro de Matar 2",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "1990-07-03",
    "popularity": 11.902,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/lHtV1SrCJUAHXK8jeX3KrpxwTFf.jpg",
    "runtime": 124,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "duro-de-matar-2"
},

{
    "id": 185664,
    "title": "団鬼六　修道女縄地獄",
    "genre_ids": [
        18,
        27
    ],
    "release_date": "1984-05-25",
    "popularity": 10.339,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/AdbDpP5vGeRX7tKFoipEreYVVRs.jpg",
    "runtime": 69,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 323260,
    "title": "鴨王",
    "genre_ids": [
        10749,
        18,
        35
    ],
    "release_date": "2015-01-29",
    "popularity": 11.2,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/vegIW35IojjgmzPxYl2IgWwc9Xg.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 587792,
    "title": "Palm Springs",
    "genre_ids": [
        35,
        10749,
        878
    ],
    "release_date": "2020-07-10",
    "popularity": 12.804,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/yf5IuMW6GHghu39kxA0oFx7Bxmj.jpg",
    "runtime": 90,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "palm-springs"
},

{
    "id": 960876,
    "title": "Destino Londres",
    "genre_ids": [
        12,
        35,
        18
    ],
    "release_date": "2023-12-21",
    "popularity": 10.402,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/xhtdOacwrLBkKw6wGHthDw7HS0s.jpg",
    "runtime": 160,
    "networks": [
        8,
        1796
    ],
    "certification": "N/A",
    "slug": "destino-londres"
},

{
    "id": 9297,
    "title": "A Casa Monstro",
    "genre_ids": [
        16,
        35,
        10751,
        14
    ],
    "release_date": "2006-06-30",
    "popularity": 11.969,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/qBEpDF693Bql7roL6LY3SsNHg52.jpg",
    "runtime": 91,
    "networks": [
        8,
        1899,
        484,
        1796,
        1825
    ],
    "certification": "L",
    "slug": "a-casa-monstro"
},

{
    "id": 87428,
    "title": "Este é o Meu Garoto",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2012-06-14",
    "popularity": 11.807,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/avc0QOU93qnpH9b9ocDGBwL68Qr.jpg",
    "runtime": 114,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "este-o-meu-garoto"
},

{
    "id": 1284856,
    "title": "Fé para o Impossível",
    "genre_ids": [
        18
    ],
    "release_date": "2025-02-20",
    "popularity": 12.595,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/hkHkedPu3RPcrAuMLwZLz1slfK3.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "12",
    "slug": "f-para-o-impossvel"
},

{
    "id": 11886,
    "title": "Robin Hood",
    "genre_ids": [
        16,
        10751,
        12
    ],
    "release_date": "1973-11-08",
    "popularity": 10.598,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/x9AvkYek0bGdxQSZ8W3lAjGrREm.jpg",
    "runtime": 83,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "robin-hood"
},

{
    "id": 5876,
    "title": "O Nevoeiro",
    "genre_ids": [
        27,
        878,
        53
    ],
    "release_date": "2007-11-21",
    "popularity": 12.998,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/nhK5Np3A9wBXAYzropa298TylCa.jpg",
    "runtime": 126,
    "networks": [
        119,
        2142,
        2141
    ],
    "certification": "18",
    "slug": "o-nevoeiro"
},

{
    "id": 15121,
    "title": "A Noviça Rebelde",
    "genre_ids": [
        18,
        10751,
        10402,
        10749
    ],
    "release_date": "1965-03-29",
    "popularity": 10.481,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/nF9wgSkAvjzJi6fF4oa8GcojTof.jpg",
    "runtime": 174,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-novia-rebelde"
},

{
    "id": 76,
    "title": "Antes do Amanhecer",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1995-01-27",
    "popularity": 13.153,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/o7778ruavZqENUIJQAeOvuPBN63.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "12",
    "slug": "antes-do-amanhecer"
},

{
    "id": 18360,
    "title": "Uma Noite no Museu 2",
    "genre_ids": [
        12,
        14,
        28,
        35,
        10751
    ],
    "release_date": "2009-05-20",
    "popularity": 10.928,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/36QBO6MzM6FIGaT36GHA6E2TPMY.jpg",
    "runtime": 105,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "uma-noite-no-museu-2"
},

{
    "id": 508642,
    "title": "Gonjiam: Manicômio Assombrado",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2018-03-28",
    "popularity": 10.867,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/cHzyFneiUCBT0FWYFqna5XE3lsj.jpg",
    "runtime": 95,
    "networks": [
        307
    ],
    "certification": "N/A",
    "slug": "gonjiam-manicmio-assombrado"
},

{
    "id": 1114738,
    "title": "Cemitério",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "2024-07-05",
    "popularity": 12.932,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/pXEBGe8n2L8XPTbDNonZzZeWtPd.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "cemitrio"
},

{
    "id": 1308546,
    "title": "Carved: Vingança de Halloween",
    "genre_ids": [
        27,
        35
    ],
    "release_date": "2024-10-21",
    "popularity": 10.273,
    "vote_average": 4.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/9DKH4j80eR4qAcGDoShlUO7D0Is.jpg",
    "runtime": 94,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "carved-vingana-de-halloween"
},

{
    "id": 95610,
    "title": "O Bebê de Bridget Jones",
    "genre_ids": [
        18,
        35,
        10749
    ],
    "release_date": "2016-09-14",
    "popularity": 12.695,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/rWNGMyqaJsu0noN1rSl03xotpcw.jpg",
    "runtime": 115,
    "networks": [
        119,
        307
    ],
    "certification": "12",
    "slug": "o-beb-de-bridget-jones"
},

{
    "id": 47933,
    "title": "Independence Day: O Ressurgimento",
    "genre_ids": [
        28,
        12,
        878
    ],
    "release_date": "2016-06-22",
    "popularity": 11.537,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/fpQEX5OrVfI6KftsuqpGTapKYpT.jpg",
    "runtime": 129,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "independence-day-o-ressurgimento"
},

{
    "id": 8839,
    "title": "Gasparzinho, o Fantasminha Camarada",
    "genre_ids": [
        14,
        35,
        10751
    ],
    "release_date": "1995-05-26",
    "popularity": 11.668,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/s89ACIwVDsESNyWbpe495Iigq8e.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "L",
    "slug": "gasparzinho-o-fantasminha-camarada"
},

{
    "id": 848538,
    "title": "Argylle: O Superespião",
    "genre_ids": [
        28,
        12,
        35,
        53
    ],
    "release_date": "2024-01-31",
    "popularity": 10.771,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/uD7M7cCgpt0Nlt8GgBP2NrvdT0h.jpg",
    "runtime": 139,
    "networks": [
        350
    ],
    "certification": "14",
    "slug": "argylle-o-superespio"
},

{
    "id": 27582,
    "title": "Assassino à Preço Fixo",
    "genre_ids": [
        28,
        53,
        80
    ],
    "release_date": "2011-01-13",
    "popularity": 12.253,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/AbO2OzFiWt9cEjgZfSOnp75ihGE.jpg",
    "runtime": 93,
    "networks": [
        2106,
        2107,
        2156
    ],
    "certification": "16",
    "slug": "assassino-preo-fixo"
},

{
    "id": 608,
    "title": "MIB - Homens de Preto II",
    "genre_ids": [
        28,
        35,
        878
    ],
    "release_date": "2002-07-03",
    "popularity": 11.464,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/kSdBScrDKwigykf5X51mFAHusS1.jpg",
    "runtime": 88,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "mib-homens-de-preto-ii"
},

{
    "id": 1262471,
    "title": "Laura",
    "genre_ids": [
        18
    ],
    "release_date": "2024-09-12",
    "popularity": 10.992,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/jubiMx3nbP48gJ1BYgqv25zQgxW.jpg",
    "runtime": 104,
    "networks": [],
    "certification": "N/A",
    "slug": "laura"
},

{
    "id": 1400304,
    "title": "ঘুমপরী",
    "genre_ids": [
        10749,
        9648
    ],
    "release_date": "2025-02-20",
    "popularity": 11.333,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/6YgcY5b4CKepMb1OofzzF0ao2Ha.jpg",
    "runtime": 113,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 24402,
    "title": "Emmanuelle",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1974-06-25",
    "popularity": 12.4,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/aUYDbpjBtn7BaRokrzSJZbByJtl.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "N/A",
    "slug": "emmanuelle"
},

{
    "id": 1995,
    "title": "Lara Croft: Tomb Raider",
    "genre_ids": [
        12,
        14,
        28,
        53
    ],
    "release_date": "2001-06-11",
    "popularity": 11.589,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/7WyMvoqPYJe5g1ENsbLTv40pUrX.jpg",
    "runtime": 101,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "lara-croft-tomb-raider"
},

{
    "id": 13078,
    "title": "Babysitters de Luxo",
    "genre_ids": [
        18
    ],
    "release_date": "2008-05-09",
    "popularity": 12.124,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/asI63FdIELIvEDIJSzC0CTIUb7S.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "N/A",
    "slug": "babysitters-de-luxo"
},

{
    "id": 347847,
    "title": "A Praia Assassina",
    "genre_ids": [
        27,
        878,
        35
    ],
    "release_date": "2015-08-28",
    "popularity": 10.209,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/AiahhUWOvxUhH0QAj1hb5NDcWj9.jpg",
    "runtime": 84,
    "networks": [],
    "certification": "N/A",
    "slug": "a-praia-assassina"
},

{
    "id": 108450,
    "title": "O Sorriso da Raposa",
    "genre_ids": [
        53
    ],
    "release_date": "1992-05-23",
    "popularity": 12.512,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/e0C6tkKajFSVOdqVtyELanfqyCc.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "o-sorriso-da-raposa"
},

{
    "id": 10660,
    "title": "Atraídos Pelo Destino",
    "genre_ids": [
        35,
        18,
        10749
    ],
    "release_date": "1994-07-29",
    "popularity": 11.392,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/cB3TxRhK2NbjfhJhZjNQHtmJXEa.jpg",
    "runtime": 101,
    "networks": [],
    "certification": "N/A",
    "slug": "atrados-pelo-destino"
},

{
    "id": 9381,
    "title": "Missão Babilônia",
    "genre_ids": [
        28,
        12,
        878,
        53
    ],
    "release_date": "2008-08-20",
    "popularity": 10.654,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/hv5pWWC6wNBz3HRAWk3QXV8pHU8.jpg",
    "runtime": 101,
    "networks": [
        337
    ],
    "certification": "N/A",
    "slug": "misso-babilnia"
},

{
    "id": 1010161,
    "title": "Limpeza Perigosa",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2024-09-12",
    "popularity": 12.172,
    "vote_average": 5.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/zjRVgmAcyFPVgxOt4rK0LZn0rEV.jpg",
    "runtime": 95,
    "networks": [],
    "certification": "N/A",
    "slug": "limpeza-perigosa"
},

{
    "id": 658,
    "title": "007 Contra Goldfinger",
    "genre_ids": [
        12,
        28,
        53
    ],
    "release_date": "1964-09-20",
    "popularity": 11.137,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/aSFbyik1bd3xQxyPQbahdcaCYwT.jpg",
    "runtime": 110,
    "networks": [],
    "certification": "12",
    "slug": "007-contra-goldfinger"
},

{
    "id": 15070,
    "title": "O Imbatível",
    "genre_ids": [
        18,
        80,
        28
    ],
    "release_date": "2002-07-17",
    "popularity": 11.246,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/3g7GhbBStlvuoacVO01T0YuozET.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "o-imbatvel"
},

{
    "id": 1417061,
    "title": "Empress",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-25",
    "popularity": 10.821,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/zhbYa3dY5cUALSyBawOnA5nzJzl.jpg",
    "runtime": 10,
    "networks": [],
    "certification": "N/A",
    "slug": "empress"
},

{
    "id": 752623,
    "title": "Cidade Perdida",
    "genre_ids": [
        28,
        12,
        35
    ],
    "release_date": "2022-03-24",
    "popularity": 12.34,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/d7UDN9MneeJjtmIadewpxdt9IJM.jpg",
    "runtime": 112,
    "networks": [],
    "certification": "14",
    "slug": "cidade-perdida"
},

{
    "id": 13002,
    "title": "Barbie em as 12 Princesas Bailarinas",
    "genre_ids": [
        16,
        10751
    ],
    "release_date": "2006-09-19",
    "popularity": 12.061,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/d1WbtY6ThUE2P7riFqmPIYCnUdi.jpg",
    "runtime": 82,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "barbie-em-as-12-princesas-bailarinas"
},

{
    "id": 90148,
    "title": "De Amor e de Sombras",
    "genre_ids": [
        18
    ],
    "release_date": "1994-05-10",
    "popularity": 10.703,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/kh5gM6o9vV6BwNpodrHV3zQrBFd.jpg",
    "runtime": 103,
    "networks": [
        447
    ],
    "certification": "N/A",
    "slug": "de-amor-e-de-sombras"
},

{
    "id": 419680,
    "title": "Pai em Dose Dupla 2",
    "genre_ids": [
        35
    ],
    "release_date": "2017-11-09",
    "popularity": 10.538,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/inZWZUAOSKUHYB91ZEKrvgJufM7.jpg",
    "runtime": 100,
    "networks": [
        337,
        8,
        1796,
        2156
    ],
    "certification": "12",
    "slug": "pai-em-dose-dupla-2"
},

{
    "id": 11423,
    "title": "Memórias de um Assassino",
    "genre_ids": [
        80,
        18,
        53
    ],
    "release_date": "2003-04-25",
    "popularity": 11.898,
    "vote_average": 8.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/at0y2qjWdxUzIGTjN6Juqx8zcYU.jpg",
    "runtime": 131,
    "networks": [],
    "certification": "14",
    "slug": "memrias-de-um-assassino"
},

{
    "id": 580116,
    "title": "ザ・レイプ",
    "genre_ids": [
        18
    ],
    "release_date": "1982-05-15",
    "popularity": 11.047,
    "vote_average": 4.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/kY6gWfEJMjJ0JSvDkBuOCB3U6v0.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 534171,
    "title": "동창회의 목적 2",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2017-08-31",
    "popularity": 11.735,
    "vote_average": 5.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/iLzUj5gGtJbAIfbPaS3v0ITZhmD.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "N/A",
    "slug": "-2"
},

{
    "id": 10897,
    "title": "Os Batutinhas",
    "genre_ids": [
        10749,
        35,
        10751
    ],
    "release_date": "1994-08-05",
    "popularity": 10.337,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/x4UChnACHypljR6fmKg6vuM14Nh.jpg",
    "runtime": 82,
    "networks": [],
    "certification": "N/A",
    "slug": "os-batutinhas"
},

{
    "id": 16237,
    "title": "Os Jovens Titãs: Missão Tóquio",
    "genre_ids": [
        16,
        28,
        878,
        10770
    ],
    "release_date": "2006-09-15",
    "popularity": 10.402,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/oGBqTcA3sTLbcUy4s07RIYcGy2J.jpg",
    "runtime": 75,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "os-jovens-tits-misso-tquio"
},

{
    "id": 1792,
    "title": "Ligado em Você",
    "genre_ids": [
        35
    ],
    "release_date": "2003-12-10",
    "popularity": 11.198,
    "vote_average": 5.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/2vDNBQb1orr8egzhybh7SHqDmeC.jpg",
    "runtime": 119,
    "networks": [],
    "certification": "N/A",
    "slug": "ligado-em-voc"
},

{
    "id": 414,
    "title": "Batman Eternamente",
    "genre_ids": [
        28,
        80,
        14
    ],
    "release_date": "1995-06-16",
    "popularity": 10.146,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/tEwd28NegRgXmZdiEJeVrclYZfX.jpg",
    "runtime": 122,
    "networks": [
        1899,
        1825
    ],
    "certification": "10",
    "slug": "batman-eternamente"
},

{
    "id": 4108,
    "title": "Carga Explosiva",
    "genre_ids": [
        28,
        80,
        53
    ],
    "release_date": "2002-10-02",
    "popularity": 11.969,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/iajTcyco5MEscLp0ue59lVY2WtH.jpg",
    "runtime": 92,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "carga-explosiva"
},

{
    "id": 718789,
    "title": "Lightyear",
    "genre_ids": [
        16,
        878,
        10751,
        12
    ],
    "release_date": "2022-06-15",
    "popularity": 10.597,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/quK8xFFhFsAlPTjxEL6CXytuYCr.jpg",
    "runtime": 105,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "lightyear"
},

{
    "id": 137106,
    "title": "Uma Aventura Lego",
    "genre_ids": [
        16,
        10751,
        12,
        35,
        14
    ],
    "release_date": "2014-02-06",
    "popularity": 11.806,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/yFAP5ePJuKaiFNm0h3hi3P3p19E.jpg",
    "runtime": 100,
    "networks": [
        1899
    ],
    "certification": "L",
    "slug": "uma-aventura-lego"
},

{
    "id": 1300962,
    "title": "A Fera Interior",
    "genre_ids": [
        27,
        18,
        53
    ],
    "release_date": "2024-07-22",
    "popularity": 12.797,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/rfvQPZBRmpwAPm0ZcJ1EKsmS1vz.jpg",
    "runtime": 97,
    "networks": [],
    "certification": "N/A",
    "slug": "a-fera-interior"
},

{
    "id": 965150,
    "title": "Aftersun",
    "genre_ids": [
        18
    ],
    "release_date": "2022-10-21",
    "popularity": 12.986,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/xjOVvfI8aRKQNvSbFJgGTyampn9.jpg",
    "runtime": 102,
    "networks": [
        8,
        11,
        1796,
        201
    ],
    "certification": "N/A",
    "slug": "aftersun"
},

{
    "id": 33,
    "title": "Os Imperdoáveis",
    "genre_ids": [
        37
    ],
    "release_date": "1992-08-07",
    "popularity": 12.595,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/4kKECOE65RoVjrXI1ukAZCutLUO.jpg",
    "runtime": 131,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "os-imperdoveis"
},

{
    "id": 854887,
    "title": "Gods of the Deep",
    "genre_ids": [
        878,
        53,
        27
    ],
    "release_date": "2023-12-04",
    "popularity": 10.478,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/ea8609DKrceNJocKEUpDom6mHzx.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "gods-of-the-deep"
},

{
    "id": 1214484,
    "title": "O Que Tiver Que Ser",
    "genre_ids": [
        18
    ],
    "release_date": "2024-11-01",
    "popularity": 13.141,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/ctOQLoHn7UKYmVD62L3yGQC5MHr.jpg",
    "runtime": 110,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "o-que-tiver-que-ser"
},

{
    "id": 258509,
    "title": "Alvin e os Esquilos: Na Estrada",
    "genre_ids": [
        10751,
        12,
        35,
        10402,
        16
    ],
    "release_date": "2015-12-17",
    "popularity": 12.932,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/1XuMjOFkfSpMz0ID6SSG2ISawVP.jpg",
    "runtime": 86,
    "networks": [],
    "certification": "L",
    "slug": "alvin-e-os-esquilos-na-estrada"
},

{
    "id": 58595,
    "title": "Branca de Neve e o Caçador",
    "genre_ids": [
        12,
        14,
        18
    ],
    "release_date": "2012-05-30",
    "popularity": 10.867,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/jlXNRuDfoCRLvnVwU41DLO0p3ze.jpg",
    "runtime": 127,
    "networks": [
        8,
        119,
        307,
        1796
    ],
    "certification": "12",
    "slug": "branca-de-neve-e-o-caador"
},

{
    "id": 348350,
    "title": "Han Solo: Uma História Star Wars",
    "genre_ids": [
        878,
        12,
        28
    ],
    "release_date": "2018-05-15",
    "popularity": 11.666,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/jAMEX0syUh6sbjBiysibzrFpbo.jpg",
    "runtime": 135,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "han-solo-uma-histria-star-wars"
},

{
    "id": 11474,
    "title": "Os Selvagens da Noite",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "1979-02-01",
    "popularity": 10.261,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/2EGQFgs0CrjscXrU3JG7OOMfDGJ.jpg",
    "runtime": 92,
    "networks": [],
    "certification": "14",
    "slug": "os-selvagens-da-noite"
},

{
    "id": 1078812,
    "title": "Lifeline",
    "genre_ids": [
        9648,
        53,
        18
    ],
    "release_date": "2025-02-21",
    "popularity": 12.693,
    "vote_average": 4.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/OQIDQSO8IDkS0hkzG8aY3A6O1a.jpg",
    "runtime": 80,
    "networks": [],
    "certification": "N/A",
    "slug": "lifeline"
},

{
    "id": 1008953,
    "title": "Os Novatos",
    "genre_ids": [
        35
    ],
    "release_date": "2024-08-22",
    "popularity": 11.453,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/fMLoToKANoJdDOLKrqoDLsCvcNY.jpg",
    "runtime": 92,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "os-novatos"
},

{
    "id": 197796,
    "title": "A Bela e a Fera",
    "genre_ids": [
        14,
        10749
    ],
    "release_date": "2014-02-12",
    "popularity": 10.075,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/om96D2NF9w4UyrprQ882DrTFBol.jpg",
    "runtime": 113,
    "networks": [
        307,
        2106,
        2107,
        2156
    ],
    "certification": "12",
    "slug": "a-bela-e-a-fera"
},

{
    "id": 508586,
    "title": "젊은장모",
    "genre_ids": [
        10749
    ],
    "release_date": "2018-03-09",
    "popularity": 10.759,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/jIn3Z3heGwcRZQcR2f1wY9JMuzv.jpg",
    "runtime": 81,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1434099,
    "title": "Dawid Podsiadło - zapis koncertu 360° ze Stadionu Śląskiego w Chorzowie",
    "genre_ids": [
        10402
    ],
    "release_date": "2025-02-21",
    "popularity": 12.249,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/1tLvF2uSwnqYxba7KeS9Ua2d3pz.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "dawid-podsiado-zapis-koncertu-360-ze-stadionu-lskiego-w-chorzowie"
},

{
    "id": 46529,
    "title": "Eu Sou o Número Quatro",
    "genre_ids": [
        28,
        53,
        878,
        12
    ],
    "release_date": "2011-02-18",
    "popularity": 12.172,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/AnKKqP6pRZah0KayZMiT6ifZde4.jpg",
    "runtime": 109,
    "networks": [],
    "certification": "12",
    "slug": "eu-sou-o-nmero-quatro"
},

{
    "id": 18095,
    "title": "Dragon Ball GT: O Legado de um Herói",
    "genre_ids": [
        12,
        28,
        16,
        878
    ],
    "release_date": "1997-03-26",
    "popularity": 11.536,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/giJnisBQfE1LqfOdWZojDc2lh8c.jpg",
    "runtime": 44,
    "networks": [],
    "certification": "N/A",
    "slug": "dragon-ball-gt-o-legado-de-um-heri"
},

{
    "id": 1572,
    "title": "Duro de Matar 3: A Vingança",
    "genre_ids": [
        28,
        53
    ],
    "release_date": "1995-05-19",
    "popularity": 12.121,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/rujGZSxMjAXFSwbikMycrJNCMeW.jpg",
    "runtime": 128,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "duro-de-matar-3-a-vingana"
},

{
    "id": 9361,
    "title": "O Último dos Moicanos",
    "genre_ids": [
        28,
        36,
        10749,
        10752
    ],
    "release_date": "1992-08-26",
    "popularity": 10.207,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/fvC4Z4kO62V3vKD230V8jmOEzE7.jpg",
    "runtime": 115,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "o-ltimo-dos-moicanos"
},

{
    "id": 415,
    "title": "Batman & Robin",
    "genre_ids": [
        28,
        878,
        12
    ],
    "release_date": "1997-06-20",
    "popularity": 10.927,
    "vote_average": 4.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/cGRDufDDSrFrv7VI4YnmWnslne0.jpg",
    "runtime": 125,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "batman-robin"
},

{
    "id": 594,
    "title": "O Terminal",
    "genre_ids": [
        35,
        18
    ],
    "release_date": "2004-06-17",
    "popularity": 11.587,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/79KN5lZ286El2GDjIomyN29jx80.jpg",
    "runtime": 129,
    "networks": [],
    "certification": "12",
    "slug": "o-terminal"
},

{
    "id": 43947,
    "title": "Doce Vingança",
    "genre_ids": [
        53,
        80,
        27
    ],
    "release_date": "2010-06-17",
    "popularity": 11.333,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/3Awd26Ktx3E9VuIcHkRcIIIp9G0.jpg",
    "runtime": 108,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "18",
    "slug": "doce-vingana"
},

{
    "id": 19908,
    "title": "Zumbilândia",
    "genre_ids": [
        35,
        27
    ],
    "release_date": "2009-10-02",
    "popularity": 12.4,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/mXuFhb5U2FgVq8uu4k3luQVRwLK.jpg",
    "runtime": 88,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "zumbilndia"
},

{
    "id": 4982,
    "title": "O Gângster",
    "genre_ids": [
        18,
        80
    ],
    "release_date": "2007-11-02",
    "popularity": 12.508,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/gXHWwa2EUCE9BKrdzwyOiWxuufh.jpg",
    "runtime": 157,
    "networks": [],
    "certification": "18",
    "slug": "o-gngster"
},

{
    "id": 600583,
    "title": "Ataque dos Cães",
    "genre_ids": [
        18,
        37
    ],
    "release_date": "2021-10-25",
    "popularity": 11.39,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/pTieUAFyDbC22uq0p7uMT1wBYax.jpg",
    "runtime": 125,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "ataque-dos-ces"
},

{
    "id": 1954,
    "title": "Efeito Borboleta",
    "genre_ids": [
        878,
        53
    ],
    "release_date": "2004-01-17",
    "popularity": 12.34,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/seGq2XbyB5e0WfYAPbHLmqNKynE.jpg",
    "runtime": 119,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "efeito-borboleta"
},

{
    "id": 8656,
    "title": "Impacto Profundo",
    "genre_ids": [
        28,
        18,
        878
    ],
    "release_date": "1998-05-08",
    "popularity": 11.245,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/32CAzrGEHZu8Go6QLLVCjPglHTX.jpg",
    "runtime": 121,
    "networks": [],
    "certification": "12",
    "slug": "impacto-profundo"
},

{
    "id": 62214,
    "title": "Frankenweenie",
    "genre_ids": [
        16,
        35,
        10751
    ],
    "release_date": "2012-10-04",
    "popularity": 10.042,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bvwbt1S0hrCDcszV8Fzmy0BVI4G.jpg",
    "runtime": 87,
    "networks": [
        337
    ],
    "certification": "10",
    "slug": "frankenweenie"
},

{
    "id": 1073382,
    "title": "清宫性史3之名妓风流",
    "genre_ids": [
        18
    ],
    "release_date": "2002-01-01",
    "popularity": 10.817,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/x4uTJnrB9AV7jm0bs541Eie0IeP.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "3"
},

{
    "id": 699,
    "title": "007 Somente para Seus Olhos",
    "genre_ids": [
        12,
        28,
        53
    ],
    "release_date": "1981-06-24",
    "popularity": 10.654,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/v3TFKkWFgsQcBvN29s1P7meOt2j.jpg",
    "runtime": 128,
    "networks": [],
    "certification": "12",
    "slug": "007-somente-para-seus-olhos"
},

{
    "id": 963765,
    "title": "Estranha Forma de Vida",
    "genre_ids": [
        18,
        37,
        10749
    ],
    "release_date": "2023-05-26",
    "popularity": 11.124,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/tr8LOwkfUHx2W6SB9NPoU7vi4XB.jpg",
    "runtime": 31,
    "networks": [
        1899,
        11,
        484,
        1825,
        201
    ],
    "certification": "14",
    "slug": "estranha-forma-de-vida"
},

{
    "id": 804150,
    "title": "O Urso do Pó Branco",
    "genre_ids": [
        53,
        35,
        80
    ],
    "release_date": "2023-02-22",
    "popularity": 11.884,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/h2tS3f9s386fitoHjDMvQGm2w8q.jpg",
    "runtime": 95,
    "networks": [
        8,
        1796
    ],
    "certification": "18",
    "slug": "o-urso-do-p-branco"
},

{
    "id": 9654,
    "title": "Uma Saída de Mestre",
    "genre_ids": [
        28,
        80
    ],
    "release_date": "2003-05-30",
    "popularity": 12.061,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/rxEQJrBn0swmqZyXiHDYzPNEion.jpg",
    "runtime": 111,
    "networks": [
        307
    ],
    "certification": "12",
    "slug": "uma-sada-de-mestre"
},

{
    "id": 503736,
    "title": "Army of the Dead: Invasão em Las Vegas",
    "genre_ids": [
        28,
        80,
        27
    ],
    "release_date": "2021-05-14",
    "popularity": 10.986,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/sdVbjJ33SQO2caG6DkYKRhSyrja.jpg",
    "runtime": 148,
    "networks": [
        8,
        1796
    ],
    "certification": "18",
    "slug": "army-of-the-dead-invaso-em-las-vegas"
},

{
    "id": 23827,
    "title": "Atividade Paranormal",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2007-09-14",
    "popularity": 10.538,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/jV5eAsOTf7zsL4glY51gTW6Vb05.jpg",
    "runtime": 86,
    "networks": [
        47,
        683
    ],
    "certification": "16",
    "slug": "atividade-paranormal"
},

{
    "id": 481084,
    "title": "A Família Addams",
    "genre_ids": [
        10751,
        16,
        35,
        14
    ],
    "release_date": "2019-10-10",
    "popularity": 10.401,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/mDCIHb6BJ27PhdAz36JWc4chKlb.jpg",
    "runtime": 87,
    "networks": [
        307,
        2142,
        2141
    ],
    "certification": "L",
    "slug": "a-famlia-addams"
},

{
    "id": 136799,
    "title": "Trolls",
    "genre_ids": [
        10751,
        16,
        14,
        12,
        35,
        10402
    ],
    "release_date": "2016-10-13",
    "popularity": 11.735,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/qVbNDmPrbnfgINfEoAMx41N7IfH.jpg",
    "runtime": 90,
    "networks": [
        119,
        167,
        307,
        2156
    ],
    "certification": "L",
    "slug": "trolls"
},

{
    "id": 9833,
    "title": "O Fantasma da Ópera",
    "genre_ids": [
        53,
        18,
        10749
    ],
    "release_date": "2004-12-08",
    "popularity": 10.702,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/tevlea1T7hUA5mZnnrbJnWjtJwV.jpg",
    "runtime": 141,
    "networks": [],
    "certification": "N/A",
    "slug": "o-fantasma-da-pera"
},

{
    "id": 3176,
    "title": "Batalha Real",
    "genre_ids": [
        18,
        53,
        28
    ],
    "release_date": "2000-12-16",
    "popularity": 10.593,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/vb9uxz4bnrIESHOPfNYohq9wKNw.jpg",
    "runtime": 113,
    "networks": [
        11,
        201
    ],
    "certification": "N/A",
    "slug": "batalha-real"
},

{
    "id": 642885,
    "title": "Abracadabra 2",
    "genre_ids": [
        14,
        35,
        10751
    ],
    "release_date": "2022-09-27",
    "popularity": 10.336,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/8G7EaPTocE0ok3YNxo972woo9EP.jpg",
    "runtime": 105,
    "networks": [
        337
    ],
    "certification": "12",
    "slug": "abracadabra-2"
},

{
    "id": 76163,
    "title": "Os Mercenários 2",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2012-08-08",
    "popularity": 11.047,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/7aaQYcUInTneXo7B8jJNwTxnQe6.jpg",
    "runtime": 103,
    "networks": [
        119,
        1899,
        1825,
        2156
    ],
    "certification": "16",
    "slug": "os-mercenrios-2"
},

{
    "id": 1232546,
    "title": "Until Dawn: Noite de Terror",
    "genre_ids": [
        27
    ],
    "release_date": "2025-04-23",
    "popularity": 11.967,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/95YgqGDuUNSGrx5Obz51tlQLwWb.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "until-dawn-noite-de-terror"
},

{
    "id": 438478,
    "title": "Pornocratie: Les nouvelles multinationales du sexe",
    "genre_ids": [
        99
    ],
    "release_date": "2017-03-12",
    "popularity": 11.186,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/eCiFijXNa3JhIpPJRCXuR9DH6o6.jpg",
    "runtime": 77,
    "networks": [],
    "certification": "N/A",
    "slug": "pornocratie-les-nouvelles-multinationales-du-sexe"
},

{
    "id": 138103,
    "title": "Os Mercenários 3",
    "genre_ids": [
        28,
        12,
        53
    ],
    "release_date": "2014-08-07",
    "popularity": 12.796,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/gz7NHfeX2Ns5uISksirOlPtJrua.jpg",
    "runtime": 126,
    "networks": [
        307,
        1853,
        2106,
        2107,
        2156
    ],
    "certification": "14",
    "slug": "os-mercenrios-3"
},

{
    "id": 297761,
    "title": "Esquadrão Suicida",
    "genre_ids": [
        28,
        12,
        14
    ],
    "release_date": "2016-08-03",
    "popularity": 11.804,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/4UNw4Z105Eke1b4Eb1zldym9R6.jpg",
    "runtime": 123,
    "networks": [
        1899,
        1825
    ],
    "certification": "12",
    "slug": "esquadro-suicida"
},

{
    "id": 91586,
    "title": "Sobrenatural: Capítulo 2",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2013-09-12",
    "popularity": 10.144,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/9L8Ar7ayazSXPNLNxiaVWOCjzrf.jpg",
    "runtime": 106,
    "networks": [
        8,
        1899,
        1796,
        1825
    ],
    "certification": "14",
    "slug": "sobrenatural-captulo-2"
},

{
    "id": 11852,
    "title": "Garota Veneno",
    "genre_ids": [
        35,
        14
    ],
    "release_date": "2002-12-13",
    "popularity": 10.478,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/645ztWyBFO7voOuhtkEutTUCIwJ.jpg",
    "runtime": 104,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "garota-veneno"
},

{
    "id": 638449,
    "title": "A Última Carta de Amor",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2021-07-23",
    "popularity": 10.003,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/faiC6bHYQEOzXKw20LNthaHurx0.jpg",
    "runtime": 110,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "a-ltima-carta-de-amor"
},

{
    "id": 5255,
    "title": "O Expresso Polar",
    "genre_ids": [
        16,
        12,
        10751,
        14
    ],
    "release_date": "2004-11-10",
    "popularity": 12.926,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/adXE99ie9wBdpdvdrB2HDpl9aoV.jpg",
    "runtime": 100,
    "networks": [
        119
    ],
    "certification": "L",
    "slug": "o-expresso-polar"
},

{
    "id": 117,
    "title": "Os Intocáveis",
    "genre_ids": [
        80,
        36,
        53
    ],
    "release_date": "1987-06-03",
    "popularity": 10.861,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/koEvh0qJ2cYdHD2fPGK6UGw7mo5.jpg",
    "runtime": 119,
    "networks": [],
    "certification": "14",
    "slug": "os-intocveis"
},

{
    "id": 1094844,
    "title": "Macaco vs. Máquina",
    "genre_ids": [
        28,
        878
    ],
    "release_date": "2023-03-24",
    "popularity": 12.589,
    "vote_average": 5.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/isXDRoaeOm7BJVXVwPzPTnKWKqi.jpg",
    "runtime": 80,
    "networks": [
        47,
        683
    ],
    "certification": "N/A",
    "slug": "macaco-vs-mquina"
},

{
    "id": 264859,
    "title": "Sechs Schwedinnen auf der Alm",
    "genre_ids": [
        10749,
        35
    ],
    "release_date": "1983-07-22",
    "popularity": 11.665,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/gIhI5Y7IFNv2yo8tmkX1xabg3yB.jpg",
    "runtime": 90,
    "networks": [],
    "certification": "N/A",
    "slug": "sechs-schwedinnen-auf-der-alm"
},

{
    "id": 138832,
    "title": "Família do Bagulho",
    "genre_ids": [
        35,
        80
    ],
    "release_date": "2013-08-07",
    "popularity": 12.686,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/d3JidSElLNqkJdddZmGdwPr9DCg.jpg",
    "runtime": 110,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "famlia-do-bagulho"
},

{
    "id": 10734,
    "title": "Alcatraz: Fuga Impossível",
    "genre_ids": [
        18,
        53
    ],
    "release_date": "1979-06-22",
    "popularity": 10.261,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/hxmqEhjMIC5OPc6uQVGHhArWNSV.jpg",
    "runtime": 113,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "alcatraz-fuga-impossvel"
},

{
    "id": 11770,
    "title": "Kung Fu Futebol Clube",
    "genre_ids": [
        28,
        35
    ],
    "release_date": "2001-07-05",
    "popularity": 10.754,
    "vote_average": 7.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/rO1YoR49hs9QPla0vwCxrMLln33.jpg",
    "runtime": 112,
    "networks": [
        8,
        1796
    ],
    "certification": "L",
    "slug": "kung-fu-futebol-clube"
},

{
    "id": 482134,
    "title": "Malù e l'amante",
    "genre_ids": [
        18
    ],
    "release_date": "1991-01-01",
    "popularity": 12.249,
    "vote_average": 5.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/q6JbqmvxNECdgBnOnQgkoVQDlK8.jpg",
    "runtime": 104,
    "networks": [],
    "certification": "N/A",
    "slug": "mal-e-lamante"
},

{
    "id": 885303,
    "title": "I viaggiatori",
    "genre_ids": [
        14,
        12,
        10770
    ],
    "release_date": "2022-11-21",
    "popularity": 10.07,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/uDJAvuOrULRF2cRYIElQkiyyh0N.jpg",
    "runtime": 108,
    "networks": [],
    "certification": "N/A",
    "slug": "i-viaggiatori"
},

{
    "id": 1207123,
    "title": "白蛇：浮生",
    "genre_ids": [
        16,
        10749,
        35,
        14
    ],
    "release_date": "2024-07-30",
    "popularity": 12.118,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/7tltIsVonubKCBUVpzsfaK4FaDF.jpg",
    "runtime": 133,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 1185528,
    "title": "射雕英雄传：侠之大者",
    "genre_ids": [
        28,
        18,
        36
    ],
    "release_date": "2025-01-29",
    "popularity": 11.45,
    "vote_average": 6.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/j7a1A5iiIP9no43YjWdBHLJFEQB.jpg",
    "runtime": 147,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 4258,
    "title": "Todo Mundo em Pânico 5",
    "genre_ids": [
        35
    ],
    "release_date": "2013-04-11",
    "popularity": 12.169,
    "vote_average": 4.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/xx8Lw28eJGEn8QyQVQExuIBDo3z.jpg",
    "runtime": 86,
    "networks": [
        2156
    ],
    "certification": "14",
    "slug": "todo-mundo-em-pnico-5"
},

{
    "id": 10065,
    "title": "Horror em Amityville",
    "genre_ids": [
        27
    ],
    "release_date": "2005-04-14",
    "popularity": 11.536,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/nLjpuiEFUUVPGHRg5OPsfNDcHOK.jpg",
    "runtime": 89,
    "networks": [],
    "certification": "16",
    "slug": "horror-em-amityville"
},

{
    "id": 178809,
    "title": "A Colônia",
    "genre_ids": [
        28,
        878,
        53
    ],
    "release_date": "2013-04-12",
    "popularity": 9.949,
    "vote_average": 5.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/Acc3skjs4TGxF6G7VxG3WvVvbRr.jpg",
    "runtime": 94,
    "networks": [
        119,
        484
    ],
    "certification": "N/A",
    "slug": "a-colnia"
},

{
    "id": 1433593,
    "title": "El hilo rojo",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2025-02-13",
    "popularity": 12.398,
    "vote_average": 8.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/mZ8Z4jCDVlBflEuCOwH3NCDyqBP.jpg",
    "runtime": 99,
    "networks": [],
    "certification": "N/A",
    "slug": "el-hilo-rojo"
},

{
    "id": 808806,
    "title": "地下鉄連続レイプ 制服狩り",
    "genre_ids": [
        18
    ],
    "release_date": "1987-04-28",
    "popularity": 10.198,
    "vote_average": 1.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bG6xP4WyWNS2KY1tkk0ZGMSIf91.jpg",
    "runtime": 60,
    "networks": [],
    "certification": "N/A",
    "slug": "-"
},

{
    "id": 8856,
    "title": "Karatê Kid 2: A Hora da Verdade Continua",
    "genre_ids": [
        12,
        18,
        28,
        10749,
        10751
    ],
    "release_date": "1986-06-18",
    "popularity": 10.924,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/4Mx62yRDa1g2VrPgvrursLkOXFI.jpg",
    "runtime": 113,
    "networks": [
        1899,
        1825
    ],
    "certification": "L",
    "slug": "karat-kid-2-a-hora-da-verdade-continua"
},

{
    "id": 979,
    "title": "Irreversível",
    "genre_ids": [
        18,
        53,
        80
    ],
    "release_date": "2002-05-22",
    "popularity": 11.585,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/TfK6g4czNl0OedlC5hfKsQUXRe.jpg",
    "runtime": 94,
    "networks": [],
    "certification": "N/A",
    "slug": "irreversvel"
},

{
    "id": 7278,
    "title": "Espartalhões",
    "genre_ids": [
        35,
        14
    ],
    "release_date": "2008-01-24",
    "popularity": 11.331,
    "vote_average": 4.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/3wvTTv6J4R53kGKP1Tj6IMcxnl.jpg",
    "runtime": 84,
    "networks": [
        337,
        119
    ],
    "certification": "N/A",
    "slug": "espartalhes"
},

{
    "id": 1155828,
    "title": "Sing Sing",
    "genre_ids": [
        18
    ],
    "release_date": "2024-07-12",
    "popularity": 12.505,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/vOWG25kbkyt5AYTzoJals7Gytj.jpg",
    "runtime": 107,
    "networks": [],
    "certification": "N/A",
    "slug": "sing-sing"
},

{
    "id": 795514,
    "title": "A Vida Depois",
    "genre_ids": [
        18
    ],
    "release_date": "2021-03-17",
    "popularity": 12.316,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/oFU6XQAQR6SidzNTnPLzNj9Xc4H.jpg",
    "runtime": 96,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "a-vida-depois"
},

{
    "id": 214,
    "title": "Jogos Mortais III",
    "genre_ids": [
        27,
        53,
        80
    ],
    "release_date": "2006-10-26",
    "popularity": 10.041,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/8LOtN2XDwAOB6xsjOhE1gi62XWg.jpg",
    "runtime": 108,
    "networks": [
        119
    ],
    "certification": "18",
    "slug": "jogos-mortais-iii"
},

{
    "id": 293670,
    "title": "O Lamento",
    "genre_ids": [
        27,
        9648
    ],
    "release_date": "2016-05-12",
    "popularity": 11.123,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/mL4vGghS5XtgeNIPjhoTg8Tv5cJ.jpg",
    "runtime": 156,
    "networks": [
        2106,
        2107,
        464
    ],
    "certification": "16",
    "slug": "o-lamento"
},

{
    "id": 9567,
    "title": "Lágrimas do Sol",
    "genre_ids": [
        10752,
        28,
        18
    ],
    "release_date": "2003-03-07",
    "popularity": 10.981,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/WksMUDKv4I241w6mR263m3IKBs.jpg",
    "runtime": 121,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "lgrimas-do-sol"
},

{
    "id": 21542,
    "title": "Amor de Aluguel",
    "genre_ids": [
        35,
        18,
        10751,
        10749
    ],
    "release_date": "2003-12-12",
    "popularity": 12.059,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/gN70AFvskYNEWEa0AMQhT0aEjml.jpg",
    "runtime": 100,
    "networks": [],
    "certification": "14",
    "slug": "amor-de-aluguel"
},

{
    "id": 876792,
    "title": "That Time I Get Reincarnated as a Slime: O Filme",
    "genre_ids": [
        16,
        14,
        12
    ],
    "release_date": "2022-11-25",
    "popularity": 10.334,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/13SyU6DvAwgI5MZdYJPTjhk6N50.jpg",
    "runtime": 108,
    "networks": [
        283,
        1968
    ],
    "certification": "N/A",
    "slug": "that-time-i-get-reincarnated-as-a-slime-o-filme"
},

{
    "id": 12405,
    "title": "Quem Quer Ser um Milionário?",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2008-11-12",
    "popularity": 10.817,
    "vote_average": 7.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/timJSy64zR0BM2xhkXwIyvDG6MM.jpg",
    "runtime": 120,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "quem-quer-ser-um-milionrio"
},

{
    "id": 406990,
    "title": "Onde Está Segunda?",
    "genre_ids": [
        878,
        53,
        18,
        9648,
        28
    ],
    "release_date": "2017-08-18",
    "popularity": 11.184,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/pIDqKzz7Y0Unm9Sv4HW48EAW1CA.jpg",
    "runtime": 123,
    "networks": [
        8,
        1796
    ],
    "certification": "16",
    "slug": "onde-est-segunda"
},

{
    "id": 9392,
    "title": "Abismo do Medo",
    "genre_ids": [
        12,
        27
    ],
    "release_date": "2005-07-08",
    "popularity": 11.962,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/bXH40hPdlujsxOMx1COeR35o3BP.jpg",
    "runtime": 100,
    "networks": [
        119
    ],
    "certification": "16",
    "slug": "abismo-do-medo"
},

{
    "id": 10201,
    "title": "Sim Senhor",
    "genre_ids": [
        35,
        10749
    ],
    "release_date": "2008-12-09",
    "popularity": 10.653,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/vP7CLW9G6HCSwUKVJiEDmRC1eeV.jpg",
    "runtime": 104,
    "networks": [
        1899,
        1825
    ],
    "certification": "14",
    "slug": "sim-senhor"
},

{
    "id": 82695,
    "title": "Os Miseráveis",
    "genre_ids": [
        36,
        18
    ],
    "release_date": "2012-12-18",
    "popularity": 10.699,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/BNYPwiysQXdFdNy41PDDIIjW5D.jpg",
    "runtime": 158,
    "networks": [],
    "certification": "14",
    "slug": "os-miserveis"
},

{
    "id": 1384687,
    "title": "Aliens Uncovered: Jesuit Secrets",
    "genre_ids": [
        99
    ],
    "release_date": "2025-02-25",
    "popularity": 11.385,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/aV20bL2Ix0bEwOtK07u97DX4u80.jpg",
    "runtime": 0,
    "networks": [],
    "certification": "N/A",
    "slug": "aliens-uncovered-jesuit-secrets"
},

{
    "id": 10402,
    "title": "Gigolô por Acidente",
    "genre_ids": [
        35
    ],
    "release_date": "1999-12-10",
    "popularity": 11.883,
    "vote_average": 6.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/iankBqCLmrQkU1UVNBG52kvFFns.jpg",
    "runtime": 88,
    "networks": [],
    "certification": "14",
    "slug": "gigol-por-acidente"
},

{
    "id": 9016,
    "title": "Planeta do Tesouro",
    "genre_ids": [
        12,
        16,
        10751,
        14,
        878
    ],
    "release_date": "2002-11-26",
    "popularity": 12.788,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/4GJnKM1CLylmp8phkyiITiwu7L.jpg",
    "runtime": 95,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "planeta-do-tesouro"
},

{
    "id": 602223,
    "title": "Uma Noite de Crime:  A Fronteira",
    "genre_ids": [
        28,
        27,
        53
    ],
    "release_date": "2021-06-30",
    "popularity": 11.043,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/v9d5RN9j9BbqBQm4L7oTLIM3qu2.jpg",
    "runtime": 103,
    "networks": [],
    "certification": "16",
    "slug": "uma-noite-de-crime-a-fronteira"
},

{
    "id": 6466,
    "title": "Freddy x Jason",
    "genre_ids": [
        27
    ],
    "release_date": "2003-08-15",
    "popularity": 10.398,
    "vote_average": 6.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/972S6KEN4qG1UzvcDHHFj8Q9iUj.jpg",
    "runtime": 98,
    "networks": [
        1899,
        1825
    ],
    "certification": "16",
    "slug": "freddy-x-jason"
},

{
    "id": 9475,
    "title": "Perfume de Mulher",
    "genre_ids": [
        18,
        35
    ],
    "release_date": "1992-12-23",
    "popularity": 10.538,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/7vYWmKziZCfuXuIesRdVHUtXaLY.jpg",
    "runtime": 156,
    "networks": [
        8,
        119,
        167,
        1796
    ],
    "certification": "14",
    "slug": "perfume-de-mulher"
},

{
    "id": 298094,
    "title": "我為卿狂",
    "genre_ids": [
        10749,
        18
    ],
    "release_date": "1991-11-15",
    "popularity": 10.002,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/xZRz8cBOopaLaP7JW27lL9CXqtd.jpg",
    "runtime": 78,
    "networks": [],
    "certification": "N/A",
    "slug": ""
},

{
    "id": 820232,
    "title": "鬼滅の刃 兄妹の絆",
    "genre_ids": [
        16,
        28,
        14,
        53
    ],
    "release_date": "2019-03-29",
    "popularity": 11.723,
    "vote_average": 7.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/99cJLZkNoIFmufJ4yap6ZABl4nk.jpg",
    "runtime": 105,
    "networks": [],
    "certification": "16",
    "slug": "-"
},

{
    "id": 2034,
    "title": "Dia de Treinamento",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "2001-10-05",
    "popularity": 9.889,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/ju2TUNXdCosCMOWXJA1BxtylyOj.jpg",
    "runtime": 122,
    "networks": [
        1899,
        1825
    ],
    "certification": "18",
    "slug": "dia-de-treinamento"
},

{
    "id": 457332,
    "title": "Projeto Extração",
    "genre_ids": [
        28,
        35,
        53
    ],
    "release_date": "2023-07-06",
    "popularity": 10.589,
    "vote_average": 6.9,
    "poster_path": "https://image.tmdb.org/t/p/w200/t3vZkkM5G40pUJxUzkz69H777Hm.jpg",
    "runtime": 102,
    "networks": [
        8,
        1796
    ],
    "certification": "14",
    "slug": "projeto-extrao"
},

{
    "id": 522681,
    "title": "Escape Room",
    "genre_ids": [
        27,
        53,
        9648
    ],
    "release_date": "2019-01-03",
    "popularity": 10.467,
    "vote_average": 6.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/pHZPHngiO8hG78wAmAzMWcIrKdW.jpg",
    "runtime": 100,
    "networks": [
        484
    ],
    "certification": "14",
    "slug": "escape-room"
},

{
    "id": 5548,
    "title": "RoboCop - O Policial do Futuro",
    "genre_ids": [
        28,
        53,
        878
    ],
    "release_date": "1987-07-17",
    "popularity": 11.794,
    "vote_average": 7.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/uZ27cWusfoGFh7sOiUsIENxW48S.jpg",
    "runtime": 102,
    "networks": [
        119,
        47
    ],
    "certification": "14",
    "slug": "robocop-o-policial-do-futuro"
},

{
    "id": 1134682,
    "title": "Kuasa Gelap",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2024-10-03",
    "popularity": 11.24,
    "vote_average": 5.1,
    "poster_path": "https://image.tmdb.org/t/p/w200/iKO0T68wGUll6GwfGWQ7BGbrqyj.jpg",
    "runtime": 96,
    "networks": [],
    "certification": "N/A",
    "slug": "kuasa-gelap"
},

{
    "id": 2649,
    "title": "Vidas em Jogo",
    "genre_ids": [
        18,
        53,
        9648
    ],
    "release_date": "1997-09-12",
    "popularity": 9.824,
    "vote_average": 7.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/vsdWfwqsiCqLuZJjMBIQP1Oa7Qn.jpg",
    "runtime": 129,
    "networks": [],
    "certification": "14",
    "slug": "vidas-em-jogo"
},

{
    "id": 10995,
    "title": "O Amante",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "1992-01-22",
    "popularity": 11.665,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/pEAefdQxwhf4i7IajBqQRGKAn2h.jpg",
    "runtime": 115,
    "networks": [],
    "certification": "N/A",
    "slug": "o-amante"
},

{
    "id": 196867,
    "title": "Annie",
    "genre_ids": [
        35,
        18,
        10751
    ],
    "release_date": "2014-12-18",
    "popularity": 10.138,
    "vote_average": 6.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/aKAM9V0izx4VhsdyAdBvAB26UCZ.jpg",
    "runtime": 118,
    "networks": [
        1899,
        1825
    ],
    "certification": "N/A",
    "slug": "annie"
},

{
    "id": 256274,
    "title": "Assim na Terra Como no Inferno",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2014-08-14",
    "popularity": 11.444,
    "vote_average": 6.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/19K0a2bKxQsh6MCQOIGyV3xbv1F.jpg",
    "runtime": 93,
    "networks": [
        484
    ],
    "certification": "N/A",
    "slug": "assim-na-terra-como-no-inferno"
},

{
    "id": 1356039,
    "title": "Contraataque",
    "genre_ids": [
        28,
        12
    ],
    "release_date": "2025-02-28",
    "popularity": 12.676,
    "vote_average": 0.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/8JK8VD6FUP1Ylke6KE7gWpW7heG.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "N/A",
    "slug": "contraataque"
},

{
    "id": 762,
    "title": "Monty Python em Busca do Cálice Sagrado",
    "genre_ids": [
        12,
        35,
        14
    ],
    "release_date": "1975-03-14",
    "popularity": 12.397,
    "vote_average": 7.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/7SHgyPFa2OhvkapxrEXLxtx5rhO.jpg",
    "runtime": 91,
    "networks": [],
    "certification": "N/A",
    "slug": "monty-python-em-busca-do-clice-sagrado"
},

{
    "id": 634528,
    "title": "Na Mira do Perigo",
    "genre_ids": [
        28,
        18,
        53
    ],
    "release_date": "2021-01-15",
    "popularity": 10.07,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/eOboWXZ66o4OlhBPvsIWnaBZ6e.jpg",
    "runtime": 108,
    "networks": [
        8,
        119,
        1899,
        307,
        1796,
        1825,
        2156
    ],
    "certification": "16",
    "slug": "na-mira-do-perigo"
},

{
    "id": 425909,
    "title": "Ghostbusters: Mais Além",
    "genre_ids": [
        14,
        35,
        12,
        878
    ],
    "release_date": "2021-11-18",
    "popularity": 12.579,
    "vote_average": 7.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/hwng2sUWBfiBoY1EBjOsWksCcnj.jpg",
    "runtime": 124,
    "networks": [
        8,
        1796
    ],
    "certification": "12",
    "slug": "ghostbusters-mais-alm"
},

{
    "id": 412117,
    "title": "Pets: A Vida Secreta dos Bichos 2",
    "genre_ids": [
        12,
        16,
        35,
        10751
    ],
    "release_date": "2019-05-24",
    "popularity": 12.247,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/gs0iSjc9tbpbAElolwbDwPDpNXo.jpg",
    "runtime": 86,
    "networks": [
        8,
        119,
        1796
    ],
    "certification": "L",
    "slug": "pets-a-vida-secreta-dos-bichos-2"
},

{
    "id": 37137,
    "title": "Corra que a Polícia Vem Aí! 2½",
    "genre_ids": [
        35,
        80
    ],
    "release_date": "1991-06-28",
    "popularity": 10.86,
    "vote_average": 6.8,
    "poster_path": "https://image.tmdb.org/t/p/w200/fduVmiYlvoxxFlnkWfTivyNpJ1O.jpg",
    "runtime": 85,
    "networks": [],
    "certification": "L",
    "slug": "corra-que-a-polcia-vem-a-2"
},

{
    "id": 300669,
    "title": "O Homem nas Trevas",
    "genre_ids": [
        27,
        53
    ],
    "release_date": "2016-06-08",
    "popularity": 12.168,
    "vote_average": 7.0,
    "poster_path": "https://image.tmdb.org/t/p/w200/tBtjyqf8oIdeFkis41bdaJzewBh.jpg",
    "runtime": 88,
    "networks": [
        119
    ],
    "certification": "14",
    "slug": "o-homem-nas-trevas"
},

{
    "id": 252,
    "title": "A Fantástica Fábrica de Chocolate",
    "genre_ids": [
        10751,
        14,
        35
    ],
    "release_date": "1971-06-29",
    "popularity": 9.948,
    "vote_average": 7.5,
    "poster_path": "https://image.tmdb.org/t/p/w200/noanwChjqswpEz5FTaqdbztfSsB.jpg",
    "runtime": 99,
    "networks": [
        1899,
        499,
        1825
    ],
    "certification": "L",
    "slug": "a-fantstica-fbrica-de-chocolate"
},

{
    "id": 9078,
    "title": "A Espada Era a Lei",
    "genre_ids": [
        16,
        10751,
        14
    ],
    "release_date": "1963-12-25",
    "popularity": 10.261,
    "vote_average": 7.2,
    "poster_path": "https://image.tmdb.org/t/p/w200/d5rtXHSx4sXJKMJsLR7OUjryCHl.jpg",
    "runtime": 80,
    "networks": [
        337
    ],
    "certification": "L",
    "slug": "a-espada-era-a-lei"
},

{
    "id": 169,
    "title": "O Predador 2: A Caçada Continua",
    "genre_ids": [
        878,
        28,
        53
    ],
    "release_date": "1990-11-21",
    "popularity": 11.531,
    "vote_average": 6.3,
    "poster_path": "https://image.tmdb.org/t/p/w200/lRj8ovDkAbo5r1Z40JpF21ZX8t9.jpg",
    "runtime": 108,
    "networks": [
        337
    ],
    "certification": "16",
    "slug": "o-predador-2-a-caada-continua"
},

{
    "id": 1105407,
    "title": "Danificado",
    "genre_ids": [
        28,
        18,
        53,
        80
    ],
    "release_date": "2024-04-12",
    "popularity": 12.504,
    "vote_average": 5.7,
    "poster_path": "https://image.tmdb.org/t/p/w200/2cXxEXhVGDMTMXspbAhHs2RXEA9.jpg",
    "runtime": 97,
    "networks": [
        2156
    ],
    "certification": "N/A",
    "slug": "danificado"
},

{
    "id": 7220,
    "title": "O Justiceiro",
    "genre_ids": [
        28,
        80,
        18
    ],
    "release_date": "2004-04-15",
    "popularity": 12.115,
    "vote_average": 6.4,
    "poster_path": "https://image.tmdb.org/t/p/w200/9RQ6LDA2NG97cxL2bLw1O2R2nkp.jpg",
    "runtime": 124,
    "networks": [
        8,
        167,
        1796
    ],
    "certification": "16",
    "slug": "o-justiceiro"
},

{
    "id": 1134754,
    "title": "172 Hari",
    "genre_ids": [
        18,
        10749
    ],
    "release_date": "2023-11-23",
    "popularity": 10.75,
    "vote_average": 5.6,
    "poster_path": "https://image.tmdb.org/t/p/w200/haPUBxUnSh9ie1gJCwYqlEOpmzI.jpg",
    "runtime": 103,
    "networks": [],
    "certification": "N/A",
    "slug": "172-hari"
},

  ];
