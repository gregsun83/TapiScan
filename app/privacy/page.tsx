import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | TapiScan",
  description:
    "How TapiScan collects, uses, and protects information from restaurants and their customers across WhatsApp, reservations, and the TapiScan platform.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="August 7, 2026"
      intro="This Privacy Policy explains what information TapiScan collects, how it is used, and the choices available to restaurants and their customers when using TapiScan's WhatsApp assistant, reservation tools, and dashboards."
    >
      <h2>1. Who this policy covers</h2>
      <p>
        TapiScan (“TapiScan,” “we,” “us,” or “our”) provides a WhatsApp-based digital receptionist
        and reservation platform for restaurants. This policy applies to two groups of people:
        restaurant owners and staff who use TapiScan’s dashboards and tools (“Restaurant Users”),
        and diners who message a restaurant’s WhatsApp number or interact with TapiScan on a
        restaurant’s behalf (“Customers”). It covers information processed through WhatsApp
        conversations, reservation forms, restaurant dashboards, and related services.
      </p>

      <h2>2. Information we collect</h2>
      <p>TapiScan may collect and process the following categories of information:</p>
      <h3>From customers, through WhatsApp and reservation interactions</h3>
      <ul>
        <li>Name and WhatsApp/phone number</li>
        <li>The content of WhatsApp messages sent to or received from a restaurant’s TapiScan-powered number</li>
        <li>Reservation details, including date, time, party size, table or seating preferences, and status (confirmed, modified, cancelled)</li>
        <li>Special requests or notes provided in connection with a reservation or conversation (for example, dietary notes or occasion details)</li>
        <li>Preferences TapiScan may remember to make future interactions more useful, where this feature is enabled by the restaurant</li>
      </ul>
      <h3>From restaurants and their staff</h3>
      <ul>
        <li>Restaurant account information, such as business name, contact details, menu, hours, policies, and promotions</li>
        <li>Authorized staff information needed to manage the account and respond to escalated questions, such as name, role, and contact details</li>
        <li>Operational updates that staff provide to TapiScan for temporary use (for example, a same-day closure or a sold-out item)</li>
      </ul>
      <h3>Automatically, to operate and secure the service</h3>
      <ul>
        <li>Technical and service logs, such as message delivery status, timestamps, and basic diagnostic information needed to run, maintain, and secure TapiScan</li>
      </ul>

      <h2>3. How we use information</h2>
      <p>TapiScan uses the information described above to:</p>
      <ul>
        <li>Operate the WhatsApp assistant, including answering questions about menus, hours, policies, and promotions</li>
        <li>Create, modify, confirm, and cancel reservations on behalf of a restaurant</li>
        <li>Recall relevant customer preferences to make future interactions smoother, where enabled</li>
        <li>Escalate questions the assistant cannot answer to authorized restaurant owners or staff</li>
        <li>Let authorized restaurant staff post temporary operational updates that the assistant can use when responding to customers</li>
        <li>Provide restaurant dashboards and reservation management tools to Restaurant Users</li>
        <li>Provide customer support to restaurants and, where appropriate, to customers</li>
        <li>Maintain, secure, troubleshoot, and improve the reliability of the TapiScan platform</li>
        <li>Meet legal, accounting, fraud-prevention, and safety obligations</li>
      </ul>
      <p>
        We do not use customer conversation data to sell advertising, and we do not sell personal
        information to third parties.
      </p>

      <h2>4. Service providers and infrastructure</h2>
      <p>
        TapiScan relies on third-party providers to deliver the service. These include Meta/WhatsApp,
        which operates the messaging channel TapiScan uses to communicate with customers; cloud
        hosting and database providers, which store and process restaurant and reservation data; and
        AI providers, which power the assistant’s ability to understand and respond to messages.
        These providers process information on TapiScan’s behalf and only to the extent needed to
        provide their services to us. Use of WhatsApp is also subject to Meta’s own terms and privacy
        practices, which apply independently of this policy.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We retain information for as long as reasonably necessary to provide the service, support the
        restaurant relationship, meet legal or accounting obligations, and resolve disputes. Retention
        periods vary depending on the type of information and the purpose it serves — for example,
        active reservation records are generally kept longer than routine technical logs. We do not
        commit to a single fixed retention period across all data types, because the appropriate
        period depends on context. When information is no longer needed for these purposes, we take
        reasonable steps to delete or de-identify it, subject to the legal and operational exceptions
        described in Section 8.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational measures designed to protect
        information from unauthorized access, use, or disclosure. No method of transmission or storage
        is completely secure, and we cannot guarantee absolute security. If we become aware of an
        incident affecting personal information in a way that requires notice under applicable law, we
        will act in accordance with that law.
      </p>

      <h2>7. Your rights and choices</h2>
      <p>
        Depending on your location and applicable law, you may have rights to access, correct, or
        request deletion of your personal information, or to object to certain processing. Customers
        can request correction of inaccurate information (for example, a misspelled name or an
        outdated phone number) or request deletion of their information by contacting us using the
        details in Section 11, or by following the process described on our{" "}
        <a href="/data-deletion">Data Deletion</a> page. Restaurant Users can update account and staff
        information directly through their dashboard or by contacting us. We may need to verify your
        identity or your relationship to a restaurant account before completing a request, and some
        information may need to be retained as described in Section 8.
      </p>

      <h2>8. When we retain information despite a request</h2>
      <p>
        Even after a deletion or correction request, we may retain limited information where
        reasonably necessary for legal compliance, fraud prevention, security, accounting, dispute
        resolution, or other legitimate operational obligations. Where this applies, we limit use of
        the retained information to that purpose.
      </p>

      <h2>9. Children’s privacy</h2>
      <p>
        TapiScan is intended for use by restaurants and their adult customers in connection with
        dining and reservations. TapiScan is not directed at children, and we do not knowingly collect
        personal information from children through the service. If you believe a child has provided us
        with personal information, please contact us so we can address it.
      </p>

      <h2>10. International and service-provider processing</h2>
      <p>
        Because TapiScan relies on WhatsApp, cloud hosting, database, and AI service providers, your
        information may be processed in countries other than the one where you or the restaurant are
        located. Where this occurs, we rely on our service providers’ own safeguards and contractual
        commitments for handling data across borders.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time as TapiScan evolves. When we make changes,
        we will update the “Last updated” date at the top of this page. Continued use of TapiScan after
        an update means you accept the revised policy.
      </p>

      <h2>12. Contact us</h2>
      <p>
        If you have questions about this Privacy Policy, or want to exercise the rights described
        above, contact TapiScan at{" "}
        <a href="mailto:info@tapiscan.com">info@tapiscan.com</a>.
      </p>
    </LegalPageLayout>
  );
}
