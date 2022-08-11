export function Activities() {
  return (
    <>
      <div className="activity">
        <div className="activityLogo">
          <img src="icon-exercise.svg" />
        </div>
        <div className="activityInfo">
          <div className="activityTitle">
            <p>Work</p>
            <p>...</p>
          </div>
          <h2>32hrs</h2>
          <h4>Last Week - 36hrs</h4>
        </div>
      </div>

      <style jsx>
        {`

        h2{
          40px;
        }

          .activity {
            display: flex;
            flex-direction: column;
          }

          .activityLogo {
            background-color: green;
            background-size: cover;
            height: 80px;
            position: relative;
            border-radius: 10px;
            margin-bottom: -30px;
            z-index: -1;
          }
          
          img{
            position: absolute;
            right:10px;
            top:0;
          }

          .activityInfo {
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: white;
            background-color: purple;
            border-radius: 10px;
          }

          .activityTitle {
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}
