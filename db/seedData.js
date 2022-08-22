const discounts = [
  {
    name: "Labor Day Sale",
    percent: 0.15,
    couponcode: "LABOR15",
  },
  {
    name: "End of Summer Sale",
    percent: 0.1,
    couponcode: "BYEBYESUMMER",
  },
  {
    name: "Spooky Discounts",
    percent: 0.08,
    couponcode: "SPOOKY8",
  },
  {
    name: "One Day Only Sale",
    percent: 0.3,
    couponcode: "TAGN30",
  },
  {
    name: "Holiday Special",
    percent: 0.2,
    couponcode: "XMAS20",
  },
  {
    name: "Sole Day",
    percent: 0.25,
    couponcode: "SOLES25",
  },
];

const categories = [
  {
    name: "Brand",
  },
  {
    name: "Color",
  },
  {
    name: "Activity",
  },
  {
    name: "Gender",
  },
];

const tags = [
  {
    name: "Adidas",
    categoryid: 1,
  },
  {
    name: "Brooks",
    categoryid: 1,
  },
  {
    name: "Nike",
    categoryid: 1,
  },
  {
    name: "DC",
    categoryid: 1,
  },
  {
    name: "Asics",
    categoryid: 1,
  },
  {
    name: "Hoka",
    categoryid: 1,
  },
  {
    name: "Louis Vuitton",
    categoryid: 1,
  },
  {
    name: "New Balance",
    categoryid: 1,
  },
  {
    name: "Nobull",
    categoryid: 1,
  },
  {
    name: "Mizuno",
    categoryid: 1,
  },
  {
    name: "Dansko",
    categoryid: 1,
  },
  {
    name: "Balenciaga",
    categoryid: 1,
  },
  {
    name: "Fila",
    categoryid: 1,
  },
  {
    name: "Timberland",
    categoryid: 1,
  },
  {
    name: "Camper",
    categoryid: 1,
  },
  {
    name: "Crocs",
    categoryid: 1,
  },
  {
    name: "Converse",
    categoryid: 1,
  },
  {
    name: "Black",
    categoryid: 2,
  },
  {
    name: "Blue",
    categoryid: 2,
  },
  {
    name: "White",
    categoryid: 2,
  },
  {
    name: "Purple",
    categoryid: 2,
  },
  {
    name: "Orange",
    categoryid: 2,
  },
  {
    name: "Yellow",
    categoryid: 2,
  },
  {
    name: "Grey",
    categoryid: 2,
  },
  {
    name: "Green",
    categoryid: 2,
  },
  {
    name: "Brown",
    categoryid: 2,
  },
  {
    name: "Silver",
    categoryid: 2,
  },
  {
    name: "Red",
    categoryid: 2,
  },
  {
    name: "Pink",
    categoryid: 2,
  },
  {
    name: "Running",
    categoryid: 3,
  },
  {
    name: "Sneakers",
    categoryid: 3,
  },
  {
    name: "Basketball",
    categoryid: 3,
  },
  {
    name: "Sport",
    categoryid: 3,
  },
  {
    name: "Casual",
    categoryid: 3,
  },
  {
    name: "Golf",
    categoryid: 3,
  },
  {
    name: "Heels",
    categoryid: 3,
  },
  {
    name: "Hiking",
    categoryid: 3,
  },
  {
    name: "Boots",
    categoryid: 3,
  },
  {
    name: "Mens",
    categoryid: 4,
  },
  {
    name: "Womens",
    categoryid: 4,
  },
  {
    name: "Kids",
    categoryid: 4,
  },
];

const sizes = [
  {
    size: 3,
  },
  {
    size: 3.5,
  },
  {
    size: 4,
  },
  {
    size: 4.5,
  },
  {
    size: 5,
  },
  {
    size: 5.5,
  },
  {
    size: 6,
  },
  {
    size: 6.5,
  },
  {
    size: 7,
  },
  {
    size: 7.5,
  },
  {
    size: 8,
  },
  {
    size: 8.5,
  },
  {
    size: 9,
  },
  {
    size: 9.5,
  },
  {
    size: 10,
  },
  {
    size: 10.5,
  },
  {
    size: 11,
  },
  {
    size: 11.5,
  },
  {
    size: 12,
  },
  {
    size: 12.5,
  },
  {
    size: 13,
  },
  {
    size: 13.5,
  },
  {
    size: 14,
  },
];
const users = [
  {
    firstname: "John",
    lastname: "Smith",
    password: "12345678",
    username: "jsmith",
    email: "johnsmith@something.com",
    shippingaddress: "254 Spruce St, Loveland, CO, 80023",
    billingaddress: "254 Spruce St, Loveland, CO, 80023",
    paymentinfo: "Visa",
    isadmin: true,
  },
  {
    firstname: "Betty",
    lastname: "White",
    password: "12345678",
    username: "bwhite",
    email: "bettywhite@something.com",
    shippingaddress: "5789 Pine Ave, Fort Collins, CO, 80054",
    billingaddress: "5789 Pine Ave, Fort Collins, CO, 80054",
    paymentinfo: "Master Card",
  },
  {
    firstname: "Sally",
    lastname: "Jones",
    password: "87654321",
    username: "sjones",
    email: "sallyjones@something.com",
    shippingaddress: "9999 Poplar Ct, Denver, CO, 87412",
    billingaddress: "9999 Poplar Ct, Denver, CO, 87412",
    paymentinfo: "Visa",
  },
  {
    firstname: "Steve",
    lastname: "Spencer",
    password: "87654321",
    username: "sspencer",
    email: "stevespencer@something.com",
    shippingaddress: "8787 Aspen St, Castle Rock, CO, 85632",
    billingaddress: "8787 Aspen St, Castle Rock, CO, 85632",
    paymentinfo: "American Express",
  },
  {
    firstname: "Martha",
    lastname: "Cooke",
    password: "87654321",
    username: "mcooke",
    email: "marthacooke@something.com",
    shippingaddress: "4120 Walnut Ave, Pueblo, CO, 85214",
    billingaddress: "22 East St, Denver, CO, 96321",
    paymentinfo: "Visa",
  },
  {
    firstname: "Rachel",
    lastname: "Dennis",
    password: "87654321",
    username: "rdennis",
    email: "racheldennis@nothing.com",
    shippingaddress: "2472 Liberty Way, San Francisco, CA, 98745",
    billingaddress: "2472 Liberty Way, San Francisco, CA, 98745",
    paymentinfo: "American Express",
  },
  {
    firstname: "Cindy",
    lastname: "Crawford",
    password: "87654321",
    username: "ccrawford",
    email: "cindyc@neverland.com",
    shippingaddress: "564 Sunset Blvd, Los Angeles, CA, 98546",
    billingaddress: "668 Shady Lane, Aspen, CO, 85823",
    paymentinfo: "Visa",
  },
  {
    firstname: "John",
    lastname: "Elway",
    password: "87654321",
    username: "jelway",
    email: "johnelway@quarter.com",
    shippingaddress: "554 Sunset Ave, Cherry Creek, CO, 87452",
    billingaddress: "554 Sunset Ave, Cherry Creek, CO, 87452",
    paymentinfo: "Master Card",
  },
];

const products = [
  {
    name: "Lite Racer Adapt 5.0",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "Adrenaline GTS 22",
    description: "Test Description",
    price: 140.0,
  },
  {
    name: "Crazyflight",
    description: "Test Description",
    price: 91.0,
  },
  {
    name: "Kyrie Low 5",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "DC Clocker",
    description: "Test Description",
    price: 100.0,
  },
  {
    name: "Night of Mischief",
    description: "Test Description",
    price: 450.0,
  },
  {
    name: "Air jordan XXXVI Taco Jay",
    description: "Test Description",
    price: 195.0,
  },
  {
    name: "LeBron 18 Low",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "Mach 4",
    description: "Test Description",
    price: 130.0,
  },
  {
    name: "Challenger ATR 6",
    description: "Test Description",
    price: 140.0,
  },
  {
    name: "Chucks",
    description: "Test Description",
    price: 55.0,
  },
  {
    name: "Metcon",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "Wave Rider 24",
    description: "Test Description",
    price: 130.0,
  },
  {
    name: "Swift Run",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "Big Kids Disruptor II",
    description: "Test Description",
    price: 50.0,
  },
  {
    name: "Big Kids Classic Boots",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "GEL-NIMBUS 24",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "Air LeBron 18 Low",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "Mach 4",
    description: "Test Description",
    price: 130.0,
  },
  {
    name: "Challenger ATR 6",
    description: "Test Description",
    price: 140.0,
  },
  {
    name: "Bondi 8",
    description: "Test Description",
    price: 165.0,
  },
  {
    name: "Speedgoat 5",
    description: "Test Description",
    price: 150.0,
  },
  {
    name: "Gaviota 4",
    description: "Test Description",
    price: 170.0,
  },
  {
    name: "Rincon 3",
    description: "Test Description",
    price: 125.0,
  },
  {
    name: "Mafate Speed 3",
    description: "Test Description",
    price: 180.0,
  },
  {
    name: "Stinson ATR 6",
    description: "Test Description",
    price: 150.0,
  },
  {
    name: "Carbon X 3",
    description: "Test Description",
    price: 200.0,
  },
  {
    name: "Kawana",
    description: "Test Description",
    price: 140.0,
  },
  {
    name: "Mach Supersonic",
    description: "Test Description",
    price: 150.0,
  },
  {
    name: "Tecton X",
    description: "Test Description",
    price: 200.0,
  },
  {
    name: "Torrent 2",
    description: "Test Description",
    price: 125.0,
  },
  {
    name: "Clifton Edge",
    description: "Test Description",
    price: 150.0,
  },
  {
    name: "LV Trainer",
    description: "Test Description",
    price: 1200.0,
  },
  {
    name: "LeBron XIX",
    description: "Test Description",
    price: 200.0,
  },
  {
    name: "Giannis Immortality",
    description: "Test Description",
    price: 80.0,
  },
  {
    name: "Air Max 1 Golf",
    description: "Test Description",
    price: 115.0,
  },
  {
    name: "Air Zoom Infinity Tour",
    description: "Test Description",
    price: 190.0,
  },
  {
    name: "Fresh Foam Roav",
    description: "Test Description",
    price: 85.0,
  },
  {
    name: "Fresh Foam Cruzv1",
    description: "Test Description",
    price: 85.0,
  },
  {
    name: "Lightning Trainer",
    description: "Test Description",
    price: 140.0,
  },
  {
    name: "All Love Lightning Trainer",
    description: "Test Description",
    price: 140.0,
  },
  {
    name: "Metcon",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "Metcon",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "Metcon",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "Metcon",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "Metcon",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "Metcon",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "Metcon",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "ZoomX Invincible",
    description: "Test Description",
    price: 180.0,
  },
  {
    name: "ZoomX Invincible",
    description: "Test Description",
    price: 180.0,
  },
  {
    name: "ZoomX Invincible",
    description: "Test Description",
    price: 180.0,
  },
  {
    name: "Manteca",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "Manteca",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "Manteca",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "Manteca",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "Manteca",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "Chelsea",
    description: "Test Description",
    price: 60.0,
  },
  {
    name: "Wave Rider 25",
    description: "Test Description",
    price: 130.0,
  },
  {
    name: "Wave Horizon 5",
    description: "Test Description",
    price: 130.0,
  },
  {
    name: "Wave Inspire 18",
    description: "Test Description",
    price: 140.0,
  },
  {
    name: "Wave Sky",
    description: "Test Description",
    price: 170.0,
  },
  {
    name: "Wave Rebellion",
    description: "Test Description",
    price: 180.0,
  },
  {
    name: "Wave Sky 4",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "840v5",
    description: "Test Description",
    price: 130.0,
  },
  {
    name: "Fresh Foam 860v12",
    description: "Test Description",
    price: 135.0,
  },
  {
    name: "Fresh Foam X",
    description: "Test Description",
    price: 160.0,
  },
  {
    name: "Fresh Foam Vongo",
    description: "Test Description",
    price: 150.0,
  },
  {
    name: "Fresh Foam Roav",
    description: "Test Description",
    price: 85.0,
  },
  {
    name: "Nergize",
    description: "Test Description",
    price: 65.0,
  },
  {
    name: "Minimus TR",
    description: "Test Description",
    price: 130.0,
  },
  {
    name: "XP 2.0",
    description: "Test Description",
    price: 130.0,
  },
  {
    name: "LT Pro",
    description: "Test Description",
    price: 130.0,
  },
  {
    name: "Professional Patent",
    description: "Test Description",
    price: 145.0,
  },
  {
    name: "Ingrid",
    description: "Test Description",
    price: 125.0,
  },
  {
    name: "Debossed Pumps",
    description: "Test Description",
    price: 450.0,
  },
  {
    name: "Fresh Foam X Tempo v2",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "Fresh Foam X Tempo v3",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "Fresh Foam X Tempo v4",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "Fresh Foam X Tempo v5",
    description: "Test Description",
    price: 120.0,
  },
  {
    name: "DinaSoft Nitrel V5",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "DinaSoft Nitrel V6",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "DinaSoft Nitrel V7",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "DinaSoft Nitrel V8",
    description: "Test Description",
    price: 70.0,
  },
  {
    name: "Driftie",
    description: "Test Description",
    price: 80.0,
  },
  {
    name: "990v3",
    description: "Test Description",
    price: 110.0,
  },
  {
    name: "990v4",
    description: "Test Description",
    price: 110.0,
  },
  {
    name: "990v5",
    description: "Test Description",
    price: 110.0,
  },
  {
    name: "Classic Clogs",
    description: "Test Description",
    price: 35.0,
  },
  {
    name: "Classic Clogs",
    description: "Test Description",
    price: 35.0,
  },
  {
    name: "Classic Clogs",
    description: "Test Description",
    price: 35.0,
  },
  {
    name: "Classic Clogs",
    description: "Test Description",
    price: 35.0,
  },
  {
    name: "Classic Clogs",
    description: "Test Description",
    price: 35.0,
  },
];

const photos = [
  {
    name: "Lite Racer Adapt 5.0-photo",
    url: "https://m.media-amazon.com/images/I/71U5sL0vZpL._AC_SR920,736_.jpg",
  },
  {
    name: "Adrenaline GTS 22-photo",
    url: "https://m.media-amazon.com/images/I/71qgM9bDVaL._AC_SR920,736_.jpg",
  },
  {
    name: "Crazyflight-photo",
    url: "https://m.media-amazon.com/images/I/61KL4lGbT7L._AC_SR920,736_.jpg",
  },
  {
    name: "Kyrie Low 5-photo",
    url: "https://images.footlocker.com/is/image/EBFL2/D6012500_a1?wid=500&hei=500&fmt=png-alpha",
  },
  {
    name: "DC Clocker-photo",
    url: "https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/adys100724_dcshoes,p_wea_frt2.jpg",
  },
  {
    name: "Night of Mischief-photo",
    url: "https://clazzysneakers.com/pub/media/catalog/product/cache/5436a52d103ca937b8076b55bf2436ab/n/i/nike-sb-dunk-low-black-total-orange-court-purpl-bq6817-006-1_1.jpg",
  },
  {
    name: "Air jordan XXXVI Taco Jay-photo",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b2b99541-5c81-46e2-97c7-dbaf2f94a764/air-jordan-xxxvi-taco-jay-mens-basketball-shoes-zv2DcC.png",
  },
  {
    name: "LeBron 18 Low-photo",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/83d355d1-db6d-478f-bc2c-f2b99adb382a/lebron-18-low-x-atmos-basketball-shoes-bC7rKB.png",
  },
  {
    name: "Mach 4-photo",
    url: "https://m.media-amazon.com/images/I/71OGQn5xnvS._AC_SR1840,1472_.jpg",
  },
  {
    name: "Challenger ATR 6-photo",
    url: "https://m.media-amazon.com/images/I/71O+7yIpsfL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Chucks-photo",
    url: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw58ce66ea/images/a_107/563508F_A_107X1.jpg?sw=964",
  },
  {
    name: "Metcon-photo",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/25d490b5-6971-42fe-a454-da82a55e23b0/free-metcon-4-womens-training-shoes-pxHVt9.png",
  },
  {
    name: "Wave Rider 24-photo",
    url: "https://m.media-amazon.com/images/I/81XB0Rf4JpL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Swift Run-photo",
    url: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/20236175_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
  },
  {
    name: "Big Kids Disruptor II-photo",
    url: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/11174917_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
  },
  {
    name: "Big Kids Classic Boots",
    url: "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/19897123_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_400_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_020_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_402_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_403_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_401_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_022_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_405_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_750_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_404_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_100_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_300_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_301_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_021_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_003_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_001_SR_RT_GLB?$zoom$",
  },
  {
    name: "GEL-NIMBUS 24",
    url: "https://images.asics.com/is/image/asics/1011B359_002_SR_RT_GLB?$zoom$",
  },
  {
    name: "LeBron 18 Low",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/83d355d1-db6d-478f-bc2c-f2b99adb382a/lebron-18-low-x-atmos-basketball-shoes-bC7rKB.png",
  },
  {
    name: "Mach 4",
    url: "https://m.media-amazon.com/images/I/71OGQn5xnvS._AC_SR1840,1472_.jpg",
  },
  {
    name: "Challenger ATR 6",
    url: "https://m.media-amazon.com/images/I/71O+7yIpsfL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Bondi 8",
    url: "https://m.media-amazon.com/images/I/71bVPpT6xxL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Speedgoat 5",
    url: "https://m.media-amazon.com/images/I/71RTIkc4jzL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Gaviota 4",
    url: "https://m.media-amazon.com/images/I/81qRDx4K9LL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Rincon 3",
    url: "https://m.media-amazon.com/images/I/71Mb8XzdRxL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Mafate Speed 3",
    url: "https://m.media-amazon.com/images/I/7163H+GCkXL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Stinson ATR 6",
    url: "https://m.media-amazon.com/images/I/71wNnahZBCL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Carbon X 3",
    url: "https://m.media-amazon.com/images/I/71y0jUh7+GL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Kawana",
    url: "https://m.media-amazon.com/images/I/71ajwh3W5kL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Mach Supersonic",
    url: "https://m.media-amazon.com/images/I/718etfaeAOL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Tecton X",
    url: "https://m.media-amazon.com/images/I/81mNQqP-GzL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Torrent 2",
    url: "https://m.media-amazon.com/images/I/81nxC4ofzoL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Clifton Edge",
    url: "https://m.media-amazon.com/images/I/71ehfjzVP-L._AC_SR920,736_.jpg",
  },
  {
    name: "LV Trainer",
    url: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker-shoes--BM9U5PMX20_PM2_Front%20view.png?wid=2048&hei=2048",
  },
  {
    name: "LeBron XIX",
    url: "https://images.footlocker.com/is/image/EBFL2/Z0203003_a1?wid=500&hei=500&fmt=png-alpha",
  },
  {
    name: "Giannis Immortality",
    url: "https://images.footlocker.com/is/image/EBFL2/Z4099100_a1?wid=500&hei=500&fmt=png-alpha",
  },
  {
    name: "Air Max 1 Golf",
    url: "https://images.stockx.com/images/Nike-Air-Max-1-Golf-Black-Gum-White-Swoosh.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1627415465&q=57",
  },
  {
    name: "Air Zoom Infinity Tour",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/39bada69-6a82-4c02-bfbb-abf3f2210e0e/air-zoom-infinity-tour-next-boa-mens-golf-shoes-wide-LxFSGW.png",
  },
  {
    name: "Fresh Foam Roav",
    url: "https://nb.scene7.com/is/image/NB/mroavrh1_nb_02_i?$pdpflexf22x$&fmt=webp&wid=944&hei=944",
  },
  {
    name: "Fresh Foam Cruzv1",
    url: "https://nb.scene7.com/is/image/NB/mcrzrwc_nb_02_i?$pdpflexf22x$&fmt=webp&wid=944&hei=944",
  },
  {
    name: "Lightning Trainer",
    url: "https://cdn.shopify.com/s/files/1/0558/4169/products/NavyLightningLow_Concrete_1500_1000-6_8a14f247-3ade-47b5-abda-1057b3e9f82b.jpg?v=1656524644",
  },
  {
    name: "All Love Lightning Trainer",
    url: "https://cdn.shopify.com/s/files/1/0558/4169/products/AYNL_RedTrainer_SF_LT-1500-1000-4_1.jpg?v=1643672164",
  },
  {
    name: "Metcon",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dec6a91c-e68d-431b-880b-65a63fd17803/free-metcon-4-womens-training-shoes-pxHVt9.png",
  },
  {
    name: "Metcon",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/572f528f-e372-4d86-83af-12d2d72babb6/free-metcon-4-womens-training-shoes-pxHVt9.png",
  },
  {
    name: "Metcon",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/650e0442-897c-4db2-8802-c9cc46ff124b/free-metcon-4-womens-training-shoes-pxHVt9.png",
  },
  {
    name: "Metcon",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b44022f0-406d-4ca3-a29c-b6f39e80c9ca/free-metcon-4-womens-training-shoes-pxHVt9.png",
  },
  {
    name: "Metcon",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9dc60cdf-80bd-4cc2-955f-48b1de50a599/free-metcon-4-womens-training-shoes-pxHVt9.png",
  },
  {
    name: "Metcon",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/068cf820-ea0a-4690-9fe5-aae40287d026/free-metcon-4-womens-training-shoes-pxHVt9.png",
  },
  {
    name: "Metcon",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/897b359d-f2f8-4379-b875-549aadbf52d6/free-metcon-4-womens-training-shoes-pxHVt9.png",
  },
  {
    name: "ZoomX Invincible",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/76e6dd8d-5a2e-435c-bd9b-294b2e929d95/zoomx-invincible-run-flyknit-2-womens-road-running-shoes-gxbpXH.png",
  },
  {
    name: "ZoomX Invincible",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f7543e21-3a0a-41e7-8a4a-b0519128178c/zoomx-invincible-run-flyknit-2-womens-road-running-shoes-gxbpXH.png",
  },
  {
    name: "ZoomX Invincible",
    url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c613e5c0-207b-49c4-abf7-bcb620b45ca7/zoomx-invincible-run-flyknit-2-womens-road-running-shoes-gxbpXH.png",
  },
  {
    name: "Manteca",
    url: "https://images.boardriders.com/global/dcshoes-products/all/default/xlarge/adjs100147_dcshoes,p_ws4_frt1.jpg",
  },
  {
    name: "Manteca",
    url: "https://images.boardriders.com/global/dcshoes-products/all/default/xlarge/adjs100147_dcshoes,p_wpn_frt1.jpg",
  },
  {
    name: "Manteca",
    url: "https://images.boardriders.com/global/dcshoes-products/all/default/xlarge/adjs100147_dcshoes,p_lep_frt1.jpg",
  },
  {
    name: "Manteca",
    url: "https://images.boardriders.com/global/dcshoes-products/all/default/xlarge/adjs100147_dcshoes,p_kmi_frt1.jpg",
  },
  {
    name: "Manteca",
    url: "https://images.boardriders.com/global/dcshoes-products/all/default/xlarge/adjs100147_dcshoes,p_ddm_frt1.jpg",
  },
  {
    name: "Chelsea",
    url: "https://images.boardriders.com/global/dcshoes-products/all/default/xlarge/303226_dcshoes,p_ws4_frt1.jpg",
  },
  {
    name: "Wave Rider 25",
    url: "https://m.media-amazon.com/images/I/81HZfOnUtKS._AC_SR1840,1472_.jpg",
  },
  {
    name: "Wave Horizon 5",
    url: "https://m.media-amazon.com/images/I/81KmfZ5tz9L._AC_SR1840,1472_.jpg",
  },
  {
    name: "Wave Inspire 18",
    url: "https://m.media-amazon.com/images/I/71LEG3qbGQL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Wave Sky",
    url: "https://m.media-amazon.com/images/I/81qZKNm9-KL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Wave Rebellion",
    url: "https://m.media-amazon.com/images/I/81aPHzAxtTL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Wave Sky 4",
    url: "https://m.media-amazon.com/images/I/71rQLTqsoaL._AC_SR1840,1472_.jpg",
  },
  {
    name: "840v5",
    url: "https://m.media-amazon.com/images/I/71c7m52SaqL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Fresh Foam 860v12",
    url: "https://m.media-amazon.com/images/I/81VZioguG3L._AC_SR1840,1472_.jpg",
  },
  {
    name: "Fresh Foam X",
    url: "https://m.media-amazon.com/images/I/71F+RtZzbEL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Fresh Foam Vongo",
    url: "https://m.media-amazon.com/images/I/71+b4KSK94S._AC_SR1840,1472_.jpg",
  },
  {
    name: "Fresh Foam Roav",
    url: "https://m.media-amazon.com/images/I/81D-iRvARtL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Nergize",
    url: "https://m.media-amazon.com/images/I/712MbiVTBdL._AC_SR920,736_.jpg",
  },
  {
    name: "Minimus TR",
    url: "https://m.media-amazon.com/images/I/71UGo7tcdyL._AC_SR1840,1472_.jpg",
  },
  {
    name: "XP 2.0",
    url: "https://m.media-amazon.com/images/I/81g9qfX0NcL._AC_SR1840,1472_.jpg",
  },
  {
    name: "LT Pro",
    url: "https://m.media-amazon.com/images/I/81JNeriD1CL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Professional Patent",
    url: "https://m.media-amazon.com/images/I/819gwlpvtPL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Ingrid",
    url: "https://m.media-amazon.com/images/I/81ZYajLuULL._AC_SR1840,1472_.jpg",
  },
  {
    name: "Debossed Pumps",
    url: "https://cdna.lystit.com/photos/stefaniamode/bf198be7/balenciaga-green-Pumps-x-Crocs-110m.jpeg",
  },
  {
    name: "Fresh Foam X Tempo v2",
    url: "https://nb.scene7.com/is/image/NB/wtmpoln2_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "Fresh Foam X Tempo v3",
    url: "https://nb.scene7.com/is/image/NB/wtmpoll2_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "Fresh Foam X Tempo v4",
    url: "https://nb.scene7.com/is/image/NB/wtmpolk2_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "Fresh Foam X Tempo v5",
    url: "https://nb.scene7.com/is/image/NB/wtmpolm2_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "DinaSoft Nitrel V5",
    url: "https://nb.scene7.com/is/image/NB/wtntrlk5_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "DinaSoft Nitrel V6",
    url: "https://nb.scene7.com/is/image/NB/wtntrlb5_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "DinaSoft Nitrel V7",
    url: "https://nb.scene7.com/is/image/NB/wtntrll5_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "DinaSoft Nitrel V8",
    url: "https://nb.scene7.com/is/image/NB/wtntrln5_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "Driftie",
    url: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/21708564_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
  },
  {
    name: "990v3",
    url: "https://nb.scene7.com/is/image/NB/gc990gy3_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "990v4",
    url: "https://nb.scene7.com/is/image/NB/gc990nb3_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "990v5",
    url: "https://nb.scene7.com/is/image/NB/gc990bs3_nb_05_i?$pdpflexf2$&fmt=webp&wid=472&hei=472",
  },
  {
    name: "Classic Clogs",
    url: "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/8441012_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
  },
  {
    name: "Classic Clogs",
    url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/204536_669_ALT100/crocs",
  },
  {
    name: "Classic Clogs",
    url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/204536_7C1_ALT100/crocs",
  },
  {
    name: "Classic Clogs",
    url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/204536_4SN_ALT100/crocs",
  },
  {
    name: "Classic Clogs",
    url: "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/204536_5PR_ALT100/crocs",
  },
];

const productphotos = [
  {
    productid: 1,
    photoid: 1,
  },
  {
    productid: 2,
    photoid: 2,
  },
  {
    productid: 3,
    photoid: 3,
  },
  {
    productid: 4,
    photoid: 4,
  },
  {
    productid: 5,
    photoid: 5,
  },
  {
    productid: 6,
    photoid: 6,
  },
  {
    productid: 7,
    photoid: 7,
  },
  {
    productid: 8,
    photoid: 8,
  },
  {
    productid: 9,
    photoid: 9,
  },
  {
    productid: 10,
    photoid: 10,
  },
  {
    productid: 11,
    photoid: 11,
  },
  {
    productid: 12,
    photoid: 12,
  },
  {
    productid: 13,
    photoid: 13,
  },
  {
    productid: 14,
    photoid: 14,
  },
  {
    productid: 15,
    photoid: 15,
  },
  {
    productid: 16,
    photoid: 16,
  },
  {
    productid: 17,
    photoid: 17,
  },
  {
    productid: 18,
    photoid: 18,
  },
  {
    productid: 19,
    photoid: 19,
  },
  {
    productid: 20,
    photoid: 20,
  },
  {
    productid: 21,
    photoid: 21,
  },
  {
    productid: 22,
    photoid: 22,
  },
  {
    productid: 23,
    photoid: 23,
  },
  {
    productid: 24,
    photoid: 24,
  },
  {
    productid: 25,
    photoid: 25,
  },
  {
    productid: 26,
    photoid: 26,
  },
  {
    productid: 27,
    photoid: 27,
  },
  {
    productid: 28,
    photoid: 28,
  },
  {
    productid: 29,
    photoid: 29,
  },
  {
    productid: 30,
    photoid: 30,
  },
  {
    productid: 31,
    photoid: 31,
  },
  {
    productid: 32,
    photoid: 32,
  },
  {
    productid: 33,
    photoid: 33,
  },
  {
    productid: 34,
    photoid: 34,
  },
  {
    productid: 35,
    photoid: 35,
  },
  {
    productid: 36,
    photoid: 36,
  },
  {
    productid: 37,
    photoid: 37,
  },
  {
    productid: 38,
    photoid: 38,
  },
  {
    productid: 39,
    photoid: 39,
  },
  {
    productid: 40,
    photoid: 40,
  },
  {
    productid: 41,
    photoid: 41,
  },
  {
    productid: 42,
    photoid: 42,
  },
  {
    productid: 43,
    photoid: 43,
  },
  {
    productid: 44,
    photoid: 44,
  },
  {
    productid: 45,
    photoid: 45,
  },
  {
    productid: 46,
    photoid: 46,
  },
  {
    productid: 47,
    photoid: 47,
  },
  {
    productid: 48,
    photoid: 48,
  },
  {
    productid: 49,
    photoid: 49,
  },
  {
    productid: 50,
    photoid: 50,
  },
  {
    productid: 51,
    photoid: 51,
  },
  {
    productid: 52,
    photoid: 52,
  },
  {
    productid: 53,
    photoid: 53,
  },
  {
    productid: 54,
    photoid: 54,
  },
  {
    productid: 55,
    photoid: 55,
  },
  {
    productid: 56,
    photoid: 56,
  },
  {
    productid: 57,
    photoid: 57,
  },
  {
    productid: 58,
    photoid: 58,
  },
  {
    productid: 59,
    photoid: 59,
  },
  {
    productid: 60,
    photoid: 60,
  },
  {
    productid: 61,
    photoid: 61,
  },
  {
    productid: 62,
    photoid: 62,
  },
  {
    productid: 63,
    photoid: 63,
  },
  {
    productid: 64,
    photoid: 64,
  },
  {
    productid: 65,
    photoid: 65,
  },
  {
    productid: 66,
    photoid: 66,
  },
  {
    productid: 67,
    photoid: 67,
  },
  {
    productid: 68,
    photoid: 68,
  },
  {
    productid: 69,
    photoid: 69,
  },
  {
    productid: 70,
    photoid: 70,
  },
  {
    productid: 71,
    photoid: 71,
  },
  {
    productid: 72,
    photoid: 72,
  },
  {
    productid: 73,
    photoid: 73,
  },
  {
    productid: 74,
    photoid: 74,
  },
  {
    productid: 75,
    photoid: 75,
  },
  {
    productid: 76,
    photoid: 76,
  },
  {
    productid: 77,
    photoid: 77,
  },
  {
    productid: 78,
    photoid: 78,
  },
  {
    productid: 79,
    photoid: 79,
  },
  {
    productid: 80,
    photoid: 80,
  },
  {
    productid: 81,
    photoid: 81,
  },
  {
    productid: 82,
    photoid: 82,
  },
  {
    productid: 83,
    photoid: 83,
  },
  {
    productid: 84,
    photoid: 84,
  },
  {
    productid: 85,
    photoid: 85,
  },
  {
    productid: 86,
    photoid: 86,
  },
  {
    productid: 87,
    photoid: 87,
  },
  {
    productid: 88,
    photoid: 88,
  },
  {
    productid: 89,
    photoid: 89,
  },
  {
    productid: 90,
    photoid: 90,
  },
  {
    productid: 91,
    photoid: 91,
  },
  {
    productid: 92,
    photoid: 92,
  },
  {
    productid: 93,
    photoid: 93,
  },
  {
    productid: 94,
    photoid: 94,
  },
  {
    productid: 95,
    photoid: 95,
  },
  {
    productid: 96,
    photoid: 96,
  },
  {
    productid: 97,
    photoid: 97,
  },
  {
    productid: 98,
    photoid: 98,
  },
  {
    productid: 99,
    photoid: 99,
  },
  {
    productid: 100,
    photoid: 100,
  },
  {
    productid: 101,
    photoid: 101,
  },
  {
    productid: 102,
    photoid: 102,
  },
  {
    productid: 103,
    photoid: 103,
  },
  {
    productid: 104,
    photoid: 104,
  },
  {
    productid: 105,
    photoid: 105,
  },
  {
    productid: 106,
    photoid: 106,
  },
  {
    productid: 107,
    photoid: 107,
  },
  // {
  //   productid: 108,
  //   photoid: 108,
  // },
];

const favorites = [
  {
    userid: 1,
    productid: 1,
  },
  {
    userid: 2,
    productid: 2,
  },
  {
    userid: 3,
    productid: 3,
  },
  {
    userid: 4,
    productid: 4,
  },
  {
    userid: 5,
    productid: 5,
  },
  {
    userid: 6,
    productid: 6,
  },
  {
    userid: 7,
    productid: 7,
  },
  {
    userid: 8,
    productid: 8,
  },
  {
    userid: 1,
    productid: 9,
  },
];

const reviews = [
  {
    userid: 8,
    productid: 1,
    rating: 5,
    content: "test review content",
  },
  {
    userid: 7,
    productid: 5,
    rating: 4,
    content: "test review content",
  },
  {
    userid: 2,
    productid: 9,
    rating: 3,
    content: "test review content",
  },
  {
    userid: 4,
    productid: 14,
    rating: 1,
    content: "test review content",
  },
  {
    userid: 5,
    productid: 12,
    rating: 2,
    content: "test review content",
  },
  {
    userid: 5,
    productid: 7,
    rating: 4,
    content: "test review content",
  },
  {
    userid: 6,
    productid: 11,
    rating: 5,
    content: "test review content",
  },
  {
    userid: 1,
    productid: 9,
    rating: 3,
    content: "test review content",
  },
  {
    userid: 3,
    productid: 7,
    rating: 5,
    content: "test review content",
  },
  {
    userid: 7,
    productid: 13,
    rating: 3,
    content: "test review content",
  },
];

const producttags = [
  {
    productid: 1,
    tags: [1, 18, 30, 39],
  },
  {
    productid: 2,
    tags: [2, 19, 30, 39],
  },
  {
    productid: 3,
    tags: [1, 20, 31, 39],
  },
  {
    productid: 4,
    tags: [3, 21, 32, 39],
  },
  {
    productid: 5,
    tags: [4, 22, 33, 39],
  },
  {
    productid: 6,
    tags: [3, 18, 33, 39],
  },
  {
    productid: 7,
    tags: [3, 23, 32, 39],
  },
  {
    productid: 8,
    tags: [3, 26, 32, 39],
  },
  {
    productid: 9,
    tags: [6, 20, 30, 39],
  },
  {
    productid: 10,
    tags: [6, 18, 30, 39],
  },
  {
    productid: 11,
    tags: [17, 18, 34, 40],
  },
  {
    productid: 12,
    tags: [3, 19, 30, 40],
  },
  {
    productid: 13,
    tags: [10, 20, 30, 40],
  },
  {
    productid: 14,
    tags: [1, 20, 34, 41],
  },
  {
    productid: 15,
    tags: [13, 20, 34, 41],
  },
  {
    productid: 16,
    tags: [14, 26, 38, 41],
  },
  {
    productid: 17, //asics
    tags: [5, 19, 30, 39],
  },
  {
    productid: 18,
    tags: [5, 24, 30, 39],
  },
  {
    productid: 19,
    tags: [5, 19, 30, 39],
  },
  {
    productid: 20,
    tags: [5, 23, 30, 39],
  },
  {
    productid: 21,
    tags: [5, 19, 30, 39],
  },
  {
    productid: 22,
    tags: [5, 24, 30, 39],
  },
  {
    productid: 23,
    tags: [5, 24, 30, 39],
  },
  {
    productid: 24,
    tags: [5, 23, 30, 39],
  },
  {
    productid: 25,
    tags: [5, 20, 30, 39],
  },
  {
    productid: 26,
    tags: [5, 18, 30, 39],
  },
  {
    productid: 27,
    tags: [5, 25, 30, 39],
  },
  {
    productid: 28,
    tags: [5, 25, 30, 39],
  },
  {
    productid: 29,
    tags: [5, 28, 30, 39],
  },
  {
    productid: 30,
    tags: [5, 19, 30, 39],
  },
  {
    productid: 31,
    tags: [5, 20, 30, 39],
  },
  {
    productid: 32,
    tags: [5, 18, 30, 39],
  },
  {
    productid: 33,
    tags: [3, 26, 32, 39],
  },
  {
    productid: 34, //hokas
    tags: [6, 20, 30, 39],
  },
  {
    productid: 35,
    tags: [6, 18, 30, 39],
  },
  {
    productid: 36,
    tags: [6, 24, 30, 39],
  },
  {
    productid: 37,
    tags: [6, 19, 30, 39],
  },
  {
    productid: 38,
    tags: [6, 19, 30, 39],
  },
  {
    productid: 39,
    tags: [6, 18, 30, 39],
  },
  {
    productid: 40,
    tags: [6, 19, 30, 39],
  },
  {
    productid: 41,
    tags: [6, 18, 30, 39],
  },
  {
    productid: 42,
    tags: [6, 27, 30, 39],
  },
  {
    productid: 43,
    tags: [6, 20, 30, 39],
  },
  {
    productid: 44,
    tags: [6, 22, 30, 39],
  },
  {
    productid: 45,
    tags: [6, 22, 30, 39],
  },
  {
    productid: 46,
    tags: [6, 24, 30, 39],
  },
  {
    productid: 47,
    tags: [6, 20, 30, 39],
  },
  {
    productid: 48,
    tags: [7, 19, 34, 39],
  },
  {
    productid: 49,
    tags: [3, 18, 32, 39],
  },
  {
    productid: 50,
    tags: [3, 20, 32, 39],
  },
  {
    productid: 51,
    tags: [3, 18, 35, 39],
  },
  {
    productid: 52,
    tags: [3, 19, 35, 39],
  },
  {
    productid: 53,
    tags: [8, 20, 30, 39],
  },
  {
    productid: 54,
    tags: [8, 20, 30, 39],
  },
  {
    productid: 55,
    tags: [9, 19, 30, 39],
  },
  {
    productid: 56,
    tags: [9, 28, 30, 39],
  },
  {
    //womens shoe start
    productid: 57,
    tags: [3, 28, 30, 40], //nikes
  },
  {
    productid: 58,
    tags: [3, 19, 30, 40],
  },
  {
    productid: 59,
    tags: [3, 25, 30, 40],
  },
  {
    productid: 60,
    tags: [3, 18, 30, 40],
  },
  {
    productid: 61,
    tags: [3, 20, 30, 40],
  },
  {
    productid: 62,
    tags: [3, 28, 30, 40],
  },
  {
    productid: 63,
    tags: [3, 20, 30, 40],
  },
  {
    productid: 64,
    tags: [3, 19, 32, 40],
  },
  {
    productid: 65,
    tags: [3, 18, 32, 40],
  },
  {
    productid: 66,
    tags: [3, 19, 32, 40],
  },
  {
    productid: 67, //DC
    tags: [4, 20, 34, 40],
  },
  {
    productid: 68,
    tags: [4, 29, 34, 40],
  },
  {
    productid: 69,
    tags: [4, 26, 34, 40],
  },
  {
    productid: 70,
    tags: [4, 18, 34, 40],
  },
  {
    productid: 71,
    tags: [4, 19, 34, 40],
  },
  {
    productid: 72,
    tags: [4, 20, 34, 40],
  },
  {
    productid: 73, //mizuno
    tags: [10, 29, 30, 40],
  },
  {
    productid: 74,
    tags: [10, 21, 30, 40],
  },
  {
    productid: 75,
    tags: [10, 19, 30, 40],
  },
  {
    productid: 76,
    tags: [10, 21, 30, 40],
  },
  {
    productid: 77,
    tags: [10, 29, 30, 40],
  },
  {
    productid: 78,
    tags: [10, 18, 30, 40],
  },
  {
    productid: 79, //new balance
    tags: [8, 20, 30, 40],
  },
  {
    productid: 80,
    tags: [8, 18, 30, 40],
  },
  {
    productid: 81,
    tags: [8, 18, 30, 40],
  },
  {
    productid: 82,
    tags: [8, 20, 30, 40],
  },
  {
    productid: 83,
    tags: [8, 21, 30, 40],
  },
  {
    productid: 84,
    tags: [8, 18, 30, 40],
  },
  {
    productid: 85,
    tags: [8, 18, 30, 40],
  },
  {
    productid: 86, //dansko
    tags: [11, 27, 34, 40],
  },
  {
    productid: 87,
    tags: [11, 18, 34, 40],
  },
  {
    productid: 88,
    tags: [11, 21, 34, 40],
  },
  {
    productid: 89,
    tags: [11, 26, 34, 40],
  },
  {
    productid: 90, //balenciaga
    tags: [12, 25, 36, 40],
  },
  {
    productid: 91, //new balance
    tags: [8, 21, 30, 40],
  },
  {
    productid: 92,
    tags: [8, 29, 30, 40],
  },
  {
    productid: 93,
    tags: [8, 18, 30, 40],
  },
  {
    productid: 94,
    tags: [8, 24, 30, 40],
  },
  {
    productid: 95,
    tags: [8, 18, 37, 40],
  },
  {
    productid: 96,
    tags: [8, 29, 37, 40],
  },
  {
    productid: 97,
    tags: [8, 25, 37, 40],
  },
  {
    productid: 98,
    tags: [8, 28, 37, 40],
  },
  {
    //kids start
    productid: 99, //driftie
    tags: [15, 22, 34, 41],
  },
  {
    productid: 100, //new balance
    tags: [8, 24, 34, 41],
  },
  {
    productid: 101,
    tags: [8, 19, 34, 41],
  },
  {
    productid: 102,
    tags: [8, 18, 34, 41],
  },
  {
    productid: 103, //crocs
    tags: [16, 18, 34, 41],
  },
  {
    productid: 104,
    tags: [16, 29, 34, 41],
  },
  {
    productid: 105,
    tags: [16, 23, 34, 41],
  },
  {
    productid: 106,
    tags: [16, 19, 34, 41],
  },
  {
    productid: 107,
    tags: [16, 21, 34, 41],
  },
];

const orders = [
  {
    userid: 1,
    discountid: 1,
    shippingaddress: "254 Spruce St, Loveland, CO, 80023",
    billingaddress: "254 Spruce St, Loveland, CO, 80023",
    paymentinfo: "Visa",
    fulfilled: true,
  },
  {
    userid: 1,
    discountid: 1,
    shippingaddress: "254 Spruce St, Loveland, CO, 80023",
    billingaddress: "254 Spruce St, Loveland, CO, 80023",
    paymentinfo: "Visa",
    fulfilled: false,
    subtotal: 1.57,
  },
  {
    userid: 2,
    discountid: 2,
    shippingaddress: "5789 Pine Ave, Fort Collins, CO, 80054",
    billingaddress: "5789 Pine Ave, Fort Collins, CO, 80054",
    paymentinfo: "Master Card",
  },
  {
    userid: 3,
    discountid: 3,
    shippingaddress: "9999 Poplar Ct, Denver, CO, 87412",
    billingaddress: "9999 Poplar Ct, Denver, CO, 87412",
    paymentinfo: "Visa",
  },
  {
    userid: 4,
    discountid: 4,
    shippingaddress: "8787 Aspen St, Castle Rock, CO, 85632",
    billingaddress: "8787 Aspen St, Castle Rock, CO, 85632",
    paymentinfo: "American Express",
  },
  {
    userid: 5,
    discountid: 5,
    shippingaddress: "4120 Walnut Ave, Pueblo, CO, 85214",
    billingaddress: "22 East St, Denver, CO, 96321",
    paymentinfo: "Visa",
    fulfilled: true,
  },
  {
    userid: 6,
    discountid: 6,
    shippingaddress: "2472 Liberty Way, San Francisco, CA, 98745",
    billingaddress: "2472 Liberty Way, San Francisco, CA, 98745",
    paymentinfo: "American Express",
  },
  {
    userid: 7,
    discountid: 3,
    shippingaddress: "564 Sunset Blvd, Los Angeles, CA, 98546",
    billingaddress: "668 Shady Lane, Aspen, CO, 85823",
    paymentinfo: "Visa",
  },
  {
    userid: 8,
    discountid: 2,
    shippingaddress: "554 Sunset Ave, Cherry Creek, CO, 87452",
    billingaddress: "554 Sunset Ave, Cherry Creek, CO, 87452",
    paymentinfo: "Master Card",
    fulfilled: true,
  },
];

module.exports = {
  users,
  products,
  photos,
  productphotos,
  discounts,
  categories,
  tags,
  sizes,
  favorites,
  reviews,
  producttags,
  orders,
};
