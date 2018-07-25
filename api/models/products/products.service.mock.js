import PageService from "api/models/page.service";

export default class ProductsMockService extends PageService {
  get({ id, url, data }) {
    return Promise.resolve([
      {
        id: 10041,
        title: "Product A",
        thumbnail: {
          title: "img-1.png",
          imageUrl: "/img/mock/img-1.png",
          alternateText: "img-1.png",
          width: "",
          height: ""
        },
        summary:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo aliquam molestiae inventore, molestias, doloribus aperiam eaque adipisci qui, tempora maiores laborum. Quisquam harum, amet eveniet ex magnam quasi culpa exercitationem.</p>",
        url: "/products/product-a/",
        isHidden: false
      },
      {
        id: 10042,
        title: "Product B",
        thumbnail: {
          title: "img-2.png",
          imageUrl: "/img/mock/img-2.png",
          alternateText: "img-2.png",
          width: "",
          height: ""
        },
        summary:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, officia nihil adipisci nulla ipsam, dolorum molestias totam repellendus dicta veritatis perferendis deserunt. Facere numquam, sapiente sint suscipit facilis adipisci doloribus.</p>",
        url: "/products/product-b/",
        isHidden: false
      },
      {
        id: 10043,
        title: "Product C",
        thumbnail: {
          title: "img-3.png",
          imageUrl: "/img/mock/img-3.png",
          alternateText: "img-3.png",
          width: "",
          height: ""
        },
        summary:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa accusantium harum exercitationem officia nobis suscipit!</p>",
        url: "/products/product-c/",
        isHidden: false
      },
      {
        id: 10044,
        title: "Product D",
        thumbnail: {
          title: "img-4.png",
          imageUrl: "/img/mock/img-4.png",
          alternateText: "img-4.png",
          width: "",
          height: ""
        },
        summary:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dignissimos rem amet sunt natus unde, eum tempore ullam possimus! Asperiores.</p>",
        url: "/products/product-d/",
        isHidden: false
      },
      {
        id: 10045,
        title: "Product E",
        thumbnail: {
          title: "img-5.png",
          imageUrl: "/img/mock/img-5.png",
          alternateText: "img-5.png",
          width: "",
          height: ""
        },
        summary:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptatem, quaerat esse quis.</p>",
        url: "/products/product-e/",
        isHidden: false
      },
      {
        id: 10046,
        title: "Product F",
        thumbnail: {
          title: "img-6.png",
          imageUrl: "/img/mock/img-6.png",
          alternateText: "img-6.png",
          width: "",
          height: ""
        },
        summary:
          "<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi enim, magnam perspiciatis harum itaque? Officia, voluptates suscipit rem omnis.</span></p>",
        url: "/products/product-f/",
        isHidden: false
      }
    ]);
  }
}
