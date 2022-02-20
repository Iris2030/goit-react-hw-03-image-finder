import React, { Component } from "react";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import "./App.css";
import Searchbar from "./Components/Searchbar/Searchbar";
import Button from "./Components/Button/Button";
import Loader from "./Components/Loader/Loader";
import Modal from "./Components/Modal/Modal";
import Notiflix from 'notiflix';

class App extends Component {
  state = {
    inputValue: "",
    pictures: [],
    page: 1,
    isPending: false,
    error: null,
    isModalOpen: false,
    modalImg: "",
  
  };

  componentDidUpdate() {
    if (this.state.isPending) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.inputValue}&page=${this.state.page}&key=24733344-a7c635fb3d48788b7b7d4e05e&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error("no such pictures found"));
        })
        .then((pictures) => {
          if(pictures.totalHits === 0){
            Notiflix.Notify.failure('no pictures found');
         }
          this.setState((prevState) => ({
            pictures:
              this.state.page > 1
                ? [...prevState.pictures, ...pictures.hits]
                : pictures.hits,
            isPending: false, 
          }));
        })
        .catch((error) => this.setState({ error: error, isPending: false }));
    }
  }

  handleSetQuery = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onLoadMorePages () {
    this.setState((prevState) => ({
      isPending: true,
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();


    this.setState({ isPending: true, page: 1 , pictures: []});
  };

  handleModalToggle = (image) => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen, modalImg: image  }));
   
  };

  render() {
    const { error, pictures } = this.state;
  


    return (
      <div>
        {error && <h1>{error.message}</h1>}
        <Searchbar
          handleFormSubmit={this.handleFormSubmit}
          handleSetQuery={this.handleSetQuery}
          inputValue={this.state.inputValue}
        />

      {this.state.isPending && this.state.page === 1 ? <Loader/> : pictures.length > 0 ? (
        <ImageGallery
          pictures={pictures}
          handleModalToggle={this.handleModalToggle}
        />
        ) : null}


        
        {!(pictures.length > 0) ? null : !this.state.isPending ?(
          <Button onLoadMorePages={this.onLoadMorePages.bind(this)} />
        ): <Loader/>}
        {this.state.isModalOpen && <Modal handleModalToggle={this.handleModalToggle} image={this.state.modalImg}/>}
      </div>


    );
  }
}

export default App;
