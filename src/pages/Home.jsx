

import { useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate();
    const handleClick = (page) => {
        navigate(page);
      };
  
    return (
    <div>
            <h1>Surprise</h1>
            <button onClick={()=>handleClick('/card')}>
            Get your card!    
            </button>
   </div>
    );

};


export default Home; 