import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { barOptions, radarOptions, lineOptions } from './chartOptions';

function App() {
  const [barSeries, setBarSeries] = useState([]);
  const [radarSeries, setRadarSeries] = useState([]);
  const [lineSeries, setLineSeries] = useState([]);

  useEffect(() => {
    // Fetch Bar Chart Data
    fetch('http://127.0.0.1:8000/data/bar-chart')
      .then(response => response.json())
      .then(data => {
        setBarSeries([
          {
            name: 'Applications',
            data: data.map(item => item.Applications)
          }
        ]);
        // Optional: update barOptions.xaxis.categories if needed
        barOptions.xaxis = { categories: data.map(item => item.Date) };
      });

    // Fetch Radar Chart Data
    fetch('http://127.0.0.1:8000/data/radar-chart')
      .then(response => response.json())
      .then(data => {
        setRadarSeries([
          {
            name: 'Candidates',
            data: data.map(item => item.Count)
          }
        ]);
        radarOptions.labels = data.map(item => item["Experience Level"]);
      });

    // Fetch Line Chart Data
    fetch('http://127.0.0.1:8000/data/line-chart')
      .then(response => response.json())
      .then(data => {
        setLineSeries([
          {
            name: 'LinkedIn Applicants',
            data: data.map(item => item["LinkedIn Applicants"])
          }
        ]);
        lineOptions.xaxis = { categories: data.map(item => item.Date) };
      });
  }, []);

  return (
    <div style={{
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
      minHeight: "100vh",
      padding: "2rem",
      color: "#2d3748"
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "2rem",
        color: "#2d3748",
        textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        borderBottom: "2px solid #e2e8f0",
        paddingBottom: "1rem"
      }}>Recruitment Dashboard</h1>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "1.5rem",
        maxWidth: "1600px",
        margin: "0 auto"
      }}>
        {/* Bar Chart */}
        <div style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          padding: "1.5rem",
          transition: "transform 0.3s ease",
          border: "1px solid #edf2f7"
        }}>
          <h3 style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4a5568"
          }}>Applications by Department</h3>
          <ReactApexChart
            options={barOptions}
            series={barSeries}
            type="bar"
            height={350}
          />
        </div>

        {/* Radar Chart */}
        <div style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          padding: "1.5rem",
          transition: "transform 0.3s ease",
          border: "1px solid #edf2f7"
        }}>
          <h3 style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4a5568"
          }}>Candidate Skills Assessment</h3>
          <ReactApexChart
            options={radarOptions}
            series={radarSeries}
            type="radar"
            height={350}
          />
        </div>

        {/* Line Chart */}
        <div style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          padding: "1.5rem",
          transition: "transform 0.3s ease",
          border: "1px solid #edf2f7"
        }}>
          <h3 style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#4a5568"
          }}>Hiring Trends</h3>
          <ReactApexChart
            options={lineOptions}
            series={lineSeries}
            type="line"
            height={350}
          />
        </div>
      </section>

      <footer style={{
        textAlign: "center",
        marginTop: "3rem",
        fontSize: "0.9rem",
        color: "#718096",
        padding: "1rem"
      }}>
        © {new Date().getFullYear()} Recruitment Dashboard • Updated Today
      </footer>
    </div>
  );
}

export default App;
