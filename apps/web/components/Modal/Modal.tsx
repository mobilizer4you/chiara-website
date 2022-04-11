import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Modal.module.scss";
import clsx from "clsx";
type Props = {
  isDialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  overLayClass?: string;
  bodyClass?: string;
};

const Modal = ({
  isDialogOpen,
  setDialogOpen,
  children,
  overLayClass,
  bodyClass,
}: Props) => {
  const MotionDialogOverlay = motion(DialogOverlay) as any;
  const MotionDialogContent = motion(DialogContent) as any;

  const handleDismiss = () => setDialogOpen(false);
  const DialogOverlayClass = clsx(
    {
      [styles.modal__overlay]: true,
    },
    [overLayClass && [overLayClass]],
    "modal-full-area"
  );

  return (
    <AnimatePresence>
      {isDialogOpen && (
        <MotionDialogOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onDismiss={handleDismiss}
          className={DialogOverlayClass}
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
            className={bodyClass}
          >
            {children}
          </MotionDialogContent>
        </MotionDialogOverlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
