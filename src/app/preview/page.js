import Chatbot from "../chatbot/page";
import "../style/globals.css";

const preview = () => {
  return (
    <>
      <h1>Its a preview page</h1>
      <h1 className="block xl:inline">Data to enrich your</h1>
      <Chatbot />
      <button href="./chatbot">Get Link for Integration</button>
    </>
  );
};

export default preview;
