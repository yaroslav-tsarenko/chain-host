import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import GroupComponent2 from "../components/GroupComponent2";
import styles from "./RefundPolicy.module.css";

const RefundPolicy: FunctionComponent = () => {
  return (
    <div className={styles.refundPolicy}>
      <GroupComponent2 />
      <section className={styles.refundPolicyInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.refundPolicyEffectiveDatWrapper}>
              <div className={styles.refundPolicyEffectiveContainer}>
                <p className={styles.refundPolicy1}>**Refund Policy**</p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.effectiveDateInsert}>
                  *Effective Date: [Insert Date]*
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.eligibilityForRefunds}>
                  **1. Eligibility for Refunds**
                </p>
                <p className={styles.blankLine2}>&nbsp;</p>
                <p className={styles.customersMayBe}>
                  - Customers may be eligible for a refund in cases where
                  [Company Name] fails to deliver the promised product or
                  service as per the agreed terms and conditions. Eligibility
                  for refunds may vary depending on the specific product or
                  service being offered.
                </p>
                <p className={styles.blankLine3}>&nbsp;</p>
                <p className={styles.refundRequests}>**2. Refund Requests**</p>
                <p className={styles.blankLine4}>&nbsp;</p>
                <p className={styles.toRequestA}>
                  - To request a refund, customers must contact our customer
                  support team within [timeframe], following the delivery or
                  completion of the product or service. Refund requests should
                  be made through [contact details] or [refund request email].
                  Customers are required to provide relevant information for
                  verification.
                </p>
                <p className={styles.blankLine5}>&nbsp;</p>
                <p className={styles.refundProcessingTime}>
                  **3. Refund Processing Time**
                </p>
                <p className={styles.blankLine6}>&nbsp;</p>
                <p className={styles.refundsWillBe}>
                  - Refunds will be processed within [number of days] days of
                  approval, following verification of eligibility and compliance
                  with our Refund Policy.
                </p>
                <p className={styles.blankLine7}>&nbsp;</p>
                <p className={styles.refundMethods}>**4. Refund Methods**</p>
                <p className={styles.blankLine8}>&nbsp;</p>
                <p className={styles.companyNameWill}>
                  - [Company Name] will process refunds using the same payment
                  method used by the customer for the original purchase unless
                  an alternative method is explicitly agreed upon.
                </p>
                <p className={styles.blankLine9}>&nbsp;</p>
                <p className={styles.nonRefundableItemsAnd}>
                  **5. Non-Refundable Items and Services**
                </p>
                <p className={styles.blankLine10}>&nbsp;</p>
                <p className={styles.certainProductsServices}>
                  - Certain products, services, or digital content may be
                  non-refundable. Customers will be informed of the
                  non-refundable nature of such items during the purchase
                  process.
                </p>
                <p className={styles.blankLine11}>&nbsp;</p>
                <p className={styles.disputeResolution}>
                  **6. Dispute Resolution**
                </p>
                <p className={styles.blankLine12}>&nbsp;</p>
                <p className={styles.ifACustomer}>
                  - If a customer disagrees with our refund decision, they may
                  contact our customer support team for dispute resolution.
                  [Company Name] will make a final decision in such cases.
                </p>
                <p className={styles.blankLine13}>&nbsp;</p>
                <p className={styles.changesToThe}>
                  **7. Changes to the Refund Policy**
                </p>
                <p className={styles.blankLine14}>&nbsp;</p>
                <p className={styles.companyNameReserves}>
                  - [Company Name] reserves the right to update or modify the
                  Refund Policy as necessary. Customers will be notified of any
                  changes, and it is their responsibility to review the policy
                  periodically.
                </p>
                <p className={styles.blankLine15}>&nbsp;</p>
                <p className={styles.contactInformation}>
                  **8. Contact Information**
                </p>
                <p className={styles.blankLine16}>&nbsp;</p>
                <p className={styles.ifYouHave}>
                  - If you have any questions or concerns regarding our Refund
                  Policy, please contact our customer support team at [support
                  email].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
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
          <div className={styles.frameParent1}>
            <div className={styles.quickLinksParent}>
              <div className={styles.quickLinks}>Quick Links</div>
              <div className={styles.home}>Home</div>
              <div className={styles.ourStory}>Our Story</div>
              <div className={styles.eBooks}>E-books</div>
              <div className={styles.articles}>Articles</div>
              <div className={styles.contact}>Contact</div>
            </div>
            <div className={styles.legalParent}>
              <div className={styles.legal}>Legal</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.refundPolicy2}>Refund Policy</div>
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

export default RefundPolicy;
