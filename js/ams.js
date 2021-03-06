this.mods = {
    "1": "Stock Car V8",
    "2": "Copa Petrobras de Marcas",
    "3-30": "Opala Stock Cars - Opala 70",
    "3-31": "Opala Stock Cars - Opala 86",
    "4": "Mini Challenge",
    "5": "Camaro SS",
    "6-60": "F3 Brasil - F301",
    "6-61": "F3 Brasil - F309",
    "7-70": "Lancer Cup - Lancer R",
    "7-71": "Lancer Cup - Lancer RS",
    "8": "F-Extreme",
    "9": "F-Reiza",
    "10": "F-V10",
    "11": "F-V12",
    "12": "F-Classic",
    "13": "F-Retro",
    "14": "F-Vee",
    "15": "Super V8",
    "16": "Metalmoro",
    "17": "Superkart",
    "18-180": "Karting - 125 Direct",
    "18-181": "Karting - 125 Direct Body",
    "18-182": "Karting - 125 Shifter",
    "18-183": "Karting - GX390 Race",
    "18-184": "Karting - GX390 Rental",
    "19": "Lancer RX",
    "20": "Supertruck",
    "21": "Boxer Cup",
    "22": "Copa Montana",
    "23-231": "F-Vintage 1967",
    "23-232": "F-Vintage 1969",
    "24-241": "Ultima GTR Road",
    "24-242": "Ultima GTR Race",
    "25-251": "F-Trainer Novice",
    "25-252": "F-Trainer Advanced",
    "26": "MCR Sports 2000",
    "27-271": "Caterham 270",
    "27-272": "Caterham 360R",
    "27-273": "Caterham 620R"
}

this.circuits = {
    10: "Brasilia",
    11: "Brasilia Full",
    20: "Buenos Aires No 6",
    21: "Buenos Aires No 8",
    22: "Buenos Aires No 12",
    23: "Buenos Aires No 15",
    24: "Buenos Aires No 7",
    25: "Buenos Aires No 9",
    30: "Campo Grande",
    40: "Caruaru",
    50: "Cascavel",
    51: "Cascavel ST",
    60: "Cordoba",
    61: "Cordoba ST",
    70: "Curitiba",
    71: "Curitiba Outer",
    72: "Curitiba ST",
    80: "Floripa",
    81: "Floripa Kart 1",
    82: "Floripa Kart 2",
    83: "Floripa Kart 3",
    84: "Floripa Kart 4",
    90: "Foz",
    100: "Goiania",
    101: "Goiania Short",
    102: "Goiania ST",
    110: "Granja Viana 1",
    111: "Granja Viana 2",
    112: "Granja Viana 3",
    113: "Granja Viana 4",
    114: "Granja Viana 5",
    115: "Granja Viana 6",
    120: "Guapore",
    121: "Guapore ST",
    130: "Interlagos Historic GP 76",
    131: "Interlagos Historic External Ring",
    132: "Interlagos Historic SC 80",
    140: "Interlagos 2015",
    141: "Interlagos Kart 1",
    142: "Interlagos Kart 2",
    143: "Interlagos Kart 3",
    144: "Interlagos SC 15",
    145: "Interlagos GP",
    150: "Jacarepagua Historic",
    160: "Jacarepagua",
    161: "Jacarepagua 2005",
    162: "Jacarepagua Curva Sul",
    163: "Jacarepagua Oval",
    170: "Johanesburg Historic",
    180: "Kansai Full",
    181: "Kansai East",
    182: "Kansai ST",
    183: "Kansai GP",
    184: "Kansai Classic",
    185: "Kansai West",
    190: "Londrina",
    191: "Londrina Kart 1",
    192: "Londrina Kart 2",
    193: "Londrina Kart 3",
    194: "Londrina Long",
    200: "Montreal Historic GP 88",
    210: "Montreal Full",
    211: "Montreal GP ST",
    212: "Montreal GP",
    220: "Ortona Kart 1",
    221: "Ortona Kart 2",
    222: "Ortona Kart 3",
    223: "Ortona Kart 4",
    230: "Ribeirao Preto 2010",
    231: "Ribeirao Preto 2012",
    240: "Salvador",
    241: "Salvador ST",
    250: "Santa Cruz do Sul",
    260: "Spielberg Historic GP",
    261: "Spielberg Vintage GP",
    270: "Spielberg Full",
    271: "Spielberg Short",
    272: "Spielberg ST",
    273: "Spielberg GP",
    280: "Taruma",
    281: "Taruma Chicane",
    290: "Tykki Dirt 1",
    291: "Tykki Dirt 2",
    292: "Tykki RX",
    293: "Tykki Tarmac",
    300: "Velo Citta",
    301: "Velo Citta Club Day",
    302: "Velo Citta Track Day",
    310: "Velopark",
    311: "Velopark 2010",
    312: "Velopark ST",
    320: "VIR",
    321: "VIR Grand",
    322: "VIR North",
    324: "VIR South",
    325: "VIR Patriot",
    330: "Mendig Flugplatz",
    331: "Mendig Bergschleife",
    332: "Mendig ST",
    340: "Speedland 1",
    341: "Speedland 2",
    342: "Speedland 3",
    343: "Speedland 4",
    350: "Brands Hatch GP",
    351: "Brands Hatch Indy",
    360: "Cadwell Park",
    370: "Oulton Park International",
    371: "Oulton Park Island Circuit",
    372: "Oulton Park Fosters Circuit",
    373: "Oulton Park Classic"
}

function initDataTable() {
    dt = $('#dt').DataTable({
        data: [],
        columns: [
            { title: 'Vehicle' },
            { title: 'Circuit' },
            { title: 'Laps' }
        ],
        'iDisplayLength': 25,
        'order': [[ 2, 'desc' ]]
    });
}

function getLapCounts() {
    var count = 0;
    Object.keys(mods).forEach(function(modId) {
        get('http://virtualxperience.net/api/lb/lap-counts-by-mod/' + modId, function(data) {
            $.each(data, function(j, item) {
                dt.row.add([mods[modId], circuits[item.id], item.entries]).draw();
            });
            count++;
            if (count == 39) {
                $('#title').html('AMS Popular Combos');
            }
        });
    });
}

function get(url, callback) {
    $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data) {
        callback(jQuery.parseJSON(data.contents));
    });
}

$(document).ready(function() {
    initDataTable();
    getLapCounts();
});
