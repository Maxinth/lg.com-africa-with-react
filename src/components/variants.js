export const variantProps = {
  initial: "hidden",
  animate: "visible",
  hover: "hover",
};

export const IconVariant = {
  hover: {
    scale: 1.1,
    transition: {
      type: "tween",
      yoyo: Infinity,
    },
  },
};

export const tabSlideVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const tabSlideControls = {
  hidden: {
    x: "-20vw",
  },

  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      // delay: 1,
    },
  },
};

export const tabSlideControlsCircleVariant = (index) => {
  return {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.2,
        delay: (index + 1) / 10,
      },
    },
  };
};
