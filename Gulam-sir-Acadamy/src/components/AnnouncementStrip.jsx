import "./AnnouncementStrip.css";

const AnnouncementStrip = () => {
  return (
    <div className="announcement-wrapper">
      <div className="announcement-track">

        <div className="announcement-strip">
          <span className="announcement-item admission">
            🎓 <strong>Admission Open</strong> – Limited Seats Available
          </span>
          <span className="announcement-item scholarship">
            🏆 <strong>Get Scholarship Upto 90%*</strong>
          </span>
          <span className="announcement-item scholarship">
           🏆 <strong>Get Scholarship Upto 90%*</strong>
          </span>
        </div>
  {/* DUPLICATE FOR INFINITE LOOP */}
        <div className="announcement-strip">
          <span className="announcement-item admission">
            🎓 <strong>Admission Open</strong> – Limited Seats Available
          </span>
          <span className="announcement-item scholarship">
            🏆 <strong>Get Scholarship Upto 90%*</strong>
          </span>
          <span className="announcement-item scholarship">
           🏆 <strong>Get Scholarship Upto 90%*</strong>
          </span>
        </div>

      
 
      </div>
    </div>
  );
};

export default AnnouncementStrip;
