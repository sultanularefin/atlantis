// import {one_Country_Interface} from "./login_interface";

import {one_Country_Interface} from '../../../interfaces/user/login.ts';

export const all_Genders_Data =

    [
        {

            index: 0,
            name: "male",
            icon: '👨'

        },
        {

            index: 1,
            name: "female",
            icon: '👩'

        },

    ];


export const Limited_Countries_With_Phone_Flag :one_Country_Interface[]=

    [
        {
            abbreviation: "BD",
            calling_code: 880,
            country: "Bangladesh",
            index: 17,
            flag: '🇧🇩',
            unicode: "flag_BD",
            image_resource_Link: require("../../../assets/flags/bd.png"),
        },
        {
            abbreviation: "IN",
            calling_code: 91,
            country: "India",
            index: 98,
            flag: '🇮🇳',
            unicode: "U+1F1E7",
            image_resource_Link: require("../../../assets/flags/in.png"),
        },
        {
            abbreviation: "CX",
            calling_code: 61,
            country: "Christmas Island",
            index: 44,
            flag: '🇬🇧',
            unicode: "U+1F1E7",
            image_resource_Link: require("../../../assets/flags/gb.png"),
        },
        {
            abbreviation: "GB",
            calling_code: 44,
            country: "Northern Ireland",
            index: 161,
            flag: '🇬🇧',
            unicode: "U+1F1E7",
            image_resource_Link: require("../../../assets/flags/gb.png"),
        },
        {
            abbreviation: "UK",
            calling_code: 44,
            country: "United Kingdom",
            index: 230,
            flag: '🇬🇧',
            unicode: "U+1F1E7",
            image_resource_Link: require("../../../assets/flags/gb.png"),
        },
        {
            abbreviation: "US",
            calling_code: 1,
            country: "United States",
            index: 231,
            flag: '🇺🇸',
            unicode: "U+1F1E7",
            image_resource_Link: require("../../../assets/flags/us.png"),
        },

        {

            abbreviation: "JP",
            calling_code: 81,
            country: "Japan",
            index: 108,
            flag: '🇯🇵',
            unicode: "U+1F1EF, U+1F1F5",
            image_resource_Link: require("../../../assets/flags/jp.png"),

            /*   abbreviation: US",
               calling_code: 1,
               country: "United States",
               index: 231,
               flag:'🇺🇸',
               unicode:" U+1F1E7",*/
        },


        /*
        {
            "abbreviation: "undefined",
            "calling_code: 44,
            "country: "England",
            "index: 245
        },
        {
            "abbreviation: "undefined",
            "calling_code: 44,
            "country: "Scotland",
            "index: 246
        },
        {
            "abbreviation: "undefined",
            "calling_code: 44,
            "country: "Wales",
            "index: 247
        }
        */


        /*


        {
            "abbreviation: "DZ",
            "calling_code: 213,
            "country: "Algeria",
            "index: 2
        },
        {
            "abbreviation: "AS",
            "calling_code: 1684,
            "country: "American Samoa",
            "index: 3
        },
        {
            "abbreviation: "AD",
            "calling_code: 376,
            "country: "Andorra",
            "index: 4
        },
        {
            "abbreviation: "AO",
            "calling_code: 244,
            "country: "Angola",
            "index: 5
        },
        {
            "abbreviation: "AI",
            "calling_code: 1264,
            "country: "Anguilla",
            "index: 6
        },
        {
            "abbreviation: "AQ",
            "calling_code: 672,
            "country: "Antarctica",
            "index: 7
        },
        {
            "abbreviation: "AG",
            "calling_code: 1268,
            "country: "Antigua and Barbuda",
            "index: 8
        },
        {
            "abbreviation: "AR",
            "calling_code: 54,
            "country: "Argentina",
            "index: 9
        },
        {
            "abbreviation: "AM",
            "calling_code: 374,
            "country: "Armenia",
            "index: 10
        },
        {
            "abbreviation: "AW",
            "calling_code: 297,
            "country: "Aruba",
            "index: 11
        },
        {
            "abbreviation: "AU",
            "calling_code: 61,
            "country: "Australia",
            "index: 12
        },
        {
            "abbreviation: "AT",
            "calling_code: 43,
            "country: "Austria",
            "index: 13
        },
        {
            "abbreviation: "AZ",
            "calling_code: 994,
            "country: "Azerbaijan",
            "index: 14
        },
        {
            "abbreviation: "BS",
            "calling_code: 1242,
            "country: "Bahamas",
            "index: 15
        },
        {
            "abbreviation: "BH",
            "calling_code: 973,
            "country: "Bahrain",
            "index: 16
        },

        {
            "abbreviation: "BB",
            "calling_code: 1246,
            "country: "Barbados",
            "index: 18
        },
        {
            "abbreviation: "BY",
            "calling_code: 375,
            "country: "Belarus",
            "index: 19
        },
        {
            "abbreviation: "BE",
            "calling_code: 32,
            "country: "Belgium",
            "index: 20
        },
        {
            "abbreviation: "BZ",
            "calling_code: 501,
            "country: "Belize",
            "index: 21
        },
        {
            "abbreviation: "BJ",
            "calling_code: 229,
            "country: "Benin",
            "index: 22
        },
        {
            "abbreviation: "BM",
            "calling_code: 1441,
            "country: "Bermuda",
            "index: 23
        },
        {
            "abbreviation: "BT",
            "calling_code: 975,
            "country: "Bhutan",
            "index: 24
        },
        {
            "abbreviation: "BO",
            "calling_code: 591,
            "country: "Bolivia",
            "index: 25
        },
        {
            "abbreviation: "BA",
            "calling_code: 387,
            "country: "Bosnia and Herzegovina",
            "index: 26
        },
        {
            "abbreviation: "BW",
            "calling_code: 267,
            "country: "Botswana",
            "index: 27
        },
        {
            "abbreviation: "BV",
            "calling_code: 55,
            "country: "Bouvet Island",
            "index: 28
        },
        {
            "abbreviation: "BR",
            "calling_code: 55,
            "country: "Brazil",
            "index: 29
        },
        {
            "abbreviation: "IO",
            "calling_code: 246,
            "country: "British Indian Ocean Territory",
            "index: 30
        },
        {
            "abbreviation: "BN",
            "calling_code: 673,
            "country: "Brunei",
            "index: 31
        },
        {
            "abbreviation: "BG",
            "calling_code: 359,
            "country: "Bulgaria",
            "index: 32
        },
        {
            "abbreviation: "BF",
            "calling_code: 226,
            "country: "Burkina Faso",
            "index: 33
        },
        {
            "abbreviation: "BI",
            "calling_code: 257,
            "country: "Burundi",
            "index: 34
        },
        {
            "abbreviation: "KH",
            "calling_code: 855,
            "country: "Cambodia",
            "index: 35
        },
        {
            "abbreviation: "CM",
            "calling_code: 237,
            "country: "Cameroon",
            "index: 36
        },
        {
            "abbreviation: "CA",
            "calling_code: 1,
            "country: "Canada",
            "index: 37
        },
        {
            "abbreviation: "CV",
            "calling_code: 238,
            "country: "Cape Verde",
            "index: 38
        },
        {
            "abbreviation: "KY",
            "calling_code: 1345,
            "country: "Cayman Islands",
            "index: 39
        },
        {
            "abbreviation: "CF",
            "calling_code: 236,
            "country: "Central African Republic",
            "index: 40
        },
        {
            "abbreviation: "TD",
            "calling_code: 235,
            "country: "Chad",
            "index: 41
        },
        {
            "abbreviation: "CL",
            "calling_code: 56,
            "country: "Chile",
            "index: 42
        },
        {
            "abbreviation: "CN",
            "calling_code: 86,
            "country: "China",
            "index: 43
        },

        {
            "abbreviation: "CC",
            "calling_code: 61,
            "country: "Cocos (Keeling) Islands",
            "index: 45
        },
        {
            "abbreviation: "CO",
            "calling_code: 57,
            "country: "Colombia",
            "index: 46
        },
        {
            "abbreviation: "KM",
            "calling_code: 269,
            "country: "Comoros",
            "index: 47
        },
        {
            "abbreviation: "CG",
            "calling_code: 242,
            "country: "Congo",
            "index: 48
        },
        {
            "abbreviation: "CK",
            "calling_code: 682,
            "country: "Cook Islands",
            "index: 49
        },
        {
            "abbreviation: "CR",
            "calling_code: 506,
            "country: "Costa Rica",
            "index: 50
        },
        {
            "abbreviation: "HR",
            "calling_code: 385,
            "country: "Croatia",
            "index: 51
        },
        {
            "abbreviation: "CU",
            "calling_code: 53,
            "country: "Cuba",
            "index: 52
        },
        {
            "abbreviation: "CY",
            "calling_code: 357,
            "country: "Cyprus",
            "index: 53
        },
        {
            "abbreviation: "CZ",
            "calling_code: 420,
            "country: "Czech Republic",
            "index: 54
        },
        {
            "abbreviation: "DK",
            "calling_code: 45,
            "country: "Denmark",
            "index: 55
        },
        {
            "abbreviation: "DJ",
            "calling_code: 253,
            "country: "Djibouti",
            "index: 56
        },
        {
            "abbreviation: "DM",
            "calling_code: 1767,
            "country: "Dominica",
            "index: 57
        },
        {
            "abbreviation: "DO",
            "calling_code: 1849,
            "country: "Dominican Republic",
            "index: 58
        },
        {
            "abbreviation: "TP",
            "calling_code: 670,
            "country: "East Timor",
            "index: 59
        },
        {
            "abbreviation: "EC",
            "calling_code: 593,
            "country: "Ecuador",
            "index: 60
        },
        {
            "abbreviation: "EG",
            "calling_code: 20,
            "country: "Egypt",
            "index: 61
        },
        {
            "abbreviation: "SV",
            "calling_code: 503,
            "country: "El Salvador",
            "index: 62
        },
        {
            "abbreviation: "GQ",
            "calling_code: 240,
            "country: "Equatorial Guinea",
            "index: 63
        },
        {
            "abbreviation: "ER",
            "calling_code: 291,
            "country: "Eritrea",
            "index: 64
        },
        {
            "abbreviation: "EE",
            "calling_code: 372,
            "country: "Estonia",
            "index: 65
        },
        {
            "abbreviation: "ET",
            "calling_code: 251,
            "country: "Ethiopia",
            "index: 66
        },
        {
            "abbreviation: "FK",
            "calling_code: 500,
            "country: "Falkland Islands",
            "index: 67
        },
        {
            "abbreviation: "FO",
            "calling_code: 298,
            "country: "Faroe Islands",
            "index: 68
        },
        {
            "abbreviation: "FJ",
            "calling_code: 679,
            "country: "Fiji Islands",
            "index: 69
        },
        {
            "abbreviation: "FI",
            "calling_code: 358,
            "country: "Finland",
            "index: 70
        },
        {
            "abbreviation: "FR",
            "calling_code: 33,
            "country: "France",
            "index: 71
        },
        {
            "abbreviation: "GF",
            "calling_code: 594,
            "country: "French Guiana",
            "index: 72
        },
        {
            "abbreviation: "PF",
            "calling_code: 689,
            "country: "French Polynesia",
            "index: 73
        },
        {
            "abbreviation: "TF",
            "calling_code: 262,
            "country: "French Southern territories",
            "index: 74
        },
        {
            "abbreviation: "GA",
            "calling_code: 241,
            "country: "Gabon",
            "index: 75
        },
        {
            "abbreviation: "GM",
            "calling_code: 220,
            "country: "Gambia",
            "index: 76
        },
        {
            "abbreviation: "GE",
            "calling_code: 995,
            "country: "Georgia",
            "index: 77
        },
        {
            "abbreviation: "DE",
            "calling_code: 49,
            "country: "Germany",
            "index: 78
        },
        {
            "abbreviation: "GH",
            "calling_code: 233,
            "country: "Ghana",
            "index: 79
        },
        {
            "abbreviation: "GI",
            "calling_code: 350,
            "country: "Gibraltar",
            "index: 80
        },
        {
            "abbreviation: "GR",
            "calling_code: 30,
            "country: "Greece",
            "index: 81
        },
        {
            "abbreviation: "GL",
            "calling_code: 299,
            "country: "Greenland",
            "index: 82
        },
        {
            "abbreviation: "GD",
            "calling_code: 1473,
            "country: "Grenada",
            "index: 83
        },
        {
            "abbreviation: "GP",
            "calling_code: 590,
            "country: "Guadeloupe",
            "index: 84
        },
        {
            "abbreviation: "GU",
            "calling_code: 1671,
            "country: "Guam",
            "index: 85
        },
        {
            "abbreviation: "GT",
            "calling_code: 502,
            "country: "Guatemala",
            "index: 86
        },
        {
            "abbreviation: "GG",
            "calling_code: "undefined",
            "country: "Guernsey",
            "index: 87
        },
        {
            "abbreviation: "GN",
            "calling_code: 224,
            "country: "Guinea",
            "index: 88
        },
        {
            "abbreviation: "GW",
            "calling_code: 245,
            "country: "Guinea-Bissau",
            "index: 89
        },
        {
            "abbreviation: "GY",
            "calling_code: 592,
            "country: "Guyana",
            "index: 90
        },
        {
            "abbreviation: "HT",
            "calling_code: 509,
            "country: "Haiti",
            "index: 91
        },
        {
            "abbreviation: "HM",
            "calling_code: 672,
            "country: "Heard Island and McDonald Islands",
            "index: 92
        },
        {
            "abbreviation: "VA",
            "calling_code: 379,
            "country: "Holy See (Vatican City State)",
            "index: 93
        },
        {
            "abbreviation: "HN",
            "calling_code: 504,
            "country: "Honduras",
            "index: 94
        },
        {
            "abbreviation: "HK",
            "calling_code: 852,
            "country: "Hong Kong",
            "index: 95
        },
        {
            "abbreviation: "HU",
            "calling_code: 36,
            "country: "Hungary",
            "index: 96
        },
        {
            "abbreviation: "IS",
            "calling_code: 354,
            "country: "Iceland",
            "index: 97
        },

        {
            "abbreviation: "ID",
            "calling_code: 62,
            "country: "Indonesia",
            "index: 99
        },
        {
            "abbreviation: "IR",
            "calling_code: 98,
            "country: "Iran",
            "index: 100
        },
        {
            "abbreviation: "IQ",
            "calling_code: 964,
            "country: "Iraq",
            "index: 101
        },
        {
            "abbreviation: "IE",
            "calling_code: 353,
            "country: "Ireland",
            "index: 102
        },
        {
            "abbreviation: "IM",
            "calling_code: "undefined",
            "country: "Isle of Man",
            "index: 103
        },
        {
            "abbreviation: "IL",
            "calling_code: 972,
            "country: "Israel",
            "index: 104
        },
        {
            "abbreviation: "IT",
            "calling_code: 39,
            "country: "Italy",
            "index: 105
        },
        {
            "abbreviation: "CI",
            "calling_code: 225,
            "country: "Ivory Coast",
            "index: 106
        },
        {
            "abbreviation: "JM",
            "calling_code: 1876,
            "country: "Jamaica",
            "index: 107
        },
        {
            "abbreviation: "JP",
            "calling_code: 81,
            "country: "Japan",
            "index: 108
        },
        {
            "abbreviation: "JE",
            "calling_code: "undefined",
            "country: "Jersey",
            "index: 109
        },
        {
            "abbreviation: "JO",
            "calling_code: 962,
            "country: "Jordan",
            "index: 110
        },
        {
            "abbreviation: "KZ",
            "calling_code: 7,
            "country: "Kazakhstan",
            "index: 111
        },
        {
            "abbreviation: "KE",
            "calling_code: 254,
            "country: "Kenya",
            "index: 112
        },
        {
            "abbreviation: "KI",
            "calling_code: 686,
            "country: "Kiribati",
            "index: 113
        },
        {
            "abbreviation: "KW",
            "calling_code: 965,
            "country: "Kuwait",
            "index: 114
        },
        {
            "abbreviation: "KG",
            "calling_code: 996,
            "country: "Kyrgyzstan",
            "index: 115
        },
        {
            "abbreviation: "LA",
            "calling_code: 856,
            "country: "Laos",
            "index: 116
        },
        {
            "abbreviation: "LV",
            "calling_code: 371,
            "country: "Latvia",
            "index: 117
        },
        {
            "abbreviation: "LB",
            "calling_code: 961,
            "country: "Lebanon",
            "index: 118
        },
        {
            "abbreviation: "LS",
            "calling_code: 266,
            "country: "Lesotho",
            "index: 119
        },
        {
            "abbreviation: "LR",
            "calling_code: 231,
            "country: "Liberia",
            "index: 120
        },
        {
            "abbreviation: "LY",
            "calling_code: 218,
            "country: "Libyan Arab Jamahiriya",
            "index: 121
        },
        {
            "abbreviation: "LI",
            "calling_code: 423,
            "country: "Liechtenstein",
            "index: 122
        },
        {
            "abbreviation: "LT",
            "calling_code: 370,
            "country: "Lithuania",
            "index: 123
        },
        {
            "abbreviation: "LU",
            "calling_code: 352,
            "country: "Luxembourg",
            "index: 124
        },
        {
            "abbreviation: "MO",
            "calling_code: 853,
            "country: "Macao",
            "index: 125
        },
        {
            "abbreviation: "MK",
            "calling_code: 389,
            "country: "North Macedonia",
            "index: 126
        },
        {
            "abbreviation: "MG",
            "calling_code: 261,
            "country: "Madagascar",
            "index: 127
        },
        {
            "abbreviation: "MW",
            "calling_code: 265,
            "country: "Malawi",
            "index: 128
        },
        {
            "abbreviation: "MY",
            "calling_code: 60,
            "country: "Malaysia",
            "index: 129
        },
        {
            "abbreviation: "MV",
            "calling_code: 960,
            "country: "Maldives",
            "index: 130
        },
        {
            "abbreviation: "ML",
            "calling_code: 223,
            "country: "Mali",
            "index: 131
        },
        {
            "abbreviation: "MT",
            "calling_code: 356,
            "country: "Malta",
            "index: 132
        },
        {
            "abbreviation: "MH",
            "calling_code: 692,
            "country: "Marshall Islands",
            "index: 133
        },
        {
            "abbreviation: "MQ",
            "calling_code: 596,
            "country: "Martinique",
            "index: 134
        },
        {
            "abbreviation: "MR",
            "calling_code: 222,
            "country: "Mauritania",
            "index: 135
        },
        {
            "abbreviation: "MU",
            "calling_code: 230,
            "country: "Mauritius",
            "index: 136
        },
        {
            "abbreviation: "YT",
            "calling_code: 262,
            "country: "Mayotte",
            "index: 137
        },
        {
            "abbreviation: "MX",
            "calling_code: 52,
            "country: "Mexico",
            "index: 138
        },
        {
            "abbreviation: "FM",
            "calling_code: 691,
            "country: "Micronesia, Federated States of",
            "index: 139
        },
        {
            "abbreviation: "MD",
            "calling_code: 373,
            "country: "Moldova",
            "index: 140
        },
        {
            "abbreviation: "MC",
            "calling_code: 377,
            "country: "Monaco",
            "index: 141
        },
        {
            "abbreviation: "MN",
            "calling_code: 976,
            "country: "Mongolia",
            "index: 142
        },
        {
            "abbreviation: "ME",
            "calling_code: "undefined",
            "country: "Montenegro",
            "index: 143
        },
        {
            "abbreviation: "MS",
            "calling_code: 1664,
            "country: "Montserrat",
            "index: 144
        },
        {
            "abbreviation: "MA",
            "calling_code: 212,
            "country: "Morocco",
            "index: 145
        },
        {
            "abbreviation: "MZ",
            "calling_code: 258,
            "country: "Mozambique",
            "index: 146
        },
        {
            "abbreviation: "MM",
            "calling_code: 95,
            "country: "Myanmar",
            "index: 147
        },
        {
            "abbreviation: "NA",
            "calling_code: 264,
            "country: "Namibia",
            "index: 148
        },
        {
            "abbreviation: "NR",
            "calling_code: 674,
            "country: "Nauru",
            "index: 149
        },
        {
            "abbreviation: "NP",
            "calling_code: 977,
            "country: "Nepal",
            "index: 150
        },
        {
            "abbreviation: "NL",
            "calling_code: 31,
            "country: "Netherlands",
            "index: 151
        },
        {
            "abbreviation: "AN",
            "calling_code: 599,
            "country: "Netherlands Antilles",
            "index: 152
        },
        {
            "abbreviation: "NC",
            "calling_code: 687,
            "country: "New Caledonia",
            "index: 153
        },
        {
            "abbreviation: "NZ",
            "calling_code: 64,
            "country: "New Zealand",
            "index: 154
        },
        {
            "abbreviation: "NI",
            "calling_code: 505,
            "country: "Nicaragua",
            "index: 155
        },
        {
            "abbreviation: "NE",
            "calling_code: 227,
            "country: "Niger",
            "index: 156
        },
        {
            "abbreviation: "NG",
            "calling_code: 234,
            "country: "Nigeria",
            "index: 157
        },
        {
            "abbreviation: "NU",
            "calling_code: 683,
            "country: "Niue",
            "index: 158
        },
        {
            "abbreviation: "NF",
            "calling_code: 672,
            "country: "Norfolk Island",
            "index: 159
        },
        {
            "abbreviation: "KP",
            "calling_code: 850,
            "country: "North Korea",
            "index: 160
        },


        {
            "abbreviation: "MP",
            "calling_code: 1670,
            "country: "Northern Mariana Islands",
            "index: 162
        },
        {
            "abbreviation: "NO",
            "calling_code: 47,
            "country: "Norway",
            "index: 163
        },
        {
            "abbreviation: "OM",
            "calling_code: 968,
            "country: "Oman",
            "index: 164
        },

        {
            "abbreviation: "PW",
            "calling_code: 680,
            "country: "Palau",
            "index: 166
        },
        {
            "abbreviation: "PS",
            "calling_code: 970,
            "country: "Palestine",
            "index: 167
        },
        {
            "abbreviation: "PA",
            "calling_code: 507,
            "country: "Panama",
            "index: 168
        },
        {
            "abbreviation: "PG",
            "calling_code: 675,
            "country: "Papua New Guinea",
            "index: 169
        },
        {
            "abbreviation: "PY",
            "calling_code: 595,
            "country: "Paraguay",
            "index: 170
        },
        {
            "abbreviation: "PE",
            "calling_code: 51,
            "country: "Peru",
            "index: 171
        },
        {
            "abbreviation: "PH",
            "calling_code: 63,
            "country: "Philippines",
            "index: 172
        },
        {
            "abbreviation: "PN",
            "calling_code: 64,
            "country: "Pitcairn",
            "index: 173
        },
        {
            "abbreviation: "PL",
            "calling_code: 48,
            "country: "Poland",
            "index: 174
        },
        {
            "abbreviation: "PT",
            "calling_code: 351,
            "country: "Portugal",
            "index: 175
        },
        {
            "abbreviation: "PR",
            "calling_code: 1939,
            "country: "Puerto Rico",
            "index: 176
        },
        {
            "abbreviation: "QA",
            "calling_code: 974,
            "country: "Qatar",
            "index: 177
        },
        {
            "abbreviation: "RE",
            "calling_code: 262,
            "country: "Reunion",
            "index: 178
        },
        {
            "abbreviation: "RO",
            "calling_code: 40,
            "country: "Romania",
            "index: 179
        },
        {
            "abbreviation: "RU",
            "calling_code: 7,
            "country: "Russian Federation",
            "index: 180
        },
        {
            "abbreviation: "RW",
            "calling_code: 250,
            "country: "Rwanda",
            "index: 181
        },
        {
            "abbreviation: "SH",
            "calling_code: 290,
            "country: "Saint Helena",
            "index: 182
        },
        {
            "abbreviation: "KN",
            "calling_code: 1869,
            "country: "Saint Kitts and Nevis",
            "index: 183
        },
        {
            "abbreviation: "LC",
            "calling_code: 1758,
            "country: "Saint Lucia",
            "index: 184
        },
        {
            "abbreviation: "PM",
            "calling_code: 508,
            "country: "Saint Pierre and Miquelon",
            "index: 185
        },
        {
            "abbreviation: "VC",
            "calling_code: 1784,
            "country: "Saint Vincent and the Grenadines",
            "index: 186
        },
        {
            "abbreviation: "WS",
            "calling_code: 685,
            "country: "Samoa",
            "index: 187
        },
        {
            "abbreviation: "SM",
            "calling_code: 378,
            "country: "San Marino",
            "index: 188
        },
        {
            "abbreviation: "ST",
            "calling_code: 239,
            "country: "Sao Tome and Principe",
            "index: 189
        },
        {
            "abbreviation: "SA",
            "calling_code: 966,
            "country: "Saudi Arabia",
            "index: 190
        },
        {
            "abbreviation: "SN",
            "calling_code: 221,
            "country: "Senegal",
            "index: 191
        },
        {
            "abbreviation: "RS",
            "calling_code: 381,
            "country: "Serbia",
            "index: 192
        },
        {
            "abbreviation: "SC",
            "calling_code: 248,
            "country: "Seychelles",
            "index: 193
        },
        {
            "abbreviation: "SL",
            "calling_code: 232,
            "country: "Sierra Leone",
            "index: 194
        },
        {
            "abbreviation: "SG",
            "calling_code: 65,
            "country: "Singapore",
            "index: 195
        },
        {
            "abbreviation: "SK",
            "calling_code: 421,
            "country: "Slovakia",
            "index: 196
        },
        {
            "abbreviation: "SI",
            "calling_code: 386,
            "country: "Slovenia",
            "index: 197
        },
        {
            "abbreviation: "SB",
            "calling_code: 677,
            "country: "Solomon Islands",
            "index: 198
        },
        {
            "abbreviation: "SO",
            "calling_code: 252,
            "country: "Somalia",
            "index: 199
        },
        {
            "abbreviation: "ZA",
            "calling_code: 27,
            "country: "South Africa",
            "index: 200
        },
        {
            "abbreviation: "GS",
            "calling_code: 500,
            "country: "South Georgia and the South Sandwich Islands",
            "index: 201
        },
        {
            "abbreviation: "KR",
            "calling_code: 82,
            "country: "South Korea",
            "index: 202
        },
        {
            "abbreviation: "SS",
            "calling_code: 211,
            "country: "South Sudan",
            "index: 203
        },
        {
            "abbreviation: "ES",
            "calling_code: 34,
            "country: "Spain",
            "index: 204
        },

        {
            "abbreviation: "SD",
            "calling_code: 249,
            "country: "Sudan",
            "index: 206
        },
        {
            "abbreviation: "SR",
            "calling_code: 597,
            "country: "Suriname",
            "index: 207
        },
        {
            "abbreviation: "SJ",
            "calling_code: 47,
            "country: "Svalbard and Jan Mayen",
            "index: 208
        },
        {
            "abbreviation: "SZ",
            "calling_code: 268,
            "country: "Swaziland",
            "index: 209
        },
        {
            "abbreviation: "SE",
            "calling_code: 46,
            "country: "Sweden",
            "index: 210
        },
        {
            "abbreviation: "CH",
            "calling_code: 41,
            "country: "Switzerland",
            "index: 211
        },
        {
            "abbreviation: "SY",
            "calling_code: 963,
            "country: "Syria",
            "index: 212
        },
        {
            "abbreviation: "TJ",
            "calling_code: 992,
            "country: "Tajikistan",
            "index: 213
        },
        {
            "abbreviation: "TZ",
            "calling_code: 255,
            "country: "Tanzania",
            "index: 214
        },
        {
            "abbreviation: "TH",
            "calling_code: 66,
            "country: "Thailand",
            "index: 215
        },
        {
            "abbreviation: "CD",
            "calling_code: 243,
            "country: "The Democratic Republic of Congo",
            "index: 216
        },
        {
            "abbreviation: "TL",
            "calling_code: "undefined",
            "country: "Timor-Leste",
            "index: 217
        },
        {
            "abbreviation: "TG",
            "calling_code: 228,
            "country: "Togo",
            "index: 218
        },
        {
            "abbreviation: "TK",
            "calling_code: 690,
            "country: "Tokelau",
            "index: 219
        },
        {
            "abbreviation: "TO",
            "calling_code: 676,
            "country: "Tonga",
            "index: 220
        },
        {
            "abbreviation: "TT",
            "calling_code: 1868,
            "country: "Trinidad and Tobago",
            "index: 221
        },
        {
            "abbreviation: "TN",
            "calling_code: 216,
            "country: "Tunisia",
            "index: 222
        },
        {
            "abbreviation: "TR",
            "calling_code: 90,
            "country: "Turkey",
            "index: 223
        },
        {
            "abbreviation: "TM",
            "calling_code: 993,
            "country: "Turkmenistan",
            "index: 224
        },
        {
            "abbreviation: "TC",
            "calling_code: 1649,
            "country: "Turks and Caicos Islands",
            "index: 225
        },
        {
            "abbreviation: "TV",
            "calling_code: 688,
            "country: "Tuvalu",
            "index: 226
        },
        {
            "abbreviation: "UG",
            "calling_code: 256,
            "country: "Uganda",
            "index: 227
        },
        {
            "abbreviation: "UA",
            "calling_code: 380,
            "country: "Ukraine",
            "index: 228
        },
        {
            "abbreviation: "AE",
            "calling_code: 971,
            "country: "United Arab Emirates",
            "index: 229
        },


        {
            "abbreviation: "UM",
            "calling_code: 1,
            "country: "United States Minor Outlying Islands",
            "index: 232
        },
        {
            "abbreviation: "UY",
            "calling_code: 598,
            "country: "Uruguay",
            "index: 233
        },
        {
            "abbreviation: "UZ",
            "calling_code: 998,
            "country: "Uzbekistan",
            "index: 234
        },
        {
            "abbreviation: "VU",
            "calling_code: 678,
            "country: "Vanuatu",
            "index: 235
        },
        {
            "abbreviation: "VE",
            "calling_code: 58,
            "country: "Venezuela",
            "index: 236
        },
        {
            "abbreviation: "VN",
            "calling_code: 84,
            "country: "Vietnam",
            "index: 237
        },
        {
            "abbreviation: "VG",
            "calling_code: 1,
            "country: "Virgin Islands, British",
            "index: 238
        },
        {
            "abbreviation: "VI",
            "calling_code: 1,
            "country: "Virgin Islands, U.S.",
            "index: 239
        },
        {
            "abbreviation: "WF",
            "calling_code: 681,
            "country: "Wallis and Futuna",
            "index: 240
        },
        {
            "abbreviation: "EH",
            "calling_code: 212,
            "country: "Western Sahara",
            "index: 241
        },
        */


    ];
