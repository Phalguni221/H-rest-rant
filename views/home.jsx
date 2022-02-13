const React = require('react')
const Def = require('./default')

    function home () {
        return (
          <Def>
              <main>
                  <head>
                       <h1>REST-RANT</h1>
                  </head>
                  <div className="col-sm-6">
    <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
    alt="Walnut Salad"/>
                    </div>
       Photo by <a href="https://unsplash.com/@shootdelicious">Eiliv-Sonas Aceron</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
            <br></br>
            <br></br>
            <div className = "row">

                <div className ="column">
                    <img src="./images/H-Thai-M-L logo.png" alt="Burger King"/>
                    </div>

                <div className ="column">
                    <img src="./images/Burger King.png" alt="Burger King"/>
                </div>

                <div class="column">
                    <img src="./images/Sarvanana Bhavan.png" alt="Sarvana Bhavan"/>
                </div>

                <div className ="column">
                    <img src="./images/Veggie Grill.png" alt="Veggie Grill"/>
                </div> 

                <div className ="column">
                    <img src="./images/Panda Express.png" alt="Panda Express"/>
                </div> 

                <div className ="column">
                    <img src="./images/Kawaii Kitty Cafe.png" alt="Kawaii Kitty Cafe"/>
                </div> 
                <br></br>
            </div>
                <h4>Learn more about each place!!</h4>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
                     </a>
              </main>
        </Def>
        )
    }

module.exports = home