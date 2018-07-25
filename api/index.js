/* This class is used to define which modules will be consumed from 
   and which will be overridden.
   Follows the singleton pattern: https://www.sitepoint.com/javascript-design-patterns-singleton/ */

/* Import default modules & services
   - remove modules which are not to be consumed
*/
import Home from "./models/home";
import Products from "./models/products";

class Api {
  constructor() {
    if (!Api.instance) {
      this.home = new Home({});
      this.products = new Products({});

      Api.instance = this;
    }

    return Api.instance;
  }
}

const instance = new Api();
Object.freeze(instance);
export default instance;
