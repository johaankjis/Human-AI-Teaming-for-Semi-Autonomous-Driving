# Human-AI Teaming for Semi-Autonomous Driving

A cutting-edge AI-powered semi-autonomous driving system that combines explainable AI, reinforcement learning, and human-AI collaboration to enhance driving safety and performance.

## 🚗 Overview

This project implements a comprehensive dashboard for visualizing and monitoring a semi-autonomous driving system. It demonstrates how human drivers and AI agents can work together through shared control, leveraging trajectory prediction, reinforcement learning, and explainable AI to create safer and more reliable driving experiences.

## ✨ Key Features

### 🎯 Performance Metrics
- **Lane-Keeping Accuracy**: 30% improvement over baseline
- **Trajectory Prediction**: 25% reliability enhancement
- **Co-Adaptation**: 20% improvement across diverse driving scenarios
- **Safety Score**: 98.5% in multi-agent validation

### 🧠 AI Capabilities
- **Trajectory Prediction**: Driver behavior modeling using LSTM and Transformer architectures
- **Reinforcement Learning**: PPO-based agents for shared control policies
- **Explainable AI Layer**: Decision boundary visualization with SHAP and Grad-CAM interpretability
- **Multi-Scenario Validation**: Comprehensive testing across various driving conditions

### 📊 System Components
1. **Open-Source Driving Datasets**: Integration with Waymo, Argoverse, and nuScenes
2. **Driver Behavior Model**: LSTM and Transformer-based trajectory prediction
3. **RL-Based Agent**: PyTorch-powered PPO implementation for shared control
4. **Explainability Layer**: Decision boundaries and interaction visualization
5. **Validation Framework**: Lane keeping, lane changes, and obstacle avoidance testing

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.2.4](https://nextjs.org/) with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI primitives
- **Charts**: Recharts for performance visualization
- **Forms**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or pnpm package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/johaankjis/Human-AI-Teaming-for-Semi-Autonomous-Driving.git
cd Human-AI-Teaming-for-Semi-Autonomous-Driving
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main dashboard page
├── components/
│   ├── ui/                # Reusable UI components (Radix UI)
│   ├── header.tsx         # Application header
│   ├── metrics-overview.tsx       # Performance metrics cards
│   ├── system-architecture.tsx    # System pipeline visualization
│   ├── explainability-panel.tsx   # AI explainability features
│   ├── performance-charts.tsx     # Training progress charts
│   └── scenario-validation.tsx    # Test scenario results
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Additional stylesheets
└── package.json           # Project dependencies
```

## 🎨 Dashboard Features

### Metrics Overview
Real-time performance metrics showing improvements in:
- Lane-keeping accuracy
- Trajectory prediction reliability
- Co-adaptation across scenarios
- Overall safety scores

### System Architecture
Visual representation of the end-to-end pipeline:
1. Data ingestion from open-source datasets
2. Trajectory prediction using deep learning
3. RL-based agent for shared control
4. Explainable AI layer for transparency
5. Validation framework for testing

### Explainability Panel
Interactive visualization of AI decisions:
- **Decision Boundaries**: View AI confidence and driver override patterns
- **SHAP Analysis**: Feature importance for model interpretability
- **Grad-CAM**: Visual attention heatmaps showing model focus areas

### Performance Charts
Training progress visualization comparing:
- RL agent vs baseline for lane-keeping
- Trajectory prediction vs baseline reliability

### Scenario Validation
Comprehensive testing results across:
- Lane keeping (95% accuracy)
- Lane changes (91% accuracy)
- Obstacle avoidance (93% accuracy)
- Highway merging (87% accuracy)
- Urban navigation (82% accuracy)

## 🔬 Research Background

This system is designed to demonstrate the principles of human-AI teaming in semi-autonomous driving contexts. It leverages:

- **Reinforcement Learning**: Training agents to learn optimal shared control policies
- **Explainable AI**: Providing transparency into AI decision-making processes
- **Multi-Agent Systems**: Modeling interactions between human drivers and AI agents
- **Real-World Datasets**: Utilizing industry-standard driving datasets for realistic scenarios

## 🌐 Deployment

The application can be deployed to Vercel with zero configuration:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/johaankjis/Human-AI-Teaming-for-Semi-Autonomous-Driving)

Or deploy manually:
```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is available for educational and research purposes.

## 🙏 Acknowledgments

- Open-source driving datasets: Waymo, Argoverse, nuScenes
- UI components powered by [Radix UI](https://www.radix-ui.com/)
- Scaffolding generated with [v0.app](https://v0.dev/)

## 📧 Contact

For questions or collaboration opportunities, please open an issue on GitHub.

---

**Note**: This is a demonstration dashboard showcasing the concepts and metrics of a human-AI teaming system for semi-autonomous driving. The data and metrics shown are for illustrative purposes.
