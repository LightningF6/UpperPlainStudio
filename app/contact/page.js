export const metadata = {
  title: "Contact",
  description:
    "Contact Upper Plain Studio about available work, commissions, and studio visits.",
};

export default function ContactPage() {
  return (
    <section className="contact-page page-padding">
      <div className="page-heading contact-heading">
        <p className="eyebrow">Come by, say hello</p>
        <h1>
          For work, studio visits,
          <br />
          or a good question.
        </h1>
      </div>
      <div className="contact-grid">
        <div className="contact-details">
          <p>
            For availability, commissions, or exhibition enquiries, write to the
            studio directly.
          </p>
          <a className="contact-email" href="mailto:debra@upperplainstudio.com">
            debra@upperplainstudio.com
          </a>
          <dl>
            <div>
              <dt>Studio</dt>
              <dd>
                Open by appointment
                <br />
                Aotearoa New Zealand
              </dd>
            </div>
            <div>
              <dt>Follow</dt>
              <dd>
                <a
                  href="https://www.instagram.com/debra.lawson.artist/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram ↗
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <form
          className="contact-form"
          action="mailto:debra@upperplainstudio.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />
          <button type="submit">
            Send enquiry <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note">
            This opens your email app with the message ready to send.
          </p>
        </form>
      </div>
    </section>
  );
}
