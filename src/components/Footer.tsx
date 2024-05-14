import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h3 className={styles.chainhost}>ChainHost</h3>
        <div className={styles.appreciation}>
          <div className={styles.thankYouFor}>
            Thank you for choosing ChainHost as your crypto mining partner. Your
            trust in us drives our commitment to excellence. Feel free to
            explore our services, and if you have any questions, our support
            team is here to assist you. We look forward to being a part of your
            crypto mining journey.
          </div>
        </div>
      </div>
      <div className={styles.footerNavigation}>
        <div className={styles.quickLinks}>
          <div className={styles.quickLinks1}>Quick Links</div>
          <div className={styles.home}>Home</div>
          <div className={styles.ourStory}>Our Story</div>
          <div className={styles.eBooks}>E-books</div>
          <div className={styles.articles}>Articles</div>
          <div className={styles.contact}>Contact</div>
        </div>
        <div className={styles.legalLinks}>
          <div className={styles.legal}>Legal</div>
          <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
          <div className={styles.refundPolicy}>Refund Policy</div>
          <div className={styles.cancellation}>Cancellation</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
        <div className={styles.notification}>
          <div className={styles.getNotified}>Get Notified!</div>
          <div className={styles.beTheFirst}>
            Be the first to know about the latest developments, market insights,
            and news in the world of cryptocurrencies. Subscribe to our
            newsletter to stay informed and never miss out on important updates.
          </div>
          <div className={styles.emailInputContainer}>
            <div className={styles.emailInputBorder} />
            <div className={styles.emailInputPlaceholder}>
              <div className={styles.provideEmail}>Provide email</div>
            </div>
            <Button
              className={styles.emailInputContainerChild}
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
  );
};

export default Footer;
