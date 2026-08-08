import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Terms of Service | TapiScan",
  description:
    "The terms that govern use of TapiScan's WhatsApp assistant, reservation tools, and restaurant dashboards.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="August 7, 2026"
      intro="These Terms of Service ('Terms') govern access to and use of TapiScan's WhatsApp assistant, reservation tools, and restaurant dashboards (the 'Service'). By using the Service, you agree to these Terms."
    >
      <h2>1. Description of the Service</h2>
      <p>
        TapiScan provides a WhatsApp-based digital receptionist for restaurants. The Service can
        answer customer questions about menus, hours, policies, and promotions; create, modify, and
        cancel reservations; remember useful customer preferences where enabled; escalate questions it
        cannot answer to authorized restaurant staff; let authorized staff post temporary operational
        updates; and provide restaurants with dashboards and reservation management tools.
      </p>

      <h2>2. Restaurant customer responsibilities</h2>
      <p>
        Restaurants that use TapiScan (“Restaurant Users”) are responsible for the accuracy of the
        information they provide to us, including menu items, prices, hours, policies, promotions, and
        reservation capacity. TapiScan responds to customers based on the information a restaurant
        supplies and configures; we are not responsible for outcomes that result from inaccurate,
        outdated, or incomplete information provided by the restaurant. Restaurant Users are
        responsible for reviewing escalated questions promptly, keeping operational updates current,
        and ensuring that only authorized staff have access to the dashboard.
      </p>

      <h2>3. End-user / customer use</h2>
      <p>
        Customers who message a restaurant’s TapiScan-powered WhatsApp number do so subject to these
        Terms and to WhatsApp’s own terms of service. Customers should provide accurate information
        when making a reservation or asking a question, since reservation confirmations and responses
        depend on the accuracy of what is provided.
      </p>

      <h2>4. AI-generated responses</h2>
      <p>
        TapiScan uses artificial intelligence to understand and respond to messages. AI-generated
        responses are produced automatically and, while designed to be accurate and helpful, may
        occasionally be incomplete, out of date, or mistaken. TapiScan is designed to escalate
        questions it cannot confidently answer to authorized restaurant staff, but neither TapiScan nor
        the restaurant guarantees that every response will be error-free. Important or time-sensitive
        matters (for example, food allergies or health-related restrictions) should be confirmed
        directly with restaurant staff.
      </p>

      <h2>5. Reservations</h2>
      <p>
        Reservations made, modified, or cancelled through TapiScan are processed based on the
        availability and rules configured by the restaurant. The restaurant is responsible for
        honoring confirmed reservations and for communicating any changes in availability. TapiScan
        facilitates the reservation process but is not the party providing the dining service.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>Send unlawful, abusive, harassing, or fraudulent messages</li>
        <li>Attempt to interfere with, disrupt, or gain unauthorized access to the Service or related systems</li>
        <li>Use the Service to send spam or unsolicited bulk messages</li>
        <li>Misrepresent your identity or your authority to act on behalf of a restaurant</li>
        <li>Use the Service in a way that violates WhatsApp’s or Meta’s terms and policies</li>
      </ul>

      <h2>7. Account and security responsibilities</h2>
      <p>
        Restaurant Users are responsible for maintaining the confidentiality of their dashboard
        credentials and for all activity that occurs under their account. Notify us promptly at{" "}
        <a href="mailto:info@tapiscan.com">info@tapiscan.com</a> if you suspect unauthorized access to
        your account.
      </p>

      <h2>8. Service availability</h2>
      <p>
        We work to keep TapiScan reliable, but the Service depends in part on third-party
        infrastructure, including WhatsApp/Meta, cloud hosting, database, and AI providers. We do not
        guarantee uninterrupted or error-free availability, and the Service may be unavailable at times
        due to maintenance, provider outages, or circumstances outside our control.
      </p>

      <h2>9. Third-party services</h2>
      <p>
        The Service operates through WhatsApp, which is provided by Meta, and relies on other
        third-party infrastructure and AI providers described in our{" "}
        <a href="/privacy">Privacy Policy</a>. Your use of WhatsApp is also governed by Meta’s own
        terms and policies, which we do not control.
      </p>

      <h2>10. Intellectual property</h2>
      <p>
        TapiScan and its underlying software, branding, and content are owned by TapiScan or its
        licensors. Restaurant Users are granted a limited, non-exclusive, non-transferable right to use
        the Service for their own restaurant operations. Nothing in these Terms transfers ownership of
        TapiScan’s intellectual property to you.
      </p>

      <h2>11. Suspension and termination</h2>
      <p>
        We may suspend or terminate access to the Service if a Restaurant User violates these Terms,
        misuses the Service, or if required to do so by WhatsApp/Meta or applicable law. Restaurant
        Users may stop using the Service at any time by contacting us.
      </p>

      <h2>12. Disclaimers</h2>
      <p>
        The Service is provided “as is” and “as available.” To the extent permitted by applicable law,
        TapiScan disclaims warranties of any kind, express or implied, including implied warranties of
        merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that
        the Service, including AI-generated responses, will be error-free or uninterrupted.
      </p>

      <h2>13. Limitation of liability</h2>
      <p>
        To the extent permitted by applicable law, TapiScan will not be liable for indirect,
        incidental, special, consequential, or punitive damages, or for lost profits or lost data,
        arising from your use of the Service. Nothing in these Terms is intended to limit liability
        that cannot be limited or excluded under applicable law.
      </p>

      <h2>14. Changes to these Terms</h2>
      <p>
        We may update these Terms as TapiScan evolves. When we do, we will update the “Last updated”
        date at the top of this page. Continued use of the Service after an update means you accept the
        revised Terms.
      </p>

      <h2>15. Contact us</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:info@tapiscan.com">info@tapiscan.com</a>.
      </p>
    </LegalPageLayout>
  );
}
