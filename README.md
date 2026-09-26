# 💧 Water Quality Prediction

An AI/ML-powered web application that predicts water contamination using physicochemical parameters, helping determine whether water is safe for consumption.

![Python](https://img.shields.io/badge/Python-3.x-blue) ![scikit-learn](https://img.shields.io/badge/scikit--learn-RandomForest-orange) ![Flask](https://img.shields.io/badge/Flask-Backend-black) ![React](https://img.shields.io/badge/React-Frontend-61DAFB)

## 📖 Overview

Water Quality Prediction is a full-stack machine learning application that analyzes physicochemical water parameters to predict water contamination. The project includes a data preprocessing notebook, a Random Forest classifier trained on water quality readings, and a web-based frontend for users to input parameters and view predictions.

## ✨ Features

- 🧪 Predicts water contamination (safe/unsafe) from physicochemical parameters
- 📊 Data preprocessing & exploratory analysis notebook
- 🤖 Random Forest classifier for predictions
- 🌐 Flask backend API to serve the model
- 💻 React-based frontend for user interaction

## 🛠️ Tech Stack

| Category           | Technologies                          |
|---------------------|----------------------------------------|
| Backend             | Python, Flask                         |
| Machine Learning    | scikit-learn (Random Forest), Pandas, NumPy |
| Data Processing     | Jupyter Notebook (`Preprocessing.ipynb`) |
| Frontend            | React, HTML, CSS, JavaScript          |
| Model Persistence   | Joblib (`.pkl`)                       |

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

## 📊 Dataset

The model is trained on `water_quality_week1.xls`, which contains the following columns:

| Column | Description |
|---|---|
| `pH` | Acidity/alkalinity of the water |
| `Turbidity(NTU)` | Cloudiness of the water |
| `Dissolved_Oxygen(mg/L)` | Oxygen available in the water |
| `Temperature(°C)` | Water temperature |
| `Conductivity(µS/cm)` | Electrical conductivity |
| `Nitrate(mg/L)` | Nitrate concentration |
| `Chloride(mg/L)` | Chloride concentration |
| `Coliform_Count(CFU/100mL)` | Bacterial contamination indicator |
| `Contamination` | Target label — 0 (safe) or 1 (contaminated) |

## 🧠 Model

- **Algorithm:** Random Forest Classifier (`scikit-learn`, `n_estimators=100`)
- **Features used:** `pH`, `Turbidity(NTU)`, `Dissolved_Oxygen(mg/L)`, `Conductivity(µS/cm)`, `Nitrate(mg/L)`
- **Target:** `Contamination` (binary: 0 = safe, 1 = contaminated)
- **Train/test split:** 80/20 (`random_state=42`)
- **Missing values:** filled with column mean
- **Output:** trained model serialized with `joblib` as `water_quality_model.pkl`


## 🚀 Future Enhancements

- 📈 Real-time water quality monitoring integration
- 🗺️ Location-based water quality mapping
- 📱 Mobile application support
- 🔔 Alert system for unsafe water levels
- 🧠 Expand training data and improve model accuracy

## 📄 License

This project is developed for educational and research purposes.
