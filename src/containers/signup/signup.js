import React from 'react';
import '../interior.css';
import Logo from '../../components/logo';

function Signup() {
  return (
    <div className='page-container'>
        <Logo />
        <div className='signup-cta'>
            <h1>Let's Get Started</h1>
            <h2>Follow the instructions below to set up Notify in your Thryv</h2>        
        </div>
        <div className='signup-container'>
        <h3>Set Up Instructions</h3>
            <div class="subscribe_form">
            <form id="thryv_email_check" onsubmit="return false">
                Thryv Account Email: <input id="thryvEmailField" type="text" name="thryv_email" /><div id="invalidEmailContent" class="hideItem">*Not valid email format</div><br /><br />
                Thryv Account Integration Token: <input id="endUserToken" type="text" name="end_user_token" /><br /><br />
                <input id="websiteField" type="hidden" name="website" />
                Choose your notifications<br /><br />
                <div className="check_boxes">
                <div className="check_box"><input id="notificationsClientsField" type="checkbox" name="notificationsClients" /><div class="form_label">Clients</div></div>
                <div className="check_box"><input id="notificationsAppointmentsField" type="checkbox" name="notificationsAppointments" /><div class="form_label">Appointments</div></div>
                <div className="check_box"><input id="notificationsPaymentsField" type="checkbox" name="notificationsPayments" /><div class="form_label">Payments</div></div><br /><br /><br /></div>
                <input className="btn" type="submit" value="Subscribe" onclick="return validatesubscribeForm()" />
            </form>
        </div>
        </div>
    </div>
  );
}

export default Signup;