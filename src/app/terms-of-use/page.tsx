"use client";

import React from "react";
import styles from "./TermsOfUsePage.module.css";

export default function TermsOfUsePage() {
  return (
    <div>
      <section className={styles.termsPage}>
        <div className={styles.termsContainer}>
          <div className={styles.termsContent}>
            <h1 className={styles.termsTitle}>Terms of Use</h1>
            <div className={styles.termsText}>
              <p>
                Welcome to Coligoo. By accessing or using our platform and
                services, you agree to comply with and be bound by the following
                Terms of Use. If you do not agree with these Terms, please do
                not use our services.
              </p>

              <h2>1. Use of the Service</h2>
              <h3>1.1 Eligibility</h3>
              <p>
                You must be at least 18 years old or have the consent of a
                parent or guardian to use our Service. By using our Service, you
                affirm that you meet these requirements.
              </p>

              <h3>1.2 License to Use</h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable license
                to access and use our Service for personal, non-commercial use,
                subject to these Terms.
              </p>

              <h3>1.3 Account</h3>
              <p>
                To access certain features of our Service, you may be required
                to create an account. You are responsible for maintaining the
                confidentiality of your account credentials and for all
                activities under your account.
              </p>

              <h2>2. User Obligations</h2>
              <h3>2.1 Compliance</h3>
              <p>
                You agree to use the Service in accordance with all applicable
                laws, rules, and regulations. You shall not engage in activities
                that may harm or disrupt the functionality of the Service,
                violate the rights of others, or engage in fraudulent or
                unlawful conduct.
              </p>

              <h3>2.2 Accuracy of Information</h3>
              <p>
                You are responsible for providing accurate, current, and
                complete information when using our Service. Any information
                provided by you must be truthful and up to date.
              </p>

              <h3>2.3 Prohibited Activities</h3>
              <p>You agree not to:</p>
              <ul>
                <li>
                  Modify, distribute, or sell any part of the Service without
                  our permission.
                </li>
                <li>
                  Use our Service for any unlawful, harmful, or unethical
                  purposes.
                </li>
                <li>
                  Impersonate any person or entity or falsely state your
                  affiliation with any person or entity.
                </li>
              </ul>

              <h2>3. Privacy</h2>
              <h3>3.1 Privacy Policy</h3>
              <p>
                Your use of our Service is also governed by our Privacy Policy.
                Please review our Privacy Policy to understand how we collect,
                use, and protect your personal data.
              </p>

              <h2>4. Payment and Fees</h2>
              <h3>4.1 Charges</h3>
              <p>
                Some features of the Service may require payment. All payments
                are subject to the terms and conditions of the payment
                processor. You agree to pay all fees associated with the Service
                in a timely manner.
              </p>

              <h3>4.2 Billing</h3>
              <p>
                By providing payment details, you authorize us to charge the
                applicable fees for the services you request. If we are unable
                to process your payment, access to the paid features may be
                restricted.
              </p>

              <h2>5. Termination</h2>
              <h3>5.1 Termination by Us</h3>
              <p>
                We may suspend or terminate your access to the Service if you
                violate these Terms or if we believe it is necessary for the
                protection of the Service or other users.
              </p>

              <h3>5.2 Termination by You</h3>
              <p>
                You may terminate your account at any time by following the
                instructions provided in your account settings.
              </p>

              <h2>6. Disclaimers and Limitations of Liability</h2>
              <h3>6.1 No Warranty</h3>
              <p>
                The Service is provided &quot;as is&quot; without warranties of any kind,
                either express or implied. We do not warrant that the Service
                will meet your expectations or be error-free, uninterrupted, or
                free from viruses or other harmful components.
              </p>

              <h3>6.2 Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, we shall not be liable
                for any direct, indirect, incidental, special, or consequential
                damages arising out of or in connection with your use of the
                Service.
              </p>

              <h2>7. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Coligoo, its
                affiliates, officers, directors, employees, agents, and partners
                from any claims, damages, liabilities, costs, or expenses
                (including legal fees) arising out of your violation of these
                Terms or misuse of the Service.
              </p>

              <h2>8. Modifications</h2>
              <p>
                We reserve the right to modify or update these Terms at any
                time. Any changes to these Terms will be posted on this page
                with an updated effective date. By continuing to use the Service
                after such changes, you accept the modified Terms.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws. Any disputes arising from these Terms shall be
                resolved exclusively in the courts located in [Insert Location].
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions or concerns about these Terms, please
                contact us at: contact@coligoo.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
