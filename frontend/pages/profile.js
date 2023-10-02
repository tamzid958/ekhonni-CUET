import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="Profile Image"
              />
              <span className="font-weight-bold">Rana</span>
              <span className="text-black-50">rana@mail.com</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input type="text" className="form-control" placeholder="First Name" value=""/>
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input type="text" className="form-control" value="" placeholder="Surname"/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input type="text" className="form-control" placeholder="Enter Phone Number" value=""/>
                </div>
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input type="text" className="form-control" placeholder="Enter Address" value=""/>
                </div>
              
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input type="text" className="form-control" placeholder="Enter Postcode" value=""/>
                </div>
                <div className="col-md-12">
                  <label className="labels">District</label>
                  <input type="text" className="form-control" placeholder="Enter District" value=""/>
                </div>
               
               
              
              </div>
              
              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="button">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
