import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Data Deletion | TapiScan",
  description:
    "How to request deletion of information associated with your TapiScan and WhatsApp interactions.",
  alternates: {
    canonical: "/data-deletion"
  }
};

export default function DataDeletionPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Data Deletion"
      lastUpdated="August 7, 2026"
      intro="If you have messaged a restaurant through TapiScan on WhatsApp, or made a reservation through TapiScan, you can ask us to delete the information associated with that interaction. This page explains how."
    >
      <h2>What information can be deleted</h2>
      <p>You can ask us to delete information such as:</p>
      <ul>
        <li>Your name and WhatsApp/phone number as stored in TapiScan</li>
        <li>The content of WhatsApp conversations between you and a TapiScan-powered restaurant number</li>
        <li>Reservation details associated with you, including date, time, party size, and special requests</li>
        <li>Any preferences TapiScan has remembered about you</li>
      </ul>

      <h2>How to request deletion</h2>
      <p>
        Send a deletion request to{" "}
        <a href="mailto:info@tapiscan.com">info@tapiscan.com</a> with the subject line “Data Deletion
        Request.” In your message, please include:
      </p>
      <ul>
        <li>The WhatsApp/phone number you used to message a TapiScan-powered restaurant</li>
        <li>The name of the restaurant, if known</li>
        <li>Your name, as used in the conversation or reservation</li>
        <li>Any additional detail that helps us locate the right records, such as an approximate reservation date</li>
      </ul>
      <p>
        We need this information to locate the correct records — TapiScan supports many restaurants,
        and we cannot delete data we cannot identify.
      </p>

      <h2>Identity verification</h2>
      <p>
        To protect against fraudulent deletion requests, we may need to verify that you are the person
        associated with the phone number or reservation before completing the request. This may
        involve confirming details tied to the conversation or reservation, or verifying the request
        through the same WhatsApp number.
      </p>

      <h2>What may be retained</h2>
      <p>
        Even after a deletion request, we may need to retain limited information where reasonably
        required for legal compliance, security, fraud prevention, accounting, or other legitimate
        operational obligations. Where this applies, we limit further use of that information to the
        purpose that required it.
      </p>

      <h2>What happens after you submit a request</h2>
      <p>
        We will acknowledge your request, verify your identity as described above, and then locate and
        delete the applicable information, subject to the retention exceptions noted. We will confirm
        with you once the request has been completed. If we are unable to locate records matching the
        details provided, we will let you know what additional information is needed.
      </p>

      <h2>Related information</h2>
      <p>
        For more detail on how TapiScan collects and uses information, see our{" "}
        <a href="/privacy">Privacy Policy</a>. For the terms governing use of the Service, see our{" "}
        <a href="/terms">Terms of Service</a>.
      </p>
    </LegalPageLayout>
  );
}
