export default function Services() {
  return (
    <div className="flex flex-col w-full items-start p-8 bg-white">
      <h1 style={{ color: "#222", textAlign: "center", fontSize: "28px" }}>Privacy Policy</h1>
      <p style={{ fontSize: "14px", textAlign: "center" }}>Effective Date: 2025-01-01</p>

      <h2 style={{ color: "#444", borderBottom: "2px solid #ddd", paddingBottom: "5px", fontSize: "24px" }}>1. Information We Collect</h2>
      <p>We collect only the following information:</p>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          <strong>1.1 Cookie for Language Preference:</strong>
          We use a single cookie to store your language preference so the website displays in your selected language. This cookie does not track or store
          personal information.
        </li>
        <li>
          <strong>1.2 Information from the Contact Form:</strong>
          When you submit an inquiry through our contact form, we collect the information you provide, which may include:
          <ul style={{ marginLeft: "20px", listStyleType: "disc" }}>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
            <li>Your business name</li>
          </ul>
          This information is collected solely to respond to your inquiry.
        </li>
      </ul>

      <h2 style={{ color: "#444", borderBottom: "2px solid #ddd", paddingBottom: "5px", fontSize: "24px" }}>2. How We Use the Information</h2>
      <p>
        - The cookie is used only to remember your language preference for a better browsing experience.
        <br />- Information submitted through the contact form is used only to respond to your inquiry or communicate with you regarding your request.
      </p>

      <h2 style={{ color: "#444", borderBottom: "2px solid #ddd", paddingBottom: "5px", fontSize: "24px" }}>3. How We Protect Your Data</h2>
      <p>
        - We do not share, sell, or otherwise distribute the information you provide.
        <br />- All inquiry data is stored securely and retained only as long as necessary to address your inquiry.
      </p>

      <h2 style={{ color: "#444", borderBottom: "2px solid #ddd", paddingBottom: "5px", fontSize: "24px" }}>4. Your Rights</h2>
      <p>
        - You can request that we delete your inquiry data at any time by contacting us at{" "}
        <a href="mailto:info@digitalforge.be" style={{ color: "#007BFF" }}>
          info@digitalforge.be
        </a>
        .<br />- You can disable cookies in your browser settings if you do not wish to use the language preference feature.
      </p>

      <h2 style={{ color: "#444", borderBottom: "2px solid #ddd", paddingBottom: "5px", fontSize: "24px" }}>5. Consent</h2>
      <p>By using the website and submitting the contact form, you consent to our use of your information as described above.</p>

      <h2 style={{ color: "#444", borderBottom: "2px solid #ddd", paddingBottom: "5px", fontSize: "24px" }}>6. Contact Us</h2>
      <p>
        If you have any questions or concerns about this privacy policy, please contact us at{" "}
        <a href="mailto:info@digitalforge.be" style={{ color: "#007BFF" }}>
          info@digitalforge.be
        </a>
        .
      </p>
    </div>
  );
}
