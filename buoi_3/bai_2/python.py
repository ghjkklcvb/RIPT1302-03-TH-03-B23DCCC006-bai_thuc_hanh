from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Numbers(BaseModel):
    a: float
    b: float

@app.post("/add")
async def add_numbers(numbers: Numbers):
    return {"result": numbers.a + numbers.b}

@app.post("/subtract")
async def subtract_numbers(numbers: Numbers):
    return {"result": numbers.a - numbers.b}

@app.post("/multiply")
async def multiply_numbers(numbers: Numbers):
    return {"result": numbers.a * numbers.b}

@app.post("/divide")
async def divide_numbers(numbers: Numbers):
    if numbers.b == 0:
        return {"error": "Cannot divide by zero"}
    return {"result": numbers.a / numbers.b}
