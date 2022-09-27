'use strict';

/*NOT FINAL SUBMISSION, STILL WORKING. NOTES ARE IN CODE
*/


// global varriables

let goatContainer = document.getElementById('section');
let resultButton = document.getElementById('section + div');
let voteCount = 25;
let goatArray = []; 
let image1 = document.getElementById('section img:first-child');
let image2 = document.getElementById('section img:nth-child(2)');

// let clicks = 0;
// let maxClicksAllowed = 9;

// functional logic

new.Goat('bunny-goat', 'png');
yada yada yada

function Goat(name, fileExtension = 'jpeg') {
  this.name = name;
  this.img = `img/${dragon.jpg}.${sweep.jpg}`;
  this.views = 0;
  this.clicks = 0;
  Goat.allGoatsArray.push(this);
}

new Goat {}

Goat.allGoatsArray = [];

function getRandomNumber() {
  return Math.floor(Math.random() * Goat.allGoatsArray.length);
}

function renderGoats() {
  // call the getRandomNumber
  let goat1 = getRandomNumber();
  let goat2 = getRandomNumber();

  while (goat1 === goat2) {
    goat2 = getRandomNumber();
  }
  image1.src = Goat.allGoatsArray[goat1].src;
  image2.src = Goat.allGoatsArray[goat2].src;
  image1.alt = Goat.allGoatsArray[goat1].name;
  image2.alt = Goat.allGoatsArray[goat2].name;
  Goat.allGoatsArray[goat1].views++;
  Goat.allGoatsArray[goat2].views++;
}

function handleGoatClick(event) {
  if (event.target === goatContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickGoat = event.target.alt;
  for (let i = 0; i < Goat.allGoatsArray.length; i++) {
    if (clickGoat === Goat.allGoatsArray[i].name) {
      Goat.allGoatsArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    goatContainer.removeEventListener('click', handleGoatClick);
    // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    goatContainer.className = 'no-voting';
  } else {
    renderGoats();
  }
}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < Goat.allGoatsArray.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${Goat.allGoatsArray[i].name} had ${Goat.allGoatsArray[i].views} view and was clicked ${Goat.allGoatsArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}

// executable code

new Goat('Cruising Goat', './images/cruisin-goat.jpg');
new Goat('Float Your Goat', './images/float-your-goat.jpg');
new Goat('Goat Out of Hand', './images/goat-out-of-hand.jpg');
new Goat('Kissing Goat', './images/kissing-goat.jpg');
new Goat('Sassy Goat', './images/sassy-goat.jpg');
new Goat('Smiling Goat', './images/smiling-goat.jpg');
new Goat('Sweater Goat', './images/sweater-goat.jpg');

renderGoats();

goatContainer.addEventListener('click', handleGoatClick);



*/////////NOTES

'use strict';
/******************************************************************
 *  Global Variables
 ******************************************************************/
let fantaseaContainer; //html elements will go here
let resultButton;// will show the voting results
let image1; //  1st image element
let image2; // 2nd image element
let image3;// 3rd image product
let allProductsArray;// an array of product objects
let click = 0; // # of user clicks
let maxClicksPermitted = 25; // the maximum amount that a user can  click.



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
  this.imagePath= imagePath;
  this.views=0;
  this.clicks=0;
}


/************************************************************************
  * LOGIC
  ***********************************************************************
  /
/**
 * Draw 3 random products on the page
 */


function render(){
  console.log('rendering()');

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

/**
 * Results of clicking
 */

function renderResult(){
  console.log('in renderResult()');
  let ul = document.querySelector('ul');
  for(let i = 0; i < allProductsArray.length; i++){
    let product =allProductsArray[i];
    let li = document.createElement('li');
    li.textContent= `${product.productName} had ${product.views} views and was clicked ${product.clicks} times.`;
    ul.appendChild(li);
  }
}


/********************************************************************************
 * Control Logic
 */
/** initialize global variables, setting up event handlers and initial render performance */
function initialize (){
  console.log('in initialize()');
  // initial references to html
  quackContainer = document.querySelector('section');
  resultButton = document.getElementById('resultButton');
  image1=document.querySelector('section img:first-child');
  image2=document.querySelector('section img:nth-child(2)');
  image3=document.querySelector('section img:nth-child(3)');
 
  // products go here

  allProductsArray =[];
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

  quckContainer.addEventListener('click',handleProductClick);

  //initial render

  render();

}


//end initialize function
/**
 * click handler for products
 *
 */

function handleProductClick(evt){
  console.log('in handleProductClick()');

  // click product test //

  if (evt.target === fantaseaContainer){
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

  if (click===maxClicksPermitted){
    //removing event listener
    fantaseaContainer.removeEventListener ('click',handleProductClick);
    //enable the display of the result button
    resultButton.addEventListener('click',renderResult);
    resultButton.className= 'clicks-allowed';
    fantaseaContainer.className = 'no-voting';
    renderChart();
  }else{
    render();
  }
}
/**
 * Returns random index from allProductsArray
 *
 */
function getRandomProductIndex(){
  return Math.floor(Math.random()* allProductsArray.length);

}
Footer