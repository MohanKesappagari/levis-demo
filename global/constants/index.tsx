// export const DB_URL = "http://localhost:5000/graphql";
export const DB_URL = "https://vera-levis-demo.herokuapp.com/graphql";

export const SOCIAL_IMG_URL = (name: string) =>
  `https://storage.googleapis.com/social_images/social_mapped/social/${name}.jpg`;

export function isLowerCase(str: string) {
  return str == str.toLowerCase() && str != str.toUpperCase();
}
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// export const STRING = (name: string) =>
//   isLowerCase(`${name[0]}`)
//     ? capitalizeFirstLetter(name).replace(/-/g, " ")
//     : name.replace(/-/g, " ");
export const STRING = (name: string) => {
  let str_arr = name.split("/");
  return str_arr[str_arr.length - 3].replace(/-/g, " ");
};
export const SIZE = ["X-S", "S", "M", "L"];

export const AMOUNT = () =>
  Number(Math.random() * (150 - 60) + 60)
    .toFixed(2)
    .toString();

// export const COLORS = [
//   {
//     name: "White",
//     value: "362000216",
//   },
//   {
//     name: "Lapis Loft - Medium Wash",
//     value: "196310133",
//   },
//   {
//     name: "Blue",
//     value: "726930130",
//   },
//   {
//     name: "Jive Ship - Medium Wash",
//     value: "295020142",
//   },
//   {
//     name: "Dusk Rinse - Dark Wash",
//     value: "177780047",
//   },
//   {
//     name: "Soft Black",
//     value: "196270000",
//   },
//   {
//     name: "Are You Ready - Medium Wash",
//     value: "268720014",
//   },
//   {
//     name: "Indigo Minute - Medium Wash",
//     value: "523330026",
//   },
//   {
//     name: "Soft Clean White",
//     value: "196260277",
//   },
//   {
//     name: "Soft Black",
//     value: "188830016",
//   },
// ];

export const IMAGE_START = [
  "196310133",
  "362000216",
  "726930130",
  "295020142",
  "177780047",
  "196270000",
  "268720014",
  "523330026",
  "196260277",
  "188830016",
];

export const COLORS = [
  {
    name: "Troy Horse - Dark Wash",
    value: "125010369",
  },
  {
    name: "Sweet Daisy Amber - Multi-Color",
    value: "A20190000",
  },
  {
    name: "Midnight Hours - Dark Wash",
    value: "A10580001",
  },
  {
    name: "Freaky Friday",
    value: "A18830002",
  },
  {
    name: "Apple Red",
    value: "A18750001",
  },
  {
    name: "Saturated Yellow - Yellow",
    value: "A19070001",
  },
];

// export const IMAGE_START = [
//   "125010369",
//   "A20190000",
//   "A10580001",
//   "A18830002",
//   "A18750001",
//   "A19070001",
// ];
