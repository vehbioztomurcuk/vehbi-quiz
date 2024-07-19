"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function Anket() {
  const [additionalGame, setAdditionalGame] = useState("");
  const [selectedGame, setSelectedGame] = useState("");
  const [selectedSeller, setSelectedSeller] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      label: "Ek olarak hangi oyunu istiyorsunuz?",
      options: ["Seçenek 1", "Seçenek 2", "Seçenek 3", "Seçenek 4", "Diğer"],
      type: "select",
      state: additionalGame,
      setState: setAdditionalGame,
    },
    {
      label: "Mevcut oyunların hangi ürününü ek olarak eklemeniz gerekiyor?",
      options: ["Oyun 1", "Oyun 2", "Oyun 3", "Oyun 4", "Oyun 5", "Oyun 6", "Oyun 7", "Oyun 8", "Oyun 9", "Oyun 10"],
      type: "select",
      state: selectedGame,
      setState: setSelectedGame,
    },
    {
      label: "Mevcut oyunların hangi satıcısını ek olarak eklemeniz gerekiyor?",
      type: "input",
      state: selectedSeller,
      setState: setSelectedSeller,
    },
  ];

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => (prevQuestion + 1) % questions.length);
  };

  return (
    <div className="fixed bottom-4 right-4 w-[350px] bg-primary text-primary-foreground rounded-lg shadow-lg p-6 z-50">
      <h2 className="text-2xl font-bold mb-4">Ek Talepleriniz</h2>
      <form className="space-y-6">
        {questions[currentQuestion].type === "select" && (
          <div>
            <label htmlFor={`question-${currentQuestion}`} className="block font-medium mb-2">
              {questions[currentQuestion].label}
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <select
                  id={`question-${currentQuestion}`}
                  className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 w-full"
                  value={questions[currentQuestion].state}
                  onChange={(e) => questions[currentQuestion].setState(e.target.value)}
                >
                  <option value="">Seçenek Seçin</option>
                  {questions[currentQuestion].options.map((option, index) => (
                    <option key={index} value={option === "Diğer" ? "other" : option.toLowerCase().replace(/\s/g, "-")}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              {questions[currentQuestion].state === "other" && (
                <div className="flex-1">
                  <input
                    type="text"
                    id={`other-${currentQuestion}`}
                    className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 w-full"
                    placeholder="Diğer oyunu yazın"
                  />
                </div>
              )}
            </div>
          </div>
        )}
        {questions[currentQuestion].type === "input" && (
          <div>
            <label htmlFor={`question-${currentQuestion}`} className="block font-medium mb-2">
              {questions[currentQuestion].label}
            </label>
            <input
              type="text"
              id={`question-${currentQuestion}`}
              className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 w-full"
              placeholder="Satıcı adı ve URL'sini yazın"
              value={questions[currentQuestion].state}
              onChange={(e) => questions[currentQuestion].setState(e.target.value)}
            />
          </div>
        )}
        <div className="flex justify-between">
          <Button className="px-6 py-2 rounded-md flex items-center" onClick={handleNextQuestion}>
            <ArrowRightIcon className="w-4 h-4 mr-2" />
            Sonraki Soru
          </Button>
          <Button className="px-6 py-2 rounded-md">Gönder</Button>
        </div>
      </form>
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
