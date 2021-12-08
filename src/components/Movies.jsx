import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";

export class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((item) => item._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: Count } = this.state.movies;

    if (Count === 0)
      return (
        <p className="display-4 ">
          There are <span className="badge bg-warning">No</span> movie in
          database
        </p>
      );

    return (
      <React.Fragment>
        <p className="display-4 ">
          There are <span className="badge bg-info ">{Count}</span> movies in
          database
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
