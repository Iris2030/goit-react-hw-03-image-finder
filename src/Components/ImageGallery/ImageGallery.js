import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "../../styles.module.css";
import PropTypes from "prop-types";


export default function ImageGallery({ pictures, handleModalToggle}) {

  return (
    <ul className={s.ImageGallery}>
      {pictures.map((picture) => {
        return (
          <ImageGalleryItem handleModalToggle={handleModalToggle} key={picture.id} pictureUrl={picture.webformatURL} largePicture={picture.largeImageURL}/>
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes={
    picture: PropTypes.array,
    handleModalToggle: PropTypes.func.isRequired,
}