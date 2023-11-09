import React from 'react'
import '../style/globals.css'
const Chatbot = () => {
  return (
    <div>

<div className="w-full m-10 p-10">
  {/*chatbot header div*/}
  <div className="bg-white shadow-lg rounded-lg max-w-md">
    {/*chatbot header div*/}

    <div className="border-b-2 px-2 py-4">
      {/*chatbot body div*/}

      <div className="inline-flex items-center">
        <img src="src\app\Screenshot 2023-11-06 134106.png" alt="img" className="w-8" />
        <span className="ml-4">SiteGinnie.AI</span>
      </div>

      <div className="h-80 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2">
        {/*chatbot text*/}
        <div className="flex-col items-start">
          <span className="bg-blue-500 px-4 py-2 text-white rounded-b-xl rounded-tl-xl mb-2 mt-2">How I can help you?</span>
        </div>

        {/*chatbot user text*/}
        <div className="flex flex-col items-end">
          <span className="bg-gray-500 px-4 py-2 text-white mt-2 mb-2 rounded-b-xl rounded-tr-xl">Good place for study</span>
        </div>
        <div className="border-t-2 flex items-center py-4 px-2">
          <input type="text" placeholder="Please type here....." className="flex-1 rounded-lg px-4 py-2 border-2 mr-2"></input>
          <button type="submit" className="relative right-16">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Chatbot;