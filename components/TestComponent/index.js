import _TestComponent from './component.vue';

const TestComponent = Object.assign(_TestComponent, {
  install: (app) => {
    app.component(_TestComponent.name, _TestComponent);
  },
});

export default TestComponent;