/**
 * @jest-environment jsdom
 */

import {fireEvent, render} from "@testing-library/react"
import "@testing-library/jest-dom"
import SubmitButton from "./SubmitButton"

test("SubmitButton becomes disabled after click", () => {
    const submitMock = jest.fn()

    const { getByTestId } = render(
        <SubmitButton
            id="submit-details"
            label="Submit"
            onSubmit={submitMock}
        />
    )

    expect(
        getByTestId("submit-details")
    ).not.toBeDisabled()


    fireEvent.submit(
        getByTestId("submit-details")
    )

    expect(
        getByTestId("submit-details")
    ).toBeDisabled()
})
