import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    ph: "",
    dissolvedOxygen: "",
    conductivity: "",
    turbidity: "",
    nitrate: ""
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post(
  "https://water-quality-prediction-br3a.onrender.com/predict",
  formData
);

      setResult(response.data);
    } catch (error) {
      console.error(error);

      setError(
        "Unable to connect to the prediction server. Please make sure the Flask backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      ph: "",
      dissolvedOxygen: "",
      conductivity: "",
      turbidity: "",
      nitrate: ""
    });

    setResult(null);
    setError("");
  };

  return (
    <div className="app">

      {/* Background decoration */}
      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <main className="dashboard">

        {/* Header */}
        <header className="header">

          <div className="brand">
            <div className="brand-icon">💧</div>

            <div>
              <h1>HydroGuard AI</h1>
              <p>Intelligent Water Quality Monitoring</p>
            </div>
          </div>

          <div className="status">
            <span className="status-dot"></span>
            ML System Online
          </div>

        </header>


        {/* Main content */}
        <section className="content">

          {/* Left information section */}
          <div className="intro">

            <span className="badge">
              AI-POWERED ANALYSIS
            </span>

            <h2>
              Water Quality
              <span> Prediction</span>
            </h2>

            <p className="description">
              Analyze key water-quality parameters using a
              machine learning model and instantly identify
              potential contamination.
            </p>


            <div className="feature-list">

              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div>
                  <strong>Instant Analysis</strong>
                  <p>Get predictions in seconds</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">🧠</div>
                <div>
                  <strong>Random Forest ML</strong>
                  <p>Classification-based prediction</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">🛡️</div>
                <div>
                  <strong>Safety Assessment</strong>
                  <p>Detect potential contamination</p>
                </div>
              </div>

            </div>

          </div>


          {/* Prediction form */}
          <div className="prediction-card">

            <div className="card-header">
              <div>
                <h3>Water Parameters</h3>
                <p>Enter the measured values below</p>
              </div>

              <div className="water-icon">
                💧
              </div>
            </div>


            <form onSubmit={handleSubmit}>

              <div className="input-grid">

                <div className="input-group">
                  <label>pH Level</label>

                  <div className="input-wrapper">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="14"
                      name="ph"
                      placeholder="7.2"
                      value={formData.ph}
                      onChange={handleChange}
                      required
                    />

                    <span>pH</span>
                  </div>
                </div>


                <div className="input-group">
                  <label>Dissolved Oxygen</label>

                  <div className="input-wrapper">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      name="dissolvedOxygen"
                      placeholder="6.5"
                      value={formData.dissolvedOxygen}
                      onChange={handleChange}
                      required
                    />

                    <span>mg/L</span>
                  </div>
                </div>


                <div className="input-group">
                  <label>Conductivity</label>

                  <div className="input-wrapper">
                    <input
                      type="number"
                      min="0"
                      name="conductivity"
                      placeholder="300"
                      value={formData.conductivity}
                      onChange={handleChange}
                      required
                    />

                    <span>µS/cm</span>
                  </div>
                </div>


                <div className="input-group">
                  <label>Turbidity</label>

                  <div className="input-wrapper">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      name="turbidity"
                      placeholder="1.2"
                      value={formData.turbidity}
                      onChange={handleChange}
                      required
                    />

                    <span>NTU</span>
                  </div>
                </div>


                <div className="input-group full-width">
                  <label>Nitrate Concentration</label>

                  <div className="input-wrapper">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      name="nitrate"
                      placeholder="5.0"
                      value={formData.nitrate}
                      onChange={handleChange}
                      required
                    />

                    <span>mg/L</span>
                  </div>
                </div>

              </div>


              <div className="button-row">

                <button
                  type="submit"
                  className="predict-button"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Analyze Water Quality
                      <span>→</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="reset-button"
                  onClick={handleReset}
                >
                  Reset
                </button>

              </div>

            </form>


            {/* Error */}
            {error && (
              <div className="error-message">
                ⚠️ {error}
              </div>
            )}


            {/* Result */}
            {result && (
              <div
                className={`result ${
                  result.quality === "Safe"
                    ? "safe"
                    : "danger"
                }`}
              >

                <div className="result-icon">
                  {result.quality === "Safe" ? "✓" : "!"}
                </div>

                <div className="result-content">

                  <span className="result-label">
                    ANALYSIS RESULT
                  </span>

                  <h3>
                    {result.quality === "Safe"
                      ? "Water Quality is Safe"
                      : "Potential Contamination Detected"}
                  </h3>

                  <p>
                    Status: <strong>{result.alert}</strong>
                  </p>

                </div>

              </div>
            )}

          </div>

        </section>


        {/* Footer */}
        <footer className="footer">

          <span>
            Powered by Random Forest Machine Learning
          </span>

          <span>•</span>

          <span>
            Flask + React
          </span>

          <span>•</span>

          <span>
            Real-time Prediction
          </span>

        </footer>

      </main>

    </div>
  );
}

export default App;