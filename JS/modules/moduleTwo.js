// import { sayHi } from './moduleOne.js'; // Regular export
// import Product from './moduleOne.js'; // Default export
// //import Product as obj from './moduleOne'; // alias

import * as product from './moduleOne.js';

//alert(product.sayHi); //say hi function
product.sayHi(" I am a Module");

