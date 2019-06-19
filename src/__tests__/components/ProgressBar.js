import React from "react";
import ReactDOM from "react-dom";
import ProgressBar from "../../components/ProgressBar";

var root = null;

describe('<ProgressBar />', () => {
    describe('when given percent', () => {
        beforeEach(() => {
            root = document.createElement('div');
            ReactDOM.render(<ProgressBar percent={40} />, root);
        });
        it('renders a div element', () => {
            expect(root.childNodes[0].nodeName).toEqual("DIV");
        });
        it('sets a progress className', () => {
            expect(root.childNodes[0].className).toMatch(/progress/);
        });
        it('renders a div element as a child of the previous div element', () => {
            expect(root.childNodes[0].childNodes[0].nodeName).toEqual("DIV");
        });
        it('sets a progress__bar className for the nested div', () => {
            expect(root.childNodes[0].childNodes[0].className).toMatch(/progress__bar/);
        });
        it('renders the progress properly', () => {
            expect(root.childNodes[0].childNodes[0].style.width).toEqual("40%");
        });
    });

    describe('when given red color', () => {
        beforeEach(() => {
            root = document.createElement('div');
            ReactDOM.render(<ProgressBar color="red" />, root);
        });
        it('sets a progress--color-red className', () => {
            expect(root.childNodes[0].className).toMatch(/progress--color-red/);
        });
    });

    describe('when big is set to be true', () => {
        beforeEach(() => {
            root = document.createElement('div');
            ReactDOM.render(<ProgressBar big />, root);
        });
        it('sets a progress--big className', () => {
            expect(root.childNodes[0].className).toMatch(/progress--big/);
        });
    });
});