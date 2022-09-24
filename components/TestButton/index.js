import _TestButton from "./component.vue";

const TestButton = Object.assign(_TestButton, {
    install: (app) => {
        app.component(_TestButton.name, _TestButton);
    }
});

export default TestButton;
