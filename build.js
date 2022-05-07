const path = require("path");
const feather = require("feather-icons");
const pascalCase = require("pascal-case");
const fs = require("fs-extra");

const componentTemplate = (icon) =>
  `
import {computed, toRefs, reactive, h} from 'vue';
export default {
  name: '${icon.pascalCasedComponentName}',
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },

  functional: true,

  setup: function setup(props, { attrs: attributes }) {
        const { size: propSize } = toRefs(props);
        const size = computed(() =>
            propSize.value.slice(-1) === "x"
                ? propSize.value.slice(0, propSize.value.length - 1) + "em"
                : parseInt(propSize.value) + "px"
        );
        const attrs = reactive({
            ...toRefs(attributes),
            width: computed(() => attributes.width ?? size.value),
            height: computed(() => attributes.height ?? size.value),
        });
      return ()=> h('svg',{
          innerHTML:'${icon.contents}',
          ...${JSON.stringify(icon.attrs)},
          ...attrs
      })
  }
}
`.trim();

const handleComponentName = (name) => name.replace(/-(\d+)/, "$1");
const icons = Object.keys(feather.icons).map((name) => ({
    ...feather.icons[name],
  pascalCasedComponentName: pascalCase(`${handleComponentName(name)}-icon`),
}));
Promise.all(
  icons.map((icon) => {
    const component = componentTemplate(icon);
    const filepath = `./src/components/${icon.pascalCasedComponentName}.js`;
    return fs
      .ensureDir(path.dirname(filepath))
      .then(() => fs.writeFile(filepath, component, "utf8"));
  })
).then(() => {
  const main = icons
    .map(
      (icon) =>
            `export { default as ${icon.pascalCasedComponentName} } from './components/${icon.pascalCasedComponentName}'`
    )
    .join("\n\n");
  return fs.outputFile("./src/index.js", main, "utf8");
});
