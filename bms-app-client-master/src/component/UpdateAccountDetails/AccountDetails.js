import React from "react";
import classes from "./AccountDetails.module.css";

const AccountDetails = () => {
  return (
    <div className={classes.accountdtls}>
      <div className={classes.agggregation}>
        <p>Account Details</p>
      </div>

      <div className={classes.row}>
        <label htmlFor="accounttype">Account Type</label>
        <select id="accounttype" name="accounttype" required>
          <option value="savings" selected>Savings</option>
          <option value="current">Current</option>
        </select>

        <label htmlFor="branchname">Branch Name</label>
        <input type="text" id="branchname" value="Delhi" disabled />
      </div>

      <div className={classes.row}>
        <label htmlFor="bankname">Bank Name</label>
        <input type="text" id="bankname" value="Bank Managemengt Systsem" disabled />
        <div></div>
      </div>
      <div className={classes.agggregation}>
        <p>Reference Details</p>
      </div>
      <div className={classes.row}>
        <label htmlFor="refname">Account Holder Name<span className={classes.asterisk}>*</span></label>
        <input type="text" id="refname" required />

        <label htmlFor="refaccountnumber">Account number<span className={classes.asterisk}>*</span></label>
        <input type="number" id="refaccountnumber" required/>
      </div>

      <div className={classes.row}>
        <label htmlFor="refaddress">Address<span className={classes.asterisk}>*</span></label>
        <input type="text" id="refaddress" required/>

        <label htmlFor="refcontactnumber">Contact number<span className={classes.asterisk}>*</span></label>
        <input type="number" id="refcontactnumber" required/>
      </div>
    </div>
  );
};
export default AccountDetails;
