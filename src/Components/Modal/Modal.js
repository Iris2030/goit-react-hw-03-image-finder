import s from "../../styles.module.css";
import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Modal extends Component{

componentDidMount(){
window.addEventListener('keydown', this.onEscPress)
}

onEscPress=(event)=>{
if(event.code === 'Escape'){
    this.props.handleModalToggle('')
}
}

componentWillUnmount(){
window.removeEventListener('keydown', this.onEscPress)
    
}

    render(){
        return (
          <div
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                this.props.handleModalToggle('');
              }
            }}
            className={s.Overlay}
          >
            <div className={s.Modal}>
              <img src={this.props.image} alt="" />
            </div>
          </div>
        );

    }
}

Modal.propTypes={
    image: PropTypes.string.isRequired,
    handleModalToggle: PropTypes.func.isRequired,
}