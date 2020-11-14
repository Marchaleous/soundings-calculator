const form = document.getElementById('form');
const reset = document.getElementById('reset');

// Instantiate sounding variables
let pfSounding, sfSounding, cdbSounding, pdbSounding, sdbSounding;

// Fixed day tank amount
const dt = document.getElementById('dt-measured-gallons');

// Empty table fields to be populated on submit
const pfMeasuredGallons = document.getElementById('pf-measured-gallons');
const pf80Space = document.getElementById('pf-80-space');
const pf90Space = document.getElementById('pf-90-space');
const pf80Gallons = document.getElementById('pf-80-gallons');
const pf90Gallons = document.getElementById('pf-90-gallons');

const sfMeasuredGallons = document.getElementById('sf-measured-gallons');
const sf80Space = document.getElementById('sf-80-space');
const sf90Space = document.getElementById('sf-90-space');
const sf80Gallons = document.getElementById('sf-80-gallons');
const sf90Gallons = document.getElementById('sf-90-gallons');

const cdbMeasuredGallons = document.getElementById('cdb-measured-gallons');
const cdb80Space = document.getElementById('cdb-80-space');
const cdb90Space = document.getElementById('cdb-90-space');
const cdb80Gallons = document.getElementById('cdb-80-gallons');
const cdb90Gallons = document.getElementById('cdb-90-gallons');

const pdbMeasuredGallons = document.getElementById('pdb-measured-gallons');
const pdb80Space = document.getElementById('pdb-80-space');
const pdb90Space = document.getElementById('pdb-90-space');
const pdb80Gallons = document.getElementById('pdb-80-gallons');
const pdb90Gallons = document.getElementById('pdb-90-gallons');

const sdbMeasuredGallons = document.getElementById('sdb-measured-gallons');
const sdb80Space = document.getElementById('sdb-80-space');
const sdb90Space = document.getElementById('sdb-90-space');
const sdb80Gallons = document.getElementById('sdb-80-gallons');
const sdb90Gallons = document.getElementById('sdb-90-gallons');

const totalMeasuredGallons = document.getElementById('total-measured-gallons');
const total80Space = document.getElementById('total-80-space');
const total90Space = document.getElementById('total-90-space');
const total80Gallons = document.getElementById('total-80-gallons');
const total90Gallons = document.getElementById('total-90-gallons');

// For live server or online
// function getTables() {
//   fetch('./soundings_Z-TECH_30-80.json')
//     .then(res => res.json())
//     .then(data => paintTables(data));
// }

// When opening in browser locally
function getTables() {
  const data = [
    {
      pf: {
        '80_percent': {
          '7ft 1in': 5615,
        },
        '90_percent': {
          '7ft 9in': 6320,
        },
        max: {
          '8ft 6in': 7064,
        },
        '0ft': {
          '0in': 31,
          '1in': 45,
          '2in': 61,
          '3in': 80,
          '4in': 101,
          '5in': 124,
          '6in': 150,
          '7in': 178,
          '8in': 208,
          '9in': 240,
          '10in': 274,
          '11in': 311,
        },
        '1ft': {
          '0in': 350,
          '1in': 390,
          '2in': 433,
          '3in': 477,
          '4in': 524,
          '5in': 572,
          '6in': 623,
          '7in': 674,
          '8in': 728,
          '9in': 782,
          '10in': 838,
          '11in': 895,
        },
        '2ft': {
          '0in': 953,
          '1in': 1012,
          '2in': 1073,
          '3in': 1134,
          '4in': 1196,
          '5in': 1259,
          '6in': 1323,
          '7in': 1388,
          '8in': 1454,
          '9in': 1520,
          '10in': 1588,
          '11in': 1656,
        },
        '3ft': {
          '0in': 1725,
          '1in': 1795,
          '2in': 1865,
          '3in': 1936,
          '4in': 2008,
          '5in': 2080,
          '6in': 2152,
          '7in': 2225,
          '8in': 2299,
          '9in': 2372,
          '10in': 2447,
          '11in': 2521,
        },
        '4ft': {
          '0in': 2596,
          '1in': 2672,
          '2in': 2747,
          '3in': 2824,
          '4in': 2900,
          '5in': 2977,
          '6in': 3054,
          '7in': 3132,
          '8in': 3209,
          '9in': 3288,
          '10in': 3366,
          '11in': 3445,
        },
        '5ft': {
          '0in': 3525,
          '1in': 3605,
          '2in': 3685,
          '3in': 3765,
          '4in': 3846,
          '5in': 3927,
          '6in': 4009,
          '7in': 4091,
          '8in': 4173,
          '9in': 4255,
          '10in': 4338,
          '11in': 4421,
        },
        '6ft': {
          '0in': 4505,
          '1in': 4589,
          '2in': 4673,
          '3in': 4757,
          '4in': 4842,
          '5in': 4927,
          '6in': 5012,
          '7in': 5097,
          '8in': 5183,
          '9in': 5269,
          '10in': 5355,
          '11in': 5442,
        },
        '7ft': {
          '0in': 5528,
          '1in': 5615,
          '2in': 5702,
          '3in': 5790,
          '4in': 5878,
          '5in': 5966,
          '6in': 6054,
          '7in': 6142,
          '8in': 6231,
          '9in': 6320,
          '10in': 6409,
          '11in': 6498,
        },
        '8ft': {
          '0in': 6588,
          '1in': 6678,
          '2in': 6768,
          '3in': 6858,
          '4in': 6949,
          '5in': 7032,
          '6in': 7064,
        },
      },
      sf: {
        '80_percent': {
          '6ft 10in': 5643,
        },
        '90_percent': {
          '7ft 6in': 6349,
        },
        max: {
          '8ft 3in': 7064,
        },
        '0ft': {
          '0in': 86,
          '1in': 108,
          '2in': 132,
          '3in': 159,
          '4in': 187,
          '5in': 218,
          '6in': 251,
          '7in': 286,
          '8in': 323,
          '9in': 363,
          '10in': 404,
          '11in': 447,
        },
        '1ft': {
          '0in': 492,
          '1in': 539,
          '2in': 588,
          '3in': 639,
          '4in': 692,
          '5in': 745,
          '6in': 800,
          '7in': 857,
          '8in': 914,
          '9in': 972,
          '10in': 1032,
          '11in': 1092,
        },
        '2ft': {
          '0in': 1154,
          '1in': 1216,
          '2in': 1279,
          '3in': 1344,
          '4in': 1409,
          '5in': 1475,
          '6in': 1542,
          '7in': 1610,
          '8in': 1678,
          '9in': 1748,
          '10in': 1818,
          '11in': 1888,
        },
        '3ft': {
          '0in': 1959,
          '1in': 2031,
          '2in': 2103,
          '3in': 2176,
          '4in': 2249,
          '5in': 2322,
          '6in': 2396,
          '7in': 2471,
          '8in': 2546,
          '9in': 2621,
          '10in': 2696,
          '11in': 2772,
        },
        '4ft': {
          '0in': 2848,
          '1in': 2925,
          '2in': 3002,
          '3in': 3079,
          '4in': 3157,
          '5in': 3235,
          '6in': 3313,
          '7in': 3392,
          '8in': 3471,
          '9in': 3551,
          '10in': 3530,
          '11in': 3711,
        },
        '5ft': {
          '0in': 3791,
          '1in': 3872,
          '2in': 3954,
          '3in': 4035,
          '4in': 4117,
          '5in': 4200,
          '6in': 4282,
          '7in': 4365,
          '8in': 4449,
          '9in': 4532,
          '10in': 4616,
          '11in': 4700,
        },
        '6ft': {
          '0in': 4785,
          '1in': 4869,
          '2in': 4954,
          '3in': 5040,
          '4in': 5125,
          '5in': 5211,
          '6in': 5297,
          '7in': 5383,
          '8in': 5470,
          '9in': 5556,
          '10in': 5643,
          '11in': 5731,
        },
        '7ft': {
          '0in': 5818,
          '1in': 5906,
          '2in': 5994,
          '3in': 6082,
          '4in': 6171,
          '5in': 6260,
          '6in': 6349,
          '7in': 6438,
          '8in': 6527,
          '9in': 6617,
          '10in': 6707,
          '11in': 6797,
        },
        '8ft': {
          '0in': 6888,
          '1in': 6978,
          '2in': 7049,
          '3in': 7064,
        },
      },
      cdb: {
        '80_percent': {
          '4ft 9in': 9022,
        },
        '90_percent': {
          '5ft 4in': 10187,
        },
        max: {
          '6ft 1in': 11377,
        },
        '0ft': {
          '0in': 14,
          '1in': 30,
          '2in': 52,
          '3in': 83,
          '4in': 123,
          '5in': 172,
          '6in': 233,
          '7in': 305,
          '8in': 388,
          '9in': 484,
          '10in': 594,
          '11in': 716,
        },
        '1ft': {
          '0in': 848,
          '1in': 989,
          '2in': 1137,
          '3in': 1293,
          '4in': 1453,
          '5in': 1619,
          '6in': 1790,
          '7in': 1965,
          '8in': 2142,
          '9in': 2323,
          '10in': 2506,
          '11in': 2961,
        },
        '2ft': {
          '0in': 2876,
          '1in': 3062,
          '2in': 3248,
          '3in': 3434,
          '4in': 3621,
          '5in': 3807,
          '6in': 3993,
          '7in': 4179,
          '8in': 4366,
          '9in': 4552,
          '10in': 4738,
          '11in': 4924,
        },
        '3ft': {
          '0in': 5111,
          '1in': 5297,
          '2in': 5483,
          '3in': 5670,
          '4in': 5856,
          '5in': 6042,
          '6in': 6228,
          '7in': 6415,
          '8in': 6601,
          '9in': 6787,
          '10in': 6973,
          '11in': 7160,
        },
        '4ft': {
          '0in': 7346,
          '1in': 7532,
          '2in': 7718,
          '3in': 7905,
          '4in': 8091,
          '5in': 8277,
          '6in': 8463,
          '7in': 8650,
          '8in': 8836,
          '9in': 9022,
          '10in': 9207,
          '11in': 9380,
        },
        '5ft': {
          '0in': 9542,
          '1in': 9703,
          '2in': 9864,
          '3in': 10025,
          '4in': 10187,
          '5in': 10348,
          '6in': 10509,
          '7in': 10670,
          '8in': 10831,
          '9in': 10992,
          '10in': 11148,
          '11in': 11270,
        },
        '6ft': {
          '0in': 11349,
          '1in': 11377,
        },
      },
      pdb: {
        '80_percent': {
          '3ft 7in': 4533,
        },
        '90_percent': {
          '4ft 0in': 5149,
        },
        max: {
          '4ft 7in': 5760,
        },
        '0ft': {
          '0in': 105,
          '1in': 135,
          '2in': 169,
          '3in': 209,
          '4in': 256,
          '5in': 308,
          '6in': 367,
          '7in': 434,
          '8in': 508,
          '9in': 587,
          '10in': 671,
          '11in': 761,
        },
        '1ft': {
          '0in': 854,
          '1in': 950,
          '2in': 1050,
          '3in': 1153,
          '4in': 1259,
          '5in': 1367,
          '6in': 1477,
          '7in': 1589,
          '8in': 1703,
          '9in': 1818,
          '10in': 1934,
          '11in': 2051,
        },
        '2ft': {
          '0in': 2169,
          '1in': 2287,
          '2in': 2407,
          '3in': 2528,
          '4in': 2650,
          '5in': 2772,
          '6in': 2896,
          '7in': 3020,
          '8in': 3149,
          '9in': 3271,
          '10in': 3398,
          '11in': 3525,
        },
        '3ft': {
          '0in': 3654,
          '1in': 3783,
          '2in': 3913,
          '3in': 4044,
          '4in': 4170,
          '5in': 4291,
          '6in': 4412,
          '7in': 4533,
          '8in': 4655,
          '9in': 4778,
          '10in': 4901,
          '11in': 5024,
        },
        '4ft': {
          '0in': 5149,
          '1in': 5273,
          '2in': 5398,
          '3in': 5522,
          '4in': 5627,
          '5in': 5707,
          '6in': 5752,
          '7in': 5760,
        },
      },
      sdb: {
        '80_percent': {
          '3ft 8in': 4623,
        },
        '90_percent': {
          '4ft 0in': 5116,
        },
        max: {
          '4ft 7in': 5760,
        },
        '0ft': {
          '0in': 98,
          '1in': 126,
          '2in': 160,
          '3in': 198,
          '4in': 243,
          '5in': 294,
          '6in': 351,
          '7in': 416,
          '8in': 488,
          '9in': 565,
          '10in': 649,
          '11in': 737,
        },
        '1ft': {
          '0in': 829,
          '1in': 925,
          '2in': 1024,
          '3in': 1126,
          '4in': 1231,
          '5in': 1338,
          '6in': 1448,
          '7in': 1560,
          '8in': 1673,
          '9in': 1787,
          '10in': 1903,
          '11in': 2020,
        },
        '2ft': {
          '0in': 2138,
          '1in': 2256,
          '2in': 2376,
          '3in': 2496,
          '4in': 2618,
          '5in': 2740,
          '6in': 2863,
          '7in': 2987,
          '8in': 3112,
          '9in': 3238,
          '10in': 3364,
          '11in': 3492,
        },
        '3ft': {
          '0in': 3620,
          '1in': 3749,
          '2in': 3879,
          '3in': 4010,
          '4in': 4138,
          '5in': 4260,
          '6in': 4380,
          '7in': 4501,
          '8in': 4623,
          '9in': 4746,
          '10in': 4869,
          '11in': 4992,
        },
        '4ft': {
          '0in': 5116,
          '1in': 5240,
          '2in': 5365,
          '3in': 5491,
          '4in': 5603,
          '5in': 5688,
          '6in': 5744,
          '7in': 5760,
        },
      },
      overflow: {
        max: {
          '3ft 8in': 1071,
        },
        '0ft': {
          '0in': 2,
          '1in': 4,
          '2in': 8,
          '3in': 14,
          '4in': 23,
          '5in': 33,
          '6in': 46,
          '7in': 62,
          '8in': 80,
          '9in': 101,
          '10in': 124,
          '11in': 149,
        },
        '1ft': {
          '0in': 176,
          '1in': 203,
          '2in': 230,
          '3in': 259,
          '4in': 288,
          '5in': 316,
          '6in': 345,
          '7in': 374,
          '8in': 402,
          '9in': 431,
          '10in': 460,
          '11in': 488,
        },
        '2ft': {
          '0in': 517,
          '1in': 546,
          '2in': 574,
          '3in': 603,
          '4in': 632,
          '5in': 660,
          '6in': 689,
          '7in': 717,
          '8in': 746,
          '9in': 775,
          '10in': 803,
          '11in': 832,
        },
        '3ft': {
          '0in': 861,
          '1in': 889,
          '2in': 918,
          '3in': 947,
          '4in': 975,
          '5in': 1004,
          '6in': 1033,
          '7in': 1061,
          '8in': 1071,
        },
      },
      waste: {
        max: {
          '4ft 6in': 980,
        },
        '0ft': {
          '0in': 1,
          '1in': 2,
          '2in': 4,
          '3in': 8,
          '4in': 13,
          '5in': 19,
          '6in': 26,
          '7in': 36,
          '8in': 47,
          '9in': 60,
          '10in': 75,
          '11in': 91,
        },
        '1ft': {
          '0in': 109,
          '1in': 127,
          '2in': 147,
          '3in': 168,
          '4in': 189,
          '5in': 210,
          '6in': 232,
          '7in': 253,
          '8in': 275,
          '9in': 296,
          '10in': 318,
          '11in': 339,
        },
        '2ft': {
          '0in': 361,
          '1in': 382,
          '2in': 404,
          '3in': 425,
          '4in': 447,
          '5in': 468,
          '6in': 490,
          '7in': 511,
          '8in': 533,
          '9in': 554,
          '10in': 576,
          '11in': 597,
        },
        '3ft': {
          '0in': 619,
          '1in': 640,
          '2in': 662,
          '3in': 683,
          '4in': 705,
          '5in': 726,
          '6in': 748,
          '7in': 769,
          '8in': 791,
          '9in': 812,
          '10in': 834,
          '11in': 855,
        },
        '4ft': {
          '0in': 877,
          '1in': 898,
          '2in': 920,
          '3in': 941,
          '4in': 962,
          '5in': 979,
          '6in': 980,
        },
      },
      slops: {
        max: {
          '4ft 5in': 980,
        },
        '0ft': {
          '0in': 1,
          '1in': 3,
          '2in': 7,
          '3in': 11,
          '4in': 17,
          '5in': 24,
          '6in': 32,
          '7in': 43,
          '8in': 56,
          '9in': 70,
          '10in': 86,
          '11in': 103,
        },
        '1ft': {
          '0in': 121,
          '1in': 141,
          '2in': 161,
          '3in': 182,
          '4in': 204,
          '5in': 225,
          '6in': 247,
          '7in': 268,
          '8in': 290,
          '9in': 311,
          '10in': 332,
          '11in': 354,
        },
        '2ft': {
          '0in': 375,
          '1in': 397,
          '2in': 418,
          '3in': 440,
          '4in': 461,
          '5in': 483,
          '6in': 504,
          '7in': 526,
          '8in': 547,
          '9in': 569,
          '10in': 590,
          '11in': 612,
        },
        '3ft': {
          '0in': 633,
          '1in': 655,
          '2in': 676,
          '3in': 698,
          '4in': 719,
          '5in': 741,
          '6in': 762,
          '7in': 784,
          '8in': 805,
          '9in': 827,
          '10in': 848,
          '11in': 870,
        },
        '4ft': {
          '0in': 891,
          '1in': 913,
          '2in': 934,
          '3in': 956,
          '4in': 976,
          '5in': 980,
        },
      },
    },
  ];
  console.log(data);
  const tables = data[0];

  paintTable(tables);
}

// Populates empty fields in the table
function paintTable(tables) {
  // Paint measured gallons
  pfMeasuredGallons.innerText =
    tables['pf'][pfSounding[0] + 'ft'][pfSounding[1] + 'in'];
  sfMeasuredGallons.innerText =
    tables['sf'][sfSounding[0] + 'ft'][sfSounding[1] + 'in'];
  cdbMeasuredGallons.innerText =
    tables['cdb'][cdbSounding[0] + 'ft'][cdbSounding[1] + 'in'];
  pdbMeasuredGallons.innerText =
    tables['pdb'][pdbSounding[0] + 'ft'][pdbSounding[1] + 'in'];
  sdbMeasuredGallons.innerText =
    tables['sdb'][sdbSounding[0] + 'ft'][sdbSounding[1] + 'in'];
  totalMeasuredGallons.innerText =
    +pfMeasuredGallons.innerText +
    +sfMeasuredGallons.innerText +
    +cdbMeasuredGallons.innerText +
    +pdbMeasuredGallons.innerText +
    +sdbMeasuredGallons.innerText +
    +dt.innerText;

  // Paint 80 percent
  pf80Space.innerText = +pf80Gallons.innerText - +pfMeasuredGallons.innerText;
  sf80Space.innerText = +sf80Gallons.innerText - +sfMeasuredGallons.innerText;
  cdb80Space.innerText =
    +cdb80Gallons.innerText - +cdbMeasuredGallons.innerText;
  pdb80Space.innerText =
    +pdb80Gallons.innerText - +pdbMeasuredGallons.innerText;
  sdb80Space.innerText =
    +sdb80Gallons.innerText - +sdbMeasuredGallons.innerText;
  total80Space.innerText =
    +total80Gallons.innerText - +totalMeasuredGallons.innerText;

  // Paint 90 percent
  pf90Space.innerText = +pf90Gallons.innerText - +pfMeasuredGallons.innerText;
  sf90Space.innerText = +sf90Gallons.innerText - +sfMeasuredGallons.innerText;
  cdb90Space.innerText =
    +cdb90Gallons.innerText - +cdbMeasuredGallons.innerText;
  pdb90Space.innerText =
    +pdb90Gallons.innerText - +pdbMeasuredGallons.innerText;
  sdb90Space.innerText =
    +sdb90Gallons.innerText - +sdbMeasuredGallons.innerText;
  total90Space.innerText =
    +total90Gallons.innerText - +totalMeasuredGallons.innerText;
}

// Listener for calculate button
form.addEventListener('submit', e => {
  // Collects values for sounding inputs
  pfSounding = [
    +document.getElementById('pf-ft').value || 0,
    +document.getElementById('pf-in').value || 0,
  ];
  sfSounding = [
    +document.getElementById('sf-ft').value || 0,
    +document.getElementById('sf-in').value || 0,
  ];
  cdbSounding = [
    +document.getElementById('cdb-ft').value || 0,
    +document.getElementById('cdb-in').value || 0,
  ];
  pdbSounding = [
    +document.getElementById('pdb-ft').value || 0,
    +document.getElementById('pdb-in').value || 0,
  ];
  sdbSounding = [
    +document.getElementById('sdb-ft').value || 0,
    +document.getElementById('sdb-in').value || 0,
  ];

  // Puts zeros in fields that were not filled
  document.getElementById('pf-ft').value = pfSounding[0];
  document.getElementById('pf-in').value = pfSounding[1];

  document.getElementById('sf-ft').value = sfSounding[0];
  document.getElementById('sf-in').value = sfSounding[1];

  document.getElementById('cdb-ft').value = cdbSounding[0];
  document.getElementById('cdb-in').value = cdbSounding[1];

  document.getElementById('pdb-ft').value = pdbSounding[0];
  document.getElementById('pdb-in').value = pdbSounding[1];

  document.getElementById('sdb-ft').value = sdbSounding[0];
  document.getElementById('sdb-in').value = sdbSounding[1];

  e.preventDefault();
  getTables();
  reset.focus();
  reset.blur();
});

reset.addEventListener('click', () => {
  location.reload();
});
