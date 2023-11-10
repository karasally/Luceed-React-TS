export default function (plop) {
  // controller generator
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/CustomComponents/{{name}}/{{name}}.tsx",
        templateFile: "templates/component.template.hbs",
      },
      {
        type: "add",
        path: "src/CustomComponents/{{name}}/{{name}}.module.css",
      },
    ],
  });

  plop.setHelper("titleCase", (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  });
}
