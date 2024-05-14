import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import GroupComponent1 from "../components/GroupComponent1";
import Faq from "../components/Faq";
import styles from "./GetStarted.module.css";

const GetStarted: FunctionComponent = () => {
  return (
    <div className={styles.getStarted}>
      <GroupComponent1 />
      <Faq />
      <section className={styles.frameParent}>
        <div className={styles.subscriptionBackgroundParent}>
          <div className={styles.subscriptionBackground} />
          <div className={styles.subscriptionContent}>
            <div className={styles.subscriptionForm}>
              <div className={styles.subscriptionTitle}>
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
            <div className={styles.userCounter}>
              <Button
                className={styles.userCounterChild}
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
        <footer className={styles.footerInfo}>
          <div className={styles.footerBrand}>
            <h3 className={styles.chainhost}>ChainHost</h3>
            <div className={styles.footerMessage}>
              <div className={styles.thankYouFor}>
                Thank you for choosing ChainHost as your crypto mining partner.
                Your trust in us drives our commitment to excellence. Feel free
                to explore our services, and if you have any questions, our
                support team is here to assist you. We look forward to being a
                part of your crypto mining journey.
              </div>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.quickLinksParent}>
              <div className={styles.quickLinks}>Quick Links</div>
              <div className={styles.home}>Home</div>
              <div className={styles.ourStory}>Our Story</div>
              <div className={styles.eBooks}>E-books</div>
              <div className={styles.articles}>Articles</div>
              <div className={styles.contact}>Contact</div>
            </div>
            <div className={styles.legalLinks}>
              <div className={styles.legal}>Legal</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.refundPolicy}>Refund Policy</div>
              <div className={styles.cancellation}>Cancellation</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.getNotified}>Get Notified!</div>
              <div className={styles.beTheFirst}>
                Be the first to know about the latest developments, market
                insights, and news in the world of cryptocurrencies. Subscribe
                to our newsletter to stay informed and never miss out on
                important updates.
              </div>
              <div className={styles.newsletterForm}>
                <div className={styles.formInput} />
                <div className={styles.emailInput}>
                  <div className={styles.provideEmail}>Provide email</div>
                </div>
                <Button
                  className={styles.newsletterFormChild}
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

export default GetStarted;
