import React from 'react';

const Blogs = () => {
    return (
        <div className='my-12'>
            <h1 className='text-3xl'>Q: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p>Ans: Access token and refresh token are used for authentication. <br />Access Token: An access token is a credential that is used to access protected resources or perform actions on behalf of a user. <br />
            Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token after the original access token expires. </p>
        </div>
    );
};

export default Blogs;