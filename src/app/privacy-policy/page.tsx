"use client";

import React from "react";
import styles from "./PrivacyPolicyPage.module.css";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className={styles.privacyPage}>
        <div className={styles.privacyContainer}>
          <div className={styles.privacyContent}>
            <h1 className={styles.privacyTitle}>Privacy Policy</h1>
            <div className={styles.privacyText}>
              <p>
                At Coligoo, we are committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                protect your personal information when you use our services. By
                accessing or using our platform and services, you agree to the
                terms outlined in this Privacy Policy.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect personal information that you provide to us directly
                when you use our Service. The types of information we collect
                include:
              </p>

              <h3>1.1 Personal Information</h3>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Delivery address</li>
                <li>Payment information (e.g., credit card details)</li>
                <li>Account credentials (username, password)</li>
              </ul>

              <h3>1.2 Usage Data</h3>
              <p>
                We may collect information about how you interact with our
                Service, such as:
              </p>
              <ul>
                <li>IP address</li>
                <li>Device type</li>
                <li>Browser type</li>
                <li>Pages visited</li>
                <li>Time spent on the platform</li>
                <li>Interaction with content</li>
              </ul>

              <h3>1.3 Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and other tracking technologies (e.g., web
                beacons, pixels) to enhance your user experience and gather data
                on how you use our Service. Cookies allow us to remember your
                preferences and track usage patterns.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect for the following purposes:
              </p>

              <h3>2.1 To Provide and Improve Our Services</h3>
              <ul>
                <li>To facilitate the processing of orders and deliveries</li>
                <li>To personalize your experience on our platform</li>
                <li>To manage and respond to customer support inquiries</li>
                <li>
                  To improve the functionality and performance of our Service
                </li>
              </ul>

              <h3>2.2 Marketing and Communication</h3>
              <ul>
                <li>
                  To send promotional emails, offers, and updates about our
                  services (you may opt-out at any time)
                </li>
                <li>
                  To respond to your inquiries and provide customer support
                </li>
              </ul>

              <h3>2.3 Legal and Compliance</h3>
              <ul>
                <li>To comply with legal obligations and resolve disputes</li>
                <li>To enforce our Terms of Use</li>
              </ul>

              <h2>3. Sharing Your Information</h2>
              <p>
                We may share your personal information in the following
                circumstances:
              </p>

              <h3>3.1 Service Providers</h3>
              <p>
                We may share your information with third-party service providers
                who help us with essential business functions, such as payment
                processing, delivery services, and data storage. These third
                parties are obligated to keep your information confidential and
                secure.
              </p>

              <h3>3.2 Business Transfers</h3>
              <p>
                If Coligoo undergoes a business transaction such as a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </p>

              <h3>3.3 Legal Compliance</h3>
              <p>
                We may disclose your personal information to comply with legal
                obligations, enforce our Terms of Use, protect the rights,
                property, or safety of Coligoo, our users, or others, or in
                response to legal requests.
              </p>

              <h2>4. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy or as required by law. After this period, your personal
                information will be deleted or anonymized.
              </p>

              <h2>5. Your Rights and Choices</h2>

              <h3>5.1 Access and Update</h3>
              <p>
                You have the right to access and update your personal
                information. You can do this by logging into your account or
                contacting us directly.
              </p>

              <h3>5.2 Opt-Out of Marketing Communications</h3>
              <p>
                You can opt out of receiving promotional emails and
                communications from us at any time by clicking on the
                &quot;unsubscribe&quot; link in the emails or by contacting us.
              </p>

              <h3>5.3 Data Deletion</h3>
              <p>
                You may request to delete your account and personal information
                by contacting us. Please note that we may need to retain certain
                information for legal or operational reasons.
              </p>

              <h3>5.4 Cookies Management</h3>
              <p>
                You can control and manage cookies through your browser
                settings. However, disabling cookies may affect the
                functionality of certain features on our Service.
              </p>

              <h2>6. Security</h2>
              <p>
                We take the security of your personal information seriously. We
                use industry-standard security measures to protect your data,
                including encryption and secure servers. However, please note
                that no method of transmission over the Internet is 100% secure,
                and we cannot guarantee absolute security.
              </p>

              <h2>7. International Transfers</h2>
              <p>
                If you are accessing our Service from outside of [Insert
                Country], please be aware that your information may be
                transferred to, stored, and processed in a country different
                from your own. By using our Service, you consent to such
                transfers in accordance with this Privacy Policy.
              </p>

              <h2>8. Children&apos;s Privacy</h2>
              <p>
                Our Service is not intended for children under the age of 13. We
                do not knowingly collect personal information from children. If
                we become aware that we have inadvertently collected personal
                information from a child under 13, we will take steps to delete
                that information as soon as possible.
              </p>

              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date. By
                continuing to use the Service after such changes, you accept the
                updated Privacy Policy.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy
                Policy, or if you wish to exercise your rights, please contact
                us at: contact@coligoo.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
