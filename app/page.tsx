export default function HomePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Rheo</h1>
      <h2>Small co-pays should not block basic care.</h2>

      <p>
        RheoPassport helps households cover small healthcare co-pays so people do not skip
        prescriptions, visits, or follow-up care.
      </p>

      <hr style={{ margin: "20px 0" }} />

      <h3>How it works</h3>
      <ul>
        <li>Create a household account</li>
        <li>Receive a yearly balance</li>
        <li>Use credit for co-pays</li>
        <li>Track usage</li>
      </ul>

      <hr style={{ margin: "20px 0" }} />

      <h3>Join the pilot</h3>
      <input placeholder="Your name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <button>Request Invite</button>
    </main>
  );
}
