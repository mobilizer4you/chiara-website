import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Modal.module.scss";
type Props = {
  isDialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal = ({ isDialogOpen, setDialogOpen, children }: Props) => {
  const MotionDialogOverlay = motion(DialogOverlay) as any;
  const MotionDialogContent = motion(DialogContent) as any;

  const handleDismiss = () => setDialogOpen(false);

  return (
    <AnimatePresence>
      {isDialogOpen && (
        <MotionDialogOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onDismiss={handleDismiss}
          className={`${styles.modal__overlay} modal-full-area`}
        >
          <MotionDialogContent
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ min: 0, max: 100 }}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            {children}
          </MotionDialogContent>
        </MotionDialogOverlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
