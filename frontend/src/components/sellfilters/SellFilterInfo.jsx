import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store'
import Card from '@mui/material/Card';
import { Button, CardActionArea} from '@mui/material';
import { Swiper } from 'swiper/react';

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
    <Swiper>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
    <div className="sell-fill-group" key={user._id}>
        <div className="sell-fill-header">
            <img src={user.image} alt={user.name} />
        </div>
        <div className="sell-fill-body">
            <Link to={`../seller/${user._id}`}>{user.name} <FontAwesomeIcon icon={faEye} /></Link>
            {existUser && sellerExists ? ( <Button variant="contained" color="error" size="medium"><span onClick={() => handlerUnfollow(user)}>Dejar de seguir</span></Button>) : (<Button variant="contained" size="medium" color="success"><span key={user._id} onClick={handlerFollow}>Seguir</span></Button>)}
            <span className="date">Miembro Desde: {(user.createdAt).slice(0, 10)}</span>
        </div>
    </div>
    </CardActionArea>
    </Card>
    </Swiper>
  )
}

export default SellFilterInfo
