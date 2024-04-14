from pydantic import BaseModel
from typing import List, Optional
from datetime import time, date

class SendMessage(BaseModel):
    content: str