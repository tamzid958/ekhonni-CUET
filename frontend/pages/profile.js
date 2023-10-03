import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Profile() {
  const storedUserJSON = localStorage.getItem('user');
  const storedUser = JSON.parse(storedUserJSON);
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
              <span className="font-weight-bold">{storedUser.name}</span>
              <span className="text-black-50">{storedUser.email}</span>
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
                  <input type="text" className="form-control" placeholder="First Name" value={storedUser.name} />
                </div>

              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input type="text" className="form-control" placeholder="Enter Phone Number" value={storedUser.phoneNumber} />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input type="text" className="form-control" placeholder="Enter Address" value={storedUser.address} />
                </div>

                <div className="col-md-12">
                  <label className="labels">NID</label>
                  <input type="text" className="form-control" placeholder="Enter District" value={storedUser.nid} />
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
