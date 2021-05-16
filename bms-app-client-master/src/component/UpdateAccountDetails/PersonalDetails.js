import React from "react";
import classes from "./PersonalDetails.module.css";

const PersonalDetails = () => {
  return (
    <div className={classes.personaldtls}>
      <div className={classes.agggregation}>
        <p>Personal Details</p>
      </div>
      <div className={classes.row}>
        <label htmlFor="gender">Gender<span className={classes.asterisk}>*</span></label>
        <select id="gender" name="gender" required>
        <option value="none" selected disabled hidden>
            Select an Option
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="dob">Date of birth<span className={classes.asterisk}>*</span></label>
        <input type="date" id="dob" required/>
      </div>
      <div className={classes.row}>
        <label htmlFor="mailid">Mail Id<span className={classes.asterisk}>*</span></label>
        <input type="mail" id="mailid" required />

        <label htmlFor="phnum">Contact Number<span className={classes.asterisk}>*</span></label>
        <input type="number" id="phnum" required/>
      </div>
      <div className={classes.row}>
        <label htmlFor="maritalstatus">Marital Status<span className={classes.asterisk}>*</span></label>
        <select id="maritalstatus" name="maritalstatus" required>
        <option value="none" selected disabled hidden>
            Select an Option
          </option>
          <option value="married">Married</option>
          <option value="single">
            Single
          </option>
        </select>

        <label htmlFor="address">Address<span className={classes.asterisk}>*</span></label>
        <input type="text" id="address" required/>
      </div>
      <div className={classes.row}>
        <label htmlFor="idprooftype">Identification proof type<span className={classes.asterisk}>*</span></label>
        <select id="idprooftype" name="idprooftype" required>
        <option value="none" selected disabled hidden>
            Select an Option
          </option>
          <option value="aadhar" >Aadhar</option>
          <option value="passport">Passport</option>
          <option value="voterid">Voter Id</option>
          <option value="license">License</option>
        </select>

        <label htmlFor="idnumber">Identification doc number<span className={classes.asterisk}>*</span></label>
        <input type="text" id="idnumber" required/>
      </div>

      <div className={classes.row}>
        <label htmlFor="guardiantype">Guardian Type<span className={classes.asterisk}>*</span></label>
        <select id="guardiantype" name="guardiantype" required>
        <option value="none" selected disabled hidden>
            Select an Option
          </option>
          <option value="father">Father</option>
          <option value="mother">Mother</option>
          <option value="spouse">Spouse</option>
        </select>

        <label htmlFor="guardianname">Guardian Name<span className={classes.asterisk}>*</span></label>
        <input type="text" id="guardianname" required/>
      </div>

      <div className={classes.row}>
        <label htmlFor="country">Country<span className={classes.asterisk}>*</span></label>
        <select id="country" name="country" required>
          <option value="none" selected disabled hidden>
            Select an Option
          </option>
          <option value="india">India</option>
          <option value="australia">Australia</option>
          <option value="germany">Germany</option>
        </select>

        <label htmlFor="state">State<span className={classes.asterisk}>*</span></label>
        <input type="text" id="state" required/>
      </div>

      <div className={classes.row}>
        <label htmlFor="citizenship">Citizenship<span className={classes.asterisk}>*</span></label>
        <input type="text" id="citizenship" required/>

        <label htmlFor="citizenshipstatus">Citizenship Status<span className={classes.asterisk}>*</span></label>
        <input type="text" id="citizenshipstatus" required/>
      </div>

    </div>
  );
};
export default PersonalDetails;
