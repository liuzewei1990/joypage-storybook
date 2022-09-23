import _Button from './component.vue';

const Button = Object.assign(_Button, {
  install: (app) => {
    app.component(_Button.name, _Button);
  },
});

export default Button;