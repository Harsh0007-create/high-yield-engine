// This part is for SEO: Search engines read this first.
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Yield Study Engine | Pareto Principle Exam Analysis',
  description: 'Apply the Pareto Principle to your study materials. Our AI analyzes your PDFs to extract high-yield topics, study techniques, and methods to maximize exam results.',
  keywords: [
    'high-yield study techniques', 
    'pareto principle study method', 
    'exam preparation analysis', 
    'ai study tool', 
    'study smarter not harder',
    'high-yield topics extractor',
    'pareto principle for exams'
  ],
};

// This part is your interactive app:
'use client';

import { useState } from 'react';
import { analyzeHighYield } from './actions';

export default function Home() {
  // ... your existing code remains exactly the same ...
  const [text, setText] = useState('');
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await analyzeHighYield(text, question);
      setResult(response || 'No response from AI.');
    } catch (error) {
      setResult('Error analyzing text.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>High-Yield Engine</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <textarea
          placeholder="Paste your PDF text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
        />
        <input
          placeholder="What do you want to know?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
      {result && (
        <section style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h2>Analysis Result:</h2>
          <p>{result}</p>
        </section>
      )}
    </main>
  );
}