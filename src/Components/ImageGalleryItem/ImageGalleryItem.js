import s from "../../styles.module.css";
import PropTypes from "prop-types";


export default function ImageGalleryItem({ pictureUrl ,largePicture,handleModalToggle}) {
  return (
    <li onClick={() => handleModalToggle(largePicture)} className={s.ImageGalleryItem}>
      <img className={s.ImageGalleryImage} src={pictureUrl} alt="" />
    </li>
  );
}


ImageGalleryItem.propTypes = {
    pictureUrl: PropTypes.string.isRequired,
    largePicture: PropTypes.string.isRequired,
    handleModalToggle: PropTypes.func.isRequired,
}