import PageTitle from "@/components/sections/pageTitle";
import Link from "next/link";
import HeaderOne from "@/components/sections/headers/headerOne";
import FooterOne from "@/components/sections/footers/footerOne";

export default function ParentsCorner() {
  return (
    <>
      <HeaderOne />
      <PageTitle title="Parent's Corner" />
      <div className="container mx-auto py-12">
        <div className="prose lg:prose-xl">
          <p>
            Welcome to the Parent's Corner! This section is dedicated to providing resources and information for parents of children with special needs. Here you will find articles, guides, and other materials to help you support your child's development.
          </p>
          <ul>
            <li><a href="https://thalirmanam.in/wp-content/uploads/2022/09/LANGUAGE-STIMULATION-HANDOUTS.pdf" target="_blank" rel="noopener noreferrer">Language Stimulation Handouts</a></li>
            <li><a href="https://thalirmanam.in/wp-content/uploads/2022/09/Disability-certification-information.pdf" target="_blank" rel="noopener noreferrer">Disability Certification Information</a></li>
            <li><a href="https://thalirmanam.in/wp-content/uploads/2022/09/A-guide-for-parents-and-carers-of-children-with-Down-Syndrome.pdf" target="_blank" rel="noopener noreferrer">A guide for parents and carers of children with Down Syndrome</a></li>
          </ul>
          <p>
            For more articles and information, please visit our <Link href="/blog">blog</Link>.
          </p>
        </div>
      </div>
      <FooterOne />
    </>
  );
}
