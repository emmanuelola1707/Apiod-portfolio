
import "./Contact.css";

const contactDetails = {
  email: "ajayipraisemap@gmail.com",
  primaryPhone: "+2349065910514",
  secondaryPhone: "+2348156918455",
  whatsapp: "2349065910514",
  tiktok: "https://www.tiktok.com/@apiodvisuals",
};

function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <p className="section-eyebrow">LET'S WORK TOGETHER</p>

      <h2>Have a story worth telling?</h2>

      <p className="contact__description">
        From corporate videos to brand campaigns and social content,
        let's create something that connects with your audience.
      </p>

      <div className="contact__actions">
        <a
          className="contact__button"
          href={`mailto:${contactDetails.email}`}
          target="_blank"
        >
          Email Me ↗
        </a>

        <a
          className="contact__button contact__button--outline"
          href={`https://wa.me/${contactDetails.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp ↗
        </a>
      </div>

      <div className="contact__details">
        <div>
          <span>Email</span>
          <a href={`mailto:${contactDetails.email}`} target="_blank">
            {contactDetails.email}
            
          </a>
        </div>

        <div>
          <span>Phone</span>
          <a href={`tel:${contactDetails.primaryPhone}`} target="_blank">
            09065910514
            
          </a>
        </div>

        <div>
          <span>Alternative phone</span>
          <a href={`tel:${contactDetails.secondaryPhone}`} target="_blank">
            08156918455
           
          </a>
        </div>

        <div>
          <span>Social</span>
          <a
            href={contactDetails.tiktok}
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok — @apiodvisuals ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
