import router from "next/router";
import React from "react";
import LogoutIcon from "../../public/svg/logoutModal.svg";
import { clientLogout } from "../../utils/firebase";
import { ROUTES } from "../../utils/utils";
import VisuallyHidden from "../VisuallyHidden";
type Props = {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};
const LogoutModal = ({ setShowDialog }: Props) => {
  const handleLogout = () => {
    clientLogout();
    router.push(ROUTES.HOME);
  };
  const closeDialog = () => setShowDialog(false);
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-15%,-50%)",
        width: "100%",
      }}
    >
      <div className="modal-box">
        <button className="close" type="button" onClick={closeDialog}>
          <VisuallyHidden>Close</VisuallyHidden>
          <LogoutIcon />
        </button>
        <h4>You&apos;re about to sign out of your account. Are you sure?</h4>
        <div className="action-button-modal">
          <button type="button" className="no" onClick={closeDialog}>
            No
          </button>
          <button type="button" className="yes" onClick={handleLogout}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
