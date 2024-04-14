export const sendMessage =async (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    var input = document.getElementById("messageText") as HTMLInputElement;
    var message = {"content": input.value};
    try {
        const response = fetch('http://127.0.0.1:8000/message',
      {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(message),
      }
      
    )
    } catch (error) {
        console.error(error);
        
    }
    
  }