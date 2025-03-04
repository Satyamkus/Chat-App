import { FaLinkedin, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-1000 to-gray-800 text-white flex flex-col items-center p-6">
      <motion.h1 
        className="text-4xl font-bold mt-10 text-center text-gray-300 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to ChatterMsg – Where Conversations Bridge Cultures
      </motion.h1>
      
      <motion.p 
        className="text-gray-300 mt-4 text-lg text-center max-w-3xl px-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        ChatterMsg is a dynamic chat platform designed to connect individuals who share a deep appreciation for vibrant culture, traditions, and conversations. Whether you're discussing <span className="text-blue-400 font-bold">Technology</span>, <span className="text-green-400 font-bold">Social or Political Issues</span>, <span className="text-yellow-400 font-bold">Entertainment</span>, regional festivals, cuisine, or everyday life, our platform fosters meaningful interactions in a vibrant and inclusive space.
      </motion.p>

      <motion.div 
        className="bg-gray-700 mt-10 p-6 rounded-2xl shadow-lg max-w-2xl w-full text-center transform transition duration-500 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <img
          src="https://res.cloudinary.com/dn0nhuymn/image/upload/v1739536869/mdz2zbydkqziuwpoatoo.png"
          alt="Satyam"
          className="w-40 h-40 mx-auto rounded-full border-4 border-gray-600 shadow-md"
        />
        <h2 className="text-2xl font-semibold mt-4 text-gray-100">Satyam Kushwaha</h2>
        <p className="text-gray-300">Software Developer & Admin, ChatterMsg</p>
        <p className="mt-3 text-gray-400 italic">
          "Our vision is to make conversations seamless and meaningful, connecting people across the world with ease."
        </p>
        
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/satyam-kus912/"
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition text-white font-medium shadow-md"
          >
            <FaLinkedin size={20} /> Connect on LinkedIn
          </a>
        </div>
      </motion.div>
      
      <motion.p 
        className="text-gray-300 mt-4 text-lg text-center max-w-3xl px-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        With support of diverse communities, ChatterMsg ensures seamless communication, helping you build friendships and networks worldwide. No matter where you are, experience the warmth of authentic conversations at your fingertips.
      </motion.p>
      
      <motion.p 
        className="text-white mt-6 text-lg text-center max-w-3xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Join ChatterMsg today and start meaningful conversations that feel like home!
      </motion.p>

      
    </div>
  );
};

export default AboutUsPage;
