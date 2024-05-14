import { FunctionComponent } from "react";
import CommunityStats from "./CommunityStats";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className={styles.excellenceContentWrapper}>
      <div className={styles.excellenceContent}>
        <div className={styles.excellenceDescription}>
          <h1 className={styles.quantifyingOurExcellence}>
            Quantifying our Excellence
          </h1>
          <div className={styles.sinceOurInception}>
            Since our inception, ChainHost has been on a remarkable journey in
            the world of crypto mining. With unwavering commitment, innovation,
            and a dedicated team, we've achieved incredible milestones. We've
            hosted and supported thousands of miners, securing countless
            transactions on the blockchain. Our success is not just in numbers;
            it's in the trust we've earned from our clients, the sustainability
            we've brought to the industry, and the strides we've taken to make
            crypto mining more accessible and profitable for everyone.
          </div>
        </div>
        <div className={styles.communityStatsParent}>
          <CommunityStats
            uSERS="USERS"
            communitySeparator="10,000+"
            withAStrongAndGrowingComm="With a strong and growing community of over 10,000 users, ChainHost has become a trusted name in the world of crypto mining. Our diverse and dedicated user base spans across the globe, and their support and trust are the cornerstones of our success."
          />
          <CommunityStats
            uSERS="SERVICES"
            communitySeparator="20+"
            withAStrongAndGrowingComm="We're proud to offer a comprehensive range of crypto mining services, with over 5 unique offerings designed to meet the diverse needs of our users. From secure hosting solutions to mining pool access, our services are tailored to empower miners."
            propMinWidth="101px"
            propWidth="128px"
          />
          <CommunityStats
            uSERS="REVIEWS"
            communitySeparator="1,000+"
            withAStrongAndGrowingComm="Our commitment to excellence has earned us the trust and admiration of over 1,000 satisfied customers. The feedback and reviews from our users serve as a testament to our dedication to providing top-notch crypto mining hosting services. "
            propMinWidth="96px"
            propWidth="219px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
