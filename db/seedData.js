const users = [
  {
    firstname: "John",
    lastname: "Smith",
    username: "jsmith",
    email: "johnsmith@something.com",
    shippingaddress: "254 Spruce St, Loveland, CO, 80023",
    billingaddress: "254 Spruce St, Loveland, CO, 80023",
    paymentinfo: "Visa",
  },
  {
    firstname: "Betty",
    lastname: "White",
    username: "bwhite",
    email: "bettywhite@something.com",
    shippingaddress: "5789 Pine Ave, Fort Collins, CO, 80054",
    billingaddress: "5789 Pine Ave, Fort Collins, CO, 80054",
    paymentinfo: "Master Card",
  },
  {
    firstname: "Sally",
    lastname: "Jones",
    username: "sjones",
    email: "sallyjones@something.com",
    shippingaddress: "9999 Poplar Ct, Denver, CO, 87412",
    billingaddress: "9999 Poplar Ct, Denver, CO, 87412",
    paymentinfo: "Visa",
  },
  {
    firstname: "Steve",
    lastname: "Spencer",
    username: "sspencer",
    email: "stevespencer@something.com",
    shippingaddress: "8787 Aspen St, Castle Rock, CO, 85632",
    billingaddress: "8787 Aspen St, Castle Rock, CO, 85632",
    paymentinfo: "American Express",
  },
  {
    firstname: "Martha",
    lastname: "Cooke",
    username: "mcooke",
    email: "marthacooke@something.com",
    shippingaddress: "4120 Walnut Ave, Pueblo, CO, 85214",
    billingaddress: "22 East St, Denver, CO, 96321",
    paymentinfo: "Visa",
  },
  {
    firstname: "Rachel",
    lastname: "Dennis",
    username: "rdennis",
    email: "racheldennis@nothing.com",
    shippingaddress: "2472 Liberty Way, San Francisco, CA, 98745",
    billingaddress: "2472 Liberty Way, San Francisco, CA, 98745",
    paymentinfo: "American Express",
  },
  {
    firstname: "Cindy",
    lastname: "Crawford",
    username: "ccrawford",
    email: "cindyc@neverland.com",
    shippingaddress: "564 Sunset Blvd, Los Angeles, CA, 98546",
    billingaddress: "668 Shady Lane, Aspen, CO, 85823",
    paymentinfo: "Visa",
  },
  {
    firstname: "John",
    lastname: "Elway",
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
];

module.exports = { users, products, photos, productphotos };
