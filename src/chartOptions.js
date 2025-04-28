import { dummyData } from "./data";

// Common Chart Theme Settings
const chartTheme = {
  fontFamily: "'Poppins', 'Segoe UI', sans-serif",
  background: "transparent",
  foreColor: "#4a5568",
  toolbar: {
    show: false
  },
  animations: {
    enabled: true,
    easing: 'easeinout',
    speed: 800,
    animateGradually: {
      enabled: true,
      delay: 150
    },
    dynamicAnimation: {
      enabled: true,
      speed: 350
    }
  }
};

// Color Palette
const colors = {
  primary: "#4361ee",
  secondary: "#3f37c9",
  success: "#4cc9f0",
  accent: "#f72585",
  neutral: "#4a5568"
};

// Format dates - assumes input dates are in format YYYY-MM-DD or similar
const formatDate = (dateString) => {
  const options = { month: 'short', day: 'numeric' };
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  } catch (e) {
    return dateString; // fallback to original string if parsing fails
  }
};

// Bar Chart Options and Series
export const barOptions = {
  chart: {
    id: 'applications-bar',
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
    fontFamily: chartTheme.fontFamily,
    background: chartTheme.background,
    foreColor: chartTheme.foreColor,
    animations: chartTheme.animations
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: '60%',
      distributed: false,
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: dummyData.bar_chart_data.map(item => formatDate(item.Date)),
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        fontSize: '12px'
      },
      rotate: 0
    }
  },
  yaxis: {
    labels: {
      formatter: function(val) {
        return val.toFixed(0)
      }
    }
  },
  title: {
    text: 'Daily Applications',
    align: 'center',
    style: {
      fontSize: '16px',
      fontWeight: 600,
      color: colors.neutral
    }
  },
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 4
  },
  tooltip: {
    theme: 'light',
    style: {
      fontSize: '12px'
    },
    x: {
      formatter: function(val) {
        // Show full date in tooltip (with year)
        const fullDate = dummyData.bar_chart_data[val-1]?.Date;
        if (fullDate) {
          const date = new Date(fullDate);
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        }
        return val;
      }
    }
  },
  colors: [colors.primary]
};

export const barSeries = [{
  name: 'Applications',
  data: dummyData.bar_chart_data.map(item => item.Applications)
}];

// Radar Chart Options and Series
export const radarOptions = {
  chart: {
    id: 'experience-radar',
    type: 'radar',
    height: 350,
    toolbar: {
      show: false
    },
    fontFamily: chartTheme.fontFamily,
    background: chartTheme.background,
    foreColor: chartTheme.foreColor,
    animations: chartTheme.animations,
    dropShadow: {
      enabled: true,
      blur: 3,
      opacity: 0.2
    }
  },
  title: {
    text: 'Experience Distribution',
    align: 'center',
    style: {
      fontSize: '16px',
      fontWeight: 600,
      color: colors.neutral
    }
  },
  labels: dummyData.radar_chart_data.map(item => item['Experience Level']),
  dataLabels: {
    enabled: true,
    background: {
      enabled: true,
      borderRadius: 2
    }
  },
  plotOptions: {
    radar: {
      size: 140,
      polygons: {
        strokeColors: '#e9e9e9',
        fill: {
          colors: ['#f8f8f8', '#fff']
        }
      }
    }
  },
  yaxis: {
    show: false
  },
  markers: {
    size: 5,
    hover: {
      size: 7
    }
  },
  tooltip: {
    theme: 'light',
    y: {
      formatter: function(val) {
        return val + ' applicants'
      }
    }
  },
  colors: [colors.accent]
};

export const radarSeries = [{
  name: 'Applicants',
  data: dummyData.radar_chart_data.map(item => item.Count)
}];

// Line Chart Options and Series
export const lineOptions = {
  chart: {
    id: 'linkedin-line',
    type: 'line',
    height: 350,
    toolbar: {
      show: false
    },
    fontFamily: chartTheme.fontFamily,
    background: chartTheme.background,
    foreColor: chartTheme.foreColor,
    animations: chartTheme.animations,
    zoom: {
      enabled: false
    }
  },
  xaxis: {
    categories: dummyData.line_chart_data.map(item => formatDate(item.Date)),
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  },
  yaxis: {
    labels: {
      formatter: function(val) {
        return val.toFixed(0)
      }
    }
  },
  title: {
    text: 'LinkedIn Applications Trend',
    align: 'center',
    style: {
      fontSize: '16px',
      fontWeight: 600,
      color: colors.neutral
    }
  },
  stroke: {
    curve: 'smooth',
    width: 4
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 8
    }
  },
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 4
  },
  tooltip: {
    theme: 'light',
    marker: {
      show: true
    },
    x: {
      formatter: function(val) {
        // Show full date in tooltip (with year)
        const fullDate = dummyData.line_chart_data[val-1]?.Date;
        if (fullDate) {
          const date = new Date(fullDate);
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        }
        return val;
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.3,
      opacityFrom: 0.9,
      opacityTo: 0.5,
      stops: [0, 100],
      colorStops: []
    }
  },
  colors: [colors.secondary]
};

export const lineSeries = [{
  name: 'LinkedIn Applicants',
  data: dummyData.line_chart_data.map(item => item['LinkedIn Applicants'])
}];