'use strict';
/******************************************************************
 *  Global Variables
 ******************************************************************/
let thingContainer; //html elements will go here
let oddButton;// will show the voting results
let image1; //  1st image element
let image2; // 2nd image element
let image3;// 3rd image product
let allProductsArray;// array of product objects
let click = 0; // # of user clicks
let maxClicksAllowed = 25; // the max user can  click.



/*****************************************************************
 * PRODUCT OBJECTS HOW TO

  *
  * @param {string} productName - the name of the product name
  * @param {string} imagePath - where the image is located
  */
// making sure all random products don't repeat









const productArray = [ 'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'water-can.jpg',
  'wine-glass.jpg',];
const str = 'banana.jpg';
if (productArray.indexOf(str) === -1) {
  productArray.push(str);
}
console.log(productArray);

function Product(productName,imagePath){
  this.productName = productName;
  this.imagePath = imagePath;
  this.views=0;
  this.clicks=0;
}




function render(){
  console.log('makeItSoNumberTwo()');

  // finding previous values

  let currentSet=[];
  let previousSet=[];
  for (let i = 0; i < 3; i++) {
    let index = getRandomProductIndex();
    while(previousSet.includes(index) ||(currentSet.includes(index))){
      index=getRandomProductIndex();
    }
    currentSet.push(index);
  }
  previousSet= currentSet;


  ///getting 3 random products
  let product1 = getRandomProductIndex();
  let product2 = getRandomProductIndex();
  let product3 = getRandomProductIndex();
  
  ///how to make sure they're not the same product
  while (product1===product2 || product1===product3){
    product1=getRandomProductIndex();

  }
  while (product1===product2 || product2===product3){
    product2=getRandomProductIndex();

  }
  // Image value
  image1.src = allProductsArray[currentSet[0]].imagePath;
  image1.alt= allProductsArray[currentSet[0]].productName;
  image2.src = allProductsArray[currentSet[1]].imagePath;
  image2.alt= allProductsArray[currentSet[1]].productName;
  image3.src = allProductsArray[currentSet[2]].imagePath;
  image3.alt= allProductsArray[currentSet[2]].productName;
 

  allProductsArray[currentSet[0]].views++;
  allProductsArray[currentSet[1]].views++;
  allProductsArray[currentSet[2]].views++;
}

function showResult(){
  console.log('in renderResult()');
  let renderResult = document.getElementById('renderResult');
  for(let i = 0; i < allProductsArray.length; i++){
    let product = allProductsArray[i];
    let li = document.createElement('li');
    li.textContent= `${product.productName} had ${product.views} views and was clicked ${product.clicks} times.`;
    renderResult.appendChild(li);
  }
}


/********************************************************************************
 * Control Logic
 */

function initialize (){
  console.log('in initialize()');
  // initial references to html
  thingContainer=document.querySelector('section');
  oddButton=document.getElementById('oddButton');
  image1=document.querySelector('section img:first-child');
  image2=document.querySelector('section img:nth-child(2)');
  image3=document.querySelector('section img:nth-child(3)');
 
  // products go here

  allProductsArray=[];
  allProductsArray.push(new Product('Bag','./img/bag.jpg'));
  allProductsArray.push(new Product('Banana','./img/banana.jpg'));
  allProductsArray.push(new Product('Bathroom','./img/bathroom.jpg'));
  allProductsArray.push(new Product('Boots','./img/boots.jpg'));
  allProductsArray.push(new Product('Breakfast','./img/breakfast.jpg'));
  allProductsArray.push(new Product('Bubblegum','./img/bubblegum.jpg'));
  allProductsArray.push(new Product('Chair','./img/chair.jpg'));
  allProductsArray.push(new Product('Cthulhu','./img/cthulhu.jpg'));
  allProductsArray.push(new Product('Dog/Duck','./img/dog-duck.jpg'));
  allProductsArray.push(new Product('Dragon','./img/dragon.jpg'));
  allProductsArray.push(new Product('Pen','./img/pen.jpg'));
  allProductsArray.push(new Product('Pet-Broom','./img/pet-sweep.jpg'));
  allProductsArray.push(new Product('Scissors','./img/scissors.jpg'));
  allProductsArray.push(new Product('Shark','./img/shark.jpg'));
  allProductsArray.push(new Product('Baby-Broom','./img/sweep.png'));
  allProductsArray.push(new Product('Sleeping-Bag','./img/tauntaun.jpg'));
  allProductsArray.push(new Product('Unicorn-Mug','./img/unicorn.jpg'));
  allProductsArray.push(new Product('Watering-Can','./img/water-can.jpg'));
  allProductsArray.push(new Product('Wine-Glass','./img/wine-glass.jpg'));

  //setting up event handlers
  thingContainer.addEventListener('click', handleProductClick);


  //initial render

  render();


}



function handleProductClick(evt){
  console.log('in handleProductClick()');


  // click product test //

  if (evt.target === thingContainer){
    
    alert('Please click on an image.');
  }

  click++;
  // loop through random products
  // see if any match event target
  let clickProduct= evt.target.alt;
  for(let i=0; i< allProductsArray.length; i++){
    if (clickProduct=== allProductsArray[i].productName){
      allProductsArray[i].clicks++;
      break;
    }
  }
  //checking to see if maximimum clicks have been reached(25)

  if (click=== maxClicksAllowed){
 
    thingContainer.removeEventListener('click',handleProductClick);
    oddButton.addEventListener('click', showResult);
    oddButton.className= 'clicks-allowed';
    // thingContainer.className = 'no-voting';

    // showResult();


  }
   render();
}   
const config = {
  type: 'doughnut',
  data: data,
};
const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

/**
 * Returns random index from allProductsArray
 *
 */
function getRandomProductIndex(){
  return Math.floor(Math.random()* allProductsArray.length);


}