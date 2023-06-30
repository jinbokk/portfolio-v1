import { motion } from "framer-motion";

export default function Salesman() {
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
        viewBox="0 0 4469.6 2384.1"
        style={{
          width: "100%",
          height: "100%",
          fill: "none",
          stroke: "white",
          strokeWidth: 3,

        }}
      >
        <motion.g>
          <motion.path
            variants={pathVariants}
            d="M0,2167.6c0,0,519.7-1.5,803.7-1.5c0,0,9.8-138.7,95.7-101.8c76.2,32.6,219,18,250.3,14.3
						c3.5-0.4,6.1-3.4,6.1-7v-46.9c0-4.3-3.9-7.6-8.1-6.9c-23.2,3.7-90.2,12.7-124.5-1.4c-41.7-17.2-6.1,72.4-2.5,74.9
						c3.7,2.4-38.6-1104.3,75.7-1294.8c0.6-0.9,1.2-1.7,2.1-2.2c21.2-14,292.4-192.5,313.6-187.7c22.1,4.9,84.6,142.3,157.1,98.2
						s112.9-120.2,121.5-116.6c8.6,3.7,316.6,214.8,343.6,267.5c25.7,50.2,9.7,1063.7,8.1,1162.3c-0.1,4.1-3.7,7.3-7.8,6.8l-148.8-16.9
						c-3.2-0.3-5.8-3-6.1-6.2c-1.9-18-5.9-73.5,17.2-73.5c27.6,0,158.3,35,138-1.9c-17.1-31.1-102.4-22.8-128.6-19.5
						c-4.1,0.6-7.7-2.6-7.9-6.7c-2.8-89.8-27.3-928.8,5.8-956.7c35-29.5-11,1008.6-75.5,1062s-598.2,46-636.8,20.2
						s135.6-1293.9,91.4-1290.2c-44.2,3.7-100.6,420.9,9.8,527.6c110.4,106.7,198.8,203.7,281,87.1c82.2-116.6,153.4-587.8,179.2-630.7
						s66.2-66.2,28.2,2.5c-38,68.7-128.9,381.6-200,436.8c-71.1,55.3-168.1,95.6-214.7,31.8c-46.6-63.8,33.1-536.2,34.4-541.1
						c1.2-4.9,159.5-127.6,162-158.3c2.5-30.7,50.3-56.4-8.6-44.2c-58.9,12.3-128.9,70-133.8,109.2c-4.9,39.3,3.7,123.9,20.8,128.9
						c17.2,4.9,119-25.8,133.8-50.3c14.8-24.5,4.9-71.2-6.1-90.8c-11-19.7-61.3-66.2-57.7-36.8c3.7,29.5,17.2,71.2,23.3,72.4
						c5.7,1.1-37.3,40.4-44.4,46.9c-0.7,0.6-1.2,1.4-1.6,2.1c-5.6,11.8-48.2,104.2-44.8,155.8c3.7,55.2-22.1,296.9,6.1,300.6
						c28.2,3.7,109.2-146,117.8-184.1c8.6-38,66.2-278.5,61.3-284.6c-4.3-5.3-47.3-30.1-58.6-36.5c-1.7-1-3-2.7-3.4-4.6
						c-3.4-16.3-17.2-90.9,17.9-76.6c39.3,15.9,187.5,225.7,233.1,218.4c45.7-7.3,186.5-84.6,217.2-84.6c30.7,0,30.7-8.6,84.6,23.3
						c54,31.9,108.9,43,175.2,39.3c58.3-3.2,270.7-79.2,320.7-97.3c4.9-1.8,6.2-8.1,2.3-11.7c-21.5-20-79.2-71.4-102.2-67.7
						c-28.6,4.6-80.1,74.6-126.1,92c-46,17.5-157.4,73.6-209.8,1.9c-52.4-71.7-109.5,15.7-100.3,33.1c7.3,13.9,60.9,35.5,82.3,43.7
						c4.3,1.7,9.1-1.4,9.5-6c2.1-30.4,8.1-126.7,1.2-154.5c-8.3-33.1-122.4-220.8-78.2-270.6c44.2-49.7,201.5-106.7,255.8-54.3
						s62.6,98.4,80.1,92c17.5-6.4,28.6-125.1,27.6-143.6c-0.9-18.4-225.5-113.2-254.9-93.9s-45.1,126.1-44.2,128.9
						c0.9,2.8-45.1-0.9-24.8-50.6c20.2-49.7-7.4,59.8-23,73.6c-15.6,13.8-7.4,175.8-30.4,151.8c-23-23.9-81-91.1-20.2-183.2
						c60.7-92,127.9-221.8,278-159.2c99.6,41.5,113.6,68.1,111.8,81.2c-0.6,4,2.3,7.6,6.4,7.9c10.5,0.7,24.8,8.1,31,40.7
						c10.1,54.3-78.2,309.2-83.8,326.7c-5.5,17.5-22.1-194.2-4.6-176.7c17.5,17.5,31.3,46.9,20.2,76.4c-11,29.5-30.4,117.8-75.5,149.1
						c-45.1,31.3-135.3,19.3-144.5,11c-9.2-8.3,185-11,197.9-32.2c12.9-21.2,32.2,56.2,69,70.9c36.8,14.7,271.5,17.5,308.3,57.9
						c36.8,40.5,171.2,235.6,203.4,218.1c28.3-15.3,195.4-137.6,235.9-167.4c4.1-3,3.7-9.3-0.8-11.7c-46.6-25.3-247-133.8-267.3-141.1
						c-23-8.3-154.6,119.6-183.2,150c-28.6,30.4-283.5,221.8-292.6,223.7c-9.2,1.9-140.8,1300.4-113.2,1311.4
						c27.6,11,123.3,46,132.5,64.4c7.4,14.8,1.7,62.9-0.8,81.2c-0.6,3.9-4.2,6.6-8.1,5.9c-30.4-5.3-147.7-27.2-136.5-44.8
						c12.9-20.2,1.9-125.1,33.1-119.6c31.3,5.5,104.9,68.1,127,62.6c22.1-5.5,173-1207.4,110.4-1266.3c-62.6-58.9-40.5,636.8,9.2,820.9
						c49.7,184.1,33.1,408.6,86.5,434.3c53.4,25.8,681-29.5,703.1,14.7c17.9,35.8,6.8,72.8,1.9,85.5c-1,2.8-3.7,4.6-6.7,4.6l-652.4-16.3
						c-3.9-0.1-7-3.4-6.8-7.4c6.8-112.9,90.4-1515,62.2-1562.8c-29.5-49.7-22.1-123.3-73.6-132.5c-47.7-8.6-310.3,47.7-348.7,56
						c-2.8,0.6-5,2.9-5.4,5.7c-8.4,54.7-86.9,566-72.9,569.5c14.7,3.7,47.9-42.4,36.8-47.9c-10.3-5.1,8-433.2,10.7-495.1
						c0.2-4-3.1-7.4-7.1-7.2c-36.8,0.7-197.9,4.1-191.4,9c7.4,5.5-84,415.9-46.6,408.6c37.4-7.4,39.3-404.9,24.6-419.7
						c-14.7-14.7-73.6-114.1-156.5-55.2s0,165.6,14.7,206.1c14.7,40.5,88.4,960.7,97.5,962.6c9.2,1.9,479.9,112.4,515.3,99.4
						c35.5-13,20.2,411.9,16.6,428.8c-3.3,15.5-161.4,16.8-190.5,17c-2.8,0-5.3-1.7-6.4-4.1c-20.2-45.9-200.3-454.5-202.5-482.2
						c-2.3-29.3,47.9-3.7,35,58.9c-12.9,62.6-70,427.4-77.3,427.4c-7.4,0-228.2,14.3-230.1-15.2c-1.9-29.5,26.1-524.5,58.9-550.3
						c31.1-24.5,541.1,83.9,592.2,94.8c2.6,0.6,4.6,2.4,5.2,4.9c10.2,36.2,86.3,304,114.8,310.7c30.6,7.1,601.8,22.1,607.4-66.2
						c5.5-88.4-246.6-1316-202.5-1356.4c36.7-33.7,92.1-86.4,109.8-103.3c3-2.8,2.9-7.6-0.2-10.3c-19.6-17-81.8-74-77.6-109.1
						c4.9-41.7-71.2-70-112.9-71.2c-41.7-1.2-110.4,23.3-103.1,67.5c7.4,44.2,56.4-25.8,63.8-35.6c7.4-9.8-52.8,39.3-39.3,72.4
						c13.5,33.1,50.3,77.3,55.2,49.1c4.9-28.2,41.2-159.6,23.3-122.7c-17.9,36.8-46.6,144.8-14.7,149.7c31.9,4.9,70.4-135.8,52.8-114.1
						c-17.6,21.6-45.4,114.1-20.8,119c24.6,4.9,55.4-92.9,81-85.9c25.6,7-29.5,106.7-47.9,125.1c-18.4,18.4-134.9,4.9-162-12.3
						c-27-17.2-94.5-57.7-74.9-74.9c19.7-17.2,14.7-147.2,38-170.5c23.3-23.3,38-139.9-9.8-112.9c-0.5,0.3-1,0.6-1.4,0.8
						c-7.5,4.3-2.1,15.6,5.9,12.6c8.5-3.2,15.2-3.2,17.7,2.5c9.5,21.9,44.2,51.5,30.7,78.5c-13.5,27-115.3,277.3-98.2,322.7
						c17.2,45.4,115.3,137.4,157.1,116.6c41.7-20.8,366.9-120.2,376.7-148.5c9.8-28.2-83.4-76.1-103.1-50.3
						c-19.7,25.8,200,61.3,214.8,89.5c14.7,28.2,0,1515.4-36.8,1460.1c-36.8-55.2-27.6-1422.7,16.6-1417.2
						c44.2,5.5,217.3,1369.6,217.3,1369.6s27.6,187.7,7.4,184.3c-20.2-3.4-243-22.3-239.2-48.1c3.7-25.8-25.8-64.4,18.4-79.1
						c44.2-14.7,241.9,16.6,283.8,3.7c41.9-12.9,42.5-70.2,108.8-43.2c135.6,13,526.2-29.9,601.5,3.8"
          />
        </motion.g>
      </motion.svg>
    </>
  );
}
