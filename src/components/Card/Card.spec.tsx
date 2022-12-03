import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Card from "./Card";

describe("Card Tests", () => {
    test("should match snapshot", () => {
        const component = shallow(<Card></Card>);
        expect(shallowToJson(component)).toMatchSnapshot();
    })
})