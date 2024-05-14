import { FunctionComponent } from "react";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy: FunctionComponent = () => {
  return (
    <div className={styles.privacyPolicy}>
      <GroupComponent1 />
      <FrameComponent1
        privacyPolicy="**Privacy Policy**"
        informationCollectionAndU="**1. Information Collection and Use**"
        companyNameCollectsAndUse="- [Company Name] collects and uses personal information for specific purposes, including but not limited to [list purposes]."
        typesOfInformationCollect="**2. Types of Information Collected**"
        theTypesOfPersonalInforma="- The types of personal information collected may include, but are not limited to, [list types of information]."
        howInformationIsCollected="**3. How Information is Collected**"
        informationMayBeCollected="- Information may be collected through [list methods of collection], including, but not limited to, [examples of methods]."
        informationSharing="**4. Information Sharing**"
        companyNameMaySharePerson="- [Company Name] may share personal information with [list parties with whom information may be shared] for specific purposes, such as [list purposes]."
        security="**5. Security**"
        companyNameIsCommittedToE="- [Company Name] is committed to ensuring the security of personal information and employs measures such as [list security measures] to protect data from unauthorized access."
        cookiesAndTracking="**6. Cookies and Tracking**"
        companyNameMayUseCookiesA="- [Company Name] may use cookies and similar tracking technologies for purposes including [list purposes]. Users can manage their cookie preferences."
        thirdPartyLinks="**7. Third-Party Links**"
        theCompanyNameWebsiteMayC="- The [Company Name] website may contain links to third-party websites. [Company Name] is not responsible for the privacy practices of these websites and encourages users to review their privacy policies."
        changesToThePrivacyPolicy="**8. Changes to the Privacy Policy**"
        companyNameReservesTheRig="- [Company Name] reserves the right to update or modify the Privacy Policy as necessary. Users will be notified of changes, and it is their responsibility to review the policy periodically."
        ifYouHaveAnyQuestionsOrCo="- If you have any questions or concerns regarding our Privacy Policy, please contact our privacy team at [privacy contact email].
"
      />
      <section className={styles.frameParent}>
        <GroupComponent />
        <FrameComponent />
      </section>
    </div>
  );
};

export default PrivacyPolicy;
