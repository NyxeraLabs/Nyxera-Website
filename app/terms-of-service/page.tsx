import { type Metadata } from 'next';
import { SectionCard } from '@/components/section-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteShell } from '@/components/site-shell';
import { buildMetadata } from '@/lib/metadata';

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Terms of Service',
    description: 'Terms governing use of Nyxera Labs website, services, and VectorVue platform.',
    path: '/terms-of-service',
  });
}

export default function TermsOfServicePage() {
  return (
    <SiteShell>
      <div className="page-container grid gap-4 sm:gap-6 3xl:gap-8">
        <SectionCard title="Terms of Service">
          <p>Effective Date: January 1, 2026</p>
          <p>Last Updated: January 1, 2026</p>
          <p>
            Welcome to Nyxera Labs. By accessing or using our website, services, or products, including VectorVue, you agree to
            the following terms.
          </p>
          <p>If you do not agree to these terms, please do not use our services.</p>
        </SectionCard>

        <SectionCard title="1. About Nyxera Labs">
          <p>Nyxera Labs provides:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Security engineering consulting services</li>
            <li>Adversary emulation and validation services</li>
            <li>Security infrastructure advisory</li>
            <li>The VectorVue security validation platform (licensed or operated)</li>
          </ul>
          <p>These Terms govern access to our website and related services.</p>
        </SectionCard>

        <SectionCard title="2. Use of Website">
          <p>You agree to use this website only for lawful purposes.</p>
          <p>You may not:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Attempt to compromise site security</li>
            <li>Perform unauthorized testing or scanning</li>
            <li>Interfere with infrastructure availability</li>
            <li>Extract data through automated means without permission</li>
          </ul>
          <p>Security testing of our systems must follow our Responsible Disclosure policy.</p>
        </SectionCard>

        <SectionCard title="3. Consulting Services">
          <p>
            Engagements for security consulting are governed by separate written agreements or Statements of Work (SOW).
          </p>
          <p>This website does not constitute a binding service contract.</p>
          <p>All consulting services are provided under agreed commercial terms.</p>
        </SectionCard>

        <SectionCard title="4. VectorVue Platform">
          <p>VectorVue is a proprietary security validation platform owned and operated by Nyxera Labs.</p>
          <p>Access may be provided:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Directly to enterprise clients</li>
            <li>Under licensing agreements to partners</li>
          </ul>
          <p>Use of VectorVue is subject to separate contractual terms.</p>
          <p>Unauthorized reproduction, reverse engineering, redistribution, or misuse is prohibited.</p>
        </SectionCard>

        <SectionCard title="5. Intellectual Property">
          <p>
            All content, trademarks, materials, and software associated with Nyxera Labs and VectorVue are the intellectual
            property of Nyxera Labs unless otherwise stated.
          </p>
          <p>You may not copy, modify, distribute, or commercially exploit any material without written authorization.</p>
        </SectionCard>

        <SectionCard title="6. Confidentiality">
          <p>Security communications, vulnerability reports, and engagement materials may contain sensitive information.</p>
          <p>
            Users agree not to disclose confidential materials obtained through interaction with Nyxera Labs without
            authorization.
          </p>
        </SectionCard>

        <SectionCard title="7. Limitation of Liability">
          <p>To the fullest extent permitted by applicable law:</p>
          <p>
            Nyxera Labs shall not be liable for indirect, incidental, consequential, or special damages arising from:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use of this website</li>
            <li>Service interruptions</li>
            <li>Security incidents</li>
            <li>Reliance on informational content</li>
          </ul>
          <p>Services are provided “as is” unless otherwise specified in a signed agreement.</p>
        </SectionCard>

        <SectionCard title="8. No Security Warranty">
          <p>
            While we design and operate systems with a security-first approach, no system can be guaranteed to be completely
            secure.
          </p>
          <p>Use of our services does not constitute a guarantee of risk elimination.</p>
        </SectionCard>

        <SectionCard title="9. Modifications">
          <p>We reserve the right to modify these Terms at any time.</p>
          <p>Updated versions will be published on this page with a revised effective date.</p>
          <p>Continued use constitutes acceptance of revised terms.</p>
        </SectionCard>

        <SectionCard title="10. Governing Law">
          <p>
            These Terms shall be governed by applicable laws in the jurisdiction of incorporation of Nyxera Labs, unless
            otherwise specified in contractual agreements.
          </p>
        </SectionCard>

        <SectionCard title="11. Contact">
          <p>For legal inquiries:</p>
          <p>
            <a href="mailto:founder@nyxera.cloud" className="break-all text-nyxera-electric hover:text-nyxera-text">
              founder@nyxera.cloud
            </a>
          </p>
          <p>For security-related matters:</p>
          <p>
            <a href="mailto:security@nyxera.cloud" className="break-all text-nyxera-electric hover:text-nyxera-text">
              security@nyxera.cloud
            </a>
          </p>
        </SectionCard>
      </div>
      <SiteFooter />
    </SiteShell>
  );
}
