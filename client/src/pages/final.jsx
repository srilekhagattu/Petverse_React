import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
    const {userid}=useParams()
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <style>
        {`
          body {
            text-align: center;
            padding: 40px 0;
            background: #EBF0F5;
          }
          h1 {
            color: #88B04B;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-weight: 900;
            font-size: 40px;
            margin-bottom: 10px;
          }
          p {
            color: #404F5E;
            font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
            font-size: 20px;
            margin: 0;
          }
          i {
            color: #9ABC66;
            font-size: 100px;
            line-height: 200px;
            margin-left: -15px;
          }
          .card {
            background: white;
            padding: 60px;
            border-radius: 4px;
            box-shadow: 0 2px 3px #C8D0D8;
            display: inline-block;
            margin: 0 auto;
          }
        `}
      </style>
      <body>
        <div className="card" style={{    width: '36rem',
    height: '36rem'}}>
          <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto' }}>
            <i className="checkmark">✓</i>
          </div>
          <div>
          <h1>Success</h1>
          </div>
          <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
          <a href={`/user/main/${userid}`}>Go to Home page</a>
        </div>
      </body>
    </html>
  );
};

export default SuccessPage;