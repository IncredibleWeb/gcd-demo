import PageService from "api/models/page.service";

export default class HomeMockService extends PageService {
  getPage({ id, url, data }) {
    return Promise.resolve({
      banner: {
        images: [
          {
            title: "banner.jpg",
            imageUrl: "/img/mock/banner.jpg",
            alternateText: "banner.jpg",
            width: 720,
            height: 405
          },
          {
            title: "banner-2x.jpg",
            imageUrl: "/img/mock/banner-2x.jpg",
            alternateText: "banner-2x.jpg",
            width: 1600,
            height: 900
          }
        ],
        title: "Home Banner",
        link: "",
        summary: ""
      },
      meta: {
        title: "Mock Home Page",
        description: "",
        keywords: "",
        creator: "John Doe",
        date: "01/01/2018"
      },
      html:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at, nisi molestiae laboriosam tempore dolorum explicabo ullam, consectetur mollitia qui reiciendis non cupiditate maiores neque ducimus? Eligendi impedit debitis hic fugit natus blanditiis at saepe praesentium in modi, provident, similique ut deserunt! Maiores dolore quia quis quo error, quisquam provident sequi accusantium, aliquam perferendis nihil quam doloremque aperiam explicabo voluptatum reprehenderit illum similique vitae temporibus in dignissimos! Amet debitis, obcaecati. Pariatur enim nisi ratione, repellendus quas ipsa! Reiciendis provident saepe in eligendi ab, error neque consequatur. Natus eum quasi eius, unde et libero.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam impedit doloribus eaque similique voluptas et veritatis molestias tempora id aut dolorum non nulla, voluptate voluptatem. Illum, in, veniam. Exercitationem facere amet, qui odio expedita, quam laborum consectetur doloribus repudiandae ipsam maxime delectus illum quasi, fugiat hic eius rem ea aspernatur laboriosam. Nesciunt obcaecati consequuntur praesentium repudiandae incidunt mollitia delectus harum ex alias eius, fugit sint quaerat dolorem aspernatur quisquam, dicta ducimus saepe laboriosam at, eum molestias unde nihil fuga vero? Voluptatum error exercitationem, quam pariatur cupiditate officiis, eligendi atque autem qui libero asperiores dolor reprehenderit laboriosam in reiciendis inventore quasi non enim unde. Corporis recusandae mollitia aspernatur ab, asperiores qui perspiciatis optio placeat vero. Culpa alias id vitae veniam autem dolore debitis, porro labore obcaecati consectetur ullam molestiae illo eaque necessitatibus, in earum commodi facere cum, atque expedita eligendi ipsam delectus vero ratione qui. Quaerat, aut officiis repellat animi doloremque praesentium magnam quidem ab consectetur reprehenderit voluptate laboriosam et numquam, dicta ad fugiat cum iusto odio eaque veritatis. Saepe necessitatibus nihil, earum hic rem maiores iusto, inventore pariatur molestias cumque explicabo, dolorem autem nesciunt! Beatae veritatis, non, architecto quam est, esse deserunt temporibus reprehenderit, ipsum ad quidem sunt corrupti magni.</p>",
      template: "Home",
      id: 10000,
      name: "en",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, ab.",
      summary:
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, similique! Ipsa quis tempore consequuntur dolorum, voluptas fugiat delectus qui consequatur?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ullam neque harum numquam possimus, beatae sint ducimus repellat, obcaecati similique accusantium, distinctio, minus id dolore tempore. Omnis facere, maxime illum.</p>",
      url: "/",
      isHidden: false
    });
  }
}
