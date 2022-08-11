export function User() {
  return (
    <>
      <div className="container">
        <div className="userInfo">
          <img src="user.png" />
          <div className="userName">
            <h6>Report for</h6>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="timeInterval">
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>

      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          h6 {
            font-size: 18px;
          }

          h1 {
            font-size: 40px;
          }

          .container {
            display: flex;
            flex-direction: column;

          }
          .userInfo {
            background-color: blue;
            color: white;
            border-radius: 20px;
            padding: 30px 30px 50px 30px;
            z-index: 1;
            height: 70%;
            position: relative;
            border: 1px solid white;
          }
          .userInfo img {
            width: 80px;
          }
          .timeInterval {
            background-color: purple;
            height: 30%;
            color: white;
            border-radius: 20px;
            padding: 30px;
            margin-top: -10px;
            z-index: -1;
            position: relative;
          }
        `}
      </style>
    </>
  );
}
