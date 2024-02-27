"use client";

import React, { useEffect, useRef } from "react";

interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: QueueItem[] = [];
  frameRequest: number = 0;
  frame: number = 0;
  resolve: () => void = () => {};

  constructor({ el }: { el: HTMLElement }) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 100); // Adjusted range for start
      const end = start + Math.floor(Math.random() * 100); // Adjusted range for end
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update(): void {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const ScrambleText: React.FC<{ words: string[] }> = ({ words }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const fx = useRef<TextScramble | null>(null);

  useEffect(() => {
    if (textRef.current) {
      fx.current = new TextScramble({ el: textRef.current });
    }
  }, []);

  useEffect(() => {
    if (fx.current) {
      let counter = 0;

      const nextWord = () => {
        fx.current!.setText(words[counter]).then(() => {
          setTimeout(() => {
            counter = (counter + 1) % words.length;
            nextWord();
          }, 800);
        });
      };

      nextWord();

      return () => {
        if (fx.current) {
          cancelAnimationFrame(fx.current.frameRequest);
        }
      };
    }
  }, [words]);

  return <span ref={textRef}></span>;
};

export default ScrambleText;
