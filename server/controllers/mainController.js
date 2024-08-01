exports.homepage = async (req, res) => {
  const locals = {
    title: "Node JS Notes",
    description: "Notes App",
  };

  res.render("index", { locals, layout: "../views/layouts/front-page" });
};

exports.about = async (req, res) => {
  const locals = {
    title: "About - Node JS Notes",
    description: "Notes App",
  };

  res.render("about", locals);
};
