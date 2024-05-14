import { FunctionComponent } from "react";
import SustainabilityPoints from "./SustainabilityPoints";
import styles from "./SustainabilityDescription.module.css";

const SustainabilityDescription: FunctionComponent = () => {
  return (
    <div className={styles.sustainabilityDescription}>
      <div className={styles.sustainabilityDescriptionChild} />
      <div className={styles.ourCommitmentToSustainabiliParent}>
        <h1 className={styles.ourCommitmentTo}>
          Our Commitment to Sustainability
        </h1>
        <div className={styles.atChainhostWe}>
          At ChainHost, we are dedicated to sustainable crypto mining practices
          that benefit our users and the environment. We take pride in our
          responsibility to reduce our carbon footprint and contribute
          positively to the blockchain ecosystem.
        </div>
      </div>
      <SustainabilityPoints
        sustainabilityCircles="/rectangle-77@2x.png"
        sustainabilitySeparator="90%"
        energyEfficientOperations="Energy-Efficient Operations,  reducing our carbon emissions."
      />
      <SustainabilityPoints
        sustainabilityCircles="/rectangle-77-1@2x.png"
        sustainabilitySeparator="70%"
        energyEfficientOperations="Renewable Energy Usage, eco-friendly mining operations"
        propWidth="160px"
      />
    </div>
  );
};

export default SustainabilityDescription;
