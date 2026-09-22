import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
df = pd.read_csv("water_quality_week1.xls")

# Remove extra spaces from column names
df.columns = df.columns.str.strip()

print("Dataset columns:")
print(df.columns.tolist())

# Features used by the model
features = [
    "pH",
    "Turbidity(NTU)",
    "Dissolved_Oxygen(mg/L)",
    "Conductivity(µS/cm)",
    "Nitrate(mg/L)"
]

# Input features
X = df[features]

# Target
y = df["Contamination"]

# Fill missing values
X = X.fillna(X.mean())

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Create Random Forest model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

# Train model
model.fit(X_train, y_train)

# Test accuracy
accuracy = model.score(X_test, y_test)

print("Model Accuracy:", accuracy)

# Save model
joblib.dump(model, "water_quality_model.pkl")

print("====================================")
print("✅ MODEL CREATED SUCCESSFULLY")
print("✅ water_quality_model.pkl created")
print("====================================")