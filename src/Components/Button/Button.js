import s from '../../styles.module.css'
import PropTypes from "prop-types";




export default function Button({onLoadMorePages}){
    return <button type="button" onClick={() => onLoadMorePages()} className={s.Button}>
        Load more

        </button>
}

Button.propTypes={
    onLoadMorePages: PropTypes.func.isRequired,
}