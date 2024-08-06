"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { useState } from "react";

const ANIMATION_DELAY = 0.5;

const InfoCard = ({
  tintColor = "#000000",
  title,
  description = "",
  detailContent = "",
  children,
  ...props
}: {
  tintColor?: string;
  title: string;
  description?: string;
  detailContent?: string;
} & HTMLMotionProps<"div">) => {
  const [showDetail, setShowDetail] = useState(false);
  const hasDetail = detailContent.length > 0;

  const animationVariants = {
    main: { color: tintColor, transition: { delay: ANIMATION_DELAY } },
    detail: { color: "rgb(255,255,255)" },
  };

  return (
    <motion.div
      className="relative h-[800px] bg-white rounded-3xl px-8 pt-8 overflow-hidden flex flex-col gap-2"
      initial={false}
      animate={showDetail ? "detail" : "main"}
      {...props}
    >
      <motion.h2
        className="relative text-xl font-medium z-50"
        variants={animationVariants}
      >
        {title}
      </motion.h2>
      <p className="text-lg font-medium">{description}</p>
      <>{children}</>
      {hasDetail && (
        <ToggleButton
          tintColor={tintColor}
          onClick={() => setShowDetail(!showDetail)}
        />
      )}
      <AnimatePresence>
        {showDetail && (
          <DetailContainer tintColor={tintColor} content={detailContent} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DetailContainer = ({
  tintColor,
  content,
}: {
  tintColor: string;
  content: string;
}) => {
  const animationVariants = {
    container: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { delay: ANIMATION_DELAY } },
    },
    content: {
      initial: { y: -100, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: { delay: ANIMATION_DELAY, bounce: 0 },
      },
      exit: { y: -100, opacity: 0 },
    },
  };

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center p-8"
      style={{ backgroundColor: tintColor }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants["container"]}
    >
      <motion.p
        className="text-white font-medium text-lg max-w-[80ch] mx-auto"
        variants={animationVariants["content"]}
        transition={{ bounce: 0 }}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

const ToggleButton = ({
  tintColor,
  ...props
}: { tintColor: string } & HTMLMotionProps<"button">) => {
  const animationVariants = {
    main: {
      rotate: 0,
      backgroundColor: "#000000",
      stroke: "#ffffff",
    },
    detail: {
      rotate: 45,
      backgroundColor: "#ffffff",
      stroke: tintColor,
    },
  };

  return (
    <motion.button
      className="absolute right-8 bottom-8 size-10 rounded-full cursor-pointer flex justify-center items-center z-50"
      variants={animationVariants}
      transition={{
        bounce: 0,
      }}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-[3]">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </motion.button>
  );
};

export default InfoCard;
