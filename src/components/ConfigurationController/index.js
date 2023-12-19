// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftBar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRightBar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="bgConfiguration">
          <h1>Layout</h1>
          <div>
            <input
              checked={showContent}
              onChange={onChangeContent}
              id="Content"
              type="checkbox"
            />
            <label htmlFor="Content">Content</label>
          </div>
          <div>
            <input
              checked={showLeftNavbar}
              onChange={onChangeLeftBar}
              id="leftNav"
              type="checkbox"
            />
            <label htmlFor="leftNav">Left Navbar</label>
          </div>
          <div>
            <input
              checked={showRightNavbar}
              onChange={onChangeRightBar}
              id="RightNav"
              type="checkbox"
            />
            <label htmlFor="RightNav">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
