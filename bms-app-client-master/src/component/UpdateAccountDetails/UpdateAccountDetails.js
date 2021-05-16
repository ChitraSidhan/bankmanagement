import React from "react";
import classes from "./UpdateAccountDetails.module.css";
import NavigationBar from "../UI/NavigationBar";
import PersonalDetails from './PersonalDetails';
import AccountDetails from "./AccountDetails";

const UpdateAccountDetails = (props) => {
  return (
    <div className={classes.updateform}>
      <NavigationBar />
      <form className={classes.formcontrol}>
        <div className={classes.row}>
          <label htmlFor="custid">Customer Id </label>
          <input type="text" id="custid" value="AUYB876" disabled />

          <label htmlFor="name">Account holder name</label>
          <input type="text" id="name" value="John Edward" disabled />
        </div>
        <div className={classes.row}>
          <label htmlFor="accountnum">Account number</label>
          <input type="number" id="accountnum" value="910000288790001"  disabled/>

          <label htmlFor="regdate">Registration Date</label>
          <input type="text" id="regdate" value="20-02-2021" disabled />
        </div>
        <PersonalDetails/>
        <AccountDetails/>

        <div className={classes.row}>
          <div></div>
          <div>
        <input type="button" value="Update" />
        </div>
          </div>
      </form>
    </div>
  );
};

export default UpdateAccountDetails;
