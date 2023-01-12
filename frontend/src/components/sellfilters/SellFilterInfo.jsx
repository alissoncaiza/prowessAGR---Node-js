import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store'
<<<<<<< HEAD
=======
import { Button} from '@mui/material';
>>>>>>> f44f048af85f6b2d8ac78d8f20c8ff5b015e06cb
import "./Cards.css";

const SellFilterInfo = ({user}) => {

    
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { wish } = state;


     //if exists seller
     const sellerExists = wish.wishItems.find((x) => x._id === user._id);

     const existUser = localStorage.getItem("userInfo");

     const handlerFollow = () => {
 
        if(!existUser) {

            window.alert('Lo siento. Debe iniciar sesión.');

        } else {

            //If there is a user I am already following (localstorage), his id, from db
            const existItem = wish.wishItems.find((x) => x._id === user._id);
            const quantity = existItem ? existItem.quantity : 1;
            
            if (existItem) {
                window.alert('Lo siento. Ya estás siguiendo a este usuario.');
                return;
            }
            
            ctxDispatch({
                type: 'WISH_ADD_ITEM',
                payload: { ...user, quantity },
            });
        }
     
     }

     const handlerUnfollow = (user) => {

        ctxDispatch({
            type: 'WISH_REMOVE_ITEM',
            payload: user,
        });

    }

  return (
<<<<<<< HEAD
        
    <div className="sell-fill-group" key={user._id}>
=======
    <div className="card">
    <div  key={user._id}>
>>>>>>> f44f048af85f6b2d8ac78d8f20c8ff5b015e06cb
        <div className="sell-fill-header">
        <h2 className="transition">
            <img href={user.image} alt={user.name} /></h2>
           
        </div>
<<<<<<< HEAD
        <div className="sell-fill-body">
            
        <Link to={`../seller/${user._id}`}>{user.name} <FontAwesomeIcon icon={faEye} /></Link>
            {existUser && sellerExists ? (<span onClick={() => handlerUnfollow(user)} className='unfollow'>Dejar de seguir</span>) : (<span key={user._id} onClick={handlerFollow} className='follow'>Seguir</span>)}
            <span className="date">Miembro Desde: {(user.createdAt).slice(0, 10)}</span>
=======
        <p> 
        <span>
           {existUser && sellerExists ? ( <Button variant="contained" color="error" size="medium"><span onClick={() => handlerUnfollow(user)}>Dejar de seguir</span></Button>) : (<Button variant="contained" size="medium" color="success"><span key={user._id} onClick={handlerFollow}>Seguir</span></Button>)}
           </span>
           
        </p>
    </div>
       
        <div > {/* body*/}
        <div >   
        <Link to={`../seller/${user._id}`}></Link>
        </div>  
        
        <div class="cta-container transition">
        <span >Miembro Desde: {(user.createdAt).slice(0, 10)}</span> 

        </div>
        
           <div class="card_circle transition"></div>
>>>>>>> f44f048af85f6b2d8ac78d8f20c8ff5b015e06cb
        </div>
    </div>
    
  )
}

export default SellFilterInfo
