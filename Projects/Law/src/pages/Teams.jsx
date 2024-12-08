import { motion  } from "framer-motion";
import { MeetTheTeam } from "../components/ForTeam/MeetTheTeam";

export default function Home() {

  return (
    <motion.main
      className="min-h-screen mt-32 bg-gradient-to-b from-gray-100 to-white"
      style={{ }}
    >
      <MeetTheTeam />
    </motion.main>
  );
}
