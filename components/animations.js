import { forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimateDiv = forwardRef((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <motion.div className={className} ref={ref} {...rest}>
      {children}
    </motion.div>
  );
});

const AnimateList = ({ list, ...rest }) => {
  return (
    <motion.ol {...rest.list}>
      {list.map((data, idx) => (
        <motion.li {...rest.listItems} key={idx}>
          {data}
        </motion.li>
      ))}
    </motion.ol>
  );
};

const Presence = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

const ScrollIntoView = forwardRef((props, ref) => {
  //if current ref is 30px or whatever in then apply style to bring to top
  const { children, className, ...rest } = props;
  return (
    <div className={className} ref={ref} {...rest}>
      {children}
    </div>
  );
});

AnimateDiv.displayName = "AnimateDiv";
ScrollIntoView.displayName = "ScrollIntoView";
export { AnimateDiv, Presence, ScrollIntoView, AnimateList };
