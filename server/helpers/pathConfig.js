import fs from "fs";
import path from "path";

// retrieves the contents from a file on the file system
export const getFileContents = (files, folder = "") => {
  // concat inline styles for document <head>
  let flattenedContents = "";
  files.forEach(function(file) {
    flattenedContents += fs.readFileSync(
      path.resolve(__dirname) + folder + file
    );
  });

  return flattenedContents;
};

export const defaultPathConfig = {
  meta: {
    title: "Google Cloud Day"
  },
  title: "Performance Demo",
  html: `<h1>Google Cloud Day Demo</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi laboriosam, expedita. Tempore veniam odit sapiente quam, eveniet reprehenderit beatae, molestias.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque, dignissimos quisquam officiis similique sequi deserunt, inventore voluptates repellendus neque obcaecati doloremque. Aspernatur itaque reiciendis necessitatibus atque repellat est tempora, consequuntur, reprehenderit animi neque, dolorem vel dolore omnis. Officia saepe aut eos, totam, error quaerat necessitatibus voluptate nam accusantium repellendus!</p><p><img src="/img/mock/banner.jpg" srcset="/img/mock/banner.jpg 720w, /img/mock/banner@2x.jpg 1440w" alt="Banner" style="height: 12em; width: auto; max-width: 100%; margin: auto; display: block;" /></p>`
};
