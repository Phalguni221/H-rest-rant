const React = require('react')
const Def = require('../default')

  function show (data) {
    console.log(data)
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    let number = (
      <h3 className="inactive">
        Not yet rated(numerically)
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings /data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += '⭐️'
      }
      rating = (
        <h3>
        {stars} stars
        </h3>
      )
      number = (
        <h3>
        {sumRatings}rating
        </h3>
      )
    }
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>{c.author}</strong>
          </h3>
          <h4>Rating: {rating}</h4>
        </div>
      )
    })
  }
    return (
      <Def>
            <link rel="stylesheet" href="/css/style.css"/>
          <main>
            <h1>{data.place.name}</h1>
            <h2>Restaurant Rating</h2>
            <p>Currently Unrated</p>
               <img src={data.place.pic} alt={data.place.name}/>
                  <h3>
                Located in {data.place.city}, {data.place.state}
                  </h3>
              <h2>
          Description
        </h2>
        <h4>
          {data.place.showEstablished()}
        </h4>
        <h4>
          Serving {data.place.cuisines}
        </h4>
            <h3>Comment Section</h3>
             <a href={`${data.place.id}/edit`}> 
                 <button class type="submit" className="btn btn-danger">
                    Edit
                </button> 
              </a> 
                <h1>Add a Comment Below</h1>
      {comments}
<form method="POST" action={`/places/${data.place.id}/comment`}>
 
      <div className="col-sm-6 col-md-4 col-lg-3">
          <label htmlFor="author">Author</label>
           <input className="form-control" id="author" name="author"/>
      </div>
      <br></br>

      <div className="col-sm-6 col-md-4 col-lg-3">
          <label htmlFor="content">Content</label>
          <textarea className="form-control" id="content" name="content" rows="4" cols="50"></textarea>
      </div>
    <br></br>
{/* 
      <div className="col-sm-6 col-md-4 col-lg-3">
          <label htmlFor="number">Star Rating</label>
           <input type="number" value="0" id="number" name="number"/>
          </div> */}
        <h2>OR</h2>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <label htmlFor="range">Star Rating(Between 1 and 5)</label>
           <input type="range"  id="range" name="range" min="1" max="5"/>
          </div>

      <br></br>

      <div className="col-sm-6 col-md-4 col-lg-3">
          <label htmlFor="rant">Rant</label>
           <input type="checkbox" id="rant" name="rant" value="true"></input>
          <label for="true">True</label>
          <input type="checkbox" id="rant" name="rant" value="false"></input>
           <label for="false">False</label>  
      </div>
      <br></br>
      <input type="submit" value="Submit"></input>
  </form>
  </main>
</Def>
         )
    }

  
module.exports = show