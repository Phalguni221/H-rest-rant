const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>

            <h1>Add a New Place</h1>
        <form method="POST" action="/places">
            <div class="form-group">
                <label htmlFor="name">Place Name</label>
                 <input className="form-control" id="name" name="name" required />
            </div>
            <br></br>

            <div class="form-group">
                <label htmlFor="pic">Place Picture</label>
                 <input className="form-control" id="pic" name="pic" />
            </div>
            <br></br>

            <div class="form-group">
                <label htmlFor="city">City Name</label>
                 <input className="form-control" id="city" name="city" />
            </div>
            <br></br>

            <div class="form-group">
                <label htmlFor="state">State</label>
                 <input className="form-control" id="state" name="state" />
            </div>
            <br></br>

            <div class="form-group">
                <label htmlFor="cuisine">Cuisine</label>
                 <input className="form-control" id="cuisine" name="cuisine" required />
            </div>
            <br></br>
            
            <input type="submit" class="btn btn-primary" value="Add Place"/>

            </form>

          </main>
        </Def>
    )
}

module.exports = new_form