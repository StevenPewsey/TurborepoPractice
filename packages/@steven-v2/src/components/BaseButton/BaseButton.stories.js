import BaseButton from "./BaseButton.vue"

export default {
  title: 'Steve/BaseButton',
  component: BaseButton
}


const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: '<BaseButton v-bind="args" />'
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  kind: "test"
};
