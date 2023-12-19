// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="bgBody">
          <div>
            {showLeftNavbar ? (
              <div className="leftNavBar">
                <h1>Left Navbar Menu</h1>
                <ul className="ul">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            ) : null}
          </div>
          <div>
            {showContent && (
              <div className="ContentStyle">
                <h1>Content</h1>
                <p>Lorem ipsum Content </p>
              </div>
            )}
          </div>

          {showRightNavbar ? (
            <div className="RightNavBar">
              <h1>Right Navbar</h1>
              <div className="Ad1">
                <p>Ad 1</p>
              </div>
              <div className="Ad2">
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
