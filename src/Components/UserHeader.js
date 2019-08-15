import React from 'react';
import PropTypes from 'prop-types'


  const User=props=>{ 
     
          return(
            <div className='current-user'>
             <img src='http://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png' className='profile-photo' alt='profile'/>
            <h2 className='user-name'>{props.currentUser}</h2>   
            </div>
          )
      }

  User.propTypes={
    currentUser:PropTypes.string,
  }
  export default User;
