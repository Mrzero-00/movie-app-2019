import React from "react";
import axios from "axios";
import Movies from "./Movies";
import styled, { createGlobalStyle } from "styled-components";

const Styled = styled.div`
  .Loading {
    margin: 0 auto;
    font-size: 36px;
    align-contents: center;
    height: ;
  }

  .selectGenre {
    width: 60px;
    height: 60px;
  }

  .main_window {
    width: 100vw;
    heigth: 100%;
  }

  .Movie_view {
    width: 45%;
    background: #fff;
    margin: 32px;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  }

  .Movie_list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  background: #e9e9e9;
}
`;

class App extends React.Component {
  state = {
    isLoading: true,
    movielist: [],
    selectGenre: "",
  };

  getMovielist = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?sort_by=rating&genre=${this.state.selectGenre}`
    ); //비동기 작업을 안해주면 데이터를 읽어오는데 오류발생할 수 있음.
    console.log(movies);

    this.setState({
      movielist: movies,
      isLoading: false,
    });
  };

  selectGenres = (e) => {
    const selectGenre = e.target.value;
    this.setState({ selectGenre, isLoading: true });
    console.dir(this.state.selectGenre);
    //this.getMovielist();
  };

  componentDidUpdate() {
    if (this.state.isLoading === true) {
      this.getMovielist();
    }
  }

  render() {
    const { isLoading, movielist } = this.state;

    return (
      <Styled>
        <GlobalStyle />
        <div className="main_window">
          <div className="selectGenre">
            <select className="selectGenre_bar" onChange={this.selectGenres}>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Short</option>
              <option>Family</option>
              <option>Romance</option>
              <option>Talk-Show</option>
              <option>Animation</option>
              <option>Music</option>
              <option>Adventure</option>
              <option>Fantasy</option>
              <option>Action</option>
              <option>Sci-Fi</option>
              <option>Crime</option>
              <option>News</option>
              <option>Game-Show</option>
              <option>Mystery</option>
              <option>Musical</option>
              <option>Horror</option>
              <option>Thriller</option>
              <option>Reality-TV</option>
              <option>Documentary</option>
              <option>Sport</option>
              <option>History</option>
              <option>Western</option>
              <option>Biography</option>
              <option>War</option>
              <option>Film-Noir</option>
              <option>Adult</option>
            </select>
          </div>

          {isLoading ? (
            <span className="Loading">Loading...</span>
          ) : (
            <div class="Movie_list">
              {movielist.map((item) => {
                return (
                  <Movies
                    key={item.id}
                    title={item.title}
                    rating={item.rating}
                    year={item.year}
                    genres={item.genres}
                    summary={item.summary}
                    url={item.url}
                    poster={item.medium_cover_image}
                  />
                );
              })}
            </div>
          )}
        </div>
      </Styled>
    );
  }
}

export default App;
