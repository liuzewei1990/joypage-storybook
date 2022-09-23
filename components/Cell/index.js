import _Cell from './component.vue';

const Cell = Object.assign(_Cell, {
  install: (app) => {
    app.component(_Cell.name, _Cell);
  },
});

export default Cell;