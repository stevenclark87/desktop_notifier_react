import React from 'react';
import '../interior.css';
import Logo from '../../components/logo';

function Preferences() {
  return (
    <div className='page-container'>
        <Logo />
        <div className='preferences-cta'>
            <h1>Preferences</h1>
            <h2>Change the notifications you receive here</h2>        
        </div>
        <div className='preferences-container'>
        <h3>I would like to receive:</h3>
            <div class="preferences_form">
            <form id="thryv_email_check" onsubmit="return false">
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

export default Preferences;