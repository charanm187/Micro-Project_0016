function Dashboard() {
  return (
    <div className="dashboard">

      <h1>
        Dashboard
      </h1>

      <p>
        Welcome to your Super App dashboard.
      </p>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h3>Profile</h3>
          <p>Manage your profile information.</p>
        </div>

        <div className="dashboard-card">
          <h3>Services</h3>
          <p>Access all available services.</p>
        </div>

        <div className="dashboard-card">
          <h3>Settings</h3>
          <p>Manage your application settings.</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;