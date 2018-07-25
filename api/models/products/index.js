import { toProductArray } from "./products.adapter";
import MockService from "./products.service.mock";

export default class Products {
  constructor({ service }) {
    this.service = service || new MockService();
  }

  get(data) {
    return this.service
      .get({ data })
      .then(response => {
        return toProductArray(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
