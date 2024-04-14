from fastapi import FastAPI
from fastapi import status, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import discord
import schemas
import asyncio
from decouple import config
import os
from dotenv import load_dotenv


app = FastAPI()
#FRONTEND = config("frontend")

origins = ["http://localhost:3000"
            ]
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],
)

intents = discord.Intents.default()
intents.message_content = True 
intents.members = True
client = discord.Client(intents=intents)
load_dotenv()
TOKEN = os.getenv("BOT_TOKEN")

@app.on_event("startup")
async def startup_event():
  asyncio.create_task(client.start(TOKEN))
  
@app.get("/")
async def hello_world():
    return {"Hello": str(client.user)}

@app.post("/message", status_code=status.HTTP_200_OK)
async def send_message(message: schemas.SendMessage):
    await client.wait_until_ready()
    channel = client.get_channel(1228350124690767953)
    await channel.send(message.content)
    return {"Hello": str(client.user)}