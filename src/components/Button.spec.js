import renderer from 'react-test-renderer'
import Button from './Button'
import { render, shallow } from 'enzyme'

describe("Button Test Suite", () => {
  
  it("has a valid snapshot", () => {
    const comp = renderer.create(
      <Button />
    )
    expect(comp.toJSON()).toMatchSnapshot()
  })

  it("Props pass through", () => {
    const comp = shallow(
      <Button className={'button'} text={"Click"} />
    )
    expect(comp.find(".button").text()).toEqual('Click')
  })

})