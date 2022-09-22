import _DemoComponent from './component.vue';

const DemoComponent = Object.assign(_DemoComponent, {
  install: (app) => {
    app.component(_DemoComponent.name, _DemoComponent);
  },
});

export default DemoComponent;