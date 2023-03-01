module.exports = function (config) {
  config.addPassthroughCopy("./src/css/");
  config.addPassthroughCopy("./src/img/");
  config.addPassthroughCopy("./src/js/");

  return {
    dir: {
      input: "src",
      // output: "dist",
    },
  };
};

//Different syntax for export moduling, this is used usually for backend work
//Tells us we're working in a Node application
