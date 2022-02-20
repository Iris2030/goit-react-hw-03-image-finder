import { ImSpinner } from 'react-icons/im';
import s from '../../styles.module.css'



export default function Loader(){
    return <div ><ImSpinner className={s.Loader} /></div>
}