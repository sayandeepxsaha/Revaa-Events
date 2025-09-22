import { NavbarDemo } from "@/components/Navbar";

const TermsAndConditions = () => {
  return (
    <div>
      <NavbarDemo/>
    <div className="mt-8 mb-15"></div>
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-6 text-gray-800 font-[Quicksand]">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">1. Booking & Confirmation</h2>
         <ul className="list-disc list-inside space-y-1">
          <li>All event bookings are confirmed only after receiving a written agreement and advance payment as specified.</li>
          <li>Revaa Events reserves the right to decline or cancel any booking if necessary.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          2. Payments & Refunds
        </h2>
         <ul className="list-disc list-inside space-y-1">
         <li>A non-refundable advance is required at the time of booking.</li>
         <li>Final payment must be cleared before the event date.</li>
         <li>Refunds (if any) are subject to company policies and will not cover third-party vendor charges.</li>
      </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. Client Responsibilitiess</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Clients must provide accurate event details, guest count, and special requirements at least 15 days before the event.</li>
          <li>Any last-minute changes may incur additional costs and are subject to availability.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Use of Third-Party Services</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Revaa Events may engage trusted third-party vendors (decor, catering, entertainment, etc.) for successful event execution.
          </li>
          <li>
            We are not liable for delays or issues directly caused by such vendors, though we will ensure best efforts for smooth coordination.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Cancellations & Rescheduling</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
           Cancellations must be communicated in writing.
          </li>
          <li>
            Rescheduling is subject to date availability and may involve additional costs.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. Liability & Safety
        </h2>
        <ul className="list-disc list-inside space-y-1">
            <li>
                While we ensure high-quality services, Revaa Events is not liable for unforeseen incidents, accidents, or damages during the event.
                </li>
            <li>
                Clients are responsible for guest safety and compliance with venue rules.
            </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          7. Intellectual Property & Promotions
        </h2>
        <ul className="list-disc list-inside space-y-1">
            <li>
               Revaa Events may use photos/videos from events for promotional purposes unless the client objects in writing.
            </li>
            <li>
                We may use photos or videos from events for promotional purposes unless otherwise agreed in writing.
            </li>
            <li>
                All branding, designs, and concepts created by Revaa Events remain the company’s intellectual property.
            </li>
        </ul>
      </section>


      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>
        <div>
          For questions or concerns, please reach out to us via{" "}
          <div>
            <p>
              Email:{" "}
              <a
                href="official.revaa.event@gmail.com"
                className="text-blue-600 underline "
              >
                official.revaa.event@gmail.com
              </a>{" "}
              /
              <a
                href="mailto:signaturefactory20@gmail.com"
                className="text-blue-600 underline "
              >
                hello@revaaevent.com
              </a>
            </p>
            <p>
              Phone/Whatsapp:{" "}
              <a href="phone:90457008873" className="text-blue-600 underline ">
                +91 90457 008873
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default TermsAndConditions;