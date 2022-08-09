import {render,screen} from "@testing-library/react"
import Header  from "../header/index"


test('give me text ', () => {
    render(<Header/>)
    const text=screen.getByTestId("my")
    expect(text.textContent).toEqual("RESTy")
    
})
