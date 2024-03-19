"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "Is there a demo that I can try?",
    answer:
      "Yes, you can go and try out the demo. The demo bot you see is trained on the sitegpt.ai website content itself. So you can ask any questions related to website in that demo bot and it will answer it.",
  },
  {
    question: "How do I train the chatbot?",
    answer:
      "You can train the chatbot by adding a website link, a sitemap link, a Gitbook link. You can just enter a URL and the chatbot will be trained on all the content present on that URL.",
  },
  {
    question: "How long does the training takes?",
    answer:
      "It depends on the number of pages you are training. But usually, it should be done within a few minutes.",
  },
  {
    question: "What type of content can we use to train the chatbot?",
    answer:
      "You can use any type of content to train the chatbot. The more content you provide, the better the chatbot will be able to answer the questions.",
  },
  {
    question: "Can you embed a chatbot on multiple websites?",
    answer:
      "Yes, you're able to add any chatbot to any number of sites that you want visitors to interact with.",
  },
  {
    question: "Can I customize the chatbot?",
    answer:
      "Yes, you can change the color, chatbot icon, chatbot name, chatbot suggestions, and a lot of other things. You can customize everything you see in the chatbot.",
  },
  {
    question: "How do I add the chatbot to my website?",
    answer:
      "Each chatbot gets its own unique url, you can embed the chatbot on your own site via the embed code we provide. You can even directly link to the chatbot from your site.",
  },
  {
    question: "Do you use open AI models or your own models?",
    answer: "We use Open AI models at the moment.",
  },
  {
    question: "Do you store the chatbot messages?",
    answer:
      "Yes, we store the all the questions that are asked by the visitors and also all the answers that the chatbot replied with. We show all this chat history to the chatbot owner inside the dashboard.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ_E() {
  return (
    <div className="bg-gray-50">
      <div
        className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8"
        style={{ fontFamily: "GeistSans, sans-serif" }}
      >
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-blue-800">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-700">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
