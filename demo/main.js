import { createApp } from "vue";
import VueTippy from "vue-tippy";
import "typeface-nunito/index.css";
import App from "./App.vue";
const app = createApp(App);
import { AirplayIcon } from "vue3-feather";
app.use(VueTippy, {
  directive: "tippy", // => v-tippy
  component: "tippy", // => <tippy/>
  componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
  defaultProps: {
    theme: "light",
    arrow: true,
    animation: "perspective",
    placement: "right",
    allowHTML: true,
  }, //
});
app.mount("#app");
