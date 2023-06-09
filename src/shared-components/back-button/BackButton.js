import { useNavigate } from 'react-router';
import './assets/back-button.css';

export default function BackButton(){
    const navigate = useNavigate();
    return <button onClick={() => navigate(-1)} className='back-button'>Go back</button>
}