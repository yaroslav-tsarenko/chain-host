import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import GroupComponent5 from "../components/GroupComponent5";
import styles from "./TermsConditions.module.css";

const TermsConditions: FunctionComponent = () => {
  return (
    <div className={styles.termsConditions}>
      <GroupComponent5 />
      <section className={styles.termsAndConditionsEffectWrapper}>
        <div className={styles.termsAndConditionsContainer}>
          <p className={styles.termsAndConditions}>**Terms and Conditions**</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.effectiveDateInsert}>
            *Effective Date: [Insert Date]*
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.agreementToTerms}>**1. Agreement to Terms**</p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.byUsingCompany}>
            - By using [Company Name] services, you agree to be bound by these
            Terms and Conditions. If you do not agree with these terms, you
            should not use our services.
          </p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.eligibility}>**2. Eligibility**</p>
          <p className={styles.blankLine4}>&nbsp;</p>
          <p className={styles.youMustBe}>
            - You must be of legal age in your jurisdiction or have parental or
            guardian consent to use our services. [Company Name] reserves the
            right to deny access to our services to anyone at our discretion.
          </p>
          <p className={styles.blankLine5}>&nbsp;</p>
          <p className={styles.useOfServices}>**3. Use of Services**</p>
          <p className={styles.blankLine6}>&nbsp;</p>
          <p className={styles.companyNameProvides}>
            - [Company Name] provides services for [list specific services]. By
            using our services, you agree not to engage in any unlawful
            activities, including but not limited to [list prohibited
            activities].
          </p>
          <p className={styles.blankLine7}>&nbsp;</p>
          <p className={styles.contentOwnership}>**4. Content Ownership**</p>
          <p className={styles.blankLine8}>&nbsp;</p>
          <p className={styles.anyContentCreated}>
            - Any content created, uploaded, or shared on our platform may be
            subject to copyright and intellectual property rights. You grant
            [Company Name] a non-exclusive, worldwide, royalty-free license to
            use, reproduce, modify, distribute, and display your content as per
            our [link to Content Use Policy].
          </p>
          <p className={styles.blankLine9}>&nbsp;</p>
          <p className={styles.accountInformation}>
            **5. Account Information**
          </p>
          <p className={styles.blankLine10}>&nbsp;</p>
          <p className={styles.youAreResponsible}>
            - You are responsible for the accuracy of the information you
            provide to us, and you agree to keep your account credentials and
            personal information confidential.
          </p>
          <p className={styles.blankLine11}>&nbsp;</p>
          <p className={styles.privacyAndData}>
            **6. Privacy and Data Collection**
          </p>
          <p className={styles.blankLine12}>&nbsp;</p>
          <p className={styles.companyNameCollects}>
            - [Company Name] collects, stores, and processes personal
            information as described in our Privacy Policy. By using our
            services, you consent to this data collection and processing.
          </p>
          <p className={styles.blankLine13}>&nbsp;</p>
          <p className={styles.terminationOfServices}>
            **7. Termination of Services**
          </p>
          <p className={styles.blankLine14}>&nbsp;</p>
          <p className={styles.companyNameReserves}>
            - [Company Name] reserves the right to suspend or terminate
            services, with or without notice, for violations of these Terms and
            Conditions.
          </p>
          <p className={styles.blankLine15}>&nbsp;</p>
          <p className={styles.limitationOfLiability}>
            **8. Limitation of Liability**
          </p>
          <p className={styles.blankLine16}>&nbsp;</p>
          <p className={styles.companyNameIs}>
            - [Company Name] is not liable for any direct, indirect, incidental,
            consequential, or punitive damages. Your use of our services is at
            your own risk.
          </p>
          <p className={styles.blankLine17}>&nbsp;</p>
          <p className={styles.changesToTerms}>
            **9. Changes to Terms and Conditions**
          </p>
          <p className={styles.blankLine18}>&nbsp;</p>
          <p className={styles.companyNameMay}>
            - [Company Name] may update or modify the Terms and Conditions as
            necessary. Users will be notified of changes, and it is their
            responsibility to review the terms periodically.
          </p>
          <p className={styles.blankLine19}>&nbsp;</p>
          <p className={styles.governingLawAnd}>
            **10. Governing Law and Jurisdiction**
          </p>
          <p className={styles.blankLine20}>&nbsp;</p>
          <p className={styles.theseTermsAnd}>
            - These Terms and Conditions are governed by and construed in
            accordance with the laws of [jurisdiction]. Any disputes are subject
            to the exclusive jurisdiction of the courts in [jurisdiction].
          </p>
          <p className={styles.blankLine21}>&nbsp;</p>
          <p className={styles.contactInformation}>
            **11. Contact Information**
          </p>
          <p className={styles.blankLine22}>&nbsp;</p>
          <p className={styles.ifYouHave}>
            - If you have any questions or concerns regarding our Terms and
            Conditions, please contact our support team at [contact email].
          </p>
        </div>
      </section>
      <section className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.subscribeAndSave10Wrapper}>
                <h1 className={styles.subscribeAndSave}>
                  Subscribe and Save 10%
                </h1>
              </div>
              <div className={styles.atChainhostWe}>
                At ChainHost, we value your commitment to the world of crypto
                mining. That's why we offer a "Subscribe and Save" program that
                empowers you to enjoy consistent savings and benefits as a loyal
                member of our community. By subscribing to our services, you not
                only secure your access to state-of-the-art mining solutions but
                also unlock exclusive discounts, priority support, and early
                access to the latest advancements in the crypto mining industry.
                Join our Subscribe and Save program today to embark on a journey
                of continuous savings and mining excellence.
              </div>
            </div>
            <div className={styles.instanceWrapper}>
              <Button
                className={styles.frameItem}
                disableElevation={true}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  borderColor: "#fff",
                  borderRadius: "100px",
                  "&:hover": { borderColor: "#fff" },
                  width: 176,
                  height: 40,
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <footer className={styles.frameFooter}>
          <div className={styles.chainhostParent}>
            <h3 className={styles.chainhost}>ChainHost</h3>
            <div className={styles.thankYouForChoosingChainhoWrapper}>
              <div className={styles.thankYouFor}>
                Thank you for choosing ChainHost as your crypto mining partner.
                Your trust in us drives our commitment to excellence. Feel free
                to explore our services, and if you have any questions, our
                support team is here to assist you. We look forward to being a
                part of your crypto mining journey.
              </div>
            </div>
          </div>
          <div className={styles.storyLinksParent}>
            <div className={styles.storyLinks}>
              <div className={styles.quickLinks}>Quick Links</div>
              <div className={styles.home}>Home</div>
              <div className={styles.ourStory}>Our Story</div>
              <div className={styles.eBooks}>E-books</div>
              <div className={styles.articles}>Articles</div>
              <div className={styles.contact}>Contact</div>
            </div>
            <div className={styles.policyLinks}>
              <div className={styles.legal}>Legal</div>
              <div
                className={styles.termsConditions1}
              >{`Terms & Conditions`}</div>
              <div className={styles.refundPolicy}>Refund Policy</div>
              <div className={styles.cancellation}>Cancellation</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
            </div>
            <div className={styles.getNotifiedParent}>
              <div className={styles.getNotified}>Get Notified!</div>
              <div className={styles.beTheFirst}>
                Be the first to know about the latest developments, market
                insights, and news in the world of cryptocurrencies. Subscribe
                to our newsletter to stay informed and never miss out on
                important updates.
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.provideEmailWrapper}>
                  <div className={styles.provideEmail}>Provide email</div>
                </div>
                <Button
                  className={styles.frameButton}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#0e0e0e",
                    fontSize: "16",
                    background: "#0bd752",
                    borderRadius: "100px",
                    "&:hover": { background: "#0bd752" },
                    width: 200,
                    height: 56,
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default TermsConditions;
