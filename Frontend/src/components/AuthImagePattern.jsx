import { motion } from "framer-motion";
const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden min-[1050px]:block min-h-[550px]:block">
     

    <motion.h1 
            className="text-4xl font-bold mt-12 p-10 text-center text-gray-100 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to ChatterMsg – Where Conversations Bridge Cultures
          </motion.h1>

    <motion.p 
            className="text-gray-200 mt-4 p-10 text-lg text-center max-w-3xl px-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            ChatterMsg is a dynamic chat platform designed to connect individuals who share a deep appreciation for vibrant culture, traditions, and conversations. Whether you're discussing <span className="text-blue-400 font-bold">Technology</span>, <span className="text-green-400 font-bold">Social or Political Issues</span>, <span className="text-yellow-400 font-bold">Entertainment</span>, regional festivals, cuisine, or everyday life, our platform fosters meaningful interactions in a vibrant and inclusive space.
          </motion.p>

          <motion.p 
            className="text-white mt-6 text-lg text-center max-w-3xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Join ChatterMsg and catch up with your messages!
          </motion.p>

    </div>
  );
};

export default AuthImagePattern;