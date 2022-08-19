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
