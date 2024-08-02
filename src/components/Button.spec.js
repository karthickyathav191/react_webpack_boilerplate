import renderer from 'react-test-renderer'
import Button from './Button'
import { shallow } from 'enzyme'
import Login from '../Login'

describe("Button Test Suite", () => {
  
  it("has a valid snapshot", () => {
    const comp = renderer.create(<Button />)
    expect(comp.toJSON()).toMatchSnapshot()
  })

  it("Props pass through", () => {
    const comp = shallow(<Login />)
    expect(comp.find(".btn").shallow().shallow().text()).toBe('Click')
  })

})