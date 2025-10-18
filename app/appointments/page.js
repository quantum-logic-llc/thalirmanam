import ContactAddress from "@/components/sections/contactAddress";
import ContactForm from "@/components/sections/contactForm";
import GoogleMap from "@/components/sections/googleMap";
import PageTitle from "@/components/sections/pageTitle";
import HeaderOne from "@/components/sections/headers/headerOne";
import FooterOne from "@/components/sections/footers/footerOne";

export default function Appointments() {
  return (
    <>
      <HeaderOne />
      <PageTitle title="Appointments" />
      <ContactForm />
      <ContactAddress />
      <GoogleMap />
      <FooterOne />
    </>
  );
}
