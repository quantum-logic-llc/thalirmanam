import PageTitle from "@/components/sections/pageTitle";
import HeaderOne from "@/components/sections/headers/headerOne";
import FooterOne from "@/components/sections/footers/footerOne";
import AppointmentBooking from "@/components/sections/appointmentBooking";
import { getPageSEO } from "@/lib/seo-config";

export const metadata = getPageSEO('appointments')

export default function Appointments() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Book an Appointment" breadcrumbCurrent="Appointments" />
        <AppointmentBooking />
      </main>
      <FooterOne />
    </>
  );
}
