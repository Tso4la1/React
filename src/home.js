import 'bootstrap/dist/css/bootstrap.min.css';         
import PostComponent from './postsComponent';
import loader from './logo.svg';
import AlertComponent from './AlertComponent';
import CarouselComponent from './carouselComponent';

//import {useState, useEffect } from 'react';
import useTsola from './useTsola';
//import {useContext} from 'react'

  
const HomeComponent = () => {
const {data:posts, isPending, error} = useTsola ('')


    
    
    

    return ( 
        <div>
            <CarouselComponent />
            {error && < AlertComponent props={error} />}
            
            {isPending && <div> <img src={loader} width="200" alt='preloader' /></div>}
            {posts && < PostComponent posts={posts}  />}
            


        </div>
     );
}
 
export default HomeComponent;  