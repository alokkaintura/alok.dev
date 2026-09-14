import { Check, Copy, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../../data/profile';
import { copyToClipboard } from '../../utils/helpers';
import { MagneticButton } from '../ui/MagneticButton';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    const ok = await copyToClipboard(profile.contact.email);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-pad py-24 md:py-32">
      <div className="max-site">
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--bg-elevated)] px-6 py-16 md:px-14 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                'radial-gradient(circle at 15% 20%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 40%), radial-gradient(circle at 85% 80%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 35%)',
            }}
            aria-hidden
          />
          <div className="relative z-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
              Contact
            </p>
            <h2 className="font-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl text-balance">
              Have an interesting problem?
              <br />
              Let&apos;s build it.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-[var(--fg-muted)]">
              I&apos;m based in {profile.contact.location}. Reach out for frontend
              product work, React systems, or AI-integrated web experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href={`mailto:${profile.contact.email}`}>
                <Mail size={16} />
                Email me
              </MagneticButton>
              <MagneticButton variant="ghost" onClick={onCopy}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied' : 'Copy email'}
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                href={`tel:${profile.contact.phone.replace(/\s+/g, '')}`}
              >
                <Phone size={16} />
                {profile.contact.phone}
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                href="/Alok_Kaintura_Resume.pdf"
                download
              >
                Resume PDF
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
