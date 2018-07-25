import { toPage } from "api/models/pages/pages.adapter";
import { toBanner } from "api/models/adapter";

export const toHome = data => {
  if (data) {
    let home = toPage(data);
    home.banner = toBanner(data.banner);
    return home;
  }
};
