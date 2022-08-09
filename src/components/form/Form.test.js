import {render,screen} from "@testing-library/react"
import Form from "./index"

test('should ', () => {
    render(<Form/>)
    const submit=screen.getByTestId("submit")
    expect(submit.textContent).toBe("GO!")
    
})
