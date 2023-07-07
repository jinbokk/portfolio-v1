import Image from "next/image";
import styles from "./info.module.css";

export default function Info() {
  return (
    <main>
      <section>
        <h1>INFO</h1>
        <h2>my info</h2>
        <div className={styles.container}>
          <div>
            <Image
              src="/profile_image.jpg"
              alt="profile_img"
              width={300}
              height={600}
              style={{
                objectFit: "cover",
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          <div className={styles.infoContainer}>
            <p>
              - 사용자 경험에 대해 큰 가치를 두고 있는 주니어 소프트웨어 개발자
            </p>
            <p>
              - 백엔드 개발자와의 원활한 커뮤니케이션과 그에 따른 높은 생산성에
              가치를 두며 풀스택 개발자를 지향
            </p>
            <p>
              - 자기 계발에 대한 욕구와 도전 의식이 강하여, 새로운 기술 스택
              습득에 매우 능동적
            </p>
            <p>- 판매와 영업 경험을 통해 쌓아온 커뮤니케이션 능력</p>
            <p>
              - 건축학을 전공하며 배운 사용자 중심의 사고와 프로젝트 수행 능력
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
