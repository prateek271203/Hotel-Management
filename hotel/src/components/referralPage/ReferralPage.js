import React, { useRef } from 'react';
import './ReferralPage.css';

const ReferralPage = () => {
  const referralLink = 'https://yourwebsite.com/referral?ref=your_unique_referral_code';

  const handleCopyReferralLink = () => {
    const referralLinkInput = referralLinkRef.current;

    if (referralLinkInput) {
      referralLinkInput.select();
      document.execCommand('copy');
      alert('Referral link copied to clipboard!');
    }
  };

  const handleShareWhatsApp = () => {
    const message = encodeURIComponent(`Check out this referral link: ${referralLink}`);
    window.open(`https://wa.me/?text=${message}`);
  };

  const handleShareTextMessage = () => {
    const message = encodeURIComponent(`Check out this referral link: ${referralLink}`);
    window.open(`sms:?body=${message}`);
  };

  const handleShareInstagram = () => {
    const message = encodeURIComponent(`Check out this referral link: ${referralLink}`);
    window.open(`https://www.instagram.com/direct/new/?message=${message}`);
  };

  const referralLinkRef = useRef(null);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Refer and Earn</h1>
      <p className="text-center">Invite your friends and earn rewards!</p>

      <div className="card mx-auto mb-4">
        <div className="card-body">
          <h5 className="card-title text-center">Your Referral Link</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={referralLink}
              readOnly
              ref={referralLinkRef}
            />
            <div className="input-group-append">
              <button className="ctn ctn-sm" type="button" onClick={handleCopyReferralLink}>
                Copy Referral Link
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2>Share Your Referral Link</h2>
        <div className="d-flex justify-content-center">
          <button className="ctn ctn-sm mx-2" type="button" onClick={handleShareWhatsApp}>
            <i className="fab fa-whatsapp"></i>
          </button>
          <button className="ctn ctn-sm mx-2" type="button" onClick={handleShareTextMessage}>
            <i className="fas fa-sms"></i>
          </button>
          <button className="ctn ctn-sm mx-2" type="button" onClick={handleShareInstagram}>
            <i className="fab fa-instagram"></i>
          </button>
        </div>
      </div>

      <div className="text-center mt-4">
        <h2>Referral Stats</h2>
        <p>Total Referrals: 10</p>
        <p>Total Earnings: $100</p>
      </div>
    </div>
  );
};

export default ReferralPage;
