import { motion } from "framer-motion";

export const ToggleButton = ( { setOpen } ) => {
  return ( <button onClick={ () => setOpen ( ( prev ) => ! prev ) }>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <motion.path
        d="M 3 2.5 L 20 2.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <motion.path
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <motion.path
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button> )
}