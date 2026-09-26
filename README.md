# 💧 Water Quality Prediction

An AI/ML-powered web application that predicts water quality and potability using physicochemical parameters, helping determine whether water is safe for consumption.

![Python](https://img.shields.io/badge/Python-3.x-blue) ![scikit-learn](https://img.shields.io/badge/scikit--learn-ML-orange) ![Flask](https://img.shields.io/badge/Flask-Backend-black) ![React](https://img.shields.io/badge/React-Frontend-61DAFB)

## 📖 Overview

Water Quality Prediction is a full-stack machine learning application that analyzes physicochemical water parameters — such as pH, hardness, turbidity, and dissolved solids — to predict whether a water sample is safe for consumption. The project combines data preprocessing, model training, and a web interface to deliver fast, accurate quality assessments through an intuitive dashboard.

The platform enables users to input water sample parameters, receive instant ML-based predictions, and view the underlying data insights — making water safety analysis accessible and easy to interpret.

## ✨ Features

- 🧪 Predicts water potability from physicochemical parameters
- 📊 Data preprocessing & exploratory analysis notebook
- 🤖 Machine learning model for classification
- 🌐 REST API backend for serving predictions
- 💻 Clean, responsive web interface
- 📈 Visual insights into water quality indicators

## 🛠️ Tech Stack

| Category              | Technologies                        |
|------------------------|--------------------------------------|
| Backend                | Python, Flask / FastAPI             |
| Machine Learning       | scikit-learn, Pandas, NumPy         |
| Data Processing        | Jupyter Notebook                    |
| Frontend               | React, HTML/CSS, JavaScript         |
| Model Persistence      | Pickle / Joblib                     |

## 📸 Application Preview

### 🏠 Home
<img width="1209" height="762" alt="image" src="https://github.com/user-attachments/assets/3f41bc65-1382-469a-b2f5-5f6c5608a124" />


### 📄 Prediction Page if Water is Safe
<img width="1442" height="828" alt="image" src="https://github.com/user-attachments/assets/2c13526a-be5a-4a28-af53-64d8f1e301e8" />

### 📄 Prediction Page if Water is contaminated
<img width="1401" height="818" alt="image" src="https://github.com/user-attachments/assets/dfe21e9f-6de5-4501-8525-0565cb51040c" />


## ⚙️ Installation

**1. Clone the repository**
```bash
git clone https://github.com/MeghanaSri-A/water-quality-prediction.git
cd water-quality-prediction
```

**2. Set up the backend**
```bash
cd backend
python -m venv venv
```

Activate the virtual environment:

Windows
```bash
venv\Scripts\activate
```

macOS/Linux
```bash
source venv/bin/activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

**3. Set up the frontend**
```bash
cd ../frontend
npm install
```

## ▶️ Running the Project

Start the backend server:
```bash
python app.py
```

Start the frontend:
```bash
npm start
```

## 📂 Project Structure
water-quality-prediction/
│
├── backend/
│ ├── model/
│ ├── app.py
│ └── requirements.txt
│
├── frontend/
├── Preprocessing.ipynb
├── .gitignore
└── README.md


## 🚀 Future Enhancements

- 📈 Real-time water quality monitoring integration
- 🗺️ Location-based water quality mapping
- 📱 Mobile application support
- 🔔 Alert system for unsafe water levels
- 🧠 Improved model accuracy with deep learning

## 📄 License

This project is developed for educational and research purposes.
