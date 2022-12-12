import React, { Component } from "react";
import { getMovies } from "../services/moives";
import Like from "../components/like"
import UnLike from "../components/unlike"
class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({movies})
  }

  HandleLikeDislike(movie) {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movies[index] }
    movies[index].like = !movies[index].like
    this.setState({ movies })
  }


  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
    return <p>There are no movies availabes</p>;

    return (
        <React.Fragment>
        <p>Showing {count} movies in database. </p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Stock</th>
            <th scope="col">Rating</th>
            <th scope="col">Like</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            { this.state.movies.length > 0 && this.state.movies.map((movie, index) => (
                <tr key={movie._id}>
                <th scope="row">{index+1}</th>
                <td>{movie.title}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.rating}</td>
                <td onClick={() => this.HandleLikeDislike(movie)} >{movie.like ? <Like /> : <UnLike /> }</td>
                <td><button onClick={() => this.handleDelete(movie)} type="button" className="btn btn-outline-danger">Delete</button></td>
              </tr>
            ))
            }
          
        </tbody>
      </table>
      </React.Fragment>
    );
  }
}

export default Movies;
