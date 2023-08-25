import { motion } from "framer-motion";

export default function Intern() {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.svg
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1013.9 560.2"
        style={{
          width: "100%",
          height: "100%",
          fill: "none",
          stroke: "white",
          strokeWidth: 1,
        }}
      >
        <motion.g>
          <motion.path
            variants={pathVariants}
						d="M0,445.8h248.4c0,0-30.6-125.6-27.6-136.9s221.6-11.2,233.9,0c12.3,11.2,24.5,188.9,38.8,194
						c14.3,5.1,113.4-40.9,111.3-48c0,0-111-14.9-117.4-5.1c-6.5,9.8,2.7,14.3,12.1,14.3s44.1-6.1,43.1,2c-1,8.2-65.4,37.2-65.4,37.2
						s-210.4-6.5-215.5-14.7c-5.1-8.2-35.7-171.6-35.7-171.6s207.3-10.2,216.5-2c9.2,8.2,20.4,119.5,25.5,122.6c5.1,3.1,345.2,1,345.2,1
						s-11.2,8.2-31.7,8.2s-57.2-8.2-59.2-16.3c-2-8.2,6.1-155.9,6.1-155.9l-26.6-3l-4.1-27c0,0,40.9-9.2,40.9-5.1
						c0,4.1-26.6,8.2-26.6,8.2L674,167.5c-0.5-1-2-0.8-2.1,0.4c-1.9,17.6-9.3,88.5-5.7,92.1c4.1,4.1,43.9-14.3,43.9-5.1
						s-25.5,175.7-30.6,174.6s-26.6-55.1-28.6-48c-2,7.1,12.3,51.1,4.1,40.9s-19.4-20.4-21.4-12.3c-2,8.2,3.1,31.7-4.1,23.5
						c-7.1-8.2-3.1-161.4-5.1-152.2c-2,9.2-47,106.2-50,94s-21.4-59.2-21.4-47c0,12.3,9.2,33.7,0,24.5c-9.2-9.2-38.8-128.7-38.8-128.7
						l3.1-19.4c-1.6-6.7-5.8-32.9-7.6-43.9c-0.2-1.3-1.4-2.3-2.8-2.2c-1.3,0.1-3.4-0.1-6.6-0.9c-8.5-2-4.7,29.6-0.5,37.8
						s-14.1,5.1-21.3-7.1c-7.1-12.3-14.3-59.2-18.4-56.2c-4.1,3.1-4.1,32.7-3.1,36.8c1,4.1-9.2-46-11.2-41.9c-2,4.1-1,37.8,0,41.9
						c1,4.1-9.2-42.9-10.2-34.7s-4.1,29.6,0,36.8c4.1,7.1-16.3-25.5-14.3-14.3c2,11.2,17.4,50,24.5,55.1c7.1,5.1,24.5,8.2,33.7,22.5
						c9.2,14.3,10.2,121.5,15.3,135.8c5.1,14.3,12.3,48,32.7,50c20.4,2,38.8-2,39.8-14.3c1-12.3-8.2-31.7-10.2-30.6s11.2,32.7,21.4,20.4
						s6.1-35.7-2-49c-8.2-13.3-32.7-22.3-29.6-31.6s41.2,2.7,48,10.1c6.8,7.5,7.1,47.4,0,40.9c-7.1-6.6-30.6-56.2-36.8-60.3
						c-6.1-4.1-19.4-3.1-17.4-16.3c2-13.3,35.7-74.6,48-76.6c12.3-2,24.5,35.7,17.4,38.8c-7.1,3.1-25.5-50-22.5-56.2
						c3.1-6.1,99.1-27.6,105.2-20.4c6.1,7.1,19.4,18.4,33.7,14.3c14.3-4.1,32.7-25.5,37.8-35.7s3.1-54.1,3.1-58.2S743.7,72,740.7,60.8
						s-4.1-23.5-9.2-19.4s-71.5,8.2-76.6,12.3s-8.2,18.4-11.2,12.3c-3.1-6.1-6.1-19.4,5.1-31.7C660,22,702.9-0.5,718.2,0.5
						s19.4,11.2,20.4,15.3c1,4.1,5.1-5.1,11.2-5.1c6.1,0,16.3,2,22.5,12.3c6.1,10.2,12.3,33.7,12.3,40.9s3.1,24.5-4.1,19.4
						c-6.2-3.7-18.9-43.3-22.5-48c-3.1-3.1-60.3-6.1-69.4-4.1c-9.2,2-39.8,12.3-39.8,44.9s41.4,125.3,52.6,123.3s42.4-8.9,50.6-19.1
						c8.2-10.2,11.2-49,4.1-46s-15.3,22.5-17.4,16.3c-1.4-4.3-0.9-15.5-0.4-21.9c0.2-3,2-5.6,4.7-7c2.6-1.3,5.8-2.7,8-2.7
						c4.1,0,25.5,11.2,25.5,11.2l-30.9-18.7c-0.8-0.6-2.3-2-3.4-3.4c-1-1.3,0-3.3,1.7-3.2l11.2,1l22.4,1.9l-24.5-6.1
						c0,0,7.5-31.1,13.8-37.8C773,57.2,806,77,806.4,80c0.3,3.1-2.6,31-6.5,33.4c-3.9,2.4-28.3-42.5-31.6-40.5
						c-5.3,3.3,6.4,36.2,11.1,37.9c4.8,1.7,18.4,6.1,19.4,10.7c15.3,91.9,12.2,63.5,67.4,134.3c5.6,9.7,39.8,33.7,46.5,37.8
						c6.6,4.1,26,15.3,29.6,24.5c3.6,9.2,10.2,37.8,2.6,44.9c-7.7,7.1-19.4,16.9-27.1,18.9c-7.7,2-16.3,9.2-24,3.6
						c-7.7-5.6-71-75.6-77.1-87.3c-6.1-11.7-41.9-91.4-42.9-95.5c-1-4.1,20.3,20.1,18.9,30.1c-1.5,10.1-1,28.6-5.6,25
						s-32.2-24.5-40.9-16.3s-22,6.9-2.6,30s75.6,62.4,67.4,63.4s-27.6-5.1-31.1,10.2s-5.6,19.9,6.6,23c12.3,3.1,57.2,11.2,46.5,17.9
						c-10.7,6.6-47,14.3-32.2,23c10.4,6,31,14.3,42.4,17.6c38.4-87.6,2.2-30.8,52.5-35.5c26.2-2,48.3-1,52.1-14
						c3.7-12.9-7.8-53.8-11.6-57.2c-3.7-3.4-34.4-48.7-42.6-58.9c-8.2-10.2-20.4-16.3-26.2-22.8c-5.8-6.5-8.5-8.2-8.5-8.2
						s-40.2-47-37.4-47.7c2.7-0.7,52.8,22.5,55.1,25.9s1.4,13.6-2.7,18.4c-4.1,4.8-1.4-10.2,0-13.3s7.1-6.1,9.2-5.1s48.3,82.4,49,87.1
						s-8.9,15.7-11.9,15.7s-6.1-5.1-1.7-5.4c4.4-0.3,23.8-3.7,28.3,3.7c4.4,7.5,13.3,51.7,12.9,55.8c-0.3,4.1-6.5,23.8-14.3,27.2
						c-7.8,3.4-52.1,9.9-59.9,6.5c-7.8-3.4-11.9-4.8-18.7-13.3c-3.4-4.2-2.6,57.1-4.6,53.1c-1.4,2-10.1,2.4-17.6,2.1
						c-7.4,0.1-15,0.1-17.7,1.8c-5.6,3.6-80.7,26-80.7,26s-6.1,27.3-7.1,34.6c-1,7.3-10.2,15.4-1.5,21.1s19.9,18.4,21.4,0
						c1.5-18.4,3.1-45.4-2-46c-5.1-0.5-24.5,0-26,9.7c-1.5,9.7,5.6,66.9,0,68.4c-5.6,1.5-42.4,3.1-46,3.1s-12.3,0-16.9-13.3
						c-4.6-13.3-8.7-79.7-3.6-85.3c5.1-5.6,31.7-6.1,42.9-3.6c11.2,2.6,12.3,14.3,5.1,14.3s-23.5,1-32.2-2c-8.7-3.1-28.6-9.7-19.9-16.3
						c8.7-6.6,59.2-5.1,69.4,1c10.2,6.1,4.1,13.3,7.7,14.3s23,12.8,63.3,4.1c40.3-8.7,39.8-13.8,40.9-19.4c1-5.6,18.4-11.7,28.6-12.3
						s143.5,2,143.5,2"
          />
        </motion.g>
      </motion.svg>
    </>
  );
}