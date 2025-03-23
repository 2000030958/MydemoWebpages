var categories = [
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-120-120,pr-true,f-auto,q-80/cms/sub_category/102e9688-c220-4a0e-bc35-0f0b16de6ad1.png',
    name: 'All',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-80/cms/sub_category/694c07e0-542b-49db-a596-b1f4f4935342.png',
    name: 'Fresh Vegetables',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-80/cms/sub_category/7e51d0f6-ee57-42f3-98f9-945033ad3e5f.png',
    name: 'Fresh Fruits',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-140-140,pr-true,f-auto,q-80/cms/sub_category/7cc63da3-7d7e-4443-bfdc-c4f21e6df5e7.png',
    name: 'New Arrivals',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-160-161,pr-true,f-auto,q-80/cms/sub_category/63d60637-1717-4eb3-9df3-a9bfb6f05d49.png',
    name: 'Leafy,Herbs &Seasonings',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-480-480,pr-true,f-auto,q-80/cms/sub_category/c82b4bac-d830-46e3-a6d3-ac8934abc9f5.png',
    name: 'Exotics& Premium',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-480-480,pr-true,f-auto,q-80/cms/sub_category/8eaac110-0f14-47d3-b986-b024f107aba3.png',
    name: 'Organics& Hydroponics',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-480-480,pr-true,f-auto,q-80/cms/sub_category/f3282f5f-6ab2-4998-977f-926d86bcbb56.png',
    name: 'Cuts& Sprouts',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-120-120,pr-true,f-auto,q-80/cms/sub_category/bd21967b-db0e-4cc5-9ea2-5ba1571d58d1.png',
    name: 'Flowers& Leaves',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-480-480,pr-true,f-auto,q-80/cms/sub_category/7194d5a4-c6a3-4a8c-9749-474e44bf5519.png',
    name: 'Plants& Gardening',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-480-480,pr-true,f-auto,q-80/cms/sub_category/30ac1f73-9e06-4c8f-a8ea-fda0903cb390.png',
    name: 'Dried& Dehydrated',
  },
  {
    imgurl: 'https://cdn.zeptonow.com/production/tr:w-90,ar-120-120,pr-true,f-auto,q-80/cms/sub_category/70d622d9-2b18-4adb-97cd-5faab58810c8.png',
    name: 'Fresh Juices',
  },
  {
    imgurl: "https://cdn.zeptonow.com/production/tr:w-90,ar-120-120,pr-true,f-auto,q-80/cms/sub_category/83dee49f-4a38-4de1-b47e-8c427cb5c664.png",
    name: 'Fresh Salads &juices'
  },
];
var categoriesDiv = document.getElementById('categories');
var categorystr = ``;
for (var i = 0; i < categories.length; i++) {
  categorystr += `
      <div class="category" onclick="selectCategory('${categories[i].name}')" id='${categories[i].name.toLowerCase()}'>
        <div class="image">
          <img src=${categories[i].imgurl} />
        </div>
        <p>${categories[i].name}</p>
      </div>
      `;
}
categoriesDiv.innerHTML = categorystr;

function selectCategory(selectedCategory) {
  for (var i = 0; i < categories.length; i++) {
    document.getElementById(categories[i].name.toLowerCase()).classList.remove('active1');

  }
  document.getElementById(selectedCategory.toLowerCase()).classList.add('active1');

}

var productsList = [{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/775f7dfe-9459-4d3b-8c21-74c8388a8ff7.jpeg",
  name: 'Grapes Green Seedless',
  quantity: '500g',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>115',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>147',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-2858-2858,pr-true,f-auto,q-80/cms/product_variant/98f6c356-920f-469e-82e7-388bd6f6162e.jpg",
  name: 'Blueberry Imported',
  quantity: '120g',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>229',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>255',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-424-283,pr-true,f-auto,q-80/inventory/product/ce963829-0ae8-43ce-9050-4ac3067fa283-image",
  name: 'Sugar Cane',
  quantity: '1pcs (30cm)',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>10',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>13',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/0eed17d4-7713-41b1-a215-70243d3bfb23.jpeg",
  name: 'Broccoli',
  quantity: '1pc(Approx.200g)',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>56',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>108',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/2f652e0c-59c4-4ab4-999a-7b9a60d9dde6.jpeg",
  name: 'Rosemary',
  quantity: '10g',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>23',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>30',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-477-309,pr-true,f-auto,q-80/inventory/product/46ba65b6-fc4a-41d5-b546-7dc26d8e3e04-imported-cherry.jpg",
  name: 'Cherry Imported',
  quantity: '100g',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>220',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>371',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/f35152f8-31b1-4450-ae76-fe0f8893005a.jpeg",
  name: 'Banana Robusta',
  quantity: '4 piece',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>39',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>59',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-612-435,pr-true,f-auto,q-80/inventory/product/f9c7470c-80b9-40ad-9dd4-ffdbbdcf9abc-Photo.jpeg",
  name: 'Apple Pink Lady',
  quantity: '2 piece',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>145',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>171',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/ac9d96c0-230e-4308-a82f-be8d676d570c.jpeg",
  name: 'Mint Leaves',
  quantity: '100g',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>23',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>29',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/c3c2dcf2-b030-44b9-a109-1d7ccabdcd53.jpeg",
  name: 'Capsicum Mixed',
  quantity: '3 pcs(Approx.450g)',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>154',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>5194',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/1d0ac60e-d80a-487e-9b76-27bf58aa891e.jpeg",
  name: 'Single Long Stem Red Rose',
  quantity: '1 piece',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>73',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>95',
  button: 'Add to cart'
},
{
  imgsrc: "https://cdn.zeptonow.com/production/tr:w-400,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/19885a90-eef8-4b09-b17d-3ecf3200caf7.jpeg",
  name: 'Pineapple',
  quantity: '1 pc(Approx.900g-1.2kg)',
  price: '<i class="fa-solid fa-indian-rupee-sign"></i>92',
  discount: '<i class="fa-solid fa-indian-rupee-sign"></i>143',
  button: 'Add to cart'
},

];

var productsDiv = document.getElementById('products');
var productstr = ``;
for (var i = 0; i < productsList.length; i++) {
  productstr += `
      <div class="products" >
        <div class="products-List">
          <img class="products-img" src="${productsList[i].imgsrc}" onclick="selectImage('${productsList[i].imgsrc}')" id='${productsList[i].imgsrc.toLowerCase()}'/>
        <p>${productsList[i].name}</p>
        <p class="quantities">${productsList[i].quantity}</p>
       <p> <span>${productsList[i].price}</span>
        <span class="discounts"><strike>${productsList[i].discount}</strike></span></p>
        <button>${productsList[i].button}</button>
          </div>
      </div>
      `;
}
productsDiv.innerHTML = productstr;
function selectImage(selectedImage) {
  for (var i = 0; i < productsList.length; i++) {
    document.getElementById(productsList[i].imgsrc.toLowerCase()).classList.remove('active2');
  }
  document.getElementById(selectedImage.toLowerCase()).classList.add('active2');
}

/*
var sortingPrice =[
            {button:'Price -- Low to High'},
            {button:'Price -- High to Low'},
];

var SortingDiv = document.getElementById('sorting-price');
var sortingstr = ``;
for (var i = 0; i < sortingPrice.length; i++) {
  sortingstr += `
      <div class="sorting-price" >
                <button onclick="sortingPrices('${sortingPrice[i].button}')">${sortingPrice[i].button}</button>
      </div>
      `;
}
SortingDiv.innerHTML = sortingstr;
     

var sortingPrices = productsList.sort(function (a, b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sortingPrices);
var sortingPrices = productsList.sort(function (a, b) {
  if (a.price < b.price) {
    return 1;
  } else if (a.price > b.price) {
    return -1;
  } else {
    return 0;
  }
});
console.log(sortingPrices);
*/
function sortProducts(order) {
  var sortedProducts = [...productsList].sort(function (a, b) {
    var priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
    var priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
    if (order === "low-to-high") {
      return priceA - priceB;
    } else if (order === "high-to-low") {
      return priceB - priceA; 
    }
    return 0;
  });

  var productstr = ``;
  for (var i = 0; i < sortedProducts.length; i++) {
    productstr += `
        <div class="products">
          <div class="products-List">
            <img class="products-img" src="${sortedProducts[i].imgsrc}" onclick="selectImage('${sortedProducts[i].imgsrc}')" id='${sortedProducts[i].imgsrc.toLowerCase()}'/>
            <p>${sortedProducts[i].name}</p>
            <p class="quantities">${sortedProducts[i].quantity}</p>
            <p>
              <span>${sortedProducts[i].price}</span>
              <span class="discounts"><strike>${sortedProducts[i].discount}</strike></span>
            </p>
            <button>${sortedProducts[i].button}</button>
          </div>
        </div>
      `;
  }
  productsDiv.innerHTML = productstr;
}

document.getElementById("sorting-price").innerHTML = `
  <div class="sorting-price">
    <button onclick="sortProducts('low-to-high')">Price -- Low to High</button>
  </div>
  <div class="sorting-price">
    <button onclick="sortProducts('high-to-low')">Price -- High to Low</button>
  </div>
`;