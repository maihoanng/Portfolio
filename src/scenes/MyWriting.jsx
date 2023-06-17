import { motion } from "framer-motion";
import React, { useState } from "react";

const MyWriting = () => {
  return (
    <section id="writing" className="pt-24 pb-24">
      <motion.div
        className="md:w-1/3 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* Page Title (Projects) */}
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5 text-deep-blue">
            MY <span className="text-red">WRITING</span>
          </p>
        </div>
        <p className="mt-10 mb-7 text-lg text-center text-deep-blue">
          {" "}
          Coming soon{" "}
          <a href="https://maihoang.substack.com/" className="text-blue">
            here!
          </a>{" "}
        </p>
      </motion.div>
    </section>
  );
};

export default MyWriting;
