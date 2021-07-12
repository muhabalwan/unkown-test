import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Universes from "./Universes";
import "../__mocks__/matchMedia";

describe("Universes Component ", () => {

    it("Should assert that giving data is rendered as expected", async () => {
        const data = [
            {id: 333, maxSize: 3, name: "Big universe"},
            {id: 111, maxSize: 1, name: "Small universe"},
            {id: 222, maxSize: 2, name: "Mid universe"}
        ];
        render(<Universes universes={data} />);
        const listItems = await screen.findAllByTestId("universe-item");
        expect(listItems.length).toEqual(3);
=        expect(listItems[0].textContent).toEqual("Name: Big universe, Max Size: 3. ");
        expect(listItems[1].textContent).toEqual("Name: Small universe, Max Size: 1. ");
        expect(listItems[2].textContent).toEqual("Name: Mid universe, Max Size: 2. ");
    });
});


