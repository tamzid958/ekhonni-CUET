import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Header from '../components/header';
import dynamic from "next/dynamic";
import { baseUrl } from '../utils/baseUrl';

 function Profile() {
  const [storedUser, setStoredUser] = useState({});
  const [updatingMobileNumber, setUpdatingMobileNumber] = useState('');
  const [updatingAddress, setUpdatingAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const storedUserData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
    let user_id = storedUserData.id;
    console.log(storedUserData);
    setStoredUser(storedUserData);

    axios
      .get(`${baseUrl}/users/${user_id}`)
      .then((response) => {
        setStoredUser(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      });
  }, []);


  const handleMobileNumberChange = (event) => {
    setUpdatingMobileNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setUpdatingAddress(event.target.value);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    let user_id = storedUser._links.user.href.split('/')[storedUser._links.user.href.split('/').length - 1];

    console.log(storedUser);
    console.log(user_id);
    const apiUrl = `${baseUrl}/users/${user_id}`;

    const updatedUserData = {
      phoneNumber: updatingMobileNumber,
      address: updatingAddress,
    };

    axios
      .patch(apiUrl, updatedUserData)
      .then((response) => {
        setStoredUser(response.data);

        localStorage.setItem('user', JSON.stringify(response.data));

        setUpdatingMobileNumber('');
        setUpdatingAddress('');

        alert('Profile updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile. Please try again later.');
      });
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row justify-content-center align-items-center vh-100">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
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
                      <input type="text" className="form-control" placeholder="First Name" value={storedUser.name} readOnly />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        value={storedUser.phoneNumber}
                        readOnly
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                        value={storedUser.address}
                        readOnly
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">NID</label>
                      <input type="text" className="form-control" placeholder="Enter District" value={storedUser.nid} readOnly />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Update Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        value={updatingMobileNumber}
                        onChange={handleMobileNumberChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Update Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                        value={updatingAddress}
                        onChange={handleAddressChange}
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <button
                      className="btn btn-primary profile-button"
                      type="button"
                      onClick={(e)=>handleUpdateProfile(e)}
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default dynamic (() => Promise.resolve(Profile), {ssr: false})
