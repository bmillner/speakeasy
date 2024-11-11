import React, { useState } from 'react';
import { Globe2, Mic, Upload, Volume2, ArrowRightLeft, Copy, Check } from 'lucide-react';
import LanguageSelector from './components/LanguageSelector';
import TranslationBox from './components/TranslationBox';
import Header from './components/Header';
import Pricing from './components/Pricing';

export default function App() {
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('es');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSwapLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
    setInputText(outputText);
    setOutputText(inputText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTranslate = () => {
    // Simulated translation (replace with actual API call)
    setOutputText(inputText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <LanguageSelector
              value={fromLang}
              onChange={setFromLang}
              className="flex-1"
            />
            
            <button
              onClick={handleSwapLanguages}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Swap languages"
            >
              <ArrowRightLeft className="w-5 h-5 text-indigo-600" />
            </button>
            
            <LanguageSelector
              value={toLang}
              onChange={setToLang}
              className="flex-1"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <TranslationBox
              value={inputText}
              onChange={setInputText}
              onTranslate={handleTranslate}
              placeholder="Enter text to translate..."
              actions={
                <>
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`p-2 rounded-full transition-colors ${
                      isRecording ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
                    }`}
                    aria-label="Voice input"
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Upload file"
                  >
                    <Upload className="w-5 h-5" />
                  </button>
                </>
              }
            />

            <TranslationBox
              value={outputText}
              readOnly
              placeholder="Translation will appear here..."
              actions={
                <>
                  <button
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Text to speech"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Copy translation"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </>
              }
            />
          </div>
        </div>

        <Pricing />
      </main>
    </div>
  );
}